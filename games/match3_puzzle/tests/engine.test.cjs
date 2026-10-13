const test = require('node:test');
const assert = require('node:assert/strict');
const { Engine, Round, matches, moves, canSwap, adjacent, MAX_BONUS } = require('../engine.js');
function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const base = engine => Array.from({ length: 64 }, (_, i) => engine.tile((Math.floor(i / 8) + 2 * (i % 8)) % 6));
function fixture(indices, specialIndex = null, special = null) {
  const engine = new Engine(rng(902)), board = base(engine);
  board.forEach(tile => { if (tile.type === 5) tile.type = 4; });
  indices.forEach(i => { board[i].type = 5; });
  if (specialIndex !== null) board[specialIndex].special = special;
  const groups = matches(board);
  return { engine, board, groups };
}

test('initial boards are stable, playable, complete, and uniquely identified', () => {
  for (let seed = 1; seed <= 150; seed++) {
    const engine = new Engine(rng(seed)), board = engine.createBoard();
    assert.equal(board.length, 64); assert.equal(new Set(board.map(t => t.id)).size, 64);
    assert.equal(matches(board).length, 0); assert.ok(moves(board).length > 0);
  }
});
test('constant random input cannot trap board generation', () => {
  for (const random of [() => 0, () => .999999]) {
    const board = new Engine(random).createBoard();
    assert.equal(matches(board).length, 0); assert.ok(moves(board).length);
  }
});
test('a dead board is shuffled into a stable board without losing powers', () => {
  const engine = new Engine(rng(71)), board = base(engine); board[21].special = 'row';
  assert.equal(moves(board).length, 0);
  const shuffled = engine.shuffle(board);
  assert.equal(matches(shuffled).length, 0); assert.ok(moves(shuffled).length);
  assert.equal(shuffled.filter(t => t.special === 'row').length, 1);
});
test('only orthogonally adjacent in-range cells can be swapped', () => {
  assert.equal(adjacent(7, 8), false); assert.equal(adjacent(0, 9), false);
  assert.equal(adjacent(-1, 0), false); assert.equal(adjacent(63, 64), false);
  assert.equal(adjacent(0, 8), true); assert.equal(adjacent(0, 1), true);
});
test('invalid moves preserve the original board and earn nothing', () => {
  const engine = new Engine(rng(1)), board = engine.createBoard(), before = structuredClone(board);
  const pair = Array.from({ length: 63 }, (_, a) => [a, a + 1]).find(([a, b]) => adjacent(a, b) && !canSwap(board, a, b));
  const plan = engine.play(board, ...pair);
  assert.equal(plan.valid, false); assert.deepEqual(board, before); assert.equal(plan.frames.length, 0);
});
test('three tiles clear without making a power or adding time', () => {
  const { engine, board, groups } = fixture([25, 26, 27]);
  const step = engine.resolveStep(board, groups, [26], null, 1);
  assert.equal(step.created.length, 0); assert.equal(step.bonusSeconds, 0); assert.equal(step.points, 30);
});
test('four horizontal tiles make a row power on the selected tile', () => {
  const { engine, board, groups } = fixture([25, 26, 27, 28]);
  const step = engine.resolveStep(board, groups, [27], null, 1);
  assert.equal(step.created[0].tile.special, 'row'); assert.equal(step.created[0].index, 27);
  assert.equal(step.bonusSeconds, 1); assert.equal(step.points, 80); assert.ok(!step.removed.includes(27));
});
test('four vertical tiles make a column power', () => {
  const { engine, board, groups } = fixture([10, 18, 26, 34]);
  const step = engine.resolveStep(board, groups, [26], null, 1);
  assert.equal(step.created[0].tile.special, 'column'); assert.equal(step.bonusSeconds, 1);
});
test('five in a straight line make a color ball', () => {
  const { engine, board, groups } = fixture([25, 26, 27, 28, 29]);
  const step = engine.resolveStep(board, groups, [27], null, 1);
  assert.equal(step.created[0].tile.special, 'color'); assert.equal(step.created[0].tile.type, -1);
  assert.equal(step.bonusSeconds, 2);
});
test('T and L shapes make one bomb, without duplicate match cells', () => {
  for (const indices of [[25, 26, 27, 18, 10], [25, 26, 27, 17, 9]]) {
    const { engine, board, groups } = fixture(indices);
    const step = engine.resolveStep(board, groups, [], null, 1);
    assert.equal(step.created.length, 1); assert.equal(step.created[0].tile.special, 'bomb');
    assert.equal(new Set(step.removed).size, step.removed.length); assert.equal(step.bonusSeconds, 2);
  }
});
test('a matched line power clears its entire row and chains into another power', () => {
  const { engine, board, groups } = fixture([25, 26, 27], 26, 'row'); board[31].special = 'column';
  const step = engine.resolveStep(board, groups, [], null, 1);
  for (let i = 24; i <= 31; i++) assert.ok(step.removed.includes(i));
  for (let r = 0; r < 8; r++) assert.ok(step.removed.includes(r * 8 + 7));
  assert.equal(step.activated.length, 2); assert.equal(step.bonusSeconds, 0);
});
test('bomb explosion is clipped to board edges', () => {
  const engine = new Engine(rng(2)), board = base(engine); board[0].special = 'bomb';
  const step = engine.resolveStep(board, [{ cells: new Set([0]), runs: [] }], [], null, 1);
  assert.deepEqual(step.removed.sort((a, b) => a - b), [0, 1, 8, 9]);
});
test('a color ball swaps with any normal tile and clears exactly that color', () => {
  const engine = new Engine(rng(4)), board = base(engine); board[27].special = 'color'; board[27].type = -1;
  const expected = board.reduce((out, tile, i) => tile.type === board[28].type ? [...out, i] : out, []);
  const plan = engine.play(board, 27, 28), first = plan.frames[0];
  assert.equal(plan.valid, true); assert.equal(first.removed.length, expected.length + 1);
  assert.ok(first.removed.includes(27)); assert.ok(first.removed.includes(28));
  assert.equal(first.bonusSeconds, 0);
});
test('two color balls clear all 64 cells once', () => {
  const engine = new Engine(rng(7)), board = base(engine);
  [27, 28].forEach(i => { board[i].special = 'color'; board[i].type = -1; });
  const step = engine.play(board, 27, 28).frames[0];
  assert.equal(step.removed.length, 64); assert.equal(step.activated.length, 2); assert.equal(step.points, 640);
});
test('line + line gives a cross even for matching line orientations', () => {
  const engine = new Engine(rng(7)), board = base(engine); board[27].special = board[28].special = 'row';
  const step = engine.play(board, 27, 28).frames[0];
  for (let i = 24; i < 32; i++) assert.ok(step.removed.includes(i));
  for (let r = 0; r < 8; r++) assert.ok(step.removed.includes(r * 8 + 4));
});
test('line + bomb clears three rows and three columns', () => {
  const engine = new Engine(rng(7)), board = base(engine); board[27].special = 'row'; board[28].special = 'bomb';
  const step = engine.play(board, 27, 28).frames[0];
  for (let i = 0; i < 64; i++) if ([2, 3, 4].includes(Math.floor(i / 8)) || [3, 4, 5].includes(i % 8)) assert.ok(step.removed.includes(i));
});
test('bomb + bomb includes the 5 by 5 area around the target', () => {
  const engine = new Engine(rng(7)), board = base(engine); board[27].special = board[28].special = 'bomb';
  const step = engine.play(board, 27, 28).frames[0];
  for (let r = 1; r <= 5; r++) for (let c = 2; c <= 6; c++) assert.ok(step.removed.includes(r * 8 + c));
});
test('cascades multiply only clear points and produce a stable playable board', () => {
  let observed = false;
  for (let seed = 1; seed <= 30; seed++) {
    const engine = new Engine(rng(seed)), board = engine.createBoard();
    const result = engine.play(board, ...moves(board)[0]);
    if (result.frames.length >= 2) observed = true;
    result.frames.forEach((f, i) => assert.equal(f.points, f.removed.length * 10 * (i + 1) + 50 * f.created.length));
    assert.equal(matches(result.board).length, 0); assert.ok(moves(result.board).length); assert.ok(result.bonusSeconds <= 3);
  }
  assert.ok(observed);
});
test('1000 consecutive legal moves preserve all board invariants', () => {
  const engine = new Engine(rng(81013)); let board = engine.createBoard();
  for (let turn = 0; turn < 1000; turn++) {
    const possible = moves(board), before = structuredClone(board);
    const plan = engine.play(board, ...possible[turn % possible.length]);
    assert.ok(plan.valid); assert.deepEqual(board, before); board = plan.board;
    assert.equal(board.length, 64); assert.ok(board.every(Boolean));
    assert.equal(new Set(board.map(t => t.id)).size, 64); assert.equal(matches(board).length, 0); assert.ok(moves(board).length);
    assert.ok(board.every(t => t.special === 'color' ? t.type === -1 : t.type >= 0 && t.type <= 5));
  }
});
test('round starts at 60 seconds and rejects moves at the deadline', () => {
  let now = 1000; const round = new Round({ random: rng(2), now: () => now });
  round.start(); assert.equal(round.remaining(), 60000); now += 60000;
  assert.equal(round.begin(...moves(round.board)[0]), null); assert.equal(round.expire(), true);
});
test('finishing an old animation after reset cannot change a new round', () => {
  const round = new Round({ random: rng(2), now: () => 1000 }); round.start();
  const old = round.begin(...moves(round.board)[0]); round.reset(); round.start();
  const before = structuredClone(round.board), next = round.begin(...moves(round.board)[0]), score = round.score;
  assert.equal(round.finish(old), false); assert.equal(round.current(next), true); assert.equal(round.score, score);
  round.finish(next); assert.equal(round.pending, null); assert.notDeepEqual(round.board, before);
});
test('pause freezes time even while an accepted move is animating', () => {
  let now = 0; const round = new Round({ random: rng(4), now: () => now }); round.start();
  const ticket = round.begin(...moves(round.board)[0]); now = 1200; round.pause();
  const remaining = round.remaining(); now += 90000;
  assert.equal(round.remaining(), remaining); assert.equal(round.finish(ticket), true); assert.equal(round.status, 'paused');
  round.resume(); assert.equal(round.remaining(), remaining);
});
test('last accepted move settles before showing a result; later input is rejected', () => {
  let now = 0; const round = new Round({ random: rng(4), now: () => now }); round.start();
  now = 59999; const ticket = round.begin(...moves(round.board)[0]); assert.ok(ticket);
  now = 100000; assert.equal(round.expire(), false); assert.equal(round.begin(0, 1), null);
  round.finish(ticket); assert.equal(round.status, 'over'); assert.ok(round.score > 0);
});
test('time rewards cannot exceed 30 seconds per round', () => {
  let now = 0; const round = new Round({ random: rng(9), now: () => now }); round.start();
  for (let i = 0; i < 500; i++) {
    const ticket = round.begin(...moves(round.board)[i % moves(round.board).length]); round.finish(ticket);
    assert.ok(round.bonus <= MAX_BONUS); assert.ok(ticket.bonusGranted <= 3);
  }
  assert.equal(round.bonus, 30); assert.equal(round.deadline, 90000);
});
