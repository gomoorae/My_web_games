export const VERSION = '3.0.0-alpha.1';
export const STEP = 1 / 120;
export const STEER_SPEED = 1.35;
export const PLAYER_HALF_WIDTH = .049;
export const PLAYER_HALF_LENGTH = 1.15;
export const CLOSING_SPEED = 31;
export const VISIBLE_DISTANCE = 220;
export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
export const approach = (v, target, rate, dt) => v + (target - v) * (1 - Math.exp(-rate * dt));
export function randomGenerator(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = Math.imul(value ^ value >>> 15, 1 | value);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const smooth = v => { const t = clamp(v, 0, 1); return t * t * (3 - 2 * t); };
export const collisionHalfWidth = car => Math.max(.06, car.halfWidth - .012);
export const encounterWindow = gate => gate.kind === 'truck' ? .28 : .23;

export class Ride {
  constructor(seed = Date.now()) { this.reset(seed); this.status = 'ready'; }
  reset(seed = Date.now()) {
    this.seed = seed >>> 0; this.random = randomGenerator(this.seed);
    this.status = 'running'; this.time = 0; this.accumulator = 0;
    this.distance = 0; this.speed = 180; this.score = 0;
    this.x = 0; this.vx = 0; this.lean = 0; this.impact = 0;
    this.combo = 0; this.comboTime = 0; this.maxCombo = 0;
    this.nearCount = 0; this.doubleCount = 0; this.passed = 0; this.cleared = 0;
    this.sector = 0; this.cars = []; this.gates = []; this.events = [];
    this.nextId = 1; this.nextGateId = 1; this.nextAt = 3.4;
    this.lastCenter = 0; this.lastWidth = .44; this.patternIndex = 0; this.bag = [];
    this.failure = null;
    this.generateAhead();
  }
  emit(type, data = {}) { this.events.push({ type, ...data }); }
  drainEvents() { const result = this.events; this.events = []; return result; }
  pause() { if (this.status === 'running') { this.status = 'paused'; this.accumulator = 0; this.vx = 0; } }
  resume() { if (this.status === 'paused') { this.status = 'running'; this.accumulator = 0; } }
  advance(seconds, input = {}) {
    if (this.status !== 'running') { this.accumulator = 0; return; }
    this.accumulator += clamp(seconds, 0, .25);
    while (this.accumulator + 1e-10 >= STEP && this.status === 'running') {
      this.tick(STEP, input);
      this.accumulator = Math.max(0, this.accumulator - STEP);
    }
  }
  nextPattern() {
    if (this.patternIndex < 2) return 'weave';
    if (!this.bag.length) {
      this.bag = ['weave', 'merge', 'truck'];
      for (let i = 2; i > 0; i--) {
        const j = Math.floor(this.random() * (i + 1));
        [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
      }
    }
    return this.bag.pop();
  }
  generateAhead() {
    while (this.nextAt - this.time < 8.5) {
      const kind = this.nextPattern();
      const count = kind === 'merge' ? 1 : 2;
      for (let i = 0; i < count; i++) {
        const width = this.nextGateId <= 2 ? .46 : Math.max(.30, .43 - this.nextAt / 520);
        const options = kind === 'merge' ? [-.38, 0, .38] : [-.52, -.26, 0, .26, .52];
        const separation = (this.lastWidth + width) / 2 - PLAYER_HALF_WIDTH * 2 + .045;
        let candidates = options.filter(x => Math.abs(x - this.lastCenter) > separation);
        if (!candidates.length) candidates = [this.lastCenter >= 0 ? options[0] : options.at(-1)];
        const center = candidates[Math.floor(this.random() * candidates.length)];
        this.makeGate(this.nextAt, center, width, kind);
        this.lastCenter = center; this.lastWidth = width;
        const travel = Math.abs(center - (this.gates.at(-2)?.center ?? 0)) / STEER_SPEED;
        // Leave time to exit the previous encounter, steer, and settle before the next.
        const interval = Math.max(1.85, travel + .95) + this.random() * .32;
        this.nextAt += interval;
      }
      this.patternIndex++;
      if (this.patternIndex % 3 === 0) this.nextAt += .65;
    }
  }
  makeGate(at, center, width, kind) {
    const id = this.nextGateId++;
    const direction = kind === 'merge' ? (this.random() < .5 ? -1 : 1) : 0;
    const shift = direction * .24;
    const initialWidth = width + Math.abs(shift);
    const initialCenter = center - shift / 2;
    const left = initialCenter - initialWidth / 2, right = initialCenter + initialWidth / 2;
    const gate = { id, at, center, width, kind, cleared: false, leftClose: false, rightClose: false, cars: [] };
    const addSide = (a, b, side) => {
      const span = b - a, seam = .022;
      const count = Math.max(1, Math.round(span / (kind === 'truck' ? .46 : .35)));
      const carWidth = (span - seam * (count - 1)) / count;
      for (let i = 0; i < count; i++) {
        const x = a + carWidth / 2 + i * (carWidth + seam);
        const offsetZ = (this.random() - .5) * 3;
        const car = {
          id: this.nextId++, gateId: id, at, baseX: x, x, offsetZ,
          z: (at - this.time) * CLOSING_SPEED + offsetZ,
          halfWidth: carWidth / 2, length: kind === 'truck' ? 8 : 5.2,
          color: Math.floor(this.random() * 6), van: kind === 'truck',
          kind, side, shift: 0, signal: 0, changing: false, scored: false,
          minGap: Infinity, minSide: 0,
        };
        gate.cars.push(car); this.cars.push(car);
      }
    };
    addSide(-1.015, left, -1); addSide(right, 1.015, 1);
    if (direction) {
      const movingSide = gate.cars.filter(car => car.side === -direction);
      const movingCar = direction > 0 ? movingSide.at(-1) : movingSide[0];
      movingCar.shift = shift;
    }
    this.gates.push(gate);
    return gate;
  }
  crash(car = null) {
    if (this.status !== 'running') return;
    this.status = 'crashed'; this.vx = 0; this.impact = 1;
    this.failure = { kind: car ? (car.van ? 'truck' : 'car') : 'rail', side: car ? (car.x < this.x ? 'left' : 'right') : (this.x < 0 ? 'left' : 'right') };
    this.emit('hit', this.failure); this.emit('finish', { ...this.failure });
  }
  reward(car) {
    if (car.scored) return;
    car.scored = true; this.passed++; this.score += 20;
    if (car.minGap <= .075) {
      const perfect = car.minGap < .027;
      this.combo = Math.min(10, this.combo + 1); this.comboTime = 4.5;
      this.maxCombo = Math.max(this.maxCombo, this.combo); this.nearCount++;
      const points = (perfect ? 180 : 100) * this.combo;
      this.score += points;
      this.emit('near', { perfect, points, combo: this.combo });
    }
  }
  tick(dt, input) {
    this.time += dt;
    this.comboTime = Math.max(0, this.comboTime - dt);
    if (this.comboTime === 0) this.combo = 0;
    const oldX = this.x;
    const steer = Number(!!input.right) - Number(!!input.left);
    this.vx = steer * STEER_SPEED;
    this.x = clamp(this.x + this.vx * dt, -.97, .97);
    this.lean = approach(this.lean, steer * .34, 15, dt);
    if (Math.abs(this.x) > .945) { this.crash(); return; }
    this.distance += this.speed / 3.6 * dt;
    this.score += dt * 5;
    for (const car of this.cars) {
      const oldZ = car.z, oldCarX = car.x;
      car.z = (car.at - this.time) * CLOSING_SPEED + car.offsetZ;
      const ttc = car.at - this.time;
      const movement = smooth((2.1 - ttc) / 1.0);
      car.x = car.baseX + car.shift * movement;
      car.signal = car.shift && ttc < 3.3 && ttc > .8 ? Math.sign(car.shift) : 0;
      car.changing = movement > 0 && movement < 1 && !!car.shift;
      const extent = car.length / 2 + PLAYER_HALF_LENGTH;
      const overlap = Math.min(oldZ, car.z) < extent && Math.max(oldZ, car.z) > -extent;
      if (overlap) {
        const dx0 = oldX - oldCarX, dx1 = this.x - car.x;
        const separation = dx0 * dx1 <= 0 ? 0 : Math.min(Math.abs(dx0), Math.abs(dx1));
        const gap = separation - PLAYER_HALF_WIDTH - collisionHalfWidth(car);
        if (gap < 0) { this.crash(car); return; }
        if (gap < car.minGap) { car.minGap = gap; car.minSide = Math.sign(dx1); }
        if (gap <= .14) {
          const gate = this.gates.find(g => g.id === car.gateId);
          if (gate) { if (dx1 > 0) gate.leftClose = true; else gate.rightClose = true; }
        }
      }
      if (!car.scored && car.z < -extent - 1) this.reward(car);
    }
    for (const gate of this.gates) {
      if (!gate.cleared && gate.cars.every(car => car.scored)) {
        gate.cleared = true; this.cleared++; this.score += 80;
        if (gate.leftClose && gate.rightClose) {
          this.doubleCount++; this.combo = Math.min(10, this.combo + 1); this.comboTime = 4.5;
          this.maxCombo = Math.max(this.maxCombo, this.combo);
          const points = 180 * this.combo; this.score += points;
          this.emit('double', { points, combo: this.combo });
        } else this.emit('pass', { cleared: this.cleared });
      }
    }
    this.cars = this.cars.filter(car => car.z > -28);
    this.gates = this.gates.filter(g => g.at > this.time - 1.5);
    this.generateAhead();
  }
}
