import test from 'node:test';
import assert from 'node:assert/strict';
import {ASSEMBLIES,ASSEMBLY_STYLES} from '../dist/assemblies.mjs';
import {ITEMS} from '../dist/data.mjs';
import {cells,canPlace} from '../dist/grid.mjs';
import {buildStats} from '../dist/engine.mjs';

const example=id=>structuredClone(ASSEMBLIES.find(e=>e.id===id));
const byType=(run,type)=>run.items.find(i=>i.type===type);
const bonus=(run,type,key)=>buildStats(run).itemBonuses[byType(run,type).uid][key];
const close=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-9,`${actual} != ${expected}`);

test('every assembly is a compact legal arrangement with all equipment active',()=>{
 assert.equal(ASSEMBLY_STYLES.length,6);
 assert.equal(ASSEMBLIES.length,12);
 assert.equal(new Set(ASSEMBLIES.map(e=>e.id)).size,ASSEMBLIES.length);
 for(const style of ASSEMBLY_STYLES){
  assert.ok(style.name&&style.principle&&style.tradeoff);
  const pair=ASSEMBLIES.filter(e=>e.family===style.id);
  assert.equal(pair.length,2,`${style.id} needs two alternatives`);
  assert.notDeepEqual(pair[0].items.map(i=>i.type).sort(),pair[1].items.map(i=>i.type).sort());
 }
 for(const run of ASSEMBLIES){
  assert.ok(run.cols<=6&&run.rows<=6);
  assert.ok(run.title&&run.description&&run.tradeoff);
  assert.equal(new Set(run.items.map(i=>i.uid)).size,run.items.length);
  for(const i of run.items)assert.ok(canPlace(run,i.uid,i.x,i.y,i.rot),`${run.id}: ${i.type} overlaps or overflows`);
  const stats=buildStats(run);
  assert.deepEqual(stats.errors,[],run.id);
  assert.deepEqual(stats.inactive,[],run.id);
  assert.ok(stats.arts.length>0,run.id);
  assert.ok(run.items.flatMap(cells).length/(run.cols*run.rows)>=.75,`${run.id} is too sparse`);
 }
});

test('the sword choices trade shared inner power for basic speed and critical support',()=>{
 const circulation=example('sword-circulation'),stats=buildStats(circulation);
 close(stats.bonuses.energyRegen,.8);
 assert.equal(stats.arts.length,2);
 assert.equal(stats.links.filter(([uid])=>uid===byType(circulation,'inkstone').uid).length,2);
 const critical=example('sword-critical');
 close(bonus(critical,'moonblade','speed'),.18);
 close(bonus(critical,'moonblade','crit'),.15);
 close(bonus(critical,'swordpierce','crit'),.15);
 close(buildStats(critical).bonuses.energyRegen,0);
});

test('hooked saber arrangements support either bleed pressure or execution with leech',()=>{
 const bleed=example('saber-bleed');
 assert.equal(bleed.items.flatMap(cells).length,9);
 close(bonus(bleed,'saber','bleed'),1);
 close(bonus(bleed,'saber','lifesteal'),0);
 const execution=example('saber-execution');
 close(bonus(execution,'bloodsaber','lifesteal'),.06);
 close(bonus(execution,'saberexecute','lifesteal'),.06);
 assert.ok(ITEMS.saberexecute.cost>ITEMS.saberbleed.cost);
});

test('both spear formations share piercing support across their connected arts',()=>{
 for(const id of ['spear-rail','spear-coil']){
  const run=example(id),stats=buildStats(run);
  assert.equal(stats.arts.length,2);
  for(const attack of [...stats.weapons,...stats.arts])close(stats.itemBonuses[attack.uid].pierce,2);
 }
 const rail=example('spear-rail'),coil=example('spear-coil');
 assert.equal(rail.items.flatMap(cells).length,rail.cols*rail.rows);
 assert.ok(coil.items.some(i=>ITEMS[i.type].kind==='art'&&ITEMS[i.type].shield>0));
 assert.ok(!rail.items.some(i=>ITEMS[i.type].kind==='art'&&ITEMS[i.type].shield>0));
});

test('dart sockets can switch between mixed statuses and stacked duplicate supports',()=>{
 const run=example('dart-status');
 close(bonus(run,'darts','poison'),1);close(bonus(run,'darts','bleed'),1);
 byType(run,'redthread').type='poison';
 assert.ok(run.items.every(i=>canPlace(run,i.uid,i.x,i.y,i.rot)));
 close(bonus(run,'darts','poison'),2);close(bonus(run,'darts','bleed'),0);
 const control=buildStats(example('dart-control'));
 assert.equal(control.arts.length,2);
 assert.ok(control.arts.some(i=>ITEMS[i.type].stun>0));
});

test('fist recovery remains global while the staircase burst uses local damage support',()=>{
 const healing=example('fist-recovery');
 close(bonus(healing,'fistheal','healPower'),.35);
 close(bonus(healing,'medicine','healPower'),.35);
 const herb=byType(healing,'herbcase');
 assert.ok(!buildStats(healing).links.some(([uid])=>uid===herb.uid));
 const burst=example('fist-burst');
 close(bonus(burst,'gauntlet','damage'),.25);
 close(bonus(burst,'fistshock','damage'),.25);
 close(bonus(burst,'fistshock','healPower'),0);
});

test('the large protective recess admits a real weapon and activates the surrounding art',()=>{
 const run={cols:4,rows:3,items:[
  {uid:'glove',type:'jadeglove',x:1,y:0,rot:0,level:0},
  {uid:'guard',type:'ironpalm',x:0,y:0,rot:0,level:0}
 ]};
 assert.ok(run.items.every(i=>canPlace(run,i.uid,i.x,i.y,i.rot)));
 assert.equal(run.items.flatMap(cells).length,12);
 assert.deepEqual(buildStats(run).links,[['guard','glove']]);
});

test('a shared whetstone strengthens both weapon families and their arts without double counting',()=>{
 const run=example('mixed-shared-stone'),stats=buildStats(run);
 assert.equal(stats.weapons.length,2);assert.equal(stats.arts.length,2);
 const support=byType(run,'stone');
 assert.equal(stats.links.filter(([uid])=>uid===support.uid).length,2);
 for(const attack of [...stats.weapons,...stats.arts])close(stats.itemBonuses[attack.uid].damage,.25);
});

test('mixed arts share three real inkstone contacts while a bridge art still has one cast slot',()=>{
 const run=example('mixed-shared-energy'),stats=buildStats(run),bridge=byType(run,'cloudstep'),inkstone=byType(run,'inkstone');
 assert.equal(stats.artWeapons[bridge.uid].length,2);
 assert.equal(stats.arts.filter(i=>i.uid===bridge.uid).length,1);
 assert.equal(stats.links.filter(([uid])=>uid===inkstone.uid).length,3);
 close(stats.bonuses.energyRegen,1.2);
 // Remove one active neighbor: extra touching edges never replace that lost connection.
 byType(run,'fistbook').x=null;byType(run,'fistbook').y=null;
 close(buildStats(run).bonuses.energyRegen,.8);
});
