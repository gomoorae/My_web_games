(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Match3 = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const SIZE = 8, TYPES = 6, BASE_SECONDS = 60, MAX_BONUS = 30, MOVE_BONUS = 3;
  const row = i => Math.floor(i / SIZE), col = i => i % SIZE;
  const adjacent = (a, b) => Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0 && a < 64 && b < 64 && Math.abs(row(a) - row(b)) + Math.abs(col(a) - col(b)) === 1;
  const isLine = t => t && (t.special === 'row' || t.special === 'column');
  const clone = board => board.map(t => t ? { ...t } : null);

  function matches(board) {
    const runs = [];
    for (const direction of ['row', 'column']) {
      for (let lane = 0; lane < SIZE; lane++) {
        let run = [], type = -1;
        for (let p = 0; p <= SIZE; p++) {
          const i = direction === 'row' ? lane * SIZE + p : p * SIZE + lane;
          const tile = p < SIZE ? board[i] : null;
          const next = tile && tile.special !== 'color' ? tile.type : -1;
          if (next !== type || next < 0) {
            if (run.length >= 3) runs.push({ cells: run, direction });
            run = [];
          }
          if (next >= 0) run.push(i);
          type = next;
        }
      }
    }
    const groups = [];
    for (const run of runs) {
      const linked = groups.filter(g => run.cells.some(i => g.cells.has(i)));
      const group = { cells: new Set(run.cells), runs: [run] };
      for (const g of linked) {
        for (const i of g.cells) group.cells.add(i);
        group.runs.push(...g.runs);
        groups.splice(groups.indexOf(g), 1);
      }
      groups.push(group);
    }
    return groups;
  }

  function specialKind(group) {
    if (group.runs.some(r => r.cells.length >= 5)) return 'color';
    if (group.runs.some(r => r.direction === 'row') && group.runs.some(r => r.direction === 'column')) return 'bomb';
    const four = group.runs.find(r => r.cells.length === 4);
    return four ? four.direction : null;
  }

  function canSwap(board, a, b) {
    if (!adjacent(a, b) || !board[a] || !board[b]) return false;
    if (board[a].special === 'color' || board[b].special === 'color' || (board[a].special && board[b].special)) return true;
    const candidate = board.slice();
    [candidate[a], candidate[b]] = [candidate[b], candidate[a]];
    return matches(candidate).some(g => g.cells.has(a) || g.cells.has(b));
  }

  function moves(board) {
    const result = [];
    for (let a = 0; a < 64; a++) {
      for (const b of [col(a) < 7 ? a + 1 : -1, row(a) < 7 ? a + 8 : -1]) {
        if (b >= 0 && canSwap(board, a, b)) result.push([a, b]);
      }
    }
    return result;
  }

  class Engine {
    constructor(random = Math.random) { this.random = random; this.nextId = 1; }
    pick(n) { return Math.min(n - 1, Math.max(0, Math.floor(this.random() * n))); }
    tile(type = this.pick(TYPES), special = null) { return { id: this.nextId++, type, special }; }
    createBoard() {
      let board;
      for (let attempt = 0; attempt < 80; attempt++) {
        board = [];
        for (let i = 0; i < 64; i++) {
          const excluded = new Set();
          if (col(i) >= 2 && board[i - 1].type === board[i - 2].type) excluded.add(board[i - 1].type);
          if (row(i) >= 2 && board[i - 8].type === board[i - 16].type) excluded.add(board[i - 8].type);
          const options = Array.from({ length: TYPES }, (_, t) => t).filter(t => !excluded.has(t));
          board.push(this.tile(options[this.pick(options.length)]));
        }
        if (moves(board).length) return board;
      }
      // A bounded fallback also works with a constant or adversarial random source.
      board = Array.from({ length: 64 }, (_, i) => this.tile((row(i) + 2 * col(i)) % TYPES));
      [0, 1, 0, 0].forEach((t, i) => { board[i].type = t; });
      return board;
    }
    shuffle(board) {
      for (let attempt = 0; attempt < 300; attempt++) {
        const candidate = clone(board);
        for (let i = 63; i > 0; i--) {
          const j = this.pick(i + 1);
          [candidate[i], candidate[j]] = [candidate[j], candidate[i]];
        }
        if (!matches(candidate).length && moves(candidate).length) return candidate;
      }
      const fresh = this.createBoard();
      board.forEach((tile, i) => {
        if (tile.special) fresh[i] = { ...fresh[i], special: tile.special, type: tile.special === 'color' ? -1 : fresh[i].type };
      });
      return fresh;
    }
    collapse(board) {
      const next = new Array(64).fill(null), falls = [];
      for (let c = 0; c < 8; c++) {
        let write = 7;
        for (let r = 7; r >= 0; r--) {
          if (!board[r * 8 + c]) continue;
          const tile = board[r * 8 + c];
          next[write * 8 + c] = tile;
          if (write !== r) falls.push({ id: tile.id, fromRow: r, toRow: write, col: c });
          write--;
        }
        let spawn = -1;
        for (let r = write; r >= 0; r--) {
          const tile = this.tile();
          next[r * 8 + c] = tile;
          falls.push({ id: tile.id, fromRow: spawn--, toRow: r, col: c });
        }
      }
      return { board: next, falls };
    }
    resolveStep(board, groups, preferred, direct, chain) {
      const hit = new Set(), created = [], protectedCells = new Set(), activated = [];
      const targets = new Map();
      const add = i => { if (i >= 0 && i < 64 && !protectedCells.has(i)) hit.add(i); };
      const line = (r, c, direction) => {
        for (let p = 0; p < 8; p++) add(direction === 'row' ? r * 8 + p : p * 8 + c);
      };
      const area = (i, radius) => {
        for (let r = Math.max(0, row(i) - radius); r <= Math.min(7, row(i) + radius); r++)
          for (let c = Math.max(0, col(i) - radius); c <= Math.min(7, col(i) + radius); c++) add(r * 8 + c);
      };
      for (const group of groups) {
        const kind = specialKind(group);
        const candidates = [...group.cells].filter(i => !board[i].special);
        const crossing = candidates.find(i => group.runs.filter(r => r.cells.includes(i)).length > 1);
        const anchor = preferred.find(i => candidates.includes(i)) ?? crossing ?? candidates[Math.floor(candidates.length / 2)];
        if (kind && anchor !== undefined) {
          protectedCells.add(anchor);
          created.push({ index: anchor, tile: { ...board[anchor], special: kind, type: kind === 'color' ? -1 : board[anchor].type } });
        }
      }
      groups.forEach(g => g.cells.forEach(add));
      if (direct) {
        const [a, b] = direct, ta = board[a], tb = board[b];
        add(a); add(b);
        if (ta.special === 'color' || tb.special === 'color') {
          if (ta.special === 'color' && tb.special === 'color') {
            for (let i = 0; i < 64; i++) add(i);
            targets.set(a, -2); targets.set(b, -2);
          } else {
            targets.set(ta.special === 'color' ? a : b, ta.special === 'color' ? tb.type : ta.type);
          }
        } else if (isLine(ta) && isLine(tb)) {
          line(row(b), col(b), 'row'); line(row(b), col(b), 'column');
        } else if (ta.special === 'bomb' && tb.special === 'bomb') {
          area(b, 2);
        } else if ((isLine(ta) && tb.special === 'bomb') || (isLine(tb) && ta.special === 'bomb')) {
          for (let d = -1; d <= 1; d++) {
            if (row(b) + d >= 0 && row(b) + d < 8) line(row(b) + d, col(b), 'row');
            if (col(b) + d >= 0 && col(b) + d < 8) line(row(b), col(b) + d, 'column');
          }
        }
      }
      const visited = new Set();
      // Set iteration includes newly added hits, so powers chain once per tile.
      for (const i of hit) {
        const tile = board[i];
        if (!tile || !tile.special || visited.has(i)) continue;
        visited.add(i);
        activated.push({ index: i, special: tile.special });
        if (isLine(tile)) line(row(i), col(i), tile.special);
        else if (tile.special === 'bomb') area(i, 1);
        else if (tile.special === 'color') {
          const counts = Array(TYPES).fill(0);
          board.forEach(t => { if (t && t.type >= 0) counts[t.type]++; });
          const target = targets.has(i) ? targets.get(i) : counts.indexOf(Math.max(...counts));
          board.forEach((t, index) => { if (t && (target === -2 || t.type === target)) add(index); });
        }
      }
      const gaps = clone(board);
      hit.forEach(i => { gaps[i] = null; });
      created.forEach(({ index, tile }) => { gaps[index] = tile; });
      const collapsed = this.collapse(gaps);
      return {
        before: board, after: collapsed.board, falls: collapsed.falls,
        removed: [...hit], created, activated, chain,
        points: hit.size * 10 * chain + created.length * 50,
        bonusSeconds: groups.reduce((sum, g) => sum + Math.min(2, Math.max(0, g.cells.size - 3)), 0)
      };
    }
    play(board, a, b) {
      const swapped = clone(board);
      if (!adjacent(a, b)) return { valid: false, swapped, frames: [] };
      [swapped[a], swapped[b]] = [swapped[b], swapped[a]];
      if (!canSwap(board, a, b)) return { valid: false, swapped, frames: [] };
      let current = swapped, groups = matches(current), direct = null;
      if (current[a].special === 'color' || current[b].special === 'color' || (current[a].special && current[b].special)) direct = [a, b];
      const frames = [];
      for (let chain = 1; chain <= 40 && (groups.length || direct); chain++) {
        const frame = this.resolveStep(current, groups, chain === 1 ? [b, a] : [], direct, chain);
        frames.push(frame);
        current = frame.after;
        groups = matches(current);
        direct = null;
      }
      let shuffled = false;
      if (matches(current).length || !moves(current).length) { current = this.shuffle(current); shuffled = true; }
      return {
        valid: true, swapped, board: current, frames, shuffled,
        points: frames.reduce((s, f) => s + f.points, 0),
        bonusSeconds: Math.min(MOVE_BONUS, frames.reduce((s, f) => s + f.bonusSeconds, 0)),
        maxChain: frames.length,
        created: frames.reduce((s, f) => s + f.created.length, 0),
        activated: frames.reduce((s, f) => s + f.activated.length, 0)
      };
    }
  }

  class Round {
    constructor({ random = Math.random, now = () => performance.now() } = {}) {
      this.engine = new Engine(random); this.now = now; this.generation = 0; this.reset();
    }
    reset() {
      this.generation++; this.board = this.engine.createBoard(); this.status = 'idle';
      this.score = 0; this.bonus = 0; this.maxChain = 0; this.moveCount = 0;
      this.created = 0; this.activated = 0; this.pending = null; this.deadline = 0; this.pausedRemaining = 0;
    }
    start() { if (this.status === 'idle') { this.status = 'running'; this.deadline = this.now() + BASE_SECONDS * 1000; } }
    remaining() {
      if (this.status === 'idle') return BASE_SECONDS * 1000;
      if (this.status === 'paused') return this.pausedRemaining;
      return Math.max(0, this.deadline - this.now());
    }
    begin(a, b) {
      if (this.status !== 'running' || this.pending || this.remaining() <= 0 || !adjacent(a, b)) return null;
      const plan = this.engine.play(this.board, a, b);
      const ticket = { generation: this.generation, plan, before: this.board, a, b, bonusGranted: 0 };
      this.pending = ticket;
      if (plan.valid) {
        this.board = plan.board; this.score += plan.points;
        ticket.bonusGranted = Math.min(MAX_BONUS - this.bonus, plan.bonusSeconds);
        this.bonus += ticket.bonusGranted; this.deadline += ticket.bonusGranted * 1000;
        this.maxChain = Math.max(this.maxChain, plan.maxChain); this.moveCount++;
        this.created += plan.created; this.activated += plan.activated;
      }
      return ticket;
    }
    current(ticket) { return this.pending === ticket && ticket.generation === this.generation; }
    finish(ticket) { if (!this.current(ticket)) return false; this.pending = null; this.expire(); return true; }
    expire() {
      if (this.status === 'running' && !this.pending && this.remaining() <= 0) this.status = 'over';
      return this.status === 'over';
    }
    pause() {
      if (this.status !== 'running' || this.remaining() <= 0) return false;
      this.pausedRemaining = this.remaining(); this.status = 'paused'; return true;
    }
    resume() {
      if (this.status !== 'paused') return;
      this.deadline = this.now() + this.pausedRemaining; this.status = 'running';
    }
  }
  return { VERSION: '2.0.0', SIZE, TYPES, BASE_SECONDS, MAX_BONUS, MOVE_BONUS, Engine, Round, matches, moves, canSwap, adjacent, specialKind };
});
