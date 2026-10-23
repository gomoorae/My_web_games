#!/usr/bin/env python3
"""Original, reproducible instrumental score for Last Delivery.

This is a self-contained synthesis fallback, not output from YuE or a recording
of real instruments. No samples, pretrained weights, or other game's music are
used. Run with a Python environment that already has NumPy installed:

  python scripts/compose-music.py --track all

Stereo WAV masters and a score/analysis manifest are written to
source_assets/audio. The optional --aac flag makes AAC-LC .m4a copies alongside
the masters; it does not edit the game's catalog.
Encoding prefers ffmpeg (PATH or an installed imageio_ffmpeg package), falling
back to macOS afconvert. No dependencies are installed by this script.
"""

from __future__ import annotations

import argparse
from dataclasses import asdict, dataclass
import json
import math
from pathlib import Path
import shutil
import subprocess
import tempfile
import wave

import numpy as np


ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = ROOT / "source_assets" / "audio"
TAU = math.tau


@dataclass(frozen=True)
class Note:
    instrument: str
    beat: float
    midi: float
    length: float
    gain: float
    pan: float = 0.0


TRACKS = {
    "journey": {"title": "새벽을 향한 표행", "bpm": 76, "bars": 24, "seed": 1801},
    "battle": {"title": "칼끝을 스치는 바람", "bpm": 110, "bars": 32, "seed": 1802},
    "boss": {"title": "적운 아래 마지막 고비", "bpm": 124, "bars": 40, "seed": 1803},
    "ending": {"title": "청하성의 첫 빛", "bpm": 72, "bars": 24, "seed": 1804},
}

# A complete eight-bar melody, with rests and answered phrases. Pitch classes
# are primarily D, F, G, A, C. B natural appears in the resolving ending theme.
THEME_A = [
    [(0, 74, 1.4), (1.75, 77, .65), (2.5, 81, 1.25)],
    [(.25, 79, .9), (1.5, 77, .6), (2.5, 74, 1.3)],
    [(0, 72, 1), (1.5, 74, .7), (2.5, 77, 1.2)],
    [(0, 69, 2.2), (2.75, 72, .55), (3.5, 74, .4)],
    [(0, 77, .9), (1.25, 79, .65), (2.25, 81, 1.5)],
    [(0, 84, 1.5), (2, 81, .7), (3, 79, .7)],
    [(.25, 77, 1), (1.75, 74, .9), (3, 72, .7)],
    [(0, 74, 2.5)],
]
THEME_B = [
    [(0, 81, 1.7), (2.25, 84, .65), (3.25, 86, .6)],
    [(0, 84, 1.2), (1.75, 81, 1.7)],
    [(.5, 79, .7), (1.5, 81, .7), (2.5, 77, 1.15)],
    [(0, 79, 2), (2.75, 74, .75)],
    [(0, 77, 1), (1.5, 74, .7), (2.5, 72, 1)],
    [(.25, 69, 1.5), (2.5, 72, 1.1)],
    [(0, 74, .7), (1, 77, .7), (2, 79, .65), (3, 77, .65)],
    [(0, 74, 2.6)],
]
ROOTS = [38, 38, 41, 36, 43, 41, 36, 38]
CHORDS = {
    38: [50, 57, 62, 65, 69],
    41: [53, 60, 65, 69, 72],
    36: [48, 55, 60, 62, 67],
    43: [43, 50, 55, 62, 65],
}


