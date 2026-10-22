import test from 'node:test';
import assert from 'node:assert/strict';
import {KITS} from '../dist/data.mjs';
import {FOOTPRINT_VERSION,createRun,addItem,createBattle,tickBattle,migrateRun,validateRun,inBag,rotationIndex} from '../dist/engine.mjs';

const legacy=()=>{const r=createRun('sword',17);delete r.footprintVersion;r.phase='prepare';r.items=[];r.nextId=1;return r;};
const put=(r,type,x,y,rot=0)=>Object.assign(addItem(r,type),{x,y,rot});

test('all five deployed 1.6 starter layouts migrate without losing inventory or progress',()=>{
 for(const kit of Object.keys(KITS)){
  const r=legacy(),k=KITS[kit];r.kit=kit;r.hp=83;r.gold=47;r.stage=4;
  // These coordinates are the shipped v1.6 createRun layouts, not generated
  // from the new footprint definitions under test.
  put(r,k.weapon,2,1,false);put(r,k.art,1,0,0);
  put(r,k.support,kit==='fist'?4:kit==='spear'||kit==='dart'?3:0,kit==='sword'||kit==='saber'?1:0,0);
  put(r,'medicine',0,0,false);put(r,'medicine',null,null,true);
  const before=JSON.stringify(r),restored=migrateRun(r);
  assert.ok(restored,kit);assert.ok(validateRun(restored),kit);assert.equal(JSON.stringify(r),before);
  assert.deepEqual(restored.items.map(({uid,type,level})=>({uid,type,level})),r.items.map(({uid,type,level})=>({uid,type,level})));
  assert.equal(restored.items.filter(inBag).length,4);assert.deepEqual(restored.items.at(-1),r.items.at(-1));
  for(const key of ['kit','hp','gold','stage','seed','nextId','battles'])assert.deepEqual(restored[key],r[key],`${kit}: ${key}`);
  assert.equal(restored.footprintVersion,FOOTPRINT_VERSION);assert.match(restored.migrationNotice,/형태가 개편/);
  assert.deepEqual(migrateRun(structuredClone(restored)),restored);
 }
});

test('legacy collision repair reserves unchanged slots before finding nearby room',()=>{
 const r=legacy(),weapon=put(r,'sword',0,0),changed=put(r,'swordbook',0,0),fixed=put(r,'medicine',0,3),warehouse=put(r,'poison',null,null,true);
 const restored=migrateRun(r);assert.ok(restored);assert.ok(validateRun(restored));
 assert.deepEqual(restored.items.find(i=>i.uid===weapon.uid),weapon);
 assert.deepEqual(restored.items.find(i=>i.uid===fixed.uid),fixed);
 assert.deepEqual(restored.items.find(i=>i.uid===warehouse.uid),warehouse);
 const repaired=restored.items.find(i=>i.uid===changed.uid);assert.ok(inBag(repaired));assert.notDeepEqual(repaired,changed);
 assert.match(restored.migrationNotice,/다시 배치/);
});

test('legacy edge overflow tries rotation in place before moving a long weapon',()=>{
 const r=legacy(),weapon=put(r,'sword',5,3,1),restored=migrateRun(r);assert.ok(restored);assert.ok(validateRun(restored));
 const repaired=restored.items.find(i=>i.uid===weapon.uid);
 assert.deepEqual([repaired.x,repaired.y],[5,3]);assert.equal(rotationIndex(repaired.rot)%2,0);
});

test('a piece with no remaining space is kept in storage and existing storage stays there',()=>{
 const r=legacy(),weapon=put(r,'sword',null,null,1);
 for(let y=0;y<6;y++)for(let x=0;x<6;x++)put(r,'medicine',x,y);
 const crowded=put(r,'stone',0,0),restored=migrateRun(r);assert.ok(restored);assert.ok(validateRun(restored));
 assert.equal(restored.items.length,r.items.length);assert.deepEqual(restored.items.find(i=>i.uid===weapon.uid),weapon);
 assert.equal(inBag(restored.items.find(i=>i.uid===crowded.uid)),false);assert.equal(restored.items.filter(inBag).length,36);
 assert.match(restored.migrationNotice,/1개는 창고/);
});

test('a pre-redesign battle returns to preparation with pre-battle HP and unspent inventory',()=>{
 const r=createRun('sword',23);delete r.footprintVersion;r.phase='combat';r.hp=93;r.gold=64;r.battle=createBattle(r);
 for(let n=0;n<60;n++)tickBattle(r.battle);
 const before=JSON.stringify(r),restored=migrateRun(r);assert.ok(restored);assert.ok(validateRun(restored));
 assert.equal(JSON.stringify(r),before);assert.equal(restored.phase,'prepare');assert.equal(restored.battle,null);
 assert.equal(restored.hp,93);assert.equal(restored.gold,64);assert.deepEqual(restored.battles,r.battles);
 assert.deepEqual(restored.items.map(i=>[i.uid,i.type,i.level]),r.items.map(i=>[i.uid,i.type,i.level]));
 assert.match(restored.migrationNotice,/준비 화면부터/);
});

test('current-layout battles resume exactly and malformed old metadata is rejected',()=>{
 const r=createRun('sword',29);r.phase='combat';r.battle=createBattle(r);for(let n=0;n<25;n++)tickBattle(r.battle);
 const restored=migrateRun(structuredClone(r));assert.deepEqual(restored,r);
 for(let n=0;n<20;n++){tickBattle(r.battle);tickBattle(restored.battle);}assert.deepEqual(restored.battle,r.battle);
 for(const mutate of [r=>r.items[0].x=1.2,r=>r.items[0].y=null,r=>r.items[0].uid='i999',r=>r.items[0].level=99,r=>r.gold=-5,r=>r.footprintVersion=999]){
  const bad=legacy();put(bad,'sword',0,0);mutate(bad);assert.equal(migrateRun(bad),null);
 }
 const corruptCurrent=createRun();corruptCurrent.items[1].x=corruptCurrent.items[0].x;corruptCurrent.items[1].y=corruptCurrent.items[0].y;
 assert.equal(migrateRun(corruptCurrent),null);
});
