import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {ITEMS,KITS,SCENES} from '../dist/data.mjs';
import * as E from '../dist/engine.mjs';
import {rotationIndex} from '../dist/grid.mjs';
import {expandBag} from '../dist/expansion.mjs';
import {buildLoadoutSummary,compareItemLevels} from '../dist/performance.mjs';
import {arrangeRun,score,chooseExpansion,restDecision,purchaseReserve,chooseReward,arrangeMultipleRun,chooseMultipleReward,multipleShopChoices,multipleUpgradeTargets} from './balance.mjs';

// Controller integration tests. The small DOM models event targets and timers,
// not browser layout, painting, native drag/drop or audio. Visual QA is separate.
function harness(storage=new Map(),seed=1,{mobile=false}={}){
 let now=0,raf=null,timerId=0;const listeners={},timers=new Map(),nodes=new Map();
 const selectorClass=s=>s.startsWith('.')?s.slice(1):null;
 class Element{
  constructor(){this._html='';this.textContent='';this.dataset={};this.className='';this.children=[];this.parent=null;this.listeners={};this.style={setProperty(){}};this.classes=new Set();this.classList={add:(...cs)=>cs.forEach(c=>this.classes.add(c)),remove:(...cs)=>cs.forEach(c=>this.classes.delete(c)),toggle:(c,on)=>{if(on)this.classes.add(c);else this.classes.delete(c);}};}
  get innerHTML(){return this._html;}set innerHTML(s){this._html=s;this.children=[];}
  addEventListener(k,fn){this.listeners[k]=fn;}
  querySelector(s){return this.querySelectorAll(s)[0]||new Element();}
  querySelectorAll(s){const c=selectorClass(s);return this.children.flatMap(n=>[...(c&&n.className.split(' ').includes(c)?[n]:[]),...n.querySelectorAll(s)]);}
  append(...ns){for(const n of ns){n.parent=this;this.children.push(n);}}appendChild(n){this.append(n);return n;}
  remove(){if(this.parent)this.parent.children=this.parent.children.filter(n=>n!==this);}
  focus(){}setAttribute(){}scrollIntoView(options){this.scrollRequest=options;}animate(){return {finished:Promise.resolve(),cancel(){}};}
  getBoundingClientRect(){return this.rect||{left:100,top:100,right:700,bottom:700,width:600,height:600};}
 }
 const app=new Element(),toast=new Element();
 const doc={hidden:false,activeElement:null,querySelector(s){if(s==='#app')return app;if(s==='#toast')return toast;if(!nodes.has(s))nodes.set(s,new Element());return nodes.get(s);},querySelectorAll(s){return [...nodes.values()].flatMap(n=>n.querySelectorAll(s));},getElementById(s){return this.querySelector('#'+s);},createElement(){return new Element();},addEventListener(k,f){listeners[k]=f;}};
 const setTimer=(fn,ms=0)=>{const id=++timerId;timers.set(id,{fn,due:now+ms});return id;};
 storage.set('last-delivery.settings.v1',JSON.stringify({sound:false}));
 const viewport={scrollY:0,addEventListener(){},matchMedia:query=>({matches:mobile&&/max-width:\s*780px/.test(query)}),scrollTo(options){this.scrollY=typeof options==='object'?options.top:options;}};
 const context={Date:class extends Date{static now(){return seed;}},document:doc,window:viewport,localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v))},performance:{now:()=>now},requestAnimationFrame:f=>{raf=f;},setTimeout:setTimer,clearTimeout:id=>timers.delete(id),setInterval:()=>++timerId,queueMicrotask:f=>f(),console};
 vm.runInNewContext(readFileSync(new URL('../dist/game.js',import.meta.url),'utf8'),context);
 const state=()=>JSON.parse(storage.get('last-delivery.run.v2')||'null');
 const button=(dataset)=>{
  const attributes=Object.entries(dataset).map(([k,v])=>`data-${k.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())}="${v}"`);
  const html=[...app.innerHTML.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)].find(m=>attributes.every(a=>m[1].includes(a)));
  if(!html)return null;return {dataset,disabled:/\bdisabled\b/.test(html[1]),textContent:html[2],closest(){return this;}};
 };
 return {app,toast,storage,state,button,viewport,node:s=>doc.querySelector(s),click(dataset){const t=button(dataset);assert.ok(t,`missing UI button ${JSON.stringify(dataset)} at ${state()?.phase}`);assert.equal(t.disabled,false,`disabled UI button ${JSON.stringify(dataset)} at ${state()?.phase}`);app.listeners.click({target:t});},advance(ms){for(let t=0;t<ms;t+=50){now+=50;for(const [id,timer]of [...timers])if(timer.due<=now){timers.delete(id);timer.fn();}raf(now);}},advanceUntil(predicate,ms=130000){for(let t=0;t<ms&&!predicate();t+=50)this.advance(50);assert.ok(predicate(),'controller did not reach expected phase within time limit');},visibility(hidden){doc.hidden=hidden;listeners.visibilitychange();}};
}
function start(h,kit='sword'){h.click({action:'new'});h.click({kit});}
function ghostCovers(html,x,y){return [...html.matchAll(/<rect\b([^>]*)>/g)].some(([,attrs])=>{const a=Object.fromEntries([...attrs.matchAll(/\b(x|y|width|height)="([0-9.]+)"/g)].map(m=>[m[1],Number(m[2])]));return x*100+50>=a.x&&x*100+50<=a.x+a.width&&y*100+50>=a.y&&y*100+50<=a.y+a.height;});}
// Compute a legal layout on a copy, then execute every mutation using visible UI.
function arrange(h,multiple=false){
 const r=h.state();(multiple?arrangeMultipleRun:arrangeRun)(r);
 for(const i of h.state().items.filter(E.inBag)){h.click({item:i.uid});h.click({action:'stow'});}
 for(const i of r.items.filter(E.inBag)){
  h.click({item:i.uid});let turns=0;
  while(rotationIndex(h.state().items.find(j=>j.uid===i.uid).rot)!==rotationIndex(i.rot)){
   assert.ok(turns++<4,'rotation must cycle through four orientations');h.click({action:'rotate'});
  }
  h.click({cell:i.x+','+i.y});
 }
 assert.equal(E.validateRun(h.state()),true);assert.equal(E.buildStats(h.state()).errors.length,0);
 for(const i of r.items.filter(E.inBag)){const actual=h.state().items.find(j=>j.uid===i.uid);assert.deepEqual([actual.x,actual.y,rotationIndex(actual.rot)],[i.x,i.y,rotationIndex(i.rot)]);}
}
function campaign(h,multiple=false){
 const scenes=[],shops=[],rests=[];let steps=0,maxWeapons=0,maxInners=0;
 while(!['complete','defeat'].includes(h.state().phase)&&steps++<180){
  const r=h.state();assert.ok(r.cols>=6&&r.cols<=8&&r.rows>=6&&r.rows<=8);assert.equal(E.validateRun(r),true);
  if(r.phase==='story'){if(r.sceneIndex===0)scenes.push(r.scene);h.click({action:'next-story'});continue;}
  if(r.phase==='prepare'){
   arrange(h,multiple);const s=E.buildStats(h.state());maxWeapons=Math.max(maxWeapons,s.weapons.length);maxInners=Math.max(maxInners,s.inners.length);
   for(const i of(multiple?multipleUpgradeTargets(h.state()):[s.weapon,s.arts[0]].filter(Boolean))){if(h.state().gold>=E.upgradeCost(i)&&i.level<(r.stage>=6?3:2)){h.click({item:i.uid});h.click({action:'upgrade'});}}
   h.click({action:'fight'});h.advanceUntil(()=>h.state().phase!=='combat');continue;
  }
  if(r.phase==='reward'){const choice=(multiple?chooseMultipleReward:chooseReward)(r);h.click({reward:choice});continue;}
  if(r.phase==='shop'){
   shops.push(r.stage);const expansion=chooseExpansion(r,'shop');if(expansion)h.click({expand:expansion.axis});arrange(h,multiple);const chosen=multiple?multipleShopChoices(r):E.shopChoices(r).filter(t=>!r.items.some(i=>i.type===t)&&ITEMS[t].kind!=='weapon').sort((a,b)=>score(b,r.kit)-score(a,r.kit));
   for(const t of chosen)if((multiple||score(t,r.kit)>=18)&&h.state().gold>=ITEMS[t].price+purchaseReserve(t))h.click({buy:t});
   while(h.state().gold>=10&&h.state().items.filter(i=>i.type==='medicine').length<3&&!h.button({buy:'medicine'}).disabled)h.click({buy:'medicine'});
   h.click({action:'leave-shop'});continue;
  }
  if(r.phase==='rest'){rests.push(r.stage);h.click({rest:restDecision(r)});continue;}
  assert.fail(`unexpected phase ${r.phase}`);
 }
 return {scenes,shops,rests,maxWeapons,maxInners};
}

