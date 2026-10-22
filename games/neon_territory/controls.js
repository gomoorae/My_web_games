(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.NeonControls = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const DIRECTIONS = {
    ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down',
    ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right'
  };
  const KEY_CODES = {
    ArrowUp: 'ArrowUp', ArrowDown: 'ArrowDown', ArrowLeft: 'ArrowLeft', ArrowRight: 'ArrowRight',
    w: 'KeyW', a: 'KeyA', s: 'KeyS', d: 'KeyD', p: 'KeyP', x: 'KeyX',
    f: 'KeyF', m: 'KeyM', ' ': 'Space', Escape: 'Escape', Esc: 'Escape'
  };

  /** A normalized cross pad: its center stops movement, and a short overshoot is allowed. */
  function directionFromPoint(rect, x, y, options = {}) {
    if (!rect || ![rect.left, rect.top, rect.width, rect.height, x, y].every(Number.isFinite) ||
        rect.width <= 0 || rect.height <= 0) return null;
    const deadZone = Math.max(0, Math.min(.8, options.deadZone ?? .18));
    const outerMargin = Math.max(0, Math.min(2, options.outerMargin ?? .4));
    const dx = (x - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (y - rect.top - rect.height / 2) / (rect.height / 2);
    const distance = Math.max(Math.abs(dx), Math.abs(dy));
    if (distance <= deadZone || distance > 1 + outerMargin) return null;
    return Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'left' : 'right') : (dy < 0 ? 'up' : 'down');
  }

  function createControls(options = {}) {
    const { pad, canvas } = options;
    const doc = options.document || (pad && pad.ownerDocument) ||
      (typeof document !== 'undefined' ? document : null);
    const win = options.window || (doc && doc.defaultView) ||
      (typeof window !== 'undefined' ? window : null);
    const buttons = pad ? Array.from(pad.querySelectorAll('[data-dir]')) : [];
    const keys = new Map();
    const removers = [];
    let enabled = true;
    let destroyed = false;
    let sequence = 0;
    let pointer = null;
    let published = null;
    const isPlaying = () => enabled && !destroyed && (options.isPlaying ? options.isPlaying() : true);
    const isPaused = () => enabled && !destroyed && Boolean(options.isPaused && options.isPaused());

    function direction() {
      if (!isPlaying()) return null;
      let active = pointer && pointer.direction ? pointer : null;
      for (const held of keys.values()) if (!active || held.order > active.order) active = held;
      return active ? active.direction : null;
    }

    function publish() {
      const next = direction();
      for (const button of buttons) button.classList.toggle('pressed', button.dataset.dir === next);
      if (next !== published) {
        published = next;
        if (options.onChange) options.onChange(next);
      }
    }

    function listen(target, name, handler, listenerOptions) {
      if (!target || !target.addEventListener) return;
      target.addEventListener(name, handler, listenerOptions);
      removers.push(() => target.removeEventListener(name, handler, listenerOptions));
    }

    function releasePointer() {
      const previous = pointer;
      pointer = null;
      // Clear ownership before release: lostpointercapture may dispatch synchronously.
      if (previous && pad && pad.releasePointerCapture) {
        try {
          if (!pad.hasPointerCapture || pad.hasPointerCapture(previous.id)) pad.releasePointerCapture(previous.id);
        } catch (_) { /* The browser may already have released a cancelled touch. */ }
      }
    }

    function clear() {
      keys.clear();
      releasePointer();
      publish();
    }

    function editable(target) {
      if (!target) return false;
      if (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName || '')) return true;
      return Boolean(target.closest && target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])'));
    }

    function nativeButton(target) {
      return Boolean(target && (target.tagName === 'BUTTON' ||
        (target.closest && target.closest('button, [role="button"]'))));
    }

    function codeOf(event) {
      return event.code || KEY_CODES[event.key] || KEY_CODES[String(event.key || '').toLowerCase()];
    }

    function keydown(event) {
      if (!enabled || destroyed || event.ctrlKey || event.metaKey || event.altKey || editable(event.target)) return;
      const code = codeOf(event);
      const next = DIRECTIONS[code];
      if (next) {
        if (!isPlaying()) return;
        event.preventDefault();
        if (!keys.has(code)) keys.set(code, { direction: next, order: ++sequence });
        publish();
        return;
      }
      if (code === 'Space' && nativeButton(event.target)) return;
      let callback = null;
      if (code === 'Space' && isPlaying()) callback = options.onDraw;
      else if (code === 'KeyX' && isPlaying()) callback = options.onAbort;
      else if ((code === 'KeyP' || code === 'Escape') && (isPlaying() || isPaused())) callback = options.onPause;
      else if (code === 'KeyF') callback = options.onFullscreen;
      else if (code === 'KeyM') callback = options.onMenu;
      if (callback) {
        event.preventDefault();
        if (!event.repeat) callback();
      }
    }

    function keyup(event) {
      if (keys.delete(codeOf(event))) publish();
    }

    function pointerdown(event) {
      if (!isPlaying() || (event.pointerType === 'mouse' && event.button !== 0)) return;
      event.preventDefault();
      if (pointer) return; // A second finger can use draw/abort without stealing movement.
      const arrow = event.target && event.target.closest && event.target.closest('[data-dir]');
      const arrowDirection = arrow && pad.contains(arrow) && arrow.dataset.dir;
      const next = ['up', 'down', 'left', 'right'].includes(arrowDirection) ? arrowDirection :
        directionFromPoint(pad.getBoundingClientRect(), event.clientX, event.clientY);
      pointer = { id: event.pointerId, direction: next, order: ++sequence };
      if (pad.setPointerCapture) {
        try { pad.setPointerCapture(event.pointerId); } catch (_) { /* Document listeners cover a missing capture. */ }
      }
      if (canvas && canvas.focus) canvas.focus({ preventScroll: true });
      publish();
    }

    function pointermove(event) {
      if (!pointer || event.pointerId !== pointer.id) return;
      if (!isPlaying()) { clear(); return; }
      event.preventDefault();
      const next = directionFromPoint(pad.getBoundingClientRect(), event.clientX, event.clientY);
      if (pointer.direction !== next) {
        pointer.direction = next;
        pointer.order = ++sequence;
        publish();
      }
    }

    function pointerend(event) {
      if (!pointer || event.pointerId !== pointer.id) return;
      releasePointer();
      publish();
    }

    listen(doc, 'keydown', keydown);
    listen(doc, 'keyup', keyup);
    listen(pad, 'pointerdown', pointerdown, { passive: false });
    // Captured events bubble to document. These listeners also work when capture is unavailable.
    listen(doc, 'pointermove', pointermove, { passive: false });
    listen(doc, 'pointerup', pointerend);
    listen(doc, 'pointercancel', pointerend);
    listen(pad, 'lostpointercapture', pointerend);
    listen(pad, 'contextmenu', event => { if (isPlaying()) event.preventDefault(); });
    listen(win, 'blur', clear);
    listen(win, 'resize', clear);
    listen(win, 'orientationchange', clear);
    listen(doc, 'visibilitychange', () => { if (doc.hidden) clear(); });

    return {
      getDirection: direction,
      clear,
      setEnabled(value) {
        enabled = Boolean(value);
        if (!enabled) clear();
      },
      destroy() {
        if (destroyed) return;
        destroyed = true;
        clear();
        for (const remove of removers) remove();
      }
    };
  }

  return { createControls, directionFromPoint };
});
