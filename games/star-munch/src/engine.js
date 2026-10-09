(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.StarMunch = api;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict';
  const C = Object.freeze({
    width: 480, height: 720, gravity: 1100, moveSpeed: 340, acceleration: 2500,
    bounceSpeed: 760, launchSpeed: 760, leapSpeed: 860, boostSpeed: 1080,
    boostDuration: 2.25, chargeMax: 8, playerRadius: 18,
    startX: 240, startY: 38, lookAhead: 1550, cameraAnchor: 285,
    metersPerUnit: .1, fixedStep: 1 / 120, boostGap: 40
  });
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const approach = (v, target, amount) => v < target ? Math.min(v + amount, target) : Math.max(v - amount, target);
  function makeRandom(seed) {
    let s = seed >>> 0;
    return () => {
      s += 0x6D2B79F5;
      let n = s;
      n = Math.imul(n ^ n >>> 15, n | 1);
      n ^= n + Math.imul(n ^ n >>> 7, n | 61);
      return ((n ^ n >>> 14) >>> 0) / 4294967296;
    };
  }
  function segmentDistanceSquared(px, py, ax, ay, bx, by) {
    const dx = bx - ax, dy = by - ay, length = dx * dx + dy * dy;
    const t = length ? clamp(((px - ax) * dx + (py - ay) * dy) / length, 0, 1) : 0;
    return (px - ax - t * dx) ** 2 + (py - ay - t * dy) ** 2;
  }
  function difficultyAt(y) {
    const height = Math.max(0, (y - C.startY) * C.metersPerUnit);
    if (height < 150) return { tier: 0, cap: 1, chance: height < 80 ? 0 : .18, amplitude: 0, speed: 0 };
    if (height < 500) return { tier: 1, cap: 2, chance: .46, amplitude: 0, speed: 0 };
    if (height < 1000) return { tier: 2, cap: 3, chance: .70, amplitude: 17, speed: .85 };
    return { tier: 3, cap: 5, chance: .96, amplitude: 24, speed: 1.1 };
  }
  // Reserve at least one possible arc per source before adding clouds.
  // Delaying lateral movement lets the player avoid the direct approach.
  function flightPath(from, to, delay = 0) {
    let x = from.x, y = from.y + 20, vx = 0, vy = C.bounceSpeed;
    const path = [{ x, y }], dt = 1 / 60;
    for (let t = 0; t < 1.6; t += dt) {
      const desired = clamp((to.x - x) * 9, -C.moveSpeed, C.moveSpeed);
      const axis = t < delay || Math.abs(desired - vx) < 18 ? 0 : Math.sign(desired - vx);
      vx = approach(vx, axis * C.moveSpeed, C.acceleration * dt);
      x = clamp(x + vx * dt, 25, C.width - 25); vy -= C.gravity * dt; y += vy * dt;
      path.push({ x, y });
      if (Math.hypot(x - to.x, y - to.y) <= C.playerRadius + 10) return path;
      if (y < from.y - 40) break;
    }
    return null;
  }
  function arcClear(path, clouds) {
    return path && clouds.every(cloud => path.every(point =>
      Math.hypot(point.x - cloud.baseX, point.y - cloud.y) > C.playerRadius + cloud.radius + cloud.amplitude + 10));
  }

  class World {
    constructor(seed = Date.now()) { this.reset(seed); }
    reset(seed = Date.now()) {
      this.seed = seed >>> 0; this.random = makeRandom(this.seed);
      this.phase = 'ready'; this.time = 0; this.cameraBottom = -110;
      this.maxY = C.startY; this.stars = 0; this.pickups = 0; this.hits = 0;
      this.bounces = 0; this.lastBounceY = C.startY; this.lastStepLayer = -1;
      this.events = []; this.objects = []; this.nextId = 1; this.layerIndex = 0;
      this.generatedY = C.startY; this.routeNodes = [{ x: C.startX, y: C.startY }]; this.routeHops = []; this.pendingClouds = [];
      this.nextCometY = 2250; this.nextShieldY = 1560;
      this.boostRoute = null; this.boostSerial = 0;
      this.player = {
        x: C.startX, y: C.startY, vx: 0, vy: 0, facing: 1,
        charge: C.chargeMax, boost: 0, boostAge: 0, shield: false,
        invulnerable: 0, hitTime: 0, impulseAge: 0, impulseKind: 'start',
        lastInput: 0, grounded: true
      };
      this.ensureCourse(C.lookAhead);
    }
    get height() { return Math.max(0, Math.floor((this.maxY - C.startY) * C.metersPerUnit)); }
    get score() { return this.height * 10 + this.stars * 15; }
    emit(type, data = {}) { this.events.push({ type, time: this.time, ...data }); }
    takeEvents() { const events = this.events; this.events = []; return events; }
    start() {
      if (this.phase !== 'ready') return false;
      this.phase = 'playing'; this.player.vy = C.launchSpeed; this.player.grounded = false;
      this.player.impulseAge = 0; this.emit('start'); return true;
    }
    pause() { if (this.phase === 'playing') { this.phase = 'paused'; this.emit('pause'); return true; } return false; }
    resume() { if (this.phase === 'paused') { this.phase = 'playing'; this.emit('resume'); return true; } return false; }
    bounce(kind = 'coin') {
      const p = this.player;
      p.vy = Math.max(p.vy, C.bounceSpeed); p.impulseAge = 0; p.impulseKind = kind;
      p.grounded = false; p.hitTime = 0; this.bounces++; this.lastBounceY = p.y;
      this.emit('bounce', { x: p.x, y: p.y });
    }
    jump() {
      const p = this.player;
      if (this.phase !== 'playing' || p.boost > 0 || p.charge < C.chargeMax) return false;
      p.charge = 0; p.vy = C.leapSpeed; p.impulseAge = 0; p.impulseKind = 'manual';
      p.grounded = false; p.hitTime = 0; this.lastBounceY = p.y;
      this.emit('leap', { x: p.x, y: p.y }); return true;
    }
    activateBoost(duration = C.boostDuration) {
      const p = this.player;
      if (p.boost > 0) return false;
      p.boost = duration; p.boostAge = 0; p.vy = C.boostSpeed;
      p.hitTime = 0; p.grounded = false;
      const route = { id: ++this.boostSerial, startY: p.y + 520, endY: p.y + C.boostSpeed * duration };
      // Extend the same course. Existing stars, clouds and their positions
      // survive both the start and end of a boost.
      this.ensureCourse(route.endY + C.lookAhead);
      route.startX = clamp(p.x + (p.x < C.width / 2 ? 150 : -150), 64, 416);
      const next = this.objects.find(o => o.primary && o.y > route.endY + 35);
      route.endX = clamp(next ? next.x : C.width - route.startX, route.startX - 160, route.startX + 160);
      this.boostRoute = route;
      // The fixed ribbon starts to one side, with time to steer into it.
      // A gentle bend rewards following the stars instead of holding still.
      for (let y = route.startY; y < route.endY - 120; y += C.boostGap) {
        const t = (y - route.startY) / (route.endY - 120 - route.startY);
        const x = route.startX + (route.endX - route.startX) * t * t * (3 - 2 * t);
        this.addObject('coin', x, y, { kind: 'boost', boostId: route.id, value: 1, radius: 9 });
      }
      this.emit('boost', { x: p.x, y: p.y, direction: Math.sign(route.startX - p.x) });
      return true;
    }
    finishBoost() {
      const p = this.player;
      this.boostRoute = null;
      // This longer final arc gives even a player at the edge enough time
      // to reach the next existing stepping stone, without rebuilding it.
      p.vy = C.leapSpeed; p.invulnerable = Math.max(p.invulnerable, 1.5);
      p.impulseAge = 0; p.impulseKind = 'boost-end';
      this.lastBounceY = p.y;
      for (const object of this.objects) {
        if (object.step && object.y <= p.y) this.lastStepLayer = Math.max(this.lastStepLayer, object.layer);
      }
      this.emit('boostEnd', { x: p.x, y: p.y });
    }
    addObject(type, x, y, extra = {}) {
      const obj = { id: this.nextId++, type, x, y, baseX: x, radius: type === 'enemy' ? 23 : type === 'coin' ? 14 : 18, ...extra };
      this.objects.push(obj); return obj;
    }
    ensureCourse(targetY) { while (this.generatedY < targetY) this.generateStep(); }
    generateStep() {
      const index = this.layerIndex++, previous = this.routeNodes;
      const y = index === 0 ? 170 : this.generatedY + 136 + this.random() * 30;
      const candidates = [];
      for (let x = 64; x <= 416; x += 8) {
        if (previous.every(node => Math.abs(node.x - x) >= 125 && Math.abs(node.x - x) <= 238)) candidates.push(x);
      }
      const x = index === 0 ? C.startX : candidates[Math.floor(this.random() * candidates.length)];
      if (!Number.isFinite(x)) throw new Error('No reachable step candidate');
      const item = this.nextItem(y);
      const main = this.addObject(item || 'coin', x, y, { value: 1, step: true, primary: true, layer: index });
      const nodes = [main];
      const alternatives = candidates.filter(cx => Math.abs(cx - x) >= 190);
      if (index >= 3 && alternatives.length && this.random() < .52) {
        const bx = alternatives[Math.floor(this.random() * alternatives.length)];
        nodes.push(this.addObject('coin', bx, y + (this.random() - .5) * 26, { value: 3, step: true, primary: false, layer: index, radius: 17 }));
      }
      const sources = previous.map(from => ({ from, paths: nodes.flatMap(to => [0, .18, .3].map(delay => flightPath(from, to, delay)).filter(Boolean)) }));
      this.routeHops.push({ y, sources });
      this.generatedY = y; this.routeNodes = nodes;
      this.pendingClouds.push({ nodes, previous, y });
      // Check two future jumps too: a cloud above this star must not make
      // the following takeoff impossible. All placement happens offscreen.
      while (this.pendingClouds.length && this.pendingClouds[0].y < y - 360) {
        const pending = this.pendingClouds.shift();
        const count = difficultyAt(pending.y).tier >= 3 ? 2 : 1;
        for (let i = 0; i < count; i++) this.generateClouds(pending.nodes, pending.previous, pending.y);
      }
      this.routeHops = this.routeHops.filter(hop => hop.y > y - 1450);
    }
    nextItem(y) {
      if (y >= this.nextCometY) { this.nextCometY = y + 4300 + this.random() * 800; return 'comet'; }
      if (y >= this.nextShieldY) { this.nextShieldY = y + 3000 + this.random() * 800; return 'shield'; }
      return null;
    }
    generateClouds(nodes, previous, y) {
      const difficulty = difficultyAt(y);
      if (this.random() > difficulty.chance) return;
      const nearby = this.objects.filter(o => o.type === 'enemy' && o.y > y - 720);
      if (nearby.length >= difficulty.cap) return;
      const direct = flightPath(previous[0], nodes[0]);
      const intercept = direct && direct[Math.min(direct.length - 1, 26)];
      for (let attempt = 0; attempt < 18; attempt++) {
        const x = clamp(attempt < 7 && intercept ? intercept.x + (this.random() - .5) * 65 : 48 + this.random() * 384, 44, 436);
        const cy = attempt < 7 && intercept ? intercept.y + (this.random() - .5) * 38 : y + 35 + this.random() * 95;
        const cloud = { x, baseX: x, y: cy, radius: 23, amplitude: difficulty.amplitude, speed: difficulty.speed, phase: this.random() * Math.PI * 2 };
        const steps = this.objects.filter(o => o.step && Math.abs(o.y - cy) < 160);
        if (steps.some(o => Math.hypot(o.x - x, o.y - cy) < o.radius + cloud.radius + cloud.amplitude + 24)) continue;
        if (nearby.some(o => Math.hypot(o.baseX - x, o.y - cy) < 100 + o.amplitude + cloud.amplitude)) continue;
        const obstacles = [...this.objects.filter(o => o.type === 'enemy' && o.y > y - 900), cloud];
        if (!this.routeHops.every(hop => hop.sources.every(source => source.paths.some(path => arcClear(path, obstacles))))) continue;
        this.addObject('enemy', x, cy, cloud); return;
      }
    }
    update(dt, input = {}) {
      if (this.phase !== 'playing') return;
      dt = clamp(dt, 0, 1 / 30);
      const p = this.player;
      this.time += dt; p.impulseAge += dt; p.boostAge += dt;
      p.hitTime = Math.max(0, p.hitTime - dt); p.invulnerable = Math.max(0, p.invulnerable - dt);
      const wasBoosting = p.boost > 0;
      p.boost = Math.max(0, p.boost - dt);
      if (wasBoosting && !p.boost) this.finishBoost();
      const axis = clamp(Number(input.axis) || 0, -1, 1);
      p.lastInput = axis; if (axis) p.facing = Math.sign(axis);
      p.vx = approach(p.vx, axis * C.moveSpeed, C.acceleration * dt);
      if (input.jump) this.jump();
      const prevX = p.x, prevY = p.y;
      p.x = clamp(p.x + p.vx * dt, 25, C.width - 25);
      if ((p.x === 25 && p.vx < 0) || (p.x === C.width - 25 && p.vx > 0)) p.vx = 0;
      if (p.boost > 0) p.vy = C.boostSpeed; else p.vy -= C.gravity * dt;
      p.y += p.vy * dt; this.maxY = Math.max(this.maxY, p.y);
      const cameraTarget = p.y - (p.boost > 0 ? C.cameraAnchor - 65 : C.cameraAnchor);
      if (cameraTarget > this.cameraBottom) this.cameraBottom += (cameraTarget - this.cameraBottom) * (1 - Math.exp(-dt * (p.boost > 0 ? 7 : 4.5)));
      this.ensureCourse(this.maxY + C.lookAhead);
      for (const object of this.objects) {
        if (object.collected) continue;
        if (object.type === 'enemy') {
          object.x = object.baseX + Math.sin(this.time * object.speed + object.phase) * object.amplitude;
        }
        if (segmentDistanceSquared(object.x, object.y, prevX, prevY, p.x, p.y) <= (C.playerRadius + object.radius) ** 2) {
          if (object.type === 'enemy') this.hitEnemy(object); else this.collect(object);
        }
      }
      this.objects = this.objects.filter(o => !o.collected && o.y > this.cameraBottom - 180);
      if (p.y < this.cameraBottom - 60) this.end();
    }
    collect(object) {
      if (object.collected) return;
      object.collected = true;
      const p = this.player;
      if (object.step) this.lastStepLayer = Math.max(this.lastStepLayer, object.layer);
      if (object.type === 'coin') {
        this.stars += object.value; this.pickups++;
        const before = p.charge; p.charge = Math.min(C.chargeMax, p.charge + object.value);
        if (before < C.chargeMax && p.charge === C.chargeMax) this.emit('charged');
        if (!p.boost && object.kind !== 'boost') this.bounce();
        this.emit('coin', { x: object.x, y: object.y, value: object.value, ribbon: object.kind === 'boost' });
      } else if (object.type === 'shield') {
        p.shield = true; if (!p.boost) this.bounce('item'); this.emit('shield', { x: p.x, y: p.y });
      } else if (object.type === 'comet') this.activateBoost();
    }
    hitEnemy(enemy) {
      const p = this.player;
      if (enemy.collected) return;
      if (p.boost > 0) { enemy.collected = true; this.stars += 3; this.emit('smash', { x: enemy.x, y: enemy.y }); return; }
      if (p.invulnerable > 0) return;
      p.invulnerable = 1.3;
      if (p.shield) {
        p.shield = false; this.bounce('shield'); this.emit('shieldBreak', { x: p.x, y: p.y });
      } else { p.vy = -225; p.hitTime = .3; this.hits++; this.emit('hit', { x: p.x, y: p.y }); }
    }
    end() {
      if (this.phase !== 'playing') return;
      this.phase = 'over'; this.emit('over', { height: this.height, score: this.score, stars: this.stars, duration: this.time });
    }
    animation() {
      const p = this.player;
      if (p.boost > 0) return { state: 'boost', frame: p.boostAge < .13 ? 9 : 10 + Math.floor(p.boostAge * 9) % 2, stretch: 1.055 };
      if (p.hitTime > 0) return { state: 'fall', frame: 7, stretch: 1 };
      if (p.grounded) return { state: Math.abs(p.vx) > 10 ? 'move' : 'idle', frame: Math.abs(p.vx) > 10 ? 2 + Math.floor(this.time * 8) % 2 : Math.floor(this.time * 2) % 9 === 4 ? 1 : 0, stretch: 1 };
      if (p.impulseAge < .055) return { state: 'jump', frame: 4, stretch: .86 };
      if (p.vy > 115) return { state: 'jump', frame: 5, stretch: p.impulseAge < .19 ? 1.13 : 1.035 };
      if (p.vy > -115) return { state: 'float', frame: 6, stretch: .99 };
      return { state: 'fall', frame: 7, stretch: 1.025 };
    }
  }
  return { C, World, difficultyAt, flightPath, arcClear, makeRandom, segmentDistanceSquared };
});
