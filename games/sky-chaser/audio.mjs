import {MusicPlayer} from './music.mjs?v=0.9.1';
import {combatMusic,storyMusic} from './music-catalog.mjs?v=0.9.1';
import {audioSettings,cleanVolume} from './audio-settings.mjs?v=0.9.1';

export class Sound {
  constructor(){
    this.enabled=true;this.playing=true;this.audible=true;this.ctx=null;this.lastShot=0;
    this.track='title';this.level=1;this.narrative=false;Object.assign(this,audioSettings());
  }
  async unlock(){
    try{
      if(!this.ctx){
        const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
        try{this.ctx=new AC({sampleRate:48000});}catch{this.ctx=new AC();}
        this.master=this.ctx.createGain();this.master.gain.value=this.enabled&&this.audible?.38:0;
        this.master.connect(this.ctx.destination);
        this.effects=this.ctx.createGain();this.effects.gain.value=this.effectsVolume;this.effects.connect(this.master);
        this.musicGain=this.ctx.createGain();this.musicGain.gain.value=this.musicVolume;this.musicGain.connect(this.master);
        this.music=new MusicPlayer(this.ctx,this.musicGain);
        this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate*.5,this.ctx.sampleRate);
        const data=this.noise.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
      }
      if(this.ctx.state==='suspended'||this.ctx.state==='interrupted')await this.ctx.resume();
      this.applyMusic();
    }catch{/* Audio is independent of gameplay and may be unavailable. */}
  }
  applyMusic(){this.music?.setTrack(this.track,{active:this.playing&&this.enabled&&this.audible&&this.musicVolume>0,level:this.level});}
  setAudible(value){
    this.audible=!!value;
    if(this.master)this.master.gain.setTargetAtTime(this.audible&&this.enabled?.38:0,this.ctx.currentTime,.025);
    this.applyMusic();
  }
  setVolumes({musicVolume=this.musicVolume,effectsVolume=this.effectsVolume}={}){
    this.musicVolume=cleanVolume(musicVolume,this.musicVolume);this.effectsVolume=cleanVolume(effectsVolume,this.effectsVolume);
    if(this.ctx){this.musicGain.gain.setTargetAtTime(this.musicVolume,this.ctx.currentTime,.04);this.effects.gain.setTargetAtTime(this.effectsVolume,this.ctx.currentTime,.04);}
    this.applyMusic();
  }
  toggle(){this.enabled=!this.enabled;this.setAudible(this.audible);return this.enabled;}
  setPlaying(value){this.playing=!!value;this.applyMusic();}
  title(){this.narrative=false;this.track='title';this.level=1;this.playing=true;this.applyMusic();}
  battle(game,playing=true){this.narrative=false;this.track=combatMusic(game);this.level=1;this.playing=playing;this.preloaded=null;this.applyMusic();if(this.enabled&&this.track)this.music?.preload(this.track);}
  finish(game){this.narrative=false;this.track=game.state==='clear'?(game.mode==='campaign'?'ending':combatMusic(game)):null;this.level=1;this.playing=game.state==='clear';this.applyMusic();}
  beginStory(sequence){
    this.narrative=true;
    if(sequence){this.track=storyMusic(sequence);this.level=1;this.playing=true;}
    else this.playing=false;
    this.applyMusic();
  }
  storyScene(sequence){this.narrative=true;this.track=storyMusic(sequence);this.level=1;this.playing=true;this.applyMusic();}
  leaveStory(game){
    if(game.state==='ready')this.title();else if(game.state==='clear'||game.state==='gameover')this.finish(game);else this.battle(game,game.state==='playing');
  }
  update(game){
    if(this.narrative)return;
    if(game.state==='playing'){
      this.track=combatMusic(game);this.applyMusic();
      if(this.enabled&&this.audible&&this.musicVolume>0){
        const next=game.stageTime>130?`boss${game.stage}`:null;
        if(next&&next!==this.track&&next!==this.preloaded){this.preloaded=next;this.music?.preload(next);}
      }
    }
  }
  snapshot(){return {enabled:this.enabled,audible:this.audible,musicVolume:this.musicVolume,effectsVolume:this.effectsVolume,...(this.music?.snapshot()||{track:this.track,active:false,status:'locked',position:0,loops:0,voices:0,cachedFiles:0,decodedBytes:0})};}
  tone(freq,duration,volume=.1,type='triangle',when=null,endFreq=null){
    if(!this.ctx||!this.enabled)return;
    const at=when??this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();
    o.type=type;o.frequency.setValueAtTime(freq,at);if(endFreq)o.frequency.exponentialRampToValueAtTime(endFreq,at+duration);
    g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(volume,at+.008);
    g.gain.exponentialRampToValueAtTime(.0001,at+duration);
    o.connect(g);g.connect(this.effects);o.start(at);o.stop(at+duration+.03);
    o.onended=()=>{o.disconnect();g.disconnect();};return o;
  }
  hiss(volume=.12,duration=.2){
    if(!this.ctx||!this.enabled)return;
    const n=this.ctx.createBufferSource(),g=this.ctx.createGain(),f=this.ctx.createBiquadFilter(),at=this.ctx.currentTime;
    n.buffer=this.noise;f.type='lowpass';f.frequency.setValueAtTime(2400,at);f.frequency.exponentialRampToValueAtTime(150,at+duration);
    g.gain.setValueAtTime(volume,at);g.gain.exponentialRampToValueAtTime(.0001,at+duration);
    n.connect(f);f.connect(g);g.connect(this.effects);n.start(at);n.stop(at+duration);
    n.onended=()=>{n.disconnect();f.disconnect();g.disconnect();};return n;
  }
  consume(events){
    if(!this.ctx||!this.enabled)return;
    for(const e of events){
      if(e.kind==='shot'&&this.ctx.currentTime-this.lastShot>.09){this.tone(950,.045,.035,'triangle',null,500);this.lastShot=this.ctx.currentTime;}
      if(e.kind==='explode'){this.hiss(e.large?.28:.09,e.large?.45:.15);this.tone(e.large?90:140,.16,.12,'triangle',null,45);}
      if(e.kind==='pickup'){this.tone(1100,.06,.06);if(e.type!=='coin')this.tone(1600,.15,.08,'sine',this.ctx.currentTime+.06);}
      if(e.kind==='power')for(let i=0;i<5;i++)this.tone([523,659,784,1047,1318][i],.25,.15,'triangle',this.ctx.currentTime+i*.09);
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
    }
  }
}
