import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {ITEMS} from '../dist/data.mjs';

// Geometry/event checks use explicit sprite rectangles, not browser painting.
function effectHarness(reduced=false){
 let clock=0,nextTimer=0;const timers=new Map(),animations=[];
 class Element{
  constructor(rect=null){this.rect=rect;this.children=[];this.parent=null;this.className='';this.textContent='';this.dataset={};this.values=new Map();this.style={setProperty:(key,value)=>this.values.set(key,value)};this.classList={toggle(){}};}
  getBoundingClientRect(){return this.rect;}
  appendChild(node){node.parent=this;this.children.push(node);return node;}
  remove(){if(this.parent)this.parent.children=this.parent.children.filter(node=>node!==this);}
  querySelectorAll(selector){return this.children.filter(node=>node.className.split(' ').includes(selector.slice(1)));}
  animate(frames,options){const a={frames,options,cancelled:false,finished:Promise.resolve(),cancel(){this.cancelled=true;}};animations.push(a);return a;}
 }
 const arena=new Element({left:100,top:200,width:800,height:500}),hero=new Element({left:80,top:250,width:400,height:350}),foe=new Element({left:550,top:250,width:350,height:360});
 const document={querySelector:s=>s==='#arena'?arena:s.startsWith('#hero-fighter')?hero:s.startsWith('#enemy-fighter')?foe:null,querySelectorAll:s=>arena.querySelectorAll(s),createElement:()=>new Element()};
 const context={document,console,matchMedia:()=>({matches:reduced}),setTimeout(fn,ms){const id=++nextTimer;timers.set(id,{fn,at:clock+ms});return id;},clearTimeout:id=>timers.delete(id)};
 vm.runInNewContext(readFileSync(new URL('../dist/vfx.mjs',import.meta.url),'utf8').replace(/^export /gm,'')+'\nglobalThis.fxAPI={battleEffect,clearEffects,initBattleVisuals};',context);
 const run={kit:'sword'};context.fxAPI.initBattleVisuals(run);
 return {arena,hero,foe,timers,animations,find:selector=>arena.querySelectorAll(selector),effect:event=>context.fxAPI.battleEffect(event,run),clear:()=>context.fxAPI.clearEffects(),advance(ms){const end=clock+ms;while(true){const entry=[...timers].filter(([,t])=>t.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!entry)break;const[id,t]=entry;clock=t.at;timers.delete(id);t.fn();}clock=end;}};
}
const enemy=(extra={})=>({id:1,t:2.2,type:'enemy',target:'hero',fx:'enemy-slash',value:12,blocked:0,...extra});

test('enemy attack travels from foe and hits the current hero torso, including movement before impact',()=>{
 const h=effectHarness();h.effect(enemy());const incoming=h.find('.fx-incoming')[0];
 assert.ok(parseFloat(incoming.values.get('--from-x'))>parseFloat(incoming.values.get('--to-x')));
 assert.equal(h.find('.fx-hit-label').length,0);
 h.hero.rect.left+=40;h.hero.rect.top+=10;h.advance(180);
 const impact=h.find('.fx-hero-impact')[0];
 assert.equal(parseFloat(impact.values.get('--impact-x')),27);
 assert.equal(parseFloat(impact.values.get('--impact-y')),37.9);
 const sprite=h.find('.fx-received')[0];assert.equal(sprite.values.get('--effect-x'),impact.values.get('--impact-x'));assert.equal(sprite.values.get('--effect-y'),impact.values.get('--impact-y'));
 assert.equal(h.find('.fx-hit-label')[0].textContent,'피격 −12');
 assert.equal(h.find('.fx-number').length,0);
});

test('full and partial shield absorption are distinct from HP damage and flurries do not overlap labels',()=>{
 const h=effectHarness();h.effect(enemy({value:0,blocked:14}));h.advance(180);
 assert.equal(h.find('.fx-hit-label')[0].textContent,'기혈 피해 없음 · 방어막 −14');
 assert.ok(h.find('.fx-hit-label')[0].className.includes('blocked'));assert.equal(h.find('.fx-hero-shield').length,1);
 h.clear();h.effect(enemy({id:2,t:5,fx:'enemy-flurry',value:4,blocked:6}));h.effect(enemy({id:3,t:5,fx:'enemy-flurry',value:7,blocked:0}));h.advance(180);
 assert.equal(h.find('.fx-hit-label').length,1);assert.equal(h.find('.fx-hit-label')[0].textContent,'피격 −11 · 방어막 −6');
 assert.ok(h.find('.fx-hit-label')[0].className.includes('hurt'));
});

