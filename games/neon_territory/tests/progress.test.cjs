'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { createStore, defaultProgress, recordWin } = require('../progress.js');
const KEY = 'neon-territory-v1';
const record = (overrides = {}) => ({ score: 2000, time: 95, lives: 2, largestCapture: 18.5, medal: 'silver', ...overrides });
function memory(initial) {
  const items = new Map(initial === undefined ? [] : [[KEY, initial]]);
  return { getItem: key => items.get(key) ?? null, setItem: (key, value) => items.set(key, value), items };
}

test('first visit returns an independent fresh progress object', () => {
  const store = createStore(memory());
  const first = store.load();
  first.settings.sound = false;
  first.records[0] = record();
  assert.deepEqual(store.load(), defaultProgress());
});

test('save and load preserve records, sound preference and the engine snapshot', () => {
  const storage = memory();
  const store = createStore(storage);
  const progress = defaultProgress();
  progress.settings.sound = false;
  progress.snapshot = { version: 1, stageIndex: 0, grid: [1, 0, 2], trail: [2] };
  recordWin(progress, 0, record());
  assert.equal(store.save(progress), true);
  assert.deepEqual(store.load(), progress);
  assert.equal(storage.items.size, 1);
  assert.ok(storage.items.has(KEY));
});

test('corrupt, unsupported, empty or oversized saves safely start fresh', () => {
  for (const raw of ['{bad', 'null', '[]', '"wrong"', '', JSON.stringify({ version: 2, unlocked: 10 }), ' '.repeat(250001)]) {
    assert.deepEqual(createStore(memory(raw)).load(), defaultProgress());
  }
});

test('invalid record values, unknown fields and polluted keys do not enter progress', () => {
  const value = {
    version: 1, unlocked: 99, records: {
      0: record(), 1: record({ score: -1 }), 2: record({ time: '4' }),
      3: record({ lives: 0 }), 4: record({ largestCapture: 101 }),
      5: record({ medal: 'platinum' }), 6: record({ score: null }),
      7: record({ time: 604801 }), 8: record({ lives: 2.5 }), 10: record()
    }, snapshot: [], settings: { sound: 'yes', unexpected: 1 }, unexpected: true
  };
  const loaded = createStore(memory(JSON.stringify(value))).load();
  assert.deepEqual(loaded, { ...defaultProgress(), records: { 0: record() } });
  const polluted = '{"version":1,"records":{"__proto__":{"polluted":true}},"settings":{"__proto__":{"polluted":true}}}';
  assert.deepEqual(createStore(memory(polluted)).load(), defaultProgress());
  assert.equal({}.polluted, undefined);
});

test('unavailable storage, security errors and quota failures never throw', () => {
  for (const storage of [undefined, {}, {
    getItem() { throw new Error('SecurityError'); },
    setItem() { throw new Error('QuotaExceededError'); }
  }]) {
    const store = createStore(storage);
    assert.deepEqual(store.load(), defaultProgress());
    assert.equal(store.save(defaultProgress()), false);
  }
});

test('oversized or cyclic snapshots are rejected without replacing the last save', () => {
  const storage = memory();
  const store = createStore(storage);
  assert.equal(store.save(defaultProgress()), true);
  const original = storage.items.get(KEY);
  const oversized = defaultProgress();
  oversized.snapshot = { payload: '가'.repeat(100000) };
  assert.equal(store.save(oversized), false);
  const cyclic = defaultProgress();
  cyclic.snapshot = {}; cyclic.snapshot.self = cyclic.snapshot;
  assert.equal(store.save(cyclic), false);
  assert.equal(storage.items.get(KEY), original);
});

test('personal bests improve independently without degrading earlier achievements', () => {
  const progress = defaultProgress();
  assert.equal(recordWin(progress, 0, record()), progress);
  assert.equal(progress.unlocked, 2);
  recordWin(progress, 0, record({ score: 1000, time: 80, lives: 3, largestCapture: 12, medal: 'gold' }));
  assert.deepEqual(progress.records[0], record({ time: 80, lives: 3, medal: 'gold' }));
  recordWin(progress, 0, record({ score: 3000, time: 110, lives: 1, largestCapture: 25, medal: 'bronze' }));
  assert.deepEqual(progress.records[0], record({ score: 3000, time: 80, lives: 3, largestCapture: 25, medal: 'gold' }));
});

test('stage unlocks are monotonic and capped at ten; invalid wins do nothing', () => {
  const progress = defaultProgress();
  recordWin(progress, 8, record());
  assert.equal(progress.unlocked, 10);
  recordWin(progress, 9, record());
  recordWin(progress, 0, record());
  assert.equal(progress.unlocked, 10);
  const before = JSON.stringify(progress);
  for (const index of [-1, 10, 1.5, '1', NaN]) recordWin(progress, index, record());
  recordWin(progress, 1, record({ score: Infinity }));
  recordWin(progress, 1, record({ time: NaN }));
  assert.equal(JSON.stringify(progress), before);
});
