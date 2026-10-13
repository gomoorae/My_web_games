const test = require('node:test');
const assert = require('node:assert/strict');
const { World, C, flightPath, arcClear, difficultyAt, environmentAt } = require('../src/engine.js');
const { Pilot } = require('./pilot.cjs');

function emptyFlight(seed = 1) {
  const world = new World(seed); world.start(); world.objects = [];
  world.generatedY = 1e9; world.takeEvents(); return world;
}
function advance(world, seconds, input = {}) {
  for (let t = 0; t < seconds; t += C.fixedStep) world.update(C.fixedStep, input);
}
function coin(world, extra = {}) {
  return world.addObject('coin', world.player.x, world.player.y, { value: 1, ...extra });
}

test('a flight starts, falls without stars, ends and resets cleanly', () => {
  const w = emptyFlight();
  assert.equal(w.phase, 'playing'); assert.ok(w.player.vy > 0);
  advance(w, 4); assert.equal(w.phase, 'over'); assert.ok(w.height > 0);
  const snapshot = w.player.y; advance(w, 1); assert.equal(w.player.y, snapshot);
  w.reset(2); assert.equal(w.phase, 'ready'); assert.equal(w.stars, 0);
  assert.equal(w.player.charge, 8); assert.equal(w.height, 0); assert.ok(w.start());
});
test('a star turns a fall into an ascent and counts only once', () => {
  const w = emptyFlight(); w.player.vy = -220;
  const object = coin(w); w.update(C.fixedStep);
  assert.ok(w.player.vy > 0); assert.equal(w.stars, 1);
  w.collect(object); assert.equal(w.stars, 1); assert.equal(w.pickups, 1);
});
test('charged leap spends its charge and refills with eight small stars', () => {
  const w = emptyFlight(); assert.ok(w.jump()); assert.equal(w.player.charge, 0);
  assert.equal(w.jump(), false);
  for (let i = 0; i < 7; i++) w.collect(coin(w));
  assert.equal(w.jump(), false); w.collect(coin(w));
  assert.ok(w.jump()); assert.equal(w.player.charge, 0);
});
test('a large star gives three star value and three charge slots only once', () => {
  const w = emptyFlight(); w.jump();
  const large = coin(w, { value: 3 }); w.collect(large); w.collect(large);
  assert.equal(w.stars, 3); assert.equal(w.player.charge, 3); assert.equal(w.pickups, 1);
  w.collect(coin(w)); w.collect(coin(w, { value: 3 }));
  assert.equal(w.player.charge, 7); assert.equal(w.jump(), false);
  w.collect(coin(w)); assert.ok(w.jump()); assert.equal(w.player.charge, 0);
});
test('large stars cap charge at eight and emit ready only when crossing the threshold', () => {
  for (const initialCharge of [5, 6, 7, 8]) {
    const w = emptyFlight(); w.player.charge = initialCharge;
    w.collect(coin(w, { value: 3 }));
    assert.equal(w.player.charge, 8);
    assert.equal(w.takeEvents().filter(e => e.type === 'charged').length, initialCharge < 8 ? 1 : 0);
    w.collect(coin(w, { value: 3 }));
    assert.equal(w.player.charge, 8);
    assert.equal(w.takeEvents().filter(e => e.type === 'charged').length, 0);
  }
});
test('one star creates a visible takeoff, apex and descent', () => {
  const w = emptyFlight(); w.player.vy = -300; w.collect(coin(w));
  const origin = w.player.y;
  advance(w, .55); assert.equal(w.animation().state, 'jump');
  advance(w, .14); assert.equal(w.animation().state, 'float');
  assert.ok(w.maxY - origin > 250 && w.maxY - origin < 270);
  advance(w, .2); assert.equal(w.animation().state, 'fall');
  assert.ok(w.player.y < w.maxY);
});
test('standing still cannot ride a vertical chain of ordinary stars', () => {
  for (let seed = 1; seed <= 16; seed++) {
    const w = new World(seed); w.start(); advance(w, 4);
    assert.equal(w.phase, 'over'); assert.equal(w.bounces, 1); assert.ok(w.height < 60);
  }
});
test('movement and key release preserve jump, fall and boost poses', () => {
  const w = emptyFlight(); w.jump();
  w.update(C.fixedStep, { axis: 1 }); assert.equal(w.animation().state, 'jump');
  w.update(C.fixedStep, { axis: 0 }); assert.equal(w.animation().state, 'jump');
  advance(w, .1); w.player.vy = -150;
  w.update(C.fixedStep, { axis: -1 }); assert.equal(w.animation().state, 'fall');
  w.update(C.fixedStep, { axis: 0 }); assert.equal(w.animation().state, 'fall');
  w.activateBoost();
  for (const axis of [-1, 1, 0]) { w.update(C.fixedStep, { axis }); assert.equal(w.animation().state, 'boost'); }
});
test('takeoff preserves a direction that is already held', () => {
  const w = emptyFlight(); advance(w, .1, { axis: 1 });
  const x = w.player.x, vx = w.player.vx;
  w.update(C.fixedStep, { axis: 1, jump: true });
  assert.ok(w.player.x > x); assert.ok(w.player.vx >= vx); assert.equal(w.animation().state, 'jump');
});
test('space cannot replace boost or spend the saved leap', () => {
  const w = emptyFlight(); w.activateBoost();
  w.update(C.fixedStep, { axis: 1, jump: true });
  assert.equal(w.player.charge, 8); assert.equal(w.player.vy, C.boostSpeed);
  assert.equal(w.animation().state, 'boost');
});
test('boost finishes with upward momentum and a brief recovery window', () => {
  const w = emptyFlight(); w.activateBoost(.1); advance(w, .12);
  assert.equal(w.player.boost, 0); assert.ok(w.player.vy > 400);
  assert.ok(w.player.invulnerable > 0); assert.notEqual(w.animation().state, 'move');
});
test('pause freezes physics and all item timers', () => {
  const w = emptyFlight(); w.activateBoost(); w.player.invulnerable = 1.3; w.pause();
  const before = JSON.stringify([w.player, w.time, w.cameraBottom, w.objects]);
  advance(w, 3, { axis: -1, jump: true });
  assert.equal(JSON.stringify([w.player, w.time, w.cameraBottom, w.objects]), before);
  w.resume(); advance(w, .1); assert.ok(w.player.y > C.startY);
});
test('camera follows upward with lag so the character can rise and fall onscreen', () => {
  const w = emptyFlight(); advance(w, .6);
  assert.ok(w.cameraBottom < w.player.y - C.cameraAnchor);
  const top = w.cameraBottom; advance(w, .4);
  assert.ok(w.cameraBottom >= top);
  assert.ok(w.cameraBottom <= w.maxY - C.cameraAnchor);
});
test('screen edges contain movement while keeping airborne actions', () => {
  const w = emptyFlight(); w.activateBoost(2); advance(w, 1.5, { axis: 1 });
  assert.equal(w.player.x, C.width - 25); assert.equal(w.player.vx, 0);
  assert.equal(w.animation().state, 'boost');
});
test('shield absorbs one collision, with repeated overlap protected', () => {
  const w = emptyFlight(), enemy = { x: 240, y: 38 };
  w.player.shield = true; w.hitEnemy(enemy);
  assert.equal(w.player.shield, false); assert.equal(w.hits, 0); assert.ok(w.player.vy > 0);
  w.hitEnemy(enemy); assert.equal(w.hits, 0);
  w.player.invulnerable = 0; w.hitEnemy(enemy);
  assert.equal(w.hits, 1); assert.ok(w.player.vy < 0);
});
test('boost breaks clouds and grants stars without being interrupted', () => {
  const w = emptyFlight(), enemy = { x: 240, y: 38 };
  w.activateBoost(); w.hitEnemy(enemy);
  assert.equal(enemy.collected, true); assert.equal(w.stars, 3);
  assert.equal(w.hits, 0); assert.equal(w.animation().state, 'boost');
});
test('swept collisions collect a star crossed during fast movement', () => {
  const w = emptyFlight(); w.activateBoost();
  const target = w.addObject('coin', w.player.x, w.player.y + 15, { value: 1 });
  w.update(1 / 30); assert.equal(target.collected, true);
});
test('ordinary courses vary both axes, offer one to three choices and keep ribbons exclusive to boost', () => {
  assert.deepEqual(new World(7).objects, new World(7).objects);
  assert.notDeepEqual(new World(7).objects, new World(8).objects);
  const w = new World(45); w.ensureCourse(120000);
  const main = w.objects.filter(o => o.primary), gaps = main.slice(1).map((n, i) => ({ dx: Math.abs(n.x - main[i].x), dy: n.y - main[i].y }));
  for (const { dx, dy } of gaps) { assert.ok(dx >= 65 && dx <= 280); assert.ok(dy >= 100 && dy <= 232.001); }
  assert.ok(gaps.filter(g => g.dx < 130).length > 25, 'short lateral jumps must really occur');
  assert.ok(gaps.filter(g => g.dx >= 130 && g.dx < 205).length > gaps.length * .4, 'medium distances should dominate');
  assert.ok(gaps.filter(g => g.dx >= 205).length > 25, 'wide crossings remain a minority choice');
  assert.ok(gaps.some(g => g.dy < 135) && gaps.some(g => g.dy > 210));
  const counts = new Map(); for (const n of w.objects.filter(o => o.step)) counts.set(n.layer, (counts.get(n.layer) || 0) + 1);
  assert.ok([...counts.values()].every(n => n >= 1 && n <= 3));
  assert.ok([...counts.values()].includes(3));
  assert.ok(w.objects.some(o => o.primary && o.value === 3), 'large stars also occur on the main route');
  assert.equal(w.objects.some(o => o.kind === 'boost'), false);
});
test('all choices retain a clear next jump from left, neutral and right entry velocities', () => {
  for (let seed = 1; seed <= 16; seed++) {
    const w = new World(seed); w.ensureCourse(seed <= 4 ? 120000 : 24000);
    const clouds = w.objects.filter(o => o.type === 'enemy');
    const layers = new Map();
    for (const o of w.objects.filter(o => o.step)) {
      if (!layers.has(o.layer)) layers.set(o.layer, []);
      layers.get(o.layer).push(o);
    }
    for (let i = 1; i < w.layerIndex; i++) {
      for (const from of layers.get(i - 1)) for (const vx of [-C.moveSpeed, 0, C.moveSpeed]) {
        assert.ok(layers.get(i).some(to => [0, .18, .3].some(delay => arcClear(flightPath(from, to, delay, vx), clouds))),
          'seed ' + seed + ', layer ' + i + ' must have a reachable way around clouds');
      }
    }
  }
});
test('cloud density increases with altitude, patrols start in the higher bands', () => {
  const density = [0, 0, 0, 0];
  for (let seed = 1; seed <= 16; seed++) {
    const w = new World(seed); w.ensureCourse(24000);
    const clouds = w.objects.filter(o => o.type === 'enemy');
    for (const c of clouds) {
      const tier = difficultyAt(c.y - 100).tier;
      density[tier]++;
      if (c.y < 5000) assert.equal(c.amplitude, 0);
      if (c.y > 10500) assert.ok(c.amplitude > 0);
    }
    for (let y = 0; y < 23200; y += 80) {
      const count = clouds.filter(c => c.y >= y && c.y < y + C.height).length;
      assert.ok(count <= 5, 'a visible window must not become a wall of clouds');
    }
  }
  const spans = [1500, 3500, 5000, 14000];
  for (let i = 0; i < 4; i++) density[i] /= spans[i];
  assert.ok(density[0] < density[1] && density[1] < density[2] && density[2] < density[3]);
});
test('boost keeps the same course, camera and future objects through its start and end', () => {
  const w = new World(4); w.start();
  w.player.y = 2200; w.maxY = 2200; w.cameraBottom = 1900;
  w.ensureCourse(6500);
  const original = w.objects.slice(), coordinates = original.map(o => [o.x, o.y]);
  w.activateBoost();
  assert.equal(w.player.y, 2200); assert.equal(w.cameraBottom, 1900);
  for (let i = 0; i < original.length; i++) {
    assert.ok(w.objects.includes(original[i]));
    assert.deepEqual([original[i].x, original[i].y], coordinates[i]);
  }
  const future = original.filter(o => o.y > w.boostRoute.endY + 500);
  assert.ok(future.some(o => o.type === 'enemy'));
  assert.ok(future.some(o => o.step));
  advance(w, C.boostDuration + .02);
  assert.equal(w.player.boost, 0);
  assert.ok(future.every(o => w.objects.includes(o)));
  assert.ok(w.objects.some(o => o.step && o.y > w.player.y));
  assert.ok(w.player.invulnerable > 1);
});
test('boost ribbon stays fixed, requires steering and does not trigger jumps', () => {
  const still = emptyFlight(), steered = emptyFlight(), pilot = new Pilot();
  still.activateBoost(); steered.activateBoost();
  const ribbon = still.objects.filter(o => o.kind === 'boost');
  assert.ok(ribbon.length >= 40);
  assert.ok(Math.abs(ribbon[0].x - still.player.x) >= 125);
  for (let i = 1; i < ribbon.length; i++) {
    assert.equal(ribbon[i].y - ribbon[i - 1].y, C.boostGap);
    assert.ok(Math.abs(ribbon[i].x - ribbon[i - 1].x) < 6);
  }
  const positions = ribbon.map(o => [o.x, o.y]);
  for (let t = 0; t < C.boostDuration - .04; t += C.fixedStep) {
    still.update(C.fixedStep);
    steered.update(C.fixedStep, { axis: pilot.axis(steered) });
  }
  assert.deepEqual(ribbon.map(o => [o.x, o.y]), positions, 'stars cannot chase the player');
  assert.ok(steered.stars >= ribbon.length * .85);
  assert.ok(steered.stars > still.stars + 20, 'aiming must materially change the reward');
  assert.equal(still.player.x, C.startX); assert.equal(steered.bounces, 0);
  assert.equal(steered.animation().state, 'boost');
});
test('boost can return to existing stepping stones from either edge without replacing the map', () => {
  for (let seed = 1; seed <= 8; seed++) for (const x of [25, 100, 240, 380, 455]) {
    const w = new World(seed); w.start();
    w.player.x = x; w.player.y = 2200; w.maxY = 2200; w.cameraBottom = 1900;
    w.activateBoost();
    advance(w, C.boostDuration + .02);
    const before = w.bounces, pilot = new Pilot();
    for (let t = 0; t < 1.7 && w.bounces === before; t += C.fixedStep) w.update(C.fixedStep, { axis: pilot.axis(w) });
    assert.ok(w.bounces > before, `seed ${seed}, x ${x} must reach an existing star`);
    assert.equal(w.hits, 0); assert.equal(w.phase, 'playing');
  }
});
test('a ribbon star cannot prolong or retrigger a normal jump after boost', () => {
  const w = emptyFlight();
  const leftover = w.addObject('coin', w.player.x, w.player.y, { kind: 'boost', value: 1 });
  const vy = w.player.vy; w.collect(leftover);
  assert.equal(w.player.vy, vy); assert.equal(w.stars, 1); assert.equal(w.bounces, 0);
});
test('a shield on a stepping stone also provides the next takeoff', () => {
  const w = emptyFlight(); w.player.vy = -250;
  w.collect(w.addObject('shield', w.player.x, w.player.y, { step: true, layer: 0 }));
  assert.ok(w.player.shield); assert.ok(w.player.vy >= C.bounceSpeed); assert.equal(w.lastStepLayer, 0);
});
test('16 seeded full flights reach 1800 m using only left/right, with distinct normal jumps', () => {
  const intervals = [];
  for (let seed = 1; seed <= 16; seed++) {
    const w = new World(seed), pilot = new Pilot(); w.start();
    let frames = 0, previousBounce = null, boostCount = 0;
    while (w.phase === 'playing' && w.height < 1800 && frames++ < 30000) {
      w.update(C.fixedStep, { axis: pilot.axis(w) });
      for (const event of w.takeEvents()) {
        if (event.type === 'boost') { previousBounce = null; boostCount++; }
        if (event.type === 'bounce') {
          if (previousBounce !== null) intervals.push(w.time - previousBounce);
          previousBounce = w.time;
        }
      }
      assert.ok(w.objects.length < 160);
    }
    assert.ok(w.height >= 1800, 'seed ' + seed + ' ended at ' + w.height + ' m');
    assert.equal(w.hits, 0); assert.ok(boostCount >= 2);
  }
  intervals.sort((a,b) => a-b);
  assert.ok(intervals[Math.floor(intervals.length / 2)] > .8);
  // New high, nearby stars deliberately give a shorter hop; most arcs still take a full second.
  assert.ok(intervals[Math.floor(intervals.length * .1)] > .33);
  assert.ok(intervals.filter(t => t < .25).length < intervals.length * .02);
});