test('poison ticks stay on the hero and effect cleanup cancels delayed attacks',()=>{
 const h=effectHarness();h.effect(enemy({fx:'poison',value:2.4}));h.advance(0);
 assert.equal(h.find('.fx-incoming').length,0);assert.equal(h.find('.fx-hit-label')[0].textContent,'독상 −3');
 h.clear();h.effect(enemy());h.clear();h.advance(3000);
 assert.equal(h.arena.children.length,0);assert.equal(h.timers.size,0);assert.ok(h.animations.every(a=>a.cancelled));
});

test('reduced motion keeps the damage explanation without a travelling effect or recoil',()=>{
 const h=effectHarness(true);h.effect(enemy());h.advance(180);
 assert.equal(h.find('.fx-incoming').length,0);assert.equal(h.animations.length,0);assert.equal(h.find('.fx-hit-label')[0].textContent,'피격 −12');
 h.advance(1600);assert.equal(h.arena.children.length,0);
});

test('enemy weapon and art artwork face the hero and approach from the attacking side',()=>{
 const radial=new Set(['thunder-cleave','cloud-step','vajra-shield','solar-flare']);
 for(const item of Object.values(ITEMS).filter(i=>['weapon','art'].includes(i.kind)&&i.damage)){
  const h=effectHarness();h.effect(enemy({fx:item.fx,tag:item.tag}));h.advance(180);
  const sprite=h.find('.fx-received')[0];assert.ok(sprite,item.id);
  const directed=sprite.className.split(' ').includes('fx-received-directed');
  assert.equal(directed,!radial.has(item.fx),`${item.name} uses the correct directed or radial effect`);
  if(directed){
   const index=Number(sprite.values.get('--fx-row'))*4+Number(sprite.values.get('--fx-col'));
   // Observed atlas directions: redcrescent (1) has its convex leading edge on
   // the LEFT; silverarc, spearhead, darts and palm have theirs on the RIGHT.
   const nativeFacing=index===1?-1:1,reflection=Number(sprite.values.get('--strike-facing'));
   assert.equal(nativeFacing*reflection,-1,`${item.name} artwork faces left`);
   assert.ok(parseFloat(sprite.values.get('--strike-entry-x'))>0,`${item.name} arrives from enemy side`);
   assert.ok(parseFloat(sprite.values.get('--strike-exit-x'))<0,`${item.name} follows through toward hero`);
   const tilt=parseFloat(sprite.values.get('--strike-angle'))*Math.PI/180;
   assert.ok(nativeFacing*reflection*Math.cos(tilt)<0,`${item.name} remains left-facing after slope adjustment`);
  }
  h.clear();
 }
});

test('incoming projectile orientation follows the pixel path on wide and tall arenas',()=>{
 for(const [tag,nativeFacing] of [['spear',1],['saber',-1]])for(const [width,height,heroY] of [[1100,320,280],[380,760,490]]){
  const h=effectHarness();h.arena.rect.width=width;h.arena.rect.height=height;h.hero.rect.top=heroY;
  h.effect(enemy({fx:tag,tag}));const incoming=h.find('.fx-incoming')[0];
  const dx=(parseFloat(incoming.values.get('--to-x'))-parseFloat(incoming.values.get('--from-x')))*width/100;
  const dy=(parseFloat(incoming.values.get('--to-y'))-parseFloat(incoming.values.get('--from-y')))*height/100;
  const angle=parseFloat(incoming.values.get('--flight-angle'))*Math.PI/180;
  assert.ok(Math.abs(Math.cos(angle)-dx/Math.hypot(dx,dy))<1e-10);
  assert.ok(Math.abs(Math.sin(angle)-dy/Math.hypot(dx,dy))<1e-10);
  h.advance(180);const received=h.find('.fx-received-directed')[0];
  const facing=nativeFacing*Number(received.values.get('--strike-facing')),tilt=parseFloat(received.values.get('--strike-angle'))*Math.PI/180;
  assert.ok(Math.abs(facing*Math.cos(tilt)-Math.cos(angle))<1e-10);
  assert.ok(Math.abs(facing*Math.sin(tilt)-Math.sin(angle))<1e-10);
  h.clear();
 }
});

