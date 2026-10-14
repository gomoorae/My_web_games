import assert from 'node:assert/strict';
import { Ride, LANES } from '../core.mjs';
const runs=[];
for(const mode of ['idle','steering'])for(let seed=1;seed<=24;seed++){
  const ride=new Ride(seed);ride.reset(seed);let target=0,peakCars=0;
  for(let frame=0;frame<190*60&&ride.status==='running';frame++){
    if(mode==='steering'&&frame%6===0){
      let best=Infinity;
      for(let x=-.84;x<=.84;x+=.04){
        let cost=Math.abs(x-ride.x)*6+Math.abs(x)*.3;
        for(const car of ride.cars){
          const relative=(ride.speed-car.speed)/3.6,ttc=relative>0?car.z/relative:99;
          const futureX=car.signal?(car.x+LANES[car.targetLane])*.5:car.x;
          if(car.z>-5&&ttc<3.8){const separation=Math.abs(x-futureX);if(separation<car.halfWidth+.07)cost+=100/(Math.max(.2,ttc)+.1);else if(separation<car.halfWidth+.11)cost-=.5;}
        }
        if(cost<best){best=cost;target=x;}
      }
    }
    const dx=target-ride.x-ride.vx*.065;
    ride.advance(1/60,mode==='idle'?{}:{left:dx<-.009,right:dx>.009,accelerate:true,boost:ride.boost>35&&Math.abs(dx)<.05});
    peakCars=Math.max(peakCars,ride.cars.length);
    assert.ok(Number.isFinite(ride.score));assert.ok(ride.boost>=0&&ride.boost<=100);assert.ok(ride.health>=0&&ride.health<=3);assert.ok(ride.cars.length<60);
    ride.drainEvents();
  }
  assert.notEqual(ride.status,'running','run did not terminate');
  runs.push({mode,seed,status:ride.status,distance:Math.round(ride.distance),near:ride.nearCount,health:ride.health,score:Math.floor(ride.score),seconds:Math.round(ride.time),peakCars});
}
const active=runs.filter(r=>r.mode==='steering'),idle=runs.filter(r=>r.mode==='idle');
assert.ok(active.filter(r=>r.status==='finished').length>=20,'valid routes should be navigable');
assert.ok(idle.filter(r=>r.status==='finished').length<=4,'idle input must not reliably clear the game');
console.log(JSON.stringify({activeCompleted:active.filter(r=>r.status==='finished').length,activeRuns:active.length,idleCompleted:idle.filter(r=>r.status==='finished').length,idleRuns:idle.length,maxCars:Math.max(...runs.map(r=>r.peakCars)),runs},null,2));
