#!/usr/bin/env python3
"""Prepare newly composed Flow Music tracks without looping or extending them.

The downloaded M4A and decoded PCM masters are retained. Requires Python 3.12+,
NumPy, and an installed AAC encoder. This script never calls a generator.
"""
import argparse
from datetime import datetime, timezone
import importlib.util
import json
from pathlib import Path
import tempfile

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location('pcm', ROOT / 'scripts/prepare-yue2-playlist.py')
pcm = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pcm)


def prepare(folder, source, request):
    key = source['id']
    original = folder / source['file']
    master = folder / source['decodedFile']
    if pcm.sha256(original) != source['sha256']:
        raise ValueError(f'{key}: downloaded original changed')
    reserved = json.loads((folder / 'reserved-remake-sources.json').read_text())['tracks']
    if any(source['sha256'] == old['sha256'] or source['pageUrl'] == old['page_url'] for old in reserved):
        raise ValueError(f'{key}: recording is reserved for another game')
    samples, rate, info = pcm.read_pcm(master)
    edited, edit = pcm.edit_complete_track(samples, rate, max_trim=0, fade_in=.035, fade_out=2.5)
    levels = pcm.amplitude(edited)
    gain = min(.12 / levels['rms'], .72 / levels['peak'])
    output = folder / 'prepared'
    output.mkdir(exist_ok=True)
    for ext in ('wav', 'm4a', 'json'):
        if (output / f'{key}.{ext}').exists():
            raise FileExistsError(f'{key}: prepared output already exists; preserve it before reprocessing')
    with tempfile.TemporaryDirectory(prefix=f'.{key}-', dir=output) as temporary:
        staging = Path(temporary)
        attempts = []
        for _ in range(3):
            pcm.write_pcm24(staging / f'{key}.wav', edited * gain, rate)
            encoded = pcm.encode_complete_aac(staging / f'{key}.wav', staging / f'{key}.m4a', rate, len(edited))
            attempts.append({'gain': gain, 'decodedPeak': encoded['decodedPeak']})
            if encoded['decodedPeak'] <= .95:
                break
            gain *= .92 / encoded['decodedPeak']
        else:
            raise ValueError(f'{key}: decoded audio exceeds headroom')
        report = {
            'id': key, 'title': source['title'], 'preparedAt': datetime.now(timezone.utc).isoformat(),
            'createdFor': 'Last Delivery',
            'generator': {'provider': request['provider'], 'model': request['model'],
                          'transport': request['transport'], 'sessionUrl': request['sessionUrl'],
                          'songId': source['songId'], 'pageUrl': source['pageUrl'],
                          'date': request['date'], 'referenceAudioUsed': False},
            'request': next(t for t in request['tracks'] if t['id'] == key),
            'sourceCollection': str(folder.relative_to(ROOT)),
            'original': {'file': source['file'], 'sha256': source['sha256'], 'bytes': source['bytes'], 'url': source['sourceUrl']},
            'masterSha256': pcm.sha256(master), 'sourceFormat': info,
            'sourceLevels': pcm.amplitude(samples), 'edit': edit,
            'normalization': {'targetRms': .12, 'samplePeakLimit': .72, 'decodedPeakLimit': .95, 'linearGain': gain, 'encodeAttempts': attempts},
            'encoding': {'codec': 'AAC-LC', 'container': 'M4A', **encoded},
            'duration': encoded['decodedDuration'],
            'artifacts': {f'{key}.{ext}': {'sha256': pcm.sha256(staging / f'{key}.{ext}'), 'bytes': (staging / f'{key}.{ext}').stat().st_size} for ext in ('wav', 'm4a')},
            'review': {'automatedTechnicalChecks': 'passed', 'listeningVerified': False,
                       'note': 'Content inspection must be completed separately before catalog acceptance.'},
        }
        (staging / f'{key}.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
        for ext in ('wav', 'm4a', 'json'):
            (staging / f'{key}.{ext}').replace(output / f'{key}.{ext}')
    return {'id': key, 'duration': report['duration'], 'decodedPeak': encoded['decodedPeak'], 'decodedRms': encoded['decodedRms']}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--input-dir', type=Path, default=ROOT / 'source_assets/audio/flow-music-2026-11-05')
    args = parser.parse_args()
    folder = args.input_dir.resolve()
    sources = json.loads((folder / 'sources.json').read_text())
    request = json.loads((folder / 'requests.json').read_text())
    if request['createdFor'] != 'Last Delivery only' or request['referenceAudioUsed'] is not False:
        raise ValueError('Expected newly composed Last Delivery instrumentals')
    for source in sources:
        print(json.dumps(prepare(folder, source, request), ensure_ascii=False), flush=True)


if __name__ == '__main__':
    main()
