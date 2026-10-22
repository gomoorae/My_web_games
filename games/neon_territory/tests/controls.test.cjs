'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { createControls, directionFromPoint } = require('../controls.js');

class Target {
  constructor() { this.listeners = new Map(); }
  addEventListener(name, handler) {
    if (!this.listeners.has(name)) this.listeners.set(name, new Set());
    this.listeners.get(name).add(handler);
  }
  removeEventListener(name, handler) { this.listeners.get(name)?.delete(handler); }
  dispatch(name, input = {}) {
    const event = { target: this, pointerType: 'touch', pointerId: 1, button: 0,
      clientX: 75, clientY: 75, preventDefault() { this.prevented = true; }, ...input };
    for (const handler of this.listeners.get(name) || []) handler(event);
    return event;
  }
}

function setup() {
  const doc = new Target();
  const win = new Target();
  const pad = new Target();
  let state = 'playing';
  let focusCount = 0;
  const callbacks = { draw: 0, abort: 0, pause: 0, menu: 0, fullscreen: 0, changes: [] };
  const buttons = ['up', 'down', 'left', 'right'].map(dir => ({
    tagName: 'BUTTON', dataset: { dir }, pressed: false,
    closest(selector) { return selector === '[data-dir]' || selector.includes('button') ? this : null; },
    classList: { toggle(name, enabled) { buttons.find(b => b.dataset.dir === dir).pressed = enabled; } }
  }));
  pad.ownerDocument = doc;
  doc.defaultView = win;
  pad.querySelectorAll = () => buttons;
  pad.getBoundingClientRect = () => ({ left: 0, top: 0, width: 150, height: 150 });
  pad.contains = node => buttons.includes(node);
  pad.closest = () => null;
  pad.capture = null;
  pad.setPointerCapture = id => { pad.capture = id; };
  pad.hasPointerCapture = id => pad.capture === id;
  pad.releasePointerCapture = id => {
    if (pad.capture === id) pad.capture = null;
    pad.dispatch('lostpointercapture', { pointerId: id });
  };
  const controls = createControls({ pad, canvas: { focus() { focusCount++; } },
    isPlaying: () => state === 'playing', isPaused: () => state === 'paused',
    onDraw: () => callbacks.draw++, onAbort: () => callbacks.abort++, onPause: () => callbacks.pause++,
    onMenu: () => callbacks.menu++, onFullscreen: () => callbacks.fullscreen++,
    onChange: dir => callbacks.changes.push(dir)
  });
  return { doc, win, pad, buttons, controls, callbacks, setState: value => { state = value; },
    focusCount: () => focusCount, button: dir => buttons.find(b => b.dataset.dir === dir),
    key: (code, extra = {}) => doc.dispatch('keydown', { code, ...extra }),
    up: code => doc.dispatch('keyup', { code }),
    touch: (dir, id = 1) => pad.dispatch('pointerdown', { target: buttons.find(b => b.dataset.dir === dir), pointerId: id }) };
}

test('geometry supports all four directions, a center dead zone, and limited overshoot', () => {
  const rect = { left: 10, top: 20, width: 150, height: 150 };
  assert.equal(directionFromPoint(rect, 85, 25), 'up');
  assert.equal(directionFromPoint(rect, 85, 165), 'down');
  assert.equal(directionFromPoint(rect, 15, 95), 'left');
  assert.equal(directionFromPoint(rect, 155, 95), 'right');
  assert.equal(directionFromPoint(rect, 90, 95), null);
  assert.equal(directionFromPoint(rect, 175, 95), 'right');
  assert.equal(directionFromPoint(rect, 250, 95), null);
  assert.equal(directionFromPoint({ ...rect, width: 0 }, 0, 0), null);
  assert.equal(directionFromPoint(rect, NaN, 0), null);
});

test('a held finger slides between directions without being lifted', () => {
  const s = setup();
  s.touch('up');
  assert.equal(s.controls.getDirection(), 'up');
  assert.equal(s.pad.capture, 1);
  assert.equal(s.focusCount(), 1);
  s.doc.dispatch('pointermove', { clientX: 140, clientY: 75 });
  assert.equal(s.controls.getDirection(), 'right');
  assert.equal(s.button('right').pressed, true);
  assert.equal(s.button('up').pressed, false);
  s.doc.dispatch('pointermove', { clientX: 75, clientY: 75 });
  assert.equal(s.controls.getDirection(), null);
  s.doc.dispatch('pointermove', { clientX: 75, clientY: 140 });
  assert.equal(s.controls.getDirection(), 'down');
  s.doc.dispatch('pointerup');
  assert.equal(s.controls.getDirection(), null);
  assert.equal(s.pad.capture, null);
  assert.ok(s.buttons.every(b => !b.pressed));
});