test('five starting kits clear ten natural battles through the UI using multiple weapons and inner skills',()=>{
 // Completion regression samples, not a claim that every seed or build wins.
 // The separate balance script evaluates unselected seeds with the same policy.
 const seeds={sword:2,saber:1,spear:2,dart:2,fist:1};
 for(const kit of Object.keys(KITS)){
  const h=harness(new Map(),seeds[kit]);assert.match(h.app.innerHTML,/새로운 표행/);start(h,kit);const seen=campaign(h,true),r=h.state();
  assert.equal(r.phase,'complete',`${kit} ended at battle ${r.stage+1}`);assert.equal(r.cleared,true);assert.equal(r.battles.length,10);assert.ok(seen.maxWeapons>=2,kit+' never used multiple weapons');assert.ok(seen.maxInners>=2,kit+' never used multiple inner skills');assert.ok(r.battles.every(b=>b.status==='won'));
  assert.deepEqual(seen.scenes,Object.keys(SCENES));assert.deepEqual(seen.shops,[2,5,8]);assert.deepEqual(seen.rests,[3,6,9]);assert.match(h.app.innerHTML,/약재와 장부를 전달했다/);
  const reload=harness(h.storage);assert.match(reload.app.innerHTML,/지난 표행 보기/);reload.click({action:'continue'});assert.match(reload.app.innerHTML,/마침내, 새벽/);
 }
});
test('battle reload, help, and hidden tab pause simulation without losing saved state',()=>{
 const h=harness();start(h,'dart');h.click({action:'skip-story'});h.click({action:'fight'});h.advance(4200);const saved=h.state();assert.equal(saved.phase,'combat');assert.ok(saved.battle.t>0);
 const reload=harness(h.storage);reload.click({action:'continue'});reload.advance(3000);assert.equal(reload.state().battle.t,saved.battle.t);reload.click({action:'pause'});reload.advance(2100);assert.ok(reload.state().battle.t>saved.battle.t);
 reload.visibility(true);const atHide=reload.state().battle.t;reload.advance(3000);assert.equal(reload.state().battle.t,atHide);reload.visibility(false);reload.click({action:'pause'});reload.click({action:'help'});reload.advance(3000);assert.equal(reload.state().battle.t,atHide);reload.click({action:'close-modal'});reload.click({action:'pause'});reload.advanceUntil(()=>reload.state().phase==='reward');
});
test('new-run cancellation and filtered sixty-item catalogue do not mutate the run',()=>{
 const h=harness();start(h);h.click({action:'skip-story'});const before=h.state();h.click({action:'home'});h.click({action:'new'});assert.match(h.app.innerHTML,/현재 표행의 진행/);h.click({action:'close-modal'});assert.deepEqual(h.state(),before);
 h.click({action:'catalog'});assert.equal((h.app.innerHTML.match(/class="catalog-card"/g)||[]).length,60);h.click({filter:'art'});assert.equal((h.app.innerHTML.match(/class="catalog-card"/g)||[]).length,18);h.click({filter:'inner'});assert.equal((h.app.innerHTML.match(/class="catalog-card"/g)||[]).length,6);assert.deepEqual(h.state(),before);
});
test('6×6 UI placement finds nearby space without overlap, allows rotation, and keeps last weapon',()=>{
 const h=harness();start(h);h.click({action:'skip-story'});const r=h.state(),weapon=r.items.find(i=>ITEMS[i.type].kind==='weapon'),medicine=r.items.find(i=>i.type==='medicine');
 h.click({item:medicine.uid});h.click({cell:`${weapon.x},${weapon.y}`});assert.equal(E.validateRun(h.state()),true);assert.deepEqual(h.state().items.find(i=>i.uid===weapon.uid),weapon);
 const before=h.state();h.click({item:weapon.uid});h.click({action:'sell'});assert.deepEqual(h.state(),before);h.click({action:'stow'});h.click({action:'rotate'});h.click({cell:'2,5'});const placed=h.state().items.find(i=>i.uid===weapon.uid);assert.equal(rotationIndex(placed.rot),1);assert.deepEqual([placed.x,placed.y],[2,5]);assert.equal(E.validateRun(h.state()),true);
});

