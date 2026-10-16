import {HOSTILE_DENSITY} from './stages.mjs?v=0.6.1';
export const FORGE_SPECS={
  vulcan:{hp:1250,r:52,score:8500,vy:64},
  ignis:{hp:4200,r:70,score:28000,vy:62}
};
export function makeForgeWaves(){
  const waves=[];
  const row=(t,type,n,side=0)=>{
    for(let i=0;i<n;i++)waves.push({t:t+i*.34,type,
      x:side?(side<0?62:418):70+i*340/Math.max(1,n-1),variant:side||(i%2?1:-1)});
  };
  row(3,'scout',4);row(7,'interceptor',3,-1);
  row(13,'bomber',1);row(18,'scout',4); // Introduce shootable mortar shells alone.
  row(24,'mine',3);row(29,'turret',2); // Learn the curved rounds before combining.
  row(35,'bomber',2);row(38,'interceptor',3,1);
  row(44,'scout',5);row(47,'mine',2);row(53,'turret',2);row(56,'interceptor',3,-1);
  waves.push({t:65,type:'vulcan',x:240,variant:0});
  row(74,'scout',5);row(77,'bomber',2);row(83,'mine',3);row(86,'interceptor',3,1);
  row(93,'turret',2);row(96,'bomber',2);row(103,'scout',5);row(106,'mine',3);
  row(113,'interceptor',4,-1);row(116,'turret',2);row(123,'bomber',2);
  row(127,'scout',5);row(133,'mine',2);row(136,'interceptor',3,1);
  waves.push({t:150,type:'ignis',x:240,variant:0});
  return waves.sort((a,b)=>a.t-b.t);
}
export const FORGE_WAVES=makeForgeWaves();
export function attachForgePods(e){
  if(!FORGE_SPECS[e.type])return;
  const final=e.type==='ignis',hp=final?260:180,dx=final?105:84;
  e.parts=[-1,1].map(side=>({id:`${e.id}:${side}`,side,hp,maxHp:hp,r:final?24:22,
    dx:side*dx,dy:24,x:e.x+side*dx,y:e.y+24,px:e.x+side*dx,py:e.y+24,dead:false,flash:0}));
}
function safeFan(g,e,count,spread,speed,aim=true,style='rose',offset=0){
  if(Math.hypot(g.player.x-e.x-offset,g.player.y-e.y-(e.type==='ignis'?126:50))>110)g.fan(e,count,spread,speed,aim,style,offset);
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
export function forgeMinorAttack(g,e){
  const easy=g.difficulty==='easy';
  if(e.type==='bomber'){
    g.launchMortar(e,e.x,e.y+33,g.player.x,g.player.y,{flight:1.05});
    e.fire=3.1*(easy?1.15:1);return true;
  }
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
      offsetX:i%2?76:-76,offsetY:62,flight:1.05});
  }
}
export function forgeAttack(g,e){
  const easy=g.difficulty==='easy',pods=e.parts.filter(p=>!p.dead);
  if(e.type==='vulcan'){
    for(const p of pods)g.launchMortar(e,p.x,p.y+43,g.player.x+p.side*62,g.player.y,
      {partId:p.id,flight:.95});
    if(e.volley%2===0||!pods.length)safeFan(g,e,easy?2:3,.22,150);
    e.fire=pods.length?2.7:2.05;
  }else if(e.phase===1){
    if(e.volley%3===1&&pods.length)scatterSalvo(g,e,Math.min(easy?3:4,pods.length*2),easy?.58:.46,pods);
    safeFan(g,e,easy?3:4,.2,175,true,'amber');
    e.fire=1.55;
  }else if(e.phase===2){
    for(const side of [-1,1])curvedFan(g,e,side,easy?4:5,148);
    if(e.volley%2===0)safeFan(g,e,easy?2:3,.16,180,true,'amber');
    if(e.volley%3===1)scatterSalvo(g,e,easy?3:4,easy?.52:.4);
    e.fire=1.15;
  }else{
    if(e.volley%4===1)scatterSalvo(g,e,easy?4:6,easy?.46:.34);
    if(e.volley%2)for(const side of [-1,1])curvedFan(g,e,side,easy?3:4,158,.55);
    else safeFan(g,e,easy?4:5,.18,195);
    e.fire=1.05;
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
