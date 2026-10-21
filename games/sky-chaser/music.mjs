import {MUSIC_CATALOG} from './music-catalog.mjs?v=0.9.3';

export function loopRegion(spec,duration){
  const start=Math.max(0,Math.min(spec.loopStart||0,duration-2));
  const boundary=Math.max(start+1,Math.min(spec.loopBoundary??duration-1,duration-.05));
  const end=Math.max(boundary+.01,Math.min(spec.loopEnd??duration,duration));
  const fade=Math.max(.01,Math.min(spec.crossfadeSeconds??end-boundary,end-boundary,(boundary-start)/2));
  return {start,boundary,end:boundary+fade,fade,period:boundary-start};
}

// Two long decoded tracks at most. Sources already
// scheduled in the audio clock keep the next loop steady without a frame loop.
export class MusicPlayer {
  constructor(context,output,{catalog=MUSIC_CATALOG,fetcher=(...args)=>fetch(...args),schedule=(fn,ms)=>setTimeout(fn,ms),cancel=id=>clearTimeout(id),maxBytes=84*1024*1024}={}){
    Object.assign(this,{context,output,catalog,fetcher,schedule,cancel,maxBytes});
    this.cache=new Map();this.pending=new Map();this.failures=new Set();this.voices=new Set();
    this.id=null;this.active=false;this.serial=0;this.offset=0;this.timer=null;this.status='idle';this.loops=0;
    this.bus=context.createGain();this.bus.connect(output);this.bus.gain.value=1;this.level=1;
  }
  async load(id){
    const spec=this.catalog[id];if(!spec)return null;const key=spec.file;
    if(this.cache.has(key)){const entry=this.cache.get(key);this.cache.delete(key);this.cache.set(key,entry);return entry.buffer;}
    if(this.pending.has(key))return this.pending.get(key);
    const task=(async()=>{
      try{
        const response=await this.fetcher(key,{signal:globalThis.AbortSignal?.timeout?.(12000)});if(!response.ok)throw Error('Audio unavailable');
        const data=await response.arrayBuffer(),buffer=await this.context.decodeAudioData(data);
        if(!buffer||!Number.isFinite(buffer.duration)||buffer.duration<.05)throw Error('Invalid audio');
        this.cache.set(key,{buffer,kind:spec.kind,bytes:buffer.length*buffer.numberOfChannels*4});this.failures.delete(key);this.trim();return buffer;
      }catch{this.failures.add(key);return null;}
    })();
    this.pending.set(key,task);void task.finally(()=>{if(this.pending.get(key)===task)this.pending.delete(key);});return task;
  }
  trim(){
    const protectedFile=this.catalog[this.id]?.file;
    const total=()=>[...this.cache.values()].reduce((n,e)=>n+e.bytes,0);
    const musicCount=()=>[...this.cache.values()].filter(e=>e.kind==='music').length;
    for(const [key,entry] of this.cache){
      if(total()<=this.maxBytes&&musicCount()<=2)break;
      if(key===protectedFile)continue;
      if(entry.kind==='music'||total()>this.maxBytes)this.cache.delete(key);
    }
  }
  preload(id){if(!this.failures.has(this.catalog[id]?.file))void this.load(id);}
  setTrack(id,{active=true,level=1,restart=false}={}){
    id=this.catalog[id]?.kind==='music'?id:null;
    const changed=id!==this.id||restart,wasActive=this.active;
    if(this.level!==level){this.level=level;this.bus.gain.setTargetAtTime(level,this.context.currentTime,.12);}
    if(changed){this.stopMusic(.3);this.id=id;this.offset=this.catalog[id]?.introStart||0;this.status='idle';}
    this.active=!!active&&!!id;
    if(!this.active){if(wasActive&&!changed)this.pause();return;}
    if(changed||!wasActive||this.status==='idle')void this.start();
  }
  position(){
    const now=this.context.currentTime;
    const voice=[...this.voices].filter(v=>v.serial===this.serial&&v.at<=now&&v.end>now).sort((a,b)=>b.at-a.at)[0];
    return voice?voice.offset+Math.max(0,now-voice.at):this.offset;
  }
  pause(){this.offset=this.position();this.stopMusic(.025);this.active=false;this.status='paused';}
  stopMusic(fade=.025){
    this.serial++;if(this.timer!==null)this.cancel(this.timer);this.timer=null;
    const now=this.context.currentTime;
    for(const voice of [...this.voices]){
      const gain=voice.gain.gain;
      if(gain.cancelAndHoldAtTime)gain.cancelAndHoldAtTime(now);else{gain.cancelScheduledValues(now);gain.setValueAtTime(voice.at>now?0:gain.value,now);}
      voice.gain.gain.linearRampToValueAtTime(0,now+fade);
      try{voice.source.stop(now+fade);}catch{}
    }
  }
  async start(){
    const id=this.id,serial=++this.serial;this.status='loading';
    const buffer=await this.load(id);
    if(serial!==this.serial||!this.active||id!==this.id)return;
    if(!buffer){this.status='unavailable';return;}
    const region=loopRegion(this.catalog[id],buffer.duration);
    let offset=this.offset;
    if(offset>=region.boundary)offset=region.start+(offset-region.start)%region.period;
    offset=Math.max(0,Math.min(offset,region.boundary-.01));
    const at=this.context.currentTime+.025;this.status='playing';
    this.voice(buffer,offset,at,region,.25,serial);
    this.queue(buffer,region,at+region.boundary-offset,serial);
  }
  voice(buffer,offset,at,region,fadeIn,serial){
    const source=this.context.createBufferSource(),gain=this.context.createGain();source.buffer=buffer;source.connect(gain);gain.connect(this.bus);
    const end=at+region.end-offset,out=at+region.boundary-offset;
    gain.gain.setValueAtTime(0,at);gain.gain.linearRampToValueAtTime(1,Math.min(out,at+fadeIn));
    gain.gain.setValueAtTime(1,out);gain.gain.linearRampToValueAtTime(0,end);
    const voice={source,gain,serial,at,end,offset};this.voices.add(voice);
    source.onended=()=>{source.disconnect();gain.disconnect();this.voices.delete(voice);};
    source.start(at,offset);source.stop(end);return voice;
  }
  queue(buffer,region,at,serial){
    if(serial!==this.serial||!this.active)return;
    const now=this.context.currentTime;at=Math.max(at,now+.015);
    this.voice(buffer,region.start,at,region,region.fade,serial);
    this.timer=this.schedule(()=>{this.timer=null;if(serial!==this.serial||!this.active)return;this.loops++;this.queue(buffer,region,at+region.period,serial);},Math.max(1,(at-now+.05)*1000));
  }
  snapshot(){return {track:this.id,active:this.active,status:this.status,position:+this.position().toFixed(2),loops:this.loops,voices:this.voices.size,cachedFiles:this.cache.size,decodedBytes:[...this.cache.values()].reduce((n,e)=>n+e.bytes,0)};}
}
