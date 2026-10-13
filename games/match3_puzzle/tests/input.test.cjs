const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const Match3 = require('../engine.js');
const script = fs.readFileSync(require.resolve('../game.js'), 'utf8');

// A small event/animation harness runs the production input handlers without a browser.
function harness({ blockedStorage = false, saved = null, holdAnimations = false } = {}) {
  let now = 1000, focused = null;
  const elements = new Map(), intervals = [], storage = new Map(), pending = [];
  if (saved !== null) storage.set('gomoorae.match3.v2', saved);
  class Element {
    constructor(tag = 'div') {
      this.tag = tag; this.children = []; this.dataset = {}; this.attributes = {}; this.className = '';
      this.style = { setProperty() {} }; this.listeners = new Map(); this.captures = new Set();
      this.open = false; this.textContent = ''; this.firstChild = { textContent: '' }; this.offsetWidth = 40;
      this.classList = {
        contains: name => this.className.split(' ').includes(name),
        add: (...names) => { this.className = [...new Set([...this.className.split(' ').filter(Boolean), ...names])].join(' '); },
        remove: (...names) => { this.className = this.className.split(' ').filter(n => !names.includes(n)).join(' '); },
        toggle: (name, value) => { const on = value ?? !this.classList.contains(name); if (on) this.classList.add(name); else this.classList.remove(name); return on; }
      };
    }
    appendChild(el) { this.children.push(el); el.parent = this; return el; }
    append(...els) { els.forEach(el => this.appendChild(el)); }
    replaceChildren(...els) { this.children = []; this.append(...els); }
    remove() { if (this.parent) this.parent.children = this.parent.children.filter(c => c !== this); }
    setAttribute(k, v) { this.attributes[k] = v; }
    getAttribute(k) { return this.attributes[k] ?? null; }
    addEventListener(k, f) { const list = this.listeners.get(k) || []; list.push(f); this.listeners.set(k, list); }
    fire(k, props = {}) { const e = { target: this, currentTarget: this, preventDefault() {}, ...props }; (this.listeners.get(k) || []).forEach(f => f(e)); }
    contains(el) { return this === el || this.children.some(c => c.contains(el)); }
    closest(selector) { return selector === '.tile' && this.classList.contains('tile') ? this : this.parent?.closest(selector) || null; }
    setPointerCapture(id) { this.captures.add(id); }
    hasPointerCapture(id) { return this.captures.has(id); }
    releasePointerCapture(id) { this.captures.delete(id); }
    getBoundingClientRect() { const i = Number(this.dataset.index || 0); return { x: i % 8 * 44, y: Math.floor(i / 8) * 44, width: 40, height: 40 }; }
    focus() { focused = this; }
    showModal() { this.open = true; }
    close() { this.open = false; }
    animate() {
      let finish; const finished = holdAnimations ? new Promise(resolve => { finish = resolve; pending.push(resolve); }) : Promise.resolve();
      return { finished, cancel() { finish?.(); } };
    }
  }
  const el = id => { if (!elements.has(id)) elements.set(id, new Element()); return elements.get(id); };
  const doc = new Element(); doc.hidden = false; doc.getElementById = el; doc.createElement = tag => new Element(tag);
  const win = new Element(); win.matchMedia = () => ({ matches: true });
  let seed = 81013;
  const logic = { ...Match3, Round: class extends Match3.Round {
    constructor() { super({ now: () => now, random: () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; } }); }
  } };
  const ctx = vm.createContext({ Match3: logic, document: doc, window: win, performance: { now: () => now }, console,
    setInterval: fn => intervals.push(fn), localStorage: {
      getItem: k => { if (blockedStorage) throw Error('blocked'); return storage.get(k) || null; },
      setItem: (k, v) => { if (blockedStorage) throw Error('blocked'); storage.set(k, v); }
    }
  });
  vm.runInContext(script, ctx);
  const board = () => el('board').children.map(b => ({ id: Number(b.dataset.tileId), type: Number(b.dataset.type), special: b.dataset.special || null }));
  const pointer = (kind, index, options = {}) => {
    const tile = el('board').children[index], r = tile.getBoundingClientRect();
    el('board').fire(kind, { target: tile, button: 0, pointerId: 1, isPrimary: true, pointerType: 'touch', clientX: r.x + 20, clientY: r.y + 20, ...options });
  };
  const tap = (i, options) => { pointer('pointerdown', i, options); pointer('pointerup', i, options); el('board').fire('click', { target: el('board').children[i], detail: 1 }); };
  const start = () => el('overlayBtn').fire('click');
  const flush = () => new Promise(resolve => setImmediate(resolve));
  return { el, board, pointer, tap, start, flush, storage, pending, doc, win, focused: () => focused, advance: ms => { now += ms; intervals.forEach(fn => fn()); } };
}

