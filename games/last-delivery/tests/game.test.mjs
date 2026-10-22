import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS,ENEMIES,KITS,SCENES,VERSION} from '../dist/data.mjs';
import {createRun,canPlace,moveItem,addItem,autoPlace,buildStats,simulate,createBattle,tickBattle,settleBattle,rewardChoices,selectReward,buy,shopChoices,leaveShop,rerollShop,rest,advanceStory,upgradeItem,upgradeCost,sellItem,validateRun,migrateRun,adjacent,inBag} from '../dist/engine.mjs';

const finishScene=r=>{let n=0;while(r.phase==='story'){assert.ok(n++<30,'story must reach its destination');assert.ok(advanceStory(r));}};
const finishBattle=b=>{let n=0;while(b.status==='fighting'){assert.ok(n++<2500,'battle must terminate');tickBattle(b);}return b;};
function emptyRun(kit='sword',seed=123){const r=createRun(kit,seed);r.items=[];r.phase='prepare';return r;}
function placeAdjacent(r,i,other){for(const rot of [0,1,2,3])for(let y=0;y<r.rows;y++)for(let x=0;x<r.cols;x++)if(canPlace(r,i.uid,x,y,rot)&&adjacent({...i,x,y,rot},other))return moveItem(r,i.uid,x,y,rot);return false;}

test('complete content has five distinct starter styles, sixty items and ten encounters',()=>{
 assert.equal(VERSION,2);assert.equal(Object.keys(ITEMS).length,60);assert.equal(ENEMIES.length,10);assert.equal(Object.keys(KITS).length,5);
 assert.equal(new Set(Object.values(KITS).map(k=>ITEMS[k.weapon].tag)).size,5);
 assert.equal(Object.values(ITEMS).filter(i=>i.kind==='art').length,18);
 assert.equal(Object.values(ITEMS).filter(i=>i.kind==='inner').length,6);
 for(const [id,i] of Object.entries(ITEMS)){assert.equal(i.id,id);assert.ok(i.name&&i.desc&&i.short);assert.ok(i.w>0&&i.w<=6&&i.h>0&&i.h<=6);assert.ok(Number.isFinite(i.price));if(i.kind==='art')assert.ok(i.fx&&i.cost>0&&i.cooldown>0);}
 for(const key of ['opening','reveal','midpoint','proof','boss','ending'])assert.ok(SCENES[key].length>2);
});

test('every starter kit starts with a legal, connected loadout in the initial six by six bag',()=>{
 for(const kit of Object.keys(KITS)){const r=createRun(kit,17),s=buildStats(r);assert.equal(r.cols,6);assert.equal(r.rows,6);assert.equal(validateRun(r),true,kit);assert.deepEqual(s.errors,[]);assert.equal(s.arts.length,1);assert.equal(s.weapon.type,KITS[kit].weapon);assert.equal(r.phase,'story');finishScene(r);assert.equal(r.phase,'prepare');assert.equal(r.cols,6);}
});

test('placement rejects overlap and out of bounds atomically, but tray and rotation are usable',()=>{
 const r=createRun(),w=r.items.find(i=>ITEMS[i.type].kind==='weapon'),occupied=r.items.find(i=>i.uid!==w.uid),before=structuredClone(r);
 for(const [x,y,rot] of [[6,0,false],[-1,0,false],[0,6,true],[occupied.x,occupied.y,false]])assert.equal(moveItem(r,w.uid,x,y,rot),false);
 assert.deepEqual(r,before);assert.ok(moveItem(r,w.uid,null,null));assert.equal(inBag(w),false);assert.ok(moveItem(r,w.uid,0,5,true));assert.equal(validateRun(r),true);
 const p=addItem(r,'poison');assert.ok(autoPlace(r,p.uid));assert.equal(canPlace(r,p.uid,1.2,2,false),false);
});

test('diagonal contact never activates supports, and removing real contact reduces damage',()=>{
 const r=emptyRun(),w=addItem(r,'sword'),p=addItem(r,'poison');assert.ok(moveItem(r,w.uid,2,1,false));assert.ok(moveItem(r,p.uid,3,4,false));assert.equal(adjacent(w,p),false);assert.equal(buildStats(r).poison,false);assert.ok(moveItem(r,p.uid,3,3,false));assert.equal(adjacent(w,p),true);assert.equal(buildStats(r).poison,true);
 const connected=createRun('sword',7),unconnected=structuredClone(connected);const support=unconnected.items.find(i=>i.type===KITS.sword.support);moveItem(unconnected,support.uid,null,null);
 assert.ok(buildStats(connected).multiplier>buildStats(unconnected).multiplier);assert.ok(simulate(connected).result.time<simulate(unconnected).result.time);
});

