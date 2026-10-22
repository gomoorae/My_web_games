'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { Engine, STAGES, W, H, SEA, SAFE, TRAIL } = require('../engine.js');

const cell = (x, y) => y * W + x;
const close = (actual, expected, epsilon = 1e-8) => assert.ok(Math.abs(actual - expected) <= epsilon, `${actual} ≠ ${expected}`);
function begun(stageIndex = 0) {
  const game = new Engine({ stageIndex, rng: () => 0.5 });
  game.start();
  game.drainEvents();
  return game;
}
function walk(game, ...legs) {
  for (const [direction, count] of legs) for (let step = 0; step < count; step++) game.move(direction);
}
function advance(game, seconds, direction = null) {
  for (let i = 0; i < Math.round(seconds * 120); i++) game.step(1 / 120, direction);
}
function captureEvent(game) {
  const captures = game.drainEvents().filter(event => event.type === 'capture');
  assert.equal(captures.length, 1);
  return captures[0];
}

test('ready and paused games do not advance; resuming preserves the active trail', () => {
  const game = new Engine({ rng: () => 0.5 });
  const position = { ...game.player };
  advance(game, 2, 'up');
  assert.equal(game.elapsed, 0);
  assert.deepEqual(game.player, position);
  game.start();
  game.toggleDraw();
  walk(game, ['up', 4]);
  game.pause();
  const frozen = JSON.stringify([game.player, game.enemies, game.trail, game.elapsed]);
  advance(game, 1, 'right');
  assert.equal(JSON.stringify([game.player, game.enemies, game.trail, game.elapsed]), frozen);
  game.resume();
  advance(game, 0.1, 'right');
  assert.ok(game.player.x > position.x);
  assert.ok(game.elapsed > 0);
});

test('a full-height cut with enemies on both sides reports line-only capture', () => {
  const game = begun();
  game.toggleDraw();
  walk(game, ['up', H - 1]);
  const event = captureEvent(game);
  assert.equal(event.lineOnly, true);
  assert.equal(event.areaCells, 0);
  assert.equal(event.cells.length, H - 2);
  close(event.gain, 100 / (W - 2));
  close(game.percent, event.gain);
  assert.equal(game.trail.length, 0);
  assert.equal(game.armed, false);
  for (const enemy of game.enemies) assert.equal(game.grid[cell(Math.floor(enemy.x), Math.floor(enemy.y))], SEA);
});

test('closing an empty rectangle captures its interior and gives visible area reward', () => {
  const game = begun();
  game.toggleDraw();
  walk(game, ['up', 10], ['left', 20], ['down', 10]);
  const event = captureEvent(game);
  assert.equal(event.lineOnly, false);
  assert.equal(event.cells.length, 210);
  assert.ok(event.areaCells > 0);
  close(game.percent, 210 / ((W - 2) * (H - 2)) * 100);
  assert.ok(event.points > 0);
  assert.equal(game.score, event.points);
  close(game.largestCapture, event.gain);
  assert.equal(game.captures, 1);
  assert.equal(game.grid[cell(38, 55)], SAFE);
  assert.equal(game.grid[cell(48, 48)], SEA);
});

test('drawing cannot begin without arming, and touching one’s own line never removes a life', () => {
  const game = begun();
  game.move('up');
  assert.deepEqual(game.player, { x: 48, y: 59 });
  game.toggleDraw();
  walk(game, ['up', 3]);
  const player = { ...game.player };
  game.move('down');
  assert.deepEqual(game.player, player);
  assert.equal(game.lives, 3);
  assert.equal(game.trail.length, 3);
});

test('self-trapping raises a warning and emergency cancellation restores the anchor at one-life cost', () => {
  const game = begun();
  const anchor = { ...game.player };
  game.toggleDraw();
  walk(game, ['up', 3], ['left', 2], ['down', 2], ['right', 1], ['up', 1]);
  assert.ok(game.drainEvents().some(event => event.type === 'trapped'));
  const stuck = { ...game.player };
  for (const direction of ['up', 'down', 'left', 'right']) game.move(direction);
  assert.deepEqual(game.player, stuck);
  const unfinished = [...game.trail];
  assert.ok(unfinished.length > 0);
  game.abortTrail();
  assert.equal(game.lives, 2);
  assert.deepEqual(game.player, anchor);
  assert.equal(game.trail.length, 0);
  assert.equal(game.armed, false);
  for (const id of unfinished) assert.equal(game.grid[id], SEA);
  assert.ok(game.drainEvents().some(event => event.type === 'lifeLost'));
  game.abortTrail();
  assert.equal(game.lives, 2, 'pressing cancel again must not spend another life');
});

