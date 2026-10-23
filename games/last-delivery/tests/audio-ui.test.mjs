import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import * as data from '../dist/data.mjs';
import * as engine from '../dist/engine.mjs';
import * as grid from '../dist/grid.mjs';
import * as placement from '../dist/placement.mjs';
import * as adjacency from '../dist/adjacency.mjs';
import * as inventory from '../dist/inventory-ui.mjs';
import * as board from '../dist/inventory-board.mjs';
import * as expansion from '../dist/expansion.mjs';
import * as performanceData from '../dist/performance.mjs';
import * as performanceUI from '../dist/performance-ui.mjs';
import * as assembly from '../dist/assembly-ui.mjs';
import * as cutscene from '../dist/cutscene.mjs';

// Exercise the real controller with a recording audio device. These tests check
// user gestures, saved settings, playlist continuity, and event delivery, not sound quality.
function audioHarness({settings={},run=null,script='https://example.test/games/last-delivery/dist/game.js?v=test',embedded}={}){
 const storage=new Map([['last-delivery.settings.v1',JSON.stringify(settings)]]);
 if(run)storage.set('last-delivery.run.v2',JSON.stringify(run));
 const listeners={},windowListeners={},nodes=new Map(),calls=[];let raf=null,now=0,writes=0,options,state={status:'locked',unlocked:false,scene:null,trackKey:'journey',trackTitle:'밤길',trackIndex:0,trackCount:4,sound:true};
 const node=selector=>{
  if(nodes.has(selector))return nodes.get(selector);
  const value={dataset:{},disabled:false,textContent:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){}},children:[],_html:'',addEventListener(k,f){this[k]=f;},setAttribute(k,v){this[k]=v;},querySelector(){return null;},querySelectorAll(){return [];},append(child){this.children.push(child);},remove(){},focus(){doc.activeElement=this;},scrollIntoView(){}};
  Object.defineProperty(value,'innerHTML',{get:()=>value._html,set:s=>{value._html=s;if(selector==='#app')writes++;}});nodes.set(selector,value);return value;
 };
 const app=node('#app');
 const doc={hidden:false,baseURI:'https://example.test/games/last-delivery/index.html',currentScript:{src:script},activeElement:null,querySelector:node,querySelectorAll(){return [];},getElementById:id=>node('#'+id),createElement:()=>node('new-'+nodes.size),addEventListener(k,f){listeners[k]=f;}};
 const audio={configure(p){state={...state,...p,status:p.sound===false?'muted':state.status};calls.push(['configure',{...p}]);},unlock(){calls.push(['unlock']);state={...state,status:'running',unlocked:true};return Promise.resolve(true);},setScene(scene){state={...state,scene,trackTitle:scene};calls.push(['scene',scene]);},setPaused(value){calls.push(['paused',value]);},setHidden(value){calls.push(['hidden',value]);},play(...args){calls.push(['play',...args]);},getState(){return state;},dispose(){}};
 const context={...data,...engine,...grid,...placement,...adjacency,...inventory,...board,...expansion,...performanceData,...performanceUI,...assembly,...cutscene,
  battleEffect(){},clearEffects(){},initBattleVisuals(){},updateInventoryActivity(){},
  MUSIC_TRACKS:{journey:{title:'밤길'},battle:{title:'칼끝'},boss:{title:'성문'},ending:{title:'새벽'}},
  createGameAudio(o){options=o;return audio;},LAST_DELIVERY_EMBEDDED_AUDIO:embedded,
  document:doc,window:{location:{href:doc.baseURI},matchMedia:()=>({matches:false}),addEventListener(k,f){windowListeners[k]=f;}},
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,String(v))},performance:{now:()=>now},requestAnimationFrame:f=>{raf=f;},setTimeout(){return 1;},clearTimeout(){},queueMicrotask:f=>f(),console};
 vm.runInNewContext(readFileSync(new URL('../dist/app.mjs',import.meta.url),'utf8').replace(/^import .*?;\s*$/gm,''),context);
 const click=dataset=>app.click({target:{dataset,disabled:false,closest(){return this;}}});
 return {app,audio,calls,storage,options,doc,context,node,click,listeners,windowListeners,get writes(){return writes;},setState(next){state={...state,...next};options.onState(state);},settings:()=>JSON.parse(storage.get('last-delivery.settings.v1')),run:()=>JSON.parse(storage.get('last-delivery.run.v2')||'null'),frame(ms=50){now+=ms;raf(now);},input(key,value){app.input({target:{dataset:{audioVolume:key},value}});}};
}

