import {Game, W, H, STEP, clamp, VERSION,POWER_DURATION,STAGES,RUN_MODES,CHARGE_REQUIRED} from './engine.mjs?v=0.10.1';
import {Renderer} from './render.mjs?v=0.10.1';
import {Sound} from './audio.mjs?v=0.10.1';
import {readRecords,writeRecords} from './records.mjs?v=0.10.1';
import {FrameLoop} from './frame-loop.mjs?v=0.10.1';
import {PC_SENSITIVITY,cleanPcSensitivity} from './pc-controls.mjs?v=0.10.1';

import {StoryPlayer} from './story.mjs?v=0.10.1';
import {BOSS_STORIES,START_STORIES,STAGE_STORIES,STAGE_GOALS} from './story-core.mjs?v=0.10.1';

let story=null,audioEpoch=0;
const $=id=>document.getElementById(id);
const game=new Game(), renderer=new Renderer($('game')), sound=new Sound();
let pcSensitivity=PC_SENSITIVITY.default;
let difficulty='normal',route='campaign',keys=new Set(),pointer=null,touchTarget=null,touchCharge=false,chargeRequested=false;
let accumulator=0,visualTime=0,countdown=0,noticeTimer=0,previousState='ready';
let bests={campaign:{easy:0,normal:0},practice2:{easy:0,normal:0},practice3:{easy:0,normal:0}},newBest=false,artReady=false,artFailed=false;
const format=n=>String(Math.floor(n)).padStart(7,'0');
const timeLabel=t=>String(Math.floor(t/60)).padStart(2,'0')+':'+String(Math.floor(t%60)).padStart(2,'0');
const frameLoop=new FrameLoop({update:advance,draw:present,
  active:()=>game.state==='playing'&&!story?.active,
  animate:()=>!story?.active&&(game.state==='playing'||(['clear','gameover'].includes(game.state)&&renderer.hasEffects()))});
