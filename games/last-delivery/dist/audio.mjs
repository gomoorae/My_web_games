// Original, layered game effects and a continuous playlist. No autoplay is
// attempted until unlock() is called from a user gesture.
const ldLocalMusicLoads=new WeakMap();
function ldLoadLocalMusic(documentRef,url){
 if(!documentRef?.createElement||!documentRef?.head)return Promise.reject(Error('local music document unavailable'));
 let loads=ldLocalMusicLoads.get(documentRef);if(!loads){loads=new Map();ldLocalMusicLoads.set(documentRef,loads);}
 if(loads.has(url))return loads.get(url);
 const request=new Promise((resolve,reject)=>{
  const script=documentRef.createElement('script');let finished=false;
  const finish=error=>{if(finished)return;finished=true;clearTimeout(timer);script.onload=null;script.onerror=null;if(error){script.remove?.();reject(error);}else resolve();};
  const timer=setTimeout(()=>finish(Error('local music timed out')),15000);
  script.src=url;script.async=true;
  script.onload=()=>finish((documentRef.defaultView?.LAST_DELIVERY_EMBEDDED_AUDIO||globalThis.LAST_DELIVERY_EMBEDDED_AUDIO)?null:Error('local music data missing'));
  script.onerror=()=>finish(Error('local music script failed'));
  try{documentRef.head.appendChild(script);}catch(error){finish(error);}
 }).catch(error=>{loads.delete(url);throw error;});
 loads.set(url,request);return request;
}
export function createGameAudio({tracks={},baseURL,embedded={},onState=()=>{},AudioContextClass,fetchAudio,documentRef=globalThis.document}={}){
 const clamp=(value,fallback)=>Number.isFinite(Number(value))?Math.max(0,Math.min(1,Number(value))):fallback;
 let settings={sound:true,musicVolume:.55,sfxVolume:.75},context=null,musicBus=null,effectsBus=null,master=null,reverb=null;
 let scene='journey',paused=false,hidden=false,disposed=false,unlocked=false,unsupported=false,resuming=null,suspending=null;
 const playlist=[...new Set(['journey','battle','boss','ending',...Object.keys(tracks)])].filter(key=>tracks[key]);
 let trackIndex=0,position=0,currentMusic=null,pendingMusic=null,nextMusic=null,musicError='',unlockError='',serial=0,lastState='',noiseBuffer=null,cacheClock=0;
 const buffers=new Map(),voices=new Set(),cooldowns=new Map(),retiring=new Set();
 const trackKey=()=>playlist[trackIndex]||null;
 const clock=()=>context?.currentTime||0;
 const canPlay=()=>!disposed&&settings.sound&&!hidden&&!suspending&&context?.state==='running';
 const musicAllowed=()=>canPlay()&&!paused&&settings.musicVolume>0&&Boolean(trackKey());
 function getState(){
  const status=disposed?'unsupported':!settings.sound?'muted':unsupported?'unsupported':hidden?'hidden':unlockError?'locked':musicError?'error':!unlocked||context?.state!=='running'?'locked':paused?'paused':pendingMusic?'loading':'running';
  const messages={muted:'소리가 꺼져 있어.',unsupported:'이 브라우저에서 소리를 재생할 수 없어.',hidden:'다른 화면을 보는 동안 소리를 쉬고 있어.',paused:'잠시 멈춤',locked:'소리 켜기를 눌러 재생을 시작해.',loading:'음악을 불러오는 중…',running:'소리 재생 중'};
  return {status,scene,trackKey:trackKey(),trackTitle:tracks[trackKey()]?.title||'',trackIndex,trackCount:playlist.length,message:unlockError||musicError||messages[status]||'',...settings,unlocked};
 }
 function emit(){const state=getState(),key=JSON.stringify(state);if(key!==lastState){lastState=key;try{onState(state);}catch{}}}
 function ramp(param,value,duration=.06){const now=clock();param.cancelScheduledValues(now);param.setValueAtTime(param.value,now);param.linearRampToValueAtTime(value,now+duration);}
 function createContext(){
  const Ctor=AudioContextClass||globalThis.AudioContext||globalThis.webkitAudioContext||globalThis.window?.AudioContext||globalThis.window?.webkitAudioContext;
  if(!Ctor){unsupported=true;return false;}
  context=new Ctor();musicBus=context.createGain();effectsBus=context.createGain();master=context.createGain();
  musicBus.gain.value=settings.musicVolume;effectsBus.gain.value=settings.sfxVolume;master.gain.value=.82;
  musicBus.connect(master);effectsBus.connect(master);
  const limiter=context.createDynamicsCompressor();limiter.threshold.value=-12;limiter.knee.value=18;limiter.ratio.value=5;limiter.attack.value=.003;limiter.release.value=.18;master.connect(limiter);limiter.connect(context.destination);
  noiseBuffer=context.createBuffer(1,Math.ceil(context.sampleRate),context.sampleRate);const noise=noiseBuffer.getChannelData(0);
  for(let i=0;i<noise.length;i++)noise[i]=Math.random()*2-1;
  // A very short room tail binds the synthetic layers without masking attacks.
  if(context.createConvolver){
   const impulse=context.createBuffer(2,Math.ceil(context.sampleRate*.32),context.sampleRate);
   for(let channel=0;channel<2;channel++){const data=impulse.getChannelData(channel);for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.pow(1-i/data.length,3)*.2;}
   const convolver=context.createConvolver();convolver.buffer=impulse;reverb=context.createGain();reverb.gain.value=.18;reverb.connect(convolver);convolver.connect(effectsBus);
  }
  context.onstatechange=()=>{
   if(disposed)return;
   if(context.state!=='running'){stopEffects();stopMusic(0);clearRetiring();serial++;pendingMusic=null;}
   else if(unlocked){syncMusic();}
   emit();
  };
  return true;
 }
 async function unlock(){
  if(disposed||!settings.sound||hidden){emit();return false;}
  if(resuming)return resuming;
  try{if(!context&&!createContext()){emit();return false;}}catch{unlockError='소리를 시작하지 못했어. 소리 켜기를 다시 눌러 줘.';emit();return false;}
  // Keep the resume call inside the original click/keydown stack on Safari.
  let resumed;try{resumed=context.state==='running'&&!suspending?Promise.resolve():context.resume();}catch(error){resumed=Promise.reject(error);}
  resuming=Promise.resolve(resumed).then(async()=>{
   // A quick unmute/tab return can arrive before suspend() updates state. Keep
   // the gesture-time resume above, then reconcile after the pending suspension.
   while(!disposed&&settings.sound&&!hidden){
    if(suspending){await suspending;continue;}
    if(context.state==='running')break;
    await context.resume();
    if(!suspending&&context.state!=='running')break;
   }
   if(disposed)return false;
   if(!settings.sound||hidden){suspend();emit();return false;}
   unlocked=context.state==='running';unlockError=unlocked?'':'소리 재생이 멈춰 있어. 소리 켜기를 다시 눌러 줘.';
   if(unlocked){musicError='';syncMusic();}emit();return unlocked;
  }).catch(()=>{unlocked=false;unlockError='브라우저가 소리 재생을 기다리고 있어. 소리 켜기를 다시 눌러 줘.';emit();return false;}).finally(()=>{resuming=null;});
  return resuming;
 }
 function musicOffset(entry){
  return Math.min(entry.duration,Math.max(0,clock()-entry.startedAt)+entry.offset);
 }
 function stopMusic(fade=.25){
  if(!currentMusic)return;const entry=currentMusic;currentMusic=null;position=musicOffset(entry);entry.stopped=true;retiring.add(entry);
  ramp(entry.gain.gain,0,fade);try{entry.source.stop(clock()+fade);}catch{};
 }
 function clearRetiring(){for(const entry of retiring){try{entry.source.stop();}catch{}entry.source.disconnect();entry.gain.disconnect();}retiring.clear();pruneBuffers();}
 function pruneBuffers(){
  const protectedKeys=new Set([trackKey(),currentMusic?.key,pendingMusic?.key,...[...retiring].map(entry=>entry.key)]);
  const bytes=entry=>entry.buffer?(entry.buffer.length||entry.buffer.duration*(entry.buffer.sampleRate||context.sampleRate))*(entry.buffer.numberOfChannels||2)*4:0;
  let size=[...buffers.values()].reduce((sum,entry)=>sum+bytes(entry),0);
  for(const [key,entry] of [...buffers].sort((a,b)=>a[1].used-b[1].used)){
   if(buffers.size<=1&&size<=64*1024*1024)break;
   if(protectedKeys.has(key))continue;size-=bytes(entry);buffers.delete(key);
  }
 }
 function inlineSource(key){
  const src=tracks[key].src,globalEmbedded=documentRef?.defaultView?.LAST_DELIVERY_EMBEDDED_AUDIO||globalThis.LAST_DELIVERY_EMBEDDED_AUDIO;
  return embedded?.[key]||embedded?.[src]||globalEmbedded?.[key]||globalEmbedded?.[src];
 }
 async function sourceURL(key){
  const inline=inlineSource(key);if(inline)return inline;
  const base=baseURL||documentRef?.baseURI||globalThis.location?.href||'http://localhost/',url=new URL(tracks[key].src,base);
  if(url.protocol==='file:'){
   await ldLoadLocalMusic(documentRef,new URL('assets/music/local-audio.js',base).href);
   const loaded=inlineSource(key);if(!loaded)throw Error('local music track missing');return loaded;
  }
  return url.href;
 }
 async function fetchTrack(key){
  const fetcher=fetchAudio||globalThis.fetch;if(!fetcher)throw Error('fetch unavailable');
  const response=await fetcher(await sourceURL(key));if(response?.ok===false)throw Error('music load failed');
  return typeof response?.arrayBuffer==='function'?response.arrayBuffer():response;
 }
 function prepareNext(){
  if(disposed||playlist.length<2)return;
  const key=playlist[(trackIndex+1)%playlist.length];if(nextMusic?.key===key)return;
  // Keep only the next compressed file: decoding every three-minute track would
  // retain hundreds of megabytes on mobile. A failed prefetch is retried on use.
  nextMusic={key,promise:fetchTrack(key).catch(()=>null)};
 }
 function loadTrack(key){
  if(buffers.has(key)){const entry=buffers.get(key);entry.used=++cacheClock;return entry.promise;}
  const entry={used:++cacheClock,buffer:null,promise:null};
  entry.promise=Promise.resolve().then(async()=>{
   const prefetched=nextMusic?.key===key?nextMusic:null;if(prefetched)nextMusic=null;
   const bytes=(prefetched?await prefetched.promise:null)||await fetchTrack(key);
   if(disposed)throw Error('audio disposed');
   const buffer=await context.decodeAudioData(bytes);entry.buffer=buffer;pruneBuffers();return buffer;
  }).catch(error=>{if(buffers.get(key)===entry)buffers.delete(key);throw error;});
  buffers.set(key,entry);pruneBuffers();return entry.promise;
 }
 function syncMusic(){
  if(!musicAllowed()){if(currentMusic)stopMusic(hidden||paused?0:.18);return;}
  const key=trackKey();if(currentMusic?.key===key||pendingMusic?.key===key)return;
  const token=++serial;pendingMusic={key,token};musicError='';emit();
  loadTrack(key).then(buffer=>{
   if(disposed||token!==serial||trackKey()!==key||!musicAllowed())return;
   pendingMusic=null;const duration=buffer.duration;
   const source=context.createBufferSource(),gain=context.createGain();source.buffer=buffer;source.loop=false;source.playbackRate.value=1;
   source.connect(gain);gain.connect(musicBus);gain.gain.value=0;ramp(gain.gain,1,.65);
   const offset=Math.max(0,Math.min(position,duration));
   const entry={key,source,gain,duration,offset,startedAt:clock(),stopped:false};currentMusic=entry;
   source.onended=()=>{
    source.onended=null;source.disconnect();gain.disconnect();retiring.delete(entry);
    if(currentMusic===entry){
     currentMusic=null;
     if(!entry.stopped&&!disposed){position=0;trackIndex=(trackIndex+1)%playlist.length;syncMusic();emit();}
    }
    pruneBuffers();
   };
   source.start(clock(),offset);prepareNext();emit();
  }).catch(()=>{if(token!==serial||disposed)return;pendingMusic=null;musicError='음악을 불러오지 못했어. 효과음은 계속 사용할 수 있어. 소리 켜기로 다시 시도해 줘.';emit();});
 }
 function stopEffects(){for(const voice of [...voices])finishVoice(voice);cooldowns.clear();}
 function stopAll(){serial++;pendingMusic=null;stopEffects();stopMusic(0);clearRetiring();}
 function suspend(){
  if(!context||context.state!=='running'||suspending)return;
  try{
   const operation=Promise.resolve(context.suspend()).catch(()=>{}).finally(()=>{
    if(suspending===operation)suspending=null;
    const restore=()=>{if(!disposed&&settings.sound&&!hidden&&context.state!=='running')void unlock();};
    // A concurrent unlock may have finished while muted; restore only after its
    // bookkeeping clears, and always respect the latest visibility/mute intent.
    if(resuming)void resuming.then(restore);else restore();
   });
   suspending=operation;
  }catch{}
 }
 function configure(next={}){
  const wasSound=settings.sound;settings={sound:typeof next.sound==='boolean'?next.sound:settings.sound,musicVolume:clamp(next.musicVolume??settings.musicVolume,settings.musicVolume),sfxVolume:clamp(next.sfxVolume??settings.sfxVolume,settings.sfxVolume)};
  if(musicBus){ramp(musicBus.gain,settings.musicVolume);ramp(effectsBus.gain,settings.sfxVolume);}
  if(!settings.sound){stopAll();suspend();}else if(context){
   if(settings.sfxVolume===0)stopEffects();
   if(settings.musicVolume===0){serial++;pendingMusic=null;stopMusic(.1);}
   if(!wasSound)void unlock();else syncMusic();
  }
  emit();
 }
 // Retained for callers that report game state; scenes never select music.
 function setScene(key){key=key&&tracks[key]?key:null;if(key===scene)return;scene=key;emit();}
 function setPaused(value){value=Boolean(value);if(paused===value)return;paused=value;if(paused)stopAll();else syncMusic();emit();}
 function setHidden(value){value=Boolean(value);if(hidden===value)return;hidden=value;if(hidden){stopAll();suspend();}else if(unlocked&&settings.sound)void unlock();emit();}
 function finishVoice(voice){if(voice.done)return;voice.done=true;for(const source of voice.sources){try{source.stop();}catch{}source.disconnect();}for(const node of voice.nodes)node.disconnect();voices.delete(voice);}
 function makeVoice(duration,priority=1,volume=1){
  const limit=16;
  if(voices.size>=limit){const victim=[...voices].sort((a,b)=>a.priority-b.priority||a.when-b.when)[0];if(victim.priority>priority)return null;finishVoice(victim);}
  const gain=context.createGain();gain.gain.value=.52*volume;gain.connect(effectsBus);if(reverb)gain.connect(reverb);
  const voice={gain,nodes:new Set([gain]),sources:new Set(),when:clock(),duration,priority,done:false};voices.add(voice);return voice;
 }
 function envelope(voice,node,{delay=0,duration=.2,attack=.004,volume=.2}={}){
  const gain=context.createGain(),at=voice.when+delay;gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),at+attack);gain.gain.exponentialRampToValueAtTime(.0001,at+duration);node.connect(gain);gain.connect(voice.gain);voice.nodes.add(gain);return {at,end:at+duration};
 }
 function startSource(voice,source,timing){
  voice.sources.add(source);source.onended=()=>{source.disconnect();voice.sources.delete(source);if(!voice.sources.size)finishVoice(voice);};source.start(timing.at);source.stop(timing.end+.025);
 }
 function pitched(voice,frequency,options={}){
  const source=context.createOscillator();source.type=options.type||'sine';const at=voice.when+(options.delay||0);source.frequency.setValueAtTime(frequency,at);if(options.to)source.frequency.exponentialRampToValueAtTime(options.to,at+(options.duration||.2));
  startSource(voice,source,envelope(voice,source,options));
 }
 function noise(voice,frequency,options={}){
  const source=context.createBufferSource();source.buffer=noiseBuffer;source.loop=true;const filter=context.createBiquadFilter();filter.type=options.filter||'bandpass';filter.frequency.setValueAtTime(frequency,voice.when+(options.delay||0));filter.Q.value=options.q||.8;
  if(options.to)filter.frequency.exponentialRampToValueAtTime(options.to,voice.when+(options.delay||0)+(options.duration||.2));source.connect(filter);voice.nodes.add(filter);startSource(voice,source,envelope(voice,filter,options));
 }
 function metal(voice,frequency,options={}){[1,1.498,2.713,4.109].forEach((ratio,index)=>pitched(voice,frequency*ratio,{...options,volume:(options.volume||.1)/(index+1),duration:(options.duration||.25)/(1+index*.4)}));}
 function pluck(voice,frequency,options={}){pitched(voice,frequency,{...options,type:'triangle'});pitched(voice,frequency*2.003,{...options,volume:(options.volume||.2)*.22,duration:(options.duration||.3)*.65});}
 function weapon(voice,tag,skill,variation){
  const power=skill?1.25:1,v=variation;
  if(tag==='saber'){
   noise(voice,650*v,{to:2200,duration:.23,volume:.45*power,attack:.025});pitched(voice,140*v,{to:48,duration:.22,volume:.43*power,delay:.055});metal(voice,270*v,{duration:.24,volume:.075,delay:.06});
  }else if(tag==='spear'){
   noise(voice,1600*v,{to:4200,duration:.13,volume:.39*power,attack:.016});noise(voice,340,{duration:.1,volume:.35,delay:.075});pitched(voice,430*v,{to:180,duration:.085,volume:.16,delay:.07,type:'triangle'});
  }else if(tag==='dart'){
   noise(voice,5200*v,{to:2400,duration:.075,volume:.31*power,attack:.006});metal(voice,1400*v,{duration:.1,volume:.06,delay:.035});if(skill)noise(voice,4400,{duration:.065,volume:.24,delay:.065});
  }else if(tag==='fist'){
   noise(voice,260*v,{filter:'lowpass',duration:.11,volume:.68*power});pitched(voice,125*v,{to:43,duration:.16,volume:.53*power});noise(voice,1100,{duration:.055,volume:.13,delay:.01});
  }else{
   noise(voice,2300*v,{to:5700,duration:.145,volume:.34*power,attack:.018});metal(voice,650*v,{duration:.25,volume:.075,delay:.045});pitched(voice,200,{to:90,duration:.08,volume:.18,delay:.06});
  }
  if(skill){noise(voice,600,{to:2600,duration:.42,volume:.14,attack:.065});metal(voice,tag==='fist'?180:380,{duration:.5,volume:.06,delay:.09});}
 }
 function classify(event,tag){
  const ev=typeof event==='string'?{type:event,tag}:event||{};if(ev.silent)return null;
  const effect=ev.effect||ev.type,kind=ev.type==='preview'?'attack':effect;
  if(['ready','telegraph','energy','armor'].includes(kind))return null;
  if(kind==='dot')return {kind:'poison',...ev,effect:kind,audioKind:'poison'};
  if(kind==='consume'){
   const offensive=ev.actor&&ev.target&&ev.target!==ev.actor;
   return {...ev,audioKind:ev.fx==='venom-rain'?'poison':['explosion','thunder-cleave'].includes(ev.fx)||offensive?'explosion':'heal'};
  }
  if(kind==='enemy')return {...ev,audioKind:'attack',tag:ev.tag||'saber'};
  if(['attack','skill','shield','guard','block','dodge','heal','cleanse','thorns','phase','won','lost','poison','select','rotate','place','error','buy','sell','upgrade','reward'].includes(kind))return {...ev,audioKind:kind};
  return null;
 }
 function play(event,tag){
  const preview=event==='preview'||event?.type==='preview';if(!canPlay()||settings.sfxVolume===0||paused&&!preview)return false;
  const ev=classify(event,tag);if(!ev)return false;const kind=ev.audioKind,now=clock();
  const key=(preview?'preview':kind)+':'+(ev.actor||'ui');
  const interval=kind==='poison' ? 1.25 : ['shield','guard','block'].includes(kind) ? .22 : kind==='attack' ? .075 : kind==='skill' ? .12 : ['won','lost'].includes(kind) ? 1 : .045;
  if(now-(cooldowns.get(key)??-Infinity)<interval)return false;cooldowns.set(key,now);
  const special=['won','lost','phase','upgrade','reward'].includes(kind),voice=makeVoice(special?1.8:.65,special?3:kind==='skill'?2:1,(ev.actor==='enemy'?.7:1)*(ev.crit?1.15:1));if(!voice)return false;
  const variation=1+(Math.random()-.5)*.1;
  if(kind==='attack'||kind==='skill'){
   weapon(voice,ev.tag||'sword',kind==='skill',variation);
   if(ev.crit){metal(voice,1200,{duration:.25,volume:.09,delay:.04});noise(voice,4500,{duration:.06,volume:.2});}
  }else if(['shield','guard','block','thorns'].includes(kind)){
   metal(voice,kind==='thorns'?480:320,{duration:.36,volume:.17});noise(voice,1250,{duration:.1,volume:.22});pitched(voice,95,{to:60,duration:.14,volume:.15});
  }else if(kind==='dodge'){
   noise(voice,3500,{to:900,duration:.22,volume:.25,attack:.04});
  }else if(kind==='heal'||kind==='cleanse'){
   [523.25,659.25,783.99].forEach((f,i)=>pluck(voice,f,{delay:i*.075,duration:.4,volume:.14}));noise(voice,6200,{duration:.4,volume:.035,attack:.08});
  }else if(kind==='poison'){
   const thrown=ev.type==='consume';noise(voice,700,{to:1500,duration:thrown?.34:.17,volume:thrown?.32:.12,q:2});pitched(voice,240,{to:130,duration:.18,volume:thrown?.14:.06});
  }else if(kind==='phase'||kind==='explosion'){
   noise(voice,180,{filter:'lowpass',duration:.7,volume:.7,attack:.01});pitched(voice,90,{to:32,duration:.85,volume:.55});metal(voice,150,{duration:1,volume:.09});
  }else if(kind==='won'||kind==='reward'||kind==='upgrade'){
   const notes=kind==='won'?[293.66,392,440,587.33]:kind==='upgrade'?[392,587.33,783.99]:[440,587.33,659.25];notes.forEach((f,i)=>{pluck(voice,f,{delay:i*.12,duration:.7,volume:.19});metal(voice,f*2,{delay:i*.12,duration:.48,volume:.035});});
  }else if(kind==='lost'){
   [293.66,261.63,196,146.83].forEach((f,i)=>pluck(voice,f,{delay:i*.17,duration:.7,volume:.19}));noise(voice,300,{filter:'lowpass',duration:.8,volume:.16});
  }else if(kind==='error'){
   noise(voice,380,{duration:.065,volume:.25});pitched(voice,120,{to:85,duration:.13,volume:.18});
  }else if(kind==='buy'||kind==='sell'){
   [1100,1600,2100].forEach((f,i)=>metal(voice,f,{delay:i*.035,duration:.16,volume:.055}));
  }else if(kind==='place'){
   noise(voice,800,{filter:'lowpass',duration:.075,volume:.34});pluck(voice,330*variation,{duration:.1,volume:.17});
  }else if(kind==='rotate'){
   noise(voice,1400,{to:2400,duration:.065,volume:.16});pluck(voice,440,{duration:.075,volume:.09});
  }else{
   noise(voice,2100,{duration:.035,volume:.11});pluck(voice,720*variation,{duration:.065,volume:.085});
  }
  // One multi-hit engine event is one designed sound, not N stacked impacts.
  if(!voice.sources.size)finishVoice(voice);return true;
 }
 function dispose(){if(disposed)return;stopAll();disposed=true;unlocked=false;nextMusic=null;if(context){context.onstatechange=null;try{Promise.resolve(context.close()).catch(()=>{});}catch{}}buffers.clear();emit();}
 return {unlock,configure,setScene,setPaused,setHidden,play,getState,dispose};
}