test('left-facing red crescent keeps its native edge while right-facing silver arc is mirrored',()=>{
 for(const reduced of [false,true]){
  const h=effectHarness(reduced);h.effect(enemy({fx:'saber',tag:'saber'}));h.advance(180);
  const crescent=h.find('.fx-received-directed')[0];
  assert.equal(Number(crescent.values.get('--fx-col')),1);assert.equal(Number(crescent.values.get('--fx-row')),0);
  assert.equal(Number(crescent.values.get('--strike-facing')),1,'enemy saber must preserve the native left-facing crescent');
  assert.ok(parseFloat(crescent.values.get('--strike-entry-x'))>0,'preserving artwork must not reverse the approach');
  const impact=h.find('.fx-hero-impact')[0];assert.equal(crescent.values.get('--effect-x'),impact.values.get('--impact-x'));h.clear();
  h.effect(enemy({fx:'sword',tag:'sword'}));h.advance(180);
  const arc=h.find('.fx-received-directed')[0];assert.equal(Number(arc.values.get('--fx-col')),0);
  assert.equal(Number(arc.values.get('--strike-facing')),-1,'enemy sword must reflect the native right-facing silver arc');h.clear();
 }
});

test('shield blocks, status ticks and self healing never inherit the attack mirroring',()=>{
 for(const e of [enemy({fx:'spear',tag:'spear',value:0,blocked:20}),enemy({fx:'poison'}),enemy({fx:'bleed'}),enemy({fx:'burn'})]){
  const h=effectHarness();h.effect(e);h.advance(180);
  assert.equal(h.find('.fx-received-directed').length,0);assert.equal(h.find('.fx-received')[0].values.has('--strike-facing'),false);h.clear();
 }
 const h=effectHarness();h.effect({id:3,type:'heal',actor:'enemy',target:'enemy',value:10,fx:'regen'});
 assert.equal(h.find('.fx-incoming').length,0);assert.equal(h.find('.fx-received-directed').length,0);
 assert.equal(h.find('.fx-aura')[0].values.get('--effect-x'),'78.125%');
 assert.ok(Math.abs(parseFloat(h.find('.fx-aura')[0].values.get('--effect-y'))-38.8)<1e-9);
});

test('enemy mirroring does not leak into player attacks, including simultaneous attacks',()=>{
 const h=effectHarness();h.effect(enemy({fx:'spear',tag:'spear'}));
 h.effect({id:2,type:'attack',actor:'hero',target:'enemy',fx:'spear',tag:'spear',value:15});h.advance(180);
 const outgoing=h.find('.fx-thrust')[0],received=h.find('.fx-received-directed')[0];
 assert.ok(outgoing);assert.ok(received);assert.equal(outgoing.values.has('--strike-facing'),false);
 assert.equal(Number(received.values.get('--strike-facing')),-1);
});

