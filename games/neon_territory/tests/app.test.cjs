'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { Engine } = require('../engine.js');
const { defaultProgress } = require('../progress.js');
const ROOT = path.join(__dirname, '..');
const STORAGE_KEY = 'neon-territory-v1';

class Target {
  constructor() { this.listeners = new Map(); }
  addEventListener(type, fn) {
    if (!this.listeners.has(type)) this.listeners.set(type, new Set());
    this.listeners.get(type).add(fn);
  }
  removeEventListener(type, fn) { this.listeners.get(type)?.delete(fn); }
  dispatch(type, data = {}) {
    const event = { type, target: this, preventDefault() { this.defaultPrevented = true; }, ...data };
    for (let current = this; current; current = current.parentNode) {
      event.currentTarget = current;
      for (const fn of current.listeners?.get(type) || []) fn(event);
    }
    return event;
  }
}

function matches(node, selector) {
  if (selector.includes(',')) return selector.split(',').some(part => matches(node, part.trim()));
  if (selector === '.shell') return node.classList.contains('shell');
  if (selector.startsWith('.')) return node.classList.contains(selector.slice(1));
  if (selector === '[data-dir]') return Boolean(node.dataset.dir);
  if (selector === 'button:not([disabled])') return node.tagName === 'BUTTON' && !node.disabled;
  if (selector === 'a[href]') return node.tagName === 'A' && node.attributes.has('href');
  if (selector === '[tabindex="0"]') return node.attributes.get('tabindex') === '0';
  if (selector === '[role="button"]') return node.attributes.get('role') === 'button';
  if (selector.includes('[contenteditable]')) return Boolean(node.isContentEditable);
  return node.tagName === selector.toUpperCase();
}

class Element extends Target {
  constructor(tag, document) {
    super(); this.tagName = tag.toUpperCase(); this.ownerDocument = document;
    this.attributes = new Map(); this.children = []; this.dataset = {}; this.style = {};
    this.hidden = false; this.disabled = false; this.inert = false; this._classes = new Set(); this._text = '';
    this.classList = {
      add: (...names) => names.forEach(n => this._classes.add(n)),
      remove: (...names) => names.forEach(n => this._classes.delete(n)),
      contains: name => this._classes.has(name),
      toggle: (name, value = !this._classes.has(name)) => { if (value) this._classes.add(name); else this._classes.delete(name); return value; }
    };
  }
  get className() { return [...this._classes].join(' '); }
  set className(value) { this._classes = new Set(value.split(/\s+/).filter(Boolean)); }
  get textContent() { return this._text + this.children.map(n => n.textContent).join(''); }
  set textContent(value) { this._text = String(value); this.replaceChildren(); }
  setAttribute(name, value) {
    this.attributes.set(name, String(value));
    if (name === 'id') { this.id = value; this.ownerDocument.ids.set(value, this); }
    if (name === 'class') this.className = value;
    if (name === 'hidden') this.hidden = true;
    if (name === 'disabled') this.disabled = true;
    if (name.startsWith('data-')) this.dataset[name.slice(5)] = value;
  }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  append(...nodes) { for (const node of nodes) { node.parentNode = this; this.children.push(node); } }
  replaceChildren(...nodes) {
    for (const node of this.children) node.parentNode = null;
    this.children = []; this.append(...nodes);
  }
  closest(selector) {
    for (let node = this; node instanceof Element; node = node.parentNode) if (matches(node, selector)) return node;
    return null;
  }
  contains(other) { for (let node = other; node; node = node.parentNode) if (node === this) return true; return false; }
  querySelectorAll(selector) {
    const result = [];
    for (const child of this.children) { if (matches(child, selector)) result.push(child); result.push(...child.querySelectorAll(selector)); }
    return result;
  }
  get isConnected() { return this.ownerDocument.documentElement?.contains(this) || false; }
  getClientRects() {
    for (let node = this; node instanceof Element; node = node.parentNode) if (node.hidden) return [];
    return [this.getBoundingClientRect()];
  }
  getBoundingClientRect() { return this.id === 'dpad' ? { left: 0, top: 0, width: 150, height: 150 } : { left: 0, top: 0, width: 960, height: 600 }; }
  focus() { if (this.getClientRects().length && !this.disabled) this.ownerDocument.activeElement = this; }
  click() { if (!this.disabled) { this.focus(); this.dispatch('click'); } }
  getContext() { return this.context ||= new Proxy({}, { get: (object, key) => object[key] ?? (() => {}), set: (object, key, value) => { object[key] = value; return true; } }); }
  setPointerCapture(id) { this.capture = id; }
  hasPointerCapture(id) { return this.capture === id; }
  releasePointerCapture(id) { if (this.capture === id) { this.capture = null; this.dispatch('lostpointercapture', { pointerId: id }); } }
  async requestFullscreen() { this.ownerDocument.fullscreenElement = this; this.ownerDocument.dispatch('fullscreenchange'); }
}

