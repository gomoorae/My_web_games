const { Game, W, R, STEP } = require('../engine.js');
const assert = require('node:assert/strict');
function rng(seed) { return () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296); }
function folded(x) { const width = W - R * 2, period = width * 2; let p = ((x - R) % period + period) % period; return R + (p <= width ? p : period - p); }
function steer(g) {
  const p = g.paddle;
  const descending = g.balls.filter(b => b.vy > 0 && b.y < p.y).sort((a, b) => (p.y - a.y) / a.vy - (p.y - b.y) / b.vy);
  const ball = descending[0];
  const urgent = ball ? (p.y - R - ball.y) / ball.vy : Infinity;
  const drop = g.drops.filter(d => d.y < p.y + 8).sort((a, b) => b.y - a.y)[0];
  if (drop && (urgent > .55 || Math.abs(drop.x - p.x) < 50 && urgent > .25)) return drop.x;
  if (!ball) return g.balls[0]?.x ?? W / 2;
  const impact = folded(ball.x + ball.vx * urgent);
  let offset = 0;
  if (g.remaining > 3) {
    const target = g.bricks.filter(b => b.hp > 0).sort((a, b) => {
      const cost = b => Math.abs(b.x + b.w / 2 - impact) + (b.kind === 'bomb' ? -80 : 0) - b.y * .2;
      return cost(a) - cost(b);
    })[0];
    const angle = Math.atan2(target.x + target.w / 2 - impact, p.y - R - target.y - target.h);
    offset = Math.max(-.7, Math.min(.7, angle / 1.1)) * p.w / 2;
  }
  return impact - offset;
}
const report = [];
for (const height of [560, 760, 1040]) for (const seed of [3, 11, 31]) {
  const g = new Game({ random: rng(seed), height }); const stages = [];
  let ticks = 0, previousBroken = 0, idle = 0, longestIdle = 0;
  while (!['won', 'lost'].includes(g.state) && ticks < 120 * 1800) {
    if (g.state === 'ready') g.launch();
    if (g.state === 'clear') { stages.push({ stage: g.stageIndex + 1, seconds: Math.round(g.stageTime), lives: g.lives }); g.nextStage(); }
    g.setTarget(steer(g)); g.step(STEP); ticks++;
    if (g.totalBroken === previousBroken && g.state === 'playing') idle += STEP;
    else { longestIdle = Math.max(longestIdle, idle); idle = 0; previousBroken = g.totalBroken; }
    if (ticks % 1200 === 0) g.takeEvents();
    for (const ball of g.balls) assert.ok(Number.isFinite(ball.x + ball.y + ball.vx + ball.vy), 'non-finite ball');
    assert.ok(g.balls.length <= 9);
  }
  if (g.state === 'won') stages.push({ stage: 10, seconds: Math.round(g.stageTime), lives: g.lives });
  const result = { height, seed, state: g.state, stage: g.stageIndex + 1, score: g.score, totalSeconds: Math.round(g.totalTime), remaining: g.remaining, longestIdle: Math.round(Math.max(longestIdle, idle)), stages };
  report.push(result); console.log(JSON.stringify(result));
}
assert.ok(report.every(r => r.state === 'won'), 'Some campaigns did not finish; inspect their stage and duration.');
console.log('PLAYTHROUGH_OK: nine seeded campaigns, 90 completed stages, desktop and two portrait arenas.');
