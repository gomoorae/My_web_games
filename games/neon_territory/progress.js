(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.NeonProgress = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const KEY = 'neon-territory-v1';
  const MAX_LENGTH = 250000;
  const MEDALS = ['bronze', 'silver', 'gold'];
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const bounded = (value, min, max) => typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;

  function defaultProgress() {
    return { version: 1, unlocked: 1, records: {}, snapshot: null, settings: { sound: true } };
  }

  function validRecord(value) {
    return object(value) && bounded(value.score, 0, 1e9) &&
      bounded(value.time, 0, 604800) && Number.isInteger(value.lives) &&
      bounded(value.lives, 1, 3) && bounded(value.largestCapture, 0, 100) &&
      MEDALS.includes(value.medal);
  }

  function copyRecord(value) {
    return {
      score: value.score, time: value.time, lives: value.lives,
      largestCapture: value.largestCapture, medal: value.medal
    };
  }

  function sanitize(value) {
    const progress = defaultProgress();
    if (!object(value) || value.version !== 1) return progress;
    if (Number.isInteger(value.unlocked) && bounded(value.unlocked, 1, 10)) {
      progress.unlocked = value.unlocked;
    }
    if (object(value.records)) {
      for (let i = 0; i < 10; i++) {
        if (Object.prototype.hasOwnProperty.call(value.records, i) && validRecord(value.records[i])) {
          progress.records[i] = copyRecord(value.records[i]);
        }
      }
    }
    // Engine.fromJSON performs the detailed grid, trail, enemy and state validation.
    if (object(value.snapshot)) progress.snapshot = value.snapshot;
    if (object(value.settings) && typeof value.settings.sound === 'boolean') {
      progress.settings.sound = value.settings.sound;
    }
    return progress;
  }

  function withinLimit(text) {
    if (text.length > MAX_LENGTH) return false;
    return typeof TextEncoder === 'undefined' || new TextEncoder().encode(text).length <= MAX_LENGTH;
  }

  function createStore(storage) {
    return {
      load() {
        try {
          if (!storage || typeof storage.getItem !== 'function') return defaultProgress();
          const raw = storage.getItem(KEY);
          if (typeof raw !== 'string' || !withinLimit(raw)) return defaultProgress();
          return sanitize(JSON.parse(raw));
        } catch (_) {
          return defaultProgress();
        }
      },
      save(data) {
        try {
          if (!storage || typeof storage.setItem !== 'function') return false;
          const raw = JSON.stringify(sanitize(data));
          if (!withinLimit(raw)) return false;
          storage.setItem(KEY, raw);
          return true;
        } catch (_) {
          // Private browsing, disabled storage and full quotas must not stop a game.
          return false;
        }
      }
    };
  }

  function recordWin(progress, stageIndex, result) {
    if (!object(progress)) return defaultProgress();
    if (!Number.isInteger(stageIndex) || stageIndex < 0 || stageIndex > 9 || !validRecord(result)) return progress;
    const clean = sanitize(progress);
    const previous = clean.records[stageIndex];
    // These are independent personal bests: 최고 점수 / 최단 시간 / 최고 메달.
    // They may come from different attempts, rather than one fictional combined run.
    clean.records[stageIndex] = previous ? {
      score: Math.max(previous.score, result.score),
      time: Math.min(previous.time, result.time),
      lives: Math.max(previous.lives, result.lives),
      largestCapture: Math.max(previous.largestCapture, result.largestCapture),
      medal: MEDALS[Math.max(MEDALS.indexOf(previous.medal), MEDALS.indexOf(result.medal))]
    } : copyRecord(result);
    clean.unlocked = Math.max(clean.unlocked, Math.min(10, stageIndex + 2));
    progress.version = clean.version;
    progress.unlocked = clean.unlocked;
    progress.records = clean.records;
    progress.snapshot = clean.snapshot;
    progress.settings = clean.settings;
    return progress;
  }

  return { createStore, defaultProgress, recordWin };
});