test('storage rotation survives selection and reload, and auto placement prefers that direction',()=>{
 const h=harness();start(h);h.click({action:'skip-story'});
 const book=h.state().items.find(i=>i.type==='swordbook'),weapon=h.state().items.find(i=>i.type==='sword');
 h.click({item:book.uid});h.click({action:'stow'});h.click({rotateItem:book.uid});
 h.click({item:weapon.uid});h.click({item:book.uid});assert.equal(rotationIndex(h.state().items.find(i=>i.uid===book.uid).rot),1);
 assert.match(h.button({rotateItem:book.uid}).textContent,/↻/);assert.match(h.app.innerHTML,/1×2/);
 const reload=harness(h.storage);reload.click({action:'continue'});reload.click({item:book.uid});reload.click({action:'autoplace'});
 const placed=reload.state().items.find(i=>i.uid===book.uid);assert.equal(rotationIndex(placed.rot),1);assert.equal(E.inBag(placed),true);assert.equal(E.validateRun(reload.state()),true);
});

test('a pending bag rotation becomes the saved storage orientation when stowed',()=>{
 const r=E.createRun('sword',1);r.phase='prepare';for(const i of r.items)E.moveItem(r,i.uid,null,null);
 const weapon=r.items.find(i=>i.type==='sword');E.moveItem(r,weapon.uid,5,2);
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});h.click({item:weapon.uid});h.click({action:'rotate'});
 assert.equal(rotationIndex(h.state().items.find(i=>i.uid===weapon.uid).rot),0);h.click({action:'stow'});
 assert.equal(rotationIndex(h.state().items.find(i=>i.uid===weapon.uid).rot),1);assert.match(h.app.innerHTML,/3×1/);
 h.click({rotateItem:weapon.uid});assert.equal(rotationIndex(h.state().items.find(i=>i.uid===weapon.uid).rot),2);
});

