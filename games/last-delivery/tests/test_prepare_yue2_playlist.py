"""Verify complete-track integrity and real AAC decoding without model generation."""
import importlib.util
import json
from pathlib import Path
import shutil
import tempfile
from types import SimpleNamespace
import unittest

import numpy as np

spec = importlib.util.spec_from_file_location("prepare_yue2_playlist", Path(__file__).resolve().parents[1] / "scripts/prepare-yue2-playlist.py")
prepare = importlib.util.module_from_spec(spec)
spec.loader.exec_module(prepare)


def signal(seconds=180, rate=1000):
    t = np.arange(round(seconds * rate)) / rate
    return np.column_stack((.2 * np.sin(t * 37), .1 * np.sin(t * 23 + .3)))


class PreparePlaylistTests(unittest.TestCase):
    def test_24bit_roundtrip_preserves_signed_values(self):
        values = np.array([[-.72, -.00000011920928955078125], [0, .00000011920928955078125], [.72, .4]])
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "pcm.wav"
            prepare.write_pcm24(path, values, 44100)
            pcm, rate, info = prepare.read_pcm(path)
        np.testing.assert_allclose(pcm, values, atol=1 / 8388608)
        self.assertEqual((rate, info["sampleWidthBytes"]), (44100, 3))

    def test_complete_order_and_duration_preserved_between_fades(self):
        original = signal()
        edited, report = prepare.edit_complete_track(original, 1000)
        self.assertEqual(len(edited), len(original))
        np.testing.assert_allclose(edited[35:-2500], (original - original.mean(axis=0))[35:-2500], atol=0)
        np.testing.assert_array_equal(edited[[0, -1]], 0)
        self.assertEqual(report["outputDuration"], 180)
        self.assertFalse(any("loop" in key.lower() or "crossfade" in key.lower() for key in report))

    def test_only_exterior_silence_is_trimmed_and_short_master_is_rejected(self):
        original = signal()
        original[:1000] = original[-1000:] = 0
        original[50000:51000] = 0
        edited, report = prepare.edit_complete_track(original, 1000)
        self.assertEqual(report["trimmedHeadSeconds"], .9)
        self.assertEqual(report["trimmedTailSeconds"], .9)
        self.assertEqual(len(edited), len(original) - 1800)
        np.testing.assert_allclose(edited[49100:50100], -np.array(report["removedDcPerChannel"])[None, :] * np.ones((1000, 2)))
        with self.assertRaisesRegex(ValueError, "expected 175..183"):
            prepare.edit_complete_track(signal(90), 1000)

    def test_minimum_duration_retains_original_silence(self):
        original = signal(176)
        original[:2000] = original[-2000:] = 0
        edited, report = prepare.edit_complete_track(original, 1000)
        self.assertEqual(len(edited), 175000)
        self.assertEqual(report["trimmedHeadSeconds"] + report["trimmedTailSeconds"], 1)

    def test_provenance_mismatch_rejected_before_preparation(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / "requests").mkdir()
            master = root / "journey-original.wav"
            request = root / "requests/journey.json"
            prepare.write_pcm24(master, signal(8), 1000)
            request.write_text(json.dumps({"model": "yue2", "instrumental": True}))
            record = {"sha256": prepare.sha256(master), "requestHash": prepare.sha256(request)}
            (root / "journey.result.json").write_text(json.dumps(record))
            prepare.verify_master(root, "journey")
            request.write_text(request.read_text() + " ")
            with self.assertRaisesRegex(ValueError, "request SHA-256"):
                prepare.verify_master(root, "journey")
            record["sha256"] = "0" * 64
            (root / "journey.result.json").write_text(json.dumps(record))
            with self.assertRaisesRegex(ValueError, "master SHA-256"):
                prepare.verify_master(root, "journey")

    @unittest.skipUnless(shutil.which("ffmpeg") or shutil.which("afconvert"), "Existing AAC encoder required")
    def test_real_aac_full_length_no_added_music_and_verified_report(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / "requests").mkdir()
            original = signal(rate=44100)
            master = root / "journey-original.wav"
            prepare.write_pcm24(master, original, 44100)
            request = root / "requests/journey.json"
            request.write_text(json.dumps({"model": "yue2", "instrumental": True, "duration": 180}))
            digest = prepare.sha256(master)
            (root / "journey.result.json").write_text(json.dumps({"sha256": digest, "requestHash": prepare.sha256(request)}))
            args = SimpleNamespace(input_dir=root, max_trim=2.5, fade_in=.035, fade_out=2.5,
                                   min_duration=175, max_duration=183, rms=.12, peak=.72)
            result = prepare.prepare("journey", args)
            report = json.loads((root / "prepared/journey.json").read_text())
            self.assertEqual(prepare.sha256(master), digest)
            self.assertEqual(report["masterSha256"], digest)
            self.assertEqual(report["edit"]["outputDuration"], 180)
            self.assertEqual(report["encoding"]["encodedInputFrames"], len(original))
            self.assertLessEqual(abs(result["decodedDuration"] - 180), 2048 / 44100)
            self.assertLessEqual(result["decodedPeak"], .95)
            self.assertGreater(result["decodedRms"], .05)
            self.assertLess(report["encoding"]["decodedLast100msRms"], .001)
            self.assertIs(report["review"]["listeningVerified"], False)
            for key in report["encoding"]:
                self.assertNotIn("loop", key.lower())
                self.assertNotIn("guard", key.lower())
            for ext in ("wav", "m4a"):
                path = root / f"prepared/journey.{ext}"
                self.assertEqual(report["artifacts"][path.name]["sha256"], prepare.sha256(path))


if __name__ == "__main__":
    unittest.main()
