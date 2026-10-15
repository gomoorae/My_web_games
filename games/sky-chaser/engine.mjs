export const W = 480, H = 720, STEP = 1 / 120;
export const VERSION = '0.3.1';
export const PLAYER_SCALE = .8;
export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const PILOTS = Object.freeze({
  lumi: Object.freeze({
    name: '루미',
    bomb: Object.freeze({
      id: 'skywing', name: '천익 섬광', duration: 3,
      strikes: Object.freeze([.42, .72, 1.02, 1.32, 1.62, 1.92, 2.4]),
      bossPulseDamage: 70, bossFinalDamage: 120,
      pulseDamage: 100, finalDamage: 200
    })
  })
});

// Relative motion catches fast projectiles even when both targets move.
export function sweptHit(ax, ay, bx, by, radius) {
  const dx = bx - ax, dy = by - ay, d = dx * dx + dy * dy;
  const t = d ? clamp(-(ax * dx + ay * dy) / d, 0, 1) : 0;
  return (ax + dx * t) ** 2 + (ay + dy * t) ** 2 <= radius * radius;
}

function makeWaves() {
  const a = [];
  const row = (t, type, n, side = 0) => {
    for (let i = 0; i < n; i++) a.push({
      t: t + i * .25, type, x: side ? (side < 0 ? 62 : W - 62) : 60 + i * (W - 120) / Math.max(1, n - 1),
      variant: side || (i % 2 ? 1 : -1)
    });
  };
  row(3, 'scout', 5); row(8, 'scout', 5);
  row(13, 'interceptor', 4, -1); row(17, 'interceptor', 4, 1);
  row(22, 'turret', 2); row(25, 'scout', 5);
  row(30, 'bomber', 2); row(35, 'interceptor', 5, -1);
  row(40, 'turret', 3); row(44, 'scout', 5);
  row(49, 'mine', 4); row(54, 'interceptor', 4, 1);
  row(60, 'bomber', 2); row(64, 'scout', 4);
  a.push({t: 69, type: 'midboss', x: W / 2, variant: 0});
  row(76, 'scout', 6); row(81, 'interceptor', 5, -1);
  row(86, 'turret', 3); row(90, 'mine', 4);
  row(95, 'bomber', 2); row(100, 'interceptor', 5, 1);
  row(105, 'scout', 6); row(109, 'mine', 4);
  row(114, 'turret', 3); row(118, 'bomber', 2);
  row(122, 'interceptor', 4, -1);
  a.push({t: 134, type: 'boss', x: W / 2, variant: 0});
  return a.sort((a, b) => a.t - b.t);
}
export const WAVES = makeWaves();
const SPECS = {
  scout: {hp: 10, r: 17, score: 100, vy: 100},
  interceptor: {hp: 18, r: 19, score: 160, vy: 75},
  turret: {hp: 35, r: 22, score: 220, vy: 43},
  bomber: {hp: 64, r: 32, score: 400, vy: 43},
  mine: {hp: 24, r: 19, score: 180, vy: 62},
  midboss: {hp: 680, r: 54, score: 4000, vy: 55},
  boss: {hp: 2600, r: 72, score: 12000, vy: 50}
};

