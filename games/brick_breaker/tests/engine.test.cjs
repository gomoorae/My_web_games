const test = require('node:test');
const assert = require('node:assert/strict');
const { Game, STAGES, STEP, W, R, MAX_BALLS, sweepCircleRect } = require('../engine.js');

function rng(seed) { return () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296); }
function world() { const g = new Game({ random: rng(5) }); g.launch(); g.takeEvents(); return g; }
function isolated(g, brick) { g.bricks = [brick, { id: 99, x: 730, y: 68, w: 40, h: 23, hp: 1, maxHp: 1, kind: 'normal' }]; }

test('all ten stages have valid distinct layouts, modest durability and reachable bricks', () => {
  assert.equal(STAGES.length, 10);
  assert.equal(new Set(STAGES.map(s => JSON.stringify(s.map))).size, 10);
  for (let i = 0; i < 10; i++) {
    const g = new Game(); g.loadStage(i);
    assert.ok(g.remaining >= 30 && g.remaining <= 70);
    assert.ok(g.bricks.reduce((sum, b) => sum + b.hp, 0) <= 125);
    for (const row of g.stage.map) assert.match(row, /^[.123X]{10}$/);
    for (const b of g.bricks) assert.ok(b.x > R && b.x + b.w < W - R && b.y > R && b.hp <= 3);
  }
  assert.equal(new Game().remaining, 40);
});

test('opening and recovering a life wait for an explicit launch', () => {
  const g = new Game(); const start = g.balls[0].y;
  for (let i = 0; i < 600; i++) g.advance(1 / 60);
  assert.equal(g.state, 'ready'); assert.equal(g.balls[0].y, start); assert.equal(g.lives, 3);
  g.launch(); g.balls[0].y = g.height + 20; g.balls[0].vy = 300; g.step(STEP);
  assert.equal(g.state, 'ready'); assert.equal(g.lives, 2); assert.equal(g.balls.length, 1);
  assert.equal(g.balls[0].vy, 0);
});

test('30, 60, 120 and 144 Hz produce the same simulation', () => {
  const snapshots = [30, 60, 120, 144].map(hz => {
    const g = world();
    g.setAxis(-0.1);
    for (let i = 0; i < hz * 2; i++) g.advance(1 / hz);
    return JSON.stringify({ score: g.score, lives: g.lives, balls: g.balls, x: g.paddle.x, bricks: g.bricks, time: g.totalTime });
  });
  for (const snapshot of snapshots) assert.equal(snapshot, snapshots[0]);
});

test('side contact reflects horizontally and hits armored brick only once', () => {
  const g = world(), b = { id: 1, x: 300, y: 200, w: 67, h: 23, hp: 3, maxHp: 3, kind: 'normal' };
  isolated(g, b); g.balls = [g.createBall(280, 211, 355, 0)];
  for (let i = 0; i < 12; i++) g.step(STEP);
  assert.equal(b.hp, 2); assert.ok(g.balls[0].vx < 0);
});

test('top and bottom contacts reflect on their actual face', () => {
  const rect = { x: 100, y: 100, w: 67, h: 23 };
  assert.deepEqual(sweepCircleRect(130, 70, 0, 500, .1, rect), { t: .044, nx: 0, ny: -1 });
  assert.deepEqual(sweepCircleRect(130, 150, 0, -500, .1, rect), { t: .038, nx: 0, ny: 1 });
});

test('rounded-corner sweep rejects a square-corner near miss and catches a true hit', () => {
  const rect = { x: 100, y: 100, w: 40, h: 20 };
  assert.equal(sweepCircleRect(90, 92.2, 100, 0, .035, rect), null);
  const hit = sweepCircleRect(90, 96, 100, 0, .1, rect);
  assert.ok(hit && hit.nx < 0 && hit.ny < 0);
});

test('fast motion cannot tunnel through thin bricks', () => {
  const g = world(), b = { id: 1, x: 300, y: 200, w: 67, h: 23, hp: 3, maxHp: 3, kind: 'normal' };
  isolated(g, b); g.balls = [g.createBall(332, 150, 0, 12000)]; g.step(STEP);
  assert.equal(b.hp, 2); assert.ok(g.balls[0].vy < 0);
});

test('paddle edges catch the ball radius and preserve useful upward angles', () => {
  const g = world(); g.bricks = [];
  // Keep a distant live brick so the collision does not finish the stage.
  g.bricks.push({ id: 1, x: 20, y: 70, w: 40, h: 20, hp: 1, maxHp: 1, kind: 'normal' });
  const edge = g.paddle.x + g.paddle.w / 2;
  g.balls = [g.createBall(edge + 3, g.paddle.y - 20, 0, 400)];
  for (let i = 0; i < 8; i++) g.step(STEP);
  assert.ok(g.balls[0].vy < -100);
  assert.ok(Math.abs(Math.hypot(g.balls[0].vx, g.balls[0].vy) - g.speed) < 1e-7);
});

test('keyboard, pointer and expanded paddle remain inside both walls', () => {
  const g = world();
  for (const direction of [-1, 1]) {
    g.setAxis(direction); for (let i = 0; i < 300; i++) g.step(STEP);
    assert.ok(g.paddle.x - g.paddle.w / 2 >= 0 && g.paddle.x + g.paddle.w / 2 <= W);
  }
  g.state = 'playing'; g.applyPowerup('wide'); g.setTarget(10000);
  for (let i = 0; i < 50; i++) g.step(STEP);
  assert.ok(g.paddle.x + g.paddle.w / 2 <= W);
});

