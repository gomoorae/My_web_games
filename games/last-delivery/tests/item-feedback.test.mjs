import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';

// This checks source/event routing and battle-clock readiness, not browser paint.
function inventoryFxHarness(){
 let now=0,next=0;const timers=new Map();
 class Element{
  constructor(key){this.className='';this.dataset=key?{liveItem:key}:{};this.textContent='';this.children=[];this.parent=null;this.values=new Map();this.style={setProperty:(k,v)=>this.values.set(k,v)};this.classList={toggle(){}};}
  appendChild(n){n.parent=this;this.children.push(n);return n;}
  remove(){if(this.parent)this.parent.children=this.parent.children.filter(n=>n!==this);}
  querySelectorAll(s){return this.children.flatMap(n=>[...(n.className.split(' ').includes(s.slice(1))?[n]:[]),...n.querySelectorAll(s)]);}
  setAttribute(){}
  getBoundingClientRect(){return this.rect||{left:100,top:100,width:600,height:400};}
  animate(){return {finished:Promise.resolve(),cancel(){}};}
 }
 const arena=new Element(),hero=new Element(),enemy=new Element(),items=new Map(['hero:w','hero:w2','hero:a','hero:shield','hero:support','hero:unused','hero:medicine','enemy:w','enemy:w2','enemy:a','enemy:shield','enemy:medicine'].map(k=>[k,new Element(k)]));
 hero.rect={left:160,top:200,width:120,height:200};enemy.rect={left:490,top:180,width:150,height:240};
 const document={createElement:()=>new Element(),querySelector:s=>s==='#arena'?arena:s.startsWith('#hero-fighter')?hero:s.startsWith('#enemy-fighter')?enemy:null,querySelectorAll:s=>s==='[data-live-item]'?[...items.values()]:arena.querySelectorAll(s)};
 const context={document,matchMedia:()=>({matches:true}),setTimeout(fn,ms){const id=++next;timers.set(id,{fn,at:now+ms});return id;},clearTimeout:id=>timers.delete(id)};
 vm.runInNewContext(readFileSync(new URL('../dist/vfx.mjs',import.meta.url),'utf8').replace(/^export /gm,'')+'\nglobalThis.api={battleEffect,updateInventoryActivity,clearEffects};',context);
 return {arena,items,timers,effect:e=>context.api.battleEffect(e,{kit:'sword'}),update:(b,paused)=>context.api.updateInventoryActivity(b,paused),clear:()=>context.api.clearEffects(),advance(ms){const end=now+ms;while(true){const entry=[...timers].filter(([,t])=>t.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!entry)break;const[id,t]=entry;now=t.at;timers.delete(id);t.fn();}now=end;}};
}
const use=(extra={})=>({id:1,t:1,type:'attack',effect:'attack',actor:'hero',sourceUid:'w',sourceUids:['w','support'],target:'enemy',value:8,fx:'sword',tag:'sword',...extra});

test('actual action sources flash only the owning inventory and distinguish contributors',()=>{
 const h=inventoryFxHarness();h.effect(use());
 assert.equal(h.items.get('hero:w').dataset.itemUse,'attack');assert.equal(h.items.get('hero:w').querySelectorAll('.item-use-label')[0].textContent,'공격');
 assert.equal(h.items.get('hero:support').dataset.itemContribution,'true');assert.equal(h.items.get('hero:support').querySelectorAll('.item-use-label')[0].textContent,'효과 보탬');
 assert.equal(h.items.get('hero:unused').dataset.itemUse,undefined);assert.equal(h.items.get('enemy:w').dataset.itemUse,undefined);
 h.effect(use({id:2,type:'enemy',effect:'skill',actor:'enemy',sourceUid:'a',sourceUids:['a'],target:'hero'}));
 assert.equal(h.items.get('enemy:a').dataset.itemUse,'attack');assert.equal(h.items.get('enemy:a').querySelectorAll('.item-use-label')[0].textContent,'무공 발동');assert.equal(h.items.get('hero:a').dataset.itemUse,undefined);
 h.advance(1000);assert.equal(h.items.get('hero:w').dataset.itemUse,undefined);assert.equal(h.items.get('enemy:a').querySelectorAll('.item-use-label').length,0);
});

