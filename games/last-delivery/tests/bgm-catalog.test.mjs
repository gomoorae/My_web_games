import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {verifyBgmCatalog,verifyProjectBgm} from '../scripts/verify-bgm-catalog.mjs';
import {MUSIC_TRACKS} from '../dist/music-catalog.mjs';

const bytes=Buffer.from('reviewed music fixture'),hash=createHash('sha256').update(bytes).digest('hex');
const tracks={song:{src:'assets/music/song.m4a',duration:180}};
const fixture=()=>[{id:'song',file:'song.m4a',duration:180,artifacts:{'song.m4a':{sha256:hash}},
  contentReview:{purpose:'background-music',decision:'accept',audioSha256:hash,reviewedDurationSeconds:180,method:'fixture'}}];
test('release catalog contains only the exact reviewed BGM files',()=>{
  assert.equal(verifyProjectBgm(new URL('../',import.meta.url),MUSIC_TRACKS),3);
  assert.deepEqual(Object.keys(MUSIC_TRACKS),['journey','boss','ending']);
});
test('an unreviewed or rejected generated candidate cannot enter the playlist',()=>{
  const unreviewed=fixture();delete unreviewed[0].contentReview;
  assert.throws(()=>verifyBgmCatalog(tracks,unreviewed,()=>bytes),/reviewed background music/);
  for (const patch of [{decision:'reject'},{purpose:'sound-effect'}]) {
    const manifest=fixture();Object.assign(manifest[0].contentReview,patch);
    assert.throws(()=>verifyBgmCatalog(tracks,manifest,()=>bytes),/reviewed background music/);
  }
});
test('replacing a reviewed file or checking only its introduction is rejected',()=>{
  assert.throws(()=>verifyBgmCatalog(tracks,fixture(),()=>Buffer.from('different recording')),/changed after content review/);
  const partial=fixture();partial[0].contentReview.reviewedDurationSeconds=30;
  assert.throws(()=>verifyBgmCatalog(tracks,partial,()=>bytes),/complete catalog track/);
});
test('a stray catalog track cannot inherit another track review',()=>{
  const extra={...tracks,sfx:{src:'assets/music/impact.m4a',duration:2}};
  assert.throws(()=>verifyBgmCatalog(extra,fixture(),()=>bytes),/same unique tracks/);
  const alias=fixture();alias[0].file='different.m4a';
  assert.throws(()=>verifyBgmCatalog(tracks,alias,()=>bytes),/reviewed background music/);
});
