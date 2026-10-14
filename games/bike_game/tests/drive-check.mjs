import assert from 'node:assert/strict';
import{Ride,STEP,LANES,ROAD_HALF_METERS}from'../core.mjs';
function bodiesOverlap(a,b){
 const dx=(b.x-a.x)*ROAD_HALF_METERS,dz=b.z-a.z;
 const axes=c=>[[Math.cos(c.yaw),-Math.sin(c.yaw)],[Math.sin(c.yaw),Math.cos(c.yaw)]];
 const aa=axes(a),ba=axes(b),dot=(x,y)=>x[0]*y[0]+x[1]*y[1];
 for(const axis of [...aa,...ba]){
  const ra=a.width/2*Math.abs(dot(axis,aa[0]))+a.length/2*Math.abs(dot(axis,aa[1]));
  const rb=b.width/2*Math.abs(dot(axis,ba[0]))+b.length/2*Math.abs(dot(axis,ba[1]));
  if(Math.abs(dx*axis[0]+dz*axis[1])>=ra+rb-.04)return false;
 }
 return true;
}
const result={roads:32,secondsPerRoad:90,mergeStarts:0,mergeCompletions:0,activeAtEnd:0,peakCars:0,types:{},passiveSamples:[]};
for(let seed=1;seed<=32;seed++){
 const r=new Ride(seed);r.reset(seed);
 for(let frame=0;frame<90/STEP;frame++){
  const before=new Map(r.cars.filter(c=>c.change).map(c=>[c.id,{x:c.x,target:c.change.to}]));
  r.time+=STEP;r.updateTraffic(STEP);
  for(const car of r.cars){
   if(!car.change)assert.equal(car.x,LANES[car.lane]);
   const previous=before.get(car.id);
   if(previous&&car.change){assert.ok(Math.abs(car.x-previous.x)>0);assert.ok(Math.abs(car.x-previous.target)<Math.abs(previous.x-previous.target));}
   {result.types[car.kind]=true;for(const other of r.cars){if(car.id>=other.id||Math.abs(car.z-other.z)>20||Math.abs(car.x-other.x)>.65)continue;assert.equal(bodiesOverlap(car,other),false,'Traffic body overlap: seed '+seed+' at '+r.time);}}
  }
  r.cars=r.cars.filter(c=>c.z>-c.length-24);r.ensureTraffic();r.drainEvents();
  result.peakCars=Math.max(result.peakCars,r.cars.length);
  assert.ok(r.cars.length<36);
 }
 const active=r.cars.filter(c=>c.change).length;
 assert.equal(r.mergeStarts-r.mergeCompletions,active,'A lane change disappeared without completion');
 result.mergeStarts+=r.mergeStarts;result.mergeCompletions+=r.mergeCompletions;result.activeAtEnd+=active;
}
// Observe passive survival as a diagnostic, without manufacturing a forced opening or a wall.
for(const x of[-.5,0,.5]){
 let survivors=0,total=0;
 for(let seed=1;seed<=24;seed++){const r=new Ride(seed);r.reset(seed);r.x=x;for(let frame=0;frame<90*60&&r.status==='running';frame++)r.advance(1/60);survivors+=r.status==='running'?1:0;total+=r.time;}
 result.passiveSamples.push({x,runs:24,survivors90Seconds:survivors,averageSeconds:Number((total/24).toFixed(2))});
}
assert.equal(Object.keys(result.types).length,4);assert.ok(result.mergeStarts>500);
console.log(JSON.stringify(result,null,2));
