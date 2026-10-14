// Presentation is independent of driving physics, records and traffic randomness.
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const ease=t=>1-Math.pow(1-clamp(t,0,1),3);
export function portraitFrame(viewWidth,viewHeight){
  const w=Math.max(1,viewWidth),h=Math.max(1,viewHeight),visibleWidth=Math.min(w,h*5/8);
  const scale=Math.min(1,visibleWidth/360,h/576);
  return{width:visibleWidth/scale,height:h/scale,scale,visibleWidth,visibleHeight:h};
}
export const CRASH_DURATION=2.65;
export class CrashSequence{
  constructor(){this.clear();}
  clear(){this.started=false;this.elapsed=0;this.duration=CRASH_DURATION;this.originX=0;this.direction=1;this.reduced=false;}
  begin(ride,reduced=false){
    this.started=true;this.elapsed=0;this.reduced=reduced;this.duration=reduced?.6:CRASH_DURATION;
    this.originX=ride.x;this.direction=ride.failure?.side==='left'?1:-1;
  }
  get done(){return!this.started||this.elapsed>=this.duration;}
  advance(seconds){
    if(this.done)return false;
    this.elapsed=Math.min(this.duration,this.elapsed+clamp(seconds,0,.1));
    return this.done;
  }
  skip(){if(this.started)this.elapsed=this.duration;}
  snapshot(){
    if(!this.started)return null;
    const age=this.reduced?CRASH_DURATION:this.elapsed,t=Math.max(0,age-.09),d=this.direction;
    const bounce=(start,duration,height)=>t>=start&&t<start+duration?Math.sin((t-start)/duration*Math.PI)*height:0;
    const riderLift=bounce(0,.86,3.8)+bounce(.86,.42,1.05)+bounce(1.28,.30,.28);
    const riderProgress=ease(t/1.85),bikeProgress=ease(t/1.55),wheelProgress=ease(t/2.1);
    return{
      age,reduced:this.reduced,originX:this.originX,direction:d,
      impact:this.reduced?0:Math.max(0,1-age/.32),
      phase:age<.09?'impact':t<.86?'airborne':t<1.58?'tumble':'settled',
      bike:{x:clamp(this.originX+d*.30*bikeProgress,-.84,.84),z:7*bikeProgress,height:bounce(0,.55,.55),angle:d*(1.48*ease(t/.6)+.30*bikeProgress)},
      rider:{x:clamp(this.originX+d*.49*riderProgress,-.79,.79),z:19*riderProgress,height:riderLift,angle:d*(t<.86?t*7:6.02+1.9*ease((t-.86)/.72)),fold:Math.sin(Math.min(t,1.58)*13)},
      wheel:{x:clamp(this.originX-d*.13+d*.57*wheelProgress,-.87,.87),z:12*wheelProgress,height:bounce(0,.76,1.15)+bounce(.76,.52,.40),angle:d*t*11},
      debrisProgress:ease(t/1.5)
    };
  }
}
