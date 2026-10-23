#!/usr/bin/env python3
"""Prepare complete verified YuE2 instrumentals for sequential playback.

Keeps source samples in chronological order, with only conservative exterior
silence trimming, DC removal, a fixed gain and endpoint fades. Requires NumPy
and an already installed ffmpeg or macOS afconvert; installs nothing.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import wave

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_INPUT = ROOT / "source_assets/audio/yue2-playlist"
TRACKS = ("journey", "battle", "boss", "ending")
REVISION = 1


def sha256(path):
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def read_pcm(path):
    """Decode integer PCM WAV, including packed signed 24-bit model output."""
    with wave.open(str(path), "rb") as handle:
        channels, width, rate, frames, compression, _ = handle.getparams()
        if compression != "NONE" or channels not in (1, 2) or width not in (1, 2, 3, 4):
            raise ValueError("Expected mono/stereo 8, 16, 24 or 32-bit integer PCM WAV")
        raw = handle.readframes(frames)
    if not frames or len(raw) != frames * channels * width:
        raise ValueError("Empty or truncated WAV samples")
    if width == 1:
        pcm = (np.frombuffer(raw, np.uint8).astype(np.float64) - 128) / 128
    elif width == 3:
        packed = np.frombuffer(raw, np.uint8).reshape(-1, 3).astype(np.int32)
        signed = packed[:, 0] | (packed[:, 1] << 8) | (packed[:, 2] << 16)
        pcm = ((signed ^ 0x800000) - 0x800000).astype(np.float64) / 8388608
    else:
        pcm = np.frombuffer(raw, dtype=f"<i{width}").astype(np.float64) / (2 ** (8 * width - 1))
    pcm = pcm.reshape(-1, channels)
    if channels == 1:
        pcm = np.repeat(pcm, 2, axis=1)
    if not np.isfinite(pcm).all():
        raise ValueError("WAV samples must be finite")
    return pcm, rate, {"channels": channels, "sampleWidthBytes": width, "sampleRate": rate,
                       "frames": frames, "duration": frames / rate}


def write_pcm24(path, pcm, rate):
    """Save stereo PCM without reducing a model's 24-bit source precision."""
    if pcm.ndim != 2 or pcm.shape[1] != 2 or not np.isfinite(pcm).all():
        raise ValueError("Expected finite stereo samples")
    if np.max(np.abs(pcm)) >= 1:
        raise ValueError("Samples must leave headroom before 24-bit quantization")
    values = np.rint(pcm * 8388608).astype(np.int32).ravel()
    packed = np.column_stack((values & 255, (values >> 8) & 255, (values >> 16) & 255)).astype(np.uint8)
    with wave.open(str(path), "wb") as handle:
        handle.setparams((2, 3, rate, len(pcm), "NONE", "not compressed"))
        handle.writeframes(packed.tobytes())


def amplitude(pcm):
    peak = float(np.max(np.abs(pcm)))
    rms = float(np.sqrt(np.mean(pcm ** 2)))
    return {"peak": peak, "peakDbfs": float(20 * np.log10(max(peak, 1e-12))),
            "rms": rms, "rmsDbfs": float(20 * np.log10(max(rms, 1e-12)))}