test('legacy mute is preserved and first load never unlocks audio without a gesture',()=>{
 const h=audioHarness({settings:{sound:false}});
 assert.equal(h.calls.some(c=>c[0]==='unlock'),false);
 assert.equal(h.calls.find(c=>c[0]==='configure')[1].sound,false);
 assert.match(h.app.innerHTML,/소리 설정 · 전체 음소거/);
 h.click({action:'sound'});assert.match(h.app.innerHTML,/소리 켜기/);assert.equal(h.calls.some(c=>c[0]==='unlock'),false);
 h.click({action:'audio-toggle'});assert.equal(h.settings().sound,true);assert.ok(h.calls.some(c=>c[0]==='unlock'));
 assert.equal(h.settings().musicVolume,.55);assert.equal(h.settings().sfxVolume,.8);
});

test('independent live volume sliders persist values without rerendering or losing slider focus',()=>{
 const h=audioHarness({settings:{sound:true,musicVolume:.3,sfxVolume:.6}});h.click({action:'sound'});
 const writes=h.writes;h.input('musicVolume','22');h.input('sfxVolume','87');
 assert.equal(h.writes,writes);assert.equal(h.settings().musicVolume,.22);assert.equal(h.settings().sfxVolume,.87);
 assert.equal(h.node('#music-volume-value').textContent,'22%');assert.equal(h.node('#sfx-volume-value').textContent,'87%');
 h.input('musicVolume','250');assert.equal(h.settings().musicVolume,1);
 h.input('sfxVolume','NaN');assert.equal(h.settings().sfxVolume,.87);
});

test('audio assets resolve against the executing script and standalone data is forwarded',()=>{
 const embedded={journey:'data:audio/mp4;base64,AAAA'};const h=audioHarness({embedded});
 assert.equal(h.options.baseURL,'https://example.test/games/last-delivery/dist/game.js?v=test');
 assert.equal(h.options.embedded,embedded);
});