test('emergency cancellation never erases previously captured land', () => {
  const game = begun();
  game.toggleDraw();
  walk(game, ['up', 10], ['left', 20], ['down', 10]);
  const owned = Array.from(game.grid, (kind, id) => kind === SAFE ? id : -1).filter(id => id >= 0);
  const percent = game.percent;
  walk(game, ['left', 3]);
  game.toggleDraw();
  walk(game, ['up', 3]);
  assert.ok(game.trail.length > 0);
  game.abortTrail();
  close(game.percent, percent);
  for (const id of owned) assert.equal(game.grid[id], SAFE);
});

test('enemy contact immediately before returning to safety cancels the line instead of claiming land', () => {
  const game = begun();
  game.toggleDraw();
  walk(game, ['up', 10], ['left', 20], ['down', 9]);
  game.enemies[0].x = 28.5;
  game.enemies[0].y = 58.5;
  game.move('down');
  assert.equal(game.lives, 2);
  assert.equal(game.percent, 0);
  assert.equal(game.trail.length, 0);
  assert.deepEqual(game.player, { x: 48, y: 59 });
  const events = game.drainEvents();
  assert.ok(events.some(event => event.type === 'lifeLost'));
  assert.equal(events.some(event => event.type === 'capture'), false);
});

test('safe movement is faster but entering the sea uses drawing speed', () => {
  const safe = begun();
  const drawing = begun();
  drawing.toggleDraw();
  // These early routes remain clear of every initial enemy.
  advance(safe, 1, 'left');
  advance(drawing, 1, 'up');
  const safeDistance = 48 - safe.player.x;
  const drawingDistance = 59 - drawing.player.y;
  assert.ok(safeDistance >= 29 && safeDistance <= 31, `safe distance ${safeDistance}`);
  assert.ok(drawingDistance >= 18 && drawingDistance <= 20, `drawing distance ${drawingDistance}`);
  assert.ok(safeDistance >= drawingDistance * 1.45);
  assert.equal(drawing.lives, 3);
});

test('all ten stages start with valid enemies, safe borders, and no automatic progress', () => {
  assert.equal(STAGES.length, 10);
  const layouts = new Set();
  const kinds = new Set();
  for (let stageIndex = 0; stageIndex < STAGES.length; stageIndex++) {
    const game = new Engine({ stageIndex, rng: () => 0.5 });
    assert.equal(game.enemies.length, game.stage.count);
    assert.equal(game.percent, 0);
    assert.equal(game.lives, 3);
    assert.equal(game.grid.length, W * H);
    for (let x = 0; x < W; x++) {
      assert.equal(game.grid[cell(x, 0)], SAFE);
      assert.equal(game.grid[cell(x, H - 1)], SAFE);
    }
    for (let y = 0; y < H; y++) {
      assert.equal(game.grid[cell(0, y)], SAFE);
      assert.equal(game.grid[cell(W - 1, y)], SAFE);
    }
    for (const enemy of game.enemies) {
      assert.ok(enemy.x >= 1 && enemy.x < W - 1 && enemy.y >= 1 && enemy.y < H - 1);
      assert.equal(game.grid[cell(Math.floor(enemy.x), Math.floor(enemy.y))], SEA);
      assert.ok(Number.isFinite(enemy.vx) && Number.isFinite(enemy.vy));
      kinds.add(enemy.kind);
    }
    layouts.add(Array.from(game.grid).join(''));
  }
  assert.ok(layouts.size >= 3, 'later stages need actual terrain variation');
  assert.ok(kinds.size >= 3, 'enemy colors alone must not be the only variation');
});

test('all stage enemy simulations stay out of safe terrain at fixed timestep', () => {
  for (let stageIndex = 0; stageIndex < STAGES.length; stageIndex++) {
    const game = begun(stageIndex);
    const before = game.enemies.map(enemy => [enemy.x, enemy.y]);
    for (let i = 0; i < 120 * 12; i++) {
      game.step(1 / 120);
      for (const enemy of game.enemies) {
        assert.ok(enemy.x >= 1 && enemy.x < W - 1 && enemy.y >= 1 && enemy.y < H - 1);
        assert.equal(game.grid[cell(Math.floor(enemy.x), Math.floor(enemy.y))], SEA, `stage ${stageIndex + 1}`);
      }
    }
    close(game.elapsed, 12, 1e-7);
    assert.notDeepEqual(game.enemies.map(enemy => [enemy.x, enemy.y]), before);
    assert.equal(game.lives, 3);
  }
});

test('a pending line survives save and load, with play safely paused', () => {
  const game = begun();
  game.toggleDraw();
  walk(game, ['up', 8], ['left', 6]);
  advance(game, 0.2);
  const snapshot = JSON.parse(JSON.stringify(game.toJSON()));
  const restored = Engine.fromJSON(snapshot);
  assert.ok(restored);
  assert.equal(restored.state, 'paused');
  assert.deepEqual(restored.player, game.player);
  assert.deepEqual(restored.anchor, game.anchor);
  assert.deepEqual(restored.trail, game.trail);
  assert.deepEqual(Array.from(restored.grid), Array.from(game.grid));
  assert.equal(restored.armed, true);
  close(restored.elapsed, game.elapsed);
  const point = { ...restored.player };
  advance(restored, 1, 'down');
  assert.deepEqual(restored.player, point);
  restored.resume();
  walk(restored, ['down', 8]);
  assert.ok(restored.percent > 0);
  assert.equal(restored.trail.length, 0);
});