export class Game {
  constructor(seed = 421) { this.seed = seed; this.reset(); }
  reset(difficulty = 'normal') {
    this.rng = this.seed;
    this.difficulty = difficulty;
    this.state = 'ready'; this.time = 0; this.stageTime = 0;
    this.score = 0; this.kills = 0; this.shotsFired = 0; this.hits = 0;
    this.maxCombo = 0; this.combo = 0; this.comboTime = 0;
    this.lives = 3; this.bombs = 3; this.usedBombs = 0; this.deaths = 0;
    this.enemies = []; this.bullets = []; this.shots = []; this.items = []; this.events = [];
    this.wave = 0; this.id = 0; this.killDrops = 0; this.midDefeated = false;
    this.finalDefeated = false; this.clearTimer = 0; this.bombTimer = 0;
    this.activeBomb = null; this.bombDamage = 0;
    this.player = {pilot: 'lumi', x: 240, y: 592, px: 240, py: 592, r: 4, power: 1,
      inv: 2.6, fire: 0, drone: .3, charge: 0, charging: false, bank: 0};
  }
  random() {
    this.rng = (Math.imul(this.rng, 1664525) + 1013904223) >>> 0;
    return this.rng / 4294967296;
  }
  event(kind, detail = {}) { this.events.push({kind, ...detail}); }
  takeEvents() { return this.events.splice(0); }
  start(difficulty = 'normal') { this.reset(difficulty); this.state = 'playing'; this.event('start'); }
  pause() {
    if (this.state === 'playing') {
      this.state = 'paused'; this.player.charge = 0; this.player.charging = false;
    }
  }
  resume() { if (this.state === 'paused') this.state = 'playing'; }
  spawn(type, x, variant = 0) {
    const s = SPECS[type];
    const e = {id: ++this.id, type, x, y: type === 'boss' ? -125 : -60,
      px: x, py: -60, baseX: x, variant, age: 0, fire: 1.3, flash: 0,
      hp: s.hp, maxHp: s.hp, r: s.r, score: s.score, vy: s.vy,
      phase: 1, volley: 0, transition: 0, dead: false};
    this.enemies.push(e);
    if (type === 'midboss') this.event('warning', {text: '중간 보스 · 철갑 순찰정'});
    if (type === 'boss') {
      this.bullets.length = 0;
      this.event('warning', {text: '해적 기함 · 아이언 레이븐'});
      this.items.push({x: 240, y: 260, type: 'bomb', age: 0});
    }
    return e;
  }
  bullet(x, y, angle, speed, style = 'rose', r = 4) {
    if (this.bullets.length >= 420) return;
    const scale = this.difficulty === 'easy' ? .72 : 1;
    this.bullets.push({x, y, px: x, py: y, vx: Math.cos(angle) * speed * scale,
      vy: Math.sin(angle) * speed * scale, r, style, age: 0, dead: false});
  }
  fan(e, count, spread, speed, aim = true, style = 'rose', offsetX = 0) {
    // Match the painted cannon muzzles. The boss's core remains the hitbox.
    const muzzles = {scout: 20, interceptor: 27, turret: 26, bomber: 33, midboss: 62};
    const x = e.x + offsetX * (e.type === 'boss' && e.phase === 2 ? 1.85 : 1);
    const y = e.y + (e.type === 'boss' ? (e.phase === 1 ? 112 : 70) : (muzzles[e.type] ?? e.r * .55));
    const base = aim ? Math.atan2(this.player.y - y, this.player.x - x) : Math.PI / 2;
    for (let i = 0; i < count; i++) {
      this.bullet(x, y, base + (i - (count - 1) / 2) * spread, speed, style);
    }
  }
  ring(e, count, speed, phase = 0) {
    for (let i = 0; i < count; i++) this.bullet(e.x, e.y + 10,
      phase + i * Math.PI * 2 / count, speed, 'amber');
  }
  shoot() {
    const p = this.player;
    const add = (ox, vx, damage, style = 'shot') => this.shots.push({
      x: p.x + ox, y: p.y - 41 * PLAYER_SCALE, px: p.x + ox, py: p.y - 41 * PLAYER_SCALE,
      vx, vy: -700, r: 4, damage, style, dead: false, hitIds: new Set()
    });
    if (p.power === 1) add(0, 0, 5);
    else { add(-8, 0, 4); add(8, 0, 4); }
    if (p.power >= 3) { add(-16, -70, 2); add(16, 70, 2); }
    this.shotsFired++; this.event('shot', {power: p.power});
  }
  releaseCharge() {
    const p = this.player, charge = p.charge;
    if (charge < .3) return;
    const full = charge >= 1.15;
    this.shots.push({x: p.x, y: p.y - 41 * PLAYER_SCALE, px: p.x, py: p.y - 41 * PLAYER_SCALE,
      vx: 0, vy: -810, r: full ? 23 : 13, damage: full ? 135 : 40,
      style: full ? 'charge' : 'charge-small', dead: false, hitIds: new Set()});
    this.event('charge', {full, x: p.x, y: p.y});
  }
  bomb() {
    if (this.state !== 'playing' || this.bombs <= 0 || this.bombTimer > 0 || this.finalDefeated) return false;
    const spec = PILOTS[this.player.pilot].bomb;
    this.bombs--; this.usedBombs++; this.bombTimer = spec.duration;
    this.activeBomb = {spec, age: 0, nextStrike: 0, damage: 0,
      x: clamp(this.player.x, 180, W - 180), y: clamp(this.player.y, 360, H - 95)};
    this.player.inv = Math.max(this.player.inv, spec.duration + .2);
    const count = this.bullets.length; this.score += count * 5; this.bullets.length = 0;
    this.event('bomb', {x: this.activeBomb.x, y: this.activeBomb.y,
      pilot: this.player.pilot, id: spec.id, name: spec.name});
    return true;
  }
  updateBomb(dt) {
    const attack = this.activeBomb;
    if (!attack) return;
    attack.age += dt;
    const spec = attack.spec;
    while (attack.nextStrike < spec.strikes.length &&
      attack.age + 1e-9 >= spec.strikes[attack.nextStrike]) {
      const index = attack.nextStrike++, final = index === spec.strikes.length - 1;
      const targets = [];
      for (const e of this.enemies) {
        if (e.y < 5 || e.y > H + e.r || e.dead || e.transition > 0) continue;
        const big = e.type === 'boss' || e.type === 'midboss';
        const damage = big ? (final ? spec.bossFinalDamage : spec.bossPulseDamage) :
          (final ? spec.finalDamage : spec.pulseDamage);
        const before = e.hp;
        this.damage(e, damage);
        const actual = Math.max(0, before - Math.max(0, e.hp));
        attack.damage += actual; this.bombDamage += actual;
        if (actual > 0) targets.push({x: e.x, y: e.y, damage: actual, type: e.type});
      }
      this.event('bombStrike', {id: spec.id, index, final, x: attack.x, y: attack.y, targets});
    }
    if (attack.age >= spec.duration) this.activeBomb = null;
  }
  damage(e, amount) {
    if (e.dead || e.transition > 0 || e.y < 5) return;
    const before = e.hp;
    e.hp -= amount; e.flash = .065; this.hits++;
    if (e.type === 'boss' && e.phase === 1 && e.hp <= e.maxHp * .5) {
      // A powerful shot can trigger, but can never skip, the second form.
      e.hp = e.maxHp * .5; e.phase = 2; e.transition = 2.7; e.fire = .7;
      this.bullets.length = 0; this.score += 1500;
      this.event('transform', {x: e.x, y: e.y});
    } else if (e.hp <= 0) this.destroy(e);
    else if (amount > 15) this.event('impact', {x: e.x, y: e.y, amount: Math.min(before, amount)});
  }
  destroy(e) {
    if (e.dead) return;
    e.dead = true;
    this.kills++; this.combo++; this.comboTime = 3.2;
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    this.score += e.score + Math.min(this.combo, 30) * 10;
    const large = e.type === 'boss' || e.type === 'midboss';
    this.event('explode', {x: e.x, y: e.y, large, type: e.type});
    if (e.type === 'boss') {
      this.finalDefeated = true; this.clearTimer = 2.8; this.bullets.length = 0;
      for (const other of this.enemies) other.dead = true;
      this.score += this.lives * 2000 + this.bombs * 500;
      this.player.inv = 10;
    } else if (e.type === 'midboss') {
      this.midDefeated = true; this.bullets.length = 0;
      this.items.push({x: e.x - 30, y: e.y, type: 'power', age: 0},
        {x: e.x + 30, y: e.y, type: 'bomb', age: 0});
      this.player.inv = Math.max(this.player.inv, 1.5);
      this.event('message', {text: '항로 확보! 기함을 추격하라'});
    } else {
      this.killDrops++;
      const type = this.killDrops % 9 === 0 ? 'power' : 'coin';
      this.items.push({x: e.x, y: e.y, type, age: 0});
    }
  }
  hitPlayer() {
    const p = this.player;
    if (p.inv > 0 || this.finalDefeated || this.state !== 'playing') return false;
    this.lives--; this.deaths++; this.combo = 0;
    this.bullets.length = 0; p.inv = 3; p.charge = 0; p.charging = false;
    this.event('hurt', {x: p.x, y: p.y});
    if (this.lives <= 0) { this.state = 'gameover'; this.event('gameover'); }
    else if (p.power > 1) {
      p.power--; this.items.push({x: p.x, y: Math.max(100, p.y - 105), type: 'power', age: 0});
    }
    return true;
  }
  updateEnemy(e, dt) {
    e.px = e.x; e.py = e.y; e.age += dt; e.flash = Math.max(0, e.flash - dt);
    const big = e.type === 'boss' || e.type === 'midboss';
    if (big) {
      e.y = Math.min(e.type === 'boss' ? 210 : 156, e.y + e.vy * dt);
      const amplitude = e.type === 'boss' ? (e.phase === 2 ? 95 : 65) : 115;
      e.x = W / 2 + Math.sin(e.age * (e.phase === 2 ? .9 : .6)) * amplitude * Math.min(1, e.age / 4);
    } else {
      e.y += e.vy * dt;
      if (e.type === 'interceptor') {
        const progress = clamp(e.age / 3.8, 0, 1);
        e.x = e.variant < 0 ? 62 + Math.sin(progress * Math.PI / 1.35) * 300 :
          W - 62 - Math.sin(progress * Math.PI / 1.35) * 300;
      } else if (e.type === 'scout') e.x = e.baseX + Math.sin(e.age * 2) * 22;
      else if (e.type === 'mine') e.x = e.baseX + Math.sin(e.age * 1.8) * 30;
    }
    if (e.transition > 0) { e.transition = Math.max(0, e.transition - dt); return; }
    if (e.y < 38 || e.y > H - 95 || this.bombTimer > 0 ||
        Math.hypot(e.x - this.player.x, e.y - this.player.y) < 110) return;
    e.fire -= dt;
    if (e.fire > 0) return;
    e.volley++;
    const easy = this.difficulty === 'easy';
    if (e.type === 'scout') { this.fan(e, 1, 0, 175); e.fire = 2.9; }
    if (e.type === 'interceptor') { this.fan(e, easy ? 1 : 3, .14, 198); e.fire = 2.1; }
    if (e.type === 'turret') { this.fan(e, 3, .22, 155, true, 'amber'); e.fire = 1.75; }
    if (e.type === 'bomber') { this.fan(e, 5, .22, 160, false, 'rose'); e.fire = 2.3; }
    if (e.type === 'mine') { this.ring(e, easy ? 6 : 8, 112, e.age * .2); e.fire = 3; }
    if (e.type === 'midboss') {
      if (e.volley % 3 === 0) this.ring(e, easy ? 10 : 14, 120, e.age * .15);
      else { this.fan(e, 3, .21, 175, true, 'rose', -32); this.fan(e, 3, .21, 175, true, 'rose', 32); }
      e.fire = 1.3;
    }
    if (e.type === 'boss') {
      const phase = Math.floor(e.age / 6) % 3;
      if (e.phase === 1) {
        if (phase === 0) {
          this.fan(e, easy ? 5 : 7, .18, 166, false, 'rose', -45);
          this.fan(e, easy ? 5 : 7, .18, 166, false, 'rose', 45);
        } else if (phase === 1) this.fan(e, easy ? 3 : 5, .12, 230, true, 'amber');
        else this.ring(e, easy ? 12 : 18, 140, e.volley * .17);
        e.fire = phase === 1 ? .95 : 1.35;
      } else {
        if (phase === 0) {
          this.ring(e, easy ? 12 : 20, 140, e.volley * .22); e.fire = 1.15;
        } else if (phase === 1) {
          this.fan(e, 3, .17, 245, true, 'rose', -45);
          this.fan(e, 3, .17, 245, true, 'rose', 45); e.fire = .85;
        } else {
          const base = Math.PI / 2 + Math.sin(e.volley * .45) * .7;
          for (let i = -2; i <= 2; i++) this.bullet(e.x, e.y + 40, base + i * .22, 185, 'amber');
          e.fire = .38;
        }
      }
    }
    if (easy) e.fire *= 1.15;
  }
  step(dt, input = {}) {
    if (this.state !== 'playing') return;
    const p = this.player;
    this.time += dt; p.px = p.x; p.py = p.y;
    p.inv = Math.max(0, p.inv - dt); this.bombTimer = Math.max(0, this.bombTimer - dt);
    this.comboTime -= dt; if (this.comboTime <= 0) this.combo = 0;
    let dx = clamp(input.x || 0, -1, 1), dy = clamp(input.y || 0, -1, 1);
    const len = Math.hypot(dx, dy);
    if (len > 1) { dx /= len; dy /= len; }
    const speed = input.focus ? 125 : 285;
    p.x = clamp(p.x + dx * speed * dt, 21, W - 21);
    p.y = clamp(p.y + dy * speed * dt, 55, H - 30);
    if (input.target) {
      // Touch follows relative drag; cap speed, so collision remains meaningful.
      const tx = input.target.x - p.x, ty = input.target.y - p.y;
      const dist = Math.hypot(tx, ty), step = Math.min(dist, 520 * dt);
      if (dist) { p.x = clamp(p.x + tx / dist * step, 21, W - 21); p.y = clamp(p.y + ty / dist * step, 55, H - 30); }
    }
    p.bank += (dx - p.bank) * Math.min(1, dt * 12);
    if (input.charge && !this.finalDefeated) {
      p.charge = Math.min(1.3, p.charge + dt); p.charging = true;
    } else if (p.charging) { this.releaseCharge(); p.charge = 0; p.charging = false; }
    p.fire -= dt; p.drone -= dt;
    if (input.fire && !input.charge && !this.finalDefeated && p.fire <= 0) {
      this.shoot(); p.fire = .115;
    }
    if (input.fire && p.power >= 2 && !input.charge && p.drone <= 0 && !this.finalDefeated) {
      this.shots.push({x: p.x, y: p.y - 8, px: p.x, py: p.y - 8, vx: 0, vy: -350,
        r: 5, damage: 7, style: 'homing', dead: false, hitIds: new Set()});
      p.drone = .42;
    }
    if (this.finalDefeated) {
      this.clearTimer -= dt;
      if (this.clearTimer <= 0) { this.state = 'clear'; this.event('clear'); }
    } else {
      const waitingMid = this.stageTime >= 73 && !this.midDefeated;
      if (!waitingMid && this.stageTime < 134.1) this.stageTime += dt;
      while (this.wave < WAVES.length && WAVES[this.wave].t <= this.stageTime) {
        const w = WAVES[this.wave++]; this.spawn(w.type, w.x, w.variant);
      }
    }
    for (const e of this.enemies) if (!e.dead) this.updateEnemy(e, dt);
    this.updateBomb(dt);
    for (const s of this.shots) {
      s.px = s.x; s.py = s.y;
      if (s.style === 'homing') {
        let target = null, near = Infinity;
        for (const e of this.enemies) {
          const d = Math.hypot(e.x - s.x, e.y - s.y);
          if (!e.dead && e.y > 0 && e.y < s.y && d < near) { near = d; target = e; }
        }
        if (target) {
          const a = Math.atan2(target.y - s.y, target.x - s.x);
          s.vx += (Math.cos(a) * 440 - s.vx) * Math.min(1, dt * 9);
          s.vy += (Math.sin(a) * 440 - s.vy) * Math.min(1, dt * 9);
        }
      }
      s.x += s.vx * dt; s.y += s.vy * dt;
      for (const e of this.enemies) {
        if (e.dead || e.y < 5 || e.transition > 0 || s.hitIds.has(e.id)) continue;
        if (sweptHit(s.px - e.px, s.py - e.py, s.x - e.x, s.y - e.y, s.r + e.r)) {
          this.damage(e, s.damage); s.hitIds.add(e.id);
          if (s.style !== 'charge' && s.style !== 'charge-small') { s.dead = true; break; }
        }
      }
    }
    for (const b of this.bullets) {
      b.px = b.x; b.py = b.y; b.x += b.vx * dt; b.y += b.vy * dt; b.age += dt;
      if (p.inv <= 0 && sweptHit(b.px - p.px, b.py - p.py, b.x - p.x, b.y - p.y, b.r + p.r)) {
        b.dead = true; this.hitPlayer(); break;
      }
    }
    if (p.inv <= 0) {
      for (const e of this.enemies) if (!e.dead && e.y > 0 &&
        sweptHit(e.px - p.px, e.py - p.py, e.x - p.x, e.y - p.y, e.r * .65 + p.r)) {
        this.hitPlayer(); break;
      }
    }
    for (const item of this.items) {
      item.age += dt;
      let d = Math.hypot(p.x - item.x, p.y - item.y);
      if (d < 95 || item.magnet || this.finalDefeated) {
        item.magnet = true;
        const delta = Math.min(d, 390 * dt);
        if (d) { item.x += (p.x - item.x) / d * delta; item.y += (p.y - item.y) / d * delta; }
      } else item.y += (item.type === 'coin' ? 65 : 40) * dt;
      d = Math.hypot(p.x - item.x, p.y - item.y);
      if (d < 23) {
        item.dead = true;
        if (item.type === 'power') {
          if (p.power < 3) { p.power++; this.event('power', {level: p.power}); }
          else this.score += 800;
        } else if (item.type === 'bomb') {
          if (this.bombs < 5) { this.bombs++; this.event('message', {text: '폭탄 +1'}); }
          else this.score += 1000;
        } else this.score += 80 + Math.min(this.combo, 30) * 5;
        this.event('pickup', {type: item.type});
      }
    }
    if (this.bombTimer > 0) this.bullets.length = 0;
    this.enemies = this.enemies.filter(e => !e.dead && e.y < H + 100);
    this.shots = this.shots.filter(s => !s.dead && s.y > -80 && s.y < H + 80 && s.x > -60 && s.x < W + 60);
    this.bullets = this.bullets.filter(b => !b.dead && b.age < 14 && b.x > -50 && b.x < W + 50 && b.y > -100 && b.y < H + 40);
    this.items = this.items.filter(i => !i.dead && i.y < H + 30 && i.age < 24);
  }
  get boss() { return this.enemies.find(e => !e.dead && (e.type === 'boss' || e.type === 'midboss')); }
  get chapter() {
    return this.stageTime < 22 ? '항구 상공' : this.stageTime < 69 ? '해적의 경계선' :
      this.stageTime < 74 ? '철갑 순찰정' : this.stageTime < 126 ? '구름 위 추격전' : '아이언 레이븐';
  }
}
