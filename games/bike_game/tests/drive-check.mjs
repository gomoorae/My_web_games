import assert from 'node:assert/strict';
import { Ride, encounterWindow } from '../core.mjs';
const stats={fixed:{runs:0,survived:0,longest:0},periodic:{runs:0,survived:0,longest:0},reachable:{runs:0,survived:0,shortest:180},peakCars:0,peakGates:0};
function trial(mode,seed,targetOrPeriod,phase=0){
 const r=new Ride(seed);r.reset(seed);
 if(mode==='fixed')r.x=targetOrPeriod;
 const duration=mode==='reachable'?180:45;
 for(let frame=0;frame<duration*60&&r.status==='running';frame++){
  let target=r.x;
  if(mode==='periodic')target=.60*Math.sin(r.time/targetOrPeriod*Math.PI*2+phase);
  if(mode==='reachable')target=r.gates.find(g=>g.at+encounterWindow(g)>r.time)?.center??r.x;
  const dx=target-r.x;
  r.advance(1/60,mode==='fixed'?{}:{left:dx<-.008,right:dx>.008});
  assert.ok(Number.isFinite(r.score));assert.ok(r.combo>=0&&r.combo<=10);
  stats.peakCars=Math.max(stats.peakCars,r.cars.length);stats.peakGates=Math.max(stats.peakGates,r.gates.length);
  r.drainEvents();
 }
 const s=stats[mode];s.runs++;s.survived+=r.status==='running'?1:0;
 if(mode==='reachable')s.shortest=Math.min(s.shortest,r.time);else s.longest=Math.max(s.longest,r.time);
 return r;
}
// Keep a fixed road-relative position, including lane markings and shoulders.
for(let seed=1;seed<=24;seed++)for(let i=0;i<=36;i++)trial('fixed',seed,-.90+i*.05);
// Blind left-right rhythms cannot follow changing gaps and varied encounter spacing.
for(let seed=1;seed<=24;seed++)for(const period of [1.5,2.5,3.5,4.5,6])for(const phase of [0,Math.PI/2])trial('periodic',seed,period,phase);
// This path oracle validates physical reachability, not human difficulty or fun.
for(let seed=1;seed<=60;seed++){const r=trial('reachable',seed);assert.equal(r.status,'running','Unreachable route at seed '+seed+' / '+r.time);}
assert.equal(stats.fixed.survived,0);assert.ok(stats.fixed.longest<7);
assert.equal(stats.periodic.survived,0);assert.ok(stats.periodic.longest<30);
assert.equal(stats.reachable.survived,60);assert.ok(stats.peakCars<70);assert.ok(stats.peakGates<10);
console.log(JSON.stringify(stats,null,2));
