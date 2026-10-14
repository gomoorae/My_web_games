import assert from 'node:assert/strict';
import {Ride,STEP,BIKE_SPEED,STEER_SPEED,STEER_RESPONSE,STEER_RELEASE,CURVE_PULL,roadTurn,approach,contact} from '../core.mjs';
// Offline route search: traffic is independent of player input. A found route is
// replayed in the real engine; this demonstrates existence, not human difficulty.
const seconds=120, ticksPerAction=12;
const reports=[];
for(let seed=1;seed<=12;seed++){
 const traffic=new Ride(seed);traffic.reset(seed);
 const frames=[];
 for(let i=0;i<seconds/STEP;i++){
  const outward=-roadTurn(i*BIKE_SPEED/3.6*STEP)*CURVE_PULL;
  traffic.time+=STEP;traffic.updateTraffic(STEP);
  frames.push({outward,cars:traffic.cars.filter(c=>Math.abs(c.z)<12).map(c=>({...c}))});
  traffic.pruneTraffic();traffic.ensureTraffic();traffic.drainEvents();
 }
 let nodes=[{x:0,vx:0,parent:null,steer:0}],levels=0,peak=0;
 for(let base=0;base<frames.length;base+=ticksPerAction){
  const next=new Map();
  for(const parent of nodes)for(const steer of [-1,0,1]){
   let {x,vx}=parent,valid=true;
   for(let k=0;k<ticksPerAction;k++){
    const frame=frames[base+k],response=!steer?STEER_RELEASE:vx*steer<0?20:STEER_RESPONSE;
    vx=approach(vx,steer*STEER_SPEED,response,STEP);
    if(!steer&&Math.abs(vx)<.004)vx=0;
    x+=(vx+frame.outward)*STEP;
    if(Math.abs(x)>.945||frame.cars.some(c=>contact(c,x).hit)){valid=false;break;}
   }
   if(valid){const key=Math.round(x/.025)+':'+Math.round(vx/.1);if(!next.has(key))next.set(key,{x,vx,parent,steer});}
  }
  nodes=[...next.values()];peak=Math.max(peak,nodes.length);levels++;
  if(!nodes.length)break;
 }
 if(!nodes.length){reports.push({seed,found:false,seconds:levels*.1});continue;}
 const actions=[];let node=nodes.reduce((a,b)=>Math.abs(a.x)<Math.abs(b.x)?a:b);
 while(node.parent){actions.push(node.steer);node=node.parent;}actions.reverse();
 const replay=new Ride(seed);replay.reset(seed);
 for(const steer of actions){replay.advance(ticksPerAction*STEP,{left:steer<0,right:steer>0});replay.drainEvents();}
 assert.equal(replay.status,'running','Route failed real-engine replay for seed '+seed);
 assert.ok(replay.time>=seconds-.001);
 reports.push({seed,found:true,replaySeconds:Number(replay.time.toFixed(2)),passed:replay.passed,mergeStarts:replay.mergeStarts,peakSearchStates:peak});
}
assert.equal(reports.filter(r=>r.found).length,12,'Route audit incomplete; inspect the reported seed');
console.log(JSON.stringify({secondsPerRoute:seconds,roads:reports.length,completed:reports.filter(r=>r.found).length,limits:'Search has full future traffic knowledge; it does not represent human reaction time or guarantee all seeds.',reports},null,2));