test('dragging a rotated storage item snaps into the same narrow hole shown in preview',()=>{
 for(const width of [300,600]){
  const r=E.createRun('sword',1);r.phase='prepare';for(const i of r.items)E.moveItem(r,i.uid,null,null);
  const book=r.items.find(i=>i.type==='swordbook');
  for(let y=0;y<6;y++)for(let x=0;x<6;x++)if(!(x===5&&y>=4)){const i=E.addItem(r,'medicine');E.moveItem(r,i.uid,x,y);}
  const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});h.click({rotateItem:book.uid});
  const before=h.state().items.filter(i=>i.uid!==book.uid);h.node('#bag-grid').rect={left:100,top:100,width,height:width,right:100+width,bottom:100+width};
  const dataTransfer={setData(){}},target={closest:()=>null};
  h.app.listeners.dragstart({target:h.button({item:book.uid}),clientX:50,clientY:800,dataTransfer,preventDefault(){}});
  const event={target,clientX:100+width*5.6/6,clientY:100+width*5.08/6,dataTransfer,preventDefault(){}};
  h.app.listeners.dragover(event);assert.ok(ghostCovers(h.node('#placement-preview').innerHTML,5,4));assert.ok(ghostCovers(h.node('#placement-preview').innerHTML,5,5));
  h.app.listeners.drop(event);const placed=h.state().items.find(i=>i.uid===book.uid);
  assert.deepEqual([placed.x,placed.y,rotationIndex(placed.rot)],[5,4,1]);assert.deepEqual(h.state().items.filter(i=>i.uid!==book.uid),before);assert.equal(E.validateRun(h.state()),true);
 }
});

test('dragging from the bottom of a bag item preserves its grab offset',()=>{
 const r=E.createRun('sword',1);r.phase='prepare';for(const i of r.items)E.moveItem(r,i.uid,null,null);
 const weapon=r.items.find(i=>i.type==='sword');E.moveItem(r,weapon.uid,2,1);
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 const dataTransfer={setData(){}},target={closest:()=>null};
 h.app.listeners.dragstart({target:h.button({item:weapon.uid}),clientX:350,clientY:480,dataTransfer,preventDefault(){}});
 const event={target,clientX:450,clientY:580,dataTransfer,preventDefault(){}};
 h.app.listeners.dragover(event);assert.ok(ghostCovers(h.node('#placement-preview').innerHTML,3,2));
 h.app.listeners.drop(event);const placed=h.state().items.find(i=>i.uid===weapon.uid);assert.deepEqual([placed.x,placed.y,rotationIndex(placed.rot)],[3,2,0]);
});

test('clicking the last row fits a long item above the clicked cell with the matching preview',()=>{
 const r=E.createRun('sword',1);r.phase='prepare';for(const i of r.items)E.moveItem(r,i.uid,null,null);
 const weapon=r.items.find(i=>i.type==='sword');
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});h.click({item:weapon.uid});
 const target={closest(s){if(s==='[data-cell]')return {dataset:{cell:'5,5'}};if(s==='.bag-cloth')return this;return null;}};
 h.app.listeners.pointermove({target,clientX:650,clientY:650});assert.ok(ghostCovers(h.node('#placement-preview').innerHTML,5,3));assert.ok(ghostCovers(h.node('#placement-preview').innerHTML,5,5));
 h.click({cell:'5,5'});const placed=h.state().items.find(i=>i.uid===weapon.uid);assert.deepEqual([placed.x,placed.y,rotationIndex(placed.rot)],[5,3,0]);
});
test('consumable shop UI permits exactly three purchases and displays stock exhaustion',()=>{
 // An ordinary createRun fixture isolates the shop UI; campaign test above earns all resources.
 const r=E.createRun('sword',1);r.phase='shop';r.stage=2;const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 for(let n=1;n<=3;n++){assert.equal(h.button({buy:'medicine'}).disabled,false,`medicine prematurely sold out after ${n-1}`);h.click({buy:'medicine'});assert.equal(h.state().shopBought.filter(t=>t==='medicine').length,n);}
 assert.equal(h.state().gold,0);assert.equal(h.button({buy:'medicine'}).disabled,true);assert.match(h.button({buy:'medicine'}).textContent,/품절/);
});

