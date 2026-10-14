import { Ride } from './core.mjs?v=3.0.0-a1';
import { Renderer } from './renderer.mjs?v=3.0.0-a1';
import { RideAudio } from './audio.mjs?v=3.0.0-a1';
const $ = id => document.getElementById(id);
const storageKey = 'midnight-split-survival-v1';
function loadRecord() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return { best: Number.isFinite(data.best) && data.best > 0 ? data.best : 0,
      time: Number.isFinite(data.time) && data.time > 0 ? data.time : 0, muted: data.muted === true };
  } catch { return { best: 0, time: 0, muted: false }; }
}
const record = loadRecord();
const saveRecord = () => { try { localStorage.setItem(storageKey, JSON.stringify(record)); } catch {} };
const ride = new Ride(), renderer = new Renderer($('road')), audio = new RideAudio(!record.muted);
const keys = new Set(), pointers = new Map();
const controlCodes = new Set(['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD']);
let last = performance.now(), hudTime = 0, noticeUntil = 0, nearUntil = 0;
const number = n => Math.floor(n).toLocaleString('ko-KR');
function clearInput() {
  keys.clear(); pointers.clear();
  document.querySelectorAll('[data-control]').forEach(button => button.classList.remove('held'));
}
function input() {
  const touch = direction => [...pointers.values()].includes(direction);
  return { left: keys.has('ArrowLeft') || keys.has('KeyA') || touch('left'),
    right: keys.has('ArrowRight') || keys.has('KeyD') || touch('right') };
}
function notice(text, seconds = 2.5) {
  $('notice').textContent = text; noticeUntil = performance.now() + seconds * 1000;
}
function updateSound() {
  $('sound').textContent = record.muted ? '소리 OFF' : '소리 ON';
  $('sound').setAttribute('aria-pressed', String(!record.muted));
  $('sound').setAttribute('aria-label', record.muted ? '소리 켜기' : '소리 끄기');
}
function titleRecord() {
  $('start-best').textContent = record.best ? '최고 ' + number(record.best) + '점 · 최장 ' + record.time.toFixed(1) + '초' : '첫 번째 생존 기록을 남겨보세요.';
}
function screens() {
  const state = ride.status; $('game').dataset.state = state;
  $('start-screen').hidden = state !== 'ready'; $('pause-screen').hidden = state !== 'paused';
  $('result-screen').hidden = state !== 'crashed'; $('hud').hidden = state === 'ready';
  $('pause').hidden = state !== 'running'; $('touch-controls').hidden = state !== 'running';
  audio.update(ride);
}
function start(sameRoad = false) {
  const seed = sameRoad ? ride.seed : Date.now();
  clearInput(); ride.reset(seed); audio.unlock(); last = performance.now();
  nearUntil = 0; screens(); updateHud();
  notice('← → 로 빈틈을 찾으세요. 충돌하면 끝!', 2.6);
  document.activeElement?.blur();
}
function pause(reason = '앞의 틈을 읽고, 준비되면 이어 달리세요.') {
  if (ride.status !== 'running') return;
  ride.pause(); clearInput(); $('pause-reason').textContent = reason; screens();
  $('resume').focus({ preventScroll: true });
}
function resume() {
  if (ride.status !== 'paused') return;
  clearInput(); ride.resume(); audio.unlock(); last = performance.now(); screens(); $('resume').blur();
}
function finish() {
  clearInput(); const score = Math.floor(ride.score), isBest = score > record.best;
  record.best = Math.max(record.best, score); record.time = Math.max(record.time, ride.time);
  saveRecord(); titleRecord(); $('record-badge').hidden = !isBest;
  $('result-score').textContent = number(score); $('result-time').textContent = ride.time.toFixed(1) + '초';
  $('result-near').textContent = ride.nearCount + '회'; $('result-combo').textContent = '× ' + ride.maxCombo;
  $('result-cleared').textContent = ride.cleared + '회';
  const side = ride.failure.side === 'left' ? '왼쪽' : '오른쪽';
  $('result-title').textContent = ride.failure.kind === 'rail' ? '가드레일에 부딪혔어요.' : '틈을 놓쳤어요.';
  $('result-message').textContent = side + (ride.failure.kind === 'rail' ? ' 가드레일' : ride.failure.kind === 'truck' ? ' 트럭' : ' 차량') + '과 충돌했습니다. 같은 배치로 다시 도전해보세요.';
  screens(); updateHud(); $('retry').focus({ preventScroll: true });
}
function updateHud() {
  $('time').textContent = ride.time.toFixed(1) + ' s'; $('cleared').textContent = ride.cleared + '번 통과';
  $('score').textContent = number(ride.score); $('best-hud').textContent = 'BEST ' + number(record.best);
  $('combo').textContent = ride.combo ? '× ' + ride.combo + ' COMBO' : '';
  $('combo-progress').style.width = ride.comboTime / 4.5 * 100 + '%';
}
$('start').addEventListener('click', () => start());
$('retry').addEventListener('click', () => start(true));
$('retry-pause').addEventListener('click', () => start(true));
$('pause').addEventListener('click', () => pause()); $('resume').addEventListener('click', resume);
$('to-title').addEventListener('click', () => { clearInput(); ride.reset(); ride.status = 'ready'; screens(); titleRecord(); $('start').focus({ preventScroll: true }); });
$('sound').addEventListener('click', () => { record.muted = !record.muted; audio.setEnabled(!record.muted); audio.unlock(); saveRecord(); updateSound(); });
if (!document.fullscreenEnabled) $('fullscreen').hidden = true;
$('fullscreen').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await $('game').requestFullscreen(); }
  catch { notice('이 브라우저에서는 전체 화면을 지원하지 않습니다.'); }
});
document.addEventListener('keydown', event => {
  if (controlCodes.has(event.code)) { if (ride.status === 'running') event.preventDefault(); keys.add(event.code); }
  if (event.repeat) return;
  if (event.code === 'Escape' || event.code === 'KeyP') { event.preventDefault(); if (ride.status === 'running') pause(); else if (ride.status === 'paused') resume(); }
  if (event.code === 'KeyR' && ride.status !== 'ready') { event.preventDefault(); start(true); }
  if (event.code === 'Space' && ride.status === 'crashed') { event.preventDefault(); start(true); }
});
document.addEventListener('keyup', event => keys.delete(event.code));
for (const button of document.querySelectorAll('[data-control]')) {
  const refresh = () => button.classList.toggle('held', [...pointers.values()].includes(button.dataset.control));
  button.addEventListener('pointerdown', event => {
    if (ride.status !== 'running') return;
    event.preventDefault(); button.setPointerCapture(event.pointerId); pointers.set(event.pointerId, button.dataset.control); refresh();
  });
  const end = event => { pointers.delete(event.pointerId); refresh(); };
  button.addEventListener('pointerup', end); button.addEventListener('pointercancel', end); button.addEventListener('lostpointercapture', end);
  button.addEventListener('contextmenu', event => event.preventDefault());
}
window.addEventListener('blur', () => { clearInput(); pause('화면을 벗어나 자동으로 멈췄습니다.'); });
document.addEventListener('visibilitychange', () => { if (document.hidden) { clearInput(); pause('화면을 벗어나 자동으로 멈췄습니다.'); } });
window.addEventListener('resize', () => renderer.resize());
function frame(now) {
  const dt = (now - last) / 1000; last = now;
  if (dt > .5 && ride.status === 'running') pause('주행이 잠시 끊겨 멈췄습니다.');
  ride.advance(dt, input());
  for (const event of ride.drainEvents()) {
    audio.event(event);
    if (event.type === 'near' || event.type === 'double') {
      $('near-label').textContent = event.type === 'double' ? 'DOUBLE SPLIT' : event.perfect ? 'PERFECT SPLIT' : 'CLOSE CALL';
      $('near-points').textContent = '+' + number(event.points) + ' / ×' + event.combo; nearUntil = now + 700;
    }
    if (event.type === 'finish') finish();
  }
  audio.update(ride); renderer.draw(ride, now / 1000);
  if (now - hudTime > 65) {
    hudTime = now; updateHud();
    $('notice').classList.toggle('show', now < noticeUntil && ride.status === 'running');
    $('near').classList.toggle('show', now < nearUntil && ride.status === 'running');
  }
  requestAnimationFrame(frame);
}
updateSound(); titleRecord(); screens(); $('loading').hidden = true; requestAnimationFrame(frame);
