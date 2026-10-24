// Packaging gate, not a music classifier: only explicitly reviewed, unchanged
// background-music assets may enter either the web or embedded playlist.
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';

export function verifyBgmCatalog(tracks, manifest, readAsset) {
  if (!Array.isArray(manifest)) throw Error('BGM review manifest is missing.');
  const ids=Object.keys(tracks);
  if (!ids.length || manifest.length!==ids.length || new Set(manifest.map(item=>item.id)).size!==ids.length) {
    throw Error('BGM catalog and review manifest must contain the same unique tracks.');
  }
  for (const [id,track] of Object.entries(tracks)) {
    const entry=manifest.find(item=>item.id===id),review=entry?.contentReview;
    if (!entry || track.src!==`assets/music/${entry.file}` || review?.purpose!=='background-music' || review.decision!=='accept') {
      throw Error(`${id}: only reviewed background music can be packaged.`);
    }
    const hash=createHash('sha256').update(readAsset(track.src)).digest('hex');
    if (hash!==review.audioSha256 || hash!==entry.artifacts?.[`${id}.m4a`]?.sha256) {
      throw Error(`${id}: audio changed after content review.`);
    }
    if (!Number.isFinite(track.duration) || !Number.isFinite(entry.duration) || !Number.isFinite(review.reviewedDurationSeconds) || Math.abs(track.duration-entry.duration)>.05 ||
        review.reviewedDurationSeconds<track.duration-.05 || !review.method) {
      throw Error(`${id}: content review must cover the complete catalog track.`);
    }
  }
  return ids.length;
}

export function verifyProjectBgm(root,tracks) {
  const manifest=JSON.parse(readFileSync(new URL('dist/assets/music/manifest.json',root),'utf8'));
  return verifyBgmCatalog(tracks,manifest,src=>readFileSync(new URL(`dist/${src}`,root)));
}
