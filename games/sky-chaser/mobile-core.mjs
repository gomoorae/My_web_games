export const MOBILE_VERSION='0.1.0';
export const MOBILE_STORAGE='sky-chaser.mobile-preview.v1';
const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
const finite=(n,fallback)=>typeof n==='number'&&Number.isFinite(n)?n:fallback;
export function cleanProfile(raw={}){
  raw=raw&&typeof raw==='object'?raw:{};
  const bests={};
  for(const mode of ['campaign','practice2','practice3']){
    bests[mode]={};for(const level of ['easy','normal'])bests[mode][level]=Math.floor(clamp(finite(raw.bests?.[mode]?.[level],0),0,999999999));
  }
  return {sensitivity:clamp(finite(raw.sensitivity,1.3),.7,2),leftHanded:raw.leftHanded===true,muted:raw.muted===true,bests};
}
export function loadProfile(storage){try{return cleanProfile(JSON.parse(storage.getItem(MOBILE_STORAGE)||'{}'));}catch{return cleanProfile();}}
export function saveProfile(storage,profile){try{storage.setItem(MOBILE_STORAGE,JSON.stringify(cleanProfile(profile)));return true;}catch{return false;}}

export function mobileLayout(width,height,insets={}){
  const left=Math.max(8,insets.left||0),right=Math.max(8,insets.right||0),top=Math.max(6,insets.top||0),bottom=Math.max(10,insets.bottom||0);
  const compact=height-top-bottom<680,header=compact?44:48,controls=compact?132:152,gap=6;
  const availableWidth=Math.max(80,width-left-right),availableHeight=Math.max(90,height-top-bottom-header-controls-gap*2);
  const fieldWidth=Math.min(availableWidth,availableHeight*2/3);
  return {width,height,left,right,top,bottom,header,controls,gap,fieldWidth,fieldHeight:fieldWidth*1.5,landscape:width>height};
}

// Each pointer keeps its original role. Skill fingers never steal or end the
// movement finger; a quick tap remains queued until a simulation step uses it.
export class MobileControls {
  constructor(sensitivity=1.3){this.sensitivity=sensitivity;this.precise=false;this.reset();}
  reset(){this.roles=new Map();this.moveId=null;this.target=null;this.last=null;this.needsRebase=false;this.chargeRequested=false;}
  beginMove(id,x,y,player){
    if(this.moveId!==null||this.roles.has(id))return false;
    this.roles.set(id,'move');this.moveId=id;this.last={x,y};this.target={x:player.x,y:player.y};this.needsRebase=false;return true;
  }
  move(id,x,y,fieldWidth,player){
    if(id!==this.moveId)return false;
    if(this.needsRebase){this.last={x,y};this.target={x:player.x,y:player.y};this.needsRebase=false;return true;}
    const gain=480/Math.max(1,fieldWidth)*this.sensitivity*(this.precise?.38:1);
    this.target.x=clamp(this.target.x+(x-this.last.x)*gain,21,459);
    this.target.y=clamp(this.target.y+(y-this.last.y)*gain,55,690);
    this.last={x,y};return true;
  }
  beginAction(id,kind){
    if(this.roles.has(id)||!['charge','bomb','precision'].includes(kind))return false;
    this.roles.set(id,kind);if(kind==='charge')this.chargeRequested=true;return true;
  }
  end(id){
    if(!this.roles.has(id))return false;
    this.roles.delete(id);
    if(id===this.moveId){this.moveId=null;this.target=null;this.last=null;this.needsRebase=false;}
    return true;
  }
  rebase(){if(this.moveId!==null)this.needsRebase=true;}
  stageReset(player){
    this.roles=new Map(this.moveId===null?[]:[[this.moveId,'move']]);
    this.chargeRequested=false;this.target=this.moveId===null?null:{x:player.x,y:player.y};this.rebase();
  }
  setPrecision(value,player){this.precise=!!value;if(this.moveId!==null)this.target={x:player.x,y:player.y};}
  sample(player,dt){
    let target=null;
    if(this.moveId!==null&&this.target&&!this.needsRebase){
      const dx=this.target.x-player.x,dy=this.target.y-player.y,d=Math.hypot(dx,dy),distance=Math.min(d,(this.precise?125:520)*dt);
      target={x:player.x+(d?dx/d*distance:0),y:player.y+(d?dy/d*distance:0)};
    }
    const chargePressed=this.chargeRequested;this.chargeRequested=false;
    return {fire:true,focus:this.precise,chargePressed,target};
  }
}