test('inventory shows real contacts before selection and the selected connection effects',()=>{
 const h=harness();start(h);h.click({action:'skip-story'});
 assert.match(h.app.innerHTML,/inventory-link link-art/);assert.match(h.app.innerHTML,/inventory-link link-support/);
 const r=h.state(),weapon=r.items.find(i=>i.type==='sword'),stone=r.items.find(i=>i.type==='stone');
 h.click({item:weapon.uid});assert.match(h.app.innerHTML,/relation-peer/);assert.match(h.app.innerHTML,/직접 피해 \+25%/);
 h.click({item:stone.uid});h.click({action:'stow'});
 assert.ok(!h.app.innerHTML.includes('data-relation="'+stone.uid+':')); assert.match(h.app.innerHTML,/창고 보관 중/);
});

test('shared character status remains visible during shop and rest and updates after healing',()=>{
 for(const phase of ['shop','rest']){
  const r=E.createRun('sword',1);r.phase=phase;r.stage=phase==='shop'?2:3;r.hp=51;
  const storage=new Map([['last-delivery.run.v2',JSON.stringify(r)]]),h=harness(storage);h.click({action:'continue'});
  assert.match(h.app.innerHTML,/class="character-status"/);assert.match(h.app.innerHTML,/기혈 51 \/ 140/);
  assert.match(h.app.innerHTML,/시작 방어막/);assert.match(h.app.innerHTML,/활성 무공 1개/);
  if(phase==='rest'){h.click({rest:'heal'});assert.match(h.app.innerHTML,/기혈 140 \/ 140/);}
 }
});

