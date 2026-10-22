import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS} from '../dist/data.mjs';
import {createRun,addItem,moveItem,autoPlace,adjacent,buildStats,createBattle,tickBattle,migrateRun,validateRun,cells} from '../dist/engine.mjs';

const closeAdj=(actual,expected,message='')=>assert.ok(Math.abs(actual-expected)<1e-8,`${message}: ${actual} != ${expected}`);
function adjacencyFixture(type='jinglingbell'){
 const run=createRun('sword',23);run.items=[];run.cols=8;run.rows=8;run.stage=6;run.phase='prepare';
 run.bagExpansions=[{stage:2,method:'shop',axis:'row',cost:24},{stage:3,method:'rest',axis:'col',cost:0},{stage:5,method:'shop',axis:'row',cost:40},{stage:6,method:'rest',axis:'col',cost:0}];
 const weapon=addItem(run,'sword');assert.ok(moveItem(run,weapon.uid,3,2));
 const arts=[[4,2,1],[4,4,1],[1,4,0]].map(p=>{const a=addItem(run,'swordbook');assert.ok(moveItem(run,a.uid,...p));return a;});
 const support=addItem(run,type),position=type==='jinglingbell'?[5,2,3]:[5,3,1];assert.ok(moveItem(run,support.uid,...position));
 assert.deepEqual(arts.map(a=>adjacent(a,support)),[true,true,false]);assert.equal(buildStats(run).arts.length,3);assert.ok(validateRun(run));
 return {run,weapon,arts,support};
}
function isolatedCasts(run,actor='hero'){
 const battle=createBattle(run);
 if(actor==='enemy'){
  // Reuse the exact same legal build on the other side of the shared resolver.
  const copy=JSON.parse(JSON.stringify(battle));delete copy.rival;delete copy.enemyLoadout;
  copy.actor='enemy';battle.rival=copy;
 }
 const source=actor==='hero'?battle:battle.rival,target=actor==='hero'?battle.rival:battle;
 battle.hp=battle.maxHp=battle.enemyHp=battle.enemyMaxHp=10000;source.hp=source.maxHp=target.hp=target.maxHp=10000;
 battle.shield=battle.enemyShield=source.shield=target.shield=0;source.shieldPools=target.shieldPools=[];
 source.energy=source.maxEnergy=1000;target.nextAttack=source.nextAttack=10000;target.skillReady=target.skillReady.map(()=>10000);
 source.bonuses.crit=0;target.bonuses.armor=target.bonuses.dodge=target.bonuses.thorns=0;
 for(const a of source.arts)a.effectiveBonuses.crit=0;
 for(let n=0;n<450;n++)tickBattle(battle);
 return {battle,source,casts:battle.events.filter(e=>e.actor===actor&&e.effect==='skill')};
}

test('every adjacent active art receives its own bonus, unrelated active arts do not',()=>{
 for(const type of ['prayerbeads','jinglingbell']){
  const {run,arts,support,weapon}=adjacencyFixture(type),s=buildStats(run),key=type==='prayerbeads'?'artPower':'cooldown',value=ITEMS[type].bonuses[key];
  assert.deepEqual(s.links.filter(([uid])=>uid===support.uid),arts.slice(0,2).map(a=>[support.uid,a.uid]));
  closeAdj(s.bonuses[key],0);closeAdj(s.itemBonuses[weapon.uid][key],0);
  for(const [n,a]of arts.entries()){
   closeAdj(s.itemBonuses[a.uid][key],n<2?value:0);
   assert.equal((s.itemBonusSources[a.uid][key]||[]).includes(support.uid),n<2);
  }
  for(const actor of ['hero','enemy']){
   const {casts}=isolatedCasts(run,actor);
   for(const [n,a]of arts.entries()){
    const events=casts.filter(e=>e.sourceUid===a.uid);assert.ok(events.length>=3);
    for(const e of events){closeAdj(e.value,18*(type==='prayerbeads'&&n<2?1.2:1));assert.equal(e.sourceUids.includes(support.uid),n<2);}
    const expected=5*(type==='jinglingbell'&&n<2?.85:1);
    for(let k=1;k<events.length;k++)assert.ok(events[k].t-events[k-1].t>=expected-.001&&events[k].t-events[k-1].t<=expected+.051,`${actor} ${type} art${n} cooldown`);
   }
  }
 }
});

test('shared inner power stacks per distinct active neighbor, never per touching edge',()=>{
 const {run,arts,support}=adjacencyFixture('inkstone');let stats=buildStats(run);
 closeAdj(stats.bonuses.energyRegen,.8);closeAdj(stats.globalContributions[support.uid].energyRegen,.8);
 assert.deepEqual(stats.bonusSources.energyRegen,[support.uid]);
 // Two or more cell contacts to one book still represent one support target.
 const targetCells=new Set(cells(arts[0]).map(c=>c.join(',')));let contacts=0;
 for(const [x,y]of cells(support))for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]])if(targetCells.has(`${x+dx},${y+dy}`))contacts++;
 assert.ok(contacts>=1);
 moveItem(run,arts[1].uid,null,null);stats=buildStats(run);closeAdj(stats.bonuses.energyRegen,.4);
 const b=createBattle(run);b.energy=0;b.nextAttack=10000;b.skillReady=b.skillReady.map(()=>10000);for(let n=0;n<20;n++)tickBattle(b);closeAdj(b.energy,1.65);
 moveItem(run,support.uid,null,null);closeAdj(buildStats(run).bonuses.energyRegen,0);
});