test('only connected matching arts cast, without artificial art or inner count limits',()=>{
 const good=createRun('sword',5),noArt=structuredClone(good);moveItem(noArt,noArt.items.find(i=>i.type===KITS.sword.art).uid,null,null);
 assert.ok(simulate(good).casts>0);assert.equal(simulate(noArt).casts,0);assert.ok(simulate(good).result.time<simulate(noArt).result.time);
 const r=emptyRun(),w=addItem(r,'sword');assert.ok(moveItem(r,w.uid,2,1,false));
 for(let n=0;n<4;n++){const a=addItem(r,'swordbook');assert.ok(placeAdjacent(r,a,w),`adjacent book ${n}`);}
 assert.equal(buildStats(r).arts.length,4);assert.equal(buildStats(r).inactive.filter(i=>i.type==='swordbook').length,0);
 const wrong=emptyRun(),ww=addItem(wrong,'sword'),a=addItem(wrong,'dartbook');moveItem(wrong,ww.uid,2,1,false);assert.ok(placeAdjacent(wrong,a,ww));assert.equal(buildStats(wrong).arts.length,0);
 const inners=createRun();for(const type of ['innerbalanced','inneriron'])assert.ok(autoPlace(inners,addItem(inners,type).uid));assert.deepEqual(buildStats(inners).errors,[]);assert.equal(buildStats(inners).inners.length,2);assert.doesNotThrow(()=>createBattle(inners));
});

test('warehouse items have no combat effects and medicines are consumed exactly once',()=>{
 const r=createRun(),armor=addItem(r,'armor');assert.equal(buildStats(r).shield,0);assert.ok(autoPlace(r,armor.uid));assert.equal(buildStats(r).shield,ITEMS.armor.bonuses.shield);moveItem(r,armor.uid,null,null);assert.equal(buildStats(r).shield,0);
 const med=r.items.find(i=>i.type==='medicine');r.hp=30;const b=simulate(r);assert.equal(b.used.filter(uid=>uid===med.uid).length,1);assert.ok(b.healed>=ITEMS.medicine.heal);r.battle=b;settleBattle(r);assert.equal(r.items.some(i=>i.uid===med.uid),false);
 const stock=createRun();stock.hp=30;const saved=stock.items.find(i=>i.type==='medicine');moveItem(stock,saved.uid,null,null);const noMedicine=simulate(stock);assert.equal(noMedicine.used.length,0);assert.equal(noMedicine.healed,0);
 const healthy=createRun();healthy.battle=simulate(healthy);settleBattle(healthy);assert.ok(healthy.items.some(i=>i.type==='medicine'));
});

test('each martial art actually casts its declared visual and applies its combat effect',()=>{
 for(const [type,d] of Object.entries(ITEMS).filter(([,i])=>i.kind==='art')){
  const kit=d.tag==='any'?'sword':d.tag,r=emptyRun(kit),w=addItem(r,KITS[kit].weapon),a=addItem(r,type);moveItem(r,w.uid,2,1,false);assert.ok(placeAdjacent(r,a,w),type);
  const b=createBattle(r);b.enemyHp=1000;b.enemyMaxHp=1000;b.energy=20;b.maxEnergy=20;b.hp=70;b.shield=1000;
  let n=0;while(b.casts===0&&n++<200)tickBattle(b);assert.equal(b.casts,1,type);const e=b.events.find(e=>e.type==='skill');assert.equal(e?.fx,d.fx,type);assert.ok(e.value>0||d.heal||d.shield||d.stun,type);
  if(d.poison)assert.ok(b.enemyPoison>0,type);if(d.bleed)assert.ok(b.enemyBleed>0,type);if(d.burn)assert.ok(b.enemyBurn>0,type);if(d.heal)assert.ok(b.healed>0,type);if(d.stun)assert.ok(b.stunnedUntil>b.t,type);
 }
});

