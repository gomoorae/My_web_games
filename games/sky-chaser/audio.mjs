export class Sound {
  constructor(){this.enabled=true;this.playing=false;this.ctx=null;this.beat=0;this.nextBeat=0;this.lastShot=0;}
  async unlock(){
    try{
      if(!this.ctx){
        const AC=window.AudioContext||window.webkitAudioContext;
        if(!AC)return;
        this.ctx=new AC();this.master=this.ctx.createGain();this.master.gain.value=this.enabled?.38:0;
        this.master.connect(this.ctx.destination);
        this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate*.5,this.ctx.sampleRate);
        const data=this.noise.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
      }
      if(this.ctx.state==='suspended')await this.ctx.resume();
    }catch{/* Audio may be unavailable; gameplay is independent. */}
  }
  setAudible(value){if(this.master)this.master.gain.setTargetAtTime(value&&this.enabled?.38:0,this.ctx.currentTime,.025);}
  stopStoryCue(){for(const node of this.storyNotes||[])try{node?.stop();}catch{}this.storyNotes=[];}
  storyCue(kind){
    this.stopStoryCue();this.setPlaying(false);if(!this.ctx||!this.enabled)return;
    const notes=({warm:[523,659,784],launch:[659,784,1047],alarm:[196,233,294],storm:[220,330,440],foundry:[165,247,330],resolve:[392,523,659],victory:[523,659,784,1047]})[kind]||[523,659,784];
    this.storyNotes=notes.map((note,i)=>this.tone(note,.65,.075,'sine',this.ctx.currentTime+i*.15));
    if(kind==='storm'||kind==='foundry')this.storyNotes.push(this.hiss(.035,.35));
  }
  toggle(){this.enabled=!this.enabled;if(this.master)this.master.gain.setTargetAtTime(this.enabled?.38:0,this.ctx.currentTime,.02);return this.enabled;}
  setPlaying(value){this.playing=value;if(this.ctx)this.nextBeat=this.ctx.currentTime+.05;}
  tone(freq,duration,volume=.1,type='triangle',when=null,endFreq=null){
    if(!this.ctx||!this.enabled)return;
    const at=when??this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();
    o.type=type;o.frequency.setValueAtTime(freq,at);if(endFreq)o.frequency.exponentialRampToValueAtTime(endFreq,at+duration);
    g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(volume,at+.008);
    g.gain.exponentialRampToValueAtTime(.0001,at+duration);
    o.connect(g);g.connect(this.master);o.start(at);o.stop(at+duration+.03);
    o.onended=()=>{o.disconnect();g.disconnect();};return o;
  }
  hiss(volume=.12,duration=.2){
    if(!this.ctx||!this.enabled)return;
    const n=this.ctx.createBufferSource(),g=this.ctx.createGain(),f=this.ctx.createBiquadFilter(),at=this.ctx.currentTime;
    n.buffer=this.noise;f.type='lowpass';f.frequency.setValueAtTime(2400,at);f.frequency.exponentialRampToValueAtTime(150,at+duration);
    g.gain.setValueAtTime(volume,at);g.gain.exponentialRampToValueAtTime(.0001,at+duration);
    n.connect(f);f.connect(g);g.connect(this.master);n.start(at);n.stop(at+duration);
    n.onended=()=>{n.disconnect();f.disconnect();g.disconnect();};return n;
  }
  update(boss=false){
    if(!this.ctx||!this.enabled||!this.playing||this.ctx.state!=='running')return;
    if(this.nextBeat<this.ctx.currentTime-.5)this.nextBeat=this.ctx.currentTime;
    const notes=[76,79,81,83,81,79,76,74,72,76,79,81,79,76,74,71,
      72,76,79,84,83,81,79,76,74,76,79,81,79,76,74,72];
    const bass=[48,48,53,55];
    while(this.nextBeat<this.ctx.currentTime+.12){
      const i=this.beat%32,at=this.nextBeat;
      if(i%2===0||[7,15,23,31].includes(i))this.tone(440*2**((notes[i]+(boss?-2:0)-69)/12),.18,.065,'triangle',at);
      if(i%4===0)this.tone(440*2**((bass[Math.floor(i/8)]-69)/12),.3,.13,'triangle',at);
      if(i%4===0)this.tone(110,.08,.13,'sine',at,38);
      if(i%2===1)this.tone(3500,.022,.012,'square',at,1400);
      this.beat++;this.nextBeat+=boss?.125:.142;
    }
  }
  consume(events){
    if(!this.ctx||!this.enabled)return;
    for(const e of events){
      if(e.kind==='shot'&&this.ctx.currentTime-this.lastShot>.09){this.tone(950,.045,.035,'triangle',null,500);this.lastShot=this.ctx.currentTime;}
      if(e.kind==='explode'){this.hiss(e.large?.28:.09,e.large?.45:.15);this.tone(e.large?90:140,.16,.12,'triangle',null,45);}
      if(e.kind==='pickup'){this.tone(1100,.06,.06);if(e.type!=='coin')this.tone(1600,.15,.08,'sine',this.ctx.currentTime+.06);}
      if(e.kind==='power'||e.kind==='clear')for(let i=0;i<5;i++)this.tone([523,659,784,1047,1318][i],.25,.15,'triangle',this.ctx.currentTime+i*.09);
      if(e.kind==='hurt'){this.hiss(.3,.3);this.tone(300,.28,.2,'sawtooth',null,65);}
      if(e.kind==='laserWarning'){this.tone(680,.12,.07,'sine');this.tone(900,.12,.065,'sine',this.ctx.currentTime+.2);}
      if(e.kind==='partBreak'){this.hiss(.18,.25);this.tone(160,.18,.1,'triangle',null,60);}
      if(e.kind==='mortarLaunch')this.tone(230,.16,.045,'triangle',null,105);
      if(e.kind==='shellBreak'){this.hiss(.055,.09);this.tone(1350,.1,.05,'sine',null,550);}
      if(e.kind==='mortarBurst'){this.hiss(.12,.22);this.tone(95,.2,.08,'triangle',null,42);}
      if(e.kind==='powerWarning'||e.kind==='powerDown'){this.tone(e.kind==='powerDown'?350:700,.18,.07,'triangle',null,280);}
      if(e.kind==='bomb'){
        this.hiss(.15,.25);this.tone(160,.38,.16,'sine',null,70);
        for(let i=0;i<4;i++)this.tone([523,659,784,1047][i],.22,.13,'triangle',this.ctx.currentTime+i*.055);
      }
      if(e.kind==='bombStrike'){
        this.tone(e.final?90:220+e.index*65,e.final?.5:.18,e.final?.2:.14,'triangle',null,e.final?38:700+e.index*80);
        this.hiss(e.final?.22:.045,e.final?.4:.08);
        if(e.final)this.tone(1047,.45,.15,'sine');
      }
      if(e.kind==='charge')this.tone(e.full?300:500,.26,.16,'triangle',null,e.full?1400:1000);
      if(e.kind==='transform'||e.kind==='warning'){this.tone(230,.35,.12,'square');this.tone(180,.35,.12,'triangle',this.ctx.currentTime+.4);}
    }
  }
}