test('shop expansion adds a usable row, preserves items, and survives reload',()=>{
 const r=E.createRun('sword',4);r.phase='shop';r.stage=2;r.gold=80;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 h.click({expand:'row'});const expanded=h.state();
 assert.deepEqual([expanded.cols,expanded.rows,expanded.gold],[6,7,56]);assert.deepEqual(expanded.items,r.items);
 assert.equal((h.app.innerHTML.match(/data-cell="/g)||[]).length,42);
 assert.equal(h.button({expand:'col'}).disabled,true);
 const reload=harness(h.storage);reload.click({action:'continue'});assert.equal((reload.app.innerHTML.match(/data-cell="/g)||[]).length,42);
 const med=expanded.items.find(i=>i.type==='medicine');reload.click({item:med.uid});reload.click({cell:'5,6'});
 assert.deepEqual([reload.state().items.find(i=>i.uid===med.uid).x,reload.state().items.find(i=>i.uid===med.uid).y],[5,6]);assert.equal(E.validateRun(reload.state()),true);
});

test('rest expansion trades the recovery choice for extra space without healing or spending',()=>{
 const r=E.createRun('sword',4);r.phase='rest';r.stage=3;r.hp=51;r.gold=17;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});h.click({rest:'expand-col'});
 assert.deepEqual([h.state().cols,h.state().rows,h.state().hp,h.state().gold],[7,6,51,17]);assert.equal(h.state().phase,'prepare');assert.equal(h.button({rest:'heal'}),null);assert.equal(E.validateRun(h.state()),true);
});

test('enemy backpack inspection shows the exact immutable loadout used for the battle',()=>{
 const r=E.createRun('sword',23);r.phase='prepare';r.stage=4;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 const loadout=E.enemyLoadout(r),before=h.state(),item=loadout.items[0];
 assert.match(h.app.innerHTML,/id="enemy-bag-panel"/);
 for(const i of loadout.items)assert.ok(h.app.innerHTML.includes('data-enemy-item="'+i.uid+'"'),i.uid);
 h.click({enemyItem:item.uid});assert.deepEqual(h.state(),before);
 assert.ok(h.node('#enemy-bag-panel').innerHTML.includes(ITEMS[item.type].name)||h.app.innerHTML.includes(ITEMS[item.type].name));
 h.click({action:'fight'});assert.deepEqual(h.state().battle.enemyLoadout,loadout);assert.match(h.app.innerHTML,/data-live-item="enemy:/);
});

function visibleBuildValue(h,key){
 const match=h.app.innerHTML.match(new RegExp('data-build-stat="'+key+'"[^>]*>[\\s\\S]*?<strong>([^<]+)</strong>'));
 assert.ok(match,`missing visible build stat ${key}`);return Number(match[1].replaceAll(',','').replace(/개$/,''));
}
test('paid refinement previews exact gains, shows persistent before/after results and caps at three',()=>{
 const r=E.createRun('sword',4);r.phase='prepare';r.gold=200;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 const w=r.items.find(i=>i.type==='sword'),book=r.items.find(i=>i.type==='swordbook');h.click({item:w.uid});
 assert.match(h.app.innerHTML,/다음 연마 · \+0 → \+1/);assert.match(h.app.innerHTML,/기본 설명 · 연마 전/);
 const expected=compareItemLevels(r,w.uid,0,1),priorArt=r.items.find(i=>i.uid===book.uid).level;
 h.click({action:'upgrade'});const after=h.state(),report=after.refinementReport;
 assert.equal(after.gold,180);assert.equal(report.source,'paid');assert.equal(report.entries.length,1);
 assert.deepEqual(report.entries[0].rows,expected.rows);assert.equal(after.items.find(i=>i.uid===book.uid).level,priorArt);
 assert.match(h.app.innerHTML,/연마 완료/);assert.match(h.app.innerHTML,/연마로 오른 수치 · \+0 → \+1/);
 assert.match(h.toast.textContent,/1타 피해 .* → /);assert.equal(visibleBuildValue(h,'dps'),Number(buildLoadoutSummary(after).metrics.find(m=>m.key==='dps').value.toFixed(1)));
 const reload=harness(h.storage);reload.click({action:'continue'});assert.match(reload.app.innerHTML,/연마 완료/);
 reload.click({action:'dismiss-refinement'});assert.equal(reload.state().refinementReport,undefined);
 reload.click({item:w.uid});reload.click({action:'upgrade'});reload.click({action:'upgrade'});
 assert.equal(reload.state().items.find(i=>i.uid===w.uid).level,3);assert.match(reload.app.innerHTML,/최대 연마 \+3/);assert.equal(reload.button({action:'upgrade'}),null);
});
test('rest training reports both free refinements and actual healing, then clears the receipt at combat',()=>{
 const r=E.createRun('sword',4);r.phase='rest';r.stage=3;r.hp=132;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});h.click({rest:'meditate'});
 const after=h.state();assert.equal(after.phase,'prepare');assert.equal(after.gold,r.gold);assert.equal(after.refinementReport.source,'rest');
 assert.equal(after.refinementReport.entries.length,2);assert.equal(after.refinementReport.hpGain,8);
 assert.ok(after.refinementReport.entries.every(e=>e.fromLevel===0&&e.toLevel===1&&e.rows.length));
 assert.match(h.app.innerHTML,/수련 결과/);assert.match(h.app.innerHTML,/기혈 회복 \+8/);
 h.click({action:'fight'});assert.equal(h.state().refinementReport,undefined);
});
test('visible bag attack and defense update on stowing and restoring the contributing equipment',()=>{
 const r=E.createRun('sword',4);r.phase='shop';r.stage=2;const armor=E.addItem(r,'armor');assert.equal(E.autoPlace(r,armor.uid),true);
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 assert.equal(visibleBuildValue(h,'armor'),2);assert.equal(visibleBuildValue(h,'shield'),26);const damage=visibleBuildValue(h,'dps');
 h.click({item:armor.uid});h.click({action:'stow'});assert.equal(visibleBuildValue(h,'armor'),0);assert.equal(visibleBuildValue(h,'shield'),0);
 h.click({action:'autoplace'});assert.equal(visibleBuildValue(h,'armor'),2);
 const stone=r.items.find(i=>i.type==='stone');h.click({item:stone.uid});h.click({action:'stow'});assert.ok(visibleBuildValue(h,'dps')<damage);
 assert.match(h.app.innerHTML,/보관 중/);assert.match(h.app.innerHTML,/초당 기본 피해에는 무공·지속 피해를 포함하지 않아/);
});

function multiEquipmentFixture(){
 // Ordinary-size, legal expansion history; this isolates the equipment UI.
 // It is not a claim these particular items were earned in a campaign.
 const r=E.createRun('sword',4);r.items=[];r.phase='shop';r.stage=2;
 assert.equal(expandBag(r,'col','shop'),true);r.phase='prepare';r.stage=4;
 const layout=[['sword',2,1],['spear',4,1],['swordbook',0,1],['swordbook',0,3],['spearbook',4,0],['cloudstep',3,1],['innerbalanced',5,1],['innerwind',0,4]];
 for(const[type,x,y]of layout){const item=E.addItem(r,type);assert.equal(E.moveItem(r,item.uid,x,y,0),true,type);}
 assert.equal(E.validateRun(r),true);return r;
}
function heroLoadoutText(h){
 const section=h.app.innerHTML.match(/<div class="character-loadout">([\s\S]*?)<\/aside>/);
 assert.ok(section,'missing hero loadout HUD');return section[1];
}
test('two weapons, two inner skills and four arts can equip through the UI with accurate combined totals',()=>{
 const r=multiEquipmentFixture(),spear=r.items.find(i=>i.type==='spear'),wind=r.items.find(i=>i.type==='innerwind');
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 assert.equal(h.button({action:'fight'}).disabled,false);assert.equal(visibleBuildValue(h,'weaponCount'),2);
 assert.match(heroLoadoutText(h),/무기 2개/);assert.match(heroLoadoutText(h),/심법 2개/);assert.match(heroLoadoutText(h),/활성 무공 4개/);
 for(const type of ['sword','spear','innerbalanced','innerwind'])assert.ok(heroLoadoutText(h).includes(ITEMS[type].name),type);
 const combined=visibleBuildValue(h,'dps');assert.ok(combined>0);
 h.click({item:spear.uid});h.click({action:'stow'});
 assert.equal(visibleBuildValue(h,'weaponCount'),1);assert.ok(visibleBuildValue(h,'dps')<combined);assert.match(heroLoadoutText(h),/활성 무공 3개/);
 h.click({cell:'4,1'});assert.equal(visibleBuildValue(h,'weaponCount'),2);assert.equal(visibleBuildValue(h,'dps'),combined);assert.match(heroLoadoutText(h),/활성 무공 4개/);
 h.click({item:wind.uid});h.click({action:'stow'});assert.match(heroLoadoutText(h),/심법 1개/);assert.ok(visibleBuildValue(h,'dps')<combined);
 h.click({cell:'0,4'});assert.match(heroLoadoutText(h),/심법 2개/);assert.equal(visibleBuildValue(h,'dps'),combined);
 h.click({action:'help'});assert.doesNotMatch(h.app.innerHTML,/무기는 한 개, 심법은 한 개|초식은 최대 3개/);h.click({action:'close-modal'});
 assert.equal(E.validateRun(h.state()),true);
});
test('both equipped weapons attack with their own sources and resume all timers after UI reload',()=>{
 const r=multiEquipmentFixture(),weapons=r.items.filter(i=>ITEMS[i.type].kind==='weapon');
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});h.click({action:'fight'});h.advance(2200);h.click({action:'home'});
 const saved=h.state();assert.equal(saved.phase,'combat');assert.equal(saved.battle.weapons.length,2);assert.equal(saved.battle.arts.length,4);assert.equal(saved.battle.weaponReady.length,2);
 for(const weapon of weapons){assert.ok(saved.battle.events.some(e=>e.actor==='hero'&&e.effect==='attack'&&e.sourceUid===weapon.uid),weapon.type);}
 assert.ok(saved.battle.energy>=0&&saved.battle.energy<=saved.battle.maxEnergy);
 const reload=harness(h.storage);reload.click({action:'continue'});reload.advance(1000);
 assert.equal(reload.state().battle.t,saved.battle.t);assert.deepEqual(reload.state().battle.weaponReady,saved.battle.weaponReady);assert.deepEqual(reload.state().battle.skillReady,saved.battle.skillReady);
 reload.click({action:'pause'});reload.advance(2200);reload.click({action:'home'});
 const resumed=reload.state();assert.equal(resumed.phase,'combat');assert.ok(resumed.battle.t>saved.battle.t);assert.equal(E.validateRun(resumed),true);
 for(const weapon of weapons){const oldCount=saved.battle.events.filter(e=>e.actor==='hero'&&e.effect==='attack'&&e.sourceUid===weapon.uid).length;assert.ok(resumed.battle.events.filter(e=>e.actor==='hero'&&e.effect==='attack'&&e.sourceUid===weapon.uid).length>oldCount,weapon.type);}
});
test('free training chooses one eligible weapon and one art without skipping the second weapon or upgrading all gear',()=>{
 const r=multiEquipmentFixture();r.phase='rest';r.stage=3;r.hp=112;
 const sword=r.items.find(i=>i.type==='sword'),spear=r.items.find(i=>i.type==='spear'),arts=r.items.filter(i=>ITEMS[i.type].kind==='art');
 sword.level=3;arts[0].level=3;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]));h.click({action:'continue'});
 assert.match(h.app.innerHTML,/무기 1개와 무공 1개/);h.click({rest:'meditate'});
 const after=h.state(),changes=after.items.filter(i=>i.level!==r.items.find(before=>before.uid===i.uid).level);
 assert.deepEqual(changes.map(i=>i.uid),[spear.uid,arts[1].uid]);assert.equal(after.gold,r.gold);assert.equal(after.refinementReport.entries.length,2);assert.equal(after.refinementReport.hpGain,20);
 assert.ok(after.refinementReport.entries.some(e=>e.name===ITEMS.spear.name));assert.equal(after.items.find(i=>i.uid===sword.uid).level,3);
});