test('seeded rewards and shops repeat for a seed, vary across runs and keep displayed stock stable',()=>{
 const a=createRun('sword',17),b=createRun('sword',17);a.stage=b.stage=5;a.phase=b.phase='shop';assert.deepEqual(rewardChoices(a),rewardChoices(b));assert.deepEqual(shopChoices(a),shopChoices(b));
 assert.ok(new Set(Array.from({length:16},(_,seed)=>{const r=createRun('sword',seed);r.stage=5;return rewardChoices(r).join(',');})).size>4);
 for(const type of rewardChoices(a))assert.ok(ITEMS[type]);assert.equal(new Set(rewardChoices(a)).size,rewardChoices(a).length);assert.ok(rewardChoices(a).includes('medicine'));
 a.gold=500;const stock=shopChoices(a),type=stock.find(t=>ITEMS[t].kind!=='consumable');assert.ok(buy(a,type));assert.deepEqual(shopChoices(a),stock);assert.equal(buy(a,type),false);
 const gold=a.gold;for(let i=0;i<3;i++)assert.ok(buy(a,'medicine'));assert.equal(buy(a,'medicine'),false);assert.equal(a.gold,gold-ITEMS.medicine.price*3);
 const before=a.gold;assert.ok(rerollShop(a));assert.equal(a.gold,before-8);assert.equal(a.shopBought.length,0);assert.ok(leaveShop(a));assert.equal(a.phase,'prepare');assert.equal(buy(a,'medicine'),false);
});

test('currency operations cannot be used in the wrong phase or bypass limits',()=>{
 const r=createRun(),w=r.items.find(i=>i.type===KITS.sword.weapon);assert.equal(upgradeItem(r,w.uid),false);assert.equal(sellItem(r,w.uid),false);assert.equal(selectReward(r,'medicine'),false);assert.equal(rest(r,'heal'),false);
 r.phase='prepare';r.gold=19;assert.equal(upgradeItem(r,w.uid),false);assert.equal(r.gold,19);r.gold=200;const c=upgradeCost(w);assert.ok(upgradeItem(r,w.uid));assert.equal(r.gold,200-c);assert.equal(w.level,1);assert.ok(upgradeItem(r,w.uid));assert.ok(upgradeItem(r,w.uid));assert.equal(upgradeItem(r,w.uid),false);assert.equal(w.level,3);
 assert.equal(sellItem(r,w.uid),false,'cannot sell the only weapon and softlock the run');const spare=addItem(r,'saber');assert.ok(sellItem(r,spare.uid));
 const medicine=r.items.find(i=>i.type==='medicine');assert.equal(upgradeItem(r,medicine.uid),false);const gold=r.gold;assert.ok(sellItem(r,medicine.uid));assert.ok(r.gold>gold);assert.equal(sellItem(r,medicine.uid),false);
});

test('battle snapshots round-trip through JSON without changing outcome or item consumption',()=>{
 const r=createRun('dart',311);r.stage=2;r.phase='combat';r.battle=createBattle(r);for(let n=0;n<157;n++)tickBattle(r.battle);assert.equal(validateRun(r),true);const copy=JSON.parse(JSON.stringify(r));assert.equal(validateRun(copy),true);
 finishBattle(r.battle);finishBattle(copy.battle);assert.deepEqual(copy.battle.result,r.battle.result);assert.deepEqual(copy.battle.used,r.battle.used);assert.deepEqual(copy.battle.events,r.battle.events);
});

test('victory pays once, defeat remains final and final boss changes phase',()=>{
 const r=createRun(),gold=r.gold;r.battle=simulate(r);assert.equal(r.battle.status,'won');assert.ok(settleBattle(r));assert.equal(r.gold,gold+ENEMIES[0].gold);assert.equal(settleBattle(r),false);assert.equal(r.battles.length,1);
 const doomed=createRun();doomed.hp=1;for(const i of doomed.items.filter(i=>ITEMS[i.type].kind==='consumable'))moveItem(doomed,i.uid,null,null);doomed.battle=simulate(doomed);assert.equal(doomed.battle.status,'lost');assert.ok(settleBattle(doomed));assert.equal(doomed.phase,'defeat');assert.equal(doomed.gold,30);
 const boss=createRun();boss.stage=9;const b=createBattle(boss);b.shield=100000;b.enemyHp=b.enemyMaxHp*.49;tickBattle(b);assert.equal(b.enemyPhase,2);assert.ok(b.events.some(e=>e.type==='phase'));for(let n=0;n<60;n++)tickBattle(b);assert.ok(b.events.some(e=>e.type==='telegraph'));
});