test('sky progression is continuous and full space remains a high-altitude reward', () => {
  assert.deepEqual([0, 500, 2000, 5000, 10000].map(h => environmentAt(h).id), ['sky', 'cloud-sea', 'upper-sky', 'space-edge', 'space']);
  assert.notEqual(environmentAt(9999).id, 'space');
  assert.equal(environmentAt(10000).clouds, 0); assert.equal(environmentAt(10000).sun, 0);
  assert.equal(environmentAt(10000).stars, 1);
  const color = env => env.colors.flatMap((c, i) => [1, 3, 5].map(j => parseInt(c.slice(j, j + 2), 16) * (1 - env.blend) + parseInt(env.next.colors[i].slice(j, j + 2), 16) * env.blend));
  for (const h of [500, 2000, 5000, 10000]) {
    const a = environmentAt(h - .1), b = environmentAt(h + .1), ca = color(a), cb = color(b);
    assert.ok(ca.every((c, i) => Math.abs(c - cb[i]) < .02));
    for (const k of ['clouds', 'stars', 'sun', 'earth', 'nebula']) assert.ok(Math.abs(a[k] - b[k]) < .001);
  }
});
test('space gradually replaces clouds with asteroids and slow satellite debris', () => {
  const w = new World(45); w.ensureCourse(140000);
  const hazards = w.objects.filter(o => o.type === 'enemy');
  assert.ok(hazards.some(o => o.kind === 'satellite'));
  assert.ok(hazards.some(o => o.kind === 'asteroid'));
  for (const o of hazards) {
    const h = (o.y - C.startY) * C.metersPerUnit;
    if (h < 5000) assert.equal(o.kind, 'cloud');
    if (h >= 8800) assert.notEqual(o.kind, 'cloud');
    if (o.kind === 'satellite') { assert.ok(h >= 10300); assert.ok(o.amplitude * o.speed <= 30); }
  }
});
test('new obstacles obey the same shield and boost collision rules', () => {
  for (const kind of ['asteroid', 'satellite']) {
    const w = emptyFlight(), enemy = { kind, x: w.player.x, y: w.player.y };
    w.player.shield = true; w.hitEnemy(enemy); assert.equal(w.player.shield, false); assert.equal(w.hits, 0);
    w.player.invulnerable = 0; w.hitEnemy(enemy); assert.equal(w.hits, 1); assert.equal(w.takeEvents().find(e => e.type === 'hit').kind, kind);
    w.activateBoost(); w.hitEnemy(enemy); assert.equal(enemy.collected, true); assert.equal(w.hits, 1);
  }
});
test('four full flights reach space and beyond without manual leaps or protected collisions', () => {
  for (const seed of [17, 29, 45, 83]) {
    const w = new World(seed), pilot = new Pilot(); w.start(); let frames = 0;
    while (w.phase === 'playing' && w.height < 12000 && frames++ < 150000) {
      w.update(C.fixedStep, { axis: pilot.axis(w) });
      assert.ok(!w.takeEvents().some(e => e.type === 'hit' || e.type === 'shieldBreak'), `seed ${seed} at ${w.height}m`);
      assert.ok(w.objects.length < 180);
    }
    assert.ok(w.height >= 12000, `seed ${seed} stopped at ${w.height}m`);
  }
});
