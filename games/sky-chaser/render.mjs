import {W,H,clamp,PLAYER_SCALE,POWER_DURATION,STAGES,CHARGE_REQUIRED} from './engine.mjs?v=0.10.0';
import {ArtBank} from './art.mjs?v=0.10.0';
import {drawLaser} from './laser-fx.mjs?v=0.10.0';
import {drawMortars} from './forge-fx.mjs?v=0.10.0';
import {renderRatio} from './frame-loop.mjs?v=0.10.0';
import {glow,flame,normalShot} from './canvas-fx.mjs?v=0.10.0';
const TAU=Math.PI*2;
const mix=(a,b,t)=>a+(b-a)*t;
const ease=t=>{t=clamp(t,0,1);return t*t*(3-2*t);};
const seed=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
const sizes={scout:60,interceptor:66,turret:67,bomber:105,mine:57,midboss:177,gemini:244,tempest:270,vulcan:244};
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
    this.ready=this.art.load().then(()=>this.prepareScenery());
  }
  reset(){this.particles=[];this.rings=[];this.blasts=[];this.wrecks=[];this.bombBeams=[];this.damageTexts=[];this.trail=[];this.flash=0;this.shake=0;this.fxTime=0;this.lastTrail=0;this.lastTime=0;}
  hasEffects(){return this.flash>0||this.shake>.1||[this.particles,this.rings,this.blasts,this.wrecks,this.bombBeams,this.damageTexts].some(a=>a.length>0);}
  prepareScenery(){
    this.groundTiles={};
    for(const key of ['harbor','canyon','foundry']){
    const image=this.art.images[key],tile=document.createElement('canvas');
    tile.width=image.width;tile.height=image.height;
    const c=tile.getContext('2d');
    // Bake the harbor's quieter colour/contrast once. No full-screen live
    // filter, and no change to pilot, enemy, bullet or later-stage artwork.
    if(key==='harbor')c.filter='saturate(0.58) contrast(0.78) brightness(0.88)';
    c.drawImage(image,0,0);c.filter='none';
    const feather=c.createLinearGradient(0,0,0,tile.height);
    feather.addColorStop(0,'#0000');feather.addColorStop(.065,'#000');
    feather.addColorStop(.935,'#000');feather.addColorStop(1,'#0000');
    c.globalCompositeOperation='destination-in';c.fillStyle=feather;c.fillRect(0,0,tile.width,tile.height);
    this.groundTiles[key]=tile;
    }
  }
  resize(){
    this.ratio=renderRatio(this.canvas.getBoundingClientRect().width,window.devicePixelRatio);
    this.canvas.width=Math.round(W*this.ratio);this.canvas.height=Math.round(H*this.ratio);
    this.c.imageSmoothingEnabled=true;this.c.imageSmoothingQuality='high';
  }
  burst(x,y,n=15,large=false){
    for(let i=0;i<n;i++){
      const a=Math.random()*TAU,s=(large?230:135)*(.25+Math.random()*.75),life=.3+Math.random()*(large?1.4:.65);
      this.particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life,max:life,
        kind:i%5===0?'smoke':i%3===0?'metal':'spark',r:(large?5:3)+Math.random()*(large?10:4),spin:Math.random()*8-4,angle:Math.random()*TAU});
    }
    if(this.particles.length>450)this.particles.splice(0,this.particles.length-450);
  }
  explosion(x,y,large=false,type='scout',phase=1){
    const reactor=type==='tempest'&&phase===3;
    this.burst(x,y,large?64:16,large);
    this.blasts.push({x,y,age:0,life:large?1.3:.5,size:large?92:26,reactor});
    this.rings.push({x,y,age:0,life:large?.9:.4,size:large?180:48,color:reactor?'#b9fff0':'#ffe7a2'});
    if(type==='boss'){
      for(let i=0;i<9;i++)this.blasts.push({x:x+(seed(i+4)-.5)*230,y:y+(seed(i+5)-.5)*190,age:-i*.13,life:1.2,size:60+seed(i+7)*45});
      this.wrecks.push({type:'raven',x,y,age:0,life:2.6,width:326});
    }else if(type==='ignis'){
      this.wrecks.push({type:phase===1?'ignisArmor':'ignisOpen',x,y,age:0,life:2.4,
        width:phase===1?180:334,coreWidth:phase===3?76:phase===2?52:0});
      for(let i=0;i<7;i++)this.blasts.push({x:x+(seed(i+54)-.5)*215,y:y+(seed(i+61)-.5)*180,age:-i*.13,life:1,size:42+seed(i+28)*32});
    }else if(reactor){
      this.wrecks.push({type:'tempestCore',x,y,age:0,life:1.8,width:171});
      for(let i=0;i<5;i++)this.blasts.push({x:x+(seed(i+91)-.5)*100,y:y+(seed(i+97)-.5)*110,age:-.12-i*.12,life:.8,size:35+seed(i+2)*24,reactor:true});
    }else if(type!=='player')this.wrecks.push({type,x,y,age:0,life:large?1.1:.5,width:sizes[type]||60});
    this.shake=Math.max(this.shake,large?8:1.8);
  }
  consume(events){
    for(const e of events){
      if(e.kind==='explode')this.explosion(e.x,e.y,e.large,e.type,e.phase);
      if(e.kind==='partBreak'){this.explosion(e.x,e.y,false,'player');this.burst(e.x,e.y,18,true);}
      if(e.kind==='shellBreak'){this.burst(e.x,e.y,10);this.rings.push({x:e.x,y:e.y,age:0,life:.25,size:28,color:'#ffe5aa'});}
      if(e.kind==='mortarBurst'){this.burst(e.x,e.y,12);this.shake=Math.max(this.shake,1.8);}
      if(e.kind==='supply')this.rings.push({x:e.x,y:90,age:0,life:1,size:55,color:'#92ffe0'});
      if(e.kind==='stageStart')this.reset();
      if(e.kind==='hurt'){this.explosion(e.x,e.y,false,'player');this.flash=.23;this.shake=8;}
      if(e.kind==='bomb'){
        this.flash=.16;this.shake=4;this.burst(e.x,e.y,26,true);
        this.rings.push({x:e.x,y:e.y,age:0,life:.65,size:460,color:'#afffe3'});
      }
      if(e.kind==='bombStrike'){
        const targets=e.targets.length?e.targets:[{x:60+e.index%4*120,y:85}];
        targets.forEach((target,i)=>{
          const side=(i+e.index)%2?1:-1;
          this.bombBeams.push({x0:e.x+side*105,y0:e.y-76,x1:target.x,y1:target.y,age:0,life:e.final?.58:.34,final:e.final,seed:e.index+i*7});
          if(target.damage){
            this.rings.push({x:target.x,y:target.y,age:0,life:.4,size:e.final?96:47,color:'#b0ffe4'});
            if(['boss','midboss','gemini','tempest','vulcan','ignis'].includes(target.type))this.damageTexts.push({x:target.x+(e.index%2?27:-27),y:target.y+24,amount:Math.round(target.damage),age:0});
          }
        });
        this.shake=Math.max(this.shake,e.final?6:1.5);
        if(e.final)this.flash=.1;
      }
      if(e.kind==='charge'){
        this.rings.push({x:e.x,y:e.y-40*PLAYER_SCALE,age:0,life:.4,size:(e.full?65:35)*PLAYER_SCALE,color:'#a2ffe4'});
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
  background(c,t,stageTime,px=240,stage=1){
    const storm=stage===2,forge=stage===3,moody=storm||forge,altitude=moody?.08:ease((stageTime-88)/38);
    const sea=c.createLinearGradient(0,0,W,H);sea.addColorStop(0,forge?'#273039':storm?'#253e52':'#41677c');sea.addColorStop(1,forge?'#3b353b':storm?'#304e60':'#54818e');c.fillStyle=sea;c.fillRect(0,0,W,H);
    if(this.groundTiles){
      const map=this.groundTiles[forge?'foundry':storm?'canyon':'harbor'],width=W+36,height=width*map.height/map.width,period=height-160;
      // Constant world travel never eases to a halt. Feathered water edges
      // overlap, and alternating districts retain continuity at the wrap.
      const distance=t*(forge?100:storm?106:82),cycle=Math.floor(distance/period),y=-(height-H)+distance%period;
      c.save();c.globalAlpha=1-altitude*.82;
      for(let k=-1;k<=1;k++){
        const top=y+k*period;if(top>H||top+height<0)continue;
        c.save();c.translate(-18+(px-W/2)*-.035,top);
        if(Math.abs(cycle-k)%2){c.translate(width,0);c.scale(-1,1);}
        c.drawImage(map,0,0,width,height);c.restore();
      }
      c.fillStyle=moody?'#193e5e18':'#35576728';c.fillRect(0,0,W,H);c.restore();
    }
    // Reflections drift independently of the map, so the harbor feels alive.
    if(!moody){c.save();c.globalAlpha=.09*(1-altitude*.7);c.lineWidth=1;
    for(let i=0;i<24;i++){
      const x=112+seed(i+50)*265,y=(seed(i+300)*H+t*(78+seed(i)*14))%H;
      path(c,[[x,y],[x+5,y-1],[x+13,y]],'#d7f6e8',1);
    }
    c.restore();}
    for(let layer=0;layer<2;layer++)for(let i=0;i<(layer?5:7);i++){
      const s=(layer?.85:moody?.47:.7)+seed(i+layer*19)*.6;
      const x=seed(i+layer*72+18)*(W+180)-100+(px-240)*(layer?-.035:-.012);
      const y=((seed(i+layer*110)*1100+t*(layer?142:43))%1100)-240;
      if(x>=W||y>=H||x+384*s<=0||y+192*s<=0)continue;
      c.save();c.globalAlpha=moody?(layer?.065:.045):(layer?.17:.24)+altitude*(layer?.23:.13);
      c.drawImage(this.clouds[(i+layer)%4],x,y,384*s,192*s);c.restore();
    }
    if(altitude&&!moody){const sky=c.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#b8d9e72b');sky.addColorStop(1,'#86b6c900');c.globalAlpha=altitude;c.fillStyle=sky;c.fillRect(0,0,W,H);c.globalAlpha=1;}
    if(forge){
      for(let i=0;i<14;i++){
        const x=i%2?W-18-seed(i+31)*40:18+seed(i+31)*40,y=(seed(i+38)*H+t*125)%H;
        ellipse(c,x,y,.6+seed(i)*.7,1.5,'#ffbb7330');
      }
    }
    if(storm&&this.motion){
      // Distant lightning stays at the edges, well below hostile telegraphs.
      const pulse=Math.max(0,Math.sin(t*.75)-.985)*3;
      c.save();c.globalAlpha=pulse;path(c,[[18,80],[37,135],[20,182],[49,250]],'#a4cad3',2);
      path(c,[[461,300],[441,345],[458,395],[432,448]],'#a4cad3',2);c.restore();
    }
    if(this.motion){
      c.save();c.globalAlpha=.11;
      for(let i=0;i<18;i++){
        const x=seed(i+550)*W,y=(seed(i+710)*850+t*(250+seed(i+32)*160))%850-65;
        path(c,[[x,y],[x,y+12+seed(i+22)*19]],'#dbffec',.8);
      }c.restore();
    }
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
  scarf(c,p,t,shadow=false){
    c.save();c.scale(PLAYER_SCALE,PLAYER_SCALE);
    for(const side of [-1,1]){
      const length=side<0?43:34,phase=side<0?.3:2.1,points=[];
      for(let i=0;i<=20;i++){
        const u=i/20,free=u**1.45;
        const wave=Math.sin(t*8.8-u*6.3+phase)*5.4*free+
          Math.sin(t*14.2-u*10.5+phase)*1.4*u*u;
        points.push({
          x:side*3+p.bank*1.2+side*(14*u+7*Math.sin(u*Math.PI))-p.bank*9*u**1.3+wave,
          y:-8+length*u+Math.sin(t*6.8-u*5+phase)*2.1*u*u,
          width:(8.4-3.2*u)*(1-u*.38+Math.cos(t*6.2-u*7+phase)*.24*u)
        });
      }
      const edges=points.map((point,i)=>{
        const a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)];
        const dx=b.x-a.x,dy=b.y-a.y,n=Math.hypot(dx,dy)||1;
        return {l:[point.x+dy/n*point.width/2,point.y-dx/n*point.width/2],
          r:[point.x-dy/n*point.width/2,point.y+dx/n*point.width/2]};
      });
      c.beginPath();
      edges.forEach((e,i)=>i?c.lineTo(...e.l):c.moveTo(...e.l));
      for(let i=edges.length-1;i>=0;i--)c.lineTo(...edges[i].r);
      c.closePath();
      if(shadow)c.fillStyle='#132d42';
      else{
        const cloth=c.createLinearGradient(0,-8,side*18,length-8);
        cloth.addColorStop(0,'#ffad4c');cloth.addColorStop(.32,'#f58a35');
        cloth.addColorStop(.72,'#dd6128');cloth.addColorStop(1,'#be4b26');
        c.fillStyle=cloth;
      }
      c.fill();
      if(!shadow){
        c.lineWidth=.48;c.lineJoin='round';c.strokeStyle='#8b422cb0';c.stroke();
        for(const start of [2,12])path(c,edges.slice(start,start+6).map((e,i)=>[mix(points[i+start].x,e.l[0],.36),mix(points[i+start].y,e.l[1],.36)]),'#ffc36b99',.62);
        path(c,edges.slice(3).map((e,i)=>[mix(points[i+3].x,e.r[0],.65),mix(points[i+3].y,e.r[1],.65)]),'#a84a2b55',.45);
      }
    }
    c.restore();
  }
  player(c,p,t,focus){
    if(!this.art.loaded)return;
    const frame=p.bank<-.22?1:p.bank>.22?2:0,s=this.art.sprites.lumiFlight[frame],width=86*PLAYER_SCALE;
    c.save();c.translate(p.x+12*PLAYER_SCALE,p.y+26*PLAYER_SCALE);c.rotate(p.bank*.035);
    c.globalAlpha=.15;this.scarf(c,p,t,true);stamp(c,s,width,1,'shadow');c.restore();
    c.save();c.translate(p.x,p.y);c.rotate(p.bank*.045);
    c.globalAlpha=p.inv>0?.65+Math.sin(t*30)*.25:1;
    stamp(c,s,width);this.scarf(c,p,t);
    if(p.inv>0){c.globalAlpha=.3;stamp(c,s,width,Math.max(0,Math.sin(t*20))*.5,'flash');}
    c.restore();
    if(p.charge>=CHARGE_REQUIRED){
      const q=1;
      glow(c,p.x,p.y-40*PLAYER_SCALE,(20+q*35)*PLAYER_SCALE,'#51d8ce',.3+q*.3);
      c.save();c.translate(p.x,p.y-5*PLAYER_SCALE);c.scale(PLAYER_SCALE,PLAYER_SCALE);c.rotate(-t*2);c.strokeStyle=q>=1?'#fff2ba':'#9df6e6';c.lineWidth=1.5;
      c.beginPath();c.arc(0,0,37,0,TAU*q);c.stroke();
      for(let i=0;i<6;i++){c.rotate(TAU/6);path(c,[[-3,-38],[0,-44],[3,-38]],'#fff5c9',1.1);}c.restore();
    }
    if(focus){ellipse(c,p.x,p.y,p.r+1,p.r+1,'#173248');ellipse(c,p.x,p.y,p.r,p.r,'#fff8df');ellipse(c,p.x,p.y,p.r*.45,p.r*.45,'#e55c83');}
  }
  enemy(c,e,t){
    if(!this.art.loaded)return;
    if(e.type==='vulcan'||e.type==='ignis'){this.forgeBoss(c,e,t);return;}
    if(e.type==='gemini'||e.type==='tempest'){this.stormBoss(c,e,t);return;}
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
  stormBoss(c,e,t){
    const s=this.art.sprites,final=e.type==='tempest',width=final?244:244;
    const progress=e.transition>0?ease(1-e.transition/2.2):1;
    c.save();c.translate(e.x+13,e.y+26);stamp(c,s[e.type],width,.28,'shadow');c.restore();
    c.save();c.translate(e.x,e.y);
    if(!final){
      stamp(c,s.gemini,width);if(e.flash>0)stamp(c,s.gemini,width,e.flash/.065*.65,'flash');
      glow(c,0,-25,20,'#4be5ed',.2);
    }else{
      const expanded=e.phase===1?0:e.phase===2?progress:1;
      c.save();c.rotate(t*(e.phase===1?.035:e.phase===2?.32:-.52));
      if(e.phase<3)stamp(c,s.tempestRing,274+expanded*62);
      else if(e.transition>0){
        for(let i=0;i<4;i++){
          const side=i%2?1:-1,down=i<2?-1:1;
          part(c,s.tempestRing,336,i%2*.5,Math.floor(i/2)*.5,.5,.5,
            side*progress*64,down*progress*58,side*progress*.18,1-progress);
        }
      }c.restore();
      if(e.phase<3){
        stamp(c,s.tempest,width);if(e.flash>0)stamp(c,s.tempest,width,e.flash/.065*.65,'flash');
        stamp(c,s.tempestCore,e.phase===1?68:90);glow(c,0,0,55,'#34dbe9',.2+expanded*.2);
      }else{
        stamp(c,s.tempestCore,95+progress*76);if(e.flash>0)stamp(c,s.tempestCore,171,e.flash/.065*.7,'flash');
        if(e.transition>0)for(let i=0;i<4;i++){
          const side=i%2?1:-1,down=i<2?-1:1;
          part(c,s.tempest,width,i%2*.5,Math.floor(i/2)*.5,.5,.5,
            side*progress*104,down*progress*90,side*progress*.7,1-progress);
        }
        glow(c,0,0,91,'#3de9f0',.2+.08*Math.sin(t*6));
      }
    }
    c.restore();
    for(const p of e.parts){
      const breaking=p.dead&&e.transition>0&&e.phase===2;
      if(p.dead&&!breaking){this.smoke(c,p.x,p.y,t,.5);continue;}
      c.save();c.translate(p.x+(breaking?p.side*progress*100:0),p.y+(breaking?progress*90:0));
      if(breaking){c.rotate(p.side*progress);c.globalAlpha=1-progress;}
      if(p.side<0)c.scale(-1,1);
      const sprite=final?s.tempestPod:s.geminiPod,pw=final?47:43;
      stamp(c,sprite,pw);if(p.flash>0)stamp(c,sprite,pw,p.flash/.065*.8,'flash');
      glow(c,0,-28,14,'#3de9f0',.25);c.restore();
      if(!p.dead){box(c,p.x-21,p.y+62,42,3,'#142636',2);box(c,p.x-21,p.y+62,42*p.hp/p.maxHp,3,'#9ee3d8',2);}
    }
  }
  lasers(c,g){
    for(const laser of g.lasers)drawLaser(c,laser);
  }
  ignisRig(c,unfold,t,coreWidth=52,flash=0){
    const s=this.art.sprites.ignisOpen,w=334,h=w*s.ratio,fold=1-ease(unfold);
    for(const side of [-1,1]){
      c.save();c.translate(side*w*.17,-h*.06);c.rotate(-side*fold*.8+side*Math.sin(t*1.7)*.012*(1-fold));
      c.scale(1-fold*.42,1);c.translate(-side*w*.17,h*.06);
      part(c,s,w,side<0?0:.66,0,.34,1,side*-fold*32,fold*12);c.restore();
    }
    part(c,s,w,.34,0,.32,1);
    if(flash>0&&unfold>=.99)stamp(c,s,w,flash,'flash');
    stamp(c,this.art.sprites.ignisHeart,coreWidth);
    glow(c,0,0,coreWidth*.65,'#ffab4f',.3+.05*Math.sin(t*5));
  }
  forgeBoss(c,e,t){
    const s=this.art.sprites,dragon=e.type==='ignis',progress=e.transition>0?ease(1-e.transition/2.6):1;
    c.save();c.translate(e.x+13,e.y+27);stamp(c,dragon?(e.phase===1?s.ignisArmor:s.ignisOpen):s.vulcan,
      dragon?(e.phase===1?180:334):244,.24,'shadow');c.restore();
    c.save();c.translate(e.x,e.y);
    if(!dragon){
      stamp(c,s.vulcan,244);if(e.flash>0)stamp(c,s.vulcan,244,e.flash/.065*.7,'flash');
      glow(c,0,-24,26,'#ffa54b',.25+.08*Math.sin(t*4));
      if(e.hp/e.maxHp<.4)this.smoke(c,0,-30,t,.9);
    }else if(e.phase===1){
      stamp(c,s.ignisArmor,180);if(e.flash>0)stamp(c,s.ignisArmor,180,e.flash/.065*.7,'flash');
      for(const x of [-47,47])glow(c,x,12,17,'#ff963e',.22+.08*Math.sin(t*4));
    }else if(e.phase===2&&e.transition>0){
      const unfold=ease((progress-.18)/.67);c.save();c.globalAlpha=ease(progress/.3);this.ignisRig(c,unfold,t);c.restore();
      const peel=ease((progress-.1)/.8),alpha=1-ease((progress-.36)/.6);
      for(let i=0;i<4;i++){
        const side=i%2?1:-1,down=i<2?-1:1;
        part(c,s.ignisArmor,180,i%2*.5,Math.floor(i/2)*.5,.5,.5,
          side*peel*112,down*peel*74,side*peel*.65,alpha);
      }
    }else{
      const core=e.phase===3?52+24*progress:52;this.ignisRig(c,1,t,core,e.flash/.065*.7);
      if(e.phase===3){
        for(const x of [-37,37]){this.smoke(c,x,-8,t,.7);glow(c,x,0,22,'#ff9c42',.25);}
        if(e.transition>0){
          c.save();c.globalAlpha=Math.sin(progress*Math.PI)*.5;c.strokeStyle='#ffdba1';c.lineWidth=1.5;
          c.beginPath();c.arc(0,0,30+progress*92,0,TAU);c.stroke();c.restore();
        }
      }
    }
    c.restore();
    for(const p of e.parts){
      const breaking=dragon&&p.dead&&e.phase===2&&e.transition>0;
      if(p.dead&&!breaking){if(e.phase===1)this.smoke(c,p.x,p.y,t,.5);continue;}
      c.save();c.translate(p.x+(breaking?p.side*progress*100:0),p.y+(breaking?progress*86:0));
      if(breaking){c.rotate(p.side*progress*.8);c.globalAlpha=1-progress;}
      if(p.side<0)c.scale(-1,1);
      const pod=dragon?s.ignisPod:s.vulcanPod;stamp(c,pod,43);if(p.flash>0)stamp(c,pod,43,p.flash/.065*.8,'flash');c.restore();
      if(!p.dead){box(c,p.x-21,p.y+61,42,3,'#172a35',2);box(c,p.x-21,p.y+61,42*p.hp/p.maxHp,3,'#edba7e',2);}
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
    if(item.type==='power'){
      glow(c,item.x,item.y,27,'#55f0c1',.2);
      if(item.supply&&item.age<.8){c.save();c.globalAlpha=(1-item.age/.8)*.5;path(c,[[item.x,0],[item.x,item.y-20]],'#a2ffe2',1);c.restore();}
    }
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
        normalShot(c,s.x,s.y);
      }
    }
  }
  effects(c,dt,paused){
    for(const beam of this.bombBeams){
      if(!paused)beam.age+=dt;
      const p=beam.age/beam.life,alpha=Math.max(0,1-p);
      c.save();c.globalCompositeOperation='lighter';
      c.globalAlpha=alpha*.45;path(c,[[beam.x0,beam.y0],[beam.x1,beam.y1]],'#4cdcca',beam.final?32:17);
      c.globalAlpha=alpha;path(c,[[beam.x0,beam.y0],[beam.x1,beam.y1]],'#d9ffdd',beam.final?11:5);
      path(c,[[beam.x0,beam.y0],[beam.x1,beam.y1]],'#fff6cf',beam.final?4:1.8);
      const points=[];
      for(let i=0;i<9;i++){
        const q=i/8,jitter=i===0||i===8?0:Math.sin(beam.seed+i*4+beam.age*35)*11;
        points.push([mix(beam.x0,beam.x1,q)+jitter,mix(beam.y0,beam.y1,q)]);
      }
      path(c,points,'#a9fff0',1.6);
      glow(c,beam.x1,beam.y1,beam.final?54:30,'#baffd7',alpha*.7);c.restore();
    }
    this.bombBeams=this.bombBeams.filter(b=>b.age<b.life);
    for(const w of this.wrecks){
      if(!paused)w.age+=dt;const s=this.art.sprites[w.type];if(!s)continue;
      c.save();c.translate(w.x,w.y+w.age*35);c.rotate(w.age*.15);const fade=1-w.age/w.life;
      if(w.type==='raven'||w.type==='ignisOpen'){
        for(let i=0;i<3;i++)part(c,s,w.width,i/3,0,1/3,1,(i-1)*w.age*35,w.age*w.age*30,(i-1)*w.age*.35,fade);
        if(w.coreWidth){c.save();c.translate(0,w.age*w.age*30);stamp(c,this.art.sprites.ignisHeart,w.coreWidth,fade);c.restore();}
      }else if(w.type==='tempestCore'){
        for(let i=0;i<4;i++){
          const side=i%2?1:-1,down=i<2?-1:1;
          part(c,s,w.width,i%2*.5,Math.floor(i/2)*.5,.5,.5,
            side*w.age*57,down*w.age*44,side*w.age*.65,fade);
        }
      }else stamp(c,s,w.width,fade*.65);c.restore();
    }
    this.wrecks=this.wrecks.filter(w=>w.age<w.life);
    for(const b of this.blasts){
      if(!paused)b.age+=dt;if(b.age<0)continue;const p=b.age/b.life;
      glow(c,b.x,b.y,b.size*(.3+p),b.reactor?'#49e8ee':'#ffad4e',(1-p)*.8);
      for(let i=0;i<7;i++){
        const a=i*2.4,dist=b.size*p*.55,x=b.x+Math.cos(a)*dist,y=b.y+Math.sin(a)*dist,r=b.size*(.14+Math.sin(Math.PI*p)*.2);
        flame(c,x,y,r,!!b.reactor,p<.25,1-p);
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
    for(const text of this.damageTexts){
      if(!paused)text.age+=dt;
      c.save();c.globalAlpha=clamp(1-text.age/.72,0,1);c.font='900 19px sans-serif';c.textAlign='center';
      c.lineWidth=3;c.strokeStyle='#153c50';c.strokeText('-'+text.amount,text.x,text.y-text.age*45);
      c.fillStyle='#fff0bb';c.fillText('-'+text.amount,text.x,text.y-text.age*45);c.restore();
    }
    this.damageTexts=this.damageTexts.filter(text=>text.age<.72);
  }
  bomb(c,g,t,foreground=false){
    const attack=g.activeBomb;if(!attack||!this.art.loaded)return;
    const age=attack.age,envelope=ease(age/.22)*(1-ease((age-2.5)/.5));
    if(!foreground){
      // Lumi's own mechanical wings become a luminous rune battery.
      const s=this.art.sprites.lumi[0],unfold=ease(age/.42),wingW=170;
      glow(c,attack.x,attack.y-44,190,'#53d8c4',envelope*.3);
      c.save();c.translate(attack.x,attack.y-43);c.globalAlpha=envelope*.78;
      for(const side of [-1,1]){
        c.save();c.scale(side,1);c.rotate(-(1-unfold)*.7-.13);
        c.shadowColor='#96ffdc';c.shadowBlur=18;
        c.drawImage(s.image,s.image.width*.6,s.image.height*.20,s.image.width*.4,s.image.height*.42,
          16,-103,wingW*unfold,140);
        c.restore();
      }
      c.globalCompositeOperation='lighter';c.rotate(-age*.6);
      const radius=110+unfold*20;c.strokeStyle='#afffe2';c.lineWidth=2;
      for(const scale of [1,.85,.6]){
        c.beginPath();c.ellipse(0,20,radius*scale,radius*scale*.6,0,0,TAU);c.stroke();
      }
      for(let i=0;i<12;i++){
        const a=i*TAU/12,x=Math.cos(a)*radius,y=20+Math.sin(a)*radius*.6;
        path(c,[[x-4,y],[x,y-7],[x+4,y],[x,y+7],[x-4,y]],i%2?'#ffdca5':'#caffea',1.5);
      }
      c.restore();
      for(const side of [-1,1])glow(c,attack.x+side*105,attack.y-76,23,'#caffea',envelope*.8);
      return;
    }
    // A short portrait cut-in identifies the pilot without covering the boss.
    const cutin=ease(age/.12)*(1-ease((age-.62)/.25));
    if(cutin>0){
      c.save();c.translate(-195+(210*cutin),H-270);c.globalAlpha=cutin;
      c.beginPath();c.moveTo(0,0);c.lineTo(170,0);c.lineTo(200,185);c.lineTo(0,185);c.closePath();c.clip();
      c.fillStyle='#12394fe8';c.fillRect(0,0,205,190);
      const portrait=this.art.images.portrait;
      c.drawImage(portrait,190,260,580,650,-8,-8,205,230);
      const shade=c.createLinearGradient(0,105,0,190);shade.addColorStop(0,'#12394f00');shade.addColorStop(1,'#12394ff5');
      c.fillStyle=shade;c.fillRect(0,100,205,90);
      c.fillStyle='#d3ffe5';c.font='800 12px sans-serif';c.fillText('LUMI',14,153);
      c.fillStyle='#fff0c4';c.font='900 24px sans-serif';c.fillText(attack.spec.name,12,180);c.restore();
    }
    if(age>.88&&age<2.65){
      c.save();c.globalAlpha=envelope*.8;c.textAlign='center';c.font='700 11px sans-serif';
      c.fillStyle='#e4ffe3';c.shadowColor='#163c4e';c.shadowBlur=5;
      c.fillText('천익 섬광',attack.x,Math.min(H-24,attack.y+64));c.restore();
    }
    const finale=ease((age-2.36)/.08)*(1-ease((age-2.53)/.24));
    if(finale>0){
      c.save();c.globalAlpha=finale*.38;c.globalCompositeOperation='lighter';
      const column=c.createLinearGradient(attack.x-62,0,attack.x+62,0);
      column.addColorStop(0,'#92ffe000');column.addColorStop(.5,'#eaffe1');column.addColorStop(1,'#92ffe000');
      c.fillStyle=column;c.fillRect(attack.x-62,60,124,attack.y);
      c.strokeStyle='#dbffe9';c.lineWidth=3;c.beginPath();c.arc(attack.x,attack.y-50,(age-2.36)*780,0,TAU);c.stroke();c.restore();
    }
  }
  draw(game,visualTime,dt,input={}){
    const c=this.c,active=game.state!=='ready',t=active?game.time:visualTime,paused=game.state==='paused';
    c.setTransform(this.ratio,0,0,this.ratio,0,0);c.save();
    if(this.motion&&this.shake>.1&&!paused)c.translate((Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake);
    this.background(c,active?game.stageElapsed:visualTime,active?game.stageTime:8,game.player.x,game.stage);
    this.bomb(c,game,t,false);
    for(const e of game.enemies)this.enemy(c,e,t);
    for(const item of game.items)this.item(c,item,t);
    this.shots(c,game,t);
    if(active&&game.state!=='gameover')this.player(c,game.player,t,input.focus);
    this.effects(c,dt,paused);this.bomb(c,game,t,true);
    this.lasers(c,game);
    drawMortars(c,game.mortars);
    // Hostile rounds are always the top combat layer, including over smoke.
    for(const b of game.bullets){
      const color=b.style==='violet'?'#c7a0ff':b.style==='rose'?'#ff70ae':'#ffd36b';
      ellipse(c,b.x,b.y,b.r+2,b.r+3,'#26334ed9');ellipse(c,b.x,b.y,b.r+.5,b.r+1.5,color);ellipse(c,b.x,b.y-1,b.r*.46,b.r*.7,'#fffbe7');
    }
    c.restore();
    if(!paused){this.flash=Math.max(0,this.flash-dt);this.shake*=Math.exp(-dt*10);}
    if(this.flash>0&&this.motion){c.fillStyle='rgba(255,239,204,'+Math.min(.3,this.flash)+')';c.fillRect(0,0,W,H);}
    if(active)this.hud(c,game);
    if(game.introTimer>0){
      c.save();c.fillStyle='#102536b8';c.fillRect(0,250,W,120);
      c.textAlign='center';c.fillStyle='#9fe7dc';c.font='700 13px sans-serif';c.fillText('STAGE 0'+game.stage,W/2,291);
      c.fillStyle='#fff1ca';c.font='900 33px sans-serif';c.fillText(STAGES[game.stage].name,W/2,338);
      c.restore();
    }
  }
  hud(c,g){
    c.save();
    const fade=c.createLinearGradient(0,0,0,90);fade.addColorStop(0,'#102e42e8');fade.addColorStop(1,'#102e4200');c.fillStyle=fade;c.fillRect(0,0,W,90);
    c.fillStyle='#fff0cd';c.font='700 12px sans-serif';c.textAlign='left';c.fillText('0'+g.stage+' / '+STAGES[g.stage].name+(g.mode!=='campaign'?' · 연습':''),20,26);
    c.textAlign='right';c.font='700 17px monospace';c.fillText(String(g.score).padStart(7,'0'),W-20,27);
    if(g.boss){
      const e=g.boss;c.textAlign='left';c.font='700 10px sans-serif';
      let label=e.type==='midboss'?'철갑 순찰정':e.phase===1?'아이언 레이븐 / 기함':'아이언 레이븐 / 각성';
      if(e.type==='gemini')label='쌍뢰정 제미니 / 좌우 포대 파괴';
      if(e.type==='tempest')label='템페스트 / '+['','외곽 포대','회전 고리','노출된 동력핵'][e.phase];
      if(e.type==='vulcan')label='화로거북 볼칸 / 폭발탄 요격';
      if(e.type==='ignis')label='이그니스 / '+['','장갑 용광로','기계 날개 전개','과열된 심장'][e.phase];
      if(e.transition>0){
        if(e.type==='ignis')label=e.phase===2?'봉인 장갑 해제 · 홍련룡 각성':'냉각 한계 돌파 · 심장 노출';
        else if(e.type==='tempest')label=e.phase===2?'외곽 포대 이탈 · 회전 고리 전개':'요새 장갑 붕괴 · 동력핵 노출';
        else {const p=1-e.transition/2.7;label=p<.3?'장갑 파괴':p<.73?'기계 날개 전개':'중심 동력부 점화';}
      }
      c.fillText(label,20,49);box(c,20,56,W-40,6,'#0d2d42c9',2);
      const life=clamp(e.hp/e.maxHp,0,1);box(c,20,56,(W-40)*life,6,e.phase===2?'#ffab76':'#efcf86',2);
      c.strokeStyle='#102e42';c.lineWidth=1;for(let i=1;i<20;i++){c.beginPath();c.moveTo(20+(W-40)*i/20,56);c.lineTo(20+(W-40)*i/20,62);c.stroke();}
    }else{c.fillStyle='#e5f3dfbb';c.font='11px sans-serif';c.textAlign='left';c.fillText(g.chapter,20,45);}
    if(g.combo>=3){c.textAlign='right';c.font='italic 800 19px sans-serif';c.fillStyle='#fff3c5';c.shadowColor='#163545';c.shadowBlur=4;c.fillText(g.combo+' CHAIN',W-20,94);c.shadowBlur=0;}
    if(g.player.charge>0){
      const p=g.player,q=clamp(p.charge/CHARGE_REQUIRED,0,1),y=p.y>H-95?p.y-44*PLAYER_SCALE:p.y+48*PLAYER_SCALE;
      box(c,p.x-22*PLAYER_SCALE,y,44*PLAYER_SCALE,4,'#12394ddd',3);
      box(c,p.x-22*PLAYER_SCALE,y,44*PLAYER_SCALE*q,4,q>=1?'#ffe9b2':'#82f5cb',3);
      if(q>=1){c.font='800 10px sans-serif';c.textAlign='left';c.fillStyle='#fff0bf';c.fillText('Z',p.x+25*PLAYER_SCALE,y+5);}
    }
    const p=g.player,warning=p.power>1&&p.powerTime<=5;
    box(c,14,H-41,178,29,'#112d40dc',6);c.textAlign='left';c.font='700 11px sans-serif';
    c.fillStyle=warning?'#ffbd91':'#d8f6e4';
    c.fillText('P'+p.power+(p.power>1?'  '+Math.ceil(p.powerTime)+'초':'  기본 화력'),24,H-23);
    box(c,109,H-28,70,5,'#345568',2);
    box(c,109,H-28,70*(p.power>1?p.powerTime/POWER_DURATION:1),5,warning?'#ffac7d':'#9be7cd',2);
    c.textAlign='right';c.fillStyle='#fff0cd';c.fillText('♥ '+g.lives+'   ✦ '+g.bombs,W-19,H-23);
    c.restore();
  }
}
