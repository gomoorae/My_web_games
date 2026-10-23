import test from 'node:test';
import assert from 'node:assert/strict';
import {createGameAudio} from '../dist/audio.mjs';
import {createRun,addItem,autoPlace,createBattle,tickBattle} from '../dist/engine.mjs';

class AudioParamMock{
 constructor(value=0){this.value=value;this.events=[];}
 setValueAtTime(value,time){this.value=value;this.events.push(['set',value,time]);}
 linearRampToValueAtTime(value,time){this.value=value;this.events.push(['linear',value,time]);}
 exponentialRampToValueAtTime(value,time){this.value=value;this.events.push(['exponential',value,time]);}
 cancelScheduledValues(time){this.events.push(['cancel',time]);}
}
class AudioNodeMock{
 constructor(context,kind){this.context=context;this.kind=kind;this.connections=[];this.disconnected=false;context.nodes.push(this);}
 connect(node){this.connections.push(node);return node;}
 disconnect(){this.disconnected=true;this.connections=[];}
}
class SourceMock extends AudioNodeMock{
 constructor(context,kind){super(context,kind);this.frequency=new AudioParamMock();this.playbackRate=new AudioParamMock(1);this.started=false;this.ended=false;}
 start(at,offset=0){this.started=true;this.startAt=at;this.offset=offset;}
 stop(at=this.context.currentTime){if(this.ended)return;this.stopAt=at;if(at<=this.context.currentTime)this.end();}
 end(){if(this.ended)return;this.ended=true;this.onended?.();}
}
function environment({failResume=false,fetchAudio,tracks={},baseURL='https://example.test/games/last-delivery/dist/game.js?v=1.8.0',documentRef,embedded,bufferShape={}}={}){
 const contexts=[],states=[],requests=[];
 class ContextMock{
  constructor(){this.currentTime=0;this.sampleRate=8000;this.state='suspended';this.nodes=[];this.destination={};this.failResume=failResume;contexts.push(this);}
  createGain(){return Object.assign(new AudioNodeMock(this,'gain'),{gain:new AudioParamMock(1)});}
  createDynamicsCompressor(){return Object.assign(new AudioNodeMock(this,'compressor'),Object.fromEntries(['threshold','knee','ratio','attack','release'].map(k=>[k,new AudioParamMock()])));}
  createBuffer(channels,length,rate){const data=Array.from({length:channels},()=>new Float32Array(length));return {duration:length/rate,getChannelData:i=>data[i]};}
  createBufferSource(){return new SourceMock(this,'buffer');}
  createOscillator(){return new SourceMock(this,'oscillator');}
  createBiquadFilter(){return Object.assign(new AudioNodeMock(this,'filter'),{frequency:new AudioParamMock(),Q:new AudioParamMock()});}
  createConvolver(){return new AudioNodeMock(this,'convolver');}
  decodeAudioData(bytes){return Promise.resolve({kind:'music',duration:60,bytes,...bufferShape});}
  resume(){if(this.failResume){this.failResume=false;return Promise.reject(Error('gesture required'));}this.state='running';this.onstatechange?.();return Promise.resolve();}
  suspend(){this.state='suspended';this.onstatechange?.();return Promise.resolve();}
  close(){this.state='closed';return Promise.resolve();}
  advance(seconds){this.currentTime+=seconds;for(const source of this.nodes.filter(n=>n instanceof SourceMock))if(source.stopAt<=this.currentTime)source.end();}
 }
 const audio=createGameAudio({tracks,baseURL,documentRef,embedded,AudioContextClass:ContextMock,onState:state=>states.push(state),fetchAudio:async url=>{requests.push(url);return fetchAudio?fetchAudio(url):{ok:true,arrayBuffer:async()=>new ArrayBuffer(4)};}});
 return {audio,contexts,states,requests,get context(){return contexts[0];},music:()=>contexts.flatMap(c=>c.nodes).filter(n=>n.buffer?.kind==='music'&&n.started&&!n.ended)};
}
const flush=async()=>{for(let i=0;i<12;i++)await Promise.resolve();};
const catalog={journey:{src:'assets/music/journey.m4a',title:'먼 길',loopStart:2,loopEnd:58},battle:{src:'assets/music/battle.m4a',title:'검로'},boss:{src:'assets/music/boss.m4a',title:'결전'}};

