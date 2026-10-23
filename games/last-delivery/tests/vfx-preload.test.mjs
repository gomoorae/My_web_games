import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {createRun,createBattle,tickBattle} from '../dist/engine.mjs';

const vfxSource=readFileSync(new URL('../dist/vfx.mjs',import.meta.url),'utf8').replace(/^export /gm,'');
const flush=()=>new Promise(resolve=>setImmediate(resolve));
function deferred(){let resolve,reject;const promise=new Promise((yes,no)=>{resolve=yes;reject=no;});return {promise,resolve,reject};}
function runtime(background='url("https://game.test/assets/techniques.webp")'){
 let now=0,nextTimer=0,raf;const timers=new Map(),images=[],nodes=new Map(),listeners={},windowListeners={};
 class Element{
  constructor(){this._html='';this.textContent='';this.className='';this.children=[];this.dataset={};this.listeners={};this.style={setProperty(){}};this.classList={add(){},remove(){},toggle(){}};}
  get innerHTML(){return this._html;}set innerHTML(value){this._html=value;this.children=[];}
  appendChild(node){node.parent=this;this.children.push(node);return node;}append(...children){children.forEach(child=>this.appendChild(child));}
  remove(){if(this.parent)this.parent.children=this.parent.children.filter(child=>child!==this);}
  querySelectorAll(selector){const name=selector.slice(1);return this.children.flatMap(child=>[...(child.className.split(' ').includes(name)?[child]:[]),...child.querySelectorAll(selector)]);}
  querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
  addEventListener(name,handler){this.listeners[name]=handler;}setAttribute(){}focus(){}
  animate(){return {finished:Promise.resolve(),cancel(){}};}
  getBoundingClientRect(){return {left:100,top:100,width:600,height:400};}
 }
 class Image{
  constructor(){this.complete=false;this.naturalWidth=0;this.decoded=deferred();this.decodeCalls=0;images.push(this);}
  decode(){this.decodeCalls++;return this.decoded.promise;}
  load(){this.complete=true;this.naturalWidth=2048;this.onload?.();}
  fail(){this.onerror?.();}
 }
 const app=new Element(),body=new Element(),toast=new Element();
 const document={body,hidden:false,querySelector(selector){if(selector==='#app')return app;if(selector==='#toast')return toast;if(!nodes.has(selector))nodes.set(selector,new Element());return nodes.get(selector);},querySelectorAll(){return [];},getElementById(id){return this.querySelector('#'+id);},createElement(){return new Element();},addEventListener(name,handler){listeners[name]=handler;}};
 const context={document,Image,getComputedStyle(probe){assert.equal(probe.className,'fx-technique');assert.ok(body.children.includes(probe),'resolve CSS while probe is attached');return {backgroundImage:background};},setTimeout(fn,delay){const id=++nextTimer;timers.set(id,{fn,at:now+delay});return id;},clearTimeout:id=>timers.delete(id),performance:{now:()=>now},requestAnimationFrame:fn=>{raf=fn;},queueMicrotask:fn=>fn(),window:{matchMedia:()=>({matches:false}),addEventListener(name,handler){windowListeners[name]=handler;}},console};
 vm.createContext(context);
 return {context,images,body,app,toast,document,timers,nodes,listeners,windowListeners,advance(ms){const end=now+ms;while(now<end){now=Math.min(now+50,end);for(const [id,timer]of [...timers])if(timer.at<=now){timers.delete(id);timer.fn();}raf?.(now);}}};
}
function helper(background){const h=runtime(background);vm.runInContext(vfxSource+'\nglobalThis.preload=prepareBattleEffects;globalThis.clear=clearEffects;',h.context);return {...h,prepare:h.context.preload,clear:h.context.clear};}
function controller(saved){
 const h=runtime(),storage=new Map([['last-delivery.settings.v1',JSON.stringify({sound:false})]]);
 if(saved)storage.set('last-delivery.run.v2',JSON.stringify(saved));
 h.context.localStorage={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,String(value))};
 const source=readFileSync(new URL('../dist/game.js',import.meta.url),'utf8').replace(/\}\)\(\);\s*$/, 'globalThis.controllerState=()=>({run,screen,paused,pending:Boolean(battlePreparation)});})();');
 vm.runInContext(source,h.context);
 const state=()=>JSON.parse(JSON.stringify(h.context.controllerState()));
 const button=dataset=>{
  const attributes=Object.entries(dataset).map(([key,value])=>`data-${key}="${value}"`);
  const match=[...h.app.innerHTML.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)].find(entry=>attributes.every(attribute=>entry[1].includes(attribute)));
  return match?{dataset,text:match[2],disabled:/\bdisabled\b/.test(match[1]),closest(){return this;}}:null;
 };
 return {...h,state,button,click(dataset){const target=button(dataset);assert.ok(target,JSON.stringify(dataset));assert.equal(target.disabled,false);h.app.listeners.click({target});},escape(){h.listeners.keydown({key:'Escape',target:{tagName:'BODY'}});}};
}
function newFight(h){h.click({action:'new'});h.click({kit:'saber'});h.click({action:'skip-story'});h.click({action:'fight'});}
async function finishImage(h,image=h.images.at(-1)){image.load();await flush();image.decoded.resolve();await flush();}

