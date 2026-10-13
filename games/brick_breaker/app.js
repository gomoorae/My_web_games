(() => {
  'use strict';
  const { Game, W, R, VERSION } = window.BrickBreakerEngine;
  const $ = id => document.getElementById(id);
  const canvas = $('gameCanvas'), ctx = canvas.getContext('2d');
  const game = new Game();
  const arena = $('arena'), area = $('court-area');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointer = matchMedia('(pointer: coarse)');
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const number = n => Math.floor(n).toLocaleString('en-US');
  const storage = {
    get(key, fallback) { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, String(value)); } catch { /* Play also works with storage disabled. */ } },
  };
  const storedBest = Number(storage.get('brick-breaker-best-v2', '0'));
  let best = Number.isFinite(storedBest) && storedBest >= 0 ? storedBest : 0;
  let savedBest = best, soundOn = storage.get('brick-breaker-sound-v2', 'on') !== 'off';
  let audioContext = null, audioNext = {}, scale = 1, dpr = 1;
  let lastTime = null, toastTime = 0, shake = 0, trailTime = 0;
  let particles = [], popups = [], rings = [], paddleFlash = 0;
  let restartConfirm = false, resumeAfterCancel = false, screenKey = '';
  const held = new Set();
  let pointerId = null, pointerStart = null;
  function setText(id, text) { const el = $(id); if (el.textContent !== text) el.textContent = text; }
  function setMarkup(id, markup) { const el = $(id); if (el.innerHTML !== markup) el.innerHTML = markup; }
  function persistBest() { if (best > savedBest) { storage.set('brick-breaker-best-v2', best); savedBest = best; } }
  function announce(text) { setText('announcement', text); }
  function toast(text, seconds = 2.4) { setText('toast', text); $('toast').classList.add('visible'); toastTime = seconds; announce(text); }
  function unlockAudio() {
    if (!soundOn) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      audioContext ||= new Audio();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    } catch { /* Audio is optional. */ }
  }
  function tone(type) {
    if (!soundOn || !audioContext || audioContext.state !== 'running') return;
    const now = audioContext.currentTime;
    if ((audioNext[type] || 0) > now) return;
    audioNext[type] = now + (type === 'explode' ? 0.1 : 0.04);
    const presets = {
      hit: [460, 290, 0.045, 'sine', 0.055], break: [690 + Math.min(game.combo, 20) * 23, 420, 0.08, 'sine', 0.05],
      paddle: [220, 370, 0.055, 'sine', 0.065], launch: [330, 720, 0.12, 'sine', 0.07],
      powerup: [600, 1200, 0.19, 'triangle', 0.06], explode: [150, 42, 0.22, 'triangle', 0.1],
      life: [240, 100, 0.22, 'sine', 0.07], clear: [520, 1040, 0.34, 'triangle', 0.07],
      won: [660, 1320, 0.5, 'triangle', 0.075], lost: [280, 80, 0.4, 'sine', 0.08],
    };
    const [from, to, duration, wave, volume] = presets[type] || presets.hit;
    const osc = audioContext.createOscillator(), gain = audioContext.createGain();
    osc.type = wave; osc.frequency.setValueAtTime(from, now); osc.frequency.exponentialRampToValueAtTime(to, now + duration);
    gain.gain.setValueAtTime(volume, now); gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(now); osc.stop(now + duration + 0.02);
  }
  function resetVisuals() { particles = []; popups = []; rings = []; shake = 0; toastTime = 0; $('toast').classList.remove('visible'); held.clear(); pointerId = null; pointerStart = null; }
  function processEvents() {
    for (const event of game.takeEvents()) {
      if (event.type === 'break') {
        tone('break');
        if (!reducedMotion.matches) {
          for (let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2, velocity = 50 + Math.random() * 140;
            particles.push({ x: event.x, y: event.y, vx: Math.cos(angle) * velocity, vy: Math.sin(angle) * velocity,
              life: 0.35 + Math.random() * 0.2, max: 0.55, color: event.color, size: 2 + Math.random() * 3 });
          }
          if (particles.length > 220) particles.splice(0, particles.length - 220);
        }
        if (event.combo % 5 === 0) popups.push({ x: event.x, y: event.y, text: `${event.combo} COMBO`, life: 0.9, color: '#ffcf84' });
        else if (event.points >= 100) popups.push({ x: event.x, y: event.y, text: `+${event.points}`, life: 0.65, color: '#f4eee2' });
        popups = popups.slice(-8);
      } else if (event.type === 'explode') {
        tone('explode'); shake = reducedMotion.matches ? 0 : 0.12;
        rings.push({ x: event.x, y: event.y, life: 0.35 }); rings = rings.slice(-10);
      } else if (event.type === 'hit') { if (event.armor) tone('hit'); }
      else if (event.type === 'paddle') { paddleFlash = 0.12; tone('paddle'); }
      else if (event.type === 'powerup') {
        tone('powerup');
        toast({ split: game.balls.length >= 9 ? '멀티볼 MAX · 공 9개!' : `멀티볼 · 공 ${game.balls.length}개!`, wide: '와이드 패들 · 14초', pierce: '관통 공 · 9초' }[event.kind]);
      } else if (event.type === 'life') {
        resetVisuals(); tone('life'); announce(`남은 기회 ${game.lives}회. 준비되면 다시 발사하세요.`);
      } else if (['clear', 'won', 'lost'].includes(event.type)) {
        tone(event.type); persistBest(); held.clear();
        announce(event.type === 'lost' ? '게임 오버. 다시 도전할 수 있습니다.' : '스테이지 클리어!');
      } else if (event.type === 'stage') { resetVisuals(); document.documentElement.style.setProperty('--accent', game.stage.color); }
      else if (event.type === 'launch') tone('launch');
      else if (event.type === 'pause') { held.clear(); pointerId = null; pointerStart = null; }
    }
  }
  function mainAction() {
    unlockAudio();
    if (restartConfirm) { persistBest(); restartConfirm = false; resetVisuals(); game.restart(); }
    else if (game.state === 'ready') game.launch();
    else if (game.state === 'paused') game.resume();
    else if (game.state === 'clear') game.nextStage();
    else if (game.state === 'lost' || game.state === 'won') { persistBest(); resetVisuals(); game.restart(); }
    sync(); canvas.focus({ preventScroll: true });
  }
  function pauseOrResume() {
    if (restartConfirm) { cancelRestart(); return; }
    if (game.state === 'playing') game.pause();
    else if (game.state === 'paused') { unlockAudio(); game.resume(); }
    sync(); canvas.focus({ preventScroll: true });
  }
  function askRestart() {
    unlockAudio();
    if (restartConfirm) return;
    if (game.score === 0 && game.state === 'ready' || ['lost', 'won'].includes(game.state)) {
      persistBest(); resetVisuals(); game.restart(); sync(); canvas.focus({ preventScroll: true }); return;
    }
    resumeAfterCancel = ['ready', 'playing'].includes(game.state);
    game.pause(); restartConfirm = true; sync(); $('overlay-secondary').focus({ preventScroll: true });
  }
  function cancelRestart() {
    restartConfirm = false; if (resumeAfterCancel) game.resume(); sync(); canvas.focus({ preventScroll: true });
  }
  $('overlay-action').addEventListener('click', mainAction);
  $('overlay-secondary').addEventListener('click', cancelRestart);
  $('launch-button').addEventListener('click', mainAction);
  $('pause-button').addEventListener('click', pauseOrResume);
  $('restart-button').addEventListener('click', askRestart);
  $('sound-button').addEventListener('click', () => {
    soundOn = !soundOn; storage.set('brick-breaker-sound-v2', soundOn ? 'on' : 'off');
    unlockAudio(); sync(); canvas.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key.toLowerCase(), buttonFocused = event.target.closest?.('button,a');
    if (['arrowleft', 'arrowright', 'a', 'd'].includes(key) && !restartConfirm) {
      event.preventDefault(); held.add(key); game.setAxis((held.has('arrowright') || held.has('d') ? 1 : 0) - (held.has('arrowleft') || held.has('a') ? 1 : 0));
    } else if ((event.code === 'Space' || key === 'enter') && !buttonFocused) {
      event.preventDefault(); if (!event.repeat) mainAction();
    } else if (key === 'escape') { event.preventDefault(); if (!event.repeat) pauseOrResume(); }
    else if (key === 'r' && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); if (!event.repeat) askRestart(); }
  });
  document.addEventListener('keyup', event => {
    const key = event.key.toLowerCase();
    if (!['arrowleft', 'arrowright', 'a', 'd'].includes(key)) return;
    event.preventDefault(); held.delete(key);
    game.setAxis((held.has('arrowright') || held.has('d') ? 1 : 0) - (held.has('arrowleft') || held.has('a') ? 1 : 0));
  });
  function movePointer(event) {
    const box = canvas.getBoundingClientRect();
    game.setTarget((event.clientX - box.left) / box.width * W);
  }
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 0 || pointerId !== null) return;
    unlockAudio(); canvas.focus({ preventScroll: true });
    if (!['ready', 'playing'].includes(game.state) || restartConfirm) return;
    pointerId = event.pointerId; pointerStart = { x: event.clientX, y: event.clientY, time: performance.now(), kind: event.pointerType };
    canvas.setPointerCapture(event.pointerId); movePointer(event); event.preventDefault();
  });
  canvas.addEventListener('pointermove', event => {
    if (event.pointerType === 'mouse' && pointerId === null || event.pointerId === pointerId) {
      if (['playing', 'ready'].includes(game.state) && !restartConfirm) movePointer(event);
    }
  });
  canvas.addEventListener('pointerup', event => {
    if (event.pointerId !== pointerId) return;
    const start = pointerStart;
    pointerId = null; pointerStart = null;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (start && start.kind === 'mouse' && Math.hypot(event.clientX - start.x, event.clientY - start.y) < 8 && performance.now() - start.time < 400 && game.state === 'ready' && !restartConfirm) mainAction();
  });
  function cancelPointer() { pointerId = null; pointerStart = null; game.clearInput(); }
  canvas.addEventListener('pointercancel', cancelPointer);
  canvas.addEventListener('lostpointercapture', event => {
    // Normal release keeps the final target; unexpected capture loss cancels input.
    if (event.pointerId === pointerId) cancelPointer();
  });
  function backgroundPause() {
    held.clear(); cancelPointer();
    if (game.state === 'playing') game.pause();
    lastTime = null; persistBest(); sync();
  }
  window.addEventListener('blur', backgroundPause);
  document.addEventListener('visibilitychange', () => { if (document.hidden) backgroundPause(); else lastTime = null; });
  window.addEventListener('pagehide', persistBest);

  function fit() {
    const portrait = window.innerWidth <= 600 && window.innerHeight > window.innerWidth;
    game.setHeight(portrait ? (window.innerHeight < 700 ? 760 : 1040) : 560);
    const box = area.getBoundingClientRect();
    scale = Math.max(0.05, Math.min((box.width - 2) / W, (box.height - 2) / game.height));
    const width = Math.floor(W * scale), height = Math.floor(game.height * scale);
    arena.style.width = `${width}px`; arena.style.height = `${height}px`;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    scale = width / W;
    sync();
  }
  new ResizeObserver(fit).observe(area);
  window.addEventListener('resize', fit);

  function sync() {
    if (game.score > best) best = game.score;
    processEvents();
    setText('score', number(game.score).padStart(6, '0')); setText('best', number(best).padStart(6, '0'));
    setText('lives', '● '.repeat(Math.max(0, game.lives)).trim() || '—');
    $('lives').setAttribute('aria-label', `남은 기회 ${game.lives}회`);
    setText('stage-number', String(game.stageIndex + 1).padStart(2, '0'));
    setText('stage-title', game.stage.name); setText('stage-hint', game.stage.hint);
    setText('remaining', `${game.remaining}개 남음`); setText('ball-count', String(game.balls.length));
    const progress = Math.round(game.stageBroken / game.stageCount * 100);
    $('stage-progress').style.width = `${progress}%`; setText('progress-percent', `${progress}%`);
    setText('combo', game.combo >= 2 ? `${game.combo} COMBO  /  ×${game.multiplier}` : '각도를 만들고, 연쇄로 부수세요.');
    $('combo').classList.toggle('hot', game.combo >= 5);
    for (const key of ['wide', 'pierce']) {
      const el = $(`${key}-status`); el.hidden = game.effects[key] <= 0;
      if (!el.hidden) el.querySelector('b').textContent = `${Math.ceil(game.effects[key])}s`;
    }
    $('finish-hint').hidden = !(game.remaining > 0 && game.remaining <= 3 && game.state === 'playing');
    setText('sound-button', soundOn ? '소리 켜짐' : '소리 꺼짐');
    $('sound-button').setAttribute('aria-pressed', String(soundOn));
    $('pause-button').disabled = !['playing', 'paused'].includes(game.state) || restartConfirm;
    setMarkup('pause-button', game.state === 'paused' ? '계속하기 <span>ESC</span>' : '일시정지 <span>ESC</span>');
    $('launch-button').disabled = game.state === 'playing' || restartConfirm;
    setMarkup('launch-button', ({ ready: '발사 <span>SPACE</span>', paused: '계속하기', clear: '다음 단계', won: '다시 도전', lost: '다시 도전' })[game.state] || '진행 중');
    arena.dataset.state = game.state;
    const key = `${restartConfirm}:${game.state}:${game.stageIndex}:${game.lives}`;
    if (screenKey === key) return;
    screenKey = key;
    $('overlay').hidden = game.state === 'playing' && !restartConfirm;
    if ($('overlay').hidden) return;
    let kicker = `STAGE ${String(game.stageIndex + 1).padStart(2, '0')} / 10`, title, desc, action, result = '', shortcut = '';
    if (restartConfirm) {
      kicker = 'ONE MORE TRY?'; title = '처음부터 다시 할까요?'; desc = '이번 점수와 스테이지가 초기화됩니다. 최고 기록은 남아요.'; action = '처음부터 시작';
    } else if (game.state === 'ready') {
      title = game.stageTime > 0 ? '다시, 한 번 더.' : game.stage.name;
      desc = game.stageTime > 0 ? `기회가 ${game.lives}번 남았어요. 위치를 잡고 준비되면 발사하세요.` : game.stage.hint;
      action = '발사하기'; shortcut = coarsePointer.matches ? '드래그로 위치를 잡고, 발사 버튼을 누르세요' : 'SPACE 또는 게임 화면 클릭으로 발사';
    } else if (game.state === 'paused') {
      kicker = 'TAKE A BREATH'; title = '잠깐 쉬어가기'; desc = '준비되면 이어서 플레이하세요.'; action = '계속 플레이'; shortcut = 'ESC 또는 SPACE로 재개';
    } else if (game.state === 'clear') {
      kicker = 'STAGE CLEAR'; title = '시원하게, 클리어!'; desc = `다음은 ${game.stageIndex + 2}단계, ${window.BrickBreakerEngine.STAGES[game.stageIndex + 1].name}.`;
      result = `클리어 보너스 +${number(game.clearBonus)}${game.stageReward ? ' · 기회 +1' : ''}`; action = '다음 스테이지'; shortcut = 'SPACE로 다음 단계';
    } else if (game.state === 'won') {
      kicker = 'ALL 10 STAGES CLEARED'; title = '완벽한 브레이크.'; desc = '열 개의 스테이지를 모두 부쉈어요. 새로운 최고 기록에 도전해보세요.';
      result = `${number(game.score)}점 · 최고 ${game.maxCombo} COMBO`; action = '다시 도전'; shortcut = 'R 또는 SPACE로 다시 시작';
    } else {
      kicker = 'ONE MORE TRY'; title = '다음엔, 더 멀리.'; desc = `${game.stageIndex + 1}단계까지 도달했어요. 패들 끝으로 각도를 만들고, 떨어지는 아이템을 잡아보세요.`;
      result = `${number(game.score)}점 · 최고 ${game.maxCombo} COMBO`; action = '다시 도전'; shortcut = 'R 또는 SPACE로 다시 시작';
    }
    setText('overlay-kicker', kicker); setText('overlay-title', title); setText('overlay-description', desc);
    setText('overlay-result', result); $('overlay-result').hidden = !result;
    $('overlay-action').innerHTML = `${action} <span aria-hidden="true">↗</span>`;
    $('overlay-secondary').hidden = !restartConfirm; setText('overlay-shortcut', shortcut);
  }

  function rounded(x, y, w, h, r, fill) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); ctx.fillStyle = fill; ctx.fill(); }
  function drawBrick(brick, time) {
    if (!brick.hp) return;
    const { x, y, w, h } = brick, bomb = brick.kind === 'bomb';
    const colors = brick.maxHp === 3 ? ['#efbaef', '#b69cda', '#d5adf0'] : brick.maxHp === 2 ? ['#70bebc', '#a3dfd4'] : [game.stage.color];
    const color = brick.flash > 0 ? '#fff8e9' : bomb ? '#ffd688' : colors[Math.min(brick.hp - 1, colors.length - 1)];
    rounded(x, y + 3, w, h, 4, '#00000044');
    rounded(x, y, w, h, 4, color);
    ctx.fillStyle = '#ffffff38'; ctx.fillRect(x + 5, y + 2, w - 10, 2);
    ctx.fillStyle = '#0b203039'; ctx.fillRect(x + 4, y + h - 3, w - 8, 1);
    if (brick.maxHp > 1) {
      ctx.fillStyle = '#162c38'; ctx.font = 'bold 12px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(brick.hp), x + w / 2, y + h / 2 + 1);
      for (let i = 0; i < brick.hp; i++) rounded(x + 6 + i * 5, y + h / 2 - 1, 2, 3, 1, '#15304080');
      if (brick.hp < brick.maxHp) {
        ctx.strokeStyle = '#172b4266'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x + w - 15, y); ctx.lineTo(x + w - 21, y + 9); ctx.lineTo(x + w - 14, y + 13); ctx.lineTo(x + w - 19, y + h); ctx.stroke();
      }
    }
    if (bomb) {
      ctx.fillStyle = '#604126'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = 'bold 21px sans-serif'; ctx.fillText('✦', x + w / 2, y + h / 2 + 1);
      if (!reducedMotion.matches) { ctx.strokeStyle = `rgba(255,217,140,${0.18 + Math.sin(time * 3 + brick.id) * 0.12})`; ctx.lineWidth = 2; ctx.strokeRect(x - 2, y - 2, w + 4, h + 4); }
    }
  }
  function render(dt, time) {
    ctx.setTransform(canvas.width / W, 0, 0, canvas.height / game.height, 0, 0);
    ctx.clearRect(0, 0, W, game.height);
    const bg = ctx.createLinearGradient(0, 0, W, game.height); bg.addColorStop(0, '#132438'); bg.addColorStop(0.5, '#101e2e'); bg.addColorStop(1, '#102331');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, game.height);
    ctx.fillStyle = '#86b2c20f';
    for (let x = 25; x < W; x += 30) for (let y = 25; y < game.height; y += 30) ctx.fillRect(x, y, 1, 1);
    ctx.strokeStyle = '#8cbbc20c'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(W / 2, game.height * 0.65, 120, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(W / 2, game.height * 0.65, 190, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#9bc2cc4a'; ctx.font = '10px monospace'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText(`SECTOR ${String(game.stageIndex + 1).padStart(2, '0')}`, 29, 35);
    ctx.textAlign = 'right'; ctx.fillText('BRICK / BREAKER', W - 29, 35);
    ctx.save();
    if (shake > 0 && !reducedMotion.matches) { shake -= dt; ctx.translate((Math.random() - .5) * 4, (Math.random() - .5) * 4); }
    for (const brick of game.bricks) drawBrick(brick, time);
    for (const drop of game.drops) {
      const color = { split: '#65d6cd', wide: '#b6adff', pierce: '#ffb45b' }[drop.type];
      ctx.shadowColor = color; ctx.shadowBlur = 12; rounded(drop.x - 13, drop.y - 13, 26, 26, 7, '#162d40'); ctx.shadowBlur = 0;
      ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke(); ctx.fillStyle = color; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      if (drop.type === 'split') {
        for (const [dx, dy] of [[0, -4], [-4, 4], [4, 4]]) { ctx.beginPath(); ctx.arc(drop.x + dx, drop.y + dy, 2.6, 0, Math.PI * 2); ctx.fill(); }
      } else { ctx.font = 'bold 22px sans-serif'; ctx.fillText(drop.type === 'wide' ? '↔' : '↟', drop.x, drop.y); }
    }
    const p = game.paddle, firing = game.effects.pierce > 0;
    ctx.strokeStyle = '#65d6cd26'; ctx.lineWidth = 1; ctx.setLineDash([4, 8]); ctx.beginPath(); ctx.moveTo(25, p.y + p.h + 13); ctx.lineTo(W - 25, p.y + p.h + 13); ctx.stroke(); ctx.setLineDash([]);
    ctx.shadowColor = game.effects.wide > 0 ? '#a6a0ff' : '#65d6cd'; ctx.shadowBlur = 16;
    rounded(p.x - p.w / 2, p.y, p.w, p.h, 6, paddleFlash > 0 ? '#fffdf0' : game.effects.wide > 0 ? '#b6adff' : '#82e0d5'); ctx.shadowBlur = 0;
    rounded(p.x - p.w / 2 + 6, p.y + 3, p.w - 12, 3, 1, '#f5fffab0');
    rounded(p.x - 12, p.y + 7, 24, 3, 1, '#153d4b55');
    paddleFlash = Math.max(0, paddleFlash - dt);
    if (game.state === 'ready') {
      ctx.strokeStyle = '#f4eee25c'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 8]); ctx.beginPath();
      ctx.moveTo(p.x, p.y - 22); ctx.lineTo(p.x + (game.stageIndex % 2 ? -1 : 1) * 30, p.y - 111); ctx.stroke(); ctx.setLineDash([]);
    }
    trailTime += dt;
    for (const ball of game.balls) {
      if (game.state === 'playing' && trailTime >= 1 / 60) { ball.trail.push({ x: ball.x, y: ball.y }); ball.trail = ball.trail.slice(-9); }
      if (!reducedMotion.matches) for (let i = 0; i < ball.trail.length; i++) {
        const point = ball.trail[i]; ctx.globalAlpha = (i + 1) / ball.trail.length * 0.22;
        ctx.fillStyle = firing ? '#ffb45b' : '#bdfff1'; ctx.beginPath(); ctx.arc(point.x, point.y, R * (i + 1) / ball.trail.length, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1; ctx.shadowColor = firing ? '#ffaf45' : '#9af4e6'; ctx.shadowBlur = 14;
      ctx.fillStyle = firing ? '#ffc66d' : '#fff5d9'; ctx.beginPath(); ctx.arc(ball.x, ball.y, R, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffffaa'; ctx.beginPath(); ctx.arc(ball.x - 2, ball.y - 2, 2.5, 0, Math.PI * 2); ctx.fill();
    }
    if (trailTime >= 1 / 60) trailTime = 0;
    const effectsDt = game.state === 'paused' ? 0 : dt;
    for (const particle of particles) {
      particle.life -= effectsDt; particle.x += particle.vx * effectsDt; particle.y += particle.vy * effectsDt; particle.vy += 170 * effectsDt;
      ctx.globalAlpha = Math.max(0, particle.life / particle.max); ctx.fillStyle = particle.color; ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
    }
    particles = particles.filter(p => p.life > 0); ctx.globalAlpha = 1;
    for (const ring of rings) {
      ring.life -= effectsDt; ctx.globalAlpha = Math.max(0, ring.life / .35); ctx.strokeStyle = '#ffd48b'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(ring.x, ring.y, Math.max(0, 1 - ring.life / .35) * 115, 0, Math.PI * 2); ctx.stroke();
    }
    rings = rings.filter(r => r.life > 0); ctx.globalAlpha = 1;
    for (const popup of popups) {
      popup.life -= effectsDt; popup.y -= 25 * effectsDt; ctx.globalAlpha = clamp(popup.life * 2, 0, 1); ctx.fillStyle = popup.color;
      ctx.font = 'bold 15px monospace'; ctx.textAlign = 'center'; ctx.fillText(popup.text, popup.x, popup.y);
    }
    popups = popups.filter(p => p.life > 0); ctx.globalAlpha = 1;
    ctx.restore();
  }
  function frame(now) {
    const dt = lastTime === null ? 0 : Math.min(0.1, (now - lastTime) / 1000);
    lastTime = now; game.advance(dt); sync(); render(dt, now / 1000);
    if (toastTime > 0) { toastTime -= dt; if (toastTime <= 0) $('toast').classList.remove('visible'); }
    requestAnimationFrame(frame);
  }
  document.documentElement.dataset.version = VERSION;
  sync(); fit(); requestAnimationFrame(frame);
})();
