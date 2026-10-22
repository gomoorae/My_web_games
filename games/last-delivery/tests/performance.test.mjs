import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS,KITS} from '../dist/data.mjs';
import {createRun,addItem,moveItem,autoPlace,canPlace,adjacent,buildStats,createBattle,tickBattle} from '../dist/engine.mjs';
import {buildLoadoutSummary,getItemPerformance,compareItemLevels} from '../dist/performance.mjs';

const metric=(summary,key)=>summary.metrics.find(m=>m.key===key)?.value;
const close=(actual,expected,message='')=>assert.ok(Math.abs(actual-expected)<1e-8,`${message}: ${actual} != ${expected}`);
function emptyLoadout(kit='sword'){
 const r=createRun(kit,42);r.items=[];r.cols=r.rows=8;r.phase='prepare';return r;
}
function placeBeside(r,item,other){
 for(const rot of [0,1,2,3])for(let y=0;y<r.rows;y++)for(let x=0;x<r.cols;x++)if(canPlace(r,item.uid,x,y,rot)&&adjacent({...item,x,y,rot},other))return moveItem(r,item.uid,x,y,rot);
 return false;
}
function neutralTarget(b){
 b.enemyHp=b.enemyMaxHp=b.rival.hp=b.rival.maxHp=10000;b.enemyShield=b.rival.shield=0;b.rival.shieldPools=[];
 b.rival.bonuses.armor=b.rival.bonuses.dodge=b.rival.bonuses.thorns=0;b.rival.nextAttack=999;b.rival.arts=[];b.rival.skillReady=[];b.rival.medicines=[];
 return b;
}

test('refinement preview shows exact additive weapon gains and leaves its arts unchanged',()=>{
 const r=createRun('sword',3),s=buildStats(r),before=structuredClone(r),preview=compareItemLevels(r,s.weapon.uid,0,1);
 const damage=preview.rows.find(m=>m.key==='damage');close(damage.before,10);close(damage.after,12.4);close(damage.delta,2.4);
 assert.equal(preview.rows.find(m=>m.key==='dps').before,s.baseDps);assert.deepEqual(r,before);
 const artBefore=metric(getItemPerformance(r,s.arts[0].uid),'damage');s.weapon.level=1;
 close(metric(getItemPerformance(r,s.weapon.uid),'damage'),12.4);close(metric(getItemPerformance(r,s.arts[0].uid),'damage'),artBefore);
 const again=compareItemLevels(r,s.weapon.uid,0,1);assert.deepEqual(again,preview);
 const total=compareItemLevels(r,s.weapon.uid,0,3);close(total.rows.find(m=>m.key==='damage').after,17.2);
 assert.deepEqual(compareItemLevels(r,s.weapon.uid,3,3).rows,[]);assert.equal(compareItemLevels(r,'missing',0,1),null);
});

test('summary follows real contact, storage and missing-weapon changes without mutating the run',()=>{
 const r=createRun('sword',1),w=buildStats(r).weapon,stone=r.items.find(i=>i.type==='stone'),armor=addItem(r,'armor');assert.ok(autoPlace(r,armor.uid));
 const before=structuredClone(r),summary=buildLoadoutSummary(r);assert.deepEqual(r,before);assert.equal(summary.valid,true);
 close(metric(summary.weapons[0],'damage'),10);close(metric(summary,'weaponCount'),1);close(metric(summary,'armor'),2);close(metric(summary,'shield'),26);close(metric(summary,'energyRegen'),1.25);close(metric(summary,'maxEnergy'),8);
 assert.equal(metric(summary,'dps'),buildStats(r).baseDps);
 moveItem(r,stone.uid,null,null);moveItem(r,armor.uid,null,null);
 close(metric(buildLoadoutSummary(r).weapons[0],'damage'),8);close(metric(buildLoadoutSummary(r),'armor'),0);close(metric(buildLoadoutSummary(r),'shield'),0);
 assert.equal(getItemPerformance(r,armor.uid).active,false);assert.match(getItemPerformance(r,armor.uid).context,/보관 중/);
 close(metric(getItemPerformance(r,armor.uid),'armor'),2);
 moveItem(r,w.uid,null,null);const missing=buildLoadoutSummary(r);assert.equal(missing.valid,false);assert.ok(missing.errors.length);assert.equal(missing.weapon,null);assert.deepEqual(missing.arts,[]);close(metric(missing,'weaponCount'),0);close(metric(missing,'dps'),0);
});

