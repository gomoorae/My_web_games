import {Game, W, H, STEP, clamp, VERSION,POWER_DURATION,STAGES} from './engine.mjs?v=0.4.1';
import {Renderer} from './render.mjs?v=0.4.1';
import {Sound} from './audio.mjs?v=0.4.1';
import {readRecords,writeRecords} from './records.mjs?v=0.4.1';

const $=id=>document.getElementById(id);
const game=new Game(), renderer=new Renderer($('game')), sound=new Sound();
let difficulty='normal',route='campaign',autofire=false,keys=new Set(),pointer=null,touchTarget=null,touchCharge=false;
let last=0,accumulator=0,visualTime=0,countdown=0,noticeTimer=0,previousState='ready';
let bests={campaign:{easy:0,normal:0},practice2:{easy:0,normal:0}},newBest=false,artReady=false,artFailed=false;
const format=n=>String(Math.floor(n)).padStart(7,'0');
const timeLabel=t=>String(Math.floor(t/60)).padStart(2,'0')+':'+String(Math.floor(t%60)).padStart(2,'0');
try{
  const saved=readRecords(localStorage);bests=saved;
  if(saved.muted===true){sound.enabled=false;}
  if(saved.motion===false)renderer.motion=false;
}catch{}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)renderer.motion=false;
function persist(){
  try{bests=writeRecords(localStorage,{...bests,muted:!sound.enabled,motion:renderer.motion});}catch{}
}
function saveBest(){
  newBest=game.score>bests[game.mode][game.difficulty];
  if(newBest){bests[game.mode][game.difficulty]=game.score;persist();}
}
function clearInput(){
  keys.clear();touchTarget=null;touchCharge=false;pointer=null;
  game.player.charging=false;game.player.charge=0;accumulator=0;
}
function getInput(){
  return {x:Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA')),
    y:Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW')),
    focus:keys.has('ShiftLeft')||keys.has('ShiftRight'),
    fire:keys.has('KeyZ')||autofire||pointer!==null,charge:keys.has('KeyC')||touchCharge,
    target:touchTarget};
}
function notice(text,seconds=2.8,warning=false){
  $('notice').textContent=text;$('notice').className='notice visible'+(warning?' warning':'');noticeTimer=seconds;
}
function updateSettings(){
  $('sound').setAttribute('aria-pressed',String(sound.enabled));$('sound-label').textContent=sound.enabled?'소리 켜짐':'소리 꺼짐';
  $('motion').setAttribute('aria-pressed',String(renderer.motion));
  $('motion').innerHTML='<span class="toggle-dot"></span>화면 흔들림 '+(renderer.motion?'켜짐':'꺼짐');
  $('autofire').setAttribute('aria-pressed',String(autofire));$('autofire').textContent='자동사격 '+(autofire?'ON':'OFF');
}
async function start(){
  if(!artReady){if(artFailed)location.reload();return;}
  clearInput();game.start(difficulty,route);previousState='playing';newBest=false;countdown=2.4;
  renderer.reset();
  $('title-screen').hidden=true;$('modal').hidden=true;$('countdown').hidden=false;
  $('notice').className='notice';noticeTimer=0;
  $('game').focus({preventScroll:true});
  await sound.unlock();sound.setPlaying(false);
}
function home(){
  clearInput();game.reset(difficulty,route);previousState='ready';countdown=0;sound.setPlaying(false);
  $('modal').hidden=true;$('title-screen').hidden=false;$('countdown').hidden=true;$('tutorial').hidden=true;
  $('notice').className='notice';noticeTimer=0;renderer.reset();$('start').focus({preventScroll:true});
}
function pause(){
  if(game.state!=='playing')return;
  game.pause();clearInput();sound.setPlaying(false);
  $('modal-kicker').textContent='TAKE A BREATH';$('modal-title').textContent='비행 일시정지';
  $('modal-copy').textContent='숨을 고르고 다시 하늘로.';
  $('result-stats').hidden=true;$('continue').hidden=false;$('retry').textContent='처음부터 다시 출격';
  $('modal').hidden=false;$('continue').focus({preventScroll:true});
}
async function resume(){
  if(game.state!=='paused')return;
  clearInput();game.resume();$('modal').hidden=true;$('game').focus({preventScroll:true});
  await sound.unlock();sound.setPlaying(countdown<=0);
}
function result(){
  clearInput();saveBest();sound.setPlaying(false);
  const win=game.state==='clear';
  $('modal-kicker').textContent=win?'MISSION COMPLETE':'THE SKY IS WAITING';
  $('modal-title').textContent=win?'항로를 되찾았다!':'다시 날아볼까?';
  $('modal-copy').textContent=win?(game.mode==='practice2'?'2스테이지 연습 완료. 템페스트를 격추했어!':'항구와 협곡의 항로를 되찾았다. 루미, 멋진 비행이었어!'):'P를 회수해 화력을 유지하고, 위험한 순간에는 X로 폭탄을 사용해 보세요.';
  $('result-stats').hidden=false;
  $('result-stats').innerHTML='<div class="result-score"><strong>'+format(game.score)+'</strong><span>'+(game.mode==='practice2'?'2스테이지 연습':'연속 출격')+' · '+(game.difficulty==='easy'?'쉬움':'보통')+'</span>'+(newBest?'<em>NEW PERSONAL BEST</em>':'')+'</div><div><strong>'+game.kills+'</strong><span>격추</span></div><div><strong>'+game.maxCombo+'</strong><span>최대 연속 격추</span></div><div><strong>'+timeLabel(game.time)+'</strong><span>비행 시간</span></div>';
  $('continue').hidden=true;$('retry').textContent='다시 출격하기 ↗';$('modal').hidden=false;$('retry').focus({preventScroll:true});
}
$('start').addEventListener('click',start);
$('retry').addEventListener('click',start);
$('continue').addEventListener('click',resume);
$('home').addEventListener('click',home);
$('pause').addEventListener('click',()=>game.state==='paused'?resume():pause());
$('sound').addEventListener('click',async()=>{await sound.unlock();sound.toggle();updateSettings();persist();});
$('motion').addEventListener('click',()=>{renderer.motion=!renderer.motion;updateSettings();persist();});
$('autofire').addEventListener('click',()=>{autofire=!autofire;updateSettings();});
async function toggleFullscreen(){
  try{
    if(document.fullscreenElement)await document.exitFullscreen();
    else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();
    else notice('브라우저의 전체화면 기능을 이용해 주세요.',3);
  }catch{notice('브라우저의 전체화면 기능을 이용해 주세요.',3);}
}
$('fullscreen').addEventListener('click',toggleFullscreen);
document.addEventListener('fullscreenchange',()=>{
  $('fullscreen').setAttribute('aria-pressed',String(!!document.fullscreenElement));
  $('fullscreen-label').textContent=document.fullscreenElement?'화면 복귀':'전체화면';
});
for(const button of document.querySelectorAll('[data-difficulty]')){
  button.addEventListener('click',()=>{
    difficulty=button.dataset.difficulty;
    for(const b of document.querySelectorAll('[data-difficulty]')){
      const chosen=b===button;b.classList.toggle('selected',chosen);b.setAttribute('aria-pressed',String(chosen));
    }
  });
}
for(const button of document.querySelectorAll('[data-route]'))button.addEventListener('click',()=>{
  route=button.dataset.route;game.reset(difficulty,route);renderer.reset();
  for(const b of document.querySelectorAll('[data-route]')){
    b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));
  }
  $('route-hint').textContent=route==='practice2'?'목숨 3 · 파워 3 · 폭탄 3으로 협곡부터 출격':'1 → 2스테이지 · 남은 목숨과 무장을 이어갑니다';
  ui();
});
const playKeys=new Set(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyW','KeyA','KeyS','KeyD','KeyZ','KeyX','KeyC','ShiftLeft','ShiftRight','Escape']);
window.addEventListener('keydown',e=>{
  if(e.code==='KeyF'&&!e.repeat){e.preventDefault();toggleFullscreen();return;}
  if(e.code==='Tab'&&!$('modal').hidden){
    const buttons=[...$('modal').querySelectorAll('button')].filter(b=>!b.hidden);
    const first=buttons[0],end=buttons[buttons.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();end.focus();}
    else if(!e.shiftKey&&document.activeElement===end){e.preventDefault();first.focus();}
    return;
  }
  if(e.code==='Escape'&&!e.repeat){e.preventDefault();game.state==='paused'?resume():pause();return;}
  if(e.code==='Enter'&&!e.repeat&&e.target.tagName!=='BUTTON'&&['ready','gameover','clear'].includes(game.state)){
    e.preventDefault();start();return;
  }
  if(game.state!=='playing'||!playKeys.has(e.code))return;
  e.preventDefault();keys.add(e.code);
  if(e.code==='KeyX'&&!e.repeat&&countdown<=0)game.bomb();
});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',()=>{if(game.state==='playing')pause();clearInput();});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){if(game.state==='playing')pause();clearInput();saveBest();}
});
window.addEventListener('pagehide',()=>{saveBest();});
window.addEventListener('resize',()=>{renderer.resize();if(game.state==='playing')pause();});

