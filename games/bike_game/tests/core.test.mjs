import test from 'node:test';
import assert from 'node:assert/strict';
import { Ride, STEER_SPEED, PLAYER_HALF_WIDTH, CLOSING_SPEED, encounterWindow } from '../core.mjs';
const run = (ride, seconds, input = {}, fps = 60) => { for (let f=0; f<Math.round(seconds*fps); f++) ride.advance(1/fps,input); return ride; };
const openRoad = () => { const r=new Ride(1);r.reset(1);r.cars=[];r.gates=[];r.generateAhead=()=>{};return r; };
function fixtureCar(r,x,at=.3) {
 const car={id:1,gateId:1,at,baseX:x,x,offsetZ:0,z:at*CLOSING_SPEED,halfWidth:.12,length:5.2,color:0,van:false,kind:'weave',side:1,shift:0,signal:0,changing:false,scored:false,minGap:Infinity,minSide:0};
 r.cars=[car];return car;
}
function followRoad(r, seconds, fps=60) {
 for(let f=0;f<seconds*fps&&r.status==='running';f++){
  const g=r.gates.find(g=>g.at+encounterWindow(g)>r.time),dx=(g?.center??r.x)-r.x;
  r.advance(1/fps,{left:dx<.0-.008,right:dx>.008});r.drainEvents();
 }
 return r;
}
test('title remains stationary until start',()=>{const r=new Ride(6);run(r,10);assert.equal(r.time,0);assert.equal(r.distance,0);});
test('left and right steering are symmetric and stop immediately',()=>{const a=openRoad(),b=openRoad();run(a,.3,{left:true});run(b,.3,{right:true});assert.ok(Math.abs(a.x+b.x)<1e-9);assert.ok(Math.abs(b.x-.3*STEER_SPEED)<1e-9);const x=b.x;run(b,.5);assert.equal(b.x,x);assert.equal(b.vx,0);});
test('opposed inputs are neutral',()=>{const r=openRoad();run(r,1,{left:true,right:true});assert.equal(r.x,0);});
test('old accelerator, brake and boost inputs have no effect',()=>{const a=openRoad(),b=openRoad();run(a,10);run(b,10,{accelerate:true,brake:true,boost:true});assert.equal(a.distance,b.distance);assert.equal(a.speed,b.speed);assert.equal(a.score,b.score);assert.equal('boost' in b,false);});
test('road curvature never pushes the rider sideways',()=>{const r=openRoad();run(r,50);assert.equal(r.x,0);assert.equal(r.status,'running');});
test('30, 60 and 120 Hz agree on first collision and traffic',()=>{const rides=[30,60,120].map(fps=>{const r=new Ride(7);r.reset(7);run(r,8,{},fps);return r;});for(const r of rides.slice(1)){assert.equal(r.time,rides[0].time);assert.equal(r.score,rides[0].score);assert.deepEqual(r.cars,rides[0].cars);assert.deepEqual(r.failure,rides[0].failure);}});
test('one traffic collision ends the run exactly once',()=>{const r=openRoad();fixtureCar(r,0);run(r,1);assert.equal(r.status,'crashed');assert.equal(r.drainEvents().filter(e=>e.type==='finish').length,1);const score=r.score,time=r.time;run(r,10,{right:true});assert.equal(r.score,score);assert.equal(r.time,time);assert.deepEqual(r.drainEvents(),[]);});
test('rail contact is a terminal collision with a clear side',()=>{const r=openRoad();run(r,2,{left:true});assert.equal(r.status,'crashed');assert.deepEqual(r.failure,{kind:'rail',side:'left'});});
test('passing a car safely rewards it once',()=>{const r=openRoad();fixtureCar(r,.5);run(r,1);assert.equal(r.status,'running');assert.equal(r.passed,1);assert.equal(r.nearCount,0);const s=r.score;run(r,1);assert.ok(Math.abs(r.score-s-5)<1e-7);});
test('near miss rewards precise steering and builds combo',()=>{const r=openRoad();fixtureCar(r,.20);run(r,1);assert.equal(r.nearCount,1);assert.equal(r.combo,1);assert.ok(r.score>=120);});
test('perfect clearance scores above a normal near miss',()=>{const a=openRoad(),b=openRoad();fixtureCar(a,.18);fixtureCar(b,.20);run(a,1);run(b,1);assert.ok(a.score>b.score);assert.equal(a.status,'running');});
test('hitting a car never earns its near-miss points',()=>{const r=openRoad();fixtureCar(r,.13);run(r,1);assert.equal(r.status,'crashed');assert.equal(r.nearCount,0);assert.equal(r.passed,0);});
test('threading both sides of a tight gap earns one double split',()=>{const r=openRoad();r.makeGate(.4,0,.30,'weave');run(r,1);assert.equal(r.status,'running');assert.equal(r.cleared,1);assert.equal(r.doubleCount,1);const combo=r.combo;run(r,1);assert.equal(r.doubleCount,1);assert.equal(r.combo,combo);});
test('combo expires without further precision passes',()=>{const r=openRoad();fixtureCar(r,.20);run(r,1);run(r,5);assert.equal(r.combo,0);});
test('combo is capped at ten',()=>{const r=openRoad();for(let i=0;i<20;i++)r.reward({scored:false,minGap:.02});assert.equal(r.combo,10);assert.equal(r.maxCombo,10);});
test('pause freezes pattern timing and resuming keeps the same encounter',()=>{const r=new Ride(3);r.reset(3);run(r,.5);r.pause();const state=JSON.stringify([r.time,r.score,r.comboTime,r.cars]);run(r,15,{right:true});assert.equal(JSON.stringify([r.time,r.score,r.comboTime,r.cars]),state);r.resume();run(r,.2);assert.ok(r.time>.5);});
test('same seed replays exactly the same opening after a crash',()=>{const r=new Ride(15);r.reset(15);const initial=JSON.stringify(r.cars);run(r,7);r.reset(15);assert.equal(JSON.stringify(r.cars),initial);assert.equal(r.score,0);assert.equal(r.cleared,0);assert.equal(r.failure,null);assert.equal(r.status,'running');});
test('changing seed changes the road',()=>{const a=new Ride(13),b=new Ride(14);assert.notDeepEqual(a.cars,b.cars);});
test('the next pair has no common fixed safe corridor',()=>{for(let seed=1;seed<100;seed++){const r=new Ride(seed),[a,b]=r.gates;const safeA=(a.width-2*PLAYER_HALF_WIDTH)/2,safeB=(b.width-2*PLAYER_HALF_WIDTH)/2;assert.ok(Math.abs(a.center-b.center)>safeA+safeB+.02);}});
test('merge signals precede movement by at least a second',()=>{const r=openRoad();r.makeGate(5,0,.34,'merge');const c=r.cars.find(c=>c.shift);run(r,1.8);assert.notEqual(c.signal,0);assert.equal(c.x,c.baseX);run(r,1);assert.equal(c.x,c.baseX);run(r,.3);assert.notEqual(c.x,c.baseX);});
test('the final opening of a merge remains traversable throughout movement',()=>{const r=openRoad();r.makeGate(3,0,.32,'merge');run(r,4);assert.equal(r.status,'running');assert.equal(r.cleared,1);});
test('truck encounters have larger, longer silhouettes',()=>{const r=openRoad();const g=r.makeGate(3,0,.34,'truck');assert.ok(g.cars.every(c=>c.van&&c.length===8));assert.ok(Math.max(...g.cars.map(c=>c.halfWidth))>.2);});
test('the route continues beyond the old six-kilometer finish',()=>{const r=new Ride(9);r.reset(9);followRoad(r,150);assert.equal(r.status,'running');assert.ok(r.distance>7000);assert.ok(r.cleared>50);});
test('large elapsed-time gaps are bounded',()=>{const r=openRoad();r.advance(60);assert.ok(r.time<=.251);});