test('every active refined weapon matches engine noncritical damage and attack interval',()=>{
 for(const d of Object.values(ITEMS).filter(d=>d.kind==='weapon')){
  const r=emptyLoadout(d.tag),w=addItem(r,d.id);w.level=2;assert.ok(moveItem(r,w.uid,3,1));const p=getItemPerformance(r,w.uid),b=neutralTarget(createBattle(r));
  // Remove random crit outcomes only; the pre-crit damage formula is untouched.
  b.weapon.crit=0;b.bonuses.crit=0;
  while(b.attacks===0)tickBattle(b);
  const hit=b.events.find(e=>e.type==='attack');close(hit.value,metric(p,'damage')*(d.hits||1),d.id);
  close(b.nextAttack-b.t,metric(p,'interval'),d.id);assert.equal(metric(p,'dps'),buildStats(r).baseDps,d.id);
 }
});

test('every refined active art matches engine damage, shielding, healing and cooldown',()=>{
 for(const d of Object.values(ITEMS).filter(d=>d.kind==='art')){
  const kit=d.tag==='any'?'sword':d.tag,r=emptyLoadout(kit),w=addItem(r,KITS[kit].weapon),art=addItem(r,d.id);assert.ok(moveItem(r,w.uid,3,1));assert.ok(placeBeside(r,art,w));art.level=2;
  for(const type of ['innerbalanced','herbcase'])assert.ok(autoPlace(r,addItem(r,type).uid));
  const p=getItemPerformance(r,art.uid),b=neutralTarget(createBattle(r));b.nextAttack=999;b.hp=30;b.energy=b.maxEnergy=20;
  while(b.casts===0)tickBattle(b);
  const hit=b.events.find(e=>e.type==='skill'&&e.sourceUid===art.uid);assert.ok(hit,d.id);close(hit.value,metric(p,'damage')*(d.hits||1),d.id);
  close(b.skillReady[0]-b.t,metric(p,'cooldown'),d.id);
  if(d.shield)close(b.events.find(e=>e.type==='shield'&&e.sourceUid===art.uid).value,metric(p,'shield'),d.id);
  if(d.heal)close(b.events.find(e=>e.type==='heal'&&e.sourceUid===art.uid).value,metric(p,'heal'),d.id);
  const preview=compareItemLevels(r,art.uid,1,2);assert.ok(preview.rows.some(m=>m.key==='damage'));assert.equal(preview.rows.some(m=>m.key==='cooldown'||m.key==='cost'),false,d.id);
 }
});

test('inactive and stored items show refined standalone values without borrowing bag bonuses',()=>{
 const r=createRun('sword',1),wrong=addItem(r,'fistheal');wrong.level=1;assert.ok(autoPlace(r,wrong.uid));
 const inner=addItem(r,'inneryang');assert.ok(autoPlace(r,inner.uid));const inactive=getItemPerformance(r,wrong.uid);assert.equal(inactive.active,false);assert.match(inactive.context,/비활성/);close(metric(inactive,'damage'),18*1.3);close(metric(inactive,'heal'),15*1.3);
 moveItem(r,wrong.uid,null,null);const stored=getItemPerformance(r,wrong.uid);assert.equal(stored.active,false);assert.match(stored.context,/보관 중/);assert.deepEqual(stored.metrics,inactive.metrics);
 const spare=addItem(r,'moonblade');spare.level=2;close(metric(getItemPerformance(r,spare.uid),'damage'),7*1.6);close(metric(getItemPerformance(r,spare.uid),'crit'),15);
 assert.equal(getItemPerformance(r,'missing'),null);
});