test('mobile navigation preserves DOM, progress and per-panel scroll; a new phase returns to progress',()=>{
 const h=harness(new Map(),2,{mobile:true});start(h);h.click({action:'skip-story'});
 assert.match(h.app.innerHTML,/data-mobile-panel="progress"/);assert.ok(h.button({panel:'enemy'}));
 const before=h.state(),html=h.app.innerHTML;h.viewport.scrollY=180;h.click({panel:'bag'});
 assert.equal(h.node('.game-layout').dataset.mobilePanel,'bag');assert.equal(h.app.innerHTML,html,'tab switch must not rebuild the DOM');
 assert.deepEqual(h.state(),before);assert.equal(h.viewport.scrollY,0);
 h.viewport.scrollY=420;h.click({panel:'progress'});assert.equal(h.viewport.scrollY,180);
 h.click({panel:'bag'});assert.equal(h.viewport.scrollY,420);
 h.click({action:'help'});assert.match(h.app.innerHTML,/data-mobile-panel="bag"/);h.click({action:'close-modal'});
 const inspected=h.state().items.find(i=>E.inBag(i));h.click({item:inspected.uid});assert.ok(h.button({action:'clear-selection'}));
 const beforeClear=h.state();h.click({action:'clear-selection'});assert.deepEqual(h.state(),beforeClear);
 assert.equal(h.button({action:'clear-selection'}),null);assert.match(h.app.innerHTML,/물건을 고른 뒤 빈칸/);
 h.click({cell:'5,5'});assert.deepEqual(h.state(),beforeClear,'empty-cell tap after deselection must not move the previous item');
 h.click({action:'fight'});assert.match(h.app.innerHTML,/data-mobile-panel="progress"/);assert.equal(h.viewport.scrollY,0);
 h.click({panel:'bag'});h.click({item:inspected.uid});assert.ok(h.button({action:'clear-selection'}));
 h.click({action:'clear-selection'});assert.equal(h.button({action:'clear-selection'}),null);assert.match(h.app.innerHTML,/전투 중 배치는 고정/);
 h.click({panel:'enemy'});const during=h.app.innerHTML;
 // Hidden panels have zero layout rectangles in a real browser. Effects must still advance safely.
 h.node('#arena').rect={left:0,top:0,right:0,bottom:0,width:0,height:0};
 h.advance(3100);assert.ok(h.state().battle.t>0);assert.equal(h.app.innerHTML,during);
 h.click({action:'pause'});const saved=h.state().battle.t;h.advance(3000);assert.equal(h.state().battle.t,saved);
 h.click({action:'speed'});assert.equal(h.node('#speed-btn').textContent,'2배속');assert.equal(h.node('#mobile-speed-btn').textContent,'2배속');
 h.click({action:'pause'});h.advanceUntil(()=>h.state().phase!=='combat');
 assert.equal(h.state().phase,'reward');assert.match(h.app.innerHTML,/data-mobile-panel="progress"/);assert.equal(h.button({panel:'enemy'}),null);
 h.click({panel:'bag'});h.click({reward:E.rewardChoices(h.state())[0]});
 assert.match(h.app.innerHTML,/data-mobile-panel="progress"/);assert.ok(h.button({panel:'enemy'}));
});

