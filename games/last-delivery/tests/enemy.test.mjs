import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS,ENEMIES} from '../dist/data.mjs';
import {createRun,enemyLoadout,buildStats,createBattle,tickBattle,validateRun,canPlace} from '../dist/engine.mjs';

test('seeded enemy bags are legal, reproducible, varied and more developed later',()=>{
 const variants=new Set();
 for(let seed=1;seed<=12;seed++)for(let stage=0;stage<10;stage++){
  const run=createRun('sword',seed);run.stage=stage;const bag=enemyLoadout(run),stats=buildStats(bag);
  assert.deepEqual(enemyLoadout(run),bag);assert.deepEqual(stats.errors,[]);assert.equal(stats.inactive.length,0);
  assert.ok(bag.items.every(i=>canPlace(bag,i.uid,i.x,i.y,i.rot)));
  if(stage===0)assert.equal(stats.arts.length,0);
  if(stage===9){assert.equal(stats.arts.length,bag.equipmentTrade?2:3);assert.ok(bag.items.length>=8);variants.add(bag.items.map(i=>`${i.type}:${i.rot}:${i.x},${i.y}`).join('|'));}
 }
 assert.ok(variants.size>=8);
});

test('later enemy builds trade arts and supports for multiple weapons or inner manuals',()=>{
 const found=new Set();
 for(let seed=1;seed<=24;seed++)for(let stage=0;stage<10;stage++){
  const run=createRun('sword',seed);run.stage=stage;const bag=enemyLoadout(run),stats=buildStats(bag),weapons=bag.items.filter(i=>ITEMS[i.type].kind==='weapon'),inners=bag.items.filter(i=>ITEMS[i.type].kind==='inner'),supports=bag.items.filter(i=>ITEMS[i.type].kind==='support');
  assert.deepEqual(stats.errors,[]);assert.equal(stats.inactive.length,0);assert.ok(bag.items.every(i=>canPlace(bag,i.uid,i.x,i.y,i.rot)));
  if(stage<5){assert.equal(weapons.length,1);assert.ok(inners.length<=1);assert.equal(bag.equipmentTrade,null);continue;}
  if(!bag.equipmentTrade)continue;
  found.add(bag.equipmentTrade);assert.equal(stats.arts.length,stage<8?1:2);assert.equal(supports.length,stage<8?1:2);
  assert.equal(weapons.length,bag.equipmentTrade==='weapon'?2:1);assert.equal(inners.length,bag.equipmentTrade==='inner'?2:1);
  for(const i of [...weapons,...inners])assert.ok(bag.style.includes(ITEMS[i.type].name));
 }
 assert.deepEqual([...found].sort(),['inner','weapon']);
});

test('every weapon in a generated multi-weapon enemy bag really attacks independently',()=>{
 let selected=null;
 for(let seed=1;seed<=24&&!selected;seed++)for(let stage=5;stage<10&&!selected;stage++){const run=createRun('sword',seed);run.stage=stage;if(enemyLoadout(run).equipmentTrade==='weapon')selected=run;}
 assert.ok(selected);const b=createBattle(selected),stats=buildStats(b.enemyLoadout);
 assert.deepEqual(b.rival.weapons.map(i=>i.uid),stats.weapons.map(i=>i.uid));assert.deepEqual(b.enemyLoadout,enemyLoadout(selected));
 b.hp=b.maxHp=10000;b.enemyHp=b.enemyMaxHp=10000;
 for(let n=0;n<240;n++)tickBattle(b);
 for(const weapon of b.rival.weapons){
  const events=b.events.filter(e=>e.actor==='enemy'&&e.effect==='attack'&&e.sourceUid===weapon.uid);assert.ok(events.length>=2,weapon.name);
  for(const event of events)assert.ok(event.sourceUids.includes(weapon.uid));
  const interval=weapon.interval/(1+Math.min(.8,weapon.effectiveBonuses.speed));for(let n=1;n<events.length;n++)assert.ok(events[n].t-events[n-1].t>=interval-.051);
 }
});