test('shield absorption flashes its defender item while enemy recovery stays on the enemy',()=>{
 const h=inventoryFxHarness();h.effect(use({type:'block',effect:'shield',actor:'hero',target:'hero',sourceUid:'shield',sourceUids:['shield'],absorption:true,value:9}));
 assert.equal(h.items.get('hero:shield').dataset.itemUse,'guard');assert.equal(h.items.get('hero:shield').querySelectorAll('.item-use-label')[0].textContent,'방어');
 h.effect(use({type:'heal',effect:'heal',actor:'enemy',target:'enemy',sourceUid:'medicine',sourceUids:['medicine'],value:12,fx:'heal'}));
 assert.equal(h.items.get('enemy:medicine').dataset.itemUse,'heal');assert.equal(h.items.get('hero:medicine').dataset.itemUse,undefined);
 const number=h.arena.querySelectorAll('.fx-number').at(-1);assert.equal(number.values.get('--number-x'),'77.5%');assert.equal(number.textContent,'+12');
});

test('readiness follows battle cooldown and energy, including pause and spent items',()=>{
 const h=inventoryFxHarness(),b={t:4,weapon:{uid:'w',interval:2},nextAttack:5,arts:[{uid:'a',cooldown:6,cost:3}],skillReady:[3],bonuses:{},energy:1,used:['medicine'],rival:{weapon:{uid:'w',interval:3},nextAttack:4,arts:[{uid:'a',cooldown:8,cost:2}],skillReady:[6],bonuses:{},energy:5,used:[]}};
 const before=JSON.stringify(b);h.update(b,false);
 assert.equal(h.items.get('hero:w').querySelectorAll('.item-readiness')[0].textContent,'1.0초');assert.equal(h.items.get('hero:w').values.get('--item-ready'),'0.5');
 assert.equal(h.items.get('hero:a').querySelectorAll('.item-readiness')[0].textContent,'내공 대기');assert.equal(h.items.get('hero:a').dataset.itemReady,'false');assert.equal(h.items.get('enemy:w').querySelectorAll('.item-readiness')[0].textContent,'준비');
 assert.equal(h.items.get('hero:medicine').dataset.itemSpent,'true');assert.equal(h.items.get('hero:medicine').querySelectorAll('.item-readiness')[0].textContent,'소모됨');
 h.update(b,true);assert.equal(h.items.get('enemy:a').querySelectorAll('.item-readiness')[0].textContent,'정지 · 2.0초');assert.equal(JSON.stringify(b),before);
});

test('silent ticks do not flash items and cleanup cancels pulses without late reappearance',()=>{
 const h=inventoryFxHarness();h.effect(use({silent:true}));assert.equal(h.items.get('hero:w').dataset.itemUse,undefined);
 h.effect(use());h.effect(use({effect:'consume',type:'consume',sourceUid:'medicine',sourceUids:['medicine'],target:'hero'}));
 assert.equal(h.items.get('hero:medicine').dataset.itemUse,'consume');h.clear();h.advance(4000);
 for(const item of h.items.values()){assert.equal(item.dataset.itemUse,undefined);assert.equal(item.querySelectorAll('.item-use-label').length,0);}
 assert.equal(h.timers.size,0);
});

test('actual armor mitigation still highlights its item when arena feedback is silent',()=>{
 const h=inventoryFxHarness();h.effect(use({type:'armor',effect:'armor',sourceUid:'shield',sourceUids:['shield'],target:'hero',value:2,silent:true}));
 assert.equal(h.items.get('hero:shield').dataset.itemUse,'guard');assert.equal(h.items.get('hero:shield').querySelectorAll('.item-use-label')[0].textContent,'피해 경감');assert.equal(h.arena.children.length,0);
});

