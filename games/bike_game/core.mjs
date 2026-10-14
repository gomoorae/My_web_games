export const VERSION = '3.0.0';
export const STEP = 1 / 120;
export const ROAD_HALF_METERS = 7;
export const LANES = [-.75, -.25, .25, .75];
export const STEER_SPEED = .92;
export const STEER_RESPONSE = 12;
export const STEER_RELEASE = 32;
export const CURVE_PULL = .085;
export const ROAD_RADIUS = 1700;
export const PLAYER_HALF_WIDTH = .049;
export const PLAYER_HALF_LENGTH = 1.15;
export const BIKE_SPEED = 225;
export const VISIBLE_DISTANCE = 260;
export const VEHICLES = Object.freeze({
  compact: Object.freeze({name:'경차',width:1.62,length:3.35,height:1.60,speed:[91,111],merge:[1.10,1.30],chance:.65}),
  sedan: Object.freeze({name:'승용차',width:1.98,length:4.70,height:1.46,speed:[78,99],merge:[1.15,1.40],chance:.58}),
  bus: Object.freeze({name:'버스',width:2.48,length:11.5,height:3.12,speed:[63,78],merge:[1.40,1.80],chance:.32}),
  truck: Object.freeze({name:'트럭',width:2.52,length:9.20,height:3.32,speed:[58,75],merge:[1.30,1.65],chance:.34}),
});
export const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
export const approach=(v,target,rate,dt)=>v+(target-v)*(1-Math.exp(-rate*dt));
export function randomGenerator(seed){let value=seed>>>0;return()=>{value+=0x6d2b79f5;let t=Math.imul(value^value>>>15,1|value);t^=t+Math.imul(t^t>>>7,61|t);return((t^t>>>14)>>>0)/4294967296;};}
// Shared by physics and rendering: straight lead-in, right bend, straight, left bend.
export function roadTurn(distance){
  const phase=Math.max(0,distance)%3000;
  const profile=(start,end,sign)=>{
    const t=clamp(Math.min((phase-start)/150,(end-phase)/150),0,1);
    return sign*t*t*(3-2*t);
  };
  return profile(260,1160,1)+profile(1520,2550,-.9);
}
export function roadOffset(distance,ahead){
  // Integrate curvature relative to the tangent at the bike. Eight midpoint slices
  // keep the preview continuous when a bend begins or ends inside the view.
  let offset=0;
  const step=ahead/8;
  for(let i=0;i<8;i++){const u=(i+.5)*step;offset+=(ahead-u)*roadTurn(distance+u)*step/ROAD_RADIUS;}
  return offset;
}
export const collisionHalfWidth=car=>car.halfWidth-.006;
export function vehiclePose(car,seconds=0){
  if(!car.change)return{x:car.x,z:car.z+(car.speed-BIKE_SPEED)/3.6*seconds};
  const change=car.change,p=clamp((change.elapsed+seconds)/change.duration,0,1);
  return{x:change.from+(change.to-change.from)*p,z:car.z+(car.speed-BIKE_SPEED)/3.6*seconds};
}
// Oriented vehicle body against the bike, in road meters. This covers the long body of a merging bus.
export function contact(car,playerX){
  const dx=(playerX-car.x)*ROAD_HALF_METERS,dz=-car.z;
  const c=Math.cos(car.yaw||0),s=Math.sin(car.yaw||0),ac=Math.abs(c),as=Math.abs(s);
  const cw=collisionHalfWidth(car)*ROAD_HALF_METERS,cl=car.length/2;
  const pw=PLAYER_HALF_WIDTH*ROAD_HALF_METERS,pl=PLAYER_HALF_LENGTH;
  const lateral=dx*c-dz*s,longitudinal=dx*s+dz*c;
  const playerAcross=pw*ac+pl*as,playerAlong=pw*as+pl*ac;
  const overlapZ=Math.abs(dz)<cw*as+cl*ac+pl;
  const overlapX=Math.abs(dx)<cw*ac+cl*as+pw;
  const along=Math.abs(longitudinal)<cl+playerAlong;
  const gap=(Math.abs(lateral)-cw-playerAcross)/ROAD_HALF_METERS;
  return{hit:overlapX&&overlapZ&&along&&gap<0,nearWindow:overlapZ&&along,gap,side:Math.sign(lateral)};
}
export class Ride {
  constructor(seed=Date.now()){this.reset(seed);this.status='ready';}
  reset(seed=Date.now()){
    this.seed=seed>>>0;this.random=randomGenerator(this.seed);this.status='running';
    this.time=0;this.accumulator=0;this.distance=0;this.speed=BIKE_SPEED;this.score=0;
    this.x=0;this.vx=0;this.lean=0;this.impact=0;this.sector=0;this.turn=0;this.curveDirection=0;
    this.combo=0;this.comboTime=0;this.maxCombo=0;this.nearCount=0;this.doubleCount=0;this.passed=0;
    this.cars=[];this.events=[];this.nextId=1;this.failure=null;this.crashCarId=null;
    this.nextMergeAt=2.2;this.mergeStarts=0;this.mergeCompletions=0;this.recentLeft=null;this.recentRight=null;
    for(let lane=0;lane<LANES.length;lane++){
      let z=64+this.random()*58+lane*9;
      while(z<325){const car=this.spawnCar(lane,z);z+=car.length+36+this.random()*53;}
    }
  }
  emit(type,data={}){this.events.push({type,...data});}
  drainEvents(){const events=this.events;this.events=[];return events;}
  pause(){if(this.status==='running'){this.status='paused';this.accumulator=0;this.vx=0;}}
  resume(){if(this.status==='paused'){this.status='running';this.accumulator=0;}}
  advance(seconds,input={}){
    if(this.status!=='running'){this.accumulator=0;return;}
    this.accumulator+=clamp(seconds,0,.25);
    while(this.accumulator+1e-10>=STEP&&this.status==='running'){
      this.tick(STEP,input);this.accumulator=Math.max(0,this.accumulator-STEP);
    }
  }
  spawnCar(lane,z,kind=null){
    if(!kind){const roll=this.random();kind=roll<.25?'compact':roll<.70?'sedan':roll<.85?'bus':'truck';}
    const model=VEHICLES[kind],cruise=model.speed[0]+this.random()*(model.speed[1]-model.speed[0]);
    const duration=model.merge[0]+this.random()*(model.merge[1]-model.merge[0]);
    const direction=lane===0?1:lane===3?-1:this.random()<.5?-1:1;
    const longCut=kind==='compact'&&this.random()<.14;
    const preferredLane=clamp(lane+direction*(longCut?2:1),0,3);
    const car={id:this.nextId++,lane,x:LANES[lane],z,kind,width:model.width,length:model.length,
      halfWidth:model.width/(2*ROAD_HALF_METERS),height:model.height,
      cruise,speed:cruise,color:Math.floor(this.random()*6),yaw:0,vx:0,
      change:null,signal:0,changing:false,wantsChange:this.random()<model.chance,
      attempted:false,preferredLane,changeDuration:duration,
      triggerRatio:.68+this.random()*.14,scored:false,minGap:Infinity,minSide:0};
    this.cars.push(car);return car;
  }
  pruneTraffic(){this.cars=this.cars.filter(car=>car.change||car.z>-car.length-24);}
  ensureTraffic(){
    for(let lane=0;lane<4;lane++){
      const members=this.cars.filter(c=>c.lane===lane||c.change?.targetLane===lane);
      const furthest=members.reduce((z,c)=>Math.max(z,c.z),0);
      if(furthest<222)this.spawnCar(lane,Math.max(275+this.random()*52,furthest+65));
    }
  }
  changePathClear(car,targetLane,duration){
    const target=LANES[targetLane];
    // Reserve the whole maneuver before starting; never freeze or reverse halfway through it.
    for(const other of this.cars){
      if(other===car)continue;
      for(let sample=0;sample<=12;sample++){
        const t=duration*sample/12,ownX=car.x+(target-car.x)*sample/12;
        const ownZ=car.z+(car.speed-BIKE_SPEED)/3.6*t,otherPose=vehiclePose(other,t);
        const lateralGap=Math.abs(ownX-otherPose.x)-car.halfWidth-other.halfWidth;
        const bumperGap=Math.abs(ownZ-otherPose.z)-(car.length+other.length)/2;
        if(lateralGap<.025&&bumperGap<9)return false;
      }
    }
    return true;
  }
  beginChange(car,targetLane,duration=car.changeDuration){
    if(car.change||targetLane===car.lane||targetLane<0||targetLane>3)return false;
    if(!this.changePathClear(car,targetLane,duration))return false;
    car.change={from:car.x,to:LANES[targetLane],targetLane,elapsed:0,duration};
    car.signal=Math.sign(LANES[targetLane]-car.x);car.changing=true;car.attempted=true;
    this.mergeStarts++;this.nextMergeAt=this.time+1.25+this.random()*.8;
    this.emit('laneChange',{id:car.id,from:car.lane,to:targetLane,kind:car.kind});
    return true;
  }
  scheduleChanges(){
    if(this.time<this.nextMergeAt||this.cars.filter(c=>c.change).length>=2)return;
    const eligible=this.cars.filter(car=>{
      if(!car.wantsChange||car.attempted||car.change||car.z<18)return false;
      const relative=(BIKE_SPEED-car.speed)/3.6,ttc=car.z/relative;
      const crossings=Math.abs(car.preferredLane-car.lane),duration=car.changeDuration*(crossings>1?1.55:1);
      const lower=Math.max(.82,duration*.55),upper=Math.max(lower+.10,duration*car.triggerRatio+.10);
      return ttc>=lower&&ttc<=upper;
    });
    if(!eligible.length)return;
    const car=eligible[Math.floor(this.random()*eligible.length)];
    const choices=[car.preferredLane,...[car.lane-1,car.lane+1].filter(l=>l>=0&&l<4&&l!==car.preferredLane)];
    for(const target of choices){
      const duration=car.changeDuration*(Math.abs(target-car.lane)>1?1.55:1);
      if(this.beginChange(car,target,duration))return;
    }
    car.attempted=true;
  }
  updateTraffic(dt){
    // Longitudinal following is independent per lane; cars do not share a row or a prescribed opening.
    const targets=this.cars.map(car=>{
      let target=car.cruise;
      for(const front of this.cars){
        if(front===car||front.z<=car.z||Math.abs(front.x-car.x)>front.halfWidth+car.halfWidth+.015)continue;
        const gap=front.z-car.z-(front.length+car.length)/2;
        const desired=7+car.speed/3.6*1.15;
        if(gap<desired+9)target=Math.min(target,Math.max(0,front.speed+(gap-desired)*2.5));
      }
      return target;
    });
    for(let i=0;i<this.cars.length;i++){
      const car=this.cars[i];car.speed=approach(car.speed,targets[i],3.4,dt);
      car.z+=(car.speed-BIKE_SPEED)/3.6*dt;
      if(car.change){
        const change=car.change;change.elapsed=Math.min(change.duration,change.elapsed+dt);
        const p=change.elapsed/change.duration;car.x=change.from+(change.to-change.from)*p;
        car.vx=(change.to-change.from)/change.duration;
        if(p>=1){car.x=change.to;car.lane=change.targetLane;car.change=null;car.changing=false;car.signal=0;car.vx=0;this.mergeCompletions++;}
      }else{car.x=LANES[car.lane];car.vx=0;}
      const yaw=Math.atan2(car.vx*ROAD_HALF_METERS,Math.max(8,car.speed/3.6));
      car.yaw=approach(car.yaw,yaw,12,dt);
    }
    this.scheduleChanges();
  }
  crash(car=null){
    if(this.status!=='running')return;
    this.status='crashed';this.vx=0;this.impact=1;this.crashCarId=car?.id??null;
    this.failure={kind:car?.kind??'rail',side:car?(car.x<this.x?'left':'right'):(this.x<0?'left':'right')};
    this.emit('hit',this.failure);this.emit('finish',this.failure);
  }
  reward(car){
    if(car.scored)return;car.scored=true;this.passed++;this.score+=30;
    if(car.minGap<=.072){
      const perfect=car.minGap<.025;this.combo=Math.min(10,this.combo+1);this.comboTime=4.5;
      this.maxCombo=Math.max(this.maxCombo,this.combo);this.nearCount++;
      const points=(perfect?180:100)*this.combo;this.score+=points;
      this.emit('near',{perfect,points,combo:this.combo});
      const entry={time:this.time,id:car.id};
      if(car.minSide>0)this.recentLeft=entry;else this.recentRight=entry;
      if(this.recentLeft&&this.recentRight&&Math.abs(this.recentLeft.time-this.recentRight.time)<.65){
        const bonus=140*this.combo;this.score+=bonus;this.doubleCount++;
        this.emit('double',{points:bonus,combo:this.combo});this.recentLeft=null;this.recentRight=null;
      }
    }else this.emit('pass');
  }
  tick(dt,input){
    this.time+=dt;this.comboTime=Math.max(0,this.comboTime-dt);if(this.comboTime===0)this.combo=0;
    const steer=Number(!!input.right)-Number(!!input.left);
    const response=!steer?STEER_RELEASE:this.vx*steer<0?20:STEER_RESPONSE;
    this.vx=approach(this.vx,steer*STEER_SPEED,response,dt);
    if(!steer&&Math.abs(this.vx)<.004)this.vx=0;
    this.turn=roadTurn(this.distance);
    const outward=-this.turn*CURVE_PULL;
    this.x=clamp(this.x+(this.vx+outward)*dt,-.97,.97);
    this.lean=approach(this.lean,this.vx/STEER_SPEED*.30+this.turn*.06,12,dt);
    const curveDirection=Math.abs(this.turn)>.22?Math.sign(this.turn):0;
    if(curveDirection&&curveDirection!==this.curveDirection)this.emit('curve',{direction:curveDirection});
    this.curveDirection=curveDirection;
    if(Math.abs(this.x)>.945){this.crash();return;}
    this.distance+=BIKE_SPEED/3.6*dt;this.score+=dt*5;
    this.updateTraffic(dt);
    for(const car of this.cars){
      const hit=contact(car,this.x);
      if(hit.hit){this.crash(car);return;}
      if(hit.nearWindow&&hit.gap>=0&&hit.gap<car.minGap){car.minGap=hit.gap;car.minSide=hit.side;}
      if(!car.scored&&car.z<-car.length/2-PLAYER_HALF_LENGTH-1)this.reward(car);
    }
    this.pruneTraffic();this.ensureTraffic();
  }
}