test('audio stays locked until gesture and a rejected unlock can be retried',async()=>{
 const h=environment({failResume:true});assert.equal(h.audio.getState().status,'locked');assert.equal(h.contexts.length,0);assert.equal(h.audio.play('place'),false);
 assert.equal(await h.audio.unlock(),false);assert.equal(h.audio.getState().status,'locked');assert.match(h.audio.getState().message,/다시/);
 assert.equal(await h.audio.unlock(),true);assert.equal(h.contexts.length,1);assert.equal(h.audio.play('place'),true);assert.equal(h.audio.getState().status,'running');h.audio.dispose();
});

test('a blocked preview reports the unlock failure even while combat is paused',async()=>{
 const h=environment({failResume:true});h.audio.setPaused(true);assert.equal(await h.audio.unlock(),false);assert.equal(h.audio.getState().status,'locked');assert.match(h.audio.getState().message,/다시/);
 await h.audio.unlock();assert.equal(h.audio.getState().status,'paused');assert.equal(h.audio.play('preview','dart'),true);h.audio.dispose();
});

test('an interrupted context stops old voices and a gesture restores the scene',async()=>{
 const h=environment({tracks:catalog});await h.audio.unlock();await flush();h.audio.play('won');h.context.advance(12);h.context.state='interrupted';h.context.onstatechange();assert.equal(h.audio.getState().status,'locked');assert.equal(h.music().length,0);
 await h.audio.unlock();await flush();assert.equal(h.audio.getState().status,'running');assert.equal(h.music().length,1);assert.equal(h.music()[0].offset,14);h.audio.dispose();
});

test('music loads only after unlock and resolves assets relative to game script',async()=>{
 const h=environment({tracks:catalog});h.audio.setScene('battle');assert.equal(h.requests.length,0);await h.audio.unlock();await flush();
 assert.deepEqual(h.requests,['https://example.test/games/last-delivery/dist/assets/music/battle.m4a']);assert.equal(h.music().length,1);assert.equal(h.music()[0].loop,true);assert.equal(h.music()[0].playbackRate.value,1);assert.equal(h.audio.getState().trackTitle,'검로');h.audio.dispose();
});

test('a late load cannot replace the scene selected after it',async()=>{
 let resolveJourney;const h=environment({tracks:catalog,fetchAudio:url=>url.includes('journey')?new Promise(resolve=>{resolveJourney=resolve;}):Promise.resolve(new ArrayBuffer(2))});
 await h.audio.unlock();await flush();h.audio.setScene('boss');await flush();assert.equal(h.audio.getState().scene,'boss');assert.equal(h.music().length,1);
 const boss=h.music()[0];resolveJourney(new ArrayBuffer(1));await flush();assert.deepEqual(h.music(),[boss]);h.audio.dispose();
});

test('pause resumes the same loop position and blocks queued combat sounds',async()=>{
 const h=environment({tracks:catalog});await h.audio.unlock();await flush();assert.equal(h.music()[0].loopStart,2);assert.equal(h.music()[0].loopEnd,58);assert.equal(h.music()[0].offset,2);
 h.context.advance(63);h.audio.setPaused(true);assert.equal(h.music().length,0);assert.equal(h.audio.play({type:'attack',tag:'sword',actor:'hero'}),false);
 assert.equal(h.audio.play('preview','sword'),true);h.context.advance(30);h.audio.setPaused(false);await flush();assert.equal(h.music().length,1);assert.equal(h.music()[0].offset,9);assert.equal(h.music()[0].playbackRate.value,1);h.audio.dispose();
});

test('hide and mute stop all sources, and visibility restoration respects mute',async()=>{
 const h=environment({tracks:catalog});await h.audio.unlock();await flush();h.audio.play('won');h.audio.setHidden(true);assert.equal(h.context.state,'suspended');assert.equal(h.music().length,0);assert.equal(h.audio.play('preview','fist'),false);
 h.audio.configure({sound:false});h.audio.setHidden(false);await flush();assert.equal(h.context.state,'suspended');assert.equal(h.audio.getState().status,'muted');
 h.audio.configure({sound:true});await flush();assert.equal(h.context.state,'running');assert.equal(h.music().length,1);h.audio.dispose();
});

test('music fetch failure leaves effects available and retry recovers',async()=>{
 let failed=true;const h=environment({tracks:catalog,fetchAudio:()=>{if(failed){failed=false;throw Error('offline');}return new ArrayBuffer(4);}});
 await h.audio.unlock();await flush();assert.equal(h.audio.getState().status,'error');assert.equal(h.audio.play('place'),true);await h.audio.unlock();await flush();assert.equal(h.audio.getState().status,'running');assert.equal(h.music().length,1);h.audio.dispose();
});

