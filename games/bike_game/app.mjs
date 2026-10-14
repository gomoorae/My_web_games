import { Ride, VEHICLES } from './core.mjs?v=3.1.0';
import { Renderer } from './renderer.mjs?v=3.1.0';
import { RideAudio } from './audio.mjs?v=3.1.0';
import { CrashSequence, portraitFrame } from './presentation.mjs?v=3.1.0';
const $ = id => document.getElementById(id);
const storageKey = 'midnight-split-traffic-v1';
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
const wreck = new CrashSequence();
function resizeView() {
  const frame = portraitFrame($('arcade').clientWidth, $('arcade').clientHeight);
  $('game').style.width = frame.width + 'px'; $('game').style.height = frame.height + 'px';
  $('game').style.setProperty('--frame-scale', frame.scale);
  renderer.resize();
}
resizeView();
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
  $('sound').textContent = record.muted ? '효과음 OFF' : '효과음 ON';
  $('sound').setAttribute('aria-pressed', String(!record.muted));
  $('sound').setAttribute('aria-label', record.muted ? '효과음 켜기' : '효과음 끄기');
}
function titleRecord() {
  $('start-best').textContent = record.best ? '최고 ' + number(record.best) + '점 · 최장 ' + record.time.toFixed(1) + '초' : '첫 번째 생존 기록을 남겨보세요.';
}
function screens() {
  const state = ride.status, animating = state === 'crashed' && !wreck.done;
  $('game').dataset.state = animating ? 'wreck' : state;
  $('start-screen').hidden = state !== 'ready'; $('pause-screen').hidden = state !== 'paused';
  $('crash-screen').hidden = !animating; $('result-screen').hidden = state !== 'crashed' || animating;
  $('hud').hidden = state === 'ready' || state === 'crashed';
  $('pause').hidden = state !== 'running'; $('touch-controls').hidden = state !== 'running';
  audio.update(ride);
}
function start(sameRoad = false) {
  const seed = sameRoad ? ride.seed : Date.now();
  clearInput(); wreck.clear(); audio.silence(); ride.reset(seed); audio.unlock(); last = performance.now();
  nearUntil = 0; screens(); updateHud();
  notice('← → 로 조향 · 커브에서는 안쪽으로 방향을 잡으세요.', 3);
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
  clearInput(); wreck.begin(ride, renderer.reduced); nearUntil = noticeUntil = 0;
  const score = Math.floor(ride.score), isBest = score > record.best;
  record.best = Math.max(record.best, score); record.time = Math.max(record.time, ride.time);
  saveRecord(); titleRecord(); $('record-badge').hidden = !isBest;
  $('result-score').textContent = number(score); $('result-time').textContent = ride.time.toFixed(1) + '초';
  $('result-near').textContent = ride.nearCount + '회'; $('result-combo').textContent = '× ' + ride.maxCombo;
  $('result-cleared').textContent = ride.passed + '대';
  const side = ride.failure.side === 'left' ? '왼쪽' : '오른쪽';
  const obstacle = ride.failure.kind === 'rail' ? '가드레일' : (VEHICLES[ride.failure.kind]?.name || '차량');
  const particle = (obstacle.charCodeAt(obstacle.length - 1) - 0xac00) % 28 === 0 ? '와' : '과';
  $('result-title').textContent = '바이크 파손. 주행 종료.';
  $('result-message').textContent = side + ' ' + obstacle + particle + ' 충돌했습니다. 같은 배치로 다시 도전해보세요.';
  screens(); updateHud(); $('skip-crash').focus({ preventScroll: true });
}
function showResult() {
  if (ride.status !== 'crashed') return;
  wreck.skip(); screens(); $('retry').focus({ preventScroll: true });
}
function updateHud() {
  $('time').textContent = ride.time.toFixed(1) + ' s'; $('cleared').textContent = '추월 ' + ride.passed + '대';
  $('score').textContent = number(ride.score); $('best-hud').textContent = 'BEST ' + number(record.best);
  $('combo').textContent = ride.combo ? '× ' + ride.combo + ' COMBO' : '';
  $('combo-progress').style.width = ride.comboTime / 4.5 * 100 + '%';
}
$('start').addEventListener('click', () => start());
$('retry').addEventListener('click', () => start(true));
$('retry-pause').addEventListener('click', () => start(true));
$('pause').addEventListener('click', () => pause()); $('resume').addEventListener('click', resume);
$('to-title').addEventListener('click', () => { clearInput(); wreck.clear(); ride.reset(); ride.status = 'ready'; screens(); titleRecord(); $('start').focus({ preventScroll: true }); });
$('skip-crash').addEventListener('click', showResult);
$('sound').addEventListener('click', () => { record.muted = !record.muted; audio.setEnabled(!record.muted); audio.unlock(); saveRecord(); updateSound(); });
if (!document.fullscreenEnabled) $('fullscreen').hidden = true;
$('fullscreen').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await $('arcade').requestFullscreen(); }
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
window.addEventListener('resize', resizeView);
document.addEventListener('fullscreenchange', resizeView);
if ('ResizeObserver' in window) new ResizeObserver(resizeView).observe($('arcade'));
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
    if (event.type === 'curve') notice(event.direction > 0 ? '우커브 → 오른쪽으로 방향을 잡으세요' : '← 좌커브 · 왼쪽으로 방향을 잡으세요', 1.7);
    if (event.type === 'finish') finish();
  }
  if (ride.status === 'crashed' && !document.hidden && wreck.advance(dt)) showResult();
  audio.update(ride); renderer.draw(ride, now / 1000, wreck.snapshot());
  if (now - hudTime > 65) {
    hudTime = now; updateHud();
    $('notice').classList.toggle('show', now < noticeUntil && ride.status === 'running');
    $('near').classList.toggle('show', now < nearUntil && ride.status === 'running');
  }
  requestAnimationFrame(frame);
}
updateSound(); titleRecord(); screens(); $('loading').hidden = true; requestAnimationFrame(frame);
