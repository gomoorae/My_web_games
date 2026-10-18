// Stage music continues through midbosses; one final-boss theme lasts to stage end.
export const MUSIC_CATALOG={
  "stage1": {
    "id": "stage1",
    "title": "해풍의 항구",
    "file": "./assets/music/stage1.m4a",
    "kind": "music",
    "duration": 61.29866666666667,
    "loopStart": 5.512684,
    "loopBoundary": 56.71439,
    "loopEnd": 56.89439,
    "crossfadeSeconds": 0.18
  },
  "title": {
    "id": "title",
    "title": "빼앗긴 바람 — 루미의 테마",
    "file": "./assets/music/title.m4a",
    "kind": "music",
    "duration": 60.398666666666664,
    "loopStart": 3.420473,
    "loopBoundary": 59.511353,
    "loopEnd": 59.691353,
    "crossfadeSeconds": 0.18
  },
  "stage2": {
    "id": "stage2",
    "title": "뇌운을 가르는 날개",
    "file": "./assets/music/stage2.m4a",
    "kind": "music",
    "duration": 77.39866666666667,
    "loopStart": 2.15859,
    "loopBoundary": 74.86899,
    "loopEnd": 75.04899,
    "crossfadeSeconds": 0.18
  },
  "stage3": {
    "id": "stage3",
    "title": "홍련의 조선소",
    "file": "./assets/music/stage3.m4a",
    "kind": "music",
    "duration": 100.11866666666667,
    "loopStart": 16.475549,
    "loopBoundary": 86.877896,
    "loopEnd": 87.057896,
    "crossfadeSeconds": 0.18
  },
  "boss1": {
    "id": "boss1",
    "title": "아이언 레이븐 — 해적 기함",
    "file": "./assets/music/boss1.m4a",
    "kind": "music",
    "duration": 52.29866666666667,
    "loopStart": 6.561917,
    "loopBoundary": 47.701117,
    "loopEnd": 47.881117,
    "crossfadeSeconds": 0.18
  },
  "boss2": {
    "id": "boss2",
    "title": "템페스트 — 폭풍의 눈",
    "file": "./assets/music/boss2.m4a",
    "kind": "music",
    "duration": 57.69866666666667,
    "loopStart": 0.494643,
    "loopBoundary": 53.502003,
    "loopEnd": 53.682003,
    "crossfadeSeconds": 0.18
  },
  "boss3": {
    "id": "boss3",
    "title": "이그니스 — 마지막 비행",
    "file": "./assets/music/boss3.m4a",
    "kind": "music",
    "duration": 75.05866666666667,
    "loopStart": 0.362283,
    "loopBoundary": 70.720043,
    "loopEnd": 70.900043,
    "crossfadeSeconds": 0.18
  },
  "ending": {
    "id": "ending",
    "title": "돌아온 바람 — 배송 완료",
    "file": "./assets/music/ending.m4a",
    "kind": "music",
    "duration": 62.42,
    "loopStart": 8.41379,
    "loopBoundary": 56.70819,
    "loopEnd": 56.88819,
    "crossfadeSeconds": 0.18
  }
};
export function combatMusic(game){
  if(!game||game.state==='gameover')return null;
  // The final boss theme spans transformations, defeat effects and stage clear.
  if(game.finalDefeated)return `boss${game.stage||1}`;
  const boss=game.boss&&!game.boss.dead?game.boss:null;
  return {boss:'boss1',tempest:'boss2',ignis:'boss3'}[boss?.type]||`stage${game.stage||1}`;
}
export const storyMusic=id=>({opening:'title',raven:'boss1',canyon:'stage2',tempest:'boss2',foundry:'stage3',ignis:'boss3',ending:'ending'})[id]||'title';
