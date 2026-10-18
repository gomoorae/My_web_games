export const MOBILE_VERSION='0.8.0';
export const MOBILE_STORAGE='sky-chaser.mobile.v1';
export const PREVIEW_STORAGE='sky-chaser.mobile-preview.v1';
export const DEFAULT_SENSITIVITY=1.1;
const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
const finite=(n,fallback)=>typeof n==='number'&&Number.isFinite(n)?n:fallback;
export function cleanProfile(raw={}){
  raw=raw&&typeof raw==='object'?raw:{};
  const bests={};
  for(const mode of ['campaign','practice2','practice3']){
    bests[mode]={};for(const level of ['easy','normal'])bests[mode][level]=Math.floor(clamp(finite(raw.bests?.[mode]?.[level],0),0,999999999));
  }
  return {sensitivity:clamp(finite(raw.sensitivity,DEFAULT_SENSITIVITY),.7,2),leftHanded:raw.leftHanded===true,muted:raw.muted===true,bests};
}
function readProfile(storage,key){
  try{const raw=JSON.parse(storage.getItem(key));return raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:null;}catch{return null;}
}
export function loadProfile(storage){
  const current=readProfile(storage,MOBILE_STORAGE);
  if(current)return cleanProfile(current);
  const preview=readProfile(storage,PREVIEW_STORAGE);
  if(!preview)return cleanProfile();
  const profile=cleanProfile(preview);
  // The preview did not distinguish its 1.3 default from a manually chosen 1.3.
  // Adopt the new default for that value; keep other adjustments and all scores.
  if(preview.sensitivity===1.3)profile.sensitivity=DEFAULT_SENSITIVITY;
  saveProfile(storage,profile); // Retain the preview key as a recovery copy.
  return profile;
}
export function saveProfile(storage,profile){try{storage.setItem(MOBILE_STORAGE,JSON.stringify(cleanProfile(profile)));return true;}catch{return false;}}

export function mobileLayout(width,height,insets={},display={}){
  const left=Math.max(8,insets.left||0),right=Math.max(8,insets.right||0),top=Math.max(6,insets.top||0),bottom=Math.max(10,insets.bottom||0);
  const compact=height-top-bottom<680,header=compact?44:48,controls=compact?132:152,gap=6;
  const availableWidth=Math.max(80,width-left-right),availableHeight=Math.max(90,height-top-bottom-header-controls-gap*2);
  const fieldWidth=Math.min(availableWidth,availableHeight*2/3);
  const fieldHeight=fieldWidth*1.5;
  // Browser chrome can make an upright foldable viewport wider than it is tall.
  // Ask for rotation only when a wide viewport leaves too little game space.
  const portrait=display.orientation==='portrait-primary'||display.orientation==='portrait-secondary';
  const recommendPortrait=!portrait&&width>height*1.25&&fieldHeight<300;
  return {width,height,left,right,top,bottom,header,controls,gap,fieldWidth,fieldHeight,
    recommendPortrait,blocked:recommendPortrait&&!display.allowCompact};
}

// Each pointer keeps its original role. Skill fingers never steal or end the
// movement finger; a quick tap remains queued until a simulation step uses it.
export class MobileControls {
  constructor(sensitivity=DEFAULT_SENSITIVITY){this.sensitivity=sensitivity;this.reset();}
  reset(){this.roles=new Map();this.moveId=null;this.target=null;this.last=null;this.needsRebase=false;this.chargeRequested=false;}
  beginMove(id,x,y,player){
    if(this.moveId!==null||this.roles.has(id))return false;
    this.roles.set(id,'move');this.moveId=id;this.last={x,y};this.target={x:player.x,y:player.y};this.needsRebase=false;return true;
  }
  move(id,x,y,fieldWidth,player){
    if(id!==this.moveId)return false;
    if(this.needsRebase){this.last={x,y};this.target={x:player.x,y:player.y};this.needsRebase=false;return true;}
    const gain=480/Math.max(1,fieldWidth)*this.sensitivity;
    this.target.x=clamp(this.target.x+(x-this.last.x)*gain,21,459);
    this.target.y=clamp(this.target.y+(y-this.last.y)*gain,55,690);
    this.last={x,y};return true;
  }
  beginAction(id,kind){
    if(this.roles.has(id)||!['charge','bomb'].includes(kind))return false;
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
  sample(player,dt){
    let target=null;
    if(this.moveId!==null&&this.target&&!this.needsRebase){
      const dx=this.target.x-player.x,dy=this.target.y-player.y,d=Math.hypot(dx,dy),distance=Math.min(d,520*dt);
      target={x:player.x+(d?dx/d*distance:0),y:player.y+(d?dy/d*distance:0)};
    }
    const chargePressed=this.chargeRequested;this.chargeRequested=false;
    return {fire:true,focus:false,chargePressed,target};
  }
}