test('weapon crit does not leak into arts; effective lifesteal includes healing bonuses',()=>{
 const r=emptyLoadout(),w=addItem(r,'moonblade'),a=addItem(r,'swordbook');assert.ok(moveItem(r,w.uid,3,1));assert.ok(placeBeside(r,a,w));assert.ok(autoPlace(r,addItem(r,'herbcase').uid));assert.ok(autoPlace(r,addItem(r,'innerblood').uid));
 close(metric(getItemPerformance(r,w.uid),'crit'),15);close(metric(getItemPerformance(r,a.uid),'crit'),0);
 close(metric(getItemPerformance(r,w.uid),'lifesteal'),13.5);close(metric(getItemPerformance(r,a.uid),'lifesteal'),13.5);close(metric(buildLoadoutSummary(r),'lifesteal'),13.5);
 close(metric(getItemPerformance(r,w.uid),'bleed'),1);assert.equal(metric(getItemPerformance(r,a.uid),'bleed'),undefined);
});

test('summary and item timings apply speed, cooldown and dodge caps from the engine',()=>{
 const r=emptyLoadout(),w=addItem(r,'sword');assert.ok(moveItem(r,w.uid,3,1));
 for(const [x,y]of [[2,0],[2,2],[4,0],[4,2]]){const wrap=addItem(r,'silkwrap');assert.ok(moveItem(r,wrap.uid,x,y));}
 const wind=addItem(r,'innerwind');assert.ok(autoPlace(r,wind.uid));
 assert.ok(buildStats(r).itemBonuses[w.uid].speed>.8);close(metric(buildLoadoutSummary(r).weapons[0],'interval'),2.1/1.8);
 for(let n=0;n<5;n++)assert.ok(autoPlace(r,addItem(r,'bambooamulet').uid));
 assert.ok(buildStats(r).bonuses.dodge>.5);close(metric(buildLoadoutSummary(r),'dodge'),50);
 const c=emptyLoadout(),cw=addItem(c,'sword'),art=addItem(c,'swordbook');assert.ok(moveItem(c,cw.uid,3,3));assert.ok(placeBeside(c,art,cw));
 for(let n=0;n<3;n++){const bell=addItem(c,'jinglingbell');bell.level=3;assert.ok(placeBeside(c,bell,art));}
 assert.ok(buildStats(c).itemBonuses[art.uid].cooldown>.5);close(metric(getItemPerformance(c,art.uid),'cooldown'),2.5);assert.equal(metric(buildLoadoutSummary(c),'cooldownReduction'),undefined);
});

test('art-target supports improve each touching art without affecting the third active art',()=>{
 for(const type of ['prayerbeads','jinglingbell','inkstone']){
  const r=emptyLoadout(),w=addItem(r,'sword');assert.ok(moveItem(r,w.uid,3,2));const arts=[];
  for(const [x,y,rot]of [[4,2,1],[4,4,1],[1,4,0]]){const a=addItem(r,'swordbook');assert.ok(moveItem(r,a.uid,x,y,rot));arts.push(a);}
  const support=addItem(r,type),position=type==='jinglingbell'?[5,2,3]:[5,3,1];assert.ok(moveItem(r,support.uid,...position));
  assert.deepEqual(arts.map(a=>adjacent(support,a)),[true,true,false]);assert.equal(buildStats(r).arts.length,3);
  const summary=buildLoadoutSummary(r);assert.equal(summary.arts.length,3);
  for(const [n,a]of arts.entries()){
   const p=getItemPerformance(r,a.uid),listed=summary.arts.find(i=>i.uid===a.uid);
   close(metric(p,'damage'),6*(type==='prayerbeads'&&n<2?1.2:1));close(metric(p,'cooldown'),5*(type==='jinglingbell'&&n<2?.85:1));assert.deepEqual(listed,p);
   if(type==='prayerbeads')close(compareItemLevels(r,a.uid,0,1).rows.find(m=>m.key==='damage').after,6*(n<2?1.2:1)*1.3);
  }
  close(metric(summary,'energyRegen'),type==='inkstone'?2.05:1.25);close(metric(summary.weapons[0],'damage'),8);assert.equal(metric(summary,'cooldownReduction'),undefined);
  const supportPerformance=getItemPerformance(r,support.uid);assert.equal(supportPerformance.targetCount,2);assert.match(supportPerformance.context,/무공 2개 연결/);
  if(type==='inkstone'){close(metric(supportPerformance,'energyRegen'),.8);assert.match(supportPerformance.metrics.find(m=>m.key==='energyRegen').description,/무공당 \+0\.4\/초, 현재 2개/);close(compareItemLevels(r,support.uid,0,1).rows.find(m=>m.key==='energyRegen').after,.96);}
  moveItem(r,support.uid,null,null);const stowed=buildLoadoutSummary(r);close(metric(stowed,'energyRegen'),1.25);
  if(type==='inkstone')close(metric(getItemPerformance(r,support.uid),'energyRegen'),.4);
  for(const a of stowed.arts){close(metric(a,'damage'),6);close(metric(a,'cooldown'),5);}
 }
});