test('invalid non-snapshot input is rejected without throwing', () => {
  for (const value of [null, undefined, {}, [], '', 0, { version: 999 }]) {
    assert.equal(Engine.fromJSON(value), null);
  }
});

test('corrupted saved board, line, enemy, and numeric data is rejected', () => {
  const game = begun();
  game.toggleDraw();
  walk(game, ['up', 5]);
  const mutations = {
    'wrong grid length': data => data.grid.pop(),
    'unknown cell kind': data => { data.grid[cell(10, 10)] = 17; },
    'broken border': data => { data.grid[0] = SEA; },
    'unlisted line': data => { data.grid[cell(10, 10)] = TRAIL; },
    'duplicate line cell': data => data.trail.push(data.trail[0]),
    'line removed from board': data => { data.grid[data.trail[0]] = SEA; },
    'player outside board': data => { data.player.x = W; },
    'invalid anchor': data => { data.anchor = { x: 10, y: 10 }; },
    'enemy inside safe border': data => { data.enemies[0].x = 0.5; },
    'nonfinite enemy speed': data => { data.enemies[0].vx = NaN; },
    'missing enemy': data => data.enemies.pop(),
    'invalid enemy kind': data => { data.enemies[0].kind = 'teleport'; },
    'invalid stage': data => { data.stageIndex = STAGES.length; },
    'negative elapsed time': data => { data.elapsed = -1; },
    'nonfinite score': data => { data.score = Infinity; },
    'invalid lives': data => { data.lives = 4; },
    'premature win': data => { data.state = 'won'; },
    'premature loss': data => { data.state = 'lost'; }
  };
  for (const [reason, mutate] of Object.entries(mutations)) {
    const snapshot = JSON.parse(JSON.stringify(game.toJSON()));
    mutate(snapshot);
    assert.equal(Engine.fromJSON(snapshot), null, reason);
  }
});

test('finishing a stage records one result, stops time, and retains the result on reload', () => {
  const game = begun();
  game.enemies.forEach((enemy, i) => { enemy.x = 3.5 + i * 2; enemy.y = 2.5; });
  walk(game, ['left', 48], ['up', 55]);
  game.toggleDraw();
  walk(game, ['right', W - 1]);
  assert.equal(game.state, 'won');
  assert.ok(game.percent >= game.stage.goal);
  const wins = game.drainEvents().filter(event => event.type === 'win');
  assert.equal(wins.length, 1);
  assert.equal(wins[0].result.score, game.score);
  assert.equal(wins[0].result.lives, 3);
  assert.equal(wins[0].result.medal, 'gold');
  const before = game.elapsed;
  advance(game, 5, 'down');
  assert.equal(game.elapsed, before);
  assert.equal(game.drainEvents().filter(event => event.type === 'win').length, 0);
  const restored = Engine.fromJSON(JSON.parse(JSON.stringify(game.toJSON())));
  assert.ok(restored);
  assert.equal(restored.state, 'won');
  assert.deepEqual(restored.result, game.result);
});

test('using the last life ends the stage and reopening keeps the retry state', () => {
  const game = begun();
  for (let remaining = 2; remaining >= 0; remaining--) {
    game.toggleDraw();
    game.move('up');
    assert.ok(game.trail.length);
    game.abortTrail();
    assert.equal(game.lives, remaining);
    if (remaining > 0) advance(game, 1.1);
  }
  assert.equal(game.state, 'lost');
  assert.equal(game.trail.length, 0);
  const restored = Engine.fromJSON(JSON.parse(JSON.stringify(game.toJSON())));
  assert.ok(restored);
  assert.equal(restored.state, 'lost');
  assert.equal(restored.lives, 0);
  restored.start();
  assert.equal(restored.state, 'lost', 'start cannot revive a completed run');
});

test('the final stage completes the campaign, including after save and reload', () => {
  const game = begun(STAGES.length - 1);
  game.enemies.forEach((enemy, i) => { enemy.x = 3.5 + i * 2; enemy.y = 2.5; });
  walk(game, ['left', 48], ['up', 55]);
  game.toggleDraw();
  walk(game, ['right', W - 1]);
  assert.equal(game.state, 'complete');
  assert.ok(game.percent >= game.stage.goal);
  for (const enemy of game.enemies) assert.equal(game.grid[cell(Math.floor(enemy.x), Math.floor(enemy.y))], SEA);
  const restored = Engine.fromJSON(JSON.parse(JSON.stringify(game.toJSON())));
  assert.ok(restored);
  assert.equal(restored.state, 'complete');
  assert.equal(restored.stageIndex, STAGES.length - 1);
  assert.deepEqual(restored.result, game.result);
});