test('five weapon families use distinct layered sounds and enemy arts retain their family',async()=>{
 const signatures=[];
 for(const tag of ['sword','saber','spear','dart','fist']){
  const h=environment();await h.audio.unlock();const before=h.context.nodes.length;
  assert.equal(h.audio.play({type:'enemy',effect:'skill',tag,actor:'enemy',hits:8}),true);
  const layers=h.context.nodes.slice(before);assert.ok(layers.some(n=>n.kind==='filter'));assert.ok(layers.some(n=>n.kind==='oscillator'));
  signatures.push(layers.filter(n=>n.kind==='oscillator').map(n=>Math.round(n.frequency.events[0][1]/50)).join(','));h.audio.dispose();
 }
 assert.equal(new Set(signatures).size,5);
});

test('silent ticks and unknown events stay quiet; repeated poison and results are limited',async()=>{
 const h=environment();await h.audio.unlock();assert.equal(h.audio.play({type:'armor',silent:true}),false);assert.equal(h.audio.play({type:'telegraph',effect:'ready'}),false);assert.equal(h.audio.play('unknown'),false);
 assert.equal(h.audio.play({type:'enemy',effect:'dot',fx:'poison',actor:'enemy'}),true);assert.equal(h.audio.play({type:'enemy',effect:'dot',fx:'poison',actor:'enemy'}),false);
 h.context.advance(1.3);assert.equal(h.audio.play({type:'enemy',effect:'dot',fx:'poison',actor:'enemy'}),true);
 assert.equal(h.audio.play('won'),true);assert.equal(h.audio.play('won'),false);h.audio.dispose();
});

test('real bomb and poison bottle events use offensive effects while medicine uses a healing chime',async()=>{
 const run=createRun('sword',101);run.hp=20;
 const bomb=addItem(run,'explosive'),poison=addItem(run,'toxicbottle');assert.ok(autoPlace(run,bomb.uid));assert.ok(autoPlace(run,poison.uid));
 const battle=createBattle(run);tickBattle(battle,.05);const events=battle.events.filter(event=>event.type==='consume'&&event.actor==='hero');
 const bombEvent=events.find(event=>event.sourceUid===bomb.uid),poisonEvent=events.find(event=>event.sourceUid===poison.uid),medicineEvent=events.find(event=>event.sourceUid===run.items.find(item=>item.type==='medicine').uid);
 assert.ok(bombEvent);assert.ok(poisonEvent);assert.ok(medicineEvent);
 const frequencies=[];
 for(const event of [bombEvent,poisonEvent,medicineEvent]){
  const h=environment();await h.audio.unlock();assert.equal(h.audio.play(event),true);frequencies.push(h.context.nodes.find(node=>node.kind==='oscillator').frequency.events[0][1]);h.audio.dispose();
 }
 assert.ok(frequencies[0]<100,'bomb should have a bass impact');assert.ok(frequencies[1]>100&&frequencies[1]<300,'poison should have a low liquid effect');assert.ok(frequencies[2]>500,'medicine should have an ascending bright chime');
});

test('dense impacts have bounded polyphony and mute stops every scheduled layer',async()=>{
 const h=environment();await h.audio.unlock();
 for(let i=0;i<80;i++){h.context.currentTime=i*.08;assert.equal(h.audio.play({type:'attack',tag:'fist',actor:'hero'}),true);}
 const live=()=>h.context.nodes.filter(n=>n instanceof SourceMock&&n.started&&!n.ended);
 assert.ok(live().length<=48,`unbounded active sources: ${live().length}`);h.audio.configure({sound:false});assert.equal(live().length,0);h.audio.dispose();
});

test('separate volume settings are clamped and music can stop independently',async()=>{
 const h=environment({tracks:catalog});h.audio.configure({musicVolume:2,sfxVolume:-1});assert.equal(h.audio.getState().musicVolume,1);assert.equal(h.audio.getState().sfxVolume,0);
 await h.audio.unlock();await flush();assert.equal(h.audio.play('place'),false);h.audio.configure({musicVolume:0,sfxVolume:.5});h.context.advance(.2);assert.equal(h.music().length,0);assert.equal(h.audio.play('place'),true);
 h.audio.configure({musicVolume:.4});await flush();assert.equal(h.music().length,1);h.audio.dispose();
});

