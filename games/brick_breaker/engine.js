(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BrickBreakerEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const W = 800, STEP = 1 / 120, R = 8, MAX_BALLS = 9, EPS = 0.02;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const STAGES = [
    { name: '첫 번째 궤도', hint: '가운데를 뚫고, 벽돌 뒤쪽으로 공을 보내보세요.', color: '#ffb45b', map: [
      '..111111..', '.11111111.', '1111111111', '1111111111', '..111111..'] },
    { name: '양쪽 날개', hint: '양옆의 빈틈을 노리세요. 패들 끝에 맞추면 각도가 커집니다.', color: '#65d6cd', map: [
      '111....111', '1211..1121', '1111..1111', '.111..111.', '..11..11..', '...1111...'] },
    { name: '다이아몬드', hint: '중심은 단단하지만, 양옆은 열려 있어요.', color: '#a6a0ff', map: [
      '....11....', '...1221...', '..112211..', '.11222211.', '..112211..', '...1111...', '....11....'] },
    { name: '점화', hint: '✦ 폭발 벽돌을 깨면 주변 벽돌도 함께 부서집니다.', color: '#ff8b78', map: [
      '.11111111.', '.1X1111X1.', '.11211211.', '..........', '.11111111.', '.11X11X11.', '..111111..'] },
    { name: '열린 회랑', hint: '세로 통로로 공을 올려 보내 안쪽부터 무너뜨리세요.', color: '#82c8ff', map: [
      '1111111111', '12.1221.21', '11.1111.11', '12.1XX1.21', '11.1111.11', '11.1111.11'] },
    { name: '쌍둥이 요새', hint: '요새의 지붕 너머로 공을 보내면 연속 파괴를 노릴 수 있어요.', color: '#dfb5ff', map: [
      '.2.2..2.2.', '.222..222.', '.1X1..1X1.', '.121..121.', '.111..111.', '1111..1111', '1111..1111'] },
    { name: '연쇄 반응', hint: '가까이 붙은 ✦를 연결해 한 번에 크게 터뜨리세요.', color: '#ffc078', map: [
      '.11111111.', '.1X11X111.', '.11X11X11.', '..11X111..', '.11X11X11.', '.1X11X111.', '.11111111.'] },
    { name: '엇갈린 길', hint: '빈 공간을 따라 흐르는 공을 읽고, 반대편으로 돌려보세요.', color: '#99dda6', map: [
      '222...1111', '.111...111', '..11X...11', '1..111...1', '11...X11..', '111...111.', '1111...222'] },
    { name: '마지막 관문', hint: '단단한 문을 뚫거나, 양옆의 폭발 벽돌을 이용하세요.', color: '#ff9db4', map: [
      '1122222211', '1X111111X1', '11..22..11', '21..33..12', '11..22..11', '1X111111X1', '..111111..'] },
    { name: '코어 브레이크', hint: '마지막 중심부. 관통 공과 연쇄 폭발로 마무리하세요.', color: '#ffd56a', map: [
      '..122221..', '.12X11X21.', '1212332121', '1X123321X1', '1212332121', '.12X11X21.', '..111111..'] },
  ];

  // Sweep a circle against faces and rounded corners, returning the first inward contact.
  function sweepCircleRect(x, y, vx, vy, dt, rect, radius = R) {
    let best = null;
    const offer = (t, nx, ny) => {
      if (t < -1e-8 || t > dt + 1e-8 || vx * nx + vy * ny >= -1e-8) return;
      if (!best || t < best.t) best = { t: Math.max(0, t), nx, ny };
    };
    if (vx > 0) {
      const t = (rect.x - radius - x) / vx, py = y + vy * t;
      if (py >= rect.y && py <= rect.y + rect.h) offer(t, -1, 0);
    } else if (vx < 0) {
      const t = (rect.x + rect.w + radius - x) / vx, py = y + vy * t;
      if (py >= rect.y && py <= rect.y + rect.h) offer(t, 1, 0);
    }
    if (vy > 0) {
      const t = (rect.y - radius - y) / vy, px = x + vx * t;
      if (px >= rect.x && px <= rect.x + rect.w) offer(t, 0, -1);
    } else if (vy < 0) {
      const t = (rect.y + rect.h + radius - y) / vy, px = x + vx * t;
      if (px >= rect.x && px <= rect.x + rect.w) offer(t, 0, 1);
    }
    const a = vx * vx + vy * vy;
    if (a > 0) for (const [cx, cy, sx, sy] of [
      [rect.x, rect.y, -1, -1], [rect.x + rect.w, rect.y, 1, -1],
      [rect.x, rect.y + rect.h, -1, 1], [rect.x + rect.w, rect.y + rect.h, 1, 1],
    ]) {
      const dx = x - cx, dy = y - cy, b = 2 * (dx * vx + dy * vy);
      const disc = b * b - 4 * a * (dx * dx + dy * dy - radius * radius);
      if (disc < 0) continue;
      const t = (-b - Math.sqrt(disc)) / (2 * a);
      const nx = (x + vx * t - cx) / radius, ny = (y + vy * t - cy) / radius;
      if (nx * sx >= -1e-8 && ny * sy >= -1e-8) offer(t, nx, ny);
    }
    return best;
  }

  class Game {
    constructor({ random = Math.random, height = 560 } = {}) {
      this.random = random;
      this.height = height;
      this.events = [];
      this.restart();
    }
    emit(type, data = {}) { this.events.push({ type, ...data }); }
    takeEvents() { const out = this.events; this.events = []; return out; }
    get stage() { return STAGES[this.stageIndex]; }
    get remaining() { return this.bricks.reduce((n, b) => n + (b.hp > 0 ? 1 : 0), 0); }
    get speed() { return Math.min(550, 355 + this.stageIndex * 12 + this.stageBroken * 1.7); }
    get multiplier() { return 1 + Math.min(4, Math.floor(this.combo / 5)); }
    restart() {
      this.score = 0; this.lives = 3; this.maxCombo = 0; this.totalBroken = 0;
      this.totalTime = 0; this.accumulator = 0; this.events = [];
      this.loadStage(0);
    }
    loadStage(index) {
      this.stageIndex = clamp(index, 0, STAGES.length - 1);
      this.stageTime = 0; this.stageBroken = 0; this.combo = 0; this.lastDrop = 0;
      this.stageReward = 0; this.clearBonus = 0; this.assistTime = 0;
      this.bricks = [];
      this.stage.map.forEach((row, r) => [...row].forEach((symbol, c) => {
        if (symbol === '.') return;
        const hp = symbol === 'X' ? 1 : Number(symbol);
        this.bricks.push({ id: r * 10 + c, x: 29 + c * 75, y: 68 + r * 31,
          w: 67, h: 23, hp, maxHp: hp, kind: symbol === 'X' ? 'bomb' : 'normal', flash: 0 });
      }));
      this.stageCount = this.bricks.length;
      this.prepareServe();
      this.emit('stage', { index: this.stageIndex });
    }
    createBall(x, y, vx, vy) { return { x, y, vx, vy, radius: R, contacts: new Set(), trail: [] }; }
    prepareServe() {
      this.state = 'ready'; this.previousState = 'ready'; this.accumulator = 0;
      this.effects = { wide: 0, pierce: 0 }; this.drops = []; this.combo = 0;
      this.paddle = { x: W / 2, y: this.height - 45, w: 116, h: 14 };
      this.clearInput();
      this.balls = [this.createBall(this.paddle.x, this.paddle.y - R - 2, 0, 0)];
    }
    clearInput() { this.axis = 0; this.targetX = null; }
    setAxis(axis) { this.axis = clamp(axis, -1, 1); this.targetX = null; }
    setTarget(x) { this.targetX = clamp(x, 0, W); this.axis = 0; }
    setHeight(height) {
      const old = this.height;
      if (height === old) return;
      this.height = height;
      this.paddle.y = height - 45;
      const top = 310;
      for (const ball of this.balls) {
        if (this.state === 'ready' || (this.state === 'paused' && this.previousState === 'ready')) ball.y = this.paddle.y - R - 2;
        else if (ball.y > top) ball.y = top + (ball.y - top) * (height - top - 45) / (old - top - 45);
        ball.trail = [];
      }
      for (const drop of this.drops) if (drop.y > top) drop.y = top + (drop.y - top) * (height - top) / (old - top);
      if (this.state === 'playing') this.pause();
    }
    launch() {
      if (this.state !== 'ready') return;
      const ball = this.balls[0];
      ball.vx = this.speed * 0.32 * (this.stageIndex % 2 ? -1 : 1);
      ball.vy = -Math.sqrt(this.speed ** 2 - ball.vx ** 2);
      this.state = 'playing'; this.accumulator = 0;
      this.emit('launch');
    }
    pause() {
      if (!['playing', 'ready'].includes(this.state)) return;
      this.previousState = this.state; this.state = 'paused'; this.accumulator = 0;
      this.clearInput(); this.emit('pause');
    }
    resume() {
      if (this.state !== 'paused') return;
      this.state = this.previousState; this.accumulator = 0; this.clearInput(); this.emit('resume');
    }
    nextStage() { if (this.state === 'clear') this.loadStage(this.stageIndex + 1); }
    normalize(ball) {
      let angle = Math.atan2(ball.vx, Math.abs(ball.vy));
      angle = clamp(angle, -1.13, 1.13);
      if (Math.abs(angle) < 0.1) angle = (angle < 0 ? -1 : 1) * 0.1;
      ball.vx = Math.sin(angle) * this.speed;
      ball.vy = Math.cos(angle) * this.speed * (ball.vy > 0 ? 1 : -1);
    }
    damage(brick, power = 1, chain = false) {
      if (brick.hp <= 0) return;
      brick.hp = Math.max(0, brick.hp - power); brick.flash = 0.12;
      this.emit('hit', { x: brick.x + brick.w / 2, y: brick.y + brick.h / 2, armor: brick.hp > 0 });
      if (brick.hp > 0) { this.score += 5; return; }
      this.combo += 1; this.maxCombo = Math.max(this.combo, this.maxCombo);
      this.stageBroken += 1; this.totalBroken += 1; this.lastDrop += 1;
      const points = (brick.kind === 'bomb' ? 75 : 50 * brick.maxHp) * this.multiplier;
      this.score += points;
      this.emit('break', { x: brick.x + brick.w / 2, y: brick.y + brick.h / 2, points, combo: this.combo, color: this.stage.color });
      if (!chain) this.tryDrop(brick);
      if (brick.kind === 'bomb') {
        this.emit('explode', { x: brick.x + brick.w / 2, y: brick.y + brick.h / 2 });
        for (const neighbor of this.bricks) {
          if (neighbor.hp > 0 && Math.abs(neighbor.x - brick.x) <= 76 && Math.abs(neighbor.y - brick.y) <= 63) {
            this.damage(neighbor, 3, true);
          }
        }
      }
    }
    tryDrop(brick) {
      const first = this.stageBroken === 4;
      if (!first && this.lastDrop < 7 && this.random() > 0.15) return;
      if (this.drops.length >= 4) return;
      this.lastDrop = 0;
      const type = first ? 'split' : ['wide', 'pierce', 'split'][Math.floor(this.random() * 3) % 3];
      this.drops.push({ x: brick.x + brick.w / 2, y: brick.y + brick.h / 2, type });
    }
    applyPowerup(type) {
      if (this.state !== 'playing') return;
      if (type === 'split') {
        const sources = this.balls.slice();
        if (this.balls.length === MAX_BALLS) this.score += 150;
        for (const source of sources) for (const shift of [-0.36, 0.36]) {
          if (this.balls.length >= MAX_BALLS) break;
          const angle = Math.atan2(source.vy, source.vx) + shift;
          const ball = this.createBall(source.x, source.y, Math.cos(angle) * this.speed, Math.sin(angle) * this.speed);
          // New balls cannot immediately strike the brick the source is still touching.
          ball.contacts = new Set(this.bricks.filter(b => b.hp > 0 && this.overlaps(ball, b)).map(b => b.id));
          this.normalize(ball); this.balls.push(ball);
        }
      } else if (type === 'wide') {
        this.effects.wide = 14; this.paddle.w = 174;
        this.paddle.x = clamp(this.paddle.x, this.paddle.w / 2 + 4, W - this.paddle.w / 2 - 4);
      } else if (type === 'pierce') this.effects.pierce = 9;
      else return;
      this.emit('powerup', { kind: type });
    }
    overlaps(ball, b) {
      const dx = ball.x - clamp(ball.x, b.x, b.x + b.w);
      const dy = ball.y - clamp(ball.y, b.y, b.y + b.h);
      return dx * dx + dy * dy <= (R + EPS * 2) ** 2;
    }
    advanceBall(ball, dt) {
      for (const id of ball.contacts) {
        const b = this.bricks.find(b => b.id === id);
        if (!b || b.hp <= 0 || !this.overlaps(ball, b)) ball.contacts.delete(id);
      }
      let left = dt;
      for (let iteration = 0; iteration < 8 && left > 1e-8; iteration++) {
        let hit = null;
        const offer = h => { if (h && h.t >= -1e-8 && h.t <= left + 1e-8 && (!hit || h.t < hit.t)) hit = h; };
        if (ball.vx < 0) offer({ t: (R - ball.x) / ball.vx, nx: 1, ny: 0, type: 'wall' });
        if (ball.vx > 0) offer({ t: (W - R - ball.x) / ball.vx, nx: -1, ny: 0, type: 'wall' });
        if (ball.vy < 0) offer({ t: (R - ball.y) / ball.vy, nx: 0, ny: 1, type: 'wall' });
        if (ball.vy > 0) {
          const p = this.paddle;
          const contact = sweepCircleRect(ball.x, ball.y, ball.vx, ball.vy, left, { x: p.x - p.w / 2, y: p.y, w: p.w, h: p.h });
          if (contact && contact.ny < -0.1) offer({ ...contact, type: 'paddle' });
        }
        for (const brick of this.bricks) {
          if (brick.hp <= 0 || ball.contacts.has(brick.id)) continue;
          const contact = sweepCircleRect(ball.x, ball.y, ball.vx, ball.vy, left, brick);
          if (contact) offer({ ...contact, type: 'brick', brick });
        }
        if (!hit) { ball.x += ball.vx * left; ball.y += ball.vy * left; break; }
        const t = Math.max(0, hit.t);
        ball.x += ball.vx * t; ball.y += ball.vy * t; left -= t;
        if (hit.type === 'paddle') {
          const offset = clamp((ball.x - this.paddle.x) / (this.paddle.w / 2), -1, 1);
          let angle = offset * 1.1;
          if (Math.abs(angle) < 0.12) angle = (ball.vx < 0 ? -1 : 1) * 0.12;
          // A little help closes the last few bricks without long empty rebounds.
          if (this.remaining <= 3 && Math.abs(offset) < 0.28) {
            const target = this.bricks.filter(b => b.hp > 0).sort((a, b) => Math.abs(a.x + a.w / 2 - ball.x) - Math.abs(b.x + b.w / 2 - ball.x))[0];
            if (target) angle = clamp(Math.atan2(target.x + target.w / 2 - ball.x, ball.y - target.y - target.h), -1.1, 1.1);
            this.emit('aim');
          }
          ball.vx = Math.sin(angle) * this.speed; ball.vy = -Math.cos(angle) * this.speed;
          ball.y = this.paddle.y - R - EPS; this.combo = 0;
          this.emit('paddle', { x: ball.x, y: this.paddle.y });
        } else {
          const piercing = hit.type === 'brick' && this.effects.pierce > 0;
          if (hit.type === 'brick') {
            ball.contacts.add(hit.brick.id);
            this.damage(hit.brick, piercing ? 3 : 1);
          }
          if (!piercing) {
            const dot = ball.vx * hit.nx + ball.vy * hit.ny;
            ball.vx -= 2 * dot * hit.nx; ball.vy -= 2 * dot * hit.ny;
            this.normalize(ball);
            ball.x += hit.nx * EPS; ball.y += hit.ny * EPS;
          } else {
            ball.x += ball.vx * 0.00001; ball.y += ball.vy * 0.00001;
            left = Math.max(0, left - 0.00001);
          }
        }
        if (this.remaining === 0) { this.finishStage(); return; }
      }
    }
    finishStage() {
      if (this.state !== 'playing') return;
      this.clearBonus = 300 + this.lives * 100 + Math.max(0, 300 - Math.floor(this.stageTime * 2));
      this.score += this.clearBonus;
      this.stageReward = (this.stageIndex + 1) % 3 === 0 && this.lives < 5 ? 1 : 0;
      this.lives += this.stageReward;
      this.state = this.stageIndex === STAGES.length - 1 ? 'won' : 'clear';
      this.effects = { wide: 0, pierce: 0 }; this.drops = []; this.clearInput();
      this.emit(this.state, { bonus: this.clearBonus, reward: this.stageReward });
    }
    step(dt) {
      if (!['playing', 'ready'].includes(this.state)) return;
      const p = this.paddle, speed = this.targetX !== null ? 1500 : 780;
      const movement = this.targetX !== null ? clamp(this.targetX - p.x, -speed * dt, speed * dt) : this.axis * speed * dt;
      p.x = clamp(p.x + movement, p.w / 2 + 4, W - p.w / 2 - 4);
      if (this.state === 'ready') { this.balls[0].x = p.x; this.balls[0].y = p.y - R - 2; return; }
      this.stageTime += dt; this.totalTime += dt;
      for (const key of ['wide', 'pierce']) this.effects[key] = Math.max(0, this.effects[key] - dt);
      p.w = this.effects.wide > 0 ? 174 : 116;
      for (const b of this.bricks) b.flash = Math.max(0, b.flash - dt);
      for (const ball of this.balls) {
        this.advanceBall(ball, dt);
        if (this.state !== 'playing') return;
      }
      this.balls = this.balls.filter(b => b.y <= this.height + R);
      if (!this.balls.length) {
        this.lives -= 1; this.combo = 0; this.clearInput();
        if (this.lives <= 0) { this.state = 'lost'; this.drops = []; this.effects = { wide: 0, pierce: 0 }; this.emit('lost'); }
        else { this.prepareServe(); this.emit('life'); }
        return;
      }
      const kept = [];
      for (const drop of this.drops) {
        drop.y += 145 * dt;
        if (drop.y + 13 >= p.y && drop.y - 13 <= p.y + p.h && Math.abs(drop.x - p.x) <= p.w / 2 + 13) this.applyPowerup(drop.type);
        else if (drop.y < this.height + 15) kept.push(drop);
      }
      this.drops = kept;
    }
    advance(seconds) {
      if (!['playing', 'ready'].includes(this.state)) { this.accumulator = 0; return; }
      // Long gaps are handled by visibility/blur pause; bounded catch-up avoids a death spiral.
      this.accumulator += clamp(seconds, 0, 0.1);
      while (this.accumulator + 1e-10 >= STEP) {
        this.accumulator -= STEP;
        this.step(STEP);
        if (!['playing', 'ready'].includes(this.state)) { this.accumulator = 0; break; }
      }
      this.accumulator = Math.max(0, this.accumulator);
    }
  }
  return { Game, STAGES, sweepCircleRect, W, STEP, R, MAX_BALLS, VERSION: '2.0.1' };
});
