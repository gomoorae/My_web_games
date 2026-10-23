#!/usr/bin/env python3
"""Prepare verified YuE2 masters for game loops without changing game assets.

Requires NumPy and either ffmpeg or macOS afconvert. Automated boundaries are
technical candidates, not a claim that the music or its loop has been auditioned.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import wave

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_INPUT = ROOT / "source_assets/audio/yue2"
TRACKS = ("journey", "battle", "boss", "ending")
REVISION = 1


def sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def read_pcm(path):
    """Read integer PCM WAV, including packed signed 24-bit model output."""
    with wave.open(str(path), "rb") as handle:
        channels, width, rate, frames, compression, _ = handle.getparams()
        if compression != "NONE" or channels not in (1, 2) or width not in (1, 2, 3, 4):
            raise ValueError("Expected mono/stereo 8, 16, 24 or 32-bit integer PCM WAV")
        raw = handle.readframes(frames)
    if len(raw) != frames * channels * width:
        raise ValueError("Truncated WAV samples")
    if width == 1:
        pcm = (np.frombuffer(raw, np.uint8).astype(np.float64) - 128) / 128
    elif width == 3:
        packed = np.frombuffer(raw, np.uint8).reshape(-1, 3).astype(np.int32)
        signed = packed[:, 0] | (packed[:, 1] << 8) | (packed[:, 2] << 16)
        signed = (signed ^ 0x800000) - 0x800000
        pcm = signed.astype(np.float64) / 8388608
    else:
        pcm = np.frombuffer(raw, dtype=f"<i{width}").astype(np.float64) / (2 ** (8 * width - 1))
    pcm = pcm.reshape(-1, channels)
    if channels == 1:
        pcm = np.repeat(pcm, 2, axis=1)
    if frames < rate * 8 or not np.isfinite(pcm).all():
        raise ValueError("Master must contain at least eight seconds of finite samples")
    return pcm, rate, {"channels": channels, "sampleWidthBytes": width, "sampleRate": rate,
                       "frames": frames, "duration": frames / rate}


def amplitude(pcm):
    peak = float(np.max(np.abs(pcm)))
    rms = float(np.sqrt(np.mean(pcm ** 2)))
    return {"peak": peak, "rms": rms, "rmsDbfs": float(20 * np.log10(max(rms, 1e-12)))}


def silence_bounds(pcm, rate, max_trim=3.0):
    """Trim only quiet exterior windows, retaining 50 ms and limiting each end."""
    window = max(1, round(rate * .01))
    count = len(pcm) // window
    energy = np.sqrt(np.mean(pcm[:count * window].reshape(count, window, 2) ** 2, axis=(1, 2)))
    reference = float(np.percentile(energy, 90))
    if reference < 1e-5:
        raise ValueError("Master is silent or too quiet to prepare reliably")
    threshold = max(10 ** (-60 / 20), reference * 10 ** (-42 / 20))
    active = np.flatnonzero(energy >= threshold)
    if not len(active):
        raise ValueError("No active music detected")
    margin = round(rate * .05)
    limit = min(round(max_trim * rate), len(pcm) // 10)
    start = min(limit, max(0, int(active[0]) * window - margin))
    end = max(len(pcm) - limit, min(len(pcm), (int(active[-1]) + 1) * window + margin))
    return start, end, {"method": "10 ms stereo RMS; max(-60 dBFS, p90 RMS minus 42 dB)",
                        "thresholdAmplitude": threshold, "retainedMarginSeconds": .05,
                        "maximumTrimPerSideSeconds": limit / rate}


def circular_crossfade(pcm, rate, seconds):
    length = round(seconds * rate)
    if length < 2 or length * 4 >= len(pcm):
        raise ValueError("Crossfade must be positive and shorter than one quarter of the trimmed cue")
    # The blend goes from the original tail to its head. Following the blend,
    # playback wraps to head[length], which is adjacent to blend's final sample.
    weight = np.sin(np.linspace(0, np.pi / 2, length)) ** 2
    blend = pcm[-length:] * (1 - weight[:, None]) + pcm[:length] * weight[:, None]
    return np.concatenate((pcm[length:-length], blend)), length


def encoder_module():
    spec = importlib.util.spec_from_file_location("last_delivery_score", ROOT / "scripts/compose-music.py")
    module = importlib.util.module_from_spec(spec)
    # dataclasses resolves annotations through the importing module registry.
    import sys
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def verify_master(folder, key):
    master = folder / f"{key}-original.wav"
    metadata_path = folder / f"{key}.result.json"
    metadata = json.loads(metadata_path.read_text())
    digest = sha256(master)
    if digest != metadata.get("sha256"):
        raise ValueError(f"{key}: master SHA-256 differs from generation record")
    request_path = folder / "requests" / f"{key}.json"
    if sha256(request_path) != metadata.get("requestHash"):
        raise ValueError(f"{key}: request SHA-256 differs from generation record")
    request = json.loads(request_path.read_text())
    if request.get("model") != "yue2" or request.get("instrumental") is not True:
        raise ValueError(f"{key}: expected a YuE2 instrumental generation request")
    return master, metadata_path, metadata, request, digest


def prepare(key, args):
    master, metadata_path, metadata, request, digest = verify_master(args.input_dir, key)
    pcm, rate, source_format = read_pcm(master)
    source_levels = amplitude(pcm)
    start, end, trim_method = silence_bounds(pcm, rate, args.max_trim)
    selected = pcm[start:end]
    dc = np.mean(selected, axis=0)
    loop, crossfade_frames = circular_crossfade(selected - dc, rate, args.crossfade)
    before_gain = amplitude(loop)
    gain = min(args.rms / before_gain["rms"], args.peak / before_gain["peak"])
    output = args.input_dir / "prepared"
    output.mkdir(exist_ok=True)
    codec = encoder_module()
    with tempfile.TemporaryDirectory(prefix=f".{key}-", dir=output) as temporary:
        staging = Path(temporary)
        # A conservative sample peak normally leaves AAC overshoot headroom.
        # If the actual decoder still exceeds 0.95, lower the entire cue once.
        encodes = []
        for attempt in range(2):
            normalized = loop * gain
            quantized = np.rint(normalized * 32767).astype("<i2")
            codec.write_wave(staging / f"{key}.wav", quantized, rate)
            encoded = codec.encode_aac(key, quantized, rate, staging, bitrate=160000)
            encodes.append({"linearGain": gain, "decodedPeak": encoded["decodedLoopPeak"]})
            if encoded["decodedLoopPeak"] <= .95:
                break
            gain *= .92 / encoded["decodedLoopPeak"]
        else:
            raise ValueError(f"{key}: decoded AAC exceeded the 0.95 sample-peak ceiling")
        if not (0 <= encoded["loopStart"] < encoded["loopEnd"] <= encoded["decodedDuration"]):
            raise ValueError(f"{key}: invalid decoded loop boundaries")
        if encoded["decodedLoopRms"] < 1e-5:
            raise ValueError(f"{key}: encoded music is unexpectedly silent")
        report = {
            "id": key, "processorRevision": REVISION,
            "preparedAt": datetime.now(timezone.utc).isoformat(),
            "source": "YuE2 generated instrumental, edited into a circular gameplay loop",
            "master": str(master.resolve()), "masterSha256": digest,
            "generationRecord": str(metadata_path.resolve()),
            "generationRecordSha256": sha256(metadata_path), "requestHash": metadata["requestHash"],
            "request": request, "sourceFormat": source_format, "sourceLevels": source_levels,
            "edit": {
                "sourceStartFrame": start, "sourceEndFrameExclusive": end,
                "sourceStartSeconds": start / rate, "sourceEndSeconds": end / rate,
                "trimmedHeadSeconds": start / rate, "trimmedTailSeconds": (len(pcm) - end) / rate,
                "silenceTrim": trim_method, "removedDcPerChannel": dc.tolist(),
                "crossfadeFrames": crossfade_frames, "crossfadeSeconds": crossfade_frames / rate,
                "crossfadeMethod": "sin-squared complementary amplitude windows; tail overlaps head",
                "outputOrder": "selected[crossfade:-crossfade], then tail-to-head blend",
                "durationReductionSeconds": (len(pcm) - len(loop)) / rate,
                "outputFrames": len(loop), "outputDuration": len(loop) / rate,
            },
            "normalization": {"targetRms": args.rms, "samplePeakLimit": args.peak,
                              "linearGain": gain, "gainDb": float(20 * np.log10(gain)),
                              "outputLevels": amplitude(quantized.astype(np.float64) / 32768),
                              "encodeAttempts": encodes},
            "encoding": {"codec": "AAC-LC", "container": "M4A", "bitrate": 160000,
                         "circularGuardSeconds": 1, **encoded},
            "artifacts": {f"{key}.{ext}": {"sha256": sha256(staging / f"{key}.{ext}"),
                                          "bytes": (staging / f"{key}.{ext}").stat().st_size}
                          for ext in ("wav", "m4a")},
            "review": {"automatedTechnicalChecks": "passed", "listeningVerified": False,
                       "musicalLoopVerified": False,
                       "note": "Automatic trim/crossfade candidate. Audition timbre, vocals, musical transition and SFX balance before acceptance."},
        }
        (staging / f"{key}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
        for ext in ("wav", "m4a", "json"):
            (staging / f"{key}.{ext}").replace(output / f"{key}.{ext}")
    return {"track": key, "output": str(output), "duration": len(loop) / rate,
            "decodedPeak": encoded["decodedLoopPeak"], "decodedRms": encoded["decodedLoopRms"],
            "loopStart": encoded["loopStart"], "loopEnd": encoded["loopEnd"],
            "listeningVerified": False}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--track", choices=(*TRACKS, "all"), default="all")
    parser.add_argument("--input-dir", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--crossfade", type=float, default=1.5, help="Circular overlap seconds; default 1.5")
    parser.add_argument("--max-trim", type=float, default=3.0, help="Maximum silence removed per side")
    parser.add_argument("--rms", type=float, default=.12, help="Target linear RMS, subject to peak headroom")
    parser.add_argument("--peak", type=float, default=.72, help="Pre-encoding sample-peak ceiling")
    args = parser.parse_args()
    if not (0 < args.rms <= args.peak <= .9 and 0 <= args.max_trim <= 10 and .05 <= args.crossfade <= 5):
        parser.error("Require 0 < rms <= peak <= 0.9; max-trim 0..10; crossfade 0.05..5")
    for key in TRACKS if args.track == "all" else (args.track,):
        print(json.dumps(prepare(key, args), ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()