def make_score(name: str) -> list[Note]:
    spec = TRACKS[name]
    notes: list[Note] = []

    def add(instrument, beat, midi, length, gain, pan=0):
        notes.append(Note(instrument, beat, midi, length, gain, pan))

    for bar in range(spec["bars"]):
        section, local = divmod(bar, 8)
        start = bar * 4
        root = ROOTS[local]
        chord = CHORDS[root]
        # Soft pads have long attacks and substantial rests; they support rather
        # than mask the midrange where the combat sound effects live.
        if local % 2 == 0:
            pad_gain = .12 if name in ("journey", "ending") else .095
            add("bow", start, root + 12, 7.7, pad_gain, -.24)
            add("bow", start + .12, root + 19, 7.4, pad_gain * .68, .27)
        add("bass", start, root, 3.6, .24 if name in ("battle", "boss") else .15, -.03)

        if name == "journey":
            # Broad A / contrasting B / A with response. The first eight bars
            # leave space before bringing the bamboo voice forward.
            arpeggio = [0, 2, 1, 3] if local % 2 == 0 else [0, 1, 3, 2]
            for step, pitch in enumerate(arpeggio):
                add("qin", start + step + (.04 if step % 2 else 0), chord[pitch], 2.4, .22 if step == 0 else .14, -.3)
            theme = THEME_B if section == 1 else THEME_A
            instrument = "qin" if section == 0 else "flute"
            for beat, midi, length in theme[local]:
                add(instrument, start + beat, midi, length, .19 if instrument == "qin" else .18, .2)
            if section == 2 and local in (1, 3, 5):
                add("qin", start + 3.25, chord[-1], .7, .12, -.38)
            if section > 0 and local % 2 == 0:
                add("wood", start + 2.5, 70, .2, .07, .4)

        elif name == "battle":
            # The two-beat ostinato changes register and spacing every eight
            # bars. Bar seven of each phrase drops its percussion to breathe.
            pattern = [0, 2, 1, 3, 0, 2, 4, 2] if section % 2 == 0 else [0, 1, 3, 2, 0, 4, 2, 1]
            for step, pitch in enumerate(pattern):
                if section == 2 and step in (3, 7):
                    continue
                add("pipa", start + step * .5, chord[pitch], .7, .20 if step % 4 == 0 else .105, -.25 if step % 2 else .25)
            theme = THEME_B if section in (1, 2) else THEME_A
            if section != 2 or local % 2 == 0:
                for beat, midi, length in theme[local]:
                    add("flute", start + beat, midi, length * .82, .20, .08)
            if local != 7:
                for beat, gain in [(0, .40), (1.5, .21), (2.5, .31)]:
                    add("drum", start + beat, 40 if beat == 0 else 46, .55, gain, -.12)
                for beat in (1, 3):
                    add("wood", start + beat, 68, .22, .12, .32)
            elif section != 2:
                for step in range(4):
                    add("drum", start + 2 + step * .5, 48 - step * 2, .45, .16 + step * .045, (-1) ** step * .2)
            if local == 0:
                add("gong", start, 50, 4.8, .11, .12)

        elif name == "boss":
            # A low, forceful answer to the same melody. Section 3 is a thin
            # bridge before the fuller final section; intensity is arranged,
            # rather than achieved by a continuously louder master.
            bridge = section == 3
            pattern = [0, 1, 2, 0, 3, 2, 1, 4]
            for step, pitch in enumerate(pattern):
                if bridge and step % 2:
                    continue
                add("pipa", start + step * .5, chord[pitch] - (12 if bridge else 0), .85, .20 if step in (0, 4) else .12, -.25)
            theme = THEME_B if section in (1, 3) else THEME_A
            for beat, midi, length in theme[local]:
                # Bowed lead and breathy top voice respond rather than double
                # every note mechanically.
                add("bow", start + beat, midi - 12, length * .9, .20 if not bridge else .14, .1)
                if not bridge and (local % 2 == 0 or section == 4):
                    add("flute", start + beat + .04, midi, length * .85, .14, .2)
            for beat, gain in ([(0, .29), (2.5, .18)] if bridge else [(0, .48), (1.5, .25), (2, .35), (3.5, .28)]):
                add("drum", start + beat, 35 if beat in (0, 2) else 43, .75, gain, -.13 if beat < 2 else .14)
            if not bridge:
                for beat in (1, 3):
                    add("wood", start + beat, 62, .25, .14, .35)
                if local in (3, 7):
                    for beat in (3.0, 3.25, 3.5, 3.75):
                        add("drum", start + beat, 49, .3, .09, -.25)
            if local == 0:
                add("gong", start, 38, 6, .17 if not bridge else .08, .2)

        else:
            # Resolution keeps the identity of the motif, with a raised sixth
            # in the middle phrase and a more open upper-string response.
            for step, pitch in enumerate([0, 2, 3, 1]):
                add("qin", start + step + .03 * (step % 2), chord[pitch], 2.7, .17 if step == 0 else .12, -.28)
            theme = THEME_B if section == 1 else THEME_A
            for beat, midi, length in theme[local]:
                if section == 1 and midi == 72:
                    midi = 71
                add("flute", start + beat, midi, length * 1.05, .17, .15)
            if section == 2 and local % 2 == 0:
                for step, pitch in enumerate([2, 3, 4]):
                    add("qin", start + 1.5 + step * .65, chord[pitch] + 12, 2, .075, .35)
            if local == 0 and section != 1:
                add("gong", start, 62, 5, .055, -.1)
    return sorted(notes, key=lambda note: note.beat)


