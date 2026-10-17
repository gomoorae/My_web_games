import {Game,STEP,W,H,VERSION,CHARGE_REQUIRED,RUN_MODES} from './engine.mjs?v=0.7.6';
import {Renderer} from './render.mjs?v=0.7.6';
import {Sound} from './audio.mjs?v=0.7.6';
import {FrameLoop} from './frame-loop.mjs?v=0.7.6';
import {MobileControls,mobileLayout,loadProfile,saveProfile,MOBILE_VERSION} from './mobile-core.mjs?v=0.7.6';

const $=id=>document.getElementById(id),game=new Game(),sound=new Sound();
let storage;try{storage=window.localStorage;}catch{}
const profile=loadProfile(storage),controls=new MobileControls(profile.sensitivity),keys=new Set(),captures=new Map();
sound.enabled=!profile.muted;
let renderer,loop,layout,layoutRequest=null,ready=false,assetFailed=false,difficulty='normal',route='campaign';
let countdown=0,accumulator=0,noticeTime=0,lastUi=-Infinity,audioEpoch=0,allowCompact=false;
const format=n=>String(Math.floor(n)).padStart(7,'0');
const put=(el,value)=>{value=String(value);if(el.textContent!==value)el.textContent=value;};
const writeProfile=()=>saveProfile(storage,profile);
const canAct=()=>game.state==='playing'&&countdown<=0&&game.introTimer<=0&&!game.finalDefeated&&!layout.blocked;
function invalidate(reset=false){lastUi=-Infinity;loop?.invalidate(reset);}
function padDisplay(){
  $('movement-pad').classList.toggle('active',controls.moveId!==null);$('thumb').hidden=controls.moveId===null;
  if(controls.last){const r=$('movement-pad').getBoundingClientRect();$('thumb').style.left=Math.max(16,Math.min(r.width-16,controls.last.x-r.left))+'px';$('thumb').style.top=Math.max(16,Math.min(r.height-16,controls.last.y-r.top))+'px';}
}
function resetInput(){
  controls.reset();keys.clear();accumulator=0;game.player.chargeHeld=false;
  for(const [id,el] of captures){try{if(el.hasPointerCapture(id))el.releasePointerCapture(id);}catch{}}
  captures.clear();padDisplay();
}
function stageInput(){
  keys.clear();accumulator=0;game.player.chargeHeld=false;controls.stageReset(game.player);
  for(const [id,el] of captures)if(id!==controls.moveId){try{if(el.hasPointerCapture(id))el.releasePointerCapture(id);}catch{}captures.delete(id);}
  padDisplay();
}
function quietAudio(){audioEpoch++;sound.setPlaying(false);if(sound.master)sound.master.gain.setTargetAtTime(0,sound.ctx.currentTime,.02);}
async function wakeAudio(){
  const epoch=++audioEpoch;await sound.unlock();
  if(epoch!==audioEpoch||game.state!=='playing')return;
  if(sound.master)sound.master.gain.setTargetAtTime(sound.enabled?.38:0,sound.ctx.currentTime,.02);
  sound.setPlaying(countdown<=0);
}
function saveBest(){
  if(game.score>profile.bests[game.mode][game.difficulty]){profile.bests[game.mode][game.difficulty]=Math.floor(game.score);writeProfile();}
}
function notice(message,seconds=2.5){put($('notice'),message);$('notice').hidden=false;noticeTime=seconds;}
function start(){
  if(!ready){if(assetFailed)location.reload();return;}
  if(layout.blocked)return;
  resetInput();game.start(difficulty,route);renderer.reset();countdown=2.4;noticeTime=0;
  $('title-screen').hidden=true;$('game-dialog').hidden=true;$('notice').hidden=true;$('countdown').hidden=false;
  $('game').focus({preventScroll:true});invalidate(true);wakeAudio();
}
function pause(){
  if(game.state!=='playing')return;
  game.pause();resetInput();quietAudio();saveBest();
  put($('dialog-kicker'),'TAKE A BREATH');put($('dialog-title'),'비행 일시정지');put($('dialog-copy'),'준비되면 다시 날아보자.');
  $('result-score').hidden=true;$('resume').hidden=false;put($('retry'),'다시 출격');$('game-dialog').hidden=false;invalidate(true);
}
function resume(){
  if(game.state!=='paused'||layout.blocked||!$('settings').hidden||document.hidden)return;
  resetInput();game.resume();$('game-dialog').hidden=true;$('game').focus({preventScroll:true});invalidate(true);wakeAudio();
}
function home(){
  saveBest();resetInput();quietAudio();game.reset(difficulty,route);renderer.reset();countdown=0;noticeTime=0;
  $('title-screen').hidden=false;$('game-dialog').hidden=true;$('countdown').hidden=true;$('notice').hidden=true;invalidate(true);
}
function result(){
  resetInput();audioEpoch++;sound.setPlaying(false);saveBest();const won=game.state==='clear';
  put($('dialog-kicker'),won?'MISSION COMPLETE':'TRY AGAIN');put($('dialog-title'),won?'항로를 되찾았다!':'다시 날아볼까?');
  put($('dialog-copy'),RUN_MODES[game.mode].name+' · '+(game.difficulty==='easy'?'쉬움':'보통'));
  put($('result-score'),format(game.score));$('result-score').hidden=false;$('resume').hidden=true;put($('retry'),'다시 출격하기');$('game-dialog').hidden=false;lastUi=-Infinity;
}
function resize(){
  layoutRequest=null;
  const touch=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
  const width=Math.min(document.documentElement.clientWidth,touch?850:480),height=Math.floor(window.visualViewport?.height||window.innerHeight);
  const s=getComputedStyle($('mobile-app'));
  const next=mobileLayout(width,height,{top:parseFloat(s.paddingTop),bottom:parseFloat(s.paddingBottom),left:parseFloat(s.paddingLeft),right:parseFloat(s.paddingRight)},{orientation:window.screen?.orientation?.type,allowCompact});
  const rotation=layout&&(Math.abs(next.width-layout.width)>2||!layout.blocked&&next.blocked);
  if(rotation)pause();
  layout=next;
  for(const [key,value] of Object.entries({'app-height':height,'field-width':next.fieldWidth,'field-height':next.fieldHeight,'header-height':next.header,'controls-height':next.controls,'gap':next.gap}))$('mobile-app').style.setProperty('--'+key,value+'px');
  $('mobile-app').style.width=width+'px';$('rotate').hidden=!next.blocked;
  if(next.blocked){resetInput();quietAudio();}
  else controls.rebase();
  if(renderer){
    renderer.resize();
    if(renderer.ratio>2){renderer.ratio=2;renderer.canvas.width=W*2;renderer.canvas.height=H*2;renderer.c.imageSmoothingEnabled=true;renderer.c.imageSmoothingQuality='high';}
  }
  padDisplay();invalidate(game.state!=='playing'||!!rotation);
}
function queueResize(){if(layoutRequest===null)layoutRequest=requestAnimationFrame(resize);}
resize();renderer=new Renderer($('game'));resize();

