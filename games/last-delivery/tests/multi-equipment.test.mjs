import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS} from '../dist/data.mjs';
import {createRun,addItem,moveItem,autoPlace,buildStats,createBattle,tickBattle,validateRun,migrateRun,rest,restRefinementTargets,rewardChoices,shopChoices,buy} from '../dist/engine.mjs';
const nearEquipment=(actual,expected,label='')=>assert.ok(Math.abs(actual-expected)<1e-8,`${label}: ${actual} != ${expected}`);
function equipmentRun(){
 const run=createRun('sword',19);run.items=[];run.phase='prepare';run.stage=6;run.cols=run.rows=8;
 run.bagExpansions=[{stage:2,method:'shop',axis:'row',cost:24},{stage:3,method:'rest',axis:'col',cost:0},{stage:5,method:'shop',axis:'row',cost:40},{stage:6,method:'rest',axis:'col',cost:0}];return run;
}
function putEquipment(run,type,x,y,rot=0){const item=addItem(run,type);assert.ok(moveItem(run,item.uid,x,y,rot),type);return item;}
function mixedEquipment(){
 const run=equipmentRun(),sword=putEquipment(run,'sword',2,1),spear=putEquipment(run,'spear',4,1),arts=[putEquipment(run,'swordbook',0,1),putEquipment(run,'swordbook',0,3),putEquipment(run,'spearbook',4,0),putEquipment(run,'cloudstep',3,1)];
 const inners=[putEquipment(run,'innerbalanced',5,1),putEquipment(run,'innerwind',0,4)];return {run,sword,spear,arts,inners};
}
function noEnemyActivity(b){
 b.hp=b.maxHp=b.enemyHp=b.enemyMaxHp=b.rival.hp=b.rival.maxHp=10000;b.shield=b.enemyShield=b.rival.shield=0;b.shieldPools=b.rival.shieldPools=[];
 b.rival.nextAttack=999;b.rival.weaponReady=b.rival.weaponReady.map(()=>999);b.rival.skillReady=b.rival.skillReady.map(()=>999);b.rival.medicines=[];
 b.rival.bonuses.armor=b.rival.bonuses.dodge=b.rival.bonuses.thorns=0;return b;
}
function ticksEquipment(b,seconds){for(let n=0;n<seconds*20;n++)tickBattle(b);}

test('multiple weapons, multiple inner manuals and four arts activate without count caps',()=>{
 const {run,sword,spear,arts,inners}=mixedEquipment(),s=buildStats(run);assert.ok(validateRun(run));assert.deepEqual(s.errors,[]);
 assert.deepEqual(s.weapons.map(w=>w.uid),[sword.uid,spear.uid]);assert.deepEqual(s.inners.map(i=>i.uid),inners.map(i=>i.uid));assert.deepEqual(s.arts.map(a=>a.uid),arts.map(a=>a.uid));assert.equal(s.inactive.length,0);
 assert.deepEqual(s.artWeapons[arts[3].uid],[sword.uid,spear.uid]);nearEquipment(s.bonuses.energyRegen,.5);nearEquipment(s.bonuses.speed,.25);nearEquipment(s.bonuses.artPower,.1);
 const expected=+(8*1.25/2.1+15*1.25/2.8).toFixed(1);nearEquipment(s.baseDps,expected);
 moveItem(run,inners[1].uid,null,null);nearEquipment(buildStats(run).bonuses.speed,0);nearEquipment(buildStats(run).bonuses.energyRegen,.5);
});

test('every weapon attacks on its own timer and attributes its actual item on both sides',()=>{
 const run=equipmentRun(),sword=putEquipment(run,'sword',1,1),spear=putEquipment(run,'spear',5,1);
 for(const actor of ['hero','enemy']){
  const b=noEnemyActivity(createBattle(run));
  if(actor==='enemy'){const copy=JSON.parse(JSON.stringify(b));delete copy.rival;delete copy.enemyLoadout;copy.actor='enemy';b.rival=copy;b.nextAttack=999;b.weaponReady=b.weaponReady.map(()=>999);}
  ticksEquipment(b,12);const source=actor==='hero'?b:b.rival;
  for(const w of [sword,spear]){const d=ITEMS[w.type],events=b.events.filter(e=>e.actor===actor&&e.effect==='attack'&&e.sourceUid===w.uid);assert.ok(events.length>=4,`${actor} ${w.type}`);for(const e of events){nearEquipment(e.value,d.damage);assert.equal(e.tag,d.tag);assert.ok(e.sourceUids.includes(w.uid));}for(let n=1;n<events.length;n++)assert.ok(events[n].t-events[n-1].t>=d.interval-.001&&events[n].t-events[n-1].t<=d.interval+.051);}
  assert.equal(source.weaponReady.length,2);assert.notEqual(source.weaponReady[0],source.weaponReady[1]);nearEquipment(source.nextAttack,source.weaponReady[0]);
 }
});

