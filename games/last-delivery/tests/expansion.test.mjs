import test from 'node:test';
import assert from 'node:assert/strict';
import {expansionOptions,expandBag} from '../dist/expansion.mjs';

function fixture(phase='shop',stage=2){return {phase,stage,cols:6,rows:6,gold:120,hp:71,maxHp:140,restChoice:null,items:[{uid:'i1',type:'sword',x:2,y:1,rot:false,level:0},{uid:'i2',type:'medicine',x:null,y:null,rot:true,level:0}]};}

test('shop expansion preserves placed and stored items, charges once, and survives reload',()=>{
 const r=fixture(),items=structuredClone(r.items),before=JSON.stringify(r);
 assert.deepEqual(expansionOptions(r).map(o=>[o.axis,o.cost,o.enabled,o.cols,o.rows,o.gain]),[['col',24,true,7,6,6],['row',24,true,6,7,6]]);
 assert.equal(JSON.stringify(r),before);assert.equal(expandBag(r,'col'),true);
 assert.deepEqual([r.cols,r.rows,r.gold,r.phase],[7,6,96,'shop']);assert.deepEqual(r.items,items);
 assert.deepEqual(r.bagExpansions,[{stage:2,axis:'col',method:'shop',cost:24}]);
 const reload=JSON.parse(JSON.stringify(r)),saved=JSON.stringify(reload);
 assert.equal(expandBag(reload,'row'),false);assert.equal(JSON.stringify(reload),saved);
 assert.match(expansionOptions(reload)[0].reason,/이미 한 번/);
});

test('rest expansion uses no gold or healing and leaves advancement to the engine',()=>{
 const r=fixture('rest',3);r.gold=0;
 assert.equal(expansionOptions(r,'rest')[1].cost,0);assert.equal(expandBag(r,'row','rest'),true);
 assert.deepEqual([r.cols,r.rows,r.gold,r.hp,r.maxHp,r.phase,r.restChoice],[6,7,0,71,140,'rest',null]);
 assert.deepEqual(r.bagExpansions,[{stage:3,axis:'row',method:'rest',cost:0}]);
 assert.equal(expandBag(r,'col','rest'),false);
});

test('four choices reach 8 by 8 with independent axes and increasing prices',()=>{
 const r=fixture();assert.equal(expandBag(r,'col'),true);
 r.phase='rest';r.stage=3;assert.equal(expandBag(r,'col','rest'),true);
 r.phase='shop';r.stage=5;
 const choices=expansionOptions(r);assert.equal(choices[0].enabled,false);assert.equal(choices[0].gain,0);assert.equal(choices[1].enabled,true);assert.equal(choices[1].cost,40);assert.equal(choices[1].gain,8);
 assert.equal(expandBag(r,'row'),true);assert.deepEqual([r.cols,r.rows,r.gold],[8,7,56]);
 r.phase='rest';r.stage=6;assert.equal(expandBag(r,'row','rest'),true);assert.deepEqual([r.cols,r.rows],[8,8]);
 r.phase='shop';r.stage=8;const saved=JSON.stringify(r);assert.equal(expandBag(r,'row'),false);assert.equal(expandBag(r,'col'),false);assert.equal(JSON.stringify(r),saved);
 assert.equal(r.bagExpansions.length,4);assert.ok(expansionOptions(r).every(o=>!o.enabled));
 const paid=fixture();expandBag(paid,'row');paid.stage=5;assert.equal(expansionOptions(paid)[0].cost,32);
});

test('invalid phase, stop, currency, method, size, and completed rest fail atomically',()=>{
 const invalid=[{phase:'combat'},{stage:4},{gold:23},{gold:NaN},{cols:9},{rows:5},{bagExpansions:{}},{phase:'rest',stage:3,restChoice:'heal'}];
 for(const delta of invalid){const r={...fixture(),...delta},before=structuredClone(r);assert.equal(expandBag(r,'row',r.phase==='rest'?'rest':'shop'),false);assert.deepEqual(r,before);}
 const r=fixture(),before=structuredClone(r);assert.equal(expandBag(r,'diagonal'),false);assert.equal(expandBag(r,'row','reward'),false);assert.deepEqual(r,before);
 assert.equal(expandBag(null,'row'),false);
});
