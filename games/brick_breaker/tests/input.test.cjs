const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const engine = require('../engine.js');

// Exercise the actual controller against a minimal DOM, with real engine physics.
function setup({ coarse = false, brokenStorage = false, width = 1280, height = 720 } = {}) {
  const elements = {}, documentEvents = {}, windowEvents = {}, stored = new Map();
  const noop = () => {};
  const context = new Proxy({ createLinearGradient: () => ({ addColorStop: noop }) }, { get: (o, k) => o[k] || noop, set: (o, k, v) => (o[k] = v, true) });
  function element(id) {
    if (elements[id]) return elements[id];
    const classes = new Set(), events = {};
    return elements[id] = {
      id, textContent: '', hidden: false, disabled: false, innerHTML: '', style: { setProperty: noop }, dataset: {}, events,
      addEventListener: (name, fn) => { events[name] = fn; }, setAttribute(name, value) { this[name] = value; },
      classList: { add: name => classes.add(name), remove: name => classes.delete(name), toggle: (name, value) => value ? classes.add(name) : classes.delete(name) },
      querySelector: key => element(id + key), closest: () => null,
      getBoundingClientRect: () => ({ x: 0, y: 0, left: 0, top: 0, width: 800, height: 560 }),
      getContext: () => context, focus: noop, setPointerCapture: noop, hasPointerCapture: () => true, releasePointerCapture: noop,
    };
  }
  let game, frame;
  class ObservedGame extends engine.Game { constructor() { super({ random: () => .5 }); game = this; } }
  const document = { getElementById: element, documentElement: element('document-root'), addEventListener: (name, fn) => { documentEvents[name] = fn; } };
  const window = { BrickBreakerEngine: { ...engine, Game: ObservedGame }, innerWidth: width, innerHeight: height, devicePixelRatio: 1,
    addEventListener: (name, fn) => { windowEvents[name] = fn; } };
  const localStorage = { getItem: key => { if (brokenStorage) throw Error('blocked'); return stored.get(key) ?? null; },
    setItem: (key, value) => { if (brokenStorage) throw Error('blocked'); stored.set(key, value); } };
  const sandbox = { window, document, localStorage, ResizeObserver: class { observe() {} }, matchMedia: query => ({ matches: query.includes('pointer') && coarse }),
    performance: { now: () => 100 }, requestAnimationFrame: fn => { frame = fn; }, console, Math };
  vm.runInNewContext(fs.readFileSync(require.resolve('../app.js'), 'utf8'), sandbox);
  const event = (extras = {}) => ({ key: '', code: '', target: element('gameCanvas'), repeat: false, preventDefault: noop,
    pointerId: 1, pointerType: coarse ? 'touch' : 'mouse', button: 0, clientX: 400, clientY: 400, ...extras });
  return { game, elements, stored, window, document, key: (key, extras = {}) => documentEvents.keydown(event({ key, code: key === ' ' ? 'Space' : key, ...extras })),
    keyup: key => documentEvents.keyup(event({ key })), click: id => elements[id].events.click(event()),
    pointer: (name, extras = {}) => elements.gameCanvas.events[name](event(extras)), blur: () => windowEvents.blur(),
    hidden: () => { document.hidden = true; documentEvents.visibilitychange(); }, resize: (w, h) => { window.innerWidth = w; window.innerHeight = h; windowEvents.resize(); },
    frame: now => frame(now) };
}

test('Space launches; Escape pauses and resumes; keyboard release stops movement', () => {
  const h = setup(); h.key(' '); assert.equal(h.game.state, 'playing');
  h.key('ArrowRight'); h.game.advance(.1); assert.ok(h.game.paddle.x > 400);
  h.keyup('ArrowRight'); const x = h.game.paddle.x; h.game.advance(.1); assert.equal(h.game.paddle.x, x);
  h.key('Escape'); assert.equal(h.game.state, 'paused'); h.key('Escape'); assert.equal(h.game.state, 'playing');
});

test('R opens a cancellable restart and never discards progress on a repeated key', () => {
  const h = setup(); h.key(' '); h.game.score = 1234; h.frame(0); h.key('r');
  assert.equal(h.game.state, 'paused'); assert.equal(h.game.score, 1234);
  assert.equal(h.elements['overlay-secondary'].hidden, false);
  h.key('r', { repeat: true }); assert.equal(h.game.score, 1234);
  h.click('overlay-secondary'); assert.equal(h.game.state, 'playing');
  h.key('r'); h.click('overlay-action'); assert.equal(h.game.state, 'ready'); assert.equal(h.game.score, 0);
  assert.equal(h.stored.get('brick-breaker-best-v2'), '1234');
});