test('two touch taps select, then swap exactly once', async () => {
  const h = harness(); h.start(); const [a, b] = Match3.moves(h.board())[0];
  h.tap(a); assert.equal(h.el('board').children[a].getAttribute('aria-pressed'), 'true');
  h.tap(b); await h.flush();
  assert.ok(Number(h.el('score').textContent.replaceAll(',', '')) > 0);
  assert.equal(h.el('board').getAttribute('aria-busy'), 'false');
  assert.equal(h.el('board').children.length, 64);
});
test('touch swipes work using pointer capture, without pointerenter', async () => {
  const h = harness(); h.start(); const [a, b] = Match3.moves(h.board())[0];
  h.pointer('pointerdown', a); assert.equal(h.el('board').hasPointerCapture(1), true);
  h.pointer('pointermove', b); h.pointer('pointerup', b); await h.flush();
  assert.ok(Number(h.el('score').textContent.replaceAll(',', '')) > 0);
  assert.equal(h.el('board').hasPointerCapture(1), false);
});
test('secondary touches and canceled drags cannot swap a tile', async () => {
  const h = harness(); h.start(); const before = h.board(), [a, b] = Match3.moves(before)[0];
  h.pointer('pointerdown', a); h.pointer('pointermove', b, { pointerId: 2, isPrimary: false });
  h.pointer('pointerup', b, { pointerId: 2, isPrimary: false }); h.pointer('pointercancel', a);
  h.pointer('pointerup', b); await h.flush();
  assert.deepEqual(h.board(), before); assert.equal(h.el('score').textContent, '0');
});
test('mouse taps and keyboard activation use the same move rules', async () => {
  for (const keyboard of [false, true]) {
    const h = harness(); h.start(); const pair = Match3.moves(h.board())[0];
    for (const i of pair) {
      if (keyboard) h.el('board').fire('click', { target: h.el('board').children[i], detail: 0 });
      else h.tap(i, { pointerType: 'mouse' });
    }
    await h.flush(); assert.ok(Number(h.el('score').textContent.replaceAll(',', '')) > 0);
  }
});
test('restarting during a pending animation discards its visual and score updates', async () => {
  const h = harness({ holdAnimations: true }); h.start(); const pair = Match3.moves(h.board())[0]; pair.forEach(i => h.tap(i));
  assert.equal(h.el('board').getAttribute('aria-busy'), 'true'); h.el('restartBtn').fire('click');
  const afterReset = h.board(); h.pending.forEach(done => done()); await h.flush();
  assert.deepEqual(h.board(), afterReset); assert.equal(h.el('score').textContent, '0');
  assert.equal(h.el('board').getAttribute('aria-busy'), 'false'); assert.equal(h.el('overlay').open, false);
});
test('highest score survives reloading the game, and lower scores cannot overwrite it', async () => {
  const h = harness(); h.start(); Match3.moves(h.board())[0].forEach(i => h.tap(i)); await h.flush();
  const saved = h.storage.get('gomoorae.match3.v2'); assert.ok(saved);
  const next = harness({ saved }); const best = JSON.parse(saved).bestScore;
  assert.equal(next.el('bestScore').textContent, best.toLocaleString('ko-KR'));
  next.start(); assert.equal(next.el('bestScore').textContent, best.toLocaleString('ko-KR'));
});
test('blocked or malformed storage does not prevent playing', async () => {
  for (const options of [{ blockedStorage: true }, { saved: '{invalid' }, { saved: 'null' }, { saved: '{"bestScore":-2,"bestChain":"bad"}' }]) {
    const h = harness(options); h.start(); Match3.moves(h.board())[0].forEach(i => h.tap(i)); await h.flush();
    assert.ok(Number(h.el('score').textContent.replaceAll(',', '')) > 0);
    if (!options.blockedStorage) assert.ok(JSON.parse(h.storage.get('gomoorae.match3.v2')).bestScore > 0);
  }
});
test('saving a setting cannot overwrite a better record saved by another tab', () => {
  const h = harness({ saved: '{"bestScore":100,"bestChain":2}' });
  h.storage.set('gomoorae.match3.v2', '{"bestScore":5000,"bestChain":8}');
  h.el('soundBtn').fire('click');
  const result = JSON.parse(h.storage.get('gomoorae.match3.v2'));
  assert.equal(result.bestScore, 5000); assert.equal(result.bestChain, 8);
});
test('tab hiding opens a pause dialog; resume keeps the board and score', async () => {
  const h = harness(); h.start(); const before = h.board();
  h.doc.hidden = true; h.doc.fire('visibilitychange'); assert.equal(h.el('overlay').open, true);
  const time = h.el('timer').firstChild.textContent; h.advance(90000); assert.equal(h.el('timer').firstChild.textContent, time);
  h.doc.hidden = false; h.el('overlayBtn').fire('click'); assert.equal(h.el('overlay').open, false); assert.deepEqual(h.board(), before);
});
test('the result screen closes the round and supports replay', () => {
  const h = harness(); h.start(); h.advance(60001);
  assert.equal(h.el('overlay').open, true); assert.equal(h.el('resultStats').hidden, false);
  assert.equal(h.el('overlayBtn').textContent, '한 판 더 →');
  h.el('overlayBtn').fire('click'); assert.equal(h.el('overlay').open, false); assert.equal(h.el('score').textContent, '0');
});