def silence_bounds(pcm, rate, max_trim=2.5):
    """Remove only exterior quiet windows and retain 100 ms at either edge."""
    window = max(1, round(rate * .01))
    count = len(pcm) // window
    if not count:
        raise ValueError("Audio is too short to measure exterior silence")
    energy = np.sqrt(np.mean(pcm[:count * window].reshape(count, window, 2) ** 2, axis=(1, 2)))
    reference = float(np.percentile(energy, 90))
    if reference < 1e-5:
        raise ValueError("Master is silent or too quiet to prepare reliably")
    threshold = max(10 ** (-65 / 20), reference * 10 ** (-45 / 20))
    active = np.flatnonzero(energy >= threshold)
    if not len(active):
        raise ValueError("No active music detected")
    margin = round(rate * .1)
    limit = min(round(max_trim * rate), len(pcm) // 10)
    start = min(limit, max(0, int(active[0]) * window - margin))
    end = max(len(pcm) - limit, min(len(pcm), (int(active[-1]) + 1) * window + margin))
    return start, end, {"method": "10 ms stereo RMS; max(-65 dBFS, p90 RMS minus 45 dB)",
                        "thresholdAmplitude": threshold, "retainedMarginSeconds": .1,
                        "maximumTrimPerSideSeconds": limit / rate}


def edit_complete_track(pcm, rate, max_trim=2.5, fade_in=.035, fade_out=2.5,
                        min_duration=175, max_duration=183):
    start, end, trim_method = silence_bounds(pcm, rate, max_trim)
    # If silence trimming would make an otherwise valid master too short,
    # retain some of that original silence instead of adding or repeating audio.
    available_trim = max(0, len(pcm) - round(min_duration * rate))
    proposed_trim = start + len(pcm) - end
    if proposed_trim > available_trim:
        keep_fraction = available_trim / proposed_trim
        start = int(start * keep_fraction)
        end = len(pcm) - min(available_trim - start, int((len(pcm) - end) * keep_fraction))
    duration = (end - start) / rate
    if not min_duration <= duration <= max_duration:
        raise ValueError(f"Complete track is {duration:.3f}s; expected {min_duration}..{max_duration}s")
    selected = pcm[start:end].copy()
    dc = np.mean(selected, axis=0)
    selected -= dc
    head, tail = round(fade_in * rate), round(fade_out * rate)
    if head < 2 or tail < 2 or head + tail >= len(selected):
        raise ValueError("Endpoint fades must be positive and fit inside the complete track")
    selected[:head] *= np.sin(np.linspace(0, np.pi / 2, head))[:, None] ** 2
    selected[-tail:] *= np.cos(np.linspace(0, np.pi / 2, tail))[:, None] ** 2
    selected[0] = selected[-1] = 0
    return selected, {
        "sourceStartFrame": start, "sourceEndFrameExclusive": end,
        "sourceStartSeconds": start / rate, "sourceEndSeconds": end / rate,
        "trimmedHeadSeconds": start / rate, "trimmedTailSeconds": (len(pcm) - end) / rate,
        "silenceTrim": trim_method, "removedDcPerChannel": dc.tolist(),
        "fadeInFrames": head, "fadeInSeconds": head / rate,
        "fadeOutFrames": tail, "fadeOutSeconds": tail / rate,
        "fadeMethod": "sin-squared entrance and cos-squared exit amplitude windows",
        "outputOrder": "original chronological order; every selected sample retained once",
        "outputFrames": len(selected), "outputDuration": duration,
        "durationReductionSeconds": (len(pcm) - len(selected)) / rate,
    }


def encode_complete_aac(wav_path, target, rate, source_frames, bitrate=160000):
    """Encode the WAV directly and measure its complete decoded AAC content."""
    encoder = shutil.which("ffmpeg")
    if not encoder:
        try:
            import imageio_ffmpeg
            encoder = imageio_ffmpeg.get_ffmpeg_exe()
        except (ImportError, RuntimeError):
            pass
    with tempfile.TemporaryDirectory(prefix="aac-check-", dir=target.parent) as temporary:
        decoded = Path(temporary) / "decoded.wav"
        if encoder:
            subprocess.run([encoder, "-v", "error", "-nostdin", "-y", "-i", str(wav_path),
                            "-c:a", "aac", "-b:a", str(bitrate), "-movflags", "+faststart", str(target)], check=True)
            subprocess.run([encoder, "-v", "error", "-nostdin", "-y", "-i", str(target),
                            "-c:a", "pcm_s32le", str(decoded)], check=True)
            encoder_name = "ffmpeg"
        else:
            converter = shutil.which("afconvert")
            if not converter:
                raise RuntimeError("AAC encoding needs an existing ffmpeg or afconvert installation")
            subprocess.run([converter, "-f", "m4af", "-d", "aac ", "-b", str(bitrate), "-q", "127",
                            str(wav_path), str(target)], check=True)
            subprocess.run([converter, "-f", "WAVE", "-d", "LEI32", str(target), str(decoded)], check=True)
            encoder_name = "afconvert"
        decoded_pcm, decoded_rate, info = read_pcm(decoded)
        # At most two AAC frames of codec padding are acceptable. No musical
        # samples are added by this script, and no decoder segment is selected.
        if decoded_rate != rate or info["channels"] != 2 or abs(len(decoded_pcm) - source_frames) > 2048:
            raise RuntimeError("Decoded AAC duration or stereo format differs from the complete source")
        levels = amplitude(decoded_pcm)
        window = min(round(rate * .1), len(decoded_pcm))
        return {
            "encoder": encoder_name, "aacBytes": target.stat().st_size, "aacBitrate": bitrate,
            "sourceFrames": source_frames, "encodedInputFrames": source_frames,
            "decodedFrames": len(decoded_pcm), "decodedDuration": len(decoded_pcm) / rate,
            "decodedDurationDifferenceSeconds": (len(decoded_pcm) - source_frames) / rate,
            "decodedPeak": levels["peak"], "decodedPeakDbfs": levels["peakDbfs"],
            "decodedRms": levels["rms"], "decodedRmsDbfs": levels["rmsDbfs"],
            "decodedFirst100msRms": amplitude(decoded_pcm[:window])["rms"],
            "decodedLast100msRms": amplitude(decoded_pcm[-window:])["rms"],
        }


def verify_master(folder, key):
    master = folder / f"{key}-original.wav"
    record_path = folder / f"{key}.result.json"
    record = json.loads(record_path.read_text())
    digest = sha256(master)
    if digest != record.get("sha256"):
        raise ValueError(f"{key}: master SHA-256 differs from generation record")
    request_path = folder / "requests" / f"{key}.json"
    if sha256(request_path) != record.get("requestHash"):
        raise ValueError(f"{key}: request SHA-256 differs from generation record")
    request = json.loads(request_path.read_text())
    if request.get("model") != "yue2" or request.get("instrumental") is not True:
        raise ValueError(f"{key}: expected a YuE2 instrumental generation request")
    return master, record_path, record, request, digest


def prepare(key, args):
    master, record_path, record, request, digest = verify_master(args.input_dir, key)
    pcm, rate, source_format = read_pcm(master)
    source_levels = amplitude(pcm)
    edited, edit = edit_complete_track(pcm, rate, args.max_trim, args.fade_in, args.fade_out,
                                       args.min_duration, args.max_duration)
    before_gain = amplitude(edited)
    if before_gain["rms"] < 1e-5:
        raise ValueError(f"{key}: music is silent after DC removal")
    gain = min(args.rms / before_gain["rms"], args.peak / before_gain["peak"])
    output = args.input_dir / "prepared"
    output.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=f".{key}-", dir=output) as temporary:
        staging = Path(temporary)
        attempts = []
        for _ in range(3):
            normalized = edited * gain
            write_pcm24(staging / f"{key}.wav", normalized, rate)
            encoded = encode_complete_aac(staging / f"{key}.wav", staging / f"{key}.m4a", rate, len(edited))
            attempts.append({"linearGain": gain, "decodedPeak": encoded["decodedPeak"]})
            if encoded["decodedPeak"] <= .95:
                break
            gain *= .92 / encoded["decodedPeak"]
        else:
            raise ValueError(f"{key}: decoded AAC exceeded the 0.95 sample-peak ceiling")
        if encoded["decodedRms"] < 1e-5:
            raise ValueError(f"{key}: encoded music is unexpectedly silent")
        saved_pcm, _, _ = read_pcm(staging / f"{key}.wav")
        report = {
            "id": key, "processorRevision": REVISION,
            "preparedAt": datetime.now(timezone.utc).isoformat(),
            "source": "YuE2 generated complete instrumental for sequential playback",
            "master": str(master.resolve()), "masterSha256": digest,
            "generationRecord": str(record_path.resolve()), "generationRecordSha256": sha256(record_path),
            "requestHash": record["requestHash"], "request": request,
            "sourceFormat": source_format, "sourceLevels": source_levels, "edit": edit,
            "normalization": {"targetRms": args.rms, "samplePeakLimit": args.peak,
                              "decodedPeakLimit": .95, "linearGain": gain,
                              "gainDb": float(20 * np.log10(gain)),
                              "outputLevels": amplitude(saved_pcm), "encodeAttempts": attempts},
            "encoding": {"codec": "AAC-LC", "container": "M4A", "bitrate": 160000, **encoded},
            "artifacts": {f"{key}.{ext}": {"sha256": sha256(staging / f"{key}.{ext}"),
                                           "bytes": (staging / f"{key}.{ext}").stat().st_size}
                          for ext in ("wav", "m4a")},
            "review": {"automatedTechnicalChecks": "passed", "listeningVerified": False,
                       "note": "Technical checks only. Listen to the full arrangement, ending, timbre and SFX balance before judging musical quality."},
        }
        (staging / f"{key}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
        for ext in ("wav", "m4a", "json"):
            (staging / f"{key}.{ext}").replace(output / f"{key}.{ext}")
    return {"track": key, "output": str(output), "duration": len(edited) / rate,
            "decodedDuration": encoded["decodedDuration"], "decodedPeak": encoded["decodedPeak"],
            "decodedRms": encoded["decodedRms"], "listeningVerified": False}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--track", choices=(*TRACKS, "all"), default="all")
    parser.add_argument("--input-dir", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--max-trim", type=float, default=2.5, help="Maximum exterior silence removed per side")
    parser.add_argument("--fade-in", type=float, default=.035, help="Entrance fade in seconds")
    parser.add_argument("--fade-out", type=float, default=2.5, help="Ending fade in seconds")
    parser.add_argument("--min-duration", type=float, default=175)
    parser.add_argument("--max-duration", type=float, default=183)
    parser.add_argument("--rms", type=float, default=.12, help="Target linear RMS, subject to peak headroom")
    parser.add_argument("--peak", type=float, default=.72, help="Pre-encoding sample-peak ceiling")
    args = parser.parse_args()
    if not (0 < args.rms <= args.peak <= .9 and 0 <= args.max_trim <= 2.5 and
            .02 <= args.fade_in <= .05 and 2 <= args.fade_out <= 3 and
            175 <= args.min_duration <= args.max_duration <= 183):
        parser.error("Require 0 < rms <= peak <= .9; max-trim 0..2.5; fade-in .02...05; fade-out 2..3; duration 175..183")
    for key in TRACKS if args.track == "all" else (args.track,):
        print(json.dumps(prepare(key, args), ensure_ascii=False), flush=True)


if __name__ == "__main__":
    main()
