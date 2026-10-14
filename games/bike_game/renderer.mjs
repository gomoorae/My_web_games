import { randomGenerator, VISIBLE_DISTANCE, ROAD_HALF_METERS, roadOffset } from './core.mjs?v=3.0.0-a3';
import { drawVehicle } from './vehicles.mjs?v=3.0.0-a3';
function clampRoadSample(samples,z){
  if(!samples)return 0;
  const position=Math.max(0,Math.min(samples.length-1,(z+40)/10));
  const index=Math.min(samples.length-2,Math.floor(position)),fraction=position-index;
  return samples[index]+(samples[index+1]-samples[index])*fraction;
}
export class Renderer {
  constructor(canvas) {
    this.canvas = canvas; this.ctx = canvas.getContext('2d', { alpha: false });
    this.backdrop = document.createElement('canvas'); this.backgroundSector = -1;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resize();
  }
  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.w = Math.max(1, rect.width); this.h = Math.max(1, rect.height);
    this.dpr = Math.min(devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.w * this.dpr); this.canvas.height = Math.round(this.h * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.horizon = this.h * .24;
    const touchLayout = this.w <= 900 || matchMedia('(any-pointer: coarse)').matches;
    this.ground = this.h < 500 ? this.h * .76 : Math.min(this.h * .84, this.h - (touchLayout ? 132 : 90));
    this.halfRoad = this.w * (this.w < 600 ? .55 : .48);
    this.backgroundSector = -1;
  }
  project(z, x = 0) {
    const scale = 34 / Math.max(8, z + 34);
    const sample=clampRoadSample(this.roadSamples,z);
    const bend=sample*this.halfRoad/ROAD_HALF_METERS*scale;
    const center = this.w / 2 + bend - this.playerX * this.halfRoad * .25 * Math.min(scale, 1);
    return { x: center + x * this.halfRoad * scale, y: this.horizon + (this.ground - this.horizon) * scale, scale, center, half: this.halfRoad * scale };
  }
  poly(color, points) {
    const c = this.ctx; c.fillStyle = color; c.beginPath();
    points.forEach((p,i)=> i ? c.lineTo(p[0],p[1]) : c.moveTo(p[0],p[1])); c.closePath(); c.fill();
  }
  band(a,b,left,right,color) { this.poly(color,[[a.center+a.half*left,a.y],[a.center+a.half*right,a.y],[b.center+b.half*right,b.y],[b.center+b.half*left,b.y]]); }
  makeBackground(sector) {
    this.backgroundSector = sector;
    this.backdrop.width = Math.ceil(this.w * this.dpr); this.backdrop.height = Math.ceil(this.h * this.dpr);
    const c = this.backdrop.getContext('2d'); c.setTransform(this.dpr,0,0,this.dpr,0,0);
    const w=this.w,h=this.h,y=this.horizon;
    const sky=c.createLinearGradient(0,0,0,y*1.5);
    if (sector===1) { sky.addColorStop(0,'#080e1b');sky.addColorStop(.7,'#10232e');sky.addColorStop(1,'#355163'); }
    else { sky.addColorStop(0,sector===2?'#11172d':'#071426');sky.addColorStop(.55,sector===2?'#434059':'#203b59');sky.addColorStop(1,sector===2?'#b17467':'#647080'); }
    c.fillStyle=sky;c.fillRect(0,0,w,h);
    const rand=randomGenerator(81); c.fillStyle='#cbdfeb';
    for(let i=0;i<(sector===1?0:75);i++){c.globalAlpha=rand()*.5+.12;c.fillRect(rand()*w,rand()*y*.76,rand()*1.3+.5,1);}
    c.globalAlpha=1;
    if(sector!==1){
      const mx=w*.78,my=y*.43,r=Math.min(w,h)*.034;
      const glow=c.createRadialGradient(mx,my,0,mx,my,r*5);glow.addColorStop(0,'#c8e4e23a');glow.addColorStop(1,'#c8e4e200');c.fillStyle=glow;c.fillRect(mx-r*5,my-r*5,r*10,r*10);
      c.fillStyle='#d9e9e3';c.beginPath();c.arc(mx,my,r,0,Math.PI*2);c.fill();
      c.fillStyle='#a6c7ce44';c.beginPath();c.arc(mx+r*.25,my-r*.16,r*.78,0,Math.PI*2);c.fill();
      for(let layer=0;layer<3;layer++){
        let bx=-10;
        while(bx<w){const bw=10+rand()*w*.035,bh=(.025+rand()*.14)*h*(.55+layer*.2); const by=y+14-layer*5;
          c.fillStyle=['#26374b','#192b41','#112137'][layer];c.fillRect(bx,by-bh,bw,bh+10);
          if(rand()<.2){c.fillRect(bx+bw*.45,by-bh-15,2,18);c.fillStyle='#e98e7777';c.fillRect(bx+bw*.45,by-bh-15,2,2);}
          if(layer>0)for(let wx=bx+4;wx<bx+bw-3;wx+=7)for(let wy=by-bh+7;wy<by-4;wy+=9){if(rand()<.4){c.fillStyle=rand()<.65?'#aacdd247':'#efc28f6b';c.fillRect(wx,wy,2,3);}}
          bx+=bw+3+rand()*9;
        }
      }
    }
    c.fillStyle=sector===1?'#0c1824':'#0b1c2c';c.fillRect(0,y+15,w,h-y);
    if(sector===0){for(let i=0;i<75;i++){const wy=y+20+rand()*h*.55;c.fillStyle=i%3===0?'#83d4d51d':'#57799320';c.fillRect(rand()*w,wy,10+rand()*w*.13,1);}}
    if(sector===2){c.fillStyle='#b189781c';c.fillRect(0,y+14,w,3);}
  }
  road() {
    const c=this.ctx,step=5;
    for(let z=570;z>-24;z-=step){
      const a=this.project(z),b=this.project(z-step),stripe=Math.floor((this.distance+z)/10)%2===0;
      this.band(a,b,-1.26,1.26,this.sector===1?'#192b36':'#1a2a38');
      this.band(a,b,-1,1,stripe?'#263443':'#293847');
      this.band(a,b,-1.06,-1.015,stripe?'#bbc9c6':'#536a77');this.band(a,b,1.015,1.06,stripe?'#bbc9c6':'#536a77');
      this.band(a,b,-.977,-.968,'#b5cebf');this.band(a,b,.968,.977,'#b5cebf');
      if((this.distance+z)%18<8){for(const x of [-.5,0,.5])this.band(a,b,x-.004,x+.004,'#b2c3c5');}
      // Parallel asphalt seams reinforce forward motion without frame-random noise.
      this.band(a,b,-.29,-.284,'#ffffff04');this.band(a,b,.21,.215,'#0000000c');
    }
    const fog=c.createLinearGradient(0,this.horizon,0,this.horizon+this.h*.12);fog.addColorStop(0,this.sector===1?'#2f495cff':'#3f5860ee');fog.addColorStop(1,'#3f586000');c.fillStyle=fog;c.fillRect(0,this.horizon,this.w,this.h*.12);
  }
  tunnelWalls() {
    if(this.sector!==1)return;
    for(let z=570;z>-24;z-=10){
      const a=this.project(z),b=this.project(z-10);
      const ar=a.y-a.scale*this.h*.71,br=b.y-b.scale*this.h*.71;
      const band=Math.floor((this.distance+z)/42)%2===0;
      this.poly(band?'#112330':'#10212d',[[a.center-a.half*1.23,a.y],[a.center-a.half*1.23,ar],[b.center-b.half*1.23,br],[b.center-b.half*1.23,b.y]]);
      this.poly(band?'#132936':'#112632',[[a.center+a.half*1.23,a.y],[a.center+a.half*1.23,ar],[b.center+b.half*1.23,br],[b.center+b.half*1.23,b.y]]);
      this.poly(band?'#0d1c29':'#0b1824',[[a.center-a.half*1.23,ar],[a.center+a.half*1.23,ar],[b.center+b.half*1.23,br],[b.center-b.half*1.23,br]]);
    }
  }
  roadside(time) {
    const c=this.ctx;
    for(let z=560-(this.distance%32);z>-15;z-=32){
      const p=this.project(z);if(p.y>this.h+100)continue;
      for(const side of [-1,1]){
        const x=p.center+side*p.half*1.11,ph=p.scale*Math.min(this.h*.38,this.w*.27),top=p.y-ph;
        c.strokeStyle=this.sector===1?'#547b8999':'#526a7b';c.lineWidth=Math.max(1,3*p.scale);
        c.beginPath();c.moveTo(x,p.y);c.lineTo(x,top);c.lineTo(x-side*p.half*.23,top+ph*.08);c.stroke();
        c.strokeStyle=this.sector===2?'#ffd9a9':'#a1efea';c.lineWidth=Math.max(1,4*p.scale);c.beginPath();c.moveTo(x-side*p.half*.11,top+ph*.04);c.lineTo(x-side*p.half*.23,top+ph*.08);c.stroke();
        c.fillStyle='#7ee2d311';c.beginPath();c.ellipse(x-side*p.half*.2,p.y,p.half*.23,4*p.scale,0,0,Math.PI*2);c.fill();
        c.fillStyle='#f5b886';c.fillRect(x-2*p.scale,p.y-10*p.scale,4*p.scale,3*p.scale);
      }
    }
    if(this.sector===1){
      for(let z=520-(this.distance%42);z>-5;z-=42){
        const p=this.project(z),roof=p.y-p.scale*this.h*.71;
        c.strokeStyle='#387c852b';c.lineWidth=Math.max(1,8*p.scale);c.beginPath();c.moveTo(p.center-p.half*1.22,p.y);c.lineTo(p.center-p.half*1.22,roof+this.h*.06*p.scale);c.lineTo(p.center-p.half*.95,roof);c.lineTo(p.center+p.half*.95,roof);c.lineTo(p.center+p.half*1.22,roof+this.h*.06*p.scale);c.lineTo(p.center+p.half*1.22,p.y);c.stroke();
        c.strokeStyle='#a5f2dd';c.lineWidth=Math.max(1,3*p.scale);c.beginPath();c.moveTo(p.center-p.half*.87,roof);c.lineTo(p.center-p.half*.25,roof);c.moveTo(p.center+p.half*.25,roof);c.lineTo(p.center+p.half*.87,roof);c.stroke();
      }
    }
    const next=(Math.floor(this.distance/700)+1)*700,z=next-this.distance;
    if(z<410 && z>0){
      const p=this.project(z),sw=p.half*1.5,sh=sw*.15,sy=p.y-p.scale*this.h*.45;
      c.strokeStyle='#607887';c.lineWidth=Math.max(1,5*p.scale);c.beginPath();c.moveTo(p.center-p.half*1.17,p.y);c.lineTo(p.center-p.half*1.17,sy);c.lineTo(p.center+p.half*1.17,sy);c.lineTo(p.center+p.half*1.17,p.y);c.stroke();
      c.fillStyle='#163f43';c.fillRect(p.center-sw/2,sy-sh,sw,sh);c.strokeStyle='#d1ebd977';c.lineWidth=1;c.strokeRect(p.center-sw/2+3*p.scale,sy-sh+3*p.scale,sw-6*p.scale,sh-6*p.scale);
      if(sw>50){c.fillStyle='#d0e7de';c.font='600 '+Math.max(5,sh*.34)+'px system-ui';c.textAlign='center';c.fillText(this.sector===0?'RIVERSIDE  ↑':this.sector===1?'CITY CENTER  ↑':'NIGHT LOOP  ↑',p.center,sy-sh*.38);}
    }
  }
  car(car,time) {
    if(car.z>VISIBLE_DISTANCE||car.z<-car.length-20)return;
    drawVehicle(this,car,time);
  }
  bike(state,time) {
    const c=this.ctx,p=this.project(0,state.x),u=Math.max(26,this.halfRoad*.10)*Math.min(1,this.h/this.w*1.6);
    c.save();c.translate(p.x,p.y);c.rotate(state.lean*.55);
    c.fillStyle='#0008';c.beginPath();c.ellipse(0,1,u*.85,u*.29,0,0,Math.PI*2);c.fill();
    c.fillStyle='#03070f';c.fillRect(-u*.18,-u*.78,u*.36,u*.86);c.fillStyle='#495569';c.fillRect(-u*.075,-u*.64,u*.15,u*.66);
    this.poly('#bdc6c6',[[-u*.38,-u*.90],[-u*.24,-u*.23],[u*.24,-u*.23],[u*.38,-u*.90],[u*.25,-u*1.65],[-u*.25,-u*1.65]]);
    this.poly('#183b49',[[-u*.29,-u*1.45],[-u*.2,-u*.36],[u*.2,-u*.36],[u*.29,-u*1.45]]);
    c.strokeStyle='#a5ede0';c.lineWidth=Math.max(1,u*.045);c.beginPath();c.moveTo(-u*.31,-u*1.35);c.lineTo(-u*.22,-u*.43);c.moveTo(u*.31,-u*1.35);c.lineTo(u*.22,-u*.43);c.stroke();
    // Rider's boots, bent knees, jacket, arms and helmet are drawn separately.
    this.poly('#131e2d',[[-u*.23,-u*1.45],[-u*.54,-u*.99],[-u*.42,-u*.62],[-u*.20,-u*.67],[-u*.16,-u*1.14]]);
    this.poly('#131e2d',[[u*.23,-u*1.45],[u*.54,-u*.99],[u*.42,-u*.62],[u*.20,-u*.67],[u*.16,-u*1.14]]);
    this.poly('#e37567',[[-u*.29,-u*2.06],[-u*.41,-u*1.73],[-u*.23,-u*1.21],[u*.23,-u*1.21],[u*.41,-u*1.73],[u*.29,-u*2.06]]);
    this.poly('#b4454a',[[-u*.22,-u*1.88],[-u*.18,-u*1.25],[u*.18,-u*1.25],[u*.22,-u*1.88]]);
    c.strokeStyle='#e28270';c.lineWidth=u*.2;c.lineCap='round';for(const s of [-1,1]){c.beginPath();c.moveTo(s*u*.28,-u*1.96);c.lineTo(s*u*.53,-u*1.76);c.lineTo(s*u*.54,-u*1.53);c.stroke();}
    c.strokeStyle='#9baeb3';c.lineWidth=u*.08;c.beginPath();c.moveTo(-u*.64,-u*1.56);c.lineTo(u*.64,-u*1.56);c.stroke();
    c.fillStyle='#111e2c';c.beginPath();c.ellipse(0,-u*2.14,u*.29,u*.32,0,0,Math.PI*2);c.fill();
    c.strokeStyle='#d4e9e1';c.lineWidth=u*.065;c.beginPath();c.ellipse(0,-u*2.14,u*.27,u*.29,0,Math.PI,Math.PI*1.95);c.stroke();
    c.fillStyle='#8bd8d7';c.fillRect(-u*.19,-u*2.15,u*.38,u*.075);c.fillStyle='#ff776d';c.shadowColor='#ff665b';c.shadowBlur=15;c.fillRect(-u*.20,-u*.43,u*.4,u*.10);c.shadowBlur=0;
    c.restore();
  }
  draw(state,time) {
    this.crashCarId=state.crashCarId;this.sector=state.sector;this.distance=state.status==='ready'?time*13:state.distance;this.playerX=state.x;
    this.roadSamples=Array.from({length:65},(_,i)=>roadOffset(this.distance,i*10-40));
    if(this.backgroundSector!==this.sector)this.makeBackground(this.sector);
    const c=this.ctx;c.setTransform(this.dpr,0,0,this.dpr,0,0);c.drawImage(this.backdrop,0,0,this.w,this.h);
    c.save();
    if(state.status==='crashed'&&this.lastStatus!=='crashed')this.crashTime=time;
    this.lastStatus=state.status;
    const impact=state.status==='crashed'?Math.max(0,1-(time-(this.crashTime??time))*3):0;
    if(!this.reduced&&impact>0)c.translate(Math.sin(time*91)*impact*7,Math.cos(time*73)*impact*4);
    this.tunnelWalls();this.road();this.roadside(time);
    const objects=state.cars.map(car=>({z:car.z,car}));objects.push({z:0});objects.sort((a,b)=>b.z-a.z);
    for(const object of objects){if(object.car)this.car(object.car,time);else this.bike(state,time);}
    c.restore();
    if(impact>0){c.fillStyle='rgba(255,85,75,'+impact*.18+')';c.fillRect(0,0,this.w,this.h);}
  }
}