test('a second finger cannot steal or end movement owned by the first', () => {
  const s = setup();
  s.touch('left', 9);
  s.touch('right', 10);
  s.doc.dispatch('pointermove', { pointerId: 10, clientX: 140, clientY: 75 });
  s.doc.dispatch('pointerup', { pointerId: 10 });
  assert.equal(s.controls.getDirection(), 'left');
  s.doc.dispatch('pointerup', { pointerId: 9 });
  assert.equal(s.controls.getDirection(), null);
  s.touch('right', 10);
  assert.equal(s.controls.getDirection(), 'right');
});

test('pointer cancellation, lost capture, and clearing stop movement and pressed styling', () => {
  for (const action of ['cancel', 'lost', 'clear', 'blur', 'resize', 'orientation', 'hidden']) {
    const s = setup();
    s.touch('up');
    if (action === 'cancel') s.doc.dispatch('pointercancel');
    if (action === 'lost') s.pad.dispatch('lostpointercapture');
    if (action === 'clear') s.controls.clear();
    if (action === 'blur') s.win.dispatch('blur');
    if (action === 'resize') s.win.dispatch('resize');
    if (action === 'orientation') s.win.dispatch('orientationchange');
    if (action === 'hidden') { s.doc.hidden = true; s.doc.dispatch('visibilitychange'); }
    assert.equal(s.controls.getDirection(), null, action);
    assert.ok(s.buttons.every(b => !b.pressed), action);
  }
});

test('most recently pressed direction wins; release restores the previous held key', () => {
  const s = setup();
  assert.equal(s.key('ArrowLeft').prevented, true);
  s.key('ArrowRight');
  assert.equal(s.controls.getDirection(), 'right');
  s.key('ArrowLeft', { repeat: true });
  assert.equal(s.controls.getDirection(), 'right');
  s.up('ArrowRight');
  assert.equal(s.controls.getDirection(), 'left');
  s.key('KeyA');
  s.up('ArrowLeft');
  assert.equal(s.controls.getDirection(), 'left');
  s.up('KeyA');
  assert.equal(s.controls.getDirection(), null);
});

test('keyboard and touch priorities compose without stuck inputs', () => {
  const s = setup();
  s.key('ArrowUp');
  s.touch('right');
  assert.equal(s.controls.getDirection(), 'right');
  s.key('ArrowDown');
  assert.equal(s.controls.getDirection(), 'down');
  s.up('ArrowDown');
  assert.equal(s.controls.getDirection(), 'right');
  s.doc.dispatch('pointerup');
  assert.equal(s.controls.getDirection(), 'up');
  s.controls.clear();
  assert.equal(s.controls.getDirection(), null);
});

test('action keys fire once and leave native button activation intact', () => {
  const s = setup();
  for (const code of ['Space', 'KeyX', 'KeyP', 'KeyF', 'KeyM']) {
    s.key(code);
    s.key(code, { repeat: true });
  }
  assert.equal(s.callbacks.draw, 1);
  assert.equal(s.callbacks.abort, 1);
  assert.equal(s.callbacks.pause, 1);
  assert.equal(s.callbacks.fullscreen, 1);
  assert.equal(s.callbacks.menu, 1);
  assert.equal(s.key('Space', { target: s.button('up') }).prevented, undefined);
  assert.equal(s.callbacks.draw, 1);
  assert.equal(s.key('Enter', { target: s.button('up') }).prevented, undefined);
});

test('editable fields, browser shortcuts, and disabled menus never move the player', () => {
  const s = setup();
  s.key('KeyW', { target: { tagName: 'INPUT' } });
  s.key('KeyD', { target: { isContentEditable: true } });
  s.key('KeyA', { metaKey: true });
  s.key('KeyS', { ctrlKey: true });
  assert.equal(s.controls.getDirection(), null);
  s.touch('left');
  s.controls.setEnabled(false);
  assert.equal(s.controls.getDirection(), null);
  assert.equal(s.key('ArrowUp').prevented, undefined);
  s.key('KeyP');
  assert.equal(s.callbacks.pause, 0);
  s.controls.setEnabled(true);
  assert.equal(s.controls.getDirection(), null);
  s.key('ArrowUp');
  assert.equal(s.controls.getDirection(), 'up');
});

test('paused controls only allow resume and non-movement shortcuts', () => {
  const s = setup();
  s.setState('paused');
  assert.equal(s.key('ArrowUp').prevented, undefined);
  s.key('Space');
  s.key('KeyX');
  s.key('Escape');
  assert.equal(s.controls.getDirection(), null);
  assert.equal(s.callbacks.draw, 0);
  assert.equal(s.callbacks.abort, 0);
  assert.equal(s.callbacks.pause, 1);
});

test('destroy removes listeners, clears captures, and prevents future callbacks', () => {
  const s = setup();
  s.touch('up');
  s.controls.destroy();
  s.controls.destroy();
  assert.equal(s.controls.getDirection(), null);
  assert.equal(s.pad.capture, null);
  s.touch('left');
  s.key('Space');
  assert.equal(s.callbacks.draw, 0);
  assert.ok([...s.doc.listeners.values()].every(listeners => listeners.size === 0));
  assert.ok([...s.win.listeners.values()].every(listeners => listeners.size === 0));
});
