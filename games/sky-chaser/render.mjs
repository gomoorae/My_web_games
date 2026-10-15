import {W,H,clamp} from './engine.mjs';
import {ArtBank} from './art.mjs';
const TAU=Math.PI*2;
const mix=(a,b,t)=>a+(b-a)*t;
const ease=t=>{t=clamp(t,0,1);return t*t*(3-2*t);};
const seed=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
const sizes={scout:60,interceptor:66,turret:67,bomber:105,mine:57,midboss:177};
function ellipse(c,x,y,rx,ry,color){c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,TAU);c.fill();}
function box(c,x,y,w,h,color,r=0){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
function path(c,points,color,width=1){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=color;c.lineWidth=width;c.stroke();}
function stamp(c,s,width,alpha=1,kind='image',height=null){
  if(!s||alpha<=0)return;
  const h=height??width*s.ratio;c.save();c.globalAlpha*=alpha;c.drawImage(s[kind],-width/2,-h/2,width,h);c.restore();
}
function part(c,s,width,u,v,uw,vh,x=0,y=0,rotation=0,alpha=1){
  if(!s||alpha<=0)return;const h=width*s.ratio;
  c.save();c.translate(x,y);c.rotate(rotation);c.globalAlpha*=alpha;
  c.drawImage(s.image,s.image.width*u,s.image.height*v,s.image.width*uw,s.image.height*vh,
    (u-.5)*width,(v-.5)*h,uw*width,vh*h);c.restore();
}
function glow(c,x,y,r,color,alpha=1){
  c.save();c.globalCompositeOperation='lighter';c.globalAlpha*=alpha;
  const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(1,'#00000000');
  c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);c.restore();
}
function makeCloud(index){
  const cv=document.createElement('canvas');cv.width=384;cv.height=192;
  const c=cv.getContext('2d');
  for(let layer=0;layer<2;layer++)for(let i=0;i<20;i++){
    const x=48+seed(index*40+i)*288,y=86+Math.sin(i*2.7)*24-layer*10,r=22+seed(i+index+99)*38;
    const g=c.createRadialGradient(x-r*.15,y-r*.3,0,x,y,r);
    g.addColorStop(0,layer?'#fffbeaee':'#759fb897');g.addColorStop(.65,layer?'#edf4edbb':'#b9d4d6a8');g.addColorStop(1,'#d1e3e500');
    c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);
  }
  return cv;
}

