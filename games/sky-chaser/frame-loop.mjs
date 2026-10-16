// Presentation is capped independently of the game's 120 Hz fixed-step clock.
// An idle/hidden game owns no recurring callback. A UI change requests one frame.
export class FrameLoop {
  constructor({update,draw,active,animate=active,request=cb=>requestAnimationFrame(cb),cancel=id=>cancelAnimationFrame(id),fps=60}){
    Object.assign(this,{update,draw,active,animate,request,cancel});
    this.interval=1000/fps;this.id=null;this.suspended=false;this.dirty=false;
    this.resetClock();this.tick=this.tick.bind(this);
  }
  resetClock(){this.last=null;this.nextDraw=null;this.drawDelta=0;}
  schedule(){if(this.id===null&&!this.suspended)this.id=this.request(this.tick);}
  invalidate(reset=false){
    if(reset)this.resetClock();
    this.dirty=true;this.schedule();
  }
  suspend(value){
    this.suspended=value;
    if(this.id!==null){this.cancel(this.id);this.id=null;}
    this.resetClock();
    if(!value)this.invalidate();
  }
  tick(now){
    this.id=null;if(this.suspended)return;
    const dt=this.last===null?0:Math.min(Math.max(0,(now-this.last)/1000),.1);
    this.last=now;
    if(this.active())this.update(dt,now);
    const animated=this.animate();
    this.drawDelta+=animated?dt:0;
    if(this.dirty||this.nextDraw===null||now+.1>=this.nextDraw){
      this.draw(animated?this.drawDelta:0,now);this.drawDelta=0;this.dirty=false;
      // Keep the cadence anchored on 75/120/144/165/240 Hz displays too.
      if(this.nextDraw===null||now-this.nextDraw>this.interval)this.nextDraw=now+this.interval;
      else this.nextDraw+=this.interval;
    }
    if(this.animate())this.schedule();
    else this.resetClock();
  }
}

// Preserve native pixel density on ordinary displays; bound very large Retina
// buffers to 1200 x 1800. CSS size and all logical/collision coordinates stay put.
export function renderRatio(cssWidth,dpr=1){
  return Math.max(1,Math.min(2.5,(dpr||1)*cssWidth/480));
}