test('support refinement values are contributions; consumables keep fixed damage and enhanced healing',()=>{
 const r=emptyLoadout(),w=addItem(r,'sword');assert.ok(moveItem(r,w.uid,3,1));const armor=addItem(r,'armor');armor.level=2;assert.ok(autoPlace(r,armor.uid));assert.ok(autoPlace(r,addItem(r,'herbcase').uid));
 const p=getItemPerformance(r,armor.uid);close(metric(p,'armor'),2.8);close(metric(p,'shield'),36.4);close(metric(buildLoadoutSummary(r),'armor'),2.8);
 const preview=compareItemLevels(r,armor.uid,1,2);close(preview.rows.find(m=>m.key==='armor').delta,.4);close(preview.rows.find(m=>m.key==='shield').delta,5.2);
 const explosive=addItem(r,'explosive'),medicine=addItem(r,'medicine'),pill=addItem(r,'barrierpill');for(const i of [explosive,medicine,pill])assert.ok(autoPlace(r,i.uid));
 close(metric(getItemPerformance(r,explosive.uid),'damage'),36);close(metric(getItemPerformance(r,medicine.uid),'heal'),47.25);close(metric(getItemPerformance(r,pill.uid),'shield'),35);
 close(metric(buildLoadoutSummary(r),'shield'),36.4);assert.match(buildLoadoutSummary(r).metrics.find(m=>m.key==='shield').description,/소모품.*별도/);
 assert.deepEqual(compareItemLevels(r,medicine.uid,0,3).rows,[]);
});