for(const url of ['https://game.test/assets/techniques.webp','data:image/png;base64,iVBORw0KGgoAAAANSUhEUg==']){
 test(`atlas preload shares loading and decoding, then reuses the CSS asset: ${url.split(':')[0]}`,async()=>{
  const h=helper(`url("${url}")`),pending=h.prepare();assert.equal(h.prepare(),pending);assert.equal(h.images.length,1);assert.equal(h.images[0].src,url);assert.equal(h.body.children.length,0);
  h.images[0].load();await flush();assert.equal(h.images[0].decodeCalls,1);assert.equal(h.prepare(),pending,'download completion alone is not ready');
  h.images[0].decoded.resolve();await pending;assert.equal(h.prepare(),null);assert.equal(h.images.length,1);assert.equal(h.timers.size,0);
 });
}
test('network and decode failures clear pending state for a fresh attempt',async()=>{
 const h=helper(),network=h.prepare();h.images[0].fail();await assert.rejects(network,/불러오지/);
 const decoding=h.prepare();assert.notEqual(decoding,network);h.images[1].load();await flush();h.images[1].decoded.reject(Error('decode failed'));await assert.rejects(decoding,/decode failed/);
 const retry=h.prepare();assert.equal(h.images.length,3);await finishImage(h);await retry;assert.equal(h.prepare(),null);
});
test('timeout survives visual cleanup and a late old decode cannot mark a retry ready',async()=>{
 const h=helper(),expired=h.prepare();h.images[0].load();await flush();h.clear();assert.equal(h.timers.size,1);
 h.advance(15000);await assert.rejects(expired,/초과/);const retry=h.prepare();assert.equal(h.images.length,2);
 h.images[0].decoded.resolve();await flush();assert.equal(h.prepare(),retry);assert.equal(h.timers.size,1);
 await finishImage(h);await retry;assert.equal(h.prepare(),null);assert.equal(h.timers.size,0);
});
test('non-browser harnesses keep the synchronous path without creating fake readiness',()=>{
 const context={};vm.runInNewContext(vfxSource+'\nglobalThis.prepare=prepareBattleEffects;',context);assert.equal(context.prepare(),null);
});
test('first fight waits through download and decode without creating or advancing a battle',async()=>{
 const h=controller();assert.equal(h.images.length,1,'title already warms the atlas');newFight(h);
 assert.equal(h.button({action:'fight'}).disabled,true);assert.match(h.button({action:'fight'}).text,/전투 준비 중/);h.advance(3000);
 assert.equal(h.state().run.phase,'prepare');assert.equal(h.state().run.battle,null);
 h.images[0].load();await flush();h.advance(700);assert.equal(h.state().run.battle,null,'decode must finish before combat');
 h.images[0].decoded.resolve();await flush();assert.equal(h.state().run.phase,'combat');assert.equal(h.state().run.battle.t,0);
 h.advance(700);assert.ok(h.state().run.battle.events.some(event=>event.effect==='attack'));assert.equal(h.images.length,1);
 h.click({action:'pause'});h.click({action:'pause'});assert.equal(h.state().paused,false);assert.equal(h.state().pending,false);
});
for(const resume of ['button','Escape'])test(`saved combat ${resume} resume waits without replaying or advancing old combat`,async()=>{
 const run=createRun('sword',7);run.phase='combat';run.battle=createBattle(run);for(let n=0;n<15;n++)tickBattle(run.battle);
 const before=JSON.stringify(run.battle),h=controller(run);h.click({action:'continue'});if(resume==='button')h.click({action:'pause'});else h.escape();
 h.advance(3000);assert.equal(JSON.stringify(h.state().run.battle),before);assert.equal(h.state().paused,true);assert.equal(h.state().pending,true);
 await finishImage(h);assert.equal(h.state().paused,false);assert.equal(h.state().run.battle.t,run.battle.t);h.advance(700);assert.ok(h.state().run.battle.t>run.battle.t);
});
for(const navigation of ['home-return','modal-close','new-run','Escape','hidden','pagehide'])test(`${navigation} during preparation prevents a late battle start`,async()=>{
 const h=controller();newFight(h);
 if(navigation==='home-return'){h.click({action:'home'});h.click({action:'continue'});}
 if(navigation==='modal-close'){h.click({action:'help'});h.click({action:'close-modal'});}
 if(navigation==='new-run'){h.click({action:'home'});h.click({action:'new'});h.click({action:'confirm-new'});h.click({kit:'fist'});h.click({action:'skip-story'});}
 if(navigation==='Escape')h.escape();
 if(navigation==='hidden'){h.document.hidden=true;h.listeners.visibilitychange();h.document.hidden=false;h.listeners.visibilitychange();}
 if(navigation==='pagehide'){h.windowListeners.pagehide();h.windowListeners.pageshow();}
 await finishImage(h);h.advance(3000);assert.equal(h.state().pending,false);assert.equal(h.state().run.phase,'prepare');assert.equal(h.state().run.battle,null);assert.equal(h.button({action:'fight'}).disabled,false);
});
test('failed first fight gives a retryable message and the next press can start',async()=>{
 const h=controller();newFight(h);h.images[0].fail();await flush();assert.equal(h.state().run.phase,'prepare');assert.equal(h.state().run.battle,null);assert.equal(h.button({action:'fight'}).disabled,false);assert.match(h.toast.textContent,/다시 눌러/);
 h.click({action:'fight'});assert.equal(h.images.length,2);await finishImage(h);assert.equal(h.state().run.phase,'combat');
});