test('reduced-motion attacks retain facing without approach animation and CSS centres before mirroring',()=>{
 const h=effectHarness(true);h.effect(enemy({fx:'dart',tag:'dart'}));h.advance(180);
 assert.equal(Number(h.find('.fx-received-directed')[0].values.get('--strike-facing')),-1);
 assert.equal(h.find('.fx-incoming').length,0);
 const css=readFileSync(new URL('../dist/vfx.css',import.meta.url),'utf8');
 assert.match(css,/\.fx-received-directed\{animation-name:fx-received-directed\}/);
 assert.match(css,/@keyframes fx-received-directed\{[^\n]+18%\{opacity:1;transform:translate\(-50%,-50%\) rotate\(var\(--strike-angle\)\) scaleX\(var\(--strike-facing\)\)/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)\{\.fx-received-directed\{transform:translate\(-50%,-50%\) rotate\(var\(--strike-angle\)\) scaleX\(var\(--strike-facing\)\)!important\}\}/);
 assert.match(css,/\.fx-incoming:before\{[^}]*right:7px[^}]*linear-gradient\(90deg,transparent,var\(--fx-color/);
});

test('outgoing impact follows the enemy torso after its position changes',()=>{
 const h=effectHarness();h.effect({id:2,type:'attack',actor:'hero',target:'enemy',tag:'saber',fx:'saber',value:17});
 h.foe.rect.left+=30;h.foe.rect.top-=20;h.advance(100);
 const impact=h.find('.fx-impact')[0];assert.equal(impact.values.get('--impact-x'),'81.875%');assert.equal(impact.values.get('--impact-y'),'34.8%');
 for(const spark of h.find('.fx-spark')){assert.equal(spark.values.get('--spark-x'),impact.values.get('--impact-x'));assert.equal(spark.values.get('--spark-y'),impact.values.get('--impact-y'));}
 h.clear();h.effect({id:3,type:'shield',actor:'enemy',target:'enemy',value:15});
 assert.equal(h.find('.fx-ring')[0].values.get('--ring-x'),'81.875%');assert.equal(h.find('.fx-ring')[0].values.get('--ring-y'),'34.8%');
 assert.equal(h.find('.fx-number')[0].values.get('--number-x'),'81.875%');
});

test('poison bottles and bombs keep their own appearance on both sides even when fully blocked',()=>{
 for(const actor of ['hero','enemy'])for(const [fx,tile] of [['venom-rain',6],['thunder-cleave',10]])for(const blocked of [0,36]){
  const h=effectHarness(),target=actor==='hero'?'enemy':'hero';
  h.effect({id:1,t:0,type:'consume',actor,target,fx,tag:'any',value:blocked?0:8,blocked});h.advance(180);
  const atlas=h.find('.fx-technique').map(node=>Number(node.values.get('--fx-row'))*4+Number(node.values.get('--fx-col')));
  assert.ok(atlas.includes(tile),`${actor} ${fx} needs its actual consumable image`);
  if(tile===6){assert.ok(!atlas.includes(10),'poison bottle is not fire');assert.equal(h.find('.fx-flame').length,0);}
  if(actor==='enemy'){
   assert.equal(h.find('.fx-received-directed').length,0,'bottle bursts are radial');
   if(tile===6)assert.equal(h.find('.fx-incoming')[0].values.get('--fx-color'),'#b7df87');
   if(blocked)assert.equal(h.find('.fx-hit-label')[0].textContent,'기혈 피해 없음 · 방어막 −36');
  }
  h.clear();
 }
});

test('retaliation on the hero reports damage and absorbed shield without inventing a weapon flight',()=>{
 const h=effectHarness();h.effect({id:7,t:2,type:'thorns',actor:'enemy',target:'hero',fx:'thorns',value:4,blocked:6});h.advance(0);
 assert.equal(h.find('.fx-incoming').length,0);assert.equal(h.find('.fx-received-directed').length,0);
 assert.equal(h.find('.fx-hit-label')[0].textContent,'반격 −4 · 방어막 −6');assert.equal(h.find('.fx-hero-shield').length,1);
 h.clear();h.effect({id:8,t:3,type:'thorns',actor:'enemy',target:'hero',fx:'thorns',value:0,blocked:9});h.advance(0);
 assert.equal(h.find('.fx-hit-label')[0].textContent,'기혈 피해 없음 · 방어막 −9');
});

test('late poison clouds, petals and stone debris remain until their fade is complete',()=>{
 const cloud=effectHarness();cloud.effect({type:'skill',actor:'hero',target:'enemy',fx:'venom-rain',tag:'dart',value:3});
 const poison=cloud.find('.fx-cloud')[0];cloud.advance(1519);assert.ok(cloud.arena.children.includes(poison),'220ms delay + 1300ms poison fade');cloud.advance(110);assert.ok(!cloud.arena.children.includes(poison));cloud.clear();
 const petals=effectHarness();petals.effect({type:'skill',actor:'hero',target:'enemy',fx:'plum-guard',tag:'sword',value:8});
 const lastPetal=petals.find('.fx-petal').at(-1);petals.advance(1350);assert.ok(petals.arena.children.includes(lastPetal),'last petal must complete its delayed fade');petals.advance(100);assert.ok(!petals.arena.children.includes(lastPetal));petals.clear();
 const stone=effectHarness();stone.effect({type:'skill',actor:'hero',target:'enemy',fx:'stone-fist',tag:'fist',value:7});
 const lastChip=stone.find('.fx-stone-chip').at(-1);stone.advance(1140);assert.ok(stone.arena.children.includes(lastChip));stone.advance(100);assert.ok(!stone.arena.children.includes(lastChip));stone.clear();
 const aura=effectHarness();aura.effect({type:'heal',actor:'hero',target:'hero',fx:'regen',value:3});const glow=aura.find('.fx-aura')[0];assert.equal(glow.values.get('--aura-time'),'640ms');aura.advance(699);assert.ok(aura.arena.children.includes(glow));aura.advance(1);assert.ok(!aura.arena.children.includes(glow));
});