test('embedded music skips remote URLs and dispose prevents late starts',async()=>{
 let resolve;const urls=[],contexts=[];
 const h=environment();await h.audio.unlock();const Context=h.context.constructor;h.audio.dispose();
 const audio=createGameAudio({tracks:catalog,embedded:{'assets/music/journey.m4a':'data:audio/mp4;base64,AAAA'},AudioContextClass:class extends Context{constructor(){super();contexts.push(this);}},fetchAudio:url=>{urls.push(url);return new Promise(done=>{resolve=done;});}});
 await audio.unlock();await flush();assert.deepEqual(urls,['data:audio/mp4;base64,AAAA']);audio.dispose();resolve(new ArrayBuffer(4));await flush();assert.equal(contexts[0].state,'closed');assert.equal(contexts[0].nodes.filter(n=>n.buffer?.kind==='music').length,0);
});

function localDocument(){
 const scripts=[],view={};
 return {scripts,defaultView:view,createElement:()=>({remove(){this.removed=true;}}),head:{appendChild:script=>scripts.push(script)}};
}

test('direct disk mode lazily loads one shared script then decodes data URIs',async()=>{
 const documentRef=localDocument(),baseURL='file:///Games/last-delivery/dist/game.js';
 const h=environment({tracks:catalog,documentRef,baseURL}),second=environment({tracks:catalog,documentRef,baseURL});
 assert.equal(documentRef.scripts.length,0);await Promise.all([h.audio.unlock(),second.audio.unlock()]);await flush();
 assert.equal(documentRef.scripts.length,1);assert.equal(documentRef.scripts[0].src,'file:///Games/last-delivery/dist/assets/music/local-audio.js');assert.equal(h.requests.length,0);
 documentRef.defaultView.LAST_DELIVERY_EMBEDDED_AUDIO={'assets/music/journey.m4a':'data:audio/mp4;base64,AAAA','assets/music/battle.m4a':'data:audio/mp4;base64,BBBB'};
 documentRef.scripts[0].onload();await flush();assert.deepEqual(h.requests,['data:audio/mp4;base64,AAAA']);assert.deepEqual(second.requests,h.requests);assert.equal(h.music().length,1);
 h.audio.setScene('battle');await flush();assert.deepEqual(h.requests,['data:audio/mp4;base64,AAAA','data:audio/mp4;base64,BBBB']);assert.equal(documentRef.scripts.length,1);h.audio.dispose();second.audio.dispose();
});

test('local script errors are recoverable without breaking synthesized effects',async()=>{
 const documentRef=localDocument(),h=environment({tracks:catalog,documentRef,baseURL:'file:///Games/last-delivery/dist/index.html'});
 await h.audio.unlock();await flush();documentRef.scripts[0].onerror();await flush();assert.equal(h.audio.getState().status,'error');assert.equal(h.audio.play('place'),true);assert.equal(documentRef.scripts[0].removed,true);
 await h.audio.unlock();await flush();assert.equal(documentRef.scripts.length,2);documentRef.defaultView.LAST_DELIVERY_EMBEDDED_AUDIO={journey:'data:audio/mp4;base64,AAAA'};documentRef.scripts[1].onload();await flush();assert.equal(h.audio.getState().status,'running');h.audio.dispose();
});

test('standalone data and ordinary web pages do not request the local helper',async()=>{
 const documentRef=localDocument(),inline=environment({tracks:catalog,documentRef,baseURL:'file:///Games/Last-Delivery.html',embedded:{journey:'data:audio/mp4;base64,AAAA'}}),web=environment({tracks:catalog,documentRef});
 await Promise.all([inline.audio.unlock(),web.audio.unlock()]);await flush();assert.equal(documentRef.scripts.length,0);assert.match(inline.requests[0],/^data:/);assert.match(web.requests[0],/^https:/);inline.audio.dispose();web.audio.dispose();
});

test('music cache retains the two recent scenes and reloads an evicted older track',async()=>{
 const h=environment({tracks:catalog});await h.audio.unlock();await flush();
 h.audio.setScene('battle');await flush();h.context.advance(1);h.audio.setScene('boss');await flush();h.context.advance(1);
 h.audio.setScene('battle');await flush();h.context.advance(1);assert.equal(h.requests.length,3);
 h.audio.setScene('journey');await flush();assert.equal(h.requests.length,4);assert.match(h.requests.at(-1),/journey/);h.audio.dispose();
});

test('decoded cache releases an old large track after its fade finishes',async()=>{
 const h=environment({tracks:catalog,bufferShape:{length:10*1024*1024,numberOfChannels:1}});await h.audio.unlock();await flush();
 h.audio.setScene('battle');await flush();assert.equal(h.music().length,2);h.context.advance(1);assert.equal(h.music().length,1);
 h.audio.setScene('journey');await flush();assert.equal(h.requests.length,3);assert.match(h.requests.at(-1),/journey/);h.audio.dispose();
});