export class Renderer {
  constructor(canvas){
    this.canvas=canvas;this.c=canvas.getContext('2d',{alpha:false});this.art=new ArtBank();
    this.motion=true;this.clouds=[0,1,2,3].map(makeCloud);this.reset();this.resize();
    this.ready=this.art.load();
  }
  reset(){this.particles=[];this.rings=[];this.blasts=[];this.wrecks=[];this.trail=[];this.flash=0;this.shake=0;this.fxTime=0;this.lastTrail=0;this.lastTime=0;}
  resize(){this.ratio=Math.min(window.devicePixelRatio||1,2);this.canvas.width=W*this.ratio;this.canvas.height=H*this.ratio;this.c.imageSmoothingEnabled=true;this.c.imageSmoothingQuality='high';}
  burst(x,y,n=15,large=false){
    for(let i=0;i<n;i++){
      const a=Math.random()*TAU,s=(large?230:135)*(.25+Math.random()*.75),life=.3+Math.random()*(large?1.4:.65);
      this.particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life,max:life,
        kind:i%5===0?'smoke':i%3===0?'metal':'spark',r:(large?5:3)+Math.random()*(large?10:4),spin:Math.random()*8-4,angle:Math.random()*TAU});
    }
    if(this.particles.length>450)this.particles.splice(0,this.particles.length-450);
  }
  explosion(x,y,large=false,type='scout'){
    this.burst(x,y,large?64:16,large);
    this.blasts.push({x,y,age:0,life:large?1.3:.5,size:large?92:26});
    this.rings.push({x,y,age:0,life:large?.9:.4,size:large?180:48,color:'#ffe7a2'});
    if(type==='boss'){
      for(let i=0;i<9;i++)this.blasts.push({x:x+(seed(i+4)-.5)*230,y:y+(seed(i+5)-.5)*190,age:-i*.13,life:1.2,size:60+seed(i+7)*45});
      this.wrecks.push({type:'raven',x,y,age:0,life:2.6,width:326});
    }else if(type!=='player')this.wrecks.push({type,x,y,age:0,life:large?1.1:.5,width:sizes[type]||60});
    this.shake=Math.max(this.shake,large?8:1.8);
  }
  consume(events){
    for(const e of events){
      if(e.kind==='explode')this.explosion(e.x,e.y,e.large,e.type);
      if(e.kind==='hurt'){this.explosion(e.x,e.y,false,'player');this.flash=.23;this.shake=8;}
      if(e.kind==='bomb'){this.flash=.25;this.shake=5;this.burst(e.x,e.y,42,true);}
      if(e.kind==='charge'){
        this.rings.push({x:e.x,y:e.y-40,age:0,life:.4,size:e.full?65:35,color:'#a2ffe4'});
        this.shake=e.full?2:0;
      }
      if(e.kind==='transform'){
        this.flash=.16;this.shake=5;
        for(let i=0;i<7;i++)this.blasts.push({x:e.x+(seed(i+20)-.5)*185,y:e.y+(seed(i+30)-.5)*160,age:-.15-i*.12,life:.55,size:31+seed(i+2)*20});
        this.burst(e.x,e.y,35,true);
      }
      if(e.kind==='impact')this.burst(e.x,e.y,5);
    }
  }
  background(c,t,stageTime,px=240){
    const altitude=ease((stageTime-88)/38);
    const sea=c.createLinearGradient(0,0,W,H);sea.addColorStop(0,'#3a799c');sea.addColorStop(1,'#2b9fb6');c.fillStyle=sea;c.fillRect(0,0,W,H);
    if(this.art.loaded){
      const map=this.art.images.harbor,width=W+36,height=width*map.height/map.width;
      const travel=ease(t/127),y=-(height-H)+travel*(height-H);
      c.save();c.globalAlpha=1-altitude*.82;
      c.drawImage(map,-18+(px-W/2)*-.025,y,width,height);
      c.fillStyle='#193e5e18';c.fillRect(0,0,W,H);c.restore();
    }
    // Reflections drift independently of the map, so the harbor feels alive.
    c.save();c.globalAlpha=.18*(1-altitude*.7);c.lineWidth=1;
    for(let i=0;i<24;i++){
      const x=112+seed(i+50)*265,y=(seed(i+300)*H+t*(6+seed(i)*4))%H;
      path(c,[[x,y],[x+5,y-1],[x+13,y]],'#d7f6e8',1);
    }
    c.restore();
    for(let layer=0;layer<2;layer++)for(let i=0;i<(layer?5:7);i++){
      const s=(layer?.85:.47)+seed(i+layer*19)*.6;
      const x=seed(i+layer*72+18)*(W+180)-100+(px-240)*(layer?-.035:-.012);
      const y=((seed(i+layer*110)*1100+t*(layer?29:13))%1100)-240;
      c.save();c.globalAlpha=(layer?.09:.18)+altitude*(layer?.30:.23);
      c.drawImage(this.clouds[(i+layer)%4],x,y,384*s,192*s);c.restore();
    }
    if(altitude){const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#b8d9e72b');sky.addColorStop(1,'#86b6c900');c.globalAlpha=altitude;c.fillStyle=sky;c.fillRect(0,0,W,H);c.globalAlpha=1;}
    // Very soft edge shade keeps tiny, bright hostile bullets legible.
    const edge=c.createLinearGradient(0,0,W,0);edge.addColorStop(0,'#102d4233');edge.addColorStop(.2,'#102d4200');edge.addColorStop(.8,'#102d4200');edge.addColorStop(1,'#102d4233');
    c.fillStyle=edge;c.fillRect(0,0,W,H);
  }
  exhaust(c,x,y,t,scale=1,up=false){
    c.save();c.translate(x,y);if(up)c.rotate(Math.PI);
    c.globalCompositeOperation='lighter';const length=(14+Math.sin(t*36)*4)*scale;
    const g=c.createLinearGradient(0,0,0,length);g.addColorStop(0,'#fff5bce6');g.addColorStop(.25,'#74eae6af');g.addColorStop(1,'#47c5e000');
    c.fillStyle=g;c.beginPath();c.moveTo(-3*scale,0);c.bezierCurveTo(-5*scale,length*.4,-2*scale,length*.7,0,length);c.bezierCurveTo(2*scale,length*.7,5*scale,length*.4,3*scale,0);c.fill();c.restore();
  }
  propeller(c,x,y,t,r){
    c.save();c.translate(x,y);c.rotate(t*42);c.globalAlpha=.55;
    const g=c.createRadialGradient(0,0,0,0,0,r);g.addColorStop(0,'#d5cba8b0');g.addColorStop(1,'#f6e8bb00');ellipse(c,0,0,r,r*.38,g);
    for(let i=0;i<3;i++){c.rotate(TAU/3);ellipse(c,r*.4,0,r*.6,1.2,'#ffedbb99');}
    c.restore();
  }
  player(c,p,t,focus){
    if(!this.art.loaded)return;
    const frame=p.bank<-.22?1:p.bank>.22?2:0,s=this.art.sprites.lumi[frame],width=86;
    c.save();c.translate(p.x+12,p.y+26);c.rotate(p.bank*.035);stamp(c,s,width,.15,'shadow');c.restore();
    this.exhaust(c,p.x-16,p.y+18,t,.95);this.exhaust(c,p.x+16,p.y+18,t+.3,.95);
    c.save();c.translate(p.x,p.y);c.rotate(p.bank*.045);
    stamp(c,s,width,p.inv>0?.65+Math.sin(t*30)*.25:1);
    if(p.inv>0){c.globalAlpha=.3;stamp(c,s,width,Math.max(0,Math.sin(t*20))*.5,'flash');}
    c.restore();
    if(p.charging){
      const q=clamp(p.charge/1.15,0,1);
      glow(c,p.x,p.y-40,20+q*35,'#51d8ce',.3+q*.3);
      c.save();c.translate(p.x,p.y-5);c.rotate(-t*2);c.strokeStyle=q>=1?'#fff2ba':'#9df6e6';c.lineWidth=1.5;
      c.beginPath();c.arc(0,0,37,0,TAU*q);c.stroke();
      for(let i=0;i<6;i++){c.rotate(TAU/6);path(c,[[-3,-38],[0,-44],[3,-38]],'#fff5c9',1.1);}c.restore();
    }
    if(focus||p.charging){ellipse(c,p.x,p.y,5,5,'#173248');ellipse(c,p.x,p.y,3.5,3.5,'#fff8df');ellipse(c,p.x,p.y,1.8,1.8,'#e55c83');}
  }
  enemy(c,e,t){
    if(!this.art.loaded)return;
    if(e.type==='boss'){this.boss(c,e,t);return;}
    const s=this.art.sprites[e.type],width=sizes[e.type];
    const rotation=e.type==='mine'?t*.4:e.type==='interceptor'?Math.sin(e.age*1.8)*.11:e.type==='scout'?Math.sin(e.age*2)*.08:0;
    c.save();c.translate(e.x+13,e.y+22);c.rotate(rotation);stamp(c,s,width,.2,'shadow');c.restore();
    c.save();c.translate(e.x,e.y);c.rotate(rotation);
    if(e.type==='interceptor'){this.exhaust(c,-10,-20,t,.7,true);this.exhaust(c,10,-20,t+.5,.7,true);}
    stamp(c,s,width);
    if(e.flash>0)stamp(c,s,width,e.flash/.065*.7,'flash');
    if(e.type==='scout')this.propeller(c,0,width*s.ratio*.32,t,12);
    if(e.type==='bomber')for(const x of [-width*.24,width*.24])this.propeller(c,x,width*s.ratio*.22,t,15);
    if(e.type==='midboss'){
      const h=width*s.ratio;
      for(const x of [-width*.22,width*.22]){glow(c,x,h*.1,16,'#ffae4d',.22+.1*Math.sin(t*4));this.propeller(c,x,h*.24,t,17);}
      if(e.hp/e.maxHp<.45){glow(c,-width*.22,h*.1,19,'#ff7b42',.35);this.smoke(c,-width*.22,h*.1,t,.7);}
    }
    if(e.type==='mine')glow(c,0,0,13,'#ffad57',.3+.15*Math.sin(t*4));
    c.restore();
  }
  smoke(c,x,y,t,scale=1){
    for(let i=0;i<4;i++){
      const p=(t*.8+i*.25)%1;c.save();c.globalAlpha=(1-p)*.23;
      c.drawImage(this.clouds[i],x-36*scale+Math.sin(i*5+p*3)*9,y-p*66*scale,72*scale*(.5+p),36*scale*(.5+p));c.restore();
    }
  }
  ravenRig(c,s,width,unfold,t,flash=0){
    // Whole-image strips meet exactly at full extension. Hinges retract the
    // feather wings while the torso stays aligned with the gameplay hitbox.
    const fold=1-ease(unfold),sideW=.34,h=width*s.ratio;
    for(const side of [-1,1]){
      c.save();c.translate(side*width*.15,-h*.1);c.rotate(-side*fold*.9);
      c.scale(1-fold*.48,1);c.translate(-side*width*.15,h*.1);
      part(c,s,width,side<0?0:.66,0,sideW,.66,side*-fold*15,-fold*13);c.restore();
      part(c,s,width,side<0?0:.66,.66,sideW,.34,side*-fold*13,-fold*30,-side*fold*.1);
    }
    part(c,s,width,.34,0,.32,1,0,-fold*5);
    if(flash>0&&unfold>=.99)stamp(c,s,width,flash,'flash');
    const coreY=h*.035;
    glow(c,0,coreY,25+Math.sin(t*4)*3,'#ffbc50',.6);
    ellipse(c,0,coreY,3,3,'#fff2b9');
  }
  boss(c,e,t){
    const air=this.art.sprites.airship,raven=this.art.sprites.raven,aw=288,rw=326;
    const transition=e.transition>0,progress=transition?1-e.transition/2.7:1;
    c.save();c.translate(e.x+18,e.y+34);
    stamp(c,e.phase===1?air:raven,e.phase===1?aw:rw,.22,'shadow');c.restore();
    c.save();c.translate(e.x,e.y);
    if(e.phase===1){
      stamp(c,air,aw);if(e.flash>0)stamp(c,air,aw,e.flash/.065*.7,'flash');
      for(const x of [-aw*.31,aw*.31]){this.propeller(c,x,aw*air.ratio*.15,t,21);glow(c,x,aw*air.ratio*.1,22,'#ffb969',.15);}
      if(e.hp/e.maxHp<.76){this.smoke(c,-65,20,t,1.4);glow(c,-65,20,21,'#ff8b40',.3);}
    }else if(transition){
      const expose=ease((progress-.08)/.24),unfold=ease((progress-.34)/.48);
      c.save();c.globalAlpha=expose;this.ravenRig(c,raven,rw,unfold,t);c.restore();
      const peel=ease((progress-.12)/.65),remaining=1-ease((progress-.57)/.26);
      const jitter=progress<.2?Math.sin(t*70)*2:0;
      // Armor leaves in several pieces; it does not simply dissolve into a robot.
      part(c,air,aw,0,0,.34,1,-peel*95+jitter,peel*60,-peel*.65,remaining);
      part(c,air,aw,.66,0,.34,1,peel*95+jitter,peel*60,peel*.65,remaining);
      part(c,air,aw,.34,0,.32,.49,jitter,-peel*94,peel*.22,remaining);
      part(c,air,aw,.34,.49,.32,.51,jitter,peel*116,-peel*.28,remaining);
      if(progress>.12&&progress<.65){
        for(const x of [-53,53]){glow(c,x,0,34,'#ffce79',.6);this.smoke(c,x,0,t,1.2);}
      }
      const ignition=ease((progress-.73)/.17)*(1-ease((progress-.92)/.08));
      if(ignition>0){
        glow(c,0,0,110,'#ffe09d',ignition*.75);
        c.strokeStyle='#ffdda6';c.globalAlpha=ignition;c.lineWidth=2;c.beginPath();c.arc(0,0,30+ignition*86,0,TAU);c.stroke();c.globalAlpha=1;
      }
    }else{
      const breathing=.985+Math.sin(t*1.6)*.015;
      this.ravenRig(c,raven,rw,breathing,t,e.flash/.065*.65);
      this.exhaust(c,-101,28,t,1.2);this.exhaust(c,101,28,t+.7,1.2);
      if(e.hp/e.maxHp<.22){this.smoke(c,65,35,t,1.1);glow(c,65,35,20,'#ff8f45',.25);}
    }
    c.restore();
  }
  item(c,item,t){
    c.save();c.translate(item.x,item.y);c.rotate(Math.sin(t*4+item.x)*.08);
    const coin=item.type==='coin',r=coin?9:15;
    c.shadowColor='#15344999';c.shadowBlur=4;c.shadowOffsetY=2;
    const metal=c.createLinearGradient(-r,-r,r,r);metal.addColorStop(0,'#ffe9a9');metal.addColorStop(.36,'#d4a14d');metal.addColorStop(.65,'#fff0be');metal.addColorStop(1,'#a96e34');
    if(coin){ellipse(c,0,0,r,r+2,'#493d2d');ellipse(c,0,-1,r-1,r+1,metal);ellipse(c,0,-1,r-4,r-2,'#b67f37');path(c,[[-2,-5],[2,-5],[0,4]],'#ffe9ab',1.5);}
    else{
      box(c,-r,-r,r*2,r*2,'#28444e',7);box(c,-r+2,-r+2,r*2-4,r*2-4,metal,5);
      box(c,-r+4,-r+4,r*2-8,r*2-8,item.type==='power'?'#247c77':'#963f3b',4);
      c.shadowBlur=0;c.shadowOffsetY=0;c.fillStyle='#fff0cc';c.font='900 18px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(item.type==='power'?'P':'B',0,1);
      for(const x of [-11,11])for(const y of [-11,11])ellipse(c,x,y,1,1,'#fff3bf');
    }
    c.restore();
  }
  shots(c,g,t){
    for(const s of g.shots){
      if(s.style.startsWith('charge')){
        const full=s.style==='charge',r=s.r;
        glow(c,s.x,s.y,r*2.8,'#65e8d3',.75);
        c.save();c.globalCompositeOperation='lighter';
        const tail=c.createLinearGradient(s.x,s.y-26,s.x,s.y+100);tail.addColorStop(0,'#e4ffeaf0');tail.addColorStop(.4,'#5ee9c7aa');tail.addColorStop(1,'#5ee9c700');
        c.fillStyle=tail;c.beginPath();c.moveTo(s.x,s.y-32);c.bezierCurveTo(s.x-r*1.3,s.y-3,s.x-r*.3,s.y+60,s.x,s.y+110);c.bezierCurveTo(s.x+r*.3,s.y+60,s.x+r*1.3,s.y-3,s.x,s.y-32);c.fill();
        ellipse(c,s.x,s.y,r*.35,r*1.5,'#fffbe2');
        for(let side=-1;side<=1;side+=2){const pts=[];for(let i=0;i<8;i++)pts.push([s.x+side*(r*.65+Math.sin(i*2+t*35)*5),s.y+i*9]);path(c,pts,'#ddffdfbb',full?1.5:1);}
        c.restore();
      }else if(s.style==='homing'){
        path(c,[[s.x-s.vx*.06,s.y-s.vy*.06],[s.x,s.y]],'#93f3de80',3);glow(c,s.x,s.y,10,'#94fbe1',.5);ellipse(c,s.x,s.y,2.5,4,'#fff3ca');
      }else{
        const tail=c.createLinearGradient(s.x,s.y-11,s.x,s.y+22);tail.addColorStop(0,'#fffbd8');tail.addColorStop(.3,'#bfffe2');tail.addColorStop(1,'#6de5df00');
        box(c,s.x-2,s.y-11,4,33,tail,2);ellipse(c,s.x,s.y-7,1.4,5,'#fff7dd');
      }
    }
  }
  effects(c,dt,paused){
    for(const w of this.wrecks){
      if(!paused)w.age+=dt;const s=this.art.sprites[w.type];if(!s)continue;
      c.save();c.translate(w.x,w.y+w.age*35);c.rotate(w.age*.15);const fade=1-w.age/w.life;
      if(w.type==='raven'){
        for(let i=0;i<3;i++)part(c,s,w.width,i/3,0,1/3,1,(i-1)*w.age*35,w.age*w.age*30,(i-1)*w.age*.35,fade);
      }else stamp(c,s,w.width,fade*.65);c.restore();
    }
    this.wrecks=this.wrecks.filter(w=>w.age<w.life);
    for(const b of this.blasts){
      if(!paused)b.age+=dt;if(b.age<0)continue;const p=b.age/b.life;
      glow(c,b.x,b.y,b.size*(.3+p),'#ffad4e',(1-p)*.8);
      for(let i=0;i<7;i++){
        const a=i*2.4,dist=b.size*p*.55,x=b.x+Math.cos(a)*dist,y=b.y+Math.sin(a)*dist,r=b.size*(.14+Math.sin(Math.PI*p)*.2);
        const grad=c.createRadialGradient(x-r*.2,y-r*.2,0,x,y,r);
        grad.addColorStop(0,p<.25?'#fff4c8':'#ffd08b');grad.addColorStop(.45,'#ff9f4ecc');grad.addColorStop(1,'#cf5a2400');
        c.save();c.globalAlpha=1-p;ellipse(c,x,y,r,r,grad);c.restore();
      }
    }
    this.blasts=this.blasts.filter(b=>b.age<b.life);
    for(const r of this.rings){
      if(!paused)r.age+=dt;const p=r.age/r.life;c.save();c.globalAlpha=(1-p)*.75;c.strokeStyle=r.color;c.lineWidth=(1-p)*3+.5;c.beginPath();c.arc(r.x,r.y,Math.max(1,r.size*ease(p)),0,TAU);c.stroke();c.restore();
    }
    this.rings=this.rings.filter(r=>r.age<r.life);
    for(const p of this.particles){
      if(!paused){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=Math.exp(-dt*2);p.vy*=Math.exp(-dt*2);p.angle+=p.spin*dt;}
      const fade=clamp(p.life/p.max,0,1);c.save();c.globalAlpha=fade;
      if(p.kind==='spark'){path(c,[[p.x-p.vx*.025,p.y-p.vy*.025],[p.x,p.y]],fade>.6?'#fff4bf':'#ed9852',1.5);}
      else if(p.kind==='metal'){
        c.translate(p.x,p.y);c.rotate(p.angle);const grad=c.createLinearGradient(-p.r,0,p.r,0);grad.addColorStop(0,'#304a55');grad.addColorStop(.5,'#ecd197');grad.addColorStop(1,'#796349');box(c,-p.r/2,-p.r/4,p.r,p.r/2,grad,1);
      }else{c.globalAlpha=fade*.35;c.drawImage(this.clouds[0],p.x-p.r*3,p.y-p.r*1.5,p.r*6,p.r*3);}
      c.restore();
    }
    this.particles=this.particles.filter(p=>p.life>0);
  }
  bomb(c,g,t){
    if(g.bombTimer<=0)return;const p=1-g.bombTimer/1.45,r=p*850;
    c.save();c.translate(g.player.x,g.player.y);c.rotate(p*.55);c.globalCompositeOperation='lighter';
    c.globalAlpha=(1-p)*.8;c.strokeStyle='#c8ffdf';c.lineWidth=3+8*(1-p);c.beginPath();c.arc(0,0,r,0,TAU);c.stroke();
    c.lineWidth=1;c.beginPath();c.arc(0,0,r*.92,0,TAU);c.stroke();
    for(let i=0;i<12;i++){c.rotate(TAU/12);path(c,[[-4,-r*.94],[0,-r*1.02],[4,-r*.94]],'#fff1bc',1.5);}
    c.restore();
  }
  draw(game,visualTime,dt,input={}){
    const c=this.c,active=game.state!=='ready',t=active?game.time:visualTime,paused=game.state==='paused';
    c.setTransform(this.ratio,0,0,this.ratio,0,0);c.save();
    if(this.motion&&this.shake>.1&&!paused)c.translate((Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake);
    this.background(c,t,active?game.stageTime:8,game.player.x);
    for(const e of game.enemies)this.enemy(c,e,t);
    for(const item of game.items)this.item(c,item,t);
    this.shots(c,game,t);
    if(active&&game.state!=='gameover')this.player(c,game.player,t,input.focus);
    this.effects(c,dt,paused);this.bomb(c,game,t);
    // Hostile rounds are always the top combat layer, including over smoke.
    for(const b of game.bullets){
      const color=b.style==='rose'?'#ff70ae':'#ffd36b';
      ellipse(c,b.x,b.y,b.r+2,b.r+3,'#26334ed9');ellipse(c,b.x,b.y,b.r+.5,b.r+1.5,color);ellipse(c,b.x,b.y-1,b.r*.46,b.r*.7,'#fffbe7');
    }
    c.restore();
    if(!paused){this.flash=Math.max(0,this.flash-dt);this.shake*=Math.exp(-dt*10);}
    if(this.flash>0&&this.motion){c.fillStyle='rgba(255,239,204,'+Math.min(.3,this.flash)+')';c.fillRect(0,0,W,H);}
    if(active)this.hud(c,game);
  }
  hud(c,g){
    c.save();
    const fade=c.createLinearGradient(0,0,0,90);fade.addColorStop(0,'#102e42e8');fade.addColorStop(1,'#102e4200');c.fillStyle=fade;c.fillRect(0,0,W,90);
    c.fillStyle='#fff0cd';c.font='700 12px sans-serif';c.textAlign='left';c.fillText('01 / 해풍의 항구',20,26);
    c.textAlign='right';c.font='700 17px monospace';c.fillText(String(g.score).padStart(7,'0'),W-20,27);
    if(g.boss){
      const e=g.boss;c.textAlign='left';c.font='700 10px sans-serif';
      let label=e.type==='midboss'?'철갑 순찰정':e.phase===1?'아이언 레이븐 / 기함':'아이언 레이븐 / 각성';
      if(e.transition>0){const p=1-e.transition/2.7;label=p<.3?'장갑 파괴':p<.73?'기계 날개 전개':'중심 동력부 점화';}
      c.fillText(label,20,49);box(c,20,56,W-40,6,'#0d2d42c9',2);
      const life=clamp(e.hp/e.maxHp,0,1);box(c,20,56,(W-40)*life,6,e.phase===2?'#ffab76':'#efcf86',2);
      c.strokeStyle='#102e42';c.lineWidth=1;for(let i=1;i<20;i++){c.beginPath();c.moveTo(20+(W-40)*i/20,56);c.lineTo(20+(W-40)*i/20,62);c.stroke();}
    }else{c.fillStyle='#e5f3dfbb';c.font='11px sans-serif';c.textAlign='left';c.fillText(g.chapter,20,45);}
    if(g.combo>=3){c.textAlign='right';c.font='italic 800 19px sans-serif';c.fillStyle='#fff3c5';c.shadowColor='#163545';c.shadowBlur=4;c.fillText(g.combo+' CHAIN',W-20,94);c.shadowBlur=0;}
    if(g.player.charging){const p=g.player;box(c,p.x-22,p.y+48,44,4,'#12394ddd',3);box(c,p.x-22,p.y+48,44*clamp(p.charge/1.15,0,1),4,p.charge>=1.15?'#ffe9b2':'#82f5cb',3);}
    c.restore();
  }
}
