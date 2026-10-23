import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS} from '../dist/data.mjs';
import {createRun,addItem,autoPlace,createBattle,tickBattle,validateRun,migrateRun} from '../dist/engine.mjs';

// Isolate one real engine action without animation code or unrelated cooldowns.
function isolatedBattle(){
 const b=createBattle(createRun('sword',17));
 for(const f of [b,b.rival]){
  f.hp=f.maxHp=100;f.shield=0;f.shieldPools=[];f.medicines=[];
  f.nextAttack=999;f.weaponReady=f.weaponReady.map(()=>999);f.skillReady=f.skillReady.map(()=>999);
  for(const key of Object.keys(f.bonuses))f.bonuses[key]=0;
  for(const a of [...f.weapons,...f.arts])a.effectiveBonuses={...f.bonuses};
 }
 b.enemyHp=b.enemyMaxHp=100;b.enemyShield=0;b.events=[];
 return b;
}
function setShield(b,f,amount){
 f.shield=amount;f.shieldPools=[{uid:`${f.actor}-shield`,amount}];
 if(f.actor==='enemy')b.enemyShield=amount;
}
function assertDamageFeedback(b,event,actor,target,before,expectedDamage,expectedBlocked){
 assert.ok(event);assert.equal(event.actor,actor.actor);assert.equal(event.target,target.actor);
 assert.equal(event.value,expectedDamage);assert.equal(event.blocked,expectedBlocked);
 assert.equal(before.hp-target.hp,event.value);assert.equal(before.shield-target.shield,event.blocked);
 assert.equal(target.received,expectedDamage);assert.equal(target.blocked,expectedBlocked);
 assert.equal(actor.damage,expectedDamage);
 const absorption=b.events.filter(e=>e.absorption&&e.target===target.actor);
 assert.equal(absorption.length,1);assert.equal(absorption[0].value,event.blocked);
 assert.equal(absorption[0].actor,target.actor);
 assert.equal(target.shieldPools.reduce((sum,pool)=>sum+pool.amount,0),target.shield);
 if(target.actor==='enemy'){assert.equal(b.enemyHp,target.hp);assert.equal(b.enemyShield,target.shield);}
}

for(const actorName of ['hero','enemy'])for(const itemId of ['explosive','toxicbottle'])for(const shieldCase of ['full','partial']){
 test(`${actorName} ${itemId} reports actual damage and ${shieldCase} shield absorption on its target`,()=>{
  const b=isolatedBattle(),actor=actorName==='hero'?b:b.rival,target=actorName==='hero'?b.rival:b;
  const c={...ITEMS[itemId],id:itemId,uid:`${actorName}-consumable`,level:0,effectiveBonuses:{...actor.bonuses}};
  actor.medicines=[c];target.bonuses.armor=1;
  const hit=c.damage-1,shield=shieldCase==='full'?hit+5:2,blocked=Math.min(shield,hit);
  setShield(b,target,shield);const before={hp:target.hp,shield:target.shield},rng=b.rng;
  tickBattle(b);
  const events=b.events.filter(e=>e.type==='consume');assert.equal(events.length,1);
  assertDamageFeedback(b,events[0],actor,target,before,hit-blocked,blocked);
  assert.equal(events[0].sourceUid,c.uid);assert.equal(events[0].effect,'consume');
  assert.deepEqual(actor.used,[c.uid]);assert.equal(actor.skillDamage,hit-blocked);
  assert.equal(b.rng,rng,'consumables still bypass dodge without consuming randomness');
  assert.equal(target.statuses.poison.amount,c.poison||0);
  tickBattle(b);assert.equal(b.events.filter(e=>e.type==='consume').length,1,'consumable fires once');
  assert.equal(target.hp,before.hp-(hit-blocked));assert.equal(target.shield,shield-blocked);
 });
}

for(const actorName of ['hero','enemy'])for(const shieldCase of ['full','partial']){
 test(`${actorName} thorns reports actual reflected damage and ${shieldCase} shield absorption`,()=>{
  const b=isolatedBattle(),reflector=actorName==='hero'?b:b.rival,attacker=actorName==='hero'?b.rival:b;
  reflector.bonuses.thorns=ITEMS.ironspikes.bonuses.thorns;
  const reflected=reflector.bonuses.thorns,shield=shieldCase==='full'?reflected+2:1,blocked=Math.min(shield,reflected);
  setShield(b,attacker,shield);attacker.nextAttack=0;
  const before={hp:attacker.hp,shield:attacker.shield},withoutThorns=structuredClone(b);
  (actorName==='hero'?withoutThorns:withoutThorns.rival).bonuses.thorns=0;
  tickBattle(withoutThorns);tickBattle(b);
  const events=b.events.filter(e=>e.type==='thorns');assert.equal(events.length,1);
  assertDamageFeedback(b,events[0],reflector,attacker,before,reflected-blocked,blocked);
  assert.equal(events[0].effect,'thorns');assert.equal(reflector.poisonDamage,reflected-blocked);
  assert.equal(attacker.attacks,1);assert.equal(b.rng,withoutThorns.rng,'thorns do not add dodge or critical rolls');
  assert.equal(attacker.nextAttack,(actorName==='hero'?withoutThorns.rival:withoutThorns).nextAttack);
  const attack=b.events.find(e=>e.effect==='attack');assert.equal(attack.actor,attacker.actor);assert.equal(attack.target,reflector.actor);
  assert.equal(100-reflector.hp,attack.value);assert.equal(attack.blocked,0);
 });
}

test('saved battles accept old events without absorption metadata and continue identically',()=>{
 const run=createRun('sword',17);run.items=[];
 for(const type of ['sword','ironspikes','explosive','barrierpill']){const item=addItem(run,type);assert.ok(autoPlace(run,item.uid));}
 run.phase='combat';run.battle=createBattle(run);
 for(let n=0;n<40;n++)tickBattle(run.battle);
 assert.ok(run.battle.events.some(e=>e.type==='consume'));
 assert.ok(run.battle.events.some(e=>e.type==='thorns'));
 assert.ok(validateRun(run));
 const legacy=JSON.parse(JSON.stringify(run));
 for(const e of legacy.battle.events)if(e.type==='consume'||e.type==='thorns')delete e.blocked;
 assert.ok(validateRun(legacy));const restored=migrateRun(legacy);assert.ok(restored);assert.deepEqual(restored,legacy);
 // Historical presentation metadata does not affect future state or RNG.
 const lastEventId=run.battle.eventId;
 for(let n=0;n<40;n++){tickBattle(run.battle);tickBattle(restored.battle);}
 for(const b of [run.battle,restored.battle])b.events=b.events.filter(e=>e.id>lastEventId);
 assert.deepEqual(restored.battle,run.battle);assert.ok(validateRun(restored));
});
