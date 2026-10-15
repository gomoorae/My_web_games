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
    for(let i=0;i<n;i++)waves.push({t:t+i*.32,type,
      x:side?(side<0?62:418):68+i*344/Math.max(1,n-1),variant:side||(i%2?1:-1)});
  };
  // Teach lateral interception, then slow coverage plus aimed pressure.
  row(3,'scout',5);row(6,'interceptor',3,-1);row(11,'scout',4);row(13,'interceptor',3,1);
  row(20,'turret',2);row(23,'bomber',1);row(28,'mine',3);row(31,'scout',5);
  row(37,'bomber',2);row(40,'interceptor',3,-1);row(46,'mine',3);row(49,'turret',2);
  row(55,'scout',5);row(58,'interceptor',3,1);
  waves.push({t:67,type:'gemini',x:240,variant:0});
  // Familiar pairs combine after Gemini, with a quiet approach to Tempest.
  row(75,'scout',5);row(77,'interceptor',3,-1);row(83,'bomber',2);row(85,'turret',2);
  row(92,'mine',3);row(94,'interceptor',4,1);row(101,'scout',5);row(103,'turret',3);
  row(110,'bomber',2);row(112,'interceptor',3,-1);row(119,'mine',3);row(122,'scout',5);
  row(129,'turret',2);row(131,'interceptor',4,1);
  waves.push({t:147,type:'tempest',x:240,variant:0});
  return waves.sort((a,b)=>a.t-b.t);
}
export const STORM_WAVES = makeStormWaves();
export const STORM_SPECS = {
  gemini:{hp:920,r:48,score:6500,vy:65},
  tempest:{hp:3900,r:70,score:22000,vy:65}
};
export function attachPods(e){
  if(!STORM_SPECS[e.type])return;
  const final=e.type==='tempest',hp=final?240:150;
  e.parts=[-1,1].map(side=>({id:`${e.id}:${side}`,side,hp,maxHp:hp,r:final?25:21,
    dx:side*(final?119:81),dy:final?21:24,x:e.x+side*(final?119:81),y:e.y+24,
    px:e.x+side*(final?119:81),py:e.y+24,dead:false,flash:0}));
}
export function syncPods(e,dt){
  for(const p of e.parts||[]){
    p.px=p.x;p.py=p.y;p.x=e.x+p.dx;p.y=e.y+p.dy;p.flash=Math.max(0,p.flash-dt);
  }
}
export function stormAttack(g,e){
  const easy=g.difficulty==='easy',pods=e.parts.filter(p=>!p.dead);
  if(e.type==='gemini'){
    const laserPod=pods[e.volley%Math.max(1,pods.length)];
    if(laserPod){
      const y=laserPod.y+45,a=Math.atan2(g.player.y-y,g.player.x-laserPod.x);
      g.laser(e,laserPod.x,y,a,easy?1.15:.9,.65,12,laserPod.id);
      for(const p of pods)if(p!==laserPod)g.fan({...p,type:'pod'},3,.28,114,false,'amber');
    }else g.fan(e,easy?3:5,.21,150,true,'amber');
    e.fire=2.8;
    return;
  }
  if(e.phase===1){
    for(const p of pods)g.fan({...p,type:'pod'},easy?3:5,.24,135,false,'rose');
    if(e.volley%2===0)g.fan(e,3,.15,185,true,'amber');
    e.fire=1.45;
  }else if(e.phase===2){
    // A generous moving gap in each ring; aimed shots are staggered.
    const gap=Math.PI/2+Math.sin(e.age*.31)*.68,count=easy?22:30;
    e.gapAngle=gap;
    for(let i=0;i<count;i++){
      const a=i*Math.PI*2/count;
      const delta=Math.atan2(Math.sin(a-gap),Math.cos(a-gap));
      const gapWidth=easy?.62:.49;
      if(Math.abs(delta)>gapWidth){
        for(let j=0;j<HOSTILE_DENSITY;j++){
          let angle=a+j*Math.PI*2/(count*HOSTILE_DENSITY);
          if(Math.abs(Math.atan2(Math.sin(angle-gap),Math.cos(angle-gap)))<=gapWidth)
            angle=a-j*Math.PI/(count*HOSTILE_DENSITY);
          g.bullet(e.x,e.y+12,angle,132,'amber');
        }
      }
    }
    if(e.volley%4===0)g.fan(e,1,0,182,true,'rose');
    e.fire=1.18;
  }else{
    // Two stationary rails never form a closed cage. Every warning locks
    // before firing; all corridors are wide enough to escape at focus speed.
    if(e.volley%2){
      const pair=e.volley%4===1?[120,350]:[180,410];
      for(const x of pair)g.laser(e,x,e.y+65,Math.PI/2,easy?1.4:1.1,.8,14);
      e.fire=2.35;
    }else{
      g.fan(e,easy?3:5,.14,215,true,'rose');
      e.fire=1.05;
    }
  }
  if(easy)e.fire*=1.15;
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
