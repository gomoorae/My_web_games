// Only quiet, finite feedback sounds. No engine oscillator, wind loop, or idle audio.
export class RideAudio {
  constructor(enabled=true){this.enabled=enabled;this.context=null;this.nodes=new Set();this.lastEvent=-Infinity;}
  async unlock(){
    if(!this.context){
      const Constructor=window.AudioContext||window.webkitAudioContext;if(!Constructor)return;
      try{const a=this.context=new Constructor();this.master=a.createGain();this.master.gain.value=this.enabled?.22:0;this.master.connect(a.destination);}catch{this.context=null;return;}
    }
    if(this.context.state==='suspended')try{await this.context.resume();}catch{}
  }
  setEnabled(value){this.enabled=value;if(this.context)this.master.gain.setTargetAtTime(value?.22:0,this.context.currentTime,.015);if(!value)this.silence();}
  silence(){for(const node of this.nodes){try{node.stop();}catch{}}this.nodes.clear();}
  update(ride){if(ride.status==='paused'||ride.status==='ready')this.silence();}
  tone(frequency,delay,duration,volume=.10,type='sine',endFrequency=frequency){
    if(!this.context||!this.enabled)return;
    const a=this.context,t=a.currentTime+delay,o=a.createOscillator(),g=a.createGain();
    o.type=type;o.frequency.setValueAtTime(frequency,t);o.frequency.exponentialRampToValueAtTime(endFrequency,t+duration);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(volume,t+.008);g.gain.exponentialRampToValueAtTime(.001,t+duration);
    o.connect(g);g.connect(this.master);this.nodes.add(o);o.start(t);o.stop(t+duration+.015);
    o.onended=()=>{this.nodes.delete(o);o.disconnect();g.disconnect();};
  }
  event(event){
    if(!this.context||!this.enabled)return;
    if(event.type==='hit'){this.silence();this.tone(180,0,.14,.15,'sine',75);return;}
    if(event.type!=='near'&&event.type!=='double')return;
    if(this.context.currentTime-this.lastEvent<.18)return;
    this.lastEvent=this.context.currentTime;
    this.tone(event.perfect?784:660,0,.085,.09);
    this.tone(event.type==='double'?1046:880,.055,.09,.065);
  }
}