test('normal and boss combat keep music through settings, preserve tab handling and honor only manual pause',()=>{
 for(const stage of [0,9]){
  const run=engine.createRun('sword',12);run.phase='prepare';run.stage=stage;
  const h=audioHarness({run});h.click({action:'continue'});h.click({action:'fight'});
  assert.equal(h.calls.some(c=>c[0]==='scene'),false);assert.equal(h.audio.getState().trackKey,'journey');
  h.calls.length=0;h.click({action:'speed'});assert.equal(h.calls.some(c=>c[0]==='scene'),false);
  h.click({action:'sound'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);
  const battleTime=h.run().battle.t;h.calls.length=0;h.frame();assert.equal(h.run().battle.t,battleTime);assert.equal(h.calls.some(c=>c[0]==='play'),false);
  h.doc.hidden=true;h.listeners.visibilitychange();assert.deepEqual(h.calls.filter(c=>c[0]==='hidden').at(-1),['hidden',true]);
  h.doc.hidden=false;h.listeners.visibilitychange();assert.deepEqual(h.calls.filter(c=>c[0]==='hidden').at(-1),['hidden',false]);
  h.click({action:'close-modal'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);
  h.click({action:'catalog'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);h.click({action:'close-modal'});
  h.click({action:'pause'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);
  h.click({action:'pause'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],true);
  h.click({action:'sound'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],true);h.click({action:'close-modal'});
  h.listeners.keydown({key:'Escape',target:{tagName:'BODY'},preventDefault(){}});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);
 }
});

test('ending screens and a new game preserve the current song and show playlist details',()=>{
 const run=engine.createRun('sword',5);run.phase='story';run.scene='ending';run.sceneIndex=0;
 const h=audioHarness({run});h.setState({trackKey:'battle',trackTitle:'칼끝',trackIndex:1});h.click({action:'continue'});
 assert.equal(h.calls.some(c=>c[0]==='scene'),false);assert.match(h.app.innerHTML,/scene-sound-button/);
 h.click({action:'sound'});assert.match(h.app.innerHTML,/aria-label="소리 설정"/);assert.match(h.app.innerHTML,/무작위 순서로 재생/);assert.match(h.app.innerHTML,/id="audio-track">칼끝/);
 h.click({action:'close-modal'});h.click({action:'home'});h.click({action:'new'});h.click({action:'confirm-new'});h.click({kit:'sword'});
 assert.equal(h.calls.some(c=>c[0]==='scene'),false);assert.equal(h.audio.getState().trackKey,'battle');
 h.click({action:'sound'});assert.match(h.app.innerHTML,/id="audio-track">칼끝/);
});

test('leaving a manually paused battle clears its music pause so continuing does not stop the title-screen song',()=>{
 const run=engine.createRun('sword',12);run.phase='prepare';const h=audioHarness({run});h.click({action:'continue'});h.click({action:'fight'});h.click({action:'pause'});
 assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],true);h.click({action:'home'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);
 h.calls.length=0;h.click({action:'continue'});assert.equal(h.calls.filter(c=>c[0]==='paused').at(-1)[1],false);assert.equal(h.calls.some(c=>c[0]==='paused'&&c[1]),false);
});

test('full battle effects reach audio but the victory cue is emitted once',()=>{
 const run=engine.createRun('sword',2);run.phase='prepare';
 const h=audioHarness({run});h.click({action:'continue'});h.click({action:'fight'});h.calls.length=0;
 for(let i=0;i<3000&&h.run().phase==='combat';i++)h.frame();
 const effects=h.calls.filter(c=>c[0]==='play');
 assert.ok(effects.some(c=>typeof c[1]==='object'&&c[1].effect==='attack'&&c[1].tag==='sword'));
 assert.ok(effects.some(c=>typeof c[1]==='object'&&c[1].actor==='enemy'));
 assert.equal(effects.filter(c=>typeof c[1]==='object'&&['won','lost'].includes(c[1].type)).length,0);
 assert.equal(effects.filter(c=>['won','lost'].includes(c[1])).length,1);
});

test('retry status updates in place and preview waits for the audio unlock',async()=>{
 const h=audioHarness();h.click({action:'sound'});const writes=h.writes;
 h.setState({status:'error'});assert.equal(h.writes,writes);assert.match(h.node('#audio-status').textContent,/다시 재생/);assert.match(h.node('#audio-status').textContent,/효과음은 계속/);
 h.calls.length=0;h.click({action:'audio-preview'});assert.equal(h.calls.filter(c=>c[0]==='play').length,0);
 await Promise.resolve();assert.ok(h.calls.some(c=>c[0]==='play'&&c[1]==='preview'));
});

test('escape works on a range input and modal tab order includes sliders',()=>{
 const h=audioHarness();h.click({action:'sound'});
 const first={focus(){h.doc.activeElement=this;}},slider={focus(){h.doc.activeElement=this;}};
 h.app.querySelectorAll=selector=>{assert.match(selector,/input/);return [first,slider];};h.doc.activeElement=slider;let prevented=false;
 h.listeners.keydown({key:'Tab',target:{tagName:'INPUT'},preventDefault(){prevented=true;}});
 assert.equal(prevented,true);assert.equal(h.doc.activeElement,first);
 h.listeners.keydown({key:'Escape',target:{tagName:'INPUT'}});assert.doesNotMatch(h.app.innerHTML,/class="modal-backdrop"/);
});


test('story records and replay leave combat state, inventory, and playing music intact',()=>{
 const run=engine.createRun('sword',19);run.phase='prepare';run.stage=6;
 const h=audioHarness({run});h.click({action:'continue'});h.click({action:'fight'});h.frame();
 h.context.save();const before=JSON.stringify(h.run());h.calls.length=0;
 h.click({action:'story-record'});assert.match(h.app.innerHTML,/data-replay-scene="midpoint"/);assert.doesNotMatch(h.app.innerHTML,/data-replay-scene="ending"/);
 h.click({replayScene:'ending'});assert.doesNotMatch(h.app.innerHTML,/class="scene-screen/);
 h.click({replayScene:'opening'});assert.match(h.app.innerHTML,/class="scene-screen is-replay"/);
 h.click({action:'next-replay'});h.click({action:'previous-replay'});h.frame(1000);
 assert.equal(h.calls.some(c=>c[0]==='scene'),false);assert.equal(h.calls.some(c=>c[0]==='paused'&&c[1]),false);
 h.context.save();assert.equal(JSON.stringify(h.run()),before);
 h.click({action:'close-replay'});assert.match(h.app.innerHTML,/aria-label="이야기 기록"/);
 h.click({action:'close-modal'});h.context.save();assert.equal(JSON.stringify(h.run()),before);
});

test('ending replay cannot award money; only finishing the live ending settles its receipt',()=>{
 const run=engine.createRun('sword',21);run.phase='story';run.scene='ending';run.sceneIndex=3;run.stage=9;run.cleared=true;
 const h=audioHarness({run});h.click({action:'continue'});const before=JSON.stringify(h.run()),gold=h.run().gold;
 h.click({action:'story-record'});h.click({replayScene:'ending'});
 for(let i=0;i<data.SCENES.ending.length;i++)h.click({action:'next-replay'});
 h.context.save();assert.equal(JSON.stringify(h.run()),before);assert.match(h.app.innerHTML,/aria-label="이야기 기록"/);
 h.click({action:'close-modal'});h.click({action:'previous-story'});assert.equal(h.run().sceneIndex,2);assert.equal(h.run().gold,gold);
 h.click({action:'skip-story'});assert.equal(h.run().phase,'complete');assert.equal(h.run().gold,gold+170);
 assert.equal(h.run().deliveryReceipt.status,'settled');assert.match(h.app.innerHTML,/총 표행 대금/);assert.match(h.app.innerHTML,/200 은전/);assert.match(h.app.innerHTML,/170 은전 · 지급 완료/);
 h.click({action:'story-record'});h.click({replayScene:'ending'});
 for(let i=0;i<data.SCENES.ending.length;i++)h.click({action:'next-replay'});
 h.context.save();assert.equal(h.run().gold,gold+170);
});

test('legacy completion reports missing settlement history instead of claiming a payment',()=>{
 const run=engine.createRun('sword',22);run.phase='complete';run.stage=9;run.cleared=true;delete run.deliveryReceipt;delete run.storyVersion;
 const h=audioHarness({run});h.click({action:'continue'});
 assert.match(h.app.innerHTML,/대금 정산 기록이 남아 있지 않아/);assert.doesNotMatch(h.app.innerHTML,/지급 완료/);assert.equal(h.run().gold,run.gold);
});

test('replay works from the title and Escape returns to records without advancing the run',()=>{
 const run=engine.createRun('sword',23),h=audioHarness({run}),before=JSON.stringify(h.run());
 h.click({action:'story-record'});h.click({replayScene:'opening'});assert.match(h.app.innerHTML,/class="scene-screen is-replay"/);
 h.app.querySelector=selector=>({focus(){},click(){const action=selector.match(/data-action="([^"]+)"/)?.[1];if(action)h.click({action});}});
 h.listeners.keydown({key:'ArrowRight',target:{tagName:'BODY'},preventDefault(){}});assert.match(h.app.innerHTML,/data-story-page="opening-debt"/);
 h.listeners.keydown({key:'ArrowLeft',target:{tagName:'BODY'},preventDefault(){}});assert.match(h.app.innerHTML,/data-story-page="opening-need"/);
 h.listeners.keydown({key:'Escape',target:{tagName:'BODY'},preventDefault(){}});assert.match(h.app.innerHTML,/aria-label="이야기 기록"/);
 h.context.save();assert.equal(JSON.stringify(h.run()),before);
});
