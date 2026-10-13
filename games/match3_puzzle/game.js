(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const boardEl = $('board'), effects = $('effects'), dialog = $('overlay');
  const round = new Match3.Round();
  const names = ['노란 원', '하늘 사각형', '초록 마름모', '보라 삼각형', '파란 별', '주황 육각형'];
  const powerNames = { row: '가로 라인', column: '세로 라인', bomb: '폭탄', color: '컬러볼' };
  const marks = { row: '↔', column: '↕', bomb: '✦', color: '✧' };
  const colors = ['#dea751', '#6baabd', '#6caa8d', '#b59bce', '#738bc0', '#da8871'];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new Set();
  const STORE = 'gomoorae.match3.v2';
  let record = { bestScore: 0, bestChain: 0, sound: true }, storageOK = true;
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || '{}') || {};
    for (const key of ['bestScore', 'bestChain']) if (Number.isSafeInteger(saved[key]) && saved[key] >= 0) record[key] = saved[key];
    if (typeof saved.sound === 'boolean') record.sound = saved.sound;
  } catch { storageOK = false; }
  let selected = null, gesture = null, focusIndex = 0, displayScore = 0;
  let lastAction = performance.now(), hintUntil = 0, stripUntil = 0, mode = 'start', previousBest = record.bestScore;
  let resultShown = false, audio = null;
  const buttons = Array.from({ length: 64 }, (_, i) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'tile'; button.dataset.index = String(i);
    button.tabIndex = i === 0 ? 0 : -1;
    const glyph = document.createElement('i'); glyph.className = 'glyph'; glyph.setAttribute('aria-hidden', 'true');
    const mark = document.createElement('i'); mark.className = 'power-mark'; mark.setAttribute('aria-hidden', 'true');
    button.append(glyph, mark); boardEl.appendChild(button); return button;
  });

  function saveRecord() {
    try {
      let latest = {};
      try { latest = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch { /* Replace a damaged record on the next successful save. */ }
      for (const key of ['bestScore', 'bestChain']) {
        if (Number.isSafeInteger(latest[key]) && latest[key] >= 0) record[key] = Math.max(record[key], latest[key]);
      }
      localStorage.setItem(STORE, JSON.stringify(record));
      storageOK = true;
    }
    catch { storageOK = false; }
    $('storageNote').textContent = storageOK ? '기록은 이 브라우저에 저장됩니다.' : '이 브라우저에서는 기록을 저장할 수 없어요.';
  }
  function updateRecord() {
    const changed = round.score > record.bestScore || round.maxChain > record.bestChain;
    record.bestScore = Math.max(record.bestScore, round.score);
    record.bestChain = Math.max(record.bestChain, round.maxChain);
    if (changed) saveRecord();
    $('bestScore').textContent = record.bestScore.toLocaleString('ko-KR');
    $('bestChain').textContent = record.bestChain ? `${record.bestChain}연쇄` : '—';
    $('currentChain').textContent = round.maxChain ? `${round.maxChain}연쇄` : '—';
    $('newBest').hidden = !(round.score > previousBest);
  }
  function enableAudio() {
    if (!record.sound) return;
    try {
      if (!audio) { const Audio = window.AudioContext || window.webkitAudioContext; if (Audio) audio = new Audio(); }
      if (audio && audio.state === 'suspended') audio.resume().catch(() => {});
    } catch { /* Sound is optional; blocked audio never interrupts a round. */ }
  }
  function tone(kind, chain = 1) {
    if (!record.sound || !audio || audio.state !== 'running' || round.status === 'paused') return;
    try {
      const notes = kind === 'power' ? [0, 4, 7, 12] : kind === 'end' ? [7, 4, 0] : kind === 'wrong' ? [-12] : kind === 'select' ? [0] : [0, 7];
      const base = kind === 'wrong' ? 260 : kind === 'select' ? 460 : 380 * Math.pow(2, Math.min(chain - 1, 9) / 12);
      notes.forEach((note, i) => {
        const at = audio.currentTime + i * .055, osc = audio.createOscillator(), gain = audio.createGain();
        osc.type = 'sine'; osc.frequency.value = base * Math.pow(2, note / 12);
        gain.gain.setValueAtTime(0, at); gain.gain.linearRampToValueAtTime(kind === 'select' ? .025 : .045, at + .008);
        gain.gain.exponentialRampToValueAtTime(.001, at + .17);
        osc.connect(gain); gain.connect(audio.destination); osc.start(at); osc.stop(at + .19);
        osc.onended = () => { osc.disconnect(); gain.disconnect(); };
      });
    } catch { /* Keep play available on devices without Web Audio. */ }
  }
  function updateSoundButton() {
    $('soundBtn').textContent = record.sound ? '소리 켜짐' : '소리 꺼짐';
    $('soundBtn').setAttribute('aria-pressed', String(record.sound));
  }
  function paint(board) {
    board.forEach((tile, i) => {
      const button = buttons[i];
      button.className = `tile type-${tile.type}${tile.special ? ` special-${tile.special}` : ''}${selected === i ? ' selected' : ''}`;
      button.dataset.tileId = String(tile.id);
      button.dataset.type = String(tile.type);
      button.dataset.special = tile.special || '';
      button.children[0].className = `glyph shape-${tile.type}`;
      button.children[1].textContent = marks[tile.special] || '';
      button.setAttribute('aria-label', `${Math.floor(i / 8) + 1}행 ${i % 8 + 1}열, ${tile.special === 'color' ? '컬러볼' : names[tile.type] + (tile.special ? `, ${powerNames[tile.special]}` : '')}`);
      button.setAttribute('aria-pressed', String(selected === i));
    });
  }
  function selection() {
    buttons.forEach((button, i) => {
      button.classList.toggle('selected', i === selected);
      button.setAttribute('aria-pressed', String(i === selected));
    });
  }
  function clearHint() { hintUntil = 0; buttons.forEach(b => b.classList.remove('hint')); }
  function touchAction() { lastAction = performance.now(); clearHint(); }
  function ready() { return round.status === 'running' && !round.pending && round.remaining() > 0 && !dialog.open; }
  function setStrip(text, bonus = null, active = true) {
    $('comboText').textContent = text; $('comboText').classList.toggle('active', active);
    if (bonus !== null) $('bonusText').textContent = bonus;
    stripUntil = performance.now() + 2000;
  }
  function showScore(value) { displayScore = value; $('score').textContent = value.toLocaleString('ko-KR'); }
  function motion(element, frames, duration, easing = 'cubic-bezier(.2,.7,.2,1)') {
    const animation = element.animate(frames, { duration: reduced.matches ? 1 : duration, easing });
    animations.add(animation);
    return animation.finished.catch(() => {}).finally(() => { animations.delete(animation); });
  }
  function cancelMotion() { animations.forEach(a => a.cancel()); animations.clear(); effects.replaceChildren(); }
  function effect(element) {
    effects.appendChild(element);
    element.addEventListener('animationend', () => element.remove(), { once: true });
  }
  function burst(frame) {
    if (reduced.matches) return;
    const shell = effects.getBoundingClientRect();
    let count = 0, sx = 0, sy = 0;
    for (const i of frame.removed) {
      const rect = buttons[i].getBoundingClientRect(), x = rect.x - shell.x + rect.width / 2, y = rect.y - shell.y + rect.height / 2;
      sx += x; sy += y;
      if (count >= 36) continue;
      for (let n = 0; n < 3; n++) {
        const p = document.createElement('span'); p.className = 'particle'; p.style.left = `${x}px`; p.style.top = `${y}px`;
        p.style.setProperty('--particle', colors[frame.before[i].type] || '#e0b45b');
        p.style.setProperty('--dx', `${(Math.random() - .5) * 90}px`); p.style.setProperty('--dy', `${(Math.random() - .65) * 95}px`);
        effect(p); count++;
      }
    }
    if (frame.removed.length) {
      const pop = document.createElement('span'); pop.className = 'score-pop'; pop.textContent = `+${frame.points.toLocaleString('ko-KR')}`;
      pop.style.left = `${Math.min(shell.width - 42, Math.max(42, sx / frame.removed.length))}px`;
      pop.style.top = `${Math.max(50, sy / frame.removed.length)}px`; effect(pop);
    }
    for (const power of frame.activated.slice(0, 8)) {
      const rect = buttons[power.index].getBoundingClientRect(), x = rect.x - shell.x + rect.width / 2, y = rect.y - shell.y + rect.height / 2;
      const ray = document.createElement('span');
      if (power.special === 'row' || power.special === 'column') {
        ray.className = `ray ${power.special}`;
        ray.style[power.special === 'row' ? 'top' : 'left'] = `${power.special === 'row' ? y : x}px`;
      } else { ray.className = 'power-wave'; ray.style.left = `${x}px`; ray.style.top = `${y}px`; }
      effect(ray);
    }
  }
  async function swapAnimation(a, b, reverse = false) {
    const ra = buttons[a].getBoundingClientRect(), rb = buttons[b].getBoundingClientRect();
    const dx = rb.x - ra.x, dy = rb.y - ra.y;
    await Promise.all([
      motion(buttons[a], [{ transform: 'translate(0,0)' }, { transform: `translate(${dx}px,${dy}px)` }], reverse ? 120 : 150),
      motion(buttons[b], [{ transform: 'translate(0,0)' }, { transform: `translate(${-dx}px,${-dy}px)` }], reverse ? 120 : 150)
    ]);
  }
  async function play(a, b) {
    if (!ready()) return;
    touchAction(); selected = null; selection();
    const ticket = round.begin(a, b);
    if (!ticket) return;
    boardEl.setAttribute('aria-busy', 'true');
    const startScore = displayScore;
    try {
      await swapAnimation(a, b);
      if (!round.current(ticket)) return;
      paint(ticket.plan.swapped);
      if (!ticket.plan.valid) {
        tone('wrong'); await swapAnimation(a, b, true);
        if (!round.current(ticket)) return;
        paint(round.board); setStrip('같은 블록 3개가 이어지도록 바꿔보세요', null, false);
      } else {
        let runningScore = startScore;
        for (const frame of ticket.plan.frames) {
          if (!round.current(ticket)) return;
          paint(frame.before); burst(frame);
          runningScore += frame.points; showScore(runningScore);
          const label = frame.chain > 1 ? `${frame.chain}연쇄 · 점수 ×${frame.chain}` : frame.activated.length ? '특수블록 발동!' : frame.created.length ? `${powerNames[frame.created[0].tile.special]} 탄생!` : '좋아요!';
          setStrip(label, ticket.bonusGranted ? `+${ticket.bonusGranted}초 · 누적 +${round.bonus}초` : `시간 보너스 +${round.bonus}초`);
          tone(frame.activated.length || frame.created.length ? 'power' : 'match', frame.chain);
          await Promise.all(frame.removed.map(i => motion(buttons[i], [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(.35)', opacity: 0 }], 140)));
          if (!round.current(ticket)) return;
          paint(frame.after);
          const unit = buttons[8].getBoundingClientRect().y - buttons[0].getBoundingClientRect().y;
          const born = new Set(frame.created.map(c => c.tile.id));
          buttons.forEach((button, i) => button.classList.toggle('born', born.has(frame.after[i].id)));
          await Promise.all(frame.falls.map(f => {
            const i = f.toRow * 8 + f.col;
            return motion(buttons[i], [{ transform: `translateY(${(f.fromRow - f.toRow) * unit}px)`, opacity: .8 }, { transform: 'translateY(0)', opacity: 1 }], Math.min(285, 175 + (f.toRow - f.fromRow) * 14));
          }));
        }
        if (!round.current(ticket)) return;
        paint(round.board); showScore(round.score); updateRecord();
        if (ticket.plan.shuffled) setStrip('가능한 수가 없어 보드를 섞었어요', null, false);
      }
    } catch (error) {
      console.error('퍼즐 연출 오류:', error);
      if (round.current(ticket)) { cancelMotion(); paint(round.board); showScore(round.score); updateRecord(); }
    } finally {
      if (round.finish(ticket)) {
        boardEl.setAttribute('aria-busy', 'false'); lastAction = performance.now();
        if (round.status === 'over') showResult();
      }
    }
  }
  function activate(i) {
    if (!ready()) return;
    enableAudio(); touchAction();
    if (selected === i) selected = null;
    else if (selected !== null && Match3.adjacent(selected, i)) { void play(selected, i); return; }
    else { selected = i; tone('select'); }
    selection();
  }
  function tileIndex(target) {
    const tile = target.closest('.tile');
    return tile && boardEl.contains(tile) ? Number(tile.dataset.index) : null;
  }
  function releaseGesture() {
    if (gesture && boardEl.hasPointerCapture(gesture.id)) boardEl.releasePointerCapture(gesture.id);
    gesture = null; buttons.forEach(b => b.classList.remove('target'));
  }
  function swipeTarget(event) {
    if (!gesture) return null;
    const dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < Math.max(10, buttons[gesture.index].offsetWidth * .28)) return null;
    const next = gesture.index + (Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : -1) : (dy > 0 ? 8 : -8));
    return Match3.adjacent(gesture.index, next) ? next : -1;
  }
  boardEl.addEventListener('pointerdown', event => {
    if (!ready() || !event.isPrimary || event.button !== 0 || gesture) return;
    const index = tileIndex(event.target); if (index === null) return;
    enableAudio(); touchAction();
    gesture = { id: event.pointerId, index, x: event.clientX, y: event.clientY };
    boardEl.setPointerCapture(event.pointerId);
  });
  boardEl.addEventListener('pointermove', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const target = swipeTarget(event);
    buttons.forEach((b, i) => b.classList.toggle('target', i === target));
  });
  boardEl.addEventListener('pointerup', event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const from = gesture.index, target = swipeTarget(event);
    releaseGesture();
    if (target !== null) { if (target >= 0) void play(from, target); }
    else activate(from);
  });
  boardEl.addEventListener('pointercancel', event => { if (gesture && gesture.id === event.pointerId) releaseGesture(); });
  boardEl.addEventListener('lostpointercapture', event => {
    if (gesture && gesture.id === event.pointerId) { gesture = null; buttons.forEach(b => b.classList.remove('target')); }
  });
  // Native keyboard/assistive clicks have detail 0. Pointer clicks were handled above.
  boardEl.addEventListener('click', event => { if (event.detail === 0) { const i = tileIndex(event.target); if (i !== null) activate(i); } });
  boardEl.addEventListener('keydown', event => {
    const i = tileIndex(event.target); if (i === null) return;
    const changes = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -8, ArrowDown: 8 };
    if (Object.hasOwn(changes, event.key)) {
      event.preventDefault(); const next = i + changes[event.key];
      if (Match3.adjacent(i, next)) { buttons[focusIndex].tabIndex = -1; focusIndex = next; buttons[next].tabIndex = 0; buttons[next].focus(); touchAction(); }
    }
  });
  boardEl.addEventListener('focusin', event => {
    const i = tileIndex(event.target); if (i === null) return;
    buttons[focusIndex].tabIndex = -1; focusIndex = i; buttons[i].tabIndex = 0;
  });
  function showDialog(nextMode) {
    mode = nextMode;
    if (!dialog.open) dialog.showModal();
    $('overlayBtn').focus({ preventScroll: true });
  }
  function startRound() {
    round.reset(); releaseGesture(); cancelMotion(); selected = null; resultShown = false;
    previousBest = record.bestScore; showScore(0); round.start(); paint(round.board);
    boardEl.setAttribute('aria-busy', 'false');
    touchAction(); setStrip('좋은 한 수를 찾아보세요', '시간 보너스 +0초', false); updateRecord();
    $('statusText').textContent = '두 칸을 차례로 누르거나, 옆 칸으로 밀어보세요.';
    if (dialog.open) dialog.close(); enableAudio(); tick();
  }
  function pause() {
    if (!round.pause()) return;
    releaseGesture(); clearHint(); $('overlayEyebrow').textContent = 'TAKE A BREATH';
    $('overlayTitle').textContent = '잠깐 쉬어가도 괜찮아요';
    $('overlayDescription').textContent = '시간을 멈췄어요. 준비되면 이어서 플레이하세요.';
    $('resultStats').hidden = true; $('overlayBtn').textContent = '계속하기 →';
    $('overlayFootnote').textContent = 'Esc 키로도 이어서 플레이할 수 있어요.';
    showDialog('pause');
  }
  function resume() { round.resume(); if (dialog.open) dialog.close(); touchAction(); enableAudio(); tick(); }
  function showResult() {
    if (resultShown) return;
    resultShown = true; selected = null; releaseGesture(); clearHint(); selection(); updateRecord();
    const best = round.score > previousBest;
    $('overlayEyebrow').textContent = best ? 'A NEW PERSONAL BEST' : 'NICE LITTLE RUSH';
    $('overlayTitle').textContent = best ? '새로운 최고기록이에요!' : '기분 좋은 한 판, 완료!';
    $('overlayDescription').textContent = best ? '방금의 한 수들이 새로운 기록을 만들었어요.' : round.score ? `최고기록 ${record.bestScore.toLocaleString('ko-KR')}점. 다음 연쇄는 더 크게!` : '두 칸을 차례로 눌러 같은 블록 3개를 이어보세요.';
    $('resultScore').textContent = round.score.toLocaleString('ko-KR'); $('resultChain').textContent = `${round.maxChain}연쇄`;
    $('resultPowers').textContent = `${round.activated}회`; $('resultBonus').textContent = `+${round.bonus}초`;
    $('resultStats').hidden = false; $('overlayBtn').textContent = '한 판 더 →';
    $('overlayFootnote').textContent = storageOK ? '최고점수와 최대 연쇄를 저장했어요.' : '이번 기록은 이 화면에서 확인할 수 있어요.';
    $('statusText').textContent = '시간 종료! 한 판 더 도전해보세요.'; tone('end'); showDialog('result');
  }
  function tick() {
    const seconds = Math.ceil(round.remaining() / 1000);
    $('timer').firstChild.textContent = String(seconds);
    $('timeFill').style.transform = `scaleX(${Math.min(1, round.remaining() / 60000)})`;
    const urgent = seconds <= 10 && round.status !== 'idle';
    $('clock').classList.toggle('urgent', urgent); $('timeFill').style.background = urgent ? '#d97e69' : '#6fa895';
    $('pauseBtn').disabled = round.status !== 'running';
    if (round.expire()) showResult();
    if (!ready() || gesture) return;
    const now = performance.now();
    if (hintUntil && now >= hintUntil) { clearHint(); lastAction = now - 3000; }
    if (!hintUntil && now - lastAction >= 5000) {
      const hint = Match3.moves(round.board)[0];
      if (hint) { hint.forEach(i => buttons[i].classList.add('hint')); hintUntil = now + 1600; }
    }
    if (stripUntil && now > stripUntil) {
      $('comboText').textContent = '좋은 한 수를 찾아보세요'; $('comboText').classList.remove('active');
      $('bonusText').textContent = `시간 보너스 +${round.bonus}초`; stripUntil = 0;
    }
  }
  $('overlayBtn').addEventListener('click', () => { if (mode === 'pause') resume(); else startRound(); });
  $('restartBtn').addEventListener('click', startRound);
  $('pauseBtn').addEventListener('click', pause);
  $('soundBtn').addEventListener('click', () => { record.sound = !record.sound; updateSoundButton(); saveRecord(); enableAudio(); });
  dialog.addEventListener('cancel', event => { event.preventDefault(); if (mode === 'pause') resume(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !dialog.open) { event.preventDefault(); pause(); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  window.addEventListener('blur', () => { if (!document.hidden) pause(); });
  window.addEventListener('pagehide', () => { updateRecord(); });
  window.addEventListener('resize', releaseGesture);
  paint(round.board); updateRecord(); updateSoundButton();
  if (!storageOK) $('storageNote').textContent = '이 브라우저에서는 기록을 저장할 수 없어요.';
  showDialog('start'); tick(); setInterval(tick, 100);
})();