function mixedPerformanceLoadout(){
 const run=emptyLoadout(),place=(type,x,y,rot=0)=>{const item=addItem(run,type);assert.ok(moveItem(run,item.uid,x,y,rot),type);return item;};
 const sword=place('sword',3,1),spear=place('spear',6,1),stone=place('stone',1,1),swordArt=place('swordbook',4,1,1),spearArt=place('spearbook',6,5),balanced=place('innerbalanced',0,4),wind=place('innerwind',2,5);
 return {run,sword,spear,stone,swordArt,spearArt,balanced,wind};
}
test('multiple weapons have individual statistics while all inner bonuses and unrounded DPS are combined',()=>{
 const {run,sword,spear,swordArt,spearArt}=mixedPerformanceLoadout(),summary=buildLoadoutSummary(run);
 assert.equal(summary.valid,true);assert.equal(summary.weapons.length,2);assert.equal(summary.inners.length,2);assert.equal(summary.arts.length,2);
 close(metric(summary,'weaponCount'),2);close(metric(summary,'innerCount'),2);close(metric(summary,'energyRegen'),1.75);
 const sw=getItemPerformance(run,sword.uid),sp=getItemPerformance(run,spear.uid);
 close(metric(sw,'damage'),10);close(metric(sp,'damage'),15);close(metric(sw,'interval'),2.1/1.25);close(metric(sp,'interval'),2.8/1.25);
 const raw=10*1.25/2.1+15*1.25/2.8;close(metric(summary,'dps'),+raw.toFixed(1));
 assert.notEqual(metric(summary,'dps'),metric(sw,'dps')+metric(sp,'dps'),'aggregate must round after summing raw weapon rates');
 close(metric(getItemPerformance(run,swordArt.uid),'damage'),6*1.35);close(metric(getItemPerformance(run,spearArt.uid),'damage'),7*1.1);
 assert.deepEqual(getItemPerformance(run,swordArt.uid).connectedWeapons.map(i=>i.uid),[sword.uid]);assert.deepEqual(getItemPerformance(run,spearArt.uid).connectedWeapons.map(i=>i.uid),[spear.uid]);
 for(const key of ['damage','interval','crit','critMultiplier','pierce'])assert.equal(metric(summary,key),undefined,`${key} belongs to individual weapons`);
});
test('refining one of several weapons changes only its own performance and the combined rate',()=>{
 const {run,sword,spear,swordArt}=mixedPerformanceLoadout(),before=structuredClone(run),other=getItemPerformance(run,spear.uid),art=getItemPerformance(run,swordArt.uid),preview=compareItemLevels(run,sword.uid,0,1);
 close(preview.rows.find(m=>m.key==='damage').delta,2.4);assert.deepEqual(run,before);
 sword.level=1;const upgraded=getItemPerformance(run,sword.uid),summary=buildLoadoutSummary(run);
 close(metric(upgraded,'damage'),12.4);assert.deepEqual(getItemPerformance(run,spear.uid),other);assert.deepEqual(getItemPerformance(run,swordArt.uid).metrics,art.metrics);
 close(metric(summary,'dps'),+(12.4*1.25/2.1+15*1.25/2.8).toFixed(1));
 moveItem(run,sword.uid,null,null);const stored=buildLoadoutSummary(run);assert.equal(stored.weapons.length,1);assert.equal(stored.arts.length,1);close(metric(stored,'dps'),metric(other,'dps'));
});
test('the performance model includes every connected art beyond three and one shared book only once',()=>{
 const run=emptyLoadout(),sword=addItem(run,'sword');assert.ok(moveItem(run,sword.uid,3,2));
 const arts=[[2,1],[1,2],[1,3],[4,2]].map(([x,y])=>{const art=addItem(run,'swordbook');assert.ok(moveItem(run,art.uid,x,y));return art;});
 let summary=buildLoadoutSummary(run);assert.equal(summary.arts.length,4);close(metric(summary,'artCount'),4);assert.ok(summary.arts.every(art=>art.active));
 const second=addItem(run,'sword');assert.ok(moveItem(run,second.uid,6,2));summary=buildLoadoutSummary(run);
 const shared=summary.arts.find(a=>a.uid===arts[3].uid);assert.equal(summary.arts.length,4);assert.deepEqual(shared.connectedWeapons.map(w=>w.uid),[sword.uid,second.uid]);
 const stone=addItem(run,'stone');assert.ok(moveItem(run,stone.uid,4,3));
 // One stone reaches the shared book through two weapons, but is counted once.
 assert.equal(adjacent(stone,sword),true);assert.equal(adjacent(stone,second),true);
 close(metric(getItemPerformance(run,arts[3].uid),'damage'),7.5);close(metric(getItemPerformance(run,arts[0].uid),'damage'),7.5);
});

test('support breakdown counts each poison pouch and removes stored or disconnected copies',()=>{
 const run=emptyLoadout(),weapon=addItem(run,'sword');assert.ok(moveItem(run,weapon.uid,3,1));
 const art=addItem(run,'swordbook');assert.ok(moveItem(run,art.uid,4,1));
 const pouches=[1,2,3].map(y=>{const pouch=addItem(run,'poison');assert.ok(moveItem(run,pouch.uid,2,y));return pouch;});
 const source=model=>model.supportContributions.find(group=>group.type==='poison');
 let model=getItemPerformance(run,weapon.uid),group=source(model);assert.equal(group.count,3);assert.deepEqual(group.sourceUids,pouches.map(i=>i.uid));close(group.effects[0].value,3);close(metric(model,'poison'),3);
 assert.equal(source(getItemPerformance(run,art.uid)),undefined,'weapon-only poison must not be presented as an art bonus');
 pouches[1].level=2;group=source(getItemPerformance(run,weapon.uid));close(group.effects[0].value,3.4);
 assert.ok(moveItem(run,pouches[0].uid,0,7));assert.ok(moveItem(run,pouches[2].uid,null,null));group=source(getItemPerformance(run,weapon.uid));assert.equal(group.count,1);assert.deepEqual(group.sourceUids,[pouches[1].uid]);close(group.effects[0].value,1.4);
 assert.ok(moveItem(run,weapon.uid,null,null));assert.deepEqual(getItemPerformance(run,weapon.uid).supportContributions,[]);
});