const canvas=$('game');
canvas.addEventListener('pointerdown',e=>{
  if(game.state!=='playing'||pointer!==null)return;
  e.preventDefault();canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);
  pointer={id:e.pointerId,x:e.clientX,y:e.clientY,px:game.player.x,py:game.player.y};
  touchTarget={x:game.player.x,y:game.player.y};
});
canvas.addEventListener('pointermove',e=>{
  if(!pointer||pointer.id!==e.pointerId)return;
  const box=canvas.getBoundingClientRect();
  touchTarget={x:pointer.px+(e.clientX-pointer.x)*W/box.width,y:pointer.py+(e.clientY-pointer.y)*H/box.height};
});
function endPointer(e){if(pointer?.id===e.pointerId){pointer=null;touchTarget=null;}}
canvas.addEventListener('pointerup',endPointer);canvas.addEventListener('pointercancel',endPointer);canvas.addEventListener('lostpointercapture',endPointer);
canvas.addEventListener('contextmenu',e=>e.preventDefault());
$('touch-charge').addEventListener('pointerdown',e=>{if(game.state!=='playing')return;e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);touchCharge=true;});
for(const name of ['pointerup','pointercancel','lostpointercapture'])$('touch-charge').addEventListener(name,()=>{touchCharge=false;});
$('touch-bomb').addEventListener('pointerdown',e=>{e.preventDefault();if(countdown<=0)game.bomb();});
let lastUi=0;
function ui(){
  const ready=game.state==='ready',mode=ready?difficulty:game.difficulty;
  const recordRoute=ready?route:game.mode;
  $('score').textContent=format(game.score);$('best').textContent=format(Math.max(bests[recordRoute][mode],ready?0:game.score));
  $('best-mode').textContent=(recordRoute==='practice2'?'연습 · ':'연속 · ')+(mode==='easy'?'쉬움':'보통');
  $('lives').textContent='♥ '.repeat(Math.max(0,game.lives)).trim()||'—';
  $('lives').setAttribute('aria-label','목숨 '+game.lives+'개');
  $('bombs').textContent='✦ '.repeat(game.bombs).trim()||'—';$('bombs').setAttribute('aria-label','폭탄 '+game.bombs+'개');
  $('touch-bomb-count').textContent=game.bombs;
  $('power').setAttribute('aria-label','공격 '+game.player.power+'단계');
  [...$('power').children].forEach((bar,i)=>bar.classList.toggle('filled',i<game.player.power));
  const timed=game.player.power>1;
  $('power-time').textContent=timed?Math.ceil(game.player.powerTime)+'초':'기본 화력';
  $('power-fill').style.width=(timed?game.player.powerTime/POWER_DURATION*100:100)+'%';
  $('power-clock').classList.toggle('warning',timed&&game.player.powerTime<=5);
  const charge=clamp(game.player.charge/1.15,0,1);
  $('charge-fill').style.width=(charge*100)+'%';$('charge-label').textContent=charge>=1?'손을 떼면 발사!':charge>0?'룬 에너지 충전 중':'길게 눌러 충전';
  $('flight-clock').textContent=timeLabel(game.time);
  $('status-text').textContent=({ready:'출격 대기',playing:countdown>0?'출격 준비':game.chapter,paused:'비행 일시정지',clear:'임무 완료',gameover:'비행 종료'})[game.state];
  $('pause').disabled=!['playing','paused'].includes(game.state);$('pause-label').textContent=game.state==='paused'?'계속하기':'일시정지';
  const spec=STAGES[game.stage];
  const stage=game.stageTime<spec.midAt?0:game.stageTime<spec.midStop+1?1:game.stageTime<spec.bossAt?2:3;
  $('mission-number').textContent='0'+game.stage;
  $('mission-title').textContent=spec.name;
  $('mission-copy').textContent=game.stage===1?'해적의 기함을 격추하고 협곡으로 향하세요.':'레이저 예고선을 읽고, 포대를 파괴해 길을 여세요.';
  document.querySelectorAll('.path-name').forEach((el,i)=>el.textContent=spec.route[i]);
  const subtitles=game.stage===1?['출격 · 적 편대','중간 보스','해적의 경계선','변신 보스']:['출격 · 교차 편대','포대 파괴 · 레이저','복합 편대 돌파','3단계 변신 보스'];
  document.querySelectorAll('.path-stop small').forEach((el,i)=>el.textContent=subtitles[i]);
  document.querySelectorAll('.path-stop').forEach((el,i)=>el.classList.toggle('active',i<=stage));
  $('path-fill').style.height=(stage/3*100)+'%';
  $('tutorial').hidden=game.state!=='playing'||game.time>7||countdown>0;
}
function loop(now){
  const dt=Math.min((now-(last||now))/1000,.1);last=now;visualTime+=dt;
  const input=getInput();
  if(game.state==='playing'){
    if(countdown>0){
      countdown-=dt;$('countdown').hidden=countdown<=0;
      $('countdown').textContent=countdown>1.6?'3':countdown>.8?'2':'1';
      if(countdown<=0){sound.setPlaying(true);notice('루미, 출격! 하늘길을 열자.',2);}
    }else{
      accumulator+=dt;
      while(accumulator>=STEP){game.step(STEP,input);accumulator-=STEP;if(game.state!=='playing'){accumulator=0;break;}}
    }
    if(noticeTimer>0){noticeTimer-=dt;if(noticeTimer<=0)$('notice').className='notice';}
  }
  const events=game.takeEvents();renderer.consume(events);sound.consume(events);
  for(const e of events){
    if(e.kind==='warning')notice(e.text,3.5,true);
    if(e.kind==='transform'){$('notice').className='notice';noticeTimer=0;}
    if(e.kind==='stageStart'){clearInput();notice(e.text,2.4);}
    if(e.kind==='message')notice(e.text,2.5);
  }
  if(game.state!==previousState){
    if(game.state==='clear'||game.state==='gameover')result();
    previousState=game.state;
  }
  renderer.draw(game,visualTime,dt,input);sound.update(!!game.boss);
  if(now-lastUi>80){ui();lastUi=now;}
  requestAnimationFrame(loop);
}
$('start').disabled=true;$('start').textContent='비행 준비 중…';
renderer.ready.then(()=>{
  artReady=true;$('start').disabled=false;$('start').innerHTML='출격하기 <span aria-hidden="true">↗</span>';
  $('asset-status').textContent='';$('asset-status').hidden=true;
}).catch(()=>{
  artFailed=true;$('start').disabled=false;$('start').textContent='그림 다시 불러오기';
  $('asset-status').textContent='그림을 불러오지 못했습니다. 연결을 확인한 뒤 다시 시도해 주세요.';
});
updateSettings();ui();requestAnimationFrame(loop);
// Read-only diagnostics for performance and manual QA; no gameplay shortcuts.
Object.defineProperty(window,'skyChaser',{value:Object.freeze({
  version:VERSION,
  snapshot:()=>({state:game.state,stage:game.stage,mode:game.mode,time:game.time,stageTime:game.stageTime,score:game.score,
    powerTime:game.player.powerTime,lasers:game.lasers.length,
    lives:game.lives,bombs:game.bombs,power:game.player.power,charge:game.player.charge,
    player:{x:game.player.x,y:game.player.y},enemies:game.enemies.length,bullets:game.bullets.length,
    boss:game.boss?{type:game.boss.type,hp:game.boss.hp,phase:game.boss.phase}:null,
    bombDamage:game.bombDamage,bomb:game.activeBomb?{name:game.activeBomb.spec.name,age:game.activeBomb.age,strikes:game.activeBomb.nextStrike}:null,autofire})
}),writable:false});
