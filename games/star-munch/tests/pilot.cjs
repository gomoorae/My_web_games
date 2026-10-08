// QA only: plan a landing by simulating actual fixed-step physics, then use
// binary left / right / release input. Never grants jumps, items or immunity.
const { World, C } = require('../src/engine.js');
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
function steering(player, targetX) {
  const desired = clamp((targetX - player.x) * 9, -C.moveSpeed, C.moveSpeed);
  return Math.abs(desired - player.vx) < 18 ? 0 : Math.sign(desired - player.vx);
}
function probe(world, id, delay, initialAxis = 0) {
  const w = Object.assign(Object.create(World.prototype), world, {
    player: { ...world.player }, objects: world.objects.map(o => ({ ...o })),
    events: [], generatedY: 1e9, random: () => .5
  });
  const layer = w.lastStepLayer;
  for (let t = 0; t < 1.7; t += C.fixedStep) {
    const target = w.objects.find(o => o.id === id);
    if (!target || w.phase !== 'playing') return false;
    w.update(C.fixedStep, { axis: t < delay ? initialAxis : steering(w.player, target.x) });
    const events = w.takeEvents();
    if (events.some(e => e.type === 'hit' || e.type === 'shieldBreak')) return false;
    if (w.lastStepLayer > layer) return true;
  }
  return false;
}
class Pilot {
  constructor() { this.plan = null; this.lastLayer = -2; this.wasBoost = false; this.failedPlans = 0; }
  axis(w) {
    if (w.player.boost > 0) {
      this.wasBoost = true;
      const next = w.objects.find(o => o.kind === 'boost' && !o.collected && o.y > w.player.y + 45);
      return steering(w.player, next ? next.x : w.boostRoute.endX);
    }
    if (!this.plan || this.lastLayer !== w.lastStepLayer || this.wasBoost) {
      this.lastLayer = w.lastStepLayer; this.wasBoost = false;
      const targets = w.objects.filter(o => o.step && o.layer > w.lastStepLayer).sort((a, b) => a.layer - b.layer || Number(b.primary) - Number(a.primary));
      const nextLayer = targets[0]?.layer;
      this.plan = null;
      for (const target of targets.filter(o => o.layer === nextLayer)) {
        for (const delay of [0, .12, .18, .24, .3, .36, .44]) {
          if (probe(w, target.id, delay)) { this.plan = { id: target.id, until: w.time + delay, initialAxis: 0 }; break; }
        }
        if (!this.plan) for (const delay of [.12, .22, .3]) {
          const away = -Math.sign(target.x - w.player.x);
          if (probe(w, target.id, delay, away)) { this.plan = { id: target.id, until: w.time + delay, initialAxis: away }; break; }
        }
        if (this.plan) break;
      }
      if (!this.plan && targets[0]) { this.failedPlans++; this.plan = { id: targets[0].id, until: w.time }; }
    }
    const target = w.objects.find(o => o.id === this.plan?.id);
    return !target ? 0 : w.time < this.plan.until ? this.plan.initialAxis : steering(w.player, target.x);
  }
}
module.exports = { Pilot, steering };
