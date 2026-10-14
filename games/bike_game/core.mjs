export const VERSION = '2.0.0';
export const ROUTE_LENGTH = 6000;
export const STEP = 1 / 120;
export const LANES = [-0.75, -0.25, 0.25, 0.75];
export const SECTORS = ['강변 진입로', '빛의 터널', '도심 순환선'];
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
export class Ride {
  constructor(seed = Date.now()) { this.reset(seed); this.status = 'ready'; }
  reset(seed = Date.now()) {
    this.random = randomGenerator(seed); this.seed = seed;
    this.status = 'running'; this.time = 0; this.accumulator = 0;
    this.distance = 0; this.score = 0; this.speed = 80; this.maxSpeed = 80;
    this.x = 0; this.vx = 0; this.lean = 0; this.health = 3;
    this.boost = 35; this.boosting = false; this.boostLocked = false;
    this.combo = 0; this.comboTime = 0; this.maxCombo = 0;
    this.nearCount = 0; this.perfectCount = 0; this.passed = 0;
    this.sector = 0; this.invulnerable = 0; this.impact = 0;
    this.cars = []; this.events = []; this.nextId = 1; this.lastGap = 1;
    this.finishedBonus = 0;
    [62, 112, 174, 239, 310].forEach((z, i) => this.spawnRow(z, i < 2 ? 1 : 2));
  }
  emit(type, data = {}) { this.events.push({ type, ...data }); }
  drainEvents() { const events = this.events; this.events = []; return events; }
  pause() { if (this.status === 'running') { this.status = 'paused'; this.accumulator = 0; this.boosting = false; } }
  resume() { if (this.status === 'paused') { this.status = 'running'; this.accumulator = 0; } }
  spawnRow(z, desiredCount) {
    // Each traffic wave leaves an explicit escape lane; adjacent gaps stay reachable.
    const gap = clamp(this.lastGap + Math.floor(this.random() * 3) - 1, 0, 3);
    this.lastGap = gap;
    const available = [0, 1, 2, 3].filter(lane => lane !== gap);
    for (let i = available.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1));
      [available[i], available[j]] = [available[j], available[i]];
    }
    const count = desiredCount ?? (this.random() < .35 + this.sector * .15 ? 3 : 2);
    const rowSpeed = 92 + this.random() * 32;
    for (const lane of available.slice(0, Math.min(count, 3))) {
      const van = this.random() < .15;
      this.cars.push({ id: this.nextId++, lane, x: LANES[lane], z: z + this.random() * 9,
        speed: rowSpeed, baseSpeed: rowSpeed, halfWidth: van ? .133 : .115,
        length: van ? 5.3 : 4.5, color: Math.floor(this.random() * 6), van,
        scored: false, crashed: false, minGap: Infinity, nearEligible: false,
        signal: 0, signalTime: 0, changing: false, changed: false, targetLane: lane,
        canChange: this.sector > 0 && this.random() < .2, groupGap: gap });
    }
  }
  advance(seconds, input = {}) {
    if (this.status !== 'running') { this.accumulator = 0; return; }
    this.accumulator += clamp(seconds, 0, .25);
    while (this.accumulator + 1e-10 >= STEP && this.status === 'running') {
      this.tick(STEP, input); this.accumulator = Math.max(0, this.accumulator - STEP);
    }
  }
  hit(car = null) {
    if (this.invulnerable > 0 || this.status !== 'running') return;
    this.health--; this.combo = 0; this.comboTime = 0; this.boost = Math.max(0, this.boost - 20);
    this.speed = Math.max(65, this.speed * .53); this.vx *= .2;
    this.invulnerable = 2.2; this.impact = 1;
    if (car) { car.crashed = true; car.scored = true; }
    this.emit('hit', { health: this.health });
    if (this.health <= 0) { this.status = 'crashed'; this.boosting = false; this.emit('finish', { completed: false }); }
  }
  reward(car) {
    if (car.scored || car.crashed) return;
    car.scored = true; this.passed++;
    if (car.nearEligible && car.minGap >= 0 && car.minGap <= .075) {
      const perfect = car.minGap < .035;
      this.combo = Math.min(10, this.combo + 1); this.comboTime = 5;
      this.maxCombo = Math.max(this.maxCombo, this.combo);
      this.nearCount++; if (perfect) this.perfectCount++;
      const points = (perfect ? 250 : 150) * this.combo;
      this.score += points; this.boost = Math.min(100, this.boost + (perfect ? 22 : 16));
      this.emit('near', { perfect, points, combo: this.combo });
    } else { this.score += 30; }
  }
  tick(dt, input) {
    this.time += dt; this.invulnerable = Math.max(0, this.invulnerable - dt);
    this.impact = Math.max(0, this.impact - dt * 2.4);
    this.comboTime = Math.max(0, this.comboTime - dt);
    if (this.comboTime === 0) this.combo = 0;
    if (!input.boost) this.boostLocked = false;
    const canBoost = input.boost && !input.brake && this.boost > 0 && !this.boostLocked;
    if (canBoost && !this.boosting) this.emit('boost');
    this.boosting = !!canBoost;
    if (this.boosting) {
      this.boost = Math.max(0, this.boost - 21 * dt);
      if (this.boost === 0) this.boostLocked = true;
    } else if (this.boost < 20) this.boost = Math.min(20, this.boost + dt * 1.5);
    let targetSpeed = input.brake ? 78 : this.boosting ? 252 : input.accelerate ? 206 : 164;
    if (Math.abs(this.x) > .91) targetSpeed *= .75;
    this.speed = approach(this.speed, targetSpeed, input.brake ? 3 : this.boosting ? 1.5 : .8, dt);
    this.maxSpeed = Math.max(this.maxSpeed, this.speed);
    const oldX = this.x;
    const steer = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    this.vx = approach(this.vx, steer * (this.boosting ? 1.15 : 1.02), 11, dt);
    // The rider keeps momentum as the road bends: counter-steer gently into a curve.
    const curvePull = Math.cos(this.distance / 740) * .065 * Math.pow(this.speed / 164, 1.35) * clamp((this.distance - 180) / 220, 0, 1);
    this.x = clamp(this.x + (this.vx - curvePull) * dt, -1.04, 1.04);
    this.lean = approach(this.lean, steer * .32 + this.vx * .06, 9, dt);
    if (Math.abs(this.x) > .985) { this.hit(); this.x = Math.sign(this.x) * .965; }
    if (this.status !== 'running') return;
    const travel = this.speed / 3.6 * dt;
    this.distance += travel; this.score += travel * .4;
    const sector = Math.min(2, Math.floor(this.distance / 2000));
    if (sector !== this.sector) {
      this.sector = sector;
      const repaired = this.health < 3; this.health = Math.min(3, this.health + 1);
      this.boost = Math.min(100, this.boost + 20);
      this.emit('sector', { sector, repaired });
    }
    for (const car of this.cars) {
      let safeSpeed = car.baseSpeed;
      for (const front of this.cars) {
        if (front === car || front.crashed || Math.abs(front.x - car.x) > .28) continue;
        if (front.z > car.z && front.z - car.z < 18) safeSpeed = Math.min(safeSpeed, front.speed);
      }
      car.speed = approach(car.speed, safeSpeed, 3, dt);
      const oldZ = car.z, oldCarX = car.x;
      car.z += (car.speed - this.speed) / 3.6 * dt;
      const closingSpeed = (this.speed - car.speed) / 3.6;
      const approachTime = closingSpeed > 1 ? car.z / closingSpeed : 99;
      if (car.canChange && !car.changed && !car.signal && approachTime < 2.9 && approachTime > 2.4) {
        const direction = this.random() < .5 ? -1 : 1;
        const target = clamp(car.lane + direction, 0, 3);
        if (target !== car.lane && this.laneClear(car, target, 36)) {
          car.targetLane = target; car.signal = Math.sign(target - car.lane); car.signalTime = 1.6;
        }
        car.changed = true;
      }
      if (car.signal) {
        car.signalTime -= dt;
        if (car.signalTime <= 0) {
          if (this.laneClear(car, car.targetLane, 24) && (car.z > 8 || car.changing)) {
            car.changing = true;
            car.x = approach(car.x, LANES[car.targetLane], 1.6, dt);
            if (Math.abs(car.x - LANES[car.targetLane]) < .006) {
              car.x = LANES[car.targetLane]; car.lane = car.targetLane; car.signal = 0; car.changing = false;
            }
          } else if (!car.changing) car.signal = 0;
        }
      }
      const overlapZ = Math.min(oldZ, car.z) < car.length / 2 + 1.2 && Math.max(oldZ, car.z) > -car.length / 2 - 1.2;
      const dx0 = oldX - oldCarX, dx1 = this.x - car.x;
      const minimumDx = dx0 * dx1 <= 0 ? 0 : Math.min(Math.abs(dx0), Math.abs(dx1));
      const gap = minimumDx - (.043 + car.halfWidth);
      if (overlapZ && !car.crashed) {
        if (this.invulnerable > 0) car.scored = true;
        else if (gap < 0) this.hit(car);
        else { car.minGap = Math.min(car.minGap, gap); car.nearEligible ||= this.speed >= 115; }
      }
      if (oldZ >= -6 && car.z < -6) this.reward(car);
      if (this.status !== 'running') return;
    }
    this.cars = this.cars.filter(car => car.z > -24 && car.z < 650 && !car.crashed);
    const farthest = this.cars.reduce((max, car) => Math.max(max, car.z), 0);
    if (farthest < 260) this.spawnRow(Math.max(320, farthest + 70));
    if (this.distance >= ROUTE_LENGTH) {
      this.distance = ROUTE_LENGTH;
      this.finishedBonus = 2500 + this.health * 500;
      this.score += this.finishedBonus; this.status = 'finished'; this.boosting = false;
      this.emit('finish', { completed: true });
    }
  }
  laneClear(car, lane, gap) {
    return !this.cars.some(other => other !== car && !other.crashed && Math.abs(other.z - car.z) < gap &&
      (Math.abs(other.x - LANES[lane]) < .33 || (other.signal && other.targetLane === lane)));
  }
}
