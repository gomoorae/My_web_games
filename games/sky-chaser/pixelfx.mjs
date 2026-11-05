import {PIXELFX_CATALOG} from './pixelfx-catalog.mjs?v=1.1.0';
export const MAX_TRANSIENT_FX=32,MAX_HIT_FX=18;
export class PixelFXBank {
  constructor({catalog=PIXELFX_CATALOG,createImage=()=>new Image()}={}){this.catalog=catalog;this.createImage=createImage;this.images=new Map();this.failed=new Set();this.pending=null;}
  load(){
    if(this.pending)return this.pending;
    this.pending=Promise.all(Object.entries(this.catalog).map(([id,spec])=>new Promise(resolve=>{
      const img=this.createImage();let done=false;
      const finish=ok=>{if(done)return;done=true;clearTimeout(timer);if(ok)this.images.set(id,img);else this.failed.add(id);resolve(ok);};
      const timer=setTimeout(()=>finish(false),4000);
      img.onload=()=>{const valid=img.naturalWidth===spec.sheetWidth&&img.naturalHeight===spec.sheetHeight;if(!valid){finish(false);return;}Promise.resolve(img.decode?.()).then(()=>finish(true),()=>finish(false));};
      img.onerror=()=>finish(false);img.src=new URL(spec.file,import.meta.url).href;
    }))).then(results=>results.every(Boolean));return this.pending;
  }
  has(id){return this.images.has(id);}
  draw(c,id,progress,x,y,{sx=1,sy=sx,angle=0,alpha=1}={}){
    const s=this.catalog[id],image=this.images.get(id);if(!s||!image||alpha<=0)return false;
    const p=Math.max(0,Math.min(.999999,progress)),frame=Math.floor(p*s.frames),ox=(frame%s.cols)*(s.width+2*s.gap)+s.gap,oy=Math.floor(frame/s.cols)*(s.height+2*s.gap)+s.gap;
    const dx=-s.pivot[0]*sx,dy=-s.pivot[1]*sy,dw=s.width*sx,dh=s.height*sy;
    if(Math.abs(angle)<.001&&alpha===1)c.drawImage(image,ox,oy,s.width,s.height,x+dx,y+dy,dw,dh);
    else{c.save();c.translate(x,y);if(angle)c.rotate(angle);c.globalAlpha*=alpha;c.drawImage(image,ox,oy,s.width,s.height,dx,dy,dw,dh);c.restore();}
    return true;
  }
}
export const pixelFXBank=new PixelFXBank();
export class CombatFX {
  constructor(bank=pixelFXBank){this.bank=bank;this.reset();}
  reset(){this.items=[];this.time=0;this.recentHits=new Map();}
  get active(){return this.items.length>0;}
  spawn(id,x,y,{life=.3,scale=.5,angle=0,alpha=1,priority=1,targetId=null,delay=0,range=1}={}){
    if(!Number.isFinite(x)||!Number.isFinite(y)||life<=0)return false;
    if(targetId!==null){const previous=this.recentHits.get(targetId);if(previous!==undefined&&this.time-previous<.065)return false;this.recentHits.set(targetId,this.time);if(this.recentHits.size>64)this.recentHits.delete(this.recentHits.keys().next().value);}
    if(id==='hit'&&this.items.filter(f=>f.id==='hit').length>=MAX_HIT_FX)return false;
    if(this.items.length>=MAX_TRANSIENT_FX){const low=this.items.findIndex(f=>f.priority<priority);if(low<0)return false;this.items.splice(low,1);}
    this.items.push({id,x,y,life,scale,angle,alpha,priority,age:-delay,range});return true;
  }
  draw(c,dt,paused=false){
    for(const f of this.items){
      if(f.age>=0&&f.age<f.life&&f.x>-220&&f.x<700&&f.y>-220&&f.y<940)this.bank?.draw(c,f.id,f.age/f.life*f.range,f.x,f.y,{sx:f.scale,angle:f.angle,alpha:f.alpha});
      if(!paused)f.age+=Math.max(0,Math.min(dt,.1));
    }
    if(!paused){this.time+=Math.max(0,Math.min(dt,.1));this.items=this.items.filter(f=>f.age<f.life);for(const [key,time] of this.recentHits)if(this.time-time>.3)this.recentHits.delete(key);}
  }
}
