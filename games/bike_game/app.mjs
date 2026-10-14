import { Ride, ROUTE_LENGTH, SECTORS, clamp } from './core.mjs?v=2.0.0-3';
import { Renderer } from './renderer.mjs?v=2.0.0-3';
import { RideAudio } from './audio.mjs?v=2.0.0-3';
const $=id=>document.getElementById(id),game=$('game');
const storageKey='midnight-split-v2';
function loadRecord(){try{const p=JSON.parse(localStorage.getItem(storageKey)||'{}');return{best:Number.isFinite(p.best)&&p.best>0?p.best:0,distance:Number.isFinite(p.distance)?clamp(p.distance,0,ROUTE_LENGTH):0,muted:p.muted===true};}catch{return{best:0,distance:0,muted:false};}}
let record=loadRecord();
function saveRecord(){try{localStorage.setItem(storageKey,JSON.stringify(record));}catch{}}
const ride=new Ride(),renderer=new Renderer($('road')),audio=new RideAudio(!record.muted);
const keys=new Set(),pointers=new Map();let last=performance.now(),hudTime=0,noticeUntil=0,nearUntil=0;
const controlCodes=new Set(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyA','KeyD','KeyW','KeyS','Space','ShiftLeft','ShiftRight']);
const number=n=>Math.floor(n).toLocaleString('ko-KR');
function clearInput(){keys.clear();pointers.clear();document.querySelectorAll('[data-control]').forEach(b=>b.classList.remove('held'));}
function input(){const touch=kind=>[...pointers.values()].some(v=>v===kind);return{left:keys.has('ArrowLeft')||keys.has('KeyA')||touch('left'),right:keys.has('ArrowRight')||keys.has('KeyD')||touch('right'),accelerate:keys.has('ArrowUp')||keys.has('KeyW')||touch('accelerate'),brake:keys.has('ArrowDown')||keys.has('KeyS')||keys.has('Space')||touch('brake'),boost:keys.has('ShiftLeft')||keys.has('ShiftRight')||touch('boost')};}
function notice(message,seconds=3){$('notice').textContent=message;noticeUntil=performance.now()+seconds*1000;$('notice').classList.add('show');}
function updateSoundButton(){$('sound').textContent=record.muted?'소리 OFF':'소리 ON';$('sound').setAttribute('aria-pressed',String(!record.muted));$('sound').setAttribute('aria-label',record.muted?'소리 켜기':'소리 끄기');}
function titleRecord(){$('start-best').textContent=record.best?'나의 최고 기록 '+number(record.best)+' · '+(record.distance/1000).toFixed(2)+' km':'첫 번째 기록을 남겨보세요.';}
function screens(){const state=ride.status;game.dataset.state=state;$('start-screen').hidden=state!=='ready';$('pause-screen').hidden=state!=='paused';$('result-screen').hidden=!['crashed','finished'].includes(state);$('hud').hidden=state==='ready';$('pause').hidden=state!=='running';$('touch-controls').hidden=state!=='running';audio.update(ride);}
function start(){clearInput();ride.reset();audio.unlock();last=performance.now();nearUntil=0;screens();updateHud();notice('커브에 맞춰 조향 · 근접 추월로 부스트 충전',4);$('start').blur();$('retry').blur();}
function pause(reason='준비되면 다시 도로로 돌아가세요.'){if(ride.status!=='running')return;ride.pause();clearInput();$('pause-reason').textContent=reason;screens();$('resume').focus({preventScroll:true});}
function resume(){if(ride.status!=='paused')return;clearInput();ride.resume();audio.unlock();last=performance.now();screens();$('resume').blur();}
function finish(completed){clearInput();const score=Math.floor(ride.score),newRecord=score>record.best;record.best=Math.max(record.best,score);record.distance=Math.max(record.distance,ride.distance);saveRecord();titleRecord();$('result-title').textContent=completed?'밤을 가르다.':'다음 틈을 노려봐요.';$('result-eyebrow').textContent=completed?'ALL SECTORS CLEAR':'RIDE ENDED';$('record-badge').hidden=!newRecord;$('result-score').textContent=number(score);$('result-distance').textContent=(ride.distance/1000).toFixed(2)+' km';$('result-near').textContent=ride.nearCount+' 회';$('result-combo').textContent='× '+ride.maxCombo;$('result-speed').textContent=Math.floor(ride.maxSpeed)+' km/h';$('result-message').textContent=completed?'완주 보너스 +'+number(ride.finishedBonus)+'점. 더 가까운 추월로 다음 기록을 노려보세요.':'급할 땐 브레이크. 빈틈이 보일 때 부스트를 사용하세요.';screens();updateHud();$('retry').focus({preventScroll:true});}
function updateHud(){
  $('score').textContent=number(ride.score);$('best-hud').textContent='BEST '+number(Math.max(record.best,ride.score));
  $('distance').textContent=(ride.distance/1000).toFixed(2)+' / 6.00 KM';$('route-progress').style.width=ride.distance/ROUTE_LENGTH*100+'%';
  $('sector').textContent='0'+(ride.sector+1)+' / '+SECTORS[ride.sector];$('speed').textContent=Math.round(ride.speed);
  $('speed-mode').textContent=ride.boosting?'NITRO':input().brake?'BRAKE':input().accelerate?'ACCELERATE':'CRUISE';
  $('boost-value').textContent=Math.floor(ride.boost);$('boost-progress').style.width=ride.boost+'%';$('combo').textContent=ride.combo?'× '+ride.combo+' COMBO':'CLEAN RUN';$('combo-progress').style.width=ride.comboTime/5*100+'%';
  $('health').setAttribute('aria-label','내구도 '+ride.health);[...$('health').children].forEach((bar,i)=>bar.classList.toggle('lost',i>=ride.health));
}
$('start').addEventListener('click',start);$('retry').addEventListener('click',start);$('retry-pause').addEventListener('click',start);$('pause').addEventListener('click',()=>pause());$('resume').addEventListener('click',resume);
$('to-title').addEventListener('click',()=>{clearInput();ride.reset();ride.status='ready';screens();titleRecord();$('start').focus({preventScroll:true});});
$('sound').addEventListener('click',()=>{record.muted=!record.muted;audio.setEnabled(!record.muted);audio.unlock();saveRecord();updateSoundButton();});
if(!document.fullscreenEnabled)$('fullscreen').hidden=true;
$('fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await game.requestFullscreen();}catch{notice('이 브라우저에서는 전체 화면을 지원하지 않습니다.');}});
document.addEventListener('keydown',event=>{
  if(controlCodes.has(event.code)){if(ride.status==='running')event.preventDefault();keys.add(event.code);}
  if(event.repeat)return;
  if(event.code==='Escape'||event.code==='KeyP'){event.preventDefault();if(ride.status==='running')pause();else if(ride.status==='paused')resume();}
  if(event.code==='KeyR'&&ride.status!=='ready'){event.preventDefault();start();}
});
document.addEventListener('keyup',event=>keys.delete(event.code));
for(const button of document.querySelectorAll('[data-control]')){
  const refresh=()=>button.classList.toggle('held',[...pointers.values()].includes(button.dataset.control));
  button.addEventListener('pointerdown',event=>{if(ride.status!=='running')return;event.preventDefault();button.setPointerCapture(event.pointerId);pointers.set(event.pointerId,button.dataset.control);refresh();});
  const end=event=>{pointers.delete(event.pointerId);refresh();};
  button.addEventListener('pointerup',end);button.addEventListener('pointercancel',end);button.addEventListener('lostpointercapture',end);
  button.addEventListener('contextmenu',event=>event.preventDefault());
}
window.addEventListener('blur',()=>{clearInput();pause('화면을 벗어나 자동으로 멈췄습니다.');});
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearInput();pause('화면을 벗어나 자동으로 멈췄습니다.');}});
window.addEventListener('resize',()=>renderer.resize());
function frame(now){
  const dt=(now-last)/1000;last=now;
  if(dt>.5&&ride.status==='running')pause('주행이 잠시 끊겨 안전하게 멈췄습니다.');
  ride.advance(dt,input());
  for(const event of ride.drainEvents()){
    audio.event(event);
    if(event.type==='near'){$('near-label').textContent=event.perfect?'PERFECT SPLIT':'CLOSE CALL';$('near-points').textContent='+'+number(event.points)+'  /  ×'+event.combo;nearUntil=now+950;}
    if(event.type==='hit')notice('충돌! 잠시 보호됩니다. 빈 차선으로 이동하세요.',2);
    if(event.type==='sector')notice('0'+(event.sector+1)+' '+SECTORS[event.sector]+' · '+(event.repaired?'내구도 회복 · ':'')+'부스트 +20',3.2);
    if(event.type==='finish')finish(event.completed);
  }
  audio.update(ride);renderer.draw(ride,now/1000);
  if(now-hudTime>80){hudTime=now;updateHud();$('notice').classList.toggle('show',now<noticeUntil);$('near').classList.toggle('show',now<nearUntil&&ride.status==='running');}
  requestAnimationFrame(frame);
}
updateSoundButton();titleRecord();screens();$('loading').hidden=true;requestAnimationFrame(frame);
