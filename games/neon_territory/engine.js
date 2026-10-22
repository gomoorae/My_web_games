(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.NeonEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const W = 96, H = 60, SEA = 0, SAFE = 1, TRAIL = 2;
  const DRAW_SPEED = 19, SAFE_SPEED = DRAW_SPEED * 1.6, TICK = 1 / 120;
  const VECTORS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
  const KINDS = ['drifter', 'ricochet', 'hunter', 'charger'];
  const STAGES = [
    { name: 'FIRST LIGHT', title: '첫 번째 경계', goal: 75, speed: 9.5, layout: 'open', types: ['drifter', 'drifter', 'drifter'], turnBase: 1.8, turnRange: 1.2, hint: '선 긋기를 켜고 출발해. 안전 영역에 돌아오면 적 없는 땅을 확보해.' },
    { name: 'REFLECTION', title: '반사의 법칙', goal: 75, speed: 12, layout: 'open', types: ['ricochet', 'drifter', 'ricochet'], turnBase: 1.6, turnRange: 1, hint: '보라색 사각형은 직선으로 반사해. 움직임을 읽고 긴 선에 도전해봐.' },
    { name: 'SAFE HARBOUR', title: '안전한 섬', goal: 78, speed: 12, layout: 'island', types: ['drifter', 'ricochet', 'drifter', 'ricochet'], turnBase: 1.4, turnRange: .8, hint: '중앙의 안전 섬도 귀환 지점이야. 섬까지 연결해 출발점을 늘려봐.' },
    { name: 'THE WATCHER', title: '선을 읽는 자', goal: 80, speed: 14.5, layout: 'peninsula', types: ['hunter', 'ricochet', 'drifter', 'drifter'], turnBase: 1.2, turnRange: .8, hint: '주황색 마름모 추적자는 예고 후 네 위치로 방향을 바꿔. 예고선을 보고 귀환해.' },
    { name: 'TWIN BEACONS', title: '두 개의 등대', goal: 82, speed: 16.5, layout: 'twins', types: ['drifter', 'hunter', 'ricochet', 'drifter', 'ricochet'], turnBase: 1, turnRange: .6, hint: '두 안전 섬 사이를 연결하면 여러 방향으로 땅을 나눌 수 있어.' },
    { name: 'WARNING LIGHT', title: '돌진 경보', goal: 83, speed: 17, layout: 'bays', types: ['charger', 'ricochet', 'hunter', 'drifter', 'ricochet'], turnBase: 1, turnRange: .6, hint: '파란색 화살표 돌진자는 먼저 방향을 예고해. 돌진이 지나간 뒤 빈틈을 노려봐.' },
    { name: 'THREE CROSSINGS', title: '세 개의 징검다리', goal: 83, speed: 17, layout: 'stepping', types: ['hunter', 'ricochet', 'drifter', 'charger', 'ricochet', 'drifter'], turnBase: .9, turnRange: .5, hint: '징검다리를 발판으로 짧게 이어가거나, 크게 둘러싸 보너스를 노려봐.' },
    { name: 'CROOKED COAST', title: '엇갈린 해안', goal: 84, speed: 17.5, layout: 'zigzag', types: ['charger', 'hunter', 'ricochet', 'drifter', 'hunter', 'ricochet'], turnBase: .85, turnRange: .5, hint: '엇갈린 안전 반도를 이용해 귀환 거리를 줄여. 긴 선은 예고를 보고 출발해.' },
    { name: 'INNER SANCTUM', title: '중앙 거점', goal: 85, speed: 17.5, layout: 'fortress', types: ['hunter', 'charger', 'ricochet', 'drifter', 'hunter', 'ricochet', 'drifter'], turnBase: .8, turnRange: .45, hint: '중앙 거점을 먼저 연결하면 길이 열려. 일곱 적을 작은 구역으로 나눠봐.' },
    { name: 'LAST FRONTIER', title: '마지막 경계', goal: 86, speed: 18, layout: 'frontier', types: ['charger', 'hunter', 'ricochet', 'drifter', 'charger', 'hunter', 'ricochet'], turnBase: .75, turnRange: .4, hint: '모든 움직임이 모였어. 예고를 읽고 안전 거점을 이어 마지막 땅을 확보해.' }
  ].map(s => Object.freeze({ ...s, count: s.types.length, acceleration: .1, types: Object.freeze(s.types) }));
  Object.freeze(STAGES);

  const TERRAIN = {
    open: [], island: [[44, 26, 8, 8]], peninsula: [[1, 27, 23, 5]],
    twins: [[27, 22, 7, 7], [62, 34, 7, 7]],
    bays: [[1, 20, 19, 5], [76, 36, 19, 5]],
    stepping: [[22, 39, 6, 6], [44, 26, 7, 7], [68, 14, 6, 6]],
    zigzag: [[1, 18, 26, 4], [69, 37, 26, 4]],
    fortress: [[42, 23, 12, 14]],
    frontier: [[1, 27, 15, 5], [80, 27, 15, 5], [44, 26, 8, 8]]
  };
  const SPAWNS = [
    [29.5, 19.5, .65], [65.5, 37.5, 3.97], [68.5, 17.5, 2.15],
    [42.5, 43.5, 5.1], [16.5, 39.5, 5.65], [48.5, 15.5, 1.2], [81.5, 44.5, 3.5]
  ];
  const cellIndex = (x, y) => y * W + x;
  const finite = (n, min, max) => Number.isFinite(n) && n >= min && n <= max;
  const integer = (n, min, max) => Number.isInteger(n) && n >= min && n <= max;
  const validPoint = p => p && integer(p.x, 0, W - 1) && integer(p.y, 0, H - 1);
  const adjacent = (a, b) => Math.abs(a % W - b % W) + Math.abs(Math.floor(a / W) - Math.floor(b / W)) === 1;

  class Engine {
    constructor({ stageIndex = 0, rng = Math.random } = {}) {
      this.stageIndex = integer(stageIndex, 0, STAGES.length - 1) ? stageIndex : 0;
      this.rng = typeof rng === 'function' ? rng : Math.random;
      this.grid = new Uint8Array(W * H);
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        if (!x || !y || x === W - 1 || y === H - 1) this.grid[cellIndex(x, y)] = SAFE;
      }
      for (const [x, y, w, h] of TERRAIN[this.stage.layout]) {
        for (let yy = y; yy < y + h; yy++) for (let xx = x; xx < x + w; xx++) this.grid[cellIndex(xx, yy)] = SAFE;
      }
      this.initialSafe = this.grid.slice();
      this.total = this.grid.reduce((sum, value) => sum + (value === SEA ? 1 : 0), 0);
      this.player = { x: W / 2, y: H - 1 };
      this.anchor = { ...this.player };
      this.enemies = this.stage.types.map((kind, i) => {
        let [x, y, angle] = SPAWNS[i];
        if (this.at(Math.floor(x), Math.floor(y)) !== SEA) {
          let best = Infinity;
          for (let yy = 2; yy < H - 2; yy++) for (let xx = 2; xx < W - 2; xx++) {
            const distance = (xx + .5 - SPAWNS[i][0]) ** 2 + (yy + .5 - SPAWNS[i][1]) ** 2;
            if (this.at(xx, yy) === SEA && distance < best) { best = distance; x = xx + .5; y = yy + .5; }
          }
        }
        const baseSpeed = this.stage.speed * (kind === 'hunter' ? .78 : kind === 'charger' ? .72 : 1);
        return { x, y, kind, vx: Math.cos(angle) * baseSpeed, vy: Math.sin(angle) * baseSpeed,
          baseSpeed, turn: kind === 'charger' ? 2.5 + i * .25 : this.stage.turnBase + i * .35,
          warning: 0, intentAngle: angle, dashTime: 0 };
      });
      this.trail = []; this.state = 'ready'; this.armed = false; this.lives = 3;
      this.elapsed = 0; this.percent = 0; this.score = 0; this.largestCapture = 0; this.captures = 0;
      this.respawn = 0; this.revision = 1; this.trapped = false; this.result = null;
      this._events = []; this._moveClock = 0; this._lastDirection = null;
      this._lastBlock = ''; this._blockTime = -1;
      this._visited = new Uint8Array(W * H); this._queue = new Int32Array(W * H);
    }

    get stage() { return STAGES[this.stageIndex]; }
    at(x, y) { return x < 0 || y < 0 || x >= W || y >= H ? SAFE : this.grid[cellIndex(x, y)]; }
    drainEvents() { const events = this._events; this._events = []; return events; }
    start() { if (this.state === 'ready' || this.state === 'paused') { this.state = 'playing'; this._resetMotion(); } }
    pause() { if (this.state === 'playing') { this.state = 'paused'; this._resetMotion(); } }
    resume() { if (this.state === 'paused') { this.state = 'playing'; this._resetMotion(); } }
    _resetMotion() { this._moveClock = 0; this._lastDirection = null; }

    toggleDraw() {
      if (this.state !== 'playing' || this.trail.length || this.respawn > 0) return false;
      this.armed = !this.armed;
      this._events.push({ type: 'armed', armed: this.armed });
      return true;
    }

    abortTrail() {
      if (this.state !== 'playing' || !this.trail.length || this.respawn > 0) return false;
      this._loseLife('긴급 귀환! 기회 하나를 쓰고 출발점으로 돌아왔어.');
      return true;
    }

    _blocked(reason) {
      if (this._lastBlock !== reason || this.elapsed - this._blockTime > 1.5) {
        this._lastBlock = reason; this._blockTime = this.elapsed;
        this._events.push({ type: 'blocked', reason });
      }
    }

    move(direction) {
      if (this.state !== 'playing' || this.respawn > 0 || !VECTORS[direction]) return false;
      const [dx, dy] = VECTORS[direction], nx = this.player.x + dx, ny = this.player.y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) return false;
      const kind = this.at(nx, ny);
      if (kind === SEA && !this.armed) { this._blocked('선 긋기를 켜면 어두운 영역으로 나갈 수 있어.'); return false; }
      if (kind === TRAIL) { this._blocked(this.trapped ? '자신의 선에 갇혔어. 긴급 귀환으로 출발점에 돌아갈 수 있어. (기회 −1)' : '자신의 선은 지나갈 수 없어. 다른 방향으로 돌아가.'); return false; }
      if (kind === SEA && !this.trail.length) this.anchor = { ...this.player };
      this.player = { x: nx, y: ny };
      this._lastBlock = '';
      if (kind === SEA) {
        const cell = cellIndex(nx, ny);
        this.grid[cell] = TRAIL; this.trail.push(cell); this.revision++;
        if (this.trail.length === 1) this._events.push({ type: 'trailStart' });
        if (this.enemies.some(e => this._touchesTrail(e.x, e.y))) {
          this._loseLife('적이 그리던 선에 닿았어.'); return true;
        }
        this.trapped = Object.values(VECTORS).every(([xx, yy]) => this.at(nx + xx, ny + yy) === TRAIL);
        if (this.trapped) this._events.push({ type: 'trapped', reason: '자신의 선에 갇혔어. 긴급 귀환으로 돌아갈 수 있어. (기회 −1)' });
      } else if (this.trail.length) {
        if (this.enemies.some(e => this._touchesTrail(e.x, e.y))) this._loseLife('적이 연결 직전의 선에 닿았어.');
        else this._capture();
      } else this.anchor = { ...this.player };
      return true;
    }

    _loseLife(reason) {
      if (this.state !== 'playing' || this.respawn > 0) return;
      const position = { ...this.player };
      for (const cell of this.trail) this.grid[cell] = SEA;
      this.trail = []; this.player = { ...this.anchor }; this.armed = false; this.trapped = false;
      this.lives--; this.respawn = 1; this._resetMotion(); this.revision++;
      if (!this.lives) this.state = 'lost';
      this._events.push({ type: 'lifeLost', reason, position, lives: this.lives });
    }

    _capture() {
      const cells = this.trail.slice(), lineCells = cells.length;
      for (const cell of cells) this.grid[cell] = SAFE;
      this.trail = [];
      this._visited.fill(0);
      let head = 0, tail = 0;
      const visit = cell => {
        if (this.grid[cell] === SEA && !this._visited[cell]) {
          this._visited[cell] = 1; this._queue[tail++] = cell;
        }
      };
      for (const enemy of this.enemies) visit(cellIndex(Math.floor(enemy.x), Math.floor(enemy.y)));
      while (head < tail) {
        const cell = this._queue[head++], x = cell % W, y = Math.floor(cell / W);
        if (x > 0) visit(cell - 1); if (x < W - 1) visit(cell + 1);
        if (y > 0) visit(cell - W); if (y < H - 1) visit(cell + W);
      }
      let owned = 0;
      for (let cell = 0; cell < this.grid.length; cell++) {
        if (this.grid[cell] === SEA && !this._visited[cell]) { this.grid[cell] = SAFE; cells.push(cell); }
        if (this.grid[cell] === SAFE && !this.initialSafe[cell]) owned++;
      }
      const previous = this.percent;
      this.percent = owned / this.total * 100;
      const gain = this.percent - previous, areaCells = cells.length - lineCells;
      // Convex area bonus rewards taking one larger risk over many tiny cuts.
      const points = Math.round(gain * 100 + (areaCells ? gain * gain * 8 : 0));
      this.score += points; this.captures++; this.largestCapture = Math.max(this.largestCapture, gain);
      this.armed = false; this.trapped = false; this.anchor = { ...this.player }; this.revision++;
      this._events.push({ type: 'capture', gain, areaCells, lineOnly: areaCells === 0, cells, points, position: { ...this.player } });
      if (this.percent >= this.stage.goal) {
        const clearBonus = this.lives * 1000 + Math.max(0, Math.round(180 - this.elapsed)) * 10;
        this.score += clearBonus;
        this.result = { score: this.score, time: this.elapsed, lives: this.lives, largestCapture: this.largestCapture,
          medal: this.lives === 3 ? 'gold' : this.lives === 2 ? 'silver' : 'bronze', clearBonus, captures: this.captures };
        this.state = this.stageIndex === STAGES.length - 1 ? 'complete' : 'won';
        this._resetMotion();
        this._events.push({ type: 'win', result: { ...this.result } });
      }
    }

    _touchesTrail(x, y) {
      const r = .43;
      for (let cy = Math.floor(y - r); cy <= Math.floor(y + r); cy++) for (let cx = Math.floor(x - r); cx <= Math.floor(x + r); cx++) {
        if (this.at(cx, cy) !== TRAIL) continue;
        const dx = x - Math.max(cx, Math.min(x, cx + 1)), dy = y - Math.max(cy, Math.min(y, cy + 1));
        if (dx * dx + dy * dy <= r * r) return true;
      }
      return false;
    }

    _planTurn(e) {
      const angle = Math.atan2(e.vy, e.vx);
      const delta = (this.rng() < .5 ? -1 : 1) * (.35 + this.rng() * .45);
      e.intentAngle = (e.kind === 'hunter' || e.kind === 'charger') && this.trail.length
        ? Math.atan2(this.player.y + .5 - e.y, this.player.x + .5 - e.x) : angle + delta;
      e.warning = e.kind === 'charger' ? .65 : e.kind === 'hunter' ? .5 : .3;
    }

    _moveEnemy(e, dt) {
      if (e.warning > 0) {
        e.warning = Math.max(0, e.warning - dt);
        if (!e.warning) {
          e.vx = Math.cos(e.intentAngle) * e.baseSpeed; e.vy = Math.sin(e.intentAngle) * e.baseSpeed;
          if (e.kind === 'charger') { e.dashTime = .55; e.turn = 2.8 + this.rng() * 1.2; }
          else e.turn = (e.kind === 'hunter' ? Math.max(1.3, this.stage.turnBase) : this.stage.turnBase) + this.rng() * this.stage.turnRange;
        }
      } else if (e.dashTime > 0) e.dashTime = Math.max(0, e.dashTime - dt);
      else if (e.kind !== 'ricochet') { e.turn -= dt; if (e.turn <= 0) this._planTurn(e); }
      const acceleration = 1 + .1 * Math.min(this.percent / this.stage.goal, 1);
      const factor = acceleration * (e.warning > 0 ? (e.kind === 'charger' ? .35 : .72) : e.dashTime > 0 ? 1.7 : 1);
      // Sub-cell steps protect both a one-cell wall and a one-cell trail during a dash.
      const subdivisions = Math.max(1, Math.ceil(Math.hypot(e.vx, e.vy) * factor * dt / .2));
      for (let n = 0; n < subdivisions; n++) {
        const dx = e.vx * factor * dt / subdivisions, dy = e.vy * factor * dt / subdivisions;
        if (this.at(Math.floor(e.x + dx), Math.floor(e.y)) === SAFE) e.vx = -e.vx; else e.x += dx;
        if (this.at(Math.floor(e.x), Math.floor(e.y + dy)) === SAFE) e.vy = -e.vy; else e.y += dy;
        if (this.trail.length && this._touchesTrail(e.x, e.y)) this._loseLife('적이 그리던 선에 닿았어.');
      }
    }

    step(dt, direction = null) {
      if (this.state !== 'playing' || !finite(dt, 0, 1) || dt === 0) return;
      if (!VECTORS[direction]) direction = null;
      let remaining = dt;
      while (remaining > 1e-9 && this.state === 'playing') {
        const delta = Math.min(remaining, TICK); remaining -= delta;
        this.elapsed += delta; this.respawn = Math.max(0, this.respawn - delta);
        for (const enemy of this.enemies) this._moveEnemy(enemy, delta);
        if (this.state !== 'playing') break;
        if (direction && this.respawn === 0) {
          const [dx, dy] = VECTORS[direction];
          const speed = !this.trail.length && this.at(this.player.x + dx, this.player.y + dy) === SAFE ? SAFE_SPEED : DRAW_SPEED;
          if (!this._lastDirection) this._moveClock = 1 / speed;
          this._lastDirection = direction; this._moveClock += delta;
          // At most one cell per 120 Hz update, including when switching to the faster safe pace.
          if (this._moveClock + 1e-9 >= 1 / speed) { this._moveClock = Math.max(0, this._moveClock - 1 / speed); this.move(direction); }
        } else this._resetMotion();
      }
    }

    toJSON() {
      return { version: 1, stageIndex: this.stageIndex, state: this.state, grid: Array.from(this.grid), trail: this.trail.slice(),
        player: { ...this.player }, anchor: { ...this.anchor }, enemies: this.enemies.map(e => ({ ...e })),
        armed: this.armed, lives: this.lives, elapsed: this.elapsed, score: this.score, largestCapture: this.largestCapture,
        captures: this.captures, respawn: this.respawn, result: this.result ? { ...this.result } : null };
    }

    static fromJSON(data) {
      try {
        if (!data || data.version !== 1 || !integer(data.stageIndex, 0, STAGES.length - 1)) return null;
        const states = ['ready', 'playing', 'paused', 'won', 'complete', 'lost'];
        if (!states.includes(data.state) || !Array.isArray(data.grid) || data.grid.length !== W * H || data.grid.some(v => !integer(v, 0, 2))) return null;
        if (!validPoint(data.player) || !validPoint(data.anchor) || typeof data.armed !== 'boolean' || !integer(data.lives, 0, 3)) return null;
        if (!finite(data.elapsed, 0, 864000) || !integer(data.score, 0, 10000000) || !finite(data.largestCapture, 0, 100)
          || !integer(data.captures, 0, W * H) || !finite(data.respawn, 0, 1)) return null;
        if (!Array.isArray(data.trail) || data.trail.length > W * H || data.trail.some(v => !integer(v, 0, W * H - 1))) return null;
        const game = new Engine({ stageIndex: data.stageIndex });
        const grid = Uint8Array.from(data.grid), trailSet = new Set(data.trail);
        if (trailSet.size !== data.trail.length) return null;
        let owned = 0;
        for (let i = 0; i < grid.length; i++) {
          if (game.initialSafe[i] && grid[i] !== SAFE) return null;
          if ((grid[i] === TRAIL) !== trailSet.has(i)) return null;
          if (grid[i] === SAFE && !game.initialSafe[i]) owned++;
        }
        const playerCell = cellIndex(data.player.x, data.player.y), anchorCell = cellIndex(data.anchor.x, data.anchor.y);
        if (grid[anchorCell] !== SAFE) return null;
        if (data.trail.length) {
          if (!data.armed || grid[playerCell] !== TRAIL || data.trail[data.trail.length - 1] !== playerCell || !adjacent(anchorCell, data.trail[0])) return null;
          for (let i = 1; i < data.trail.length; i++) if (!adjacent(data.trail[i - 1], data.trail[i])) return null;
        } else if (grid[playerCell] !== SAFE || playerCell !== anchorCell) return null;
        if (!Array.isArray(data.enemies) || data.enemies.length !== game.stage.count) return null;
        for (let i = 0; i < data.enemies.length; i++) {
          const e = data.enemies[i];
          if (!e || !KINDS.includes(e.kind) || e.kind !== game.stage.types[i] || !finite(e.x, 1, W - 1.000001) || !finite(e.y, 1, H - 1.000001)
            || grid[cellIndex(Math.floor(e.x), Math.floor(e.y))] !== SEA || !finite(e.vx, -30, 30) || !finite(e.vy, -30, 30)
            || !finite(e.baseSpeed, .1, 30) || Math.abs(e.baseSpeed - game.enemies[i].baseSpeed) > .0001
            || Math.abs(Math.hypot(e.vx, e.vy) - e.baseSpeed) > .001
            || !finite(e.warning, 0, .65) || !finite(e.intentAngle, -20, 20) || !finite(e.dashTime, 0, .55) || !finite(e.turn, -.02, 10)) return null;
        }
        const percent = owned / game.total * 100;
        const terminalWin = data.state === 'won' || data.state === 'complete';
        if ((data.state === 'lost') !== (data.lives === 0)) return null;
        if (terminalWin && (percent < game.stage.goal || data.trail.length || data.armed || !data.result)) return null;
        if ((data.state === 'complete') !== (terminalWin && data.stageIndex === STAGES.length - 1)) return null;
        if (!terminalWin && percent >= game.stage.goal) return null;
        if (data.state === 'lost' && data.trail.length) return null;
        let result = null;
        if (terminalWin) {
          const r = data.result, medal = data.lives === 3 ? 'gold' : data.lives === 2 ? 'silver' : 'bronze';
          if (!r || r.score !== data.score || r.time !== data.elapsed || r.lives !== data.lives || r.largestCapture !== data.largestCapture
            || r.medal !== medal || r.captures !== data.captures || !integer(r.clearBonus, 0, 4800)) return null;
          result = { score: r.score, time: r.time, lives: r.lives, largestCapture: r.largestCapture, medal, clearBonus: r.clearBonus, captures: r.captures };
        }
        game.grid = grid; game.trail = data.trail.slice(); game.player = { ...data.player }; game.anchor = { ...data.anchor };
        game.enemies = data.enemies.map(e => ({ x: e.x, y: e.y, vx: e.vx, vy: e.vy, kind: e.kind, warning: e.warning,
          intentAngle: e.intentAngle, dashTime: e.dashTime, turn: e.turn, baseSpeed: e.baseSpeed }));
        game.state = ['ready', 'won', 'complete', 'lost'].includes(data.state) ? data.state : 'paused';
        game.armed = data.armed; game.lives = data.lives; game.elapsed = data.elapsed; game.percent = percent;
        game.score = data.score; game.largestCapture = data.largestCapture; game.captures = data.captures;
        game.respawn = data.respawn; game.result = result; game.revision++;
        game.trapped = !!game.trail.length && Object.values(VECTORS).every(([dx, dy]) => game.at(game.player.x + dx, game.player.y + dy) === TRAIL);
        return game;
      } catch (_) { return null; }
    }
  }
  return { Engine, STAGES, W, H, SEA, SAFE, TRAIL };
});