test('all ten encounters lead through shops, rests, six scenes and the ending without bag growth',()=>{
 // Large shield/damage isolate campaign transitions; natural-build balance is checked separately.
 for(const kit of Object.keys(KITS)){
  const r=createRun(kit,77),visited=[];finishScene(r);
  for(let stage=0;stage<10;stage++){
   assert.equal(r.stage,stage);assert.equal(r.phase,'prepare');r.phase='combat';r.battle=createBattle(r);r.battle.shield=100000;for(const w of r.battle.weapons)w.effectiveBonuses.damage+=20;finishBattle(r.battle);assert.equal(r.battle.status,'won',`${kit} ${stage}`);assert.ok(settleBattle(r));assert.ok(validateRun(r));
   if(stage===9){assert.equal(r.phase,'story');assert.equal(r.scene,'ending');finishScene(r);break;}
   assert.equal(r.phase,'reward');assert.ok(selectReward(r,rewardChoices(r)[0]));
   while(r.phase!=='prepare'){
    if(r.phase==='story'){visited.push(r.scene);finishScene(r);}
    else if(r.phase==='shop'){visited.push(`shop${r.stage}`);assert.ok(leaveShop(r));}
    else if(r.phase==='rest'){visited.push(`rest${r.stage}`);assert.ok(rest(r,'heal'));}
    else assert.fail(`unexpected phase ${r.phase}`);
   }
   assert.equal(r.cols,6);assert.equal(r.rows,6);assert.ok(validateRun(r));
  }
  assert.equal(r.phase,'complete');assert.equal(r.cleared,true);assert.equal(r.battles.length,10);assert.ok(validateRun(r));assert.deepEqual(visited,['shop2','reveal','rest3','shop5','midpoint','rest6','proof','shop8','rest9','boss']);
 }
});

test('malformed saves are rejected instead of causing late battle failures',()=>{
 const r=createRun();assert.equal(validateRun(r),true);for(const value of [null,{}, {...r,version:1},{...r,cols:9},{...r,stage:10},{...r,gold:NaN},{...r,hp:-1}])assert.equal(validateRun(value),false);
 const overlap=structuredClone(r);overlap.items[1].x=overlap.items[0].x;overlap.items[1].y=overlap.items[0].y;assert.equal(validateRun(overlap),false);
 const badType=structuredClone(r);badType.items[0].type='missing';assert.equal(validateRun(badType),false);
 const combat=createRun();combat.phase='combat';combat.battle=createBattle(combat);assert.equal(validateRun(combat),true);
 const missing=structuredClone(combat);delete missing.battle.skillReady;assert.equal(validateRun(missing),false);
 const notFinite=structuredClone(combat);notFinite.battle.bonuses.damage=NaN;assert.equal(validateRun(notFinite),false);
 const nullItem=structuredClone(r);nullItem.items.push(null);assert.equal(validateRun(nullItem),false);const nullArt=structuredClone(combat);nullArt.battle.arts.push(null);assert.equal(validateRun(nullArt),false);
 const idCollision=structuredClone(r);idCollision.nextId=1;assert.equal(validateRun(idCollision),false);
});

test('legacy saves keep their inventory and progress when a changed footprint overlaps',()=>{
 const old=emptyRun();delete old.rulesVersion;old.gold=47;old.hp=88;old.stage=4;
 const weapon=addItem(old,'moonblade'),medicine=addItem(old,'medicine');
 Object.assign(weapon,{x:1,y:1,rot:false});Object.assign(medicine,{x:2,y:3,rot:false});
 const before=JSON.stringify(old),migrated=migrateRun(old);
 assert.ok(migrated);assert.equal(validateRun(migrated),true);assert.equal(JSON.stringify(old),before);
 assert.equal(migrated.gold,47);assert.equal(migrated.hp,88);assert.equal(migrated.stage,4);
 assert.deepEqual(migrated.items.map(i=>i.uid),old.items.map(i=>i.uid));
 assert.equal(inBag(migrated.items.find(i=>i.uid===weapon.uid)),true);
 assert.equal(inBag(migrated.items.find(i=>i.uid===medicine.uid)),true);
 assert.equal(migrated.rulesVersion,3);
});

test('legacy combat resumes at preparation while current battles retain deterministic snapshots',()=>{
 const old=createRun('sword',9);old.phase='combat';old.hp=97;old.battle=createBattle(old);
 delete old.rulesVersion;old.battle.version=2;delete old.battle.rival;delete old.battle.enemyLoadout;
 const migrated=migrateRun(old);assert.ok(migrated);assert.equal(migrated.phase,'prepare');assert.equal(migrated.battle,null);assert.equal(migrated.hp,97);assert.equal(migrated.gold,old.gold);assert.deepEqual(migrated.battles,old.battles);assert.equal(validateRun(migrated),true);
 const current=createRun('dart',12);current.phase='combat';current.battle=createBattle(current);for(let n=0;n<80;n++)tickBattle(current.battle);
 assert.deepEqual(migrateRun(JSON.parse(JSON.stringify(current))),current);
});