test('weapon supports reach every touching weapon and connected art without leaking or duplicate paths',()=>{
 const run=equipmentRun(),left=putEquipment(run,'sword',2,1),right=putEquipment(run,'sword',5,1),shared=putEquipment(run,'swordbook',3,2),leftArt=putEquipment(run,'swordbook',0,1),rightArt=putEquipment(run,'swordbook',6,2,1),stone=putEquipment(run,'stone',3,1),other=putEquipment(run,'stone',0,3);
 const stats=buildStats(run);assert.deepEqual(stats.artWeapons[shared.uid],[left.uid,right.uid]);assert.deepEqual(stats.links.filter(([uid])=>uid===stone.uid),[[stone.uid,left.uid],[stone.uid,right.uid]]);
 nearEquipment(stats.bonuses.damage,0);for(const item of [left,leftArt,shared])nearEquipment(stats.itemBonuses[item.uid].damage,.5);for(const item of [right,rightArt])nearEquipment(stats.itemBonuses[item.uid].damage,.25);
 assert.deepEqual(stats.itemBonusSources[shared.uid].damage,[stone.uid,other.uid]);assert.deepEqual(stats.itemBonusSources[rightArt.uid].damage,[stone.uid]);
 const b=noEnemyActivity(createBattle(run));b.energy=b.maxEnergy=100;b.skillReady=b.skillReady.map(()=>0);b.nextAttack=999;b.weaponReady=b.weaponReady.map(()=>999);tickBattle(b);
 const sharedEvents=b.events.filter(e=>e.effect==='skill'&&e.sourceUid===shared.uid);assert.equal(sharedEvents.length,1);nearEquipment(sharedEvents[0].value,27);assert.equal(b.casts,3);assert.equal(b.skillReady.length,3);
});

test('four connected arts share energy and eventually all cast without duplicating a shared book',()=>{
 const {run,arts}=mixedEquipment(),b=noEnemyActivity(createBattle(run));b.nextAttack=999;b.weaponReady=b.weaponReady.map(()=>999);ticksEquipment(b,35);
 for(const art of arts)assert.ok(b.events.some(e=>e.effect==='skill'&&e.sourceUid===art.uid),art.type);
 assert.ok(b.energy>=0&&b.energy<=b.maxEnergy);assert.equal(b.arts.length,4);assert.equal(b.skillReady.length,4);
 const shared=b.arts.find(a=>a.id==='cloudstep');assert.equal(shared.connectedWeaponUids.length,2);const casts=b.events.filter(e=>e.effect==='skill'&&e.sourceUid===shared.uid);for(let n=1;n<casts.length;n++)assert.ok(casts[n].t-casts[n-1].t>=7-.051);
});

test('stun postpones every weapon once and generic arts use an actually connected weapon tag',()=>{
 const run=equipmentRun();putEquipment(run,'sword',0,0);const spear=putEquipment(run,'spear',4,1),art=putEquipment(run,'cloudstep',3,1),b=noEnemyActivity(createBattle(run));
 const rival=JSON.parse(JSON.stringify(b));delete rival.rival;delete rival.enemyLoadout;rival.actor='enemy';rival.arts=[];rival.skillReady=[];rival.weaponReady=[10,20];rival.nextAttack=10;b.rival=rival;b.nextAttack=999;b.weaponReady=[999,999];b.skillReady=[0];b.energy=5;
 tickBattle(b);assert.deepEqual(b.rival.weaponReady,[10.5,20.5]);nearEquipment(b.rival.nextAttack,10.5);tickBattle(b);assert.deepEqual(b.rival.weaponReady,[10.5,20.5]);
 const event=b.events.find(e=>e.effect==='skill'&&e.sourceUid===art.uid);assert.equal(event.tag,'spear');assert.deepEqual(b.arts[0].connectedWeaponUids,[spear.uid]);
});

test('multiple inner manuals sum actual shield, armor and energy once per item',()=>{
 const run=equipmentRun();putEquipment(run,'sword',0,0);const iron1=putEquipment(run,'inneriron',1,0,1),iron2=putEquipment(run,'inneriron',3,0,1),balanced=putEquipment(run,'innerbalanced',5,0);balanced.level=1;
 const stats=buildStats(run),b=createBattle(run);nearEquipment(stats.shield,80);nearEquipment(b.shield,80);nearEquipment(b.bonuses.armor,2);nearEquipment(b.bonuses.energyRegen,.6);nearEquipment(b.bonuses.artPower,.12);assert.deepEqual(b.shieldPools.map(p=>[p.uid,p.amount]),[[iron1.uid,40],[iron2.uid,40]]);
});

test('multi-equipment JSON saves keep independent timers, energy priority and deterministic continuation',()=>{
 const {run}=mixedEquipment();run.phase='combat';run.battle=createBattle(run);ticksEquipment(run.battle,2);assert.ok(validateRun(run));const restored=migrateRun(JSON.parse(JSON.stringify(run)));assert.ok(restored);assert.deepEqual(restored,run);
 ticksEquipment(run.battle,10);ticksEquipment(restored.battle,10);assert.deepEqual(restored.battle,run.battle);assert.ok(validateRun(restored));
});