test('enemy offensive consumables use hero hit feedback and mixed damage over time is labelled accurately',()=>{
 const h=inventoryFxHarness();h.effect(use({type:'consume',effect:'consume',actor:'enemy',sourceUid:'medicine',sourceUids:['medicine'],target:'hero',fx:'thunder-cleave',value:20}));h.advance(180);
 assert.equal(h.arena.querySelectorAll('.fx-hit-label')[0].textContent,'피격 −20');assert.equal(h.items.get('enemy:medicine').dataset.itemUse,'consume');
 h.clear();h.effect(use({type:'enemy',effect:'dot',actor:'enemy',target:'hero',t:5,fx:'poison',value:2}));h.effect(use({type:'enemy',effect:'dot',actor:'enemy',target:'hero',t:5,fx:'bleed',value:3}));h.advance(0);
 assert.equal(h.arena.querySelectorAll('.fx-hit-label')[0].textContent,'지속 피해 −5');assert.equal(h.items.get('enemy:w').dataset.itemUse,undefined);
});

test('each art readiness uses its own adjacent-support cooldown rather than a shared value',()=>{
 const h=inventoryFxHarness(),b={t:4,weapon:{uid:'w',interval:2},nextAttack:5,arts:[{uid:'a',cooldown:10,cost:3,effectiveBonuses:{cooldown:.2}}],skillReady:[6],bonuses:{cooldown:0},energy:5,used:[],rival:{weapon:{uid:'w',interval:3},nextAttack:4,arts:[{uid:'a',cooldown:10,cost:2,effectiveBonuses:{cooldown:0}}],skillReady:[6],bonuses:{cooldown:.2},energy:5,used:[]}};
 h.update(b);
 assert.equal(h.items.get('hero:a').values.get('--item-ready'),'0.75');
 assert.equal(h.items.get('enemy:a').values.get('--item-ready'),'0.8');
});

test('every equipped weapon has its own readiness and only the firing weapon flashes',()=>{
 const h=inventoryFxHarness(),weapons=[{uid:'w',interval:2},{uid:'w2',interval:4,effectiveBonuses:{speed:.25}}];
 const b={t:4,weapons,weapon:weapons[0],weaponReady:[999,6],nextAttack:5,arts:[],skillReady:[],bonuses:{},energy:2,used:[],rival:{weapons:[{uid:'w',interval:3},{uid:'w2',interval:2}],weapon:{uid:'w',interval:3},weaponReady:[999,3],nextAttack:4,arts:[],skillReady:[],bonuses:{},energy:2,used:[]}};
 const before=JSON.stringify(b);h.update(b);
 assert.equal(h.items.get('hero:w').querySelectorAll('.item-readiness')[0].textContent,'1.0초');
 assert.equal(h.items.get('hero:w2').querySelectorAll('.item-readiness')[0].textContent,'2.0초');
 assert.equal(h.items.get('hero:w2').values.get('--item-ready'),'0.375');
 assert.equal(h.items.get('enemy:w2').querySelectorAll('.item-readiness')[0].textContent,'준비');
 h.effect(use({sourceUid:'w2',sourceUids:['w2'],tag:'spear',fx:'weapon-spear'}));
 assert.equal(h.items.get('hero:w2').dataset.itemUse,'attack');assert.equal(h.items.get('hero:w').dataset.itemUse,undefined);assert.equal(h.items.get('enemy:w2').dataset.itemUse,undefined);
 h.effect(use({id:2,actor:'enemy',type:'enemy',sourceUid:'w2',sourceUids:['w2'],target:'hero',tag:'dart',fx:'weapon-dart'}));
 assert.equal(h.items.get('enemy:w2').dataset.itemUse,'attack');assert.equal(h.items.get('enemy:w').dataset.itemUse,undefined);
 h.update(b,true);assert.equal(h.items.get('hero:w2').querySelectorAll('.item-readiness')[0].textContent,'정지 · 2.0초');assert.equal(JSON.stringify(b),before);
});