test('pause freezes physics and timed effects; resume clears held movement', () => {
  const g = world(); g.applyPowerup('pierce'); g.setAxis(1); g.pause();
  const before = JSON.stringify({ b: g.balls, p: g.paddle, effects: g.effects });
  for (let i = 0; i < 100; i++) g.advance(.1);
  assert.equal(JSON.stringify({ b: g.balls, p: g.paddle, effects: g.effects }), before);
  g.resume(); assert.equal(g.axis, 0); assert.equal(g.targetX, null); assert.equal(g.state, 'playing');
});

test('multiball is bounded, with viable trajectories', () => {
  const g = world();
  g.applyPowerup('split'); assert.equal(g.balls.length, 3);
  g.applyPowerup('split'); assert.equal(g.balls.length, MAX_BALLS);
  for (let i = 0; i < 20; i++) g.applyPowerup('split');
  assert.equal(g.balls.length, MAX_BALLS);
  for (const b of g.balls) assert.ok(Math.abs(b.vy) > g.speed * .4);
});

test('piercing destroys armor without reversing or damaging it repeatedly', () => {
  const g = world(), b = { id: 1, x: 300, y: 200, w: 67, h: 23, hp: 3, maxHp: 3, kind: 'normal' };
  isolated(g, b); g.applyPowerup('pierce'); g.balls = [g.createBall(330, 240, 0, -355)];
  for (let i = 0; i < 20; i++) g.step(STEP);
  assert.equal(b.hp, 0); assert.equal(g.stageBroken, 1); assert.ok(g.balls[0].vy < 0);
});

test('bombs chain without recursion cycles or duplicate scoring', () => {
  const g = world();
  g.bricks = [0, 1, 2].map((c) => ({ id: c, x: 29 + c * 75, y: 68, w: 67, h: 23, hp: 1, maxHp: 1, kind: 'bomb' }));
  g.damage(g.bricks[0]);
  assert.equal(g.remaining, 0); assert.equal(g.totalBroken, 3); assert.equal(g.score, 225);
});

test('combo rewards consecutive destruction and resets on paddle return', () => {
  const g = world();
  for (const b of g.bricks.slice(0, 5)) g.damage(b);
  assert.equal(g.combo, 5); assert.equal(g.multiplier, 2); assert.equal(g.score, 300);
  g.balls = [g.createBall(g.paddle.x, g.paddle.y - 9, 0, 355)]; g.step(STEP);
  assert.equal(g.combo, 0);
});

test('stage clear waits for input and gives bounded life rewards', () => {
  const g = world(); g.loadStage(2); g.launch();
  g.bricks.forEach(b => { b.hp = 0; }); g.finishStage();
  assert.equal(g.state, 'clear'); assert.equal(g.lives, 4); assert.equal(g.stageReward, 1);
  for (let i = 0; i < 500; i++) g.advance(.1);
  assert.equal(g.stageIndex, 2); g.nextStage(); assert.equal(g.stageIndex, 3); assert.equal(g.state, 'ready');
});

test('final brick wins even when another ball is falling out in the same tick', () => {
  const g = world(); g.loadStage(9); g.launch();
  const b = g.bricks[0]; g.bricks = [b]; b.hp = 1;
  g.balls = [g.createBall(b.x + b.w / 2, b.y + b.h + R + 1, 0, -355), g.createBall(20, g.height + 100, 0, 355)];
  g.step(STEP); assert.equal(g.state, 'won'); assert.equal(g.lives, 3);
});

test('only the last lost ball costs a life; game over and restart reset cleanly', () => {
  const g = world(); g.applyPowerup('split'); g.balls[0].y = g.height + 100; g.balls[0].vy = 355;
  g.step(STEP); assert.equal(g.lives, 3); assert.equal(g.balls.length, 2);
  g.lives = 1; for (const b of g.balls) { b.y = g.height + 100; b.vy = 355; }
  g.step(STEP); assert.equal(g.state, 'lost'); assert.equal(g.lives, 0);
  g.restart(); assert.equal(g.state, 'ready'); assert.equal(g.lives, 3); assert.equal(g.score, 0); assert.equal(g.balls.length, 1);
});

test('resizing preserves progress, moves the paddle and pauses active play', () => {
  const g = world(); g.damage(g.bricks[0]); const score = g.score, count = g.remaining;
  g.setHeight(1040); assert.equal(g.state, 'paused'); assert.equal(g.score, score); assert.equal(g.remaining, count);
  assert.equal(g.paddle.y, 995); g.resume(); g.setHeight(560); assert.equal(g.state, 'paused');
  assert.ok(g.balls.every(b => b.y < g.height));
});

test('last-three center returns aim at remaining targets', () => {
  const g = world(); g.bricks = [g.bricks[0]];
  g.balls = [g.createBall(g.paddle.x, g.paddle.y - R - 1, 10, 355)]; g.step(STEP);
  assert.ok(g.balls[0].vx < 0); assert.ok(g.takeEvents().some(e => e.type === 'aim'));
});