function invalidate(reset=false){lastUi=-Infinity;frameLoop.invalidate(reset);}
try{
  const saved=readRecords(localStorage);bests=saved;pcSensitivity=saved.pcSensitivity;
  sound.setVolumes(saved);
  if(saved.muted===true){sound.enabled=false;}
  if(saved.motion===false)renderer.motion=false;
}catch{}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)renderer.motion=false;
function persist(){
  try{bests=writeRecords(localStorage,{...bests,muted:!sound.enabled,motion:renderer.motion,pcSensitivity,musicVolume:sound.musicVolume,effectsVolume:sound.effectsVolume});}catch{}
}
function saveBest(){
  if(game.score>bests[game.mode][game.difficulty]){newBest=true;bests[game.mode][game.difficulty]=game.score;persist();}
}
function clearInput(){
  keys.clear();touchTarget=null;touchCharge=false;pointer=null;chargeRequested=false;
  game.player.chargeHeld=false;accumulator=0;
}
function getInput(){
  return {x:Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA')),
    y:Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW')),
    focus:keys.has('ShiftLeft')||keys.has('ShiftRight'),moveScale:pcSensitivity,
    fire:true,charge:keys.has('KeyZ')||touchCharge,chargePressed:chargeRequested,
    target:touchTarget};
}
function notice(text,seconds=2.8,warning=false){
  $('notice').textContent=text;$('notice').className='notice visible'+(warning?' warning':'');noticeTimer=seconds;
}
function sensitivityLabel(){
  const label=Math.round(pcSensitivity*100)+'%';
  $('pc-sensitivity').value=String(pcSensitivity);$('pc-sensitivity-value').textContent=label;
  $('pc-sensitivity').setAttribute('aria-valuetext',label);
}
function updateSettings(){
  sensitivityLabel();
  for(const [id,value] of [['music',sound.musicVolume],['effects',sound.effectsVolume]]){$(id+'-volume').value=String(Math.round(value*100));$(id+'-volume-value').textContent=Math.round(value*100)+'%';}
  $('sound').setAttribute('aria-pressed',String(sound.enabled));$('sound-label').textContent=sound.enabled?'소리 켜짐':'소리 꺼짐';
  $('motion').setAttribute('aria-pressed',String(renderer.motion));
  $('motion').innerHTML='<span class="toggle-dot"></span>화면 흔들림 '+(renderer.motion?'켜짐':'꺼짐');
}
function start(){
  if(story?.active)return;
  if(!artReady){beginRun();return;}
  if(story.play(START_STORIES[route],{route,onDone:beginRun}))return;
  beginRun();
}
async function beginRun(){
  if(!$('pc-settings').hidden)return;
  if(!artReady){if(artFailed)location.reload();return;}
  story.resetRun();clearInput();game.start(difficulty,route);previousState='playing';newBest=false;countdown=2.4;
  sound.battle(game,true);
  renderer.reset();
  $('title-screen').hidden=true;$('modal').hidden=true;$('countdown').hidden=false;
  $('notice').className='notice';noticeTimer=0;
  $('game').focus({preventScroll:true});
  invalidate(true);
  const epoch=++audioEpoch;await sound.unlock();if(epoch!==audioEpoch||story.active||game.state!=='playing')return;sound.setAudible(true);sound.setPlaying(true);
}
function home(){
  story?.cancel();audioEpoch++;sound.setAudible(false);
  clearInput();game.reset(difficulty,route);previousState='ready';countdown=0;sound.setPlaying(false);
  sound.title();sound.setAudible(!document.hidden);
  $('modal').hidden=true;$('title-screen').hidden=false;$('countdown').hidden=true;$('tutorial').hidden=true;
  $('notice').className='notice';noticeTimer=0;renderer.reset();$('start').focus({preventScroll:true});
  invalidate(true);
}
function pause(){
  if(story?.active){story.interrupt();return;}
  if(game.state!=='playing')return;
  audioEpoch++;sound.setAudible(false);
  game.pause();clearInput();sound.setPlaying(false);
  $('modal-kicker').textContent='TAKE A BREATH';$('modal-title').textContent='비행 일시정지';
  $('modal-copy').textContent='숨을 고르고 다시 하늘로.';
  $('result-stats').hidden=true;$('continue').hidden=false;$('retry').textContent='처음부터 다시 출격';
  $('modal').hidden=false;$('continue').focus({preventScroll:true});
  invalidate(true);
}
async function resume(){
  if(game.state!=='paused'||story?.active||!$('pc-settings').hidden)return;
  clearInput();game.resume();$('modal').hidden=true;$('game').focus({preventScroll:true});
  invalidate(true);
  const epoch=++audioEpoch;await sound.unlock();if(epoch!==audioEpoch||story.active||game.state!=='playing')return;sound.setAudible(true);sound.setPlaying($('pc-settings').hidden);
}
function result(){
  clearInput();saveBest();
  if(game.state==='clear'&&story.play('ending',{route:game.mode,onDone:showResult}))return;
  showResult();
}
function showResult(){
  clearInput();saveBest();
  const win=game.state==='clear';
  sound.finish(game);
  $('modal-kicker').textContent=win?'MISSION COMPLETE':'THE SKY IS WAITING';
  $('modal-title').textContent=win?'항로를 되찾았다!':'다시 날아볼까?';
  $('modal-copy').textContent=win?(game.mode==='practice2'?'2스테이지 연습 완료. 템페스트를 격추했어!':game.mode==='practice3'?'3스테이지 연습 완료. 이그니스를 격추했어!':'항구와 협곡, 홍련의 조선소까지. 모든 항로를 되찾았다!'):'P를 회수해 화력을 유지하고, 위험한 순간에는 X로 폭탄을 사용해 보세요.';
  $('result-stats').hidden=false;
  $('result-stats').innerHTML='<div class="result-score"><strong>'+format(game.score)+'</strong><span>'+RUN_MODES[game.mode].name+' · '+(game.difficulty==='easy'?'쉬움':'보통')+'</span>'+(newBest?'<em>NEW PERSONAL BEST</em>':'')+'</div><div><strong>'+game.kills+'</strong><span>격추</span></div><div><strong>'+game.maxCombo+'</strong><span>최대 연속 격추</span></div><div><strong>'+timeLabel(game.time)+'</strong><span>비행 시간</span></div>';
  $('continue').hidden=true;$('retry').textContent='다시 출격하기 ↗';$('modal').hidden=false;$('retry').focus({preventScroll:true});
}
$('start').addEventListener('click',start);
$('retry').addEventListener('click',start);
$('continue').addEventListener('click',resume);
$('home').addEventListener('click',home);
$('pause').addEventListener('click',()=>game.state==='paused'?resume():pause());
$('sound').addEventListener('click',async()=>{await sound.unlock();sound.toggle();updateSettings();persist();});
for(const [id,key] of [['music','musicVolume'],['effects','effectsVolume']]){
  $(id+'-volume').addEventListener('input',e=>{sound.setVolumes({[key]:Number(e.target.value)/100});$(id+'-volume-value').textContent=e.target.value+'%';});
  $(id+'-volume').addEventListener('change',persist);
}
$('motion').addEventListener('click',()=>{renderer.motion=!renderer.motion;updateSettings();persist();invalidate();});
function openSettings(){
  if(story?.active)return;
  pause();clearInput();$('pc-settings').hidden=false;sensitivityLabel();$('pc-sensitivity').focus({preventScroll:true});
}
function closeSettings(){
  persist();clearInput();$('pc-settings').hidden=true;$('pc-settings-open').focus({preventScroll:true});invalidate();
}
$('pc-settings-open').addEventListener('click',openSettings);
$('pc-settings-close').addEventListener('click',closeSettings);
$('pc-sensitivity').addEventListener('input',e=>{pcSensitivity=cleanPcSensitivity(Number(e.target.value));sensitivityLabel();});
$('pc-sensitivity').addEventListener('change',persist);
$('pc-sensitivity-reset').addEventListener('click',()=>{pcSensitivity=PC_SENSITIVITY.default;sensitivityLabel();persist();});
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
  $('route-hint').textContent=RUN_MODES[route].hint;
  invalidate();
});
const playKeys=new Set(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyW','KeyA','KeyS','KeyD','KeyX','KeyZ','ShiftLeft','ShiftRight','Escape']);
window.addEventListener('keydown',e=>{
  if(story?.active)return;
  if(!$('pc-settings').hidden){
    if(e.code==='Escape'&&!e.repeat){e.preventDefault();closeSettings();}
    if(e.code==='Tab'){
      const items=[...$('pc-settings').querySelectorAll('input,button')],first=items[0],last=items.at(-1);
      if(!$('pc-settings').contains(document.activeElement)||!e.shiftKey&&document.activeElement===last||e.shiftKey&&document.activeElement===first){e.preventDefault();(e.shiftKey?last:first).focus();}
    }
    return;
  }
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
  if(e.code==='KeyZ'){if(e.repeat)return;chargeRequested=true;}
  e.preventDefault();keys.add(e.code);
  if(e.code==='KeyX'&&!e.repeat&&countdown<=0)game.bomb();
});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',()=>{if(game.state==='playing')pause();clearInput();sound.setAudible(false);});
function restoreIdleAudio(){if(!document.hidden&&['ready','clear','gameover'].includes(game.state)&&!story?.active){sound.setAudible(true);if(sound.ctx)void sound.unlock();}}
window.addEventListener('focus',restoreIdleAudio);
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){if(game.state==='playing')pause();clearInput();saveBest();sound.setAudible(false);}
  else restoreIdleAudio();
  frameLoop.suspend(document.hidden);
});
window.addEventListener('pagehide',()=>{saveBest();sound.setAudible(false);});
window.addEventListener('resize',()=>{renderer.resize();if(game.state==='playing')pause();invalidate(true);});

