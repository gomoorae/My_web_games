(() => {
  'use strict';
  const { World, C, difficultyAt } = window.StarMunch;
  const $ = id => document.getElementById(id);
  const canvas = $('game'), ctx = canvas.getContext('2d', { alpha: false });
  const stage = $('stage');
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const format = n => Math.floor(n).toLocaleString('ko-KR');
  const frames = [[90,10,347,355],[422,10,677,355],[765,11,1054,361],[1137,13,1412,362],[83,439,330,703],[440,367,676,693],[779,371,1054,695],[1159,367,1408,713],[96,766,301,1045],[454,706,674,1031],[834,728,1052,1045],[1185,728,1412,1038]];
  const atlas = new Image();
  atlas.src = window.STAR_MUNCH_ASSETS?.atlas || 'assets/hero-atlas.webp';
  let world = new World(), loaded = false;
  let width = 1, height = 1, scale = 1, offsetX = 0, offsetY = 0;
  let accumulator = 0, previousTime = 0, ambientTime = 0, shake = 0;
  let toastUntil = 0, toastPriority = 0, lastMilestone = 0;
  let particles = [], floatingLabels = [], trail = [], rings = [];
  let queuedJump = false, touchDetected = matchMedia('(pointer: coarse)').matches;
  const keys = new Set(), touchDirections = new Map();
  let best = { height: 0, score: 0, flights: 0 }, muted = false;
  try {
    const record = JSON.parse(localStorage.getItem('star-munch-record-v1') || '{}');
    for (const key of Object.keys(best)) if (Number.isFinite(record[key]) && record[key] >= 0) best[key] = record[key];
    muted = localStorage.getItem('star-munch-muted') === 'true';
  } catch (_) { /* A flight also works with browser storage disabled. */ }
  let previousBest = best.height;
  const chargeDots = Array.from({ length: C.chargeMax }, () => {
    const dot = document.createElement('i'); $('charge-dots').appendChild(dot); return dot;
  });
  document.body.classList.toggle('touch-enabled', touchDetected);

  class Sound {
    constructor() { this.context = null; this.lastCoin = -1; }
    unlock() {
      if (muted) return;
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      if (!this.context) this.context = new Audio();
      if (this.context.state === 'suspended') this.context.resume().catch(() => {});
    }
    tone(frequency, duration = .12, delay = 0, type = 'sine', volume = .055, endFrequency = frequency) {
      if (muted || !this.context || this.context.state !== 'running') return;
      const ac = this.context, start = ac.currentTime + delay;
      const oscillator = ac.createOscillator(), gain = ac.createGain();
      oscillator.type = type; oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), start + duration);
      gain.gain.setValueAtTime(0, start); gain.gain.linearRampToValueAtTime(volume, start + .008);
      gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
      oscillator.connect(gain); gain.connect(ac.destination);
      oscillator.start(start); oscillator.stop(start + duration + .02);
    }
    play(name) {
      if (name === 'coin') {
        const now = this.context?.currentTime ?? 0;
        if (now - this.lastCoin < .055) return;
        this.lastCoin = now;
        const notes = [659, 740, 880, 988, 1109, 1319];
        this.tone(notes[world.pickups % notes.length], .12, 0, 'sine', .038);
      } else if (name === 'bounce') {
        this.tone(210, .17, 0, 'sine', .075, 790);
        this.tone(125, .12, 0, 'triangle', .035, 300);
      } else if (name === 'start' || name === 'leap') {
        this.tone(380, .2, 0, 'sine', .07, 950); this.tone(750, .16, .08, 'triangle', .025, 1400);
      } else if (name === 'boost') {
        this.tone(200, .6, 0, 'triangle', .06, 1100);
        [659, 880, 1109, 1319].forEach((f, i) => this.tone(f, .25, i * .08, 'sine', .055));
      } else if (name === 'hit') this.tone(160, .22, 0, 'triangle', .07, 65);
      else if (name === 'over') [440, 349, 294].forEach((f, i) => this.tone(f, .22, i * .13, 'sine', .05));
      else if (name === 'charged' || name === 'shield') {
        [880, 1175].forEach((f, i) => this.tone(f, .19, i * .08, 'sine', .04));
      } else if (name === 'shieldBreak' || name === 'smash') this.tone(600, .18, 0, 'triangle', .045, 160);
    }
  }
  const sound = new Sound();
  function setSoundUI() {
    $('sound-button').classList.toggle('muted', muted);
    $('sound-button').setAttribute('aria-label', muted ? '소리 켜기' : '소리 끄기');
    $('sound-button').title = muted ? '소리 켜기' : '소리 끄기';
    $('sound-button').setAttribute('aria-pressed', String(!muted));
  }
  function showToast(text, duration = 2.2, priority = 1) {
    if (world.time < toastUntil && priority < toastPriority) return;
    $('toast').textContent = text; $('toast').classList.add('visible');
    toastUntil = world.time + duration; toastPriority = priority;
  }
  function clearInputs() {
    keys.clear(); touchDirections.clear(); queuedJump = false;
    document.querySelectorAll('.touch-controls .pressed').forEach(button => button.classList.remove('pressed'));
  }
  function getAxis() {
    let left = keys.has('ArrowLeft') || keys.has('KeyA'), right = keys.has('ArrowRight') || keys.has('KeyD');
    for (const dir of touchDirections.values()) { if (dir < 0) left = true; if (dir > 0) right = true; }
    return Number(right) - Number(left);
  }
  function syncPhase() {
    const phase = world.phase;
    stage.dataset.phase = phase;
    $('start-screen').hidden = phase !== 'ready';
    $('pause-screen').hidden = phase !== 'paused';
    $('over-screen').hidden = phase !== 'over';
    $('pause-button').disabled = !['playing', 'paused'].includes(phase);
    $('pause-button').setAttribute('aria-label', phase === 'paused' ? '계속하기' : '일시정지');
    $('pause-button').title = phase === 'paused' ? '계속하기 (Esc)' : '일시정지 (Esc)';
    if (phase === 'playing') canvas.focus({ preventScroll: true });
    else if (phase === 'paused') $('resume-button').focus({ preventScroll: true });
    else if (phase === 'over') $('restart-button').focus({ preventScroll: true });
  }
  function newFlight() {
    if (!loaded) return;
    sound.unlock();
    if (world.phase === 'playing' || world.phase === 'paused') saveRecord();
    // Retain keyboard directions held through takeoff; jump is an independent input.
    touchDirections.clear(); queuedJump = false;
    particles = []; floatingLabels = []; trail = []; rings = [];
    accumulator = 0; shake = 0; toastUntil = 0; toastPriority = 0; lastMilestone = 0;
    previousBest = best.height;
    world = new World(); world.start();
    syncPhase(); processEvents(); updateHUD();
    showToast('별 하나에 폴짝! 다음 별을 골라요', 3, 1);
  }
  function pause() {
    if (world.pause()) { clearInputs(); accumulator = 0; syncPhase(); }
  }
  function resume() {
    if (world.resume()) { clearInputs(); accumulator = 0; syncPhase(); }
  }
  function requestLeap() {
    sound.unlock();
    if (world.phase === 'playing') {
      if (world.player.boost > 0) return;
      if (world.player.charge >= C.chargeMax) queuedJump = true;
      else showToast(`별 ${C.chargeMax - world.player.charge}개 더 모으면 도약!`, 1.2, 1);
    }
  }
  $('start-button').addEventListener('click', newFlight);
  $('restart-button').addEventListener('click', newFlight);
  $('pause-restart-button').addEventListener('click', newFlight);
  $('resume-button').addEventListener('click', resume);
  $('pause-button').addEventListener('click', () => world.phase === 'paused' ? resume() : pause());
  $('arcade-link').addEventListener('click', () => {
    if (world.phase === 'playing' || world.phase === 'paused') saveRecord();
  });
  $('home-button').addEventListener('click', event => {
    event.preventDefault();
    if (world.phase === 'playing' || world.phase === 'paused') saveRecord();
    clearInputs(); world = new World(); particles = []; trail = []; floatingLabels = []; rings = [];
    $('toast').classList.remove('visible'); syncPhase(); updateHUD();
  });
  $('sound-button').addEventListener('click', () => {
    muted = !muted; setSoundUI(); if (!muted) { sound.unlock(); sound.tone(880, .12); }
    try { localStorage.setItem('star-munch-muted', String(muted)); } catch (_) {}
    if (world.phase === 'playing') canvas.focus({ preventScroll: true });
  });
  window.addEventListener('keydown', event => {
    const code = event.code;
    if (!['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD', 'Space', 'Escape', 'KeyR', 'Enter'].includes(code)) return;
    // Preserve native keyboard activation for buttons and links.
    if ((code === 'Enter' || code === 'Space') && event.target.closest('button, a')) return;
    event.preventDefault();
    if (event.repeat) return;
    keys.add(code);
    if (code === 'Escape') { if (world.phase === 'playing') pause(); else if (world.phase === 'paused') resume(); }
    else if (code === 'KeyR' && world.phase !== 'ready') newFlight();
    else if (code === 'Space' || code === 'Enter') {
      if (world.phase === 'ready' || world.phase === 'over') newFlight();
      else if (world.phase === 'playing' && code === 'Space') requestLeap();
    }
  });
  window.addEventListener('keyup', event => keys.delete(event.code));
  window.addEventListener('blur', () => { clearInputs(); pause(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { clearInputs(); pause(); } });
  window.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch' && !touchDetected) {
      touchDetected = true; document.body.classList.add('touch-enabled');
    }
  }, { passive: true });
  function bindTouch(button, direction) {
    button.addEventListener('pointerdown', event => {
      event.preventDefault(); if (world.phase !== 'playing') return;
      button.setPointerCapture(event.pointerId); button.classList.add('pressed');
      if (direction) touchDirections.set(event.pointerId, direction); else requestLeap();
    });
    const release = event => {
      touchDirections.delete(event.pointerId); button.classList.remove('pressed');
    };
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('lostpointercapture', release);
  }
  bindTouch($('touch-left'), -1); bindTouch($('touch-right'), 1); bindTouch($('touch-jump'), 0);

  function burst(x, y, color, count = 8, intensity = 1) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2, speed = (50 + Math.random() * 120) * intensity;
      particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: .3 + Math.random() * .3, max: .6, size: 2 + Math.random() * 3, color, star: i % 3 === 0 });
    }
    if (particles.length > 220) particles.splice(0, particles.length - 220);
  }
  function processEvents() {
    for (const event of world.takeEvents()) {
      sound.play(event.type);
      if (event.type === 'coin') {
        burst(event.x, event.y, '#ffe395', event.ribbon ? 4 : 9);
        if (event.value > 1) floatingLabels.push({ x: event.x, y: event.y, text: '+3', life: .7 });
      } else if (event.type === 'bounce') {
        rings.push({ x: event.x, y: event.y - 18, life: .38 });
        burst(event.x, event.y - 16, '#fff6c0', 10, 1.2);
      } else if (event.type === 'leap') {
        burst(event.x, event.y - 20, '#fff3b8', 16, 1.8); shake = 2.5;
        rings.push({ x: event.x, y: event.y - 18, life: .38 });
      } else if (event.type === 'boost') {
        burst(event.x, event.y, '#fff3b0', 24, 1.8); shake = 2;
        showToast(`부스트! ${event.direction < 0 ? '←' : '→'} 별줄로 이동해요`, 1.6, 4);
      } else if (event.type === 'boostEnd') {
        showToast('다시 폴짝! 다음 별을 잡아요', 2.2, 3);
      } else if (event.type === 'charged') showToast(touchDetected ? '도약 충전 완료! ✦ 버튼' : '도약 충전 완료! SPACE', 1.8, 2);
      else if (event.type === 'shield') showToast('보호막이 생겼어요', 2.1, 3);
      else if (event.type === 'hit') {
        shake = 8; burst(event.x, event.y, '#809695', 15);
        showToast(world.player.charge === C.chargeMax ? '먹구름 조심! 도약으로 다시 올라가요' : '먹구름 조심! 가까운 별을 찾아요', 2.3, 3);
      } else if (event.type === 'shieldBreak') {
        burst(event.x, event.y, '#b2efe3', 20); shake = 3; showToast('보호막이 막아 줬어요!', 1.7, 2);
      } else if (event.type === 'smash') burst(event.x, event.y, '#b1ccd5', 16, 1.8);
      else if (event.type === 'over') finishFlight();
    }
  }
  function saveRecord() {
    best.height = Math.max(best.height, world.height); best.score = Math.max(best.score, world.score); best.flights++;
    try { localStorage.setItem('star-munch-record-v1', JSON.stringify(best)); } catch (_) {}
  }
  function finishFlight() {
    clearInputs(); $('toast').classList.remove('visible'); saveRecord();
    const isRecord = world.height > previousBest;
    $('result-eyebrow').textContent = isRecord ? 'YOUR NEW PERSONAL BEST' : 'A LOVELY LITTLE FLIGHT';
    $('result-title').textContent = isRecord ? '새로운 하늘에 닿았어요!' : '멋진 비행이었어요!';
    $('result-height').textContent = format(world.height); $('result-stars').textContent = format(world.stars);
    $('result-score').textContent = format(world.score); $('result-best').textContent = `${format(best.height)} m`;
    $('result-tip').textContent = world.height < 100 ? '공중에서 다음 별로 이동해 기다려 보세요.'
      : world.player.charge >= C.chargeMax ? (touchDetected ? '떨어질 땐 ✦ 버튼으로 한 번 더 도약해요.' : '떨어질 땐 SPACE로 한 번 더 도약해요.')
      : world.hits > 0 ? '먹구름을 돌아서 다음 별을 잡아 보세요.' : '별 8개를 모으면 도약이 다시 충전돼요.';
    syncPhase(); updateHUD();
  }
  let hudStamp = '';
  function updateHUD() {
    const p = world.player;
    const stamp = [world.height, world.stars, p.charge, Math.ceil(p.boost * 10), p.shield, best.height, world.phase].join('|');
    if (stamp === hudStamp) return; hudStamp = stamp;
    $('height').textContent = format(world.height); $('stars').textContent = format(world.stars);
    $('best-height').innerHTML = `${format(Math.max(best.height, world.height))}<small> m</small>`;
    const charged = p.charge >= C.chargeMax;
    $('charge-hud').classList.toggle('ready', charged);
    $('charge-label').textContent = p.boost > 0 ? '별줄을 향해 좌우 이동' : charged ? '도약 준비 완료' : `도약 충전 ${p.charge} / ${C.chargeMax}`;
    chargeDots.forEach((dot, i) => dot.classList.toggle('full', i < p.charge));
    $('touch-jump').classList.toggle('charging', !charged || p.boost > 0);
    $('touch-jump').setAttribute('aria-label', p.boost > 0 ? '부스트 중' : charged ? '충전 도약 준비 완료' : `도약 충전 중 ${p.charge} / 8`);
    const pills = [];
    if (p.boost > 0) pills.push(`<span class="effect-pill boost">✦ 부스트 <small>${p.boost.toFixed(1)}s</small></span>`);
    if (p.shield) pills.push('<span class="effect-pill">◇ 보호막</span>');
    $('effects-hud').innerHTML = pills.join('');
    const tier = difficultyAt(world.maxY).tier;
    $('zone-name').textContent = ['구름 정원 · 1단계', '먹구름 산책길 · 2단계', '바람 숲 · 3단계', '높은 하늘 · 4단계'][tier];
    if (world.phase === 'playing' && world.height >= lastMilestone + 100) {
      lastMilestone = Math.floor(world.height / 100) * 100;
      showToast(`${format(lastMilestone)} m · 조금 더 높이!`, 1.7, 1);
    }
  }

  function resize() {
    const rect = stage.getBoundingClientRect(); width = rect.width; height = rect.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    scale = Math.min(width / C.width, height / C.height);
    offsetX = (width - C.width * scale) / 2;
    offsetY = (height - C.height * scale) / 2;
  }
  new ResizeObserver(resize).observe(stage); resize();
  const screenY = y => C.height - (y - world.cameraBottom);
  function star(x, y, radius, color, rotation = -.5 * Math.PI, stroke = null) {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const angle = rotation + i * Math.PI / 5, r = radius * (i % 2 ? .48 : 1);
      if (!i) ctx.moveTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
      else ctx.lineTo(x + Math.cos(angle) * r, y + Math.sin(angle) * r);
    }
    ctx.closePath(); ctx.fillStyle = color; ctx.fill();
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.lineJoin = 'round'; ctx.stroke(); }
  }
  function cloud(x, y, size, color) {
    ctx.beginPath();
    ctx.ellipse(x, y, size * 1.25, size * .36, 0, 0, Math.PI * 2);
    ctx.ellipse(x - size * .45, y - size * .2, size * .49, size * .47, 0, 0, Math.PI * 2);
    ctx.ellipse(x + size * .1, y - size * .35, size * .55, size * .55, 0, 0, Math.PI * 2);
    ctx.ellipse(x + size * .63, y - size * .08, size * .4, size * .37, 0, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
  }
  function drawBackground() {
    const depth = clamp(world.height / 2400, 0, 1);
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, depth < .55 ? '#b4dedf' : '#c5d3ec');
    gradient.addColorStop(.58, '#deede0'); gradient.addColorStop(1, '#f8edcc');
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, height);
    const sunX = width * .77, sunY = height * .18;
    const glow = ctx.createRadialGradient(sunX, sunY, 2, sunX, sunY, height * .36);
    glow.addColorStop(0, '#fff9cf99'); glow.addColorStop(1, '#fff9cf00');
    ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#fffbee80'; ctx.beginPath(); ctx.arc(sunX, sunY, 31 * scale, 0, Math.PI * 2); ctx.fill();
    const camera = Math.max(0, world.cameraBottom + 110);
    for (let i = 0; i < 17; i++) {
      const span = height + 220;
      const y = ((i * 139 + camera * (.07 + i % 3 * .035) * scale) % span) - 100;
      const x = ((i * 197 + Math.sin(ambientTime * .08 + i) * 18) % (width + 160)) - 80;
      const size = (30 + i % 4 * 16) * scale;
      cloud(x, y, size, i % 2 ? '#fffff35c' : '#ffffff40');
    }
    ctx.save(); ctx.translate(offsetX, offsetY); ctx.scale(scale, scale);
    // The soft cloud banks mark the horizontal play area on wide desktop screens.
    for (const edge of [-22, C.width + 22]) {
      ctx.strokeStyle = '#78a59c21'; ctx.lineWidth = 1; ctx.setLineDash([3, 12]);
      ctx.beginPath(); ctx.moveTo(edge, -200); ctx.lineTo(edge, 1000); ctx.stroke();
      ctx.setLineDash([]);
      for (let i = 0; i < 6; i++) {
        const y = ((i * 183 + camera * .18) % 1080) - 180;
        cloud(edge + (edge < 0 ? -65 : 65), y, 74 + i % 2 * 15, '#fcffef62');
      }
    }
    for (let i = 0; i < 27; i++) {
      const x = (i * 137 + 13) % 480, y = ((i * 157 + camera * .35) % 950) - 100;
      const a = .17 + Math.sin(ambientTime * 1.3 + i) * .1;
      ctx.globalAlpha = a; star(x, y, i % 3 ? 2 : 4, '#559f93');
    }
    ctx.globalAlpha = 1;
    const firstMark = Math.floor(world.cameraBottom / 1000) + 1;
    for (let mark = firstMark; mark <= firstMark + 2; mark++) {
      if (mark <= 0) continue;
      const y = screenY(mark * 1000 + C.startY);
      ctx.strokeStyle = '#638e7926'; ctx.setLineDash([3, 7]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(C.width, y); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#628d7c80'; ctx.font = '10px system-ui, sans-serif'; ctx.textAlign = 'left'; ctx.fillText(`${mark * 100} m`, 7, y - 9);
    }
    if (world.cameraBottom < 140) {
      const y = screenY(-9);
      cloud(240, y + 28, 220, '#b4ceb7'); cloud(120, y + 32, 135, '#d2dfbe'); cloud(390, y + 30, 153, '#d2dfbe');
      cloud(250, y + 18, 138, '#ffffee');
      ctx.fillStyle = '#8cac781c'; ctx.beginPath(); ctx.ellipse(240, y - 1, 42, 7, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }
  function drawCoin(obj) {
    const y = screenY(obj.y), big = obj.value > 1, pulse = Math.sin(ambientTime * 4 + obj.id) * .8;
    const r = obj.kind === 'boost' ? 10 : big ? 18 : 15;
    ctx.fillStyle = big ? '#fff3bc4d' : '#fff5c359'; ctx.beginPath(); ctx.arc(obj.x, y, r + 5 + pulse, 0, Math.PI * 2); ctx.fill();
    star(obj.x, y, r + pulse * .4, big ? '#ffca61' : '#ffdc7b', -.5 * Math.PI + Math.sin(ambientTime * 2 + obj.id) * .1, '#c8973a');
    ctx.fillStyle = '#fffae1'; ctx.beginPath(); ctx.arc(obj.x - 2.3, y - 3.2, 1.7, 0, Math.PI * 2); ctx.fill();
    if (big) { ctx.fillStyle = '#ac8234'; ctx.font = 'bold 7px system-ui'; ctx.textAlign = 'center'; ctx.fillText('3', obj.x, y + 3); }
    if (obj.step && world.height < 65 && obj.layer === world.lastStepLayer + 1) {
      ctx.fillStyle = '#7a8d65'; ctx.font = '10px "Apple SD Gothic Neo", system-ui, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(world.lastStepLayer < 0 ? '첫 별' : '다음 별', obj.x, y - 26);
    }
  }
  function drawEnemy(obj) {
    const x = obj.x, y = screenY(obj.y) + Math.sin(ambientTime * 2 + obj.id) * 2;
    cloud(x, y + 2, 23, '#788e9b'); cloud(x, y - 3, 22, '#9caeb6');
    ctx.strokeStyle = '#536a77'; ctx.lineWidth = 2.2; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x - 10, y - 5); ctx.lineTo(x - 4, y - 2); ctx.moveTo(x + 10, y - 5); ctx.lineTo(x + 4, y - 2); ctx.stroke();
    ctx.fillStyle = '#405b67'; ctx.beginPath(); ctx.ellipse(x - 7, y + 1, 1.4, 2.3, 0, 0, Math.PI * 2); ctx.ellipse(x + 7, y + 1, 1.4, 2.3, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#576e77'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y + 9, 3, Math.PI, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#e8c77a'; ctx.beginPath(); ctx.moveTo(x + 4, y + 13); ctx.lineTo(x - 3, y + 24); ctx.lineTo(x + 2, y + 23); ctx.lineTo(x - 2, y + 32); ctx.lineTo(x + 10, y + 18); ctx.lineTo(x + 4, y + 19); ctx.fill();
  }
  function drawItem(obj) {
    const x = obj.x, y = screenY(obj.y), bob = Math.sin(ambientTime * 3 + obj.id) * 2;
    ctx.save(); ctx.translate(x, y + bob);
    ctx.fillStyle = obj.type === 'comet' ? '#ffefb9e8' : '#ddf5eae8';
    ctx.strokeStyle = obj.type === 'comet' ? '#d5ac53' : '#83b8a5';
    ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0, 0, 20 + Math.sin(ambientTime * 3) * .7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    if (obj.type === 'comet') {
      ctx.strokeStyle = '#e6ac43'; ctx.lineWidth = 4; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-9, 12); ctx.lineTo(0, 3); ctx.stroke(); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-10, 5); ctx.lineTo(-4, -1); ctx.moveTo(-2, 13); ctx.lineTo(4, 7); ctx.stroke();
      star(4, -4, 10, '#ffd169', -.5 * Math.PI, '#c68c34');
    } else {
      ctx.fillStyle = '#7ebba8'; ctx.strokeStyle = '#4d957e'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, -11); ctx.lineTo(10, -7); ctx.lineTo(8, 5); ctx.quadraticCurveTo(5, 10, 0, 13); ctx.quadraticCurveTo(-5, 10, -8, 5); ctx.lineTo(-10, -7); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#dcf5d6'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-4, 0); ctx.lineTo(-1, 4); ctx.lineTo(5, -4); ctx.stroke();
    }
    ctx.restore();
  }
  function drawHero() {
    const p = world.player;
    if (p.y < world.cameraBottom - 110) return;
    const y = screenY(p.y), pose = world.animation();
    if (p.boost > 0) {
      for (let i = trail.length - 1; i >= 0; i--) {
        const t = trail[i], r = (1 - t.age / .25) * 18;
        if (r <= 0) continue;
        ctx.globalAlpha = (1 - t.age / .25) * .4;
        ctx.fillStyle = i % 2 ? '#ffd97a' : '#fffae0'; ctx.beginPath(); ctx.ellipse(t.x, screenY(t.y) + 23, r, r * 2.1, 0, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      const plume = ctx.createLinearGradient(p.x, y + 15, p.x, y + 115);
      plume.addColorStop(0, '#fffce9f0'); plume.addColorStop(.4, '#ffdf86bf'); plume.addColorStop(1, '#ffcd6a00');
      ctx.fillStyle = plume; ctx.beginPath(); ctx.moveTo(p.x - 15, y + 12); ctx.quadraticCurveTo(p.x - 24, y + 40, p.x, y + 123); ctx.quadraticCurveTo(p.x + 24, y + 40, p.x + 15, y + 12); ctx.closePath(); ctx.fill();
    }
    if (p.shield) {
      const bubble = ctx.createRadialGradient(p.x - 10, y - 15, 2, p.x, y - 7, 47);
      bubble.addColorStop(0, '#ecfff600'); bubble.addColorStop(.83, '#b1efe529'); bubble.addColorStop(1, '#82cdb469');
      ctx.fillStyle = bubble; ctx.strokeStyle = '#86c5b5'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.arc(p.x, y - 9, 45, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#f7fff6'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(p.x, y - 9, 39, Math.PI * 1.16, Math.PI * 1.38); ctx.stroke();
    }
    ctx.save(); ctx.translate(p.x, y);
    const lean = clamp(p.vx / C.moveSpeed, -1, 1) * (p.boost > 0 ? .16 : .1);
    ctx.rotate(lean);
    ctx.scale(p.facing, pose.stretch);
    if (p.invulnerable > 0 && Math.floor(world.time * 15) % 2) ctx.globalAlpha = .55;
    const frame = world.phase === 'ready' ? (Math.floor(ambientTime * 2) % 10 === 6 ? 1 : 0) : pose.frame;
    const [x0, y0, x1, y1] = frames[frame], sw = x1 - x0, sh = y1 - y0, factor = .244;
    if (loaded) ctx.drawImage(atlas, x0, y0, sw, sh, -sw * factor / 2, -sh * factor * .7, sw * factor, sh * factor);
    ctx.restore();
  }
  function drawEffects() {
    for (const ring of rings) {
      const age = 1 - ring.life / .38;
      ctx.globalAlpha = 1 - age; ctx.strokeStyle = '#fff8d9'; ctx.lineWidth = 3 * (1 - age) + 1;
      ctx.beginPath(); ctx.ellipse(ring.x, screenY(ring.y), 17 + age * 40, 5 + age * 11, 0, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (const p of particles) {
      ctx.globalAlpha = clamp(p.life / .25, 0, 1);
      if (p.star) star(p.x, screenY(p.y), p.size + 1, p.color, ambientTime * 2);
      else { ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, screenY(p.y), p.size, 0, Math.PI * 2); ctx.fill(); }
    }
    ctx.globalAlpha = 1; ctx.textAlign = 'center'; ctx.font = 'bold 12px "Apple SD Gothic Neo", system-ui, sans-serif';
    for (const label of floatingLabels) {
      ctx.globalAlpha = Math.min(1, label.life * 3); ctx.lineWidth = 3; ctx.strokeStyle = '#fff9eacc'; ctx.strokeText(label.text, label.x, screenY(label.y));
      ctx.fillStyle = '#8f813e'; ctx.fillText(label.text, label.x, screenY(label.y));
    }
    ctx.globalAlpha = 1;
  }
  function render() {
    const ratio = canvas.width / width; ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    drawBackground();
    ctx.save(); ctx.translate(offsetX, offsetY); ctx.scale(scale, scale);
    if (shake > .1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) ctx.translate(Math.sin(ambientTime * 97) * shake, Math.cos(ambientTime * 83) * shake * .5);
    for (const object of world.objects) {
      const y = screenY(object.y); if (y < -65 || y > C.height + 80) continue;
      if (object.type === 'coin') drawCoin(object);
      else if (object.type === 'enemy') drawEnemy(object);
      else drawItem(object);
    }
    drawHero(); drawEffects(); ctx.restore();
    const p = world.player;
    if (world.phase === 'playing' && p.vy < 0 && p.y - world.cameraBottom < 100) {
      const danger = ctx.createLinearGradient(0, height - 130, 0, height);
      danger.addColorStop(0, '#dd8f6500'); danger.addColorStop(1, '#dd8f654d'); ctx.fillStyle = danger; ctx.fillRect(0, height - 130, width, 130);
    }
  }
  function tickEffects(dt) {
    shake *= Math.exp(-dt * 9);
    for (const p of particles) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy -= 150 * dt; p.life -= dt; }
    particles = particles.filter(p => p.life > 0);
    for (const label of floatingLabels) { label.y += 25 * dt; label.life -= dt; }
    floatingLabels = floatingLabels.filter(label => label.life > 0);
    for (const ring of rings) ring.life -= dt;
    rings = rings.filter(ring => ring.life > 0);
    for (const t of trail) t.age += dt;
    trail = trail.filter(t => t.age < .25);
    if (world.player.boost > 0) trail.push({ x: world.player.x, y: world.player.y, age: 0 });
  }
  function loop(now) {
    const elapsed = previousTime ? Math.min((now - previousTime) / 1000, .08) : 0;
    previousTime = now; ambientTime += elapsed;
    if (world.phase === 'playing') {
      accumulator += elapsed;
      while (accumulator >= C.fixedStep && world.phase === 'playing') {
        const jump = queuedJump; queuedJump = false;
        world.update(C.fixedStep, { axis: getAxis(), jump });
        processEvents(); tickEffects(C.fixedStep); accumulator -= C.fixedStep;
      }
      if (world.time > toastUntil) $('toast').classList.remove('visible');
      updateHUD();
    }
    render(); requestAnimationFrame(loop);
  }
  atlas.onload = () => { loaded = true; $('start-button').disabled = false; $('start-button').innerHTML = '하늘로 출발 <span>↗</span>'; };
  atlas.onerror = () => { $('start-button').textContent = '그림을 불러오지 못했어요'; $('start-hint')?.remove(); };
  if (atlas.complete && atlas.naturalWidth) atlas.onload();
  setSoundUI(); updateHUD(); syncPhase(); requestAnimationFrame(loop);

  // Read/write harness is only exposed in an explicitly requested local QA session.
  if (new URLSearchParams(location.search).has('test')) {
    window.__starMunchTest = {
      get world() { return world; }, get controls() { return { axis: getAxis(), keys: [...keys], touches: [...touchDirections] }; },
      get snapshot() { return { phase: world.phase, height: world.height, score: world.score, stars: world.stars, time: world.time, player: { ...world.player }, animation: world.animation(), best: { ...best } }; },
      start: newFlight, pause, resume, sync: () => { syncPhase(); updateHUD(); render(); },
      emit: processEvents,
      render,
      get layout() { return { width, height, scale, offsetX, offsetY }; }
    };
  }
})();