test('two stones reaching one art through two weapons show two sources and the combined bonus',()=>{
 const run=emptyLoadout(),first=addItem(run,'sword'),second=addItem(run,'sword'),art=addItem(run,'swordbook');
 assert.ok(moveItem(run,first.uid,3,2));assert.ok(moveItem(run,second.uid,6,2));assert.ok(moveItem(run,art.uid,4,2));
 const stones=[3,4].map(y=>{const stone=addItem(run,'stone');assert.ok(moveItem(run,stone.uid,4,y));assert.ok(adjacent(stone,first));assert.ok(adjacent(stone,second));return stone;});
 let model=getItemPerformance(run,art.uid),group=model.supportContributions.find(g=>g.type==='stone');
 assert.equal(group.count,2);assert.deepEqual(group.sourceUids,stones.map(i=>i.uid));close(group.effects[0].value,50);close(metric(model,'damage'),9);
 assert.ok(moveItem(run,stones[0].uid,null,null));model=getItemPerformance(run,art.uid);group=model.supportContributions.find(g=>g.type==='stone');assert.equal(group.count,1);close(group.effects[0].value,25);close(metric(model,'damage'),7.5);
});

test('common energy contributions include every active contact while local attack bonuses stay scoped',()=>{
 const run=emptyLoadout(),weapon=addItem(run,'sword');assert.ok(moveItem(run,weapon.uid,3,2));
 const arts=[[4,2,1],[4,4,1],[1,4,0]].map(([x,y,rot])=>{const art=addItem(run,'swordbook');assert.ok(moveItem(run,art.uid,x,y,rot));return art;});
 const first=addItem(run,'inkstone'),second=addItem(run,'inkstone');assert.ok(moveItem(run,first.uid,5,3,1));assert.ok(moveItem(run,second.uid,1,3));
 for(const art of arts){const group=getItemPerformance(run,art.uid).supportContributions.find(g=>g.type==='inkstone');assert.equal(group.count,2);close(group.effects[0].value,1.2);assert.equal(group.effects[0].label,'공통 내공 회복');}
 assert.deepEqual(getItemPerformance(run,weapon.uid).supportContributions,[]);
 const wrap=addItem(run,'silkwrap');assert.ok(placeBeside(run,wrap,weapon));assert.ok(getItemPerformance(run,weapon.uid).supportContributions.some(g=>g.type==='silkwrap'));assert.ok(arts.every(a=>!getItemPerformance(run,a.uid).supportContributions.some(g=>g.type==='silkwrap')));
});

test('duplicate cooldown sources show their full sum and explicitly distinguish the effective cap',()=>{
 const run=emptyLoadout(),weapon=addItem(run,'sword'),art=addItem(run,'swordbook');assert.ok(moveItem(run,weapon.uid,3,3));assert.ok(placeBeside(run,art,weapon));
 for(let n=0;n<3;n++){const bell=addItem(run,'jinglingbell');bell.level=3;assert.ok(placeBeside(run,bell,art));}
 const model=getItemPerformance(run,art.uid),group=model.supportContributions.find(g=>g.type==='jinglingbell');assert.equal(group.count,3);close(group.effects[0].value,72);close(metric(model,'cooldown'),2.5);assert.match(model.supportCapNotes.join(' '),/합계 72% → 적용 50% \(상한\)/);
});
