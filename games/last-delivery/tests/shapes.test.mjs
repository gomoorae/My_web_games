import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS} from '../dist/data.mjs';
import {dimensions,inBag,localCells,cells,canPlace,adjacent,rotationIndex,nextRotation,orientations} from '../dist/grid.mjs';
import {sharedEdge} from '../dist/adjacency.mjs';
import {findPlacement,findCellPlacement} from '../dist/placement.mjs';

const piece=(type,x=null,y=null,rot=0,uid=type)=>({uid,type,x,y,rot,level:0});
const board=items=>({cols:6,rows:6,items});

test('the item catalogue contains connected, varied silhouettes and honest footprint bounds',()=>{
 let irregular=0;const dimensionsSeen=new Set(),shapesSeen=new Set();
 for(const d of Object.values(ITEMS)){
  const p=piece(d.id),points=localCells(p),keys=new Set(points.map(c=>c.join(',')));
  assert.equal(points.length,keys.size);assert.ok(points.length>0);assert.equal(dimensions(p).w,d.w);assert.equal(dimensions(p).h,d.h);assert.ok(d.shapeName);
  const reached=new Set(),stack=[points[0]];
  while(stack.length){const [x,y]=stack.pop(),key=`${x},${y}`;if(reached.has(key)||!keys.has(key))continue;reached.add(key);stack.push([x-1,y],[x+1,y],[x,y-1],[x,y+1]);}
  assert.equal(reached.size,points.length,`${d.id} has disconnected occupied cells`);
  if(points.length<d.w*d.h)irregular++;
  dimensionsSeen.add(`${d.w}x${d.h}`);shapesSeen.add(JSON.stringify(points));
 }
 assert.ok(irregular>=20);assert.ok(dimensionsSeen.size>=9);assert.ok(shapesSeen.size>=16);
 assert.deepEqual(dimensions(piece('sword')),{w:1,h:3});assert.deepEqual(dimensions(piece('swordbook')),{w:2,h:1});assert.deepEqual(dimensions(piece('medicine')),{w:1,h:1});
});

test('four clockwise rotations retain real occupied cells and accept legacy boolean orientations',()=>{
 const p=piece('saber',1,1),seen=new Set();let rot=0;
 for(let n=0;n<4;n++){
  const item={...p,rot};seen.add(JSON.stringify(localCells(item)));assert.equal(localCells(item).length,4);assert.equal(cells(item).length,4);
  assert.deepEqual(dimensions(item),n%2?{w:3,h:2}:{w:2,h:3});rot=nextRotation(rot);
 }
 assert.equal(rot,0);assert.equal(seen.size,4);assert.deepEqual(orientations(p),[0,1,2,3]);
 assert.equal(rotationIndex(true),1);assert.equal(rotationIndex(false),0);assert.deepEqual(localCells({...p,rot:true}),localCells({...p,rot:1}));
 assert.deepEqual(orientations(piece('armor')),[0]);assert.deepEqual(orientations(piece('sword')),[0,1]);
});

test('a defensive frame leaves a usable cavity and activates its inner boundary',()=>{
 const ring=piece('ironpalm',1,1),med=piece('medicine'),run=board([ring,med]);
 assert.equal(localCells(ring).length,8);assert.equal(canPlace(run,med.uid,2,2),true);assert.equal(canPlace(run,med.uid,1,1),false);
 med.x=2;med.y=2;assert.equal(inBag(med),true);assert.equal(adjacent(ring,med),true);
 assert.equal(sharedEdge(ring,med).length,2);assert.equal(sharedEdge(ring,med).reduce((n,e)=>n+Math.abs(e.x2-e.x1)+Math.abs(e.y2-e.y1),0),2);
 const before=JSON.stringify(run);assert.equal(canPlace(run,ring.uid,1,1,0),true);assert.equal(JSON.stringify(run),before);
 const glove=piece('jadeglove');run.items=[ring,glove];assert.equal(canPlace(run,glove.uid,2,1),true);Object.assign(glove,{x:2,y:1});assert.equal(adjacent(ring,glove),true);
});

test('concave sides connect only on real cell edges and diagonal corners remain separate',()=>{
 const tee=piece('swordguard',1,1),med=piece('medicine',2,2);
 assert.equal(adjacent(tee,med),true);assert.equal(sharedEdge(tee,med).length,2);
 const sword=piece('sword',0,0),diagonal=piece('medicine',1,3);
 assert.equal(adjacent(sword,diagonal),false);assert.deepEqual(sharedEdge(sword,diagonal),[]);
 const run=board([tee,piece('medicine')]);assert.equal(canPlace(run,'medicine',2,2),true);assert.equal(canPlace(run,'medicine',1,2),false);
 assert.equal(canPlace(run,tee.uid,5,4,0),false);
});

test('placement preserves 180 and 270 degree rotations and tap fallback cannot target a hole',()=>{
 const lance=piece('dragonlance'),allowed=new Set(localCells(lance).map(c=>c.join(','))),run=board([lance]);
 for(let y=0;y<6;y++)for(let x=0;x<6;x++)if(!allowed.has(`${x},${y}`))run.items.push(piece('medicine',x,y,0,`m${x}-${y}`));
 const before=JSON.stringify(run);
 const occupiedTip=findCellPlacement(run,lance.uid,1,3,0);assert.equal(occupiedTip.valid,true);assert.deepEqual([occupiedTip.x,occupiedTip.y],[0,0]);
 const emptyCorner=findCellPlacement(run,lance.uid,1,2,0);assert.equal(emptyCorner.valid,false);assert.equal(emptyCorner.hasSpace,true);
 assert.equal(JSON.stringify(run),before);
 const open=board([piece('saber')]);for(const rot of [2,3]){const p=findPlacement(open,'saber',2.2,2.2,rot);assert.equal(p.valid,true);assert.equal(p.rot,rot);assert.equal(canPlace(open,'saber',p.x,p.y,p.rot),true);}
});