function createDOM() {
  const doc = new Target();
  doc.ids = new Map(); doc.hidden = false;
  doc.createElement = tag => new Element(tag, doc);
  doc.getElementById = id => doc.ids.get(id);
  doc.querySelector = selector => doc.documentElement.querySelectorAll(selector)[0] || null;
  doc.exitFullscreen = async () => { doc.fullscreenElement = null; doc.dispatch('fullscreenchange'); };
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const stack = [];
  for (const match of html.matchAll(/<(\/)?([a-zA-Z][\w-]*)([^>]*)>/g)) {
    const [, closing, tag, attrs] = match;
    if (closing) { if (stack.at(-1)?.tagName === tag.toUpperCase()) stack.pop(); continue; }
    const element = doc.createElement(tag);
    for (const attr of attrs.matchAll(/([\w-]+)(?:="([^"]*)")?/g)) element.setAttribute(attr[1], attr[2] ?? '');
    if (stack.length) stack.at(-1).append(element);
    else { doc.documentElement = element; element.parentNode = doc; }
    if (tag === 'body') doc.body = element;
    if (!['meta', 'link', 'br', 'input', 'img', 'hr'].includes(tag)) stack.push(element);
  }
  doc.activeElement = doc.body;
  return doc;
}

function boot({ progress, raw, storageFailure = false, fullscreen = true } = {}) {
  const doc = createDOM(), frames = [], win = new Target();
  const data = new Map();
  if (progress) data.set(STORAGE_KEY, JSON.stringify(progress));
  if (raw !== undefined) data.set(STORAGE_KEY, raw);
  const storage = {
    getItem: key => { if (storageFailure) throw new Error('storage blocked'); return data.get(key) ?? null; },
    setItem: (key, value) => { if (storageFailure) throw new Error('quota'); data.set(key, value); }
  };
  Object.assign(win, { document: doc, localStorage: storage, innerWidth: 1280, innerHeight: 800,
    matchMedia: () => ({ matches: false }), requestAnimationFrame: fn => { frames.push(fn); },
    console, TextEncoder, setTimeout, clearTimeout });
  win.window = win; doc.defaultView = win;
  if (!fullscreen) doc.documentElement.requestFullscreen = undefined;
  const context = vm.createContext(win);
  for (const name of ['engine.js', 'controls.js', 'progress.js', 'game.js']) vm.runInContext(fs.readFileSync(path.join(ROOT, name), 'utf8'), context, { filename: name });
  let now = 1;
  const app = {
    doc, win, data, context, $: id => doc.getElementById(id),
    saved: () => JSON.parse(data.get(STORAGE_KEY)),
    click: id => doc.getElementById(id).click(),
    key: (code, extra = {}) => doc.dispatch('keydown', { target: doc.activeElement, code,
      key: code === 'Escape' ? 'Escape' : code === 'Space' ? ' ' : code === 'Tab' ? 'Tab' : code, ...extra }),
    release: code => doc.dispatch('keyup', { code }),
    advance(milliseconds) {
      const count = Math.ceil(milliseconds / (1000 / 60));
      for (let i = 0; i < count; i++) { now += 1000 / 60; const frame = frames.shift(); assert.ok(frame, 'animation frame remains scheduled'); frame(now); }
    }
  };
  return app;
}

function savedEngine(engine) { const progress = defaultProgress(); progress.snapshot = engine.toJSON(); return progress; }
function pendingTrail(lives = 3) {
  const engine = new Engine(); engine.start(); engine.toggleDraw();
  for (let i = 0; i < 3; i++) engine.move('up');
  engine.lives = lives; return engine;
}

test('new game exposes start and stage selection, then keyboard drawing moves and pauses safely', () => {
  const app = boot();
  assert.equal(app.$('overlay').hidden, false);
  assert.equal(app.$('overlay-secondary').hidden, false);
  assert.equal(app.$('draw-touch').disabled, true);
  app.click('overlay-action');
  assert.equal(app.$('overlay').hidden, true);
  app.key('Space'); app.key('ArrowUp'); app.advance(250); app.release('ArrowUp'); app.key('KeyP');
  const saved = app.saved().snapshot;
  assert.equal(saved.state, 'paused');
  assert.ok(saved.player.y < 59);
  assert.ok(saved.trail.length > 0);
  assert.equal(app.$('overlay').hidden, false);
  assert.match(app.$('overlay-copy').textContent, /그리던 선/);
  const before = JSON.stringify(saved.player);
  app.advance(500);
  assert.equal(JSON.stringify(app.saved().snapshot.player), before);
  app.key('Escape');
  assert.equal(app.saved().snapshot.state, 'playing');
});

test('mobile direction drag moves along both axes without releasing the pad', () => {
  const app = boot(); app.click('overlay-action'); app.click('draw-touch');
  const pad = app.$('dpad'), up = pad.querySelectorAll('[data-dir]').find(node => node.dataset.dir === 'up');
  up.dispatch('pointerdown', { pointerId: 1, pointerType: 'touch', clientX: 75, clientY: 10, button: 0 });
  app.advance(250);
  app.doc.dispatch('pointermove', { pointerId: 1, clientX: 140, clientY: 75 });
  app.advance(250);
  app.doc.dispatch('pointerup', { pointerId: 1 });
  app.click('pause-touch');
  const saved = app.saved().snapshot;
  assert.ok(saved.player.y < 59);
  assert.ok(saved.player.x > 48);
  assert.equal(saved.state, 'paused');
  assert.ok(pad.querySelectorAll('[data-dir]').every(node => !node.classList.contains('pressed')));
});

test('a live trail survives save/reload and resumes only after explicit activation', () => {
  const source = pendingTrail();
  const app = boot({ progress: savedEngine(source) });
  assert.equal(app.$('overlay-label').textContent, 'SAVED GAME');
  assert.equal(app.saved().snapshot.state, 'paused');
  assert.deepEqual(app.saved().snapshot.trail, source.trail);
  app.advance(300);
  assert.deepEqual(app.saved().snapshot.player, source.player);
  app.click('overlay-action');
  assert.equal(app.saved().snapshot.state, 'playing');
  assert.equal(app.$('abort-touch').disabled, false);
  app.click('abort-touch');
  assert.equal(app.saved().snapshot.lives, 2);
  assert.equal(app.saved().snapshot.trail.length, 0);
});

test('menu pauses, disables background shortcuts, traps focus, and closes into paused state', () => {
  const app = boot(); app.click('overlay-action'); app.advance(100); app.click('menu');
  assert.equal(app.$('dialog').hidden, false);
  assert.equal(app.doc.querySelector('.shell').inert, true);
  assert.equal(app.doc.activeElement, app.$('dialog-close'));
  assert.equal(app.saved().snapshot.state, 'paused');
  app.key('Space'); app.key('ArrowUp'); app.advance(100);
  assert.equal(app.saved().snapshot.armed, false);
  const backwards = app.key('Tab', { shiftKey: true });
  assert.equal(backwards.defaultPrevented, true);
  assert.notEqual(app.doc.activeElement, app.$('dialog-close'));
  app.key('Tab'); assert.equal(app.doc.activeElement, app.$('dialog-close'));
  app.key('Escape');
  assert.equal(app.$('dialog').hidden, true);
  assert.equal(app.doc.querySelector('.shell').inert, false);
  assert.equal(app.$('overlay').hidden, false);
  app.key('KeyP'); assert.equal(app.saved().snapshot.state, 'playing');
});

test('records and instructions remain reachable through the menu on landscape mobile', () => {
  const app = boot(); app.click('menu');
  const buttons = app.$('dialog-body').querySelectorAll('button');
  const records = buttons.find(button => button.textContent === '내 기록');
  assert.ok(records); records.click();
  assert.equal(app.$('dialog-title').textContent, '내 최고 기록');
  app.click('dialog-close'); app.click('menu');
  app.$('dialog-body').querySelectorAll('button').find(button => button.textContent === '플레이 방법').click();
  assert.match(app.$('dialog-body').textContent, /손가락을 밀어/);
  assert.match(app.$('dialog-body').textContent, /기회 1개/);
});

test('stage replacement requires confirmation after play and focuses its confirm action', () => {
  const app = boot(); app.click('overlay-action'); app.advance(150); app.click('menu');
  const stages = app.$('dialog-body').querySelectorAll('.stage-card');
  assert.equal(stages.length, 10);
  assert.equal(stages[1].disabled, true);
  stages[0].click();
  assert.equal(app.$('dialog-confirm').hidden, false);
  assert.equal(app.doc.activeElement, app.$('dialog-confirm'));
  assert.ok(app.saved().snapshot.elapsed > 0);
  app.click('dialog-confirm');
  assert.equal(app.saved().snapshot.elapsed, 0);
  assert.equal(app.saved().snapshot.state, 'ready');
  assert.equal(app.$('dialog').hidden, true);
  assert.equal(app.doc.activeElement, app.$('overlay-action'));
  app.click('overlay-action');
  assert.equal(app.saved().snapshot.state, 'playing');
  assert.equal(app.doc.activeElement, app.$('game'));
});

test('last-life emergency return requires confirmation, then offers current-stage retry', () => {
  const app = boot({ progress: savedEngine(pendingTrail(1)) });
  app.click('overlay-action'); app.click('abort-touch');
  assert.equal(app.saved().snapshot.lives, 1);
  assert.equal(app.saved().snapshot.state, 'paused');
  assert.equal(app.$('dialog-confirm').hidden, false);
  app.click('dialog-close');
  assert.equal(app.saved().snapshot.lives, 1);
  app.click('overlay-action'); app.click('abort-touch'); app.click('dialog-confirm');
  assert.equal(app.saved().snapshot.state, 'lost');
  assert.equal(app.saved().snapshot.lives, 0);
  assert.match(app.$('overlay-action').textContent, /재도전/);
  app.click('overlay-action');
  assert.equal(app.saved().snapshot.state, 'playing');
  assert.equal(app.saved().snapshot.lives, 3);
  assert.equal(app.saved().snapshot.stageIndex, 0);
});

test('capturing land shows the gain toast, increases score, and persists the new board', () => {
  const source = new Engine(); source.start(); source.toggleDraw();
  for (let i = 0; i < 10; i++) source.move('up');
  for (let i = 0; i < 20; i++) source.move('left');
  for (let i = 0; i < 9; i++) source.move('down');
  const app = boot({ progress: savedEngine(source) });
  app.click('overlay-action'); app.key('ArrowDown'); app.advance(150); app.release('ArrowDown');
  assert.equal(app.$('capture-toast').hidden, false);
  assert.equal(app.$('capture-toast').classList.contains('show'), true);
  assert.match(app.$('capture-toast').textContent, /^\+/);
  assert.ok(app.saved().snapshot.score > 0);
  assert.equal(app.saved().snapshot.trail.length, 0);
  app.advance(1800);
  assert.equal(app.$('capture-toast').hidden, true);
});

test('stage clear records the result, unlocks the next stage, and continues with fresh lives', () => {
  const source = new Engine(); source.start();
  for (const enemy of source.enemies) { enemy.x = 2.5; enemy.y = 2.5; }
  source.toggleDraw(); for (let i = 0; i < 59; i++) source.move('up');
  for (let i = 0; i < 24; i++) source.move('left');
  source.toggleDraw(); for (let i = 0; i < 58; i++) source.move('down');
  assert.equal(source.state, 'playing');
  const app = boot({ progress: savedEngine(source) });
  app.click('overlay-action'); app.key('ArrowDown'); app.advance(150); app.release('ArrowDown');
  assert.equal(app.saved().snapshot.state, 'won');
  assert.equal(app.saved().unlocked, 2);
  assert.equal(app.saved().records[0].medal, 'gold');
  assert.match(app.$('overlay-stats').textContent, /금메달/);
  assert.equal(app.$('overlay-secondary').hidden, false);
  app.click('overlay-action');
  assert.equal(app.saved().snapshot.stageIndex, 1);
  assert.equal(app.saved().snapshot.lives, 3);
  assert.equal(app.saved().snapshot.elapsed, 0);
  assert.equal(app.saved().snapshot.state, 'ready');
  app.click('overlay-action');
  assert.equal(app.saved().snapshot.state, 'playing');
});

test('blur, hidden tab, and rotation pause and save before more movement', () => {
  for (const signal of ['blur', 'hidden', 'orientation']) {
    const app = boot(); app.click('overlay-action'); app.key('ArrowLeft'); app.advance(100);
    if (signal === 'blur') app.win.dispatch('blur');
    if (signal === 'hidden') { app.doc.hidden = true; app.doc.dispatch('visibilitychange'); }
    if (signal === 'orientation') app.win.dispatch('orientationchange');
    assert.equal(app.saved().snapshot.state, 'paused', signal);
    assert.equal(app.$('overlay').hidden, false, signal);
  }
});

test('fullscreen includes the dialog subtree and fallback remains usable', async () => {
  const app = boot(); app.click('overlay-action'); app.click('fullscreen');
  await Promise.resolve();
  assert.equal(app.doc.fullscreenElement, app.doc.documentElement);
  assert.ok(app.doc.fullscreenElement.contains(app.$('dialog')));
  app.click('menu'); assert.equal(app.$('dialog').hidden, false);
  const fallback = boot({ fullscreen: false }); fallback.click('fullscreen');
  await Promise.resolve();
  assert.equal(fallback.doc.body.classList.contains('focus-mode'), true);
  fallback.click('menu'); assert.equal(fallback.$('dialog').hidden, false);
});

test('corrupt or blocked storage does not prevent playing', () => {
  const corrupt = boot({ raw: '{broken' });
  corrupt.click('overlay-action'); assert.equal(corrupt.saved().snapshot.state, 'playing');
  const blocked = boot({ storageFailure: true });
  assert.match(blocked.$('save-status').textContent, /저장할 수 없어/);
  blocked.click('overlay-action'); blocked.key('Space'); blocked.advance(100);
  assert.equal(blocked.doc.body.dataset.gameState, 'playing');
  assert.equal(blocked.$('draw').getAttribute('aria-pressed'), 'true');
});
