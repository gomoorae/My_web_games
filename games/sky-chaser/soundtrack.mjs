import {MUSIC_CATALOG} from './music-catalog.mjs?v=0.9.2';
const $=id=>document.getElementById(id),audio=$('audio');audio.volume=.7;
const entries=[['title','타이틀 · 오프닝'],['stage1','STAGE 01 · 해풍의 항구'],['stage2','STAGE 02 · 뇌운의 협곡'],['stage3','STAGE 03 · 홍련의 조선소'],['boss1','BOSS 01 · 아이언 레이븐'],['boss2','BOSS 02 · 템페스트'],['boss3','BOSS 03 · 이그니스'],['ending','엔딩 · 돌아온 바람']];
let selected=null,serial=0;
for(const [index,[id,label]] of entries.entries()){
  const spec=MUSIC_CATALOG[id],button=document.createElement('button');button.className='track';button.type='button';button.dataset.track=id;button.setAttribute('aria-pressed','false');
  const number=document.createElement('span');number.className='number';number.textContent=String(index+1).padStart(2,'0');
  const copy=document.createElement('span');copy.className='track-copy';const small=document.createElement('small');small.textContent=label;const title=document.createElement('strong');title.textContent=spec.title||label;copy.append(small,title);
  const play=document.createElement('span');play.className='play';play.textContent='▶';play.setAttribute('aria-hidden','true');button.append(number,copy,play);
  button.onclick=async()=>{
    const token=++serial;$('player-message').textContent='';
    if(selected===id&&!audio.paused){audio.pause();return;}
    if(selected!==id||audio.error){selected=id;audio.src=spec.file;$('now-title').textContent=spec.title||label;}
    for(const b of document.querySelectorAll('[data-track]'))b.setAttribute('aria-pressed',String(b===button));
    $('player-state').textContent='LOADING';
    try{await audio.play();}catch{if(token===serial)$('player-message').textContent='재생 버튼을 다시 눌러 주세요.';}
  };
  $('tracks').append(button);
}
audio.addEventListener('playing',()=>{$('player-state').textContent='NOW PLAYING';$('player-message').textContent='';});
audio.addEventListener('pause',()=>{$('player-state').textContent='PAUSED';});
audio.addEventListener('ended',()=>{$('player-state').textContent='FINISHED';});
audio.addEventListener('error',()=>{$('player-state').textContent='READY';$('player-message').textContent='음악을 불러오지 못했어요. 연결을 확인하고 다시 눌러 주세요.';});
document.addEventListener('visibilitychange',()=>{if(document.hidden)audio.pause();});
window.addEventListener('pagehide',()=>{serial++;audio.pause();});