test('mouse hover steers and a deliberate click launches from ready', () => {
  const h = setup(); h.pointer('pointermove', { clientX: 650 }); h.game.advance(.1);
  assert.ok(h.game.paddle.x > 400);
  h.pointer('pointerdown', { clientX: 650 }); h.pointer('pointerup', { clientX: 650 });
  assert.equal(h.game.state, 'playing');
});

test('touch drag positions the paddle without accidental launch; button launches', () => {
  const h = setup({ coarse: true, width: 390, height: 844 });
  h.pointer('pointerdown', { clientX: 300 }); h.pointer('pointermove', { clientX: 160 }); h.game.advance(.1);
  assert.ok(h.game.paddle.x < 400); h.pointer('pointerup', { clientX: 160 });
  assert.equal(h.game.state, 'ready'); h.click('launch-button'); assert.equal(h.game.state, 'playing');
  assert.equal(h.game.height, 1040);
});

test('a second finger cannot take over the active touch and cancellation clears input', () => {
  const h = setup({ coarse: true }); h.click('launch-button');
  h.pointer('pointerdown', { pointerId: 1, clientX: 100 });
  h.pointer('pointerdown', { pointerId: 2, clientX: 700 });
  h.pointer('pointermove', { pointerId: 2, clientX: 700 }); assert.equal(h.game.targetX, 100);
  h.pointer('pointercancel', { pointerId: 1 }); assert.equal(h.game.targetX, null);
});

test('normal drag release reaches the final target while unexpected capture loss cancels', () => {
  const h = setup({ coarse: true });
  h.pointer('pointerdown', { clientX: 400 }); h.pointer('pointermove', { clientX: 150 });
  h.pointer('pointerup', { clientX: 150 }); h.pointer('lostpointercapture');
  assert.equal(h.game.targetX, 150);
  h.game.advance(.1); h.game.advance(.1); assert.equal(h.game.paddle.x, 150);
  h.pointer('pointerdown', { pointerId: 2, clientX: 600 }); h.pointer('lostpointercapture', { pointerId: 2 });
  assert.equal(h.game.targetX, null);
});

test('blur and hidden page both pause and clear held keyboard input', () => {
  for (const source of ['blur', 'hidden']) {
    const h = setup(); h.key(' '); h.key('a'); h[source]();
    assert.equal(h.game.state, 'paused'); assert.equal(h.game.axis, 0);
    h.click('overlay-action'); h.game.advance(.1); assert.equal(h.game.paddle.x, 400);
  }
});

test('sound preference toggles persistently and storage failure does not block play', () => {
  const h = setup(); h.click('sound-button'); assert.equal(h.stored.get('brick-breaker-sound-v2'), 'off');
  h.click('sound-button'); assert.equal(h.stored.get('brick-breaker-sound-v2'), 'on');
  const privateMode = setup({ brokenStorage: true }); privateMode.key(' '); privateMode.game.score = 500; privateMode.frame(0); privateMode.blur();
  assert.equal(privateMode.game.state, 'paused');
});

test('viewport orientation change retains score and pauses active play', () => {
  const h = setup(); h.key(' '); h.game.score = 500; h.resize(390, 844);
  assert.equal(h.game.state, 'paused'); assert.equal(h.game.score, 500); assert.equal(h.game.height, 1040);
  h.resize(844, 390); assert.equal(h.game.height, 560);
});

test('controller exposes clear, next-stage, loss and win screens with working actions', () => {
  const h = setup(); h.key(' '); h.game.finishStage(); h.frame(0);
  assert.match(h.elements['overlay-title'].textContent, /클리어/);
  h.click('overlay-action'); assert.equal(h.game.stageIndex, 1); assert.equal(h.game.state, 'ready');
  h.game.state = 'lost'; h.frame(16); assert.match(h.elements['overlay-title'].textContent, /더 멀리/);
  h.click('overlay-action'); assert.equal(h.game.stageIndex, 0);
  h.game.loadStage(9); h.game.launch(); h.game.finishStage(); h.frame(32);
  assert.match(h.elements['overlay-title'].textContent, /완벽한/);
});

test('browser modifier shortcuts and repeated Space never trigger gameplay actions', () => {
  const h = setup(); h.key('r', { metaKey: true }); h.key(' ', { repeat: true });
  assert.equal(h.game.state, 'ready');
  h.key('ArrowLeft', { altKey: true }); assert.equal(h.game.axis, 0);
});