test('the displayed backpack is the exact combat snapshot and old scripted attacks cannot alter it',()=>{
 const run=createRun('spear',7);run.stage=6;const before=enemyLoadout(run),baseline=createBattle(run),enemy=ENEMIES[6];
 const saved={damage:enemy.damage,armor:enemy.armor,interval:enemy.interval,pattern:enemy.pattern};
 try{Object.assign(enemy,{damage:999999,armor:999999,interval:.001,pattern:'boss'});const changed=createBattle(run);assert.deepEqual(changed,baseline);}finally{Object.assign(enemy,saved);}
 assert.deepEqual(baseline.enemyLoadout,before);const stats=buildStats(before);
 assert.equal(baseline.rival.weapon.uid,stats.weapon.uid);assert.equal(baseline.rival.weapon.damage,ITEMS[stats.weapon.type].damage);
 assert.deepEqual(baseline.rival.arts.map(a=>a.uid),stats.arts.map(a=>a.uid));assert.deepEqual(baseline.rival.bonuses,stats.bonuses);
 const changed=enemyLoadout(run);changed.items[0].x=null;assert.deepEqual(enemyLoadout(run),before);
});

test('enemy skills spend energy, obey cooldowns and attribute real items on both sides',()=>{
 const run=createRun('fist',1);run.stage=7;const b=createBattle(run);b.hp=b.maxHp=10000;b.enemyHp=b.enemyMaxHp=10000;
 const heroUids=new Set(run.items.map(i=>i.uid)),enemyUids=new Set(b.enemyLoadout.items.map(i=>i.uid));
 for(let n=0;n<220;n++)tickBattle(b);
 assert.ok(b.events.some(e=>e.actor==='hero'&&e.effect==='attack'));
 assert.ok(b.events.some(e=>e.actor==='enemy'&&e.effect==='attack'));
 assert.ok(b.events.some(e=>e.actor==='enemy'&&e.effect==='skill'));
 for(const e of b.events.filter(e=>e.actor&&e.sourceUids?.length))assert.ok(e.sourceUids.every(uid=>(e.actor==='hero'?heroUids:enemyUids).has(uid)),`${e.actor} ${e.type} references an unowned item`);
 const casts=b.events.filter(e=>e.actor==='enemy'&&e.effect==='skill');
 for(const art of b.rival.arts){const times=casts.filter(e=>e.sourceUid===art.uid).map(e=>e.t);for(let n=1;n<times.length;n++)assert.ok(times[n]-times[n-1]>=art.cooldown*(1-Math.min(.5,(art.effectiveBonuses||b.rival.bonuses).cooldown))-.051);}
 assert.ok(b.rival.energy>=0&&b.rival.energy<=b.rival.maxEnergy);
});

test('shield consumption reports the actual defensive item and medicine cannot trigger twice',()=>{
 const run=createRun('fist',2);run.stage=5;const b=createBattle(run);b.hp=30;
 for(let n=0;n<100;n++)tickBattle(b);
 const armor=run.items.find(i=>i.type==='armor');
 assert.ok(b.events.some(e=>e.actor==='hero'&&e.type==='block'&&e.sourceUids.includes(armor.uid)));
 const consumed=b.events.filter(e=>e.actor==='hero'&&e.type==='consume');assert.ok(consumed.length);
 assert.equal(new Set(consumed.map(e=>e.sourceUid)).size,consumed.length);
 for(const e of b.events.filter(e=>e.absorption))assert.equal(e.target,e.actor);
});

test('enemy runtime and all timed gear effects survive JSON save and resume deterministically',()=>{
 const run=createRun('sword',9);run.stage=8;run.phase='combat';run.battle=createBattle(run);
 for(let n=0;n<45;n++)tickBattle(run.battle);assert.equal(validateRun(run),true);
 const restored=JSON.parse(JSON.stringify(run));assert.equal(validateRun(restored),true);
 for(let n=0;n<100;n++){tickBattle(run.battle);tickBattle(restored.battle);}
 assert.deepEqual(restored.battle,run.battle);
});

test('corrupt enemy boards, missing item sources and malformed events are rejected before rendering',()=>{
 const run=createRun('sword',3);run.stage=7;run.phase='combat';run.battle=createBattle(run);for(let n=0;n<15;n++)tickBattle(run.battle);assert.equal(validateRun(run),true);
 for(const mutate of [
  r=>r.battle.events.push(null),
  r=>r.battle.enemyLoadout.cols=1000,
  r=>r.battle.enemyLoadout.items[1].uid=r.battle.enemyLoadout.items[0].uid,
  r=>r.battle.rival.weapon.uid='e8-999',
  r=>r.battle.rival.weapon.damage=999999,
  r=>r.battle.events[0].sourceUids=['i999']
 ]){const copy=JSON.parse(JSON.stringify(run));mutate(copy);assert.equal(validateRun(copy),false);}
});
