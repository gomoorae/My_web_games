"""Checks for PCM decoding and boundary editing, without model/GPU generation."""
import importlib.util
from pathlib import Path
import tempfile
import unittest
import wave

import numpy as np

spec = importlib.util.spec_from_file_location("prepare_yue2", Path(__file__).resolve().parents[1] / "scripts/prepare-yue2-bgm.py")
prepare = importlib.util.module_from_spec(spec)
spec.loader.exec_module(prepare)


class PrepareTests(unittest.TestCase):
    def test_packed_24bit_signed_extremes_and_stereo(self):
        values = np.tile(np.array([-8388608, -1, 0, 1, 8388607, 123456], dtype=np.int32), 16000)
        packed = np.column_stack((values & 255, (values >> 8) & 255, (values >> 16) & 255)).astype(np.uint8)
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "24bit.wav"
            with wave.open(str(path), "wb") as handle:
                handle.setparams((2, 3, 1000, len(values) // 2, "NONE", "not compressed"))
                handle.writeframes(packed.tobytes())
            pcm, rate, info = prepare.read_pcm(path)
        np.testing.assert_array_equal(pcm.ravel(), values / 8388608)
        self.assertEqual((rate, info["sampleWidthBytes"]), (1000, 3))

    def test_silence_trim_retains_margin_and_caps_removed_time(self):
        pcm = np.zeros((12000, 2))
        pcm[2000:10000] = .1
        start, end, _ = prepare.silence_bounds(pcm, 1000, max_trim=3)
        self.assertEqual((start, end), (1200, 10800))  # 10% limit per side
        start, end, _ = prepare.silence_bounds(pcm, 1000, max_trim=.5)
        self.assertEqual((start, end), (500, 11500))
        with self.assertRaises(ValueError):
            prepare.silence_bounds(np.zeros_like(pcm), 1000)

    def test_circular_boundary_preserves_adjacent_head_samples(self):
        t = np.arange(10000) / 1000
        pcm = np.column_stack((.2 * np.sin(t * 37), .1 * np.sin(t * 23 + .3)))
        loop, overlap = prepare.circular_crossfade(pcm, 1000, 1.5)
        self.assertEqual(len(loop), len(pcm) - overlap)
        np.testing.assert_array_equal(loop[0], pcm[overlap])
        np.testing.assert_allclose(loop[-1], pcm[overlap - 1], atol=1e-14)
        np.testing.assert_array_equal(loop[-overlap], pcm[-overlap])
        self.assertLessEqual(np.max(np.abs(loop)), np.max(np.abs(pcm)))


if __name__ == "__main__":
    unittest.main()
