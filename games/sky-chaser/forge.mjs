import {HOSTILE_DENSITY} from './stages.mjs?v=0.9.3';
export const FORGE_SPECS={
  vulcan:{hp:1250,r:52,score:8500,vy:64},
  ignis:{hp:4200,r:70,score:28000,vy:62}
};
export function makeForgeWaves(difficulty='normal'){
  const waves=[];
  const row=(t,type,n,side=0)=>{
    for(let i=0;i<n;i++)waves.push({t:t+i*.34,type,
      x:side?(side<0?62:418):70+i*340/Math.max(1,n-1),variant:side||(i%2?1:-1)});
  };
  row(3,'scout',4);row(7,'interceptor',3,-1);
  row(13,'bomber',1);row(18,'scout',4); // Introduce bombers before the later mixed formations.
  row(24,'mine',3);row(29,'turret',2); // Learn the curved rounds before combining.
  row(35,'bomber',2);row(38,'interceptor',3,1);
  row(44,'scout',5);row(47,'mine',2);row(53,'turret',2);row(56,'interceptor',3,-1);
  waves.push({t:65,type:'vulcan',x:240,variant:0});
  row(74,'scout',5);row(77,'bomber',2);row(83,'mine',3);row(86,'interceptor',3,1);
  row(93,'turret',2);row(96,'bomber',2);row(103,'scout',5);row(106,'mine',3);
  row(113,'interceptor',4,-1);row(116,'turret',2);row(123,'bomber',2);
  row(127,'scout',5);row(133,'mine',2);row(136,'interceptor',3,1);
  // Reinforce the established post-midboss waves; keep the early lesson and
  // the final approach clear. Easy receives fewer, slightly later escorts.
  if(difficulty==='easy'){
    row(78.8,'interceptor',2,-1);row(98,'interceptor',2,-1);row(124.5,'interceptor',2,1);
  }else{
    row(78.2,'interceptor',3,-1);row(94,'scout',3);
    row(97.2,'interceptor',3,-1);row(123.7,'interceptor',4,1);
  }
  waves.push({t:150,type:'ignis',x:240,variant:0});
  return waves.sort((a,b)=>a.t-b.t);
}
export const FORGE_WAVES=makeForgeWaves();
export const FORGE_EASY_WAVES=makeForgeWaves('easy');
export function attachForgePods(e){
  if(!FORGE_SPECS[e.type])return;
  const final=e.type==='ignis',hp=final?260:180,dx=final?105:84;
  e.parts=[-1,1].map(side=>({id:`${e.id}:${side}`,side,hp,maxHp:hp,r:final?24:22,
    dx:side*dx,dy:24,x:e.x+side*dx,y:e.y+24,px:e.x+side*dx,py:e.y+24,dead:false,flash:0}));
}
function safeFan(g,e,count,spread,speed,aim=true,style='rose',offset=0,density=HOSTILE_DENSITY){
  if(Math.hypot(g.player.x-e.x-offset,g.player.y-e.y-(e.type==='ignis'?126:50))>110)g.fan(e,count,spread,speed,aim,style,offset,density);
}
function curvedFan(g,e,side,count,speed,turn=.46){
  const x=e.x+side*76,y=e.y+52;
  if(Math.hypot(g.player.x-x,g.player.y-y)<110)return;
  for(let i=0;i<count*HOSTILE_DENSITY;i++){
    const a=Math.PI/2+side*.36+(i-(count*HOSTILE_DENSITY-1)/2)*.075;
    const b=g.bullet(x,y,a,speed,'violet');
    if(b){b.turnRate=-side*turn;b.turnFor=.9;}
  }
}
export function updateForgeBomber(g,e,dt){
  const easy=g.difficulty==='easy';
  // Both clocks advance only after the engine's entry/range/bomb safety gate.
  // A capped shell launch is discarded, never queued for a later burst.
  e.fire-=dt;e.mortarFire=(e.mortarFire??0)-dt;
  if(e.fire<=0){
    e.volley++;
    g.fan(e,5,.22,160,false,'rose');
    e.fire=easy?2.45*1.15:1.8;
  }
  if(e.mortarFire<=0){
    g.launchMortar(e,e.x,e.y+33,g.player.x,g.player.y,{flight:1.05});
    e.mortarFire=3.1*(easy?1.15:1);
  }
}
export function forgeMinorAttack(g,e){
  const easy=g.difficulty==='easy';
  if(e.type==='mine'){
    const start=g.bullets.length;g.ring(e,easy?6:8,112,e.age*.2);
    for(const b of g.bullets.slice(start)){b.turnRate=(e.variant||1)*.48;b.turnFor=.95;b.style='violet';}
    e.fire=3*.8*(easy?1.15:1);return true;
  }
  return false;
}
const SCATTER_POINTS=[[76,350],[404,458],[204,632],[276,354],[68,584],[402,636]];
function scatterSalvo(g,e,count,spacing,pods=null){
  if(g.mortarQueue.some(q=>q.owner===e.id))return;
  const cycle=Math.floor((e.volley-1)/(e.phase===3?4:3));
  for(let i=0;i<count;i++){
    const [x,y]=SCATTER_POINTS[(i+cycle*2+e.phase-1)%SCATTER_POINTS.length];
    const pod=pods?.[i%pods.length];
    g.scheduleMortar(e,cycle%2?480-x:x,y,{delay:i*spacing,partId:pod?.id,
      offsetX:i%2?76:-76,offsetY:62,flight:1.05,crossfire:i===1});
  }
}
// One small crossing volley per scattered salvo, fired from the visible wing
// guns before detonation. Early interception also cancels this cover attack.
export function mortarCrossfire(g,m){
  const e=g.enemies.find(e=>e.id===m.owner&&!e.dead);
  if(!e||e.type!=='ignis'||e.phase!==m.phase||e.transition>0||g.bombTimer>0||g.finalDefeated)return;
  const count=(g.difficulty==='easy'?1:2)*HOSTILE_DENSITY;let fired=0;
  for(const side of [-1,1]){
    const x=e.x+side*76,y=e.y+52;
    if(x<0||x>480||y<0||Math.hypot(g.player.x-x,g.player.y-y)<=110)continue;
    for(let i=0;i<count;i++)if(g.bullet(x,y,Math.PI/2+side*.34+(i-(count-1)/2)*.1,175,'amber'))fired++;
  }
  if(fired)g.event('mortarCrossfire',{owner:e.id,count:fired});
}
export function forgeAttack(g,e){
  const easy=g.difficulty==='easy',pods=e.parts.filter(p=>!p.dead);
  if(e.type==='vulcan'){
    for(const p of pods)g.launchMortar(e,p.x,p.y+43,g.player.x+p.side*62,g.player.y,
      {partId:p.id,flight:.95});
    safeFan(g,e,easy?2:3,.22,150,true,'rose',0,HOSTILE_DENSITY*2);
    e.fire=pods.length?(easy?2.5:2.3):2.05;
  }else if(e.phase===1){
    if(e.volley%3===1&&pods.length)scatterSalvo(g,e,Math.min(easy?3:4,pods.length*2),easy?.58:.46,pods);
    safeFan(g,e,easy?3:4,.2,175,true,'amber');
    e.fire=easy?1.45:1.35;
  }else if(e.phase===2){
    for(const side of [-1,1])curvedFan(g,e,side,easy?4:5,148);
    if(e.volley%2===0)safeFan(g,e,easy?2:3,.16,180,true,'amber');
    if(e.volley%3===1)scatterSalvo(g,e,easy?3:4,easy?.52:.4);
    e.fire=easy?1.075:1;
  }else{
    if(e.volley%4===1)scatterSalvo(g,e,easy?4:6,easy?.46:.34);
    if(e.volley%2)for(const side of [-1,1])curvedFan(g,e,side,easy?3:4,158,.55);
    else safeFan(g,e,easy?4:5,.18,195);
    e.fire=easy?.985:.92;
  }
  if(easy)e.fire*=1.15;
}
export function moveMortar(m,dt){
  m.px=m.x;m.py=m.y;m.age+=dt;
  const q=Math.min(1,m.age/m.flight);
  m.x=m.startX+(m.tx-m.startX)*q;
  m.y=m.startY+(m.ty-m.startY)*q-Math.sin(q*Math.PI)*48;
}
export const mortarArmed=m=>!m.dead&&!m.exploded&&m.age<m.flight+m.fuse;