def envelope(t, duration, attack, release):
    return np.minimum(1, t / max(attack, 1e-4)) * np.minimum(1, np.maximum(0, duration - t) / max(release, 1e-4))


def synthesize(note: Note, beat_seconds: float, rate: int, rng):
    length = note.length * beat_seconds
    kind = note.instrument
    duration = length + ({"qin": 2.1, "pipa": 1.1, "bass": 1.1, "flute": .16, "bow": .8, "gong": 1.7}.get(kind, .15))
    t = np.arange(int(duration * rate), dtype=np.float64) / rate
    frequency = 440 * 2 ** ((note.midi - 69) / 12)
    signal = np.zeros_like(t)

    if kind in ("qin", "pipa", "bass"):
        # Each partial has its own decay. The slight inharmonicity, moving
        # bridge and pick noise avoid a bare electronic sine-wave impression.
        bright = {"qin": 1.2, "pipa": 1.03, "bass": 1.8}[kind]
        decay = {"qin": 1.4, "pipa": 3.1, "bass": 1.0}[kind]
        for partial in range(1, 13 if kind != "bass" else 6):
            inharmonic = partial * math.sqrt(1 + .00013 * partial ** 2)
            phase = rng.uniform(-.06, .06)
            bend = .0015 * np.exp(-t * 15)
            vibrato = .0011 * np.sin(TAU * 4.7 * t) * np.minimum(1, t)
            angle = TAU * frequency * inharmonic * (t + bend + vibrato / 30) + phase
            signal += np.sin(angle) * np.exp(-t * (decay + partial * .34)) / partial ** bright
        pick = rng.normal(0, .14, len(t)) * np.exp(-t * 260)
        signal = (signal + pick) * envelope(t, duration, .003, .2)
        # A smooth release after the notated gate leaves a plucked tail rather
        # than changing the instrument into a sustaining keyboard.
        signal *= np.exp(-np.maximum(0, t - length) * 1.6)

    elif kind == "flute":
        vibrato_depth = .0030 * (1 - np.exp(-t * 3))
        vibrato = vibrato_depth * np.sin(TAU * (5.1 + .05 * np.sin(t)) * t)
        scoop = -.008 * np.exp(-t * 14)
        phase = np.cumsum(TAU * frequency * (1 + vibrato + scoop) / rate)
        # A bamboo reed/membrane-like upper resonance, breath and gentle
        # amplitude irregularity sit under a round fundamental.
        for partial, level in [(1, 1), (2, .28), (3, .13), (4, .075), (5, .035)]:
            signal += level * np.sin(partial * phase + .04 * partial)
        raw = rng.normal(0, 1, len(t))
        breath = np.convolve(raw, np.ones(8) / 8, mode="same")
        signal += breath * .11
        signal *= envelope(t, duration, .085, .18) * (1 + .022 * np.sin(TAU * 3.1 * t))

    elif kind == "bow":
        for partial in range(1, 9):
            for detune, level in [(-.0018, .36), (.0011, .34), (.0002, .3)]:
                phase = TAU * frequency * partial * (1 + detune) * t
                phase += .04 * np.sin(TAU * 4.3 * t + partial)
                signal += level * np.sin(phase) / partial ** 1.45
        signal *= envelope(t, duration, min(.4, length * .3), .9) * .65

    elif kind == "drum":
        for ratio, level, decay in [(1, 1, 9), (1.57, .42, 13), (2.23, .18, 19), (3.14, .06, 30)]:
            phase = TAU * frequency * ratio * (t + .02 * (1 - np.exp(-t * 30)))
            signal += level * np.sin(phase) * np.exp(-t * decay)
        slap = rng.normal(0, 1, len(t))
        slap = np.convolve(slap, np.ones(5) / 5, mode="same")
        signal += slap * np.exp(-t * 65) * .22
        signal = np.tanh(signal * 1.2) * envelope(t, duration, .0015, .08)

    elif kind == "wood":
        frequency *= 3.1
        signal = np.sin(TAU * frequency * t) * np.exp(-t * 55)
        signal += .43 * np.sin(TAU * frequency * 1.43 * t) * np.exp(-t * 75)
        signal += rng.normal(0, .08, len(t)) * np.exp(-t * 160)
        signal *= envelope(t, duration, .001, .03)

    elif kind == "gong":
        for ratio, level in [(1, .45), (1.48, .28), (2.03, .2), (2.68, .11), (3.84, .055), (5.17, .025)]:
            modulation = .003 * np.sin(TAU * .8 * t)
            signal += level * np.sin(TAU * frequency * ratio * t + modulation) * np.exp(-t * (.6 + ratio * .13))
        signal *= envelope(t, duration, .02, 1)

    return signal.astype(np.float32) * note.gain


