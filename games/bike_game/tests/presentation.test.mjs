import test from 'node:test';
import assert from 'node:assert/strict';
import {Ride} from '../core.mjs';
import {CrashSequence,CRASH_DURATION,portraitFrame} from '../presentation.mjs';
const at=(sequence,time)=>{for(let i=0;i<Math.ceil(time*120);i++)sequence.advance(1/120);return sequence.snapshot();};
function crash(side='right'){const ride=new Ride(10);ride.reset(10);ride.x=side==='right'?.9:-.9;ride.crash();return ride;}
test('desktop and fullscreen frames keep a portrait driving area',()=>{
 for(const [w,h] of [[1280,720],[1920,1080],[2560,1440],[844,390]]){
  const f=portraitFrame(w,h);assert.ok(f.visibleWidth/f.visibleHeight<=.625+1e-9);
  assert.ok(f.visibleWidth<=w);assert.equal(f.visibleHeight,h);
  assert.ok(Math.abs(f.width*f.scale-f.visibleWidth)<1e-9);
 }
});
test('a tall phone uses its available width without stretching the road',()=>{
 const f=portraitFrame(390,844);assert.equal(f.visibleWidth,390);assert.equal(f.visibleHeight,844);assert.equal(f.scale,1);
});
test('small landscape windows scale a usable portrait layout into view',()=>{
 const f=portraitFrame(568,320);assert.equal(f.visibleWidth,200);assert.equal(f.width,360);assert.equal(f.height,576);assert.ok(f.scale<1);
});
test('the impact sequence delays its completion and completes only once',()=>{
 const s=new CrashSequence();s.begin(crash());assert.equal(s.done,false);assert.equal(s.snapshot().phase,'impact');
 at(s,2);assert.equal(s.done,false);let completions=0;for(let i=0;i<240;i++)completions+=s.advance(1/120)?1:0;
 assert.equal(completions,1);assert.equal(s.elapsed,CRASH_DURATION);assert.equal(s.snapshot().phase,'settled');
});
test('the rider is launched, bounces, then comes to rest beside the broken bike',()=>{
 const s=new CrashSequence();s.begin(crash());const first=at(s,.5);assert.ok(first.rider.height>3);assert.equal(first.phase,'airborne');
 const bounce=at(s,.57);assert.equal(bounce.phase,'tumble');assert.ok(bounce.rider.height>.5);
 s.skip();const last=s.snapshot();assert.equal(last.rider.height,0);assert.equal(last.wheel.height,0);assert.ok(last.rider.z>last.bike.z+10);assert.notEqual(last.bike.x,last.wheel.x);
});
test('an impact throws debris and rider away from either guardrail',()=>{
 for(const side of ['left','right']){const s=new CrashSequence();s.begin(crash(side));s.skip();const view=s.snapshot();assert.ok(Math.abs(view.rider.x)<Math.abs(view.originX));assert.ok(Math.abs(view.bike.x)<.85);}
});
test('animation, skipping and reset never modify the actual run or stored score inputs',()=>{
 const r=crash(),before=JSON.stringify(r),s=new CrashSequence();s.begin(r);at(s,1);s.skip();s.clear();
 assert.equal(JSON.stringify(r),before);assert.equal(s.snapshot(),null);assert.equal(s.advance(5),false);
 s.begin(crash('left'));assert.equal(s.elapsed,0);assert.equal(s.done,false);
});
test('a large frame gap cannot jump over the entire accident',()=>{
 const s=new CrashSequence();s.begin(crash());s.advance(90);assert.equal(s.elapsed,.1);assert.equal(s.done,false);
});
test('reduced motion shows a static wreck with no camera impact or airborne pose',()=>{
 const s=new CrashSequence();s.begin(crash(),true);const a=s.snapshot();at(s,.3);assert.deepEqual(s.snapshot(),a);assert.equal(a.impact,0);assert.equal(a.rider.height,0);assert.equal(a.phase,'settled');at(s,.4);assert.equal(s.done,true);
});