function updateSettings(){
  $('mobile-app').classList.toggle('left-handed',profile.leftHanded);
  $('sensitivity').value=String(profile.sensitivity);put($('sensitivity-value'),profile.sensitivity.toFixed(1));
  $('handedness').setAttribute('aria-pressed',String(profile.leftHanded));put($('handedness'),'이동 패드 · '+(profile.leftHanded?'오른쪽':'왼쪽'));
  $('sound').setAttribute('aria-pressed',String(sound.enabled));put($('sound'),sound.enabled?'소리 켜짐':'소리 꺼짐');
  $('fullscreen').hidden=!document.documentElement.requestFullscreen;put($('fullscreen'),document.fullscreenElement?'전체 화면 나가기':'전체 화면');
}
function ui(){
  const active=game.state!=='ready',p=game.player,q=Math.min(1,p.charge/CHARGE_REQUIRED),charged=q>=1;
  put($('status'),active?'♥ '+game.lives+' · P'+p.power+(p.power>1?' · '+Math.ceil(p.powerTime)+'초':''):'모바일 · 자동 사격');
  $('pause').disabled=!['playing','paused'].includes(game.state);put($('pause'),game.state==='paused'?'▶':'Ⅱ');$('pause').setAttribute('aria-label',game.state==='paused'?'계속하기':'일시정지');
  $('charge').disabled=!canAct()||!charged;$('charge').classList.toggle('ready',charged);
  $('charge-fill').style.transform='scaleX('+q+')';put($('charge-label'),charged?'발사!':q>0?'충전 '+Math.floor(q*100)+'%':'적중으로 충전');
  $('charge').setAttribute('aria-label',charged?'차지샷 발사':'차지샷 충전 '+Math.floor(q*100)+'퍼센트');
  $('bomb').disabled=!canAct()||game.bombs<=0||game.bombTimer>0;put($('bomb-count'),game.bombs+'개');$('bomb').setAttribute('aria-label','폭탄 '+game.bombs+'개');
}
function advance(dt){
  if(countdown>0){
    countdown=Math.max(0,countdown-dt);put($('countdown'),countdown>1.6?'3':countdown>.8?'2':'1');$('countdown').hidden=countdown<=0;
    if(countdown<=0)sound.setPlaying(true);
  }else{
    accumulator+=dt;
    while(accumulator>=STEP){
      if(game.introTimer>0)controls.rebase();
      const input=controls.sample(game.player,STEP);
      if(controls.moveId===null){input.x=Number(keys.has('ArrowRight')||keys.has('KeyD'))-Number(keys.has('ArrowLeft')||keys.has('KeyA'));input.y=Number(keys.has('ArrowDown')||keys.has('KeyS'))-Number(keys.has('ArrowUp')||keys.has('KeyW'));}
      const stage=game.stage;game.step(STEP,input);accumulator-=STEP;
      if(input.target&&game.stage===stage)game.player.bank+=(Math.max(-1,Math.min(1,(game.player.x-game.player.px)/(285*STEP)))-game.player.bank)*Math.min(1,STEP*12);
      if(game.state!=='playing'){accumulator=0;break;}
    }
  }
  if(noticeTime>0){noticeTime-=dt;if(noticeTime<=0)$('notice').hidden=true;}
  const events=game.takeEvents();renderer.consume(events);sound.consume(events);
  for(const e of events){
    if(e.kind==='warning')notice(e.text,3);
    if(e.kind==='message')notice(e.text);
    if(e.kind==='transform'){$('notice').hidden=true;noticeTime=0;}
    if(e.kind==='stageStart'){stageInput();notice(e.text,2.4);}
  }
  if(game.state==='clear'||game.state==='gameover')result();
  sound.update(!!game.boss);
}
function draw(dt,now){if(game.state!=='ready')renderer.draw(game,game.time,dt,{focus:false});if(now-lastUi>80){ui();lastUi=now;}}
loop=new FrameLoop({active:()=>game.state==='playing',animate:()=>game.state==='playing'||(['clear','gameover'].includes(game.state)&&renderer.hasEffects()),update:advance,draw});

