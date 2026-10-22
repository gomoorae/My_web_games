// Authored encounters and independently destructible machinery for stage two.
export const STAGES = Object.freeze({
  1: {name:'해풍의 항구',midAt:69,midStop:73,bossAt:134,
    route:['항구 상공','철갑 순찰정','구름 위 추격전','아이언 레이븐']},
  2: {name:'뇌운의 협곡',midAt:67,midStop:71,bossAt:147,
    route:['협곡 진입','쌍뢰정 제미니','송전 시설 돌파','뇌전요새 템페스트']},
  3: {name:'홍련의 조선소',midAt:65,midStop:69,bossAt:150,
    route:['공중 도크 진입','화로거북 볼칸','제련 구역 돌파','홍련룡 이그니스']}
});
export const RUN_MODES=Object.freeze({
  campaign:{startStage:1,endStage:3,name:'연속 출격',hint:'1 → 3스테이지 · 남은 목숨과 무장을 이어갑니다'},
  practice2:{startStage:2,endStage:2,name:'2스테이지 연습',hint:'목숨 3 · 파워 3 · 폭탄 3으로 협곡부터 출격'},
  practice3:{startStage:3,endStage:3,name:'3스테이지 연습',hint:'목숨 3 · 파워 3 · 폭탄 3으로 조선소부터 출격'}
});
export const POWER_DURATION = 25, SUPPLY_INTERVAL = 12;
export const HOSTILE_DENSITY = 2;
export const isLarge = e => ['boss','midboss','gemini','tempest','vulcan','ignis'].includes(e.type);
export const isFinal = e => ['boss','tempest','ignis'].includes(e.type);
export function makeStormWaves(){
  const waves=[];
  const row=(t,type,n,side=0)=>{
    for(let i=0;i<n;i++)waves.push({t:t+i*.42,type,
      x:side?(side<0?62:418):68+i*344/Math.max(1,n-1),variant:side||(i%2?1:-1)});
  };
  // Teach lateral interception, then slow coverage plus aimed pressure.
  row(3,'scout',5);row(6,'interceptor',3,-1);row(11,'scout',4);row(13,'interceptor',3,1);
  row(20,'turret',2);row(24,'bomber',1);row(28,'mine',2);row(31,'scout',5);
  row(37,'bomber',2);row(40,'interceptor',3,-1);row(46,'mine',3);row(49,'turret',2);
  row(55,'scout',4);row(58,'interceptor',3,1);
  waves.push({t:67,type:'gemini',x:240,variant:0});
  // Familiar pairs combine after Gemini, with a quiet approach to Tempest.
  row(75,'scout',5);row(79,'interceptor',3,-1);row(84,'bomber',2);row(88,'turret',2);
  row(94,'mine',2);row(98,'interceptor',3,1);row(104,'scout',5);row(108,'turret',2);
  row(114,'bomber',2);row(118,'interceptor',3,-1);row(123,'mine',2);row(126,'turret',2);
  row(130,'scout',4);row(134,'interceptor',3,1);
  waves.push({t:147,type:'tempest',x:240,variant:0});
  return waves.sort((a,b)=>a.t-b.t);
}
export const STORM_WAVES = makeStormWaves();
export const STORM_SPECS = {
  gemini:{hp:1380,r:48,score:6500,vy:65},
  tempest:{hp:5850,r:70,score:22000,vy:65}
};
export function attachPods(e){
  if(!STORM_SPECS[e.type])return;
  const final=e.type==='tempest',hp=final?360:225;
  e.parts=[-1,1].map(side=>({id:`${e.id}:${side}`,side,hp,maxHp:hp,r:final?25:21,
    dx:side*(final?119:81),dy:final?21:24,x:e.x+side*(final?119:81),y:e.y+24,
    px:e.x+side*(final?119:81),py:e.y+24,dead:false,flash:0}));
}
export function syncPods(e,dt){
  for(const p of e.parts||[]){
    p.px=p.x;p.py=p.y;p.x=e.x+p.dx;p.y=e.y+p.dy;p.flash=Math.max(0,p.flash-dt);
  }
}
// Body guns keep their own simulation clock, including while machinery fires.
// Losing a pod removes its special attack without switching the core gun off.
export function updateStormGuns(g,e,dt){
  e.gunFire=(e.gunFire??0)-dt;
  if(e.y<150||e.gunFire>0)return;
  const easy=g.difficulty==='easy',gemini=e.type==='gemini';
  const count=gemini?(easy?3:5):e.phase===1?(easy?2:4):e.phase===2?(easy?1:2):(easy?3:5);
  const speed=gemini?200:e.phase===1?205:e.phase===2?215:210;
  g.fan(e,count,e.phase===2?.13:.15,speed,true,gemini?'amber':'rose');
  e.gunFire=gemini?(easy?1.65:1.08):e.phase===1?(easy?1.7:1.05):e.phase===2?(easy?2.4:1.65):(easy?1.7:1.1);
}
export function stormAttack(g,e){
  const easy=g.difficulty==='easy',pods=e.parts.filter(p=>!p.dead);
  if(e.type==='gemini'){
    const laserPod=pods[e.volley%Math.max(1,pods.length)];
    if(laserPod){
      const y=laserPod.y+45,a=Math.atan2(g.player.y-y,g.player.x-laserPod.x);
      g.laser(e,laserPod.x,y,a,easy?1.25:.9,.6,12,laserPod.id);
      for(const p of pods)if(p!==laserPod)g.fan({...p,type:'pod'},easy?2:3,.25,155,false,'amber');
    }
    e.fire=easy?3.1:2.4;return;
  }
  if(e.phase===1){
    for(const p of pods)g.fan({...p,type:'pod'},easy?3:5,.24,150,false,'amber');
    e.fire=easy?2.3:1.75;
  }else if(e.phase===2){
    // Complete rings rotate half a gap per volley; there is no permanent lane.
    const count=(easy?18:26)*HOSTILE_DENSITY,phase=(e.volley-1)*Math.PI/count;
    for(let i=0;i<count;i++)g.bullet(e.x,e.y+12,phase+i*Math.PI*2/count,165,'amber');
    e.fire=easy?1.62:1.18;
  }else{
    const pair=e.volley%2?[120,350]:[180,410];
    for(const x of pair)g.laser(e,x,e.y+65,Math.PI/2,easy?1.45:1.05,.75,14);
    e.fire=easy?3.3:2.45;
  }
}

function pointSegment(px,py,ax,ay,bx,by){
  const dx=bx-ax,dy=by-ay,n=dx*dx+dy*dy;
  const t=n?Math.max(0,Math.min(1,((px-ax)*dx+(py-ay)*dy)/n)):0;
  return Math.hypot(px-ax-t*dx,py-ay-t*dy);
}
export function laserDistance(x,y,l){return pointSegment(x,y,l.x,l.y,l.x2,l.y2);}
export function crossesLaser(ax,ay,bx,by,l,r){
  if(Math.min(laserDistance(ax,ay,l),laserDistance(bx,by,l),
    pointSegment(l.x,l.y,ax,ay,bx,by),pointSegment(l.x2,l.y2,ax,ay,bx,by))<=r)return true;
  const cross=(ax,ay,bx,by)=>ax*by-ay*bx,rx=bx-ax,ry=by-ay,sx=l.x2-l.x,sy=l.y2-l.y;
  const d=cross(rx,ry,sx,sy);if(Math.abs(d)<1e-10)return false;
  const t=cross(l.x-ax,l.y-ay,sx,sy)/d,u=cross(l.x-ax,l.y-ay,rx,ry)/d;
  return t>=0&&t<=1&&u>=0&&u<=1;
}
