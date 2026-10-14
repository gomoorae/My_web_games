export class RideAudio {
  constructor(enabled=true) { this.enabled=enabled; this.context=null; this.active=false; }
  async unlock() {
    if(!this.context){
      const Constructor=window.AudioContext||window.webkitAudioContext;if(!Constructor)return;
      try{
        const a=this.context=new Constructor();this.master=a.createGain();this.master.gain.value=this.enabled?.3:0;this.master.connect(a.destination);
        this.engine=a.createOscillator();this.engine.type='sawtooth';this.filter=a.createBiquadFilter();this.filter.type='lowpass';this.filter.frequency.value=500;
        this.motor=a.createGain();this.motor.gain.value=0;this.engine.connect(this.filter);this.filter.connect(this.motor);this.motor.connect(this.master);this.engine.start();
        const buffer=a.createBuffer(1,a.sampleRate*2,a.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
        this.noiseBuffer=buffer;this.wind=a.createBufferSource();this.wind.buffer=buffer;this.wind.loop=true;
        const windFilter=a.createBiquadFilter();windFilter.type='highpass';windFilter.frequency.value=1700;this.windGain=a.createGain();this.windGain.gain.value=0;
        this.wind.connect(windFilter);windFilter.connect(this.windGain);this.windGain.connect(this.master);this.wind.start();
      }catch{this.context=null;return;}
    }
    if(this.context.state==='suspended')try{await this.context.resume();}catch{}
  }
  setEnabled(value){this.enabled=value;if(this.context)this.master.gain.setTargetAtTime(value?.3:0,this.context.currentTime,.03);}
  update(ride){
    if(!this.context)return;const a=this.context,t=a.currentTime,running=ride.status==='running';
    this.engine.frequency.setTargetAtTime(38+ride.speed*.46+(ride.boosting?30:0),t,.05);
    this.filter.frequency.setTargetAtTime(330+ride.speed*3,t,.08);
    this.motor.gain.setTargetAtTime(running?.14:0,t,.08);this.windGain.gain.setTargetAtTime(running?ride.speed/1800:0,t,.08);
  }
  tone(frequency,delay,duration,volume=.2){if(!this.context||!this.enabled)return;const a=this.context,t=a.currentTime+delay,o=a.createOscillator(),g=a.createGain();o.type='sine';o.frequency.value=frequency;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.01);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(this.master);o.start(t);o.stop(t+duration+.02);o.onended=()=>{o.disconnect();g.disconnect();};}
  noise(duration,frequency,volume){if(!this.context||!this.enabled)return;const a=this.context,t=a.currentTime,s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();s.buffer=this.noiseBuffer;f.type='bandpass';f.frequency.value=frequency;g.gain.setValueAtTime(volume,t);g.gain.exponentialRampToValueAtTime(.001,t+duration);s.connect(f);f.connect(g);g.connect(this.master);s.start();s.stop(t+duration);s.onended=()=>{s.disconnect();f.disconnect();g.disconnect();};}
  event(event){if(event.type==='near'){this.noise(.25,1400,.28);this.tone(event.perfect?880:660,0,.18);this.tone(event.perfect?1320:990,.08,.22);}if(event.type==='hit')this.noise(.55,200,.7);if(event.type==='boost'){this.noise(.65,650,.35);this.tone(190,0,.35,.13);}if(event.type==='sector'||event.type==='finish'){[440,554,660,880].forEach((f,i)=>this.tone(f,i*.10,.3,.15));}}
}