function capture(el,e){try{el.setPointerCapture(e.pointerId);captures.set(e.pointerId,el);}catch{controls.end(e.pointerId);}}
const pad=$('movement-pad');
pad.addEventListener('pointerdown',e=>{
  if(game.state!=='playing'||layout.blocked||!$('settings').hidden||e.pointerType==='mouse'&&e.button!==0)return;
  e.preventDefault();if(controls.beginMove(e.pointerId,e.clientX,e.clientY,game.player)){capture(pad,e);padDisplay();}
});
pad.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'&&e.buttons===0){controls.end(e.pointerId);padDisplay();return;}if(controls.move(e.pointerId,e.clientX,e.clientY,$('game').getBoundingClientRect().width,game.player)){e.preventDefault();padDisplay();}});
function endPointer(e){
  const interrupted=e.type!=='pointerup'&&e.pointerId===controls.moveId;
  controls.end(e.pointerId);captures.delete(e.pointerId);padDisplay();
  if(interrupted)pause();
}
for(const name of ['pointerup','pointercancel','lostpointercapture'])pad.addEventListener(name,endPointer);
function action(kind){
  if(!canAct())return;
  if(kind==='bomb')game.bomb();
  if(kind==='charge'&&game.player.charge>=CHARGE_REQUIRED)controls.chargeRequested=true;
  invalidate();
}
for(const [id,kind] of [['charge','charge'],['bomb','bomb']]){
  const button=$(id);
  button.addEventListener('pointerdown',e=>{
    if(button.disabled||e.pointerType==='mouse'&&e.button!==0)return;
    e.preventDefault();if(controls.beginAction(e.pointerId,kind)){capture(button,e);action(kind);}
  });
  for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,endPointer);
  button.addEventListener('click',e=>{if(e.detail===0&&!button.disabled)action(kind);});
}
$('controls').addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('pointerup',endPointer,true);document.addEventListener('pointercancel',endPointer,true);
$('start').onclick=start;$('retry').onclick=start;$('resume').onclick=resume;$('home').onclick=home;
$('pause').onclick=()=>game.state==='paused'?resume():pause();
$('course').onchange=e=>{route=Object.hasOwn(RUN_MODES,e.target.value)?e.target.value:'campaign';game.reset(difficulty,route);renderer.reset();invalidate();};
for(const b of document.querySelectorAll('[data-difficulty]'))b.onclick=()=>{difficulty=b.dataset.difficulty;for(const x of document.querySelectorAll('[data-difficulty]'))x.setAttribute('aria-pressed',String(x===b));};
$('settings-open').onclick=()=>{pause();resetInput();$('settings').hidden=false;updateSettings();$('settings-close').focus({preventScroll:true});};
function closeSettings(){$('settings').hidden=true;resetInput();$('settings-open').focus({preventScroll:true});invalidate();}
$('settings-close').onclick=closeSettings;
$('sensitivity').oninput=e=>{profile.sensitivity=Number(e.target.value);controls.sensitivity=profile.sensitivity;put($('sensitivity-value'),profile.sensitivity.toFixed(1));};$('sensitivity').onchange=writeProfile;
$('handedness').onclick=()=>{profile.leftHanded=!profile.leftHanded;resetInput();updateSettings();writeProfile();};
$('sound').onclick=()=>{sound.toggle();profile.muted=!sound.enabled;updateSettings();writeProfile();};
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();put($('settings-message'),'');}catch{put($('settings-message'),'전체 화면을 사용할 수 없어도 그대로 플레이할 수 있어요.');}};
document.addEventListener('fullscreenchange',()=>{updateSettings();queueResize();});
window.addEventListener('resize',queueResize);window.visualViewport?.addEventListener('resize',queueResize);
window.screen?.orientation?.addEventListener?.('change',()=>{pause();resetInput();queueResize();});
$('rotate-continue').onclick=()=>{
  allowCompact=true;resetInput();resize();
  const target=!$('settings').hidden?$('settings-close'):game.state==='paused'?$('resume'):$('start');
  target.focus({preventScroll:true});
};
window.addEventListener('blur',()=>{pause();resetInput();});
document.addEventListener('visibilitychange',()=>{if(document.hidden){pause();resetInput();quietAudio();saveBest();}else queueResize();loop.suspend(document.hidden);});
window.addEventListener('pagehide',()=>{saveBest();quietAudio();resetInput();});
window.addEventListener('keydown',e=>{
  if(e.code==='Tab'){
    const modal=!$('rotate').hidden?$('rotate'):!$('settings').hidden?$('settings'):!$('game-dialog').hidden?$('game-dialog'):null;
    if(modal){const items=[...modal.querySelectorAll('button,a,input,select')].filter(x=>!x.disabled&&x.getClientRects().length);const first=items[0],last=items.at(-1);
      if(first&&(!modal.contains(document.activeElement)||!e.shiftKey&&document.activeElement===last||e.shiftKey&&document.activeElement===first)){e.preventDefault();(e.shiftKey?last:first).focus();return;}}
  }
  if(e.code==='Escape'&&!e.repeat){e.preventDefault();if(!$('settings').hidden)closeSettings();else game.state==='paused'?resume():pause();return;}
  if(!$('settings').hidden||layout.blocked||['INPUT','SELECT','BUTTON','A'].includes(e.target.tagName))return;
  if(e.code==='Enter'&&game.state==='ready'&&!e.repeat){e.preventDefault();start();return;}
  if(game.state!=='playing')return;
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyW','KeyA','KeyS','KeyD'].includes(e.code)){e.preventDefault();keys.add(e.code);}
  if(e.code==='KeyZ'&&!e.repeat){e.preventDefault();action('charge');}
  if(e.code==='KeyX'&&!e.repeat){e.preventDefault();action('bomb');}
});
window.addEventListener('keyup',e=>keys.delete(e.code));
renderer.ready.then(()=>{ready=true;$('start').disabled=false;put($('start'),'출격하기');$('asset-status').hidden=true;invalidate();}).catch(()=>{assetFailed=true;$('start').disabled=false;put($('start'),'그림 다시 불러오기');put($('asset-status'),'연결을 확인한 뒤 다시 눌러 주세요.');});
updateSettings();ui();loop.suspend(document.hidden);
Object.defineProperty(window,'skyChaserMobile',{value:Object.freeze({version:MOBILE_VERSION,coreVersion:VERSION,snapshot:()=>({state:game.state,time:game.time,stage:game.stage,score:game.score,lives:game.lives,bombs:game.bombs,charge:game.player.charge,chargeRequired:CHARGE_REQUIRED,player:{x:game.player.x,y:game.player.y},moving:controls.moveId!==null,pointers:controls.roles.size,sensitivity:profile.sensitivity,layout:{...layout}})}),writable:false});