test('legacy combat gains newly eligible weapons and books while retaining all existing combat state',()=>{
 const {run,arts}=mixedEquipment();run.phase='combat';run.battle=createBattle(run);ticksEquipment(run.battle,1);const legacy=JSON.parse(JSON.stringify(run));
 for(const f of [legacy.battle,legacy.battle.rival]){delete f.equipmentVersion;delete f.weapons;delete f.weaponReady;delete f.weaponTelegraphs;delete f.artCursor;}
 // This is the old single-weapon/three-art snapshot beside the same bag.
 legacy.battle.arts=legacy.battle.arts.filter(a=>['swordbook','cloudstep'].includes(a.id));legacy.battle.skillReady=[4.2,5.7,6.1];
 const before=JSON.stringify(legacy),restored=migrateRun(legacy);assert.ok(restored);assert.equal(JSON.stringify(legacy),before);
 for(const key of ['hp','enemyHp','shield','enemyShield','energy','enemyEnergy','t','rng','nextAttack','eventId'])assert.deepEqual(restored.battle[key],legacy.battle[key],key);
 assert.deepEqual(restored.battle.events,legacy.battle.events);assert.equal(restored.battle.weapons.length,2);assert.equal(restored.battle.arts.length,4);assert.ok(restored.battle.weaponReady[1]>restored.battle.t);
 for(const [n,a]of legacy.battle.arts.entries())nearEquipment(restored.battle.skillReady[restored.battle.arts.findIndex(x=>x.uid===a.uid)],legacy.battle.skillReady[n]);
 assert.ok(restored.battle.skillReady[restored.battle.arts.findIndex(a=>a.uid===arts[2].uid)]>restored.battle.t);assert.ok(validateRun(restored));
});

test('rest refinement upgrades one eligible weapon and one eligible art while skipping finished items',()=>{
 const {run,sword,spear,arts}=mixedEquipment();run.phase='rest';sword.level=arts[0].level=3;arts[1].level=2;const targets=restRefinementTargets(run);assert.deepEqual(targets.map(i=>i.uid),[spear.uid,arts[2].uid]);const gold=run.gold;assert.ok(rest(run,'meditate'));
 assert.equal(sword.level,3);assert.equal(spear.level,1);assert.equal(arts[0].level,3);assert.equal(arts[1].level,2);assert.equal(arts[2].level,1);assert.equal(arts[3].level,0);assert.equal(run.gold,gold);
});

test('malformed independent weapon timers and equipment arrays are rejected before resume',()=>{
 const {run}=mixedEquipment();run.phase='combat';run.battle=createBattle(run);assert.ok(validateRun(run));
 for(const mutate of [r=>r.battle.weaponReady.pop(),r=>r.battle.weaponReady[1]='bad',r=>r.battle.weapons[1].uid='i999',r=>r.battle.weapons.push(r.battle.weapons[0]),r=>r.battle.artCursor=9,r=>r.battle.weaponTelegraphs[1]='bad',r=>delete r.battle.weapons]){const bad=structuredClone(run);mutate(bad);assert.equal(validateRun(bad),false);assert.equal(migrateRun(bad),null);}
});


test('ready expensive arts reserve shared energy instead of being permanently starved by cheap books',()=>{
 const run=equipmentRun();putEquipment(run,'sword',3,1);const cheap=putEquipment(run,'cloudstep',2,1),costly=putEquipment(run,'phoenix',4,1),b=noEnemyActivity(createBattle(run));
 b.nextAttack=999;b.weaponReady=b.weaponReady.map(()=>999);b.energy=0;b.skillReady=[0,0];b.artCursor=1;ticksEquipment(b,12);
 const events=b.events.filter(e=>e.effect==='skill');assert.equal(events[0].sourceUid,costly.uid);assert.ok(events.some(e=>e.sourceUid===cheap.uid));assert.ok(b.energy>=0);
});

test('shops and later rewards can supply real duplicate weapons, inner manuals and arts with stable stock',()=>{
 const seenShop=new Set(),seenRewards=new Set();
 for(let seed=1;seed<=40;seed++){
  const run=equipmentRun();run.seed=seed;run.stage=5;run.phase='shop';run.gold=300;putEquipment(run,'sword',0,0);putEquipment(run,'inneriron',2,0);putEquipment(run,'swordbook',0,4);run.shopOwned=run.items.map(i=>i.type);
  const owned=new Set(run.shopOwned),stock=shopChoices(run),repeat=stock.find(type=>owned.has(type));assert.ok(repeat);seenShop.add(ITEMS[repeat].kind);
  const existing=run.items.find(i=>i.type===repeat),count=run.items.filter(i=>i.type===repeat).length;assert.ok(buy(run,repeat));assert.equal(run.items.filter(i=>i.type===repeat).length,count+1);assert.notEqual(run.items.at(-1).uid,existing.uid);assert.deepEqual(shopChoices(run),stock);assert.equal(buy(run,repeat),false);
  for(const type of rewardChoices(run))if(owned.has(type))seenRewards.add(ITEMS[type].kind);
 }
 for(const kind of ['weapon','inner','art']){assert.ok(seenShop.has(kind),kind);assert.ok(seenRewards.has(kind),kind);}
});