def circular_add(target, mono, start, pan):
    # Equal-power panning; notes extending beyond the last bar carry naturally
    # into the first bar when the buffer loops.
    weights = [math.cos((pan + 1) * math.pi / 4), math.sin((pan + 1) * math.pi / 4)]
    position = start % len(target)
    remaining = len(mono)
    offset = 0
    while remaining:
        take = min(remaining, len(target) - position)
        for channel in range(2):
            target[position:position + take, channel] += mono[offset:offset + take] * weights[channel]
        offset += take
        remaining -= take
        position = 0


def reverb(signal, rate, rng, wet):
    # Diffuse circular convolution keeps the same acoustic space at the end and
    # beginning, so there is no dead air or fade-out at the loop boundary.
    n = len(signal)
    impulse_len = int(rate * 2.3)
    decay = np.exp(-np.arange(impulse_len) / (rate * .36))
    output = signal.copy()
    for channel in range(2):
        impulse = np.zeros(n)
        scatter = rng.normal(0, 1, impulse_len) * decay
        scatter[:int(rate * .035)] = 0
        scatter *= wet * .028
        impulse[:impulse_len] = scatter
        for seconds, gain in [(.053, .12), (.089, .08), (.137, .055), (.211, .035)]:
            impulse[int(rate * (seconds + channel * .007))] += gain * wet
        mono = signal[:, channel] * .8 + signal[:, 1 - channel] * .2
        reflected = np.fft.irfft(np.fft.rfft(mono) * np.fft.rfft(impulse), n)
        output[:, channel] += reflected.astype(np.float32)
    return output


def write_wave(path, pcm, rate):
    with wave.open(str(path), "wb") as handle:
        handle.setnchannels(2)
        handle.setsampwidth(2)
        handle.setframerate(rate)
        handle.writeframes(pcm.tobytes())