const canvas=$('game');
canvas.addEventListener('pointerdown',e=>{
  if(game.state!=='playing'||story?.active||pointer!==null)return;
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
$('touch-charge').addEventListener('pointerdown',e=>{if(game.state!=='playing')return;e.preventDefault();e.currentTarget.setPointerCapture(e.pointerId);touchCharge=true;chargeRequested=true;});
for(const name of ['pointerup','pointercancel','lostpointercapture'])$('touch-charge').addEventListener(name,()=>{touchCharge=false;});
$('touch-bomb').addEventListener('pointerdown',e=>{e.preventDefault();if(countdown<=0)game.bomb();});
let lastUi=0;
function text(el,value){value=String(value);if(el.textContent!==value)el.textContent=value;}
function attribute(el,key,value){value=String(value);if(el.getAttribute(key)!==value)el.setAttribute(key,value);}
function ui(){
  const ready=game.state==='ready',mode=ready?difficulty:game.difficulty;
  const recordRoute=ready?route:game.mode;
  text($('score'),format(game.score));text($('best'),format(Math.max(bests[recordRoute][mode],ready?0:game.score)));
  text($('best-mode'),(recordRoute==='campaign'?'연속 · ':RUN_MODES[recordRoute].startStage+'연습 · ')+(mode==='easy'?'쉬움':'보통'));
  text($('lives'),'♥ '.repeat(Math.max(0,game.lives)).trim()||'—');
  attribute($('lives'),'aria-label','목숨 '+game.lives+'개');
  text($('bombs'),'✦ '.repeat(game.bombs).trim()||'—');attribute($('bombs'),'aria-label','폭탄 '+game.bombs+'개');
  text($('touch-bomb-count'),game.bombs);
  attribute($('power'),'aria-label','공격 '+game.player.power+'단계');
  [...$('power').children].forEach((bar,i)=>bar.classList.toggle('filled',i<game.player.power));
  const timed=game.player.power>1;
  text($('power-time'),timed?Math.ceil(game.player.powerTime)+'초':'기본 화력');
  $('power-fill').style.width=(timed?game.player.powerTime/POWER_DURATION*100:100)+'%';
  $('power-clock').classList.toggle('warning',timed&&game.player.powerTime<=5);
  const charge=clamp(game.player.charge/CHARGE_REQUIRED,0,1),chargeReady=charge>=1;
  $('charge-fill').style.width=(charge*100)+'%';text($('charge-label'),chargeReady?'Z · 발사 가능':charge>0?'적중 충전 '+Math.floor(charge*100)+'%':'적중으로 충전');
  $('charge-fill').classList.toggle('ready',chargeReady);
  $('touch-charge').disabled=!chargeReady||game.state!=='playing'||countdown>0||game.introTimer>0;
  text($('touch-charge').querySelector('small'),chargeReady?'발사 가능':Math.floor(charge*100)+'%');
  text($('flight-clock'),timeLabel(game.time));
  text($('status-text'),({ready:'출격 대기',playing:countdown>0?'출격 준비':game.chapter,paused:'비행 일시정지',clear:'임무 완료',gameover:'비행 종료'})[game.state]);
  $('pause').disabled=!['playing','paused'].includes(game.state);text($('pause-label'),game.state==='paused'?'계속하기':'일시정지');
  const spec=STAGES[game.stage];
  const stage=game.stageTime<spec.midAt?0:game.stageTime<spec.midStop+1?1:game.stageTime<spec.bossAt?2:3;
  text($('mission-number'),'0'+game.stage);
  text($('mission-title'),spec.name);
  text($('mission-copy'),STAGE_GOALS[game.stage]);
  document.querySelectorAll('.path-name').forEach((el,i)=>text(el,spec.route[i]));
  const subtitles=game.stage===1?['출격 · 적 편대','중간 보스','해적의 경계선','변신 보스']:game.stage===2?['출격 · 교차 편대','포대 파괴 · 레이저','복합 편대 돌파','3단계 변신 보스']:['포탄 요격 · 곡선탄','화로 포대 파괴','폭발 지점 회피','기계룡 각성 · 과열'];
  document.querySelectorAll('.path-stop small').forEach((el,i)=>text(el,subtitles[i]));
  document.querySelectorAll('.path-stop').forEach((el,i)=>el.classList.toggle('active',i<=stage));
  $('path-fill').style.height=(stage/3*100)+'%';
  text($('tutorial').querySelector('strong'),game.stage===3?'주황색 포탄은 쏴서 없애보자!':'하늘길을 열어볼까?');
  text($('tutorial').querySelector('span'),game.stage===3?'주황색 포탄 요격 · 보라색 탄은 휘어져 날아와요':'방향키 이동 · Shift 정밀 이동 · X 폭탄');
  $('tutorial').hidden=game.state!=='playing'||game.time>7||countdown>0;
}
function advance(dt){
  visualTime+=dt;
  const input=getInput();
  if(game.state==='playing'){
    if(countdown>0){
      countdown-=dt;$('countdown').hidden=countdown<=0;
      $('countdown').textContent=countdown>1.6?'3':countdown>.8?'2':'1';
      if(countdown<=0){sound.setPlaying(true);notice('루미, 출격! 하늘길을 열자.',2);}
    }else{
      accumulator+=dt;
      while(accumulator>=STEP){const stage=game.stage;game.step(STEP,input);chargeRequested=false;input.chargePressed=false;accumulator-=STEP;if(game.state!=='playing'||game.stage!==stage){accumulator=0;break;}}
    }
    if(noticeTimer>0){noticeTimer-=dt;if(noticeTimer<=0)$('notice').className='notice';}
  }
  const events=game.takeEvents();renderer.consume(events);sound.consume(events);
  for(const e of events){
    if(e.kind==='warning'){const id=BOSS_STORIES[game.boss?.type];if(!id||!story.play(id,{route:game.mode,once:true}))notice(e.text,3.5,true);}
    if(e.kind==='transform'){$('notice').className='notice';noticeTimer=0;}
    if(e.kind==='stageStart'){clearInput();if(!story.play(STAGE_STORIES[e.stage],{route:game.mode}))notice(e.text,2.4);}
    if(e.kind==='message')notice(e.text,2.5);
  }
  if(game.state!==previousState){
    if(game.state==='clear'||game.state==='gameover')result();
    previousState=game.state;
  }
  sound.update(game);
}
function present(dt,now){
  // The opaque title illustration already fills the arena. Paused scenes draw
  // once on invalidation; result effects finish before the scheduler goes idle.
  if(game.state!=='ready'&&!story?.active)renderer.draw(game,visualTime,dt,getInput());
  if(now-lastUi>80){ui();lastUi=now;}
}
$('start').disabled=true;$('start').textContent='비행 준비 중…';
renderer.ready.then(()=>{
  artReady=true;$('start').disabled=false;$('start').innerHTML='출격하기 <span aria-hidden="true">↗</span>';
  $('asset-status').textContent='';$('asset-status').hidden=true;
  invalidate();
}).catch(()=>{
  artFailed=true;$('start').disabled=false;$('start').textContent='그림 다시 불러오기';
  $('asset-status').textContent='그림을 불러오지 못했습니다. 연결을 확인한 뒤 다시 시도해 주세요.';
});
let storyStorage;try{storyStorage=localStorage;}catch{}
story=new StoryPlayer({storage:storyStorage,sprites:()=>renderer.art.sprites,artReady:renderer.ready,motion:()=>renderer.motion,
  onOpen:context=>{audioEpoch++;clearInput();sound.beginStory(context.sequence);sound.setAudible(!document.hidden);$('notice').className='notice';noticeTimer=0;invalidate(true);},
  onClose:({continues}={})=>{audioEpoch++;clearInput();if(!continues)sound.leaveStory(game);sound.setAudible(!document.hidden);invalidate(true);},
  onScene:async(scene,generation)=>{const epoch=++audioEpoch;await sound.unlock();if(epoch!==audioEpoch||!story.active||story.paused||generation!==story.generation)return;sound.setAudible(true);sound.storyScene(story.sequence);},
  onPause:paused=>{audioEpoch++;sound.setAudible(!paused&&!document.hidden);}
});
$('story-open').onclick=()=>story.openLibrary();
for(const event of ['pointerdown','keydown'])window.addEventListener(event,()=>{if(!document.hidden)void sound.unlock();},{once:true});
sound.setAudible(!document.hidden);
updateSettings();ui();frameLoop.suspend(document.hidden);
// Read-only diagnostics for performance and manual QA; no gameplay shortcuts.
Object.defineProperty(window,'skyChaser',{value:Object.freeze({
  version:VERSION,
  snapshot:()=>({state:game.state,stage:game.stage,mode:game.mode,time:game.time,stageTime:game.stageTime,score:game.score,
    powerTime:game.player.powerTime,lasers:game.lasers.length,mortars:game.mortars.length,shellsDestroyed:game.shellsDestroyed,
    lives:game.lives,bombs:game.bombs,power:game.player.power,charge:game.player.charge,chargeRequired:CHARGE_REQUIRED,
    pcSensitivity,player:{x:game.player.x,y:game.player.y,r:game.player.r},enemies:game.enemies.length,bullets:game.bullets.length,
    boss:game.boss?{type:game.boss.type,hp:game.boss.hp,phase:game.boss.phase}:null,
    bombDamage:game.bombDamage,bomb:game.activeBomb?{name:game.activeBomb.spec.name,age:game.activeBomb.age,strikes:game.activeBomb.nextStrike}:null,autofire:true,shotsFired:game.shotsFired,story:story.snapshot(),audio:sound.snapshot()})
}),writable:false});