test('multiple contacts with the same shaped item grant exactly one bonus per source',()=>{
 const run=createRun('sword',3);run.items=[];
 const weapon=addItem(run,'sword'),a=addItem(run,'swordguard'),support=addItem(run,'prayerbeads');
 assert.ok(moveItem(run,weapon.uid,2,1));assert.ok(moveItem(run,a.uid,3,1));
 let found=false;
 for(let rot=0;rot<4&&!found;rot++)for(let y=0;y<6&&!found;y++)for(let x=0;x<6&&!found;x++){
  if(!moveItem(run,support.uid,x,y,rot))continue;
  const occupied=new Set(cells(a).map(c=>c.join(',')));let contacts=0;
  for(const [cx,cy]of cells(support))for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]])if(occupied.has(`${cx+dx},${cy+dy}`))contacts++;
  if(contacts>=2)found=true;
 }
 assert.ok(found);const stats=buildStats(run);assert.equal(stats.links.filter(([uid])=>uid===support.uid).length,1);closeAdj(stats.itemBonuses[a.uid].artPower,.2);
});

test('inactive and stored arts grant no support effect; global gear does not multiply',()=>{
 const {run,arts,support}=adjacencyFixture('inkstone');
 const armor=addItem(run,'armor');assert.ok(autoPlace(run,armor.uid));let stats=buildStats(run);closeAdj(stats.shield,26);closeAdj(stats.bonuses.armor,2);
 moveItem(run,arts[0].uid,null,null);moveItem(run,arts[1].uid,null,null);stats=buildStats(run);closeAdj(stats.bonuses.energyRegen,0);assert.ok(stats.inactive.some(i=>i.uid===support.uid));
 const inactive=addItem(run,'swordbook');assert.ok(moveItem(run,inactive.uid,6,4,1));assert.ok(adjacent(inactive,support));assert.ok(!adjacent(inactive,run.items.find(i=>i.type==='sword')));closeAdj(buildStats(run).bonuses.energyRegen,0);
 closeAdj(buildStats(run).shield,26);closeAdj(buildStats(run).bonuses.armor,2);
});

test('weapon supports retain their documented basic attack and connected art bonuses',()=>{
 const run=createRun('sword',11),s=buildStats(run),stone=run.items.find(i=>i.type==='stone');
 closeAdj(s.bonuses.damage,0);closeAdj(s.itemBonuses[s.weapon.uid].damage,.25);closeAdj(s.itemBonuses[s.arts[0].uid].damage,.25);
 assert.ok(s.itemBonusSources[s.arts[0].uid].damage.includes(stone.uid));
});

test('legacy battle snapshots acquire per-art bonuses without losing ongoing state',()=>{
 const {run,arts,support}=adjacencyFixture();run.phase='combat';run.battle=createBattle(run);for(let n=0;n<45;n++)tickBattle(run.battle);
 const old=JSON.parse(JSON.stringify(run));
 for(const f of [old.battle,old.battle.rival]){delete f.itemBonusVersion;for(const a of [f.weapon,...f.arts,...f.medicines]){delete a.effectiveBonuses;delete a.effectiveBonusSources;}}
 old.battle.bonuses.cooldown=.15;old.battle.bonusSources.cooldown=[support.uid];
 assert.ok(validateRun(old));const before=JSON.stringify(old),restored=migrateRun(old);assert.ok(restored);assert.equal(JSON.stringify(old),before);
 for(const key of ['hp','enemyHp','shield','enemyShield','energy','enemyEnergy','t','rng','nextAttack','nextEnemy','nextEnergy','nextPoison','eventId'])assert.deepEqual(restored.battle[key],old.battle[key],key);
 assert.deepEqual(restored.battle.skillReady,old.battle.skillReady);assert.deepEqual(restored.battle.events,old.battle.events);
 assert.equal(restored.battle.itemBonusVersion,1);closeAdj(restored.battle.bonuses.cooldown,0);
 for(const [n,a]of arts.entries())closeAdj(restored.battle.arts.find(x=>x.uid===a.uid).effectiveBonuses.cooldown,n<2?.15:0);
 assert.ok(validateRun(restored));assert.deepEqual(migrateRun(restored),restored);
 const resumed=JSON.parse(JSON.stringify(restored));for(let n=0;n<100;n++){tickBattle(restored.battle);tickBattle(resumed.battle);}assert.deepEqual(restored.battle,resumed.battle);
});

test('malformed per-item combat modifiers and unowned sources are rejected on reload',()=>{
 const {run}=adjacencyFixture();run.phase='combat';run.battle=createBattle(run);assert.ok(validateRun(run));
 for(const corrupt of [
  r=>{r.battle.arts[0].effectiveBonuses.cooldown='0.15';},
  r=>{delete r.battle.arts[0].effectiveBonuses.artPower;},
  r=>{r.battle.arts[0].effectiveBonusSources.cooldown=['i99999'];},
  r=>{r.battle.rival.weapon.effectiveBonusSources.damage='bad';},
  r=>{r.battle.itemBonusVersion=999;}
 ]){const copy=JSON.parse(JSON.stringify(run));corrupt(copy);assert.equal(validateRun(copy),false);assert.equal(migrateRun(copy),null);}
});