def encode_aac(name, pcm, rate, out, bitrate=144000):
    # Put the loop inside the file rather than on codec boundaries. One second
    # on either side repeats the circular score, so AAC's priming/end padding
    # can never become a pause inside the selected looping region.
    guard = rate
    guarded = np.concatenate([pcm[-guard:], pcm, pcm[:guard]])
    encoder = shutil.which("ffmpeg")
    if not encoder:
        try:
            import imageio_ffmpeg
            encoder = imageio_ffmpeg.get_ffmpeg_exe()
        except (ImportError, RuntimeError):
            pass
    target = out / f"{name}.m4a"
    with tempfile.TemporaryDirectory(prefix="score-", dir=out) as temporary:
        padded = Path(temporary) / "guarded.wav"
        decoded = Path(temporary) / "decoded.wav"
        write_wave(padded, guarded, rate)
        if encoder:
            subprocess.run([encoder, "-v", "error", "-nostdin", "-y", "-i", str(padded), "-c:a", "aac", "-b:a", str(bitrate), "-movflags", "+faststart", str(target)], check=True)
            subprocess.run([encoder, "-v", "error", "-nostdin", "-y", "-i", str(target), "-c:a", "pcm_s16le", str(decoded)], check=True)
        else:
            converter = shutil.which("afconvert")
            if not converter:
                raise RuntimeError("AAC encoding needs an existing ffmpeg or afconvert installation")
            subprocess.run([converter, "-f", "m4af", "-d", "aac ", "-b", str(bitrate), "-q", "127", str(padded), str(target)], check=True)
            subprocess.run([converter, "-f", "WAVE", "-d", "LEI16", str(target), str(decoded)], check=True)
        with wave.open(str(decoded), "rb") as handle:
            decoded_rate = handle.getframerate()
            channels = handle.getnchannels()
            frames = handle.getnframes()
            decoded_pcm = np.frombuffer(handle.readframes(frames), dtype="<i2").reshape(-1, channels).astype(np.float64) / 32768
        if decoded_rate != rate or channels != 2 or frames < guard + len(pcm):
            raise RuntimeError("Decoded AAC does not contain the complete stereo loop")
        # Lossy encoding can make two otherwise identical boundary samples
        # differ slightly. Move both ends together by at most 10 ms, keeping
        # exactly the original musical period, to minimise that residual jump.
        candidates = np.arange(guard - rate // 100, guard + rate // 100 + 1)
        endings = candidates + len(pcm)
        jumps = np.max(np.abs(decoded_pcm[endings - 1] - decoded_pcm[candidates]), axis=1)
        first_slopes = decoded_pcm[candidates + 1] - decoded_pcm[candidates]
        last_slopes = decoded_pcm[endings - 1] - decoded_pcm[endings - 2]
        slope_error = np.max(np.abs(first_slopes - last_slopes), axis=1)
        scores = jumps + .5 * slope_error + np.abs(candidates - guard) * 1e-7
        start = int(candidates[np.argmin(scores)])
        end = start + len(pcm)
        window = rate // 10
        loop = decoded_pcm[start:end]
        return {
            "aacBytes": target.stat().st_size, "aacBitrate": bitrate,
            "sourceFrames": len(pcm), "encodedInputFrames": len(guarded),
            "decodedFrames": frames, "decodedDuration": frames / rate,
            "loopStart": start / rate, "loopEnd": end / rate,
            "decodedLoopPeak": float(np.max(np.abs(loop))),
            "decodedLoopRms": float(np.sqrt(np.mean(loop ** 2))),
            "decodedLoopSeamDelta": float(np.max(np.abs(decoded_pcm[end - 1] - decoded_pcm[start]))),
            "decodedLoopFirst100msRms": float(np.sqrt(np.mean(decoded_pcm[start:start + window] ** 2))),
            "decodedLoopLast100msRms": float(np.sqrt(np.mean(decoded_pcm[end - window:end] ** 2))),
            "decodedFileFirst100msRms": float(np.sqrt(np.mean(decoded_pcm[:window] ** 2))),
            "decodedFileLast100msRms": float(np.sqrt(np.mean(decoded_pcm[-window:] ** 2))),
            "loopOffsetFromGuardFrames": start - guard,
            "decodedSourceCorrelation": float(np.corrcoef(decoded_pcm[guard:guard + len(pcm)].ravel(), pcm.astype(np.float64).ravel())[0, 1]),
        }


def render(name, rate, out, aac=False, bitrate=144000):
    spec = TRACKS[name]
    rng = np.random.default_rng(spec["seed"])
    beat_seconds = 60 / spec["bpm"]
    duration = spec["bars"] * 4 * beat_seconds
    n = round(duration * rate)
    track = np.zeros((n, 2), dtype=np.float32)
    notes = make_score(name)
    for note in notes:
        samples = synthesize(note, beat_seconds, rate, rng)
        circular_add(track, samples, round(note.beat * beat_seconds * rate), note.pan)
    track = reverb(track, rate, rng, .16 if name in ("battle", "boss") else .24)
    track -= np.mean(track, axis=0)
    frequencies = np.fft.rfftfreq(n, 1 / rate)
    filter_gain = (1 - np.exp(-(frequencies / 32) ** 4)) / np.sqrt(1 + (frequencies / 7200) ** 8)
    track = np.fft.irfft(np.fft.rfft(track, axis=0) * filter_gain[:, None], n, axis=0)
    pre_peak = float(np.max(np.abs(track)))
    rms = float(np.sqrt(np.mean(track ** 2)))
    track *= min(.18 / max(rms, 1e-8), .92 / max(pre_peak, 1e-8))
    # The soft knee only affects peaks; fixed gain across both channels retains
    # stereo placement. Dither prevents low-level tail quantisation artifacts.
    track = np.tanh(track * 1.08) / 1.08
    dither = (rng.random(track.shape) - rng.random(track.shape)) / 65536
    pcm = np.clip(np.rint((track + dither) * 32767), -32768, 32767).astype("<i2")
    out.mkdir(parents=True, exist_ok=True)
    wav_path = out / f"{name}.wav"
    write_wave(wav_path, pcm, rate)
    rendered = {
        **spec, "id": name, "duration": n / rate, "sampleRate": rate,
        "channels": 2, "loopStart": 0, "loopEnd": n / rate,
        "notes": len(notes), "peak": float(np.max(np.abs(track))),
        "rms": float(np.sqrt(np.mean(track ** 2))),
        "seamDelta": float(np.max(np.abs(track[-1] - track[0]))),
        "maximumAdjacentDelta": float(np.max(np.abs(np.diff(track, axis=0)))),
        "source": "Original score and deterministic additive/noise synthesis; no samples or model generation.",
        "form": {"journey": "A / B / A with response", "battle": "A / B / thin B / full A", "boss": "low A / B / A / bridge / full A", "ending": "A / resolving B / A with upper response"}[name],
        "score": [asdict(note) for note in notes],
    }
    if aac:
        rendered.update(encode_aac(name, pcm, rate, out, bitrate))
    (out / f"{name}.json").write_text(json.dumps(rendered, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({key: value for key, value in rendered.items() if key != "score"}, ensure_ascii=False), flush=True)
    return rendered


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--track", choices=[*TRACKS, "all"], default="all")
    parser.add_argument("--rate", type=int, default=44100)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    parser.add_argument("--aac", action="store_true")
    parser.add_argument("--bitrate", type=int, default=144000, help="AAC total stereo bit rate; default 144000")
    parser.add_argument("--score-only", action="store_true", help="Write original score/provenance without rendering audio")
    args = parser.parse_args()
    if not 22050 <= args.rate <= 48000:
        parser.error("sample rate must be between 22050 and 48000")
    names = list(TRACKS) if args.track == "all" else [args.track]
    if args.score_only:
        args.out.mkdir(parents=True, exist_ok=True)
        score = {name: {**TRACKS[name], "notes": [asdict(note) for note in make_score(name)]} for name in names}
        (args.out / "score.json").write_text(json.dumps(score, ensure_ascii=False, indent=2) + "\n")
        print("Wrote original score; no audio rendered.")
    else:
        for name in names:
            render(name, args.rate, args.out, args.aac, args.bitrate)


if __name__ == "__main__":
    main()