test('mobile shop and rest transitions expose progress and keep storage placement close to the board',()=>{
 const r=E.createRun('sword',2);r.phase='shop';r.stage=2;r.gold=200;
 const h=harness(new Map([['last-delivery.run.v2',JSON.stringify(r)]]),2,{mobile:true});h.click({action:'continue'});
 assert.equal(h.button({panel:'enemy'}),null);h.click({panel:'bag'});const weapon=r.items.find(i=>i.type==='sword');
 h.click({item:weapon.uid});h.click({action:'stow'});h.click({item:weapon.uid});
 assert.equal(h.node('.bag-cloth').scrollRequest.block,'start');assert.equal(h.node('.bag-cloth').scrollRequest.behavior,'instant');
 assert.match(h.app.innerHTML,/class="bag-touch-tools"/);assert.ok(h.button({action:'autoplace'}));
 h.click({action:'rotate'});h.click({action:'autoplace'});assert.ok(E.inBag(h.state().items.find(i=>i.uid===weapon.uid)));
 h.click({action:'item-detail'});assert.equal(h.node('.item-details').scrollRequest.block,'start');
 h.click({action:'leave-shop'});assert.match(h.app.innerHTML,/data-mobile-panel="progress"/);assert.ok(h.button({panel:'enemy'}));
 const restRun=E.createRun('dart',2);restRun.phase='rest';restRun.stage=3;
 const restUI=harness(new Map([['last-delivery.run.v2',JSON.stringify(restRun)]]),2,{mobile:true});restUI.click({action:'continue'});restUI.click({panel:'bag'});
 restUI.click({rest:'heal'});assert.match(restUI.app.innerHTML,/data-mobile-panel="progress"/);assert.ok(restUI.button({panel:'enemy'}));
});
