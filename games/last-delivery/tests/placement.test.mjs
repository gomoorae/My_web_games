import test from 'node:test';
import assert from 'node:assert/strict';
import {addItem,canPlace,createRun,moveItem} from '../dist/engine.mjs';
import {findPlacement,findCellPlacement} from '../dist/placement.mjs';
import {rotationIndex} from '../dist/grid.mjs';

function emptyBag(){const run=createRun('sword',1);run.items=[];return run;}
function fillExcept(run,holes){for(let y=0;y<run.rows;y++)for(let x=0;x<run.cols;x++)if(!holes.some(p=>p[0]===x&&p[1]===y)){const i=addItem(run,'medicine');assert.equal(moveItem(run,i.uid,x,y),true);}}

test('near-edge releases snap the complete footprint inside the bag',()=>{
 const r=emptyBag(),i=addItem(r,'sword');
 for(const [x,y,rot,expected]of [[-.2,1.1,false,[0,1]],[5.2,3.2,false,[5,3]],[3.2,5.2,true,[3,5]],[4.1,5.1,true,[3,5]]]){
  const p=findPlacement(r,i.uid,x,y,rot);assert.equal(p.valid,true);assert.deepEqual([p.x,p.y],expected);assert.equal(rotationIndex(p.rot),rotationIndex(rot));assert.equal(canPlace(r,i.uid,p.x,p.y,p.rot),true);
 }
});

test('a narrow rotated hole accepts imprecise placement without silently changing orientation',()=>{
 const r=emptyBag(),i=addItem(r,'swordbook');i.rot=true;fillExcept(r,[[5,4],[5,5]]);
 const before=JSON.stringify(r),p=findPlacement(r,i.uid,5.15,4.3,true);
 assert.equal(p.valid,true);assert.deepEqual([p.x,p.y,p.rot],[5,4,1]);assert.equal(JSON.stringify(r),before);
 const unrotated=findPlacement(r,i.uid,5.15,4.3,false);assert.equal(unrotated.valid,false);assert.equal(unrotated.hasSpace,false);assert.equal(rotationIndex(unrotated.rot),0);assert.match(unrotated.reason,/2×1/);
});

test('blocked drops find the nearest open cell and never move other items',()=>{
 const r=emptyBag(),i=addItem(r,'medicine');fillExcept(r,[[3,2],[5,5]]);const before=JSON.stringify(r);
 const p=findPlacement(r,i.uid,2.1,2.1,false);
 assert.equal(p.valid,true);assert.deepEqual([p.x,p.y],[3,2]);assert.equal(p.snapped,true);assert.equal(canPlace(r,i.uid,p.x,p.y,p.rot),true);assert.equal(JSON.stringify(r),before);
});

test('placement does not teleport to distant holes and distinguishes a full bag',()=>{
 const r=emptyBag(),i=addItem(r,'medicine');fillExcept(r,[[5,5]]);
 const distant=findPlacement(r,i.uid,.1,.1,false);assert.equal(distant.valid,false);assert.equal(distant.hasSpace,true);assert.deepEqual([distant.x,distant.y],[0,0]);assert.match(distant.reason,/다른 빈 공간/);
 const blocker=addItem(r,'medicine');moveItem(r,blocker.uid,5,5);
 const full=findPlacement(r,i.uid,5,5,false);assert.equal(full.valid,false);assert.equal(full.hasSpace,false);assert.match(full.reason,/1×1/);
});

test('an item can move across its own old cells with deterministic nearest-cell ties',()=>{
 const r=emptyBag(),i=addItem(r,'sword');moveItem(r,i.uid,2,1);const before=JSON.stringify(r);
 const p=findPlacement(r,i.uid,2.1,1.6,false);assert.equal(p.valid,true);assert.deepEqual([p.x,p.y],[2,2]);assert.equal(JSON.stringify(r),before);
 const tie=findPlacement(r,i.uid,2.5,1.5,false);assert.deepEqual([tie.x,tie.y],[2,1]);assert.deepEqual(findPlacement(r,i.uid,2.5,1.5,false),tie);
});

test('tapping the bottom or right end of a long empty footprint still places the item',()=>{
 const r=emptyBag(),i=addItem(r,'sword'),before=JSON.stringify(r);
 assert.equal(findPlacement(r,i.uid,5,5,false).valid,false);
 const vertical=findCellPlacement(r,i.uid,5,5,false);assert.equal(vertical.valid,true);assert.deepEqual([vertical.x,vertical.y,vertical.rot],[5,3,0]);
 const horizontal=findCellPlacement(r,i.uid,5,5,true);assert.equal(horizontal.valid,true);assert.deepEqual([horizontal.x,horizontal.y,horizontal.rot],[3,5,1]);
 assert.deepEqual(findCellPlacement(r,i.uid,2,1,false),findPlacement(r,i.uid,2,1,false));assert.equal(JSON.stringify(r),before);
});

test('tap fallback stays inside footprints containing the tap and never jumps to unrelated holes',()=>{
 const r=emptyBag(),i=addItem(r,'sword');fillExcept(r,[[5,3],[5,4],[5,5]]);const before=JSON.stringify(r);
 const inside=findCellPlacement(r,i.uid,5,5,false);assert.equal(inside.valid,true);assert.deepEqual([inside.x,inside.y],[5,3]);
 const outside=findCellPlacement(r,i.uid,0,5,false);assert.equal(outside.valid,false);assert.equal(outside.hasSpace,true);assert.equal(JSON.stringify(r),before);
});
