// Stage music continues through midbosses; one final-boss theme lasts to stage end.
export const MUSIC_CATALOG={
  "title": {
    "id": "title",
    "title": "빼앗긴 바람 — 루미의 테마",
    "file": "./assets/music/title-flow-a192124808.m4a",
    "kind": "music",
    "duration": 128.448,
    "loopStart": 24.430983,
    "loopBoundary": 104.432144,
    "loopEnd": 104.932011,
    "crossfadeSeconds": 0.499867
  },
  "stage1": {
    "id": "stage1",
    "title": "해풍을 가르는 날개",
    "file": "./assets/music/stage1-flow-1ef44cf8ce.m4a",
    "kind": "music",
    "duration": 177.621,
    "loopStart": 8.60472,
    "loopBoundary": 147.52056,
    "loopEnd": 147.934,
    "crossfadeSeconds": 0.41344
  },
  "stage2": {
    "id": "stage2",
    "title": "뇌운의 항로",
    "file": "./assets/music/stage2-flow-e4721ed762.m4a",
    "kind": "music",
    "duration": 165.80266666666665,
    "loopStart": 35.526184,
    "loopBoundary": 157.130237,
    "loopEnd": 157.530251,
    "crossfadeSeconds": 0.400013
  },
  "stage3": {
    "id": "stage3",
    "title": "홍련의 추격",
    "file": "./assets/music/stage3-flow-93a65921c9.m4a",
    "kind": "music",
    "duration": 177.536,
    "loopStart": 18.538429,
    "loopBoundary": 143.835524,
    "loopEnd": 144.19139,
    "crossfadeSeconds": 0.355867
  },
  "boss1": {
    "id": "boss1",
    "title": "아이언 레이븐 — 항로 돌파",
    "file": "./assets/music/boss1-flow-9140d671aa.m4a",
    "kind": "music",
    "duration": 126.208,
    "loopStart": 24.09624,
    "loopBoundary": 102.303062,
    "loopEnd": 102.679382,
    "crossfadeSeconds": 0.37632
  },
  "boss2": {
    "id": "boss2",
    "title": "템페스트 — 폭풍의 심장",
    "file": "./assets/music/boss2-flow-062f1f3d18.m4a",
    "kind": "music",
    "duration": 118.12266666666666,
    "loopStart": 11.152,
    "loopBoundary": 105.85152,
    "loopEnd": 106.19968,
    "crossfadeSeconds": 0.34816
  },
  "boss3": {
    "id": "boss3",
    "title": "이그니스 — 마지막 비행",
    "file": "./assets/music/boss3-flow-2bf89f033a.m4a",
    "kind": "music",
    "duration": 122.15466666666667,
    "loopStart": 7.958895,
    "loopBoundary": 106.429903,
    "loopEnd": 106.814623,
    "crossfadeSeconds": 0.38472
  },
  "ending": {
    "id": "ending",
    "title": "돌아온 바람 — 배송 완료",
    "file": "./assets/music/ending-flow-9521b9d3a9.m4a",
    "kind": "music",
    "duration": 119.381,
    "loopStart": 34.6248,
    "loopBoundary": 99.231791,
    "loopEnd": 99.808871,
    "crossfadeSeconds": 0.57708
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
