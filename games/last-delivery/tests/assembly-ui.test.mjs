import test from 'node:test';
import assert from 'node:assert/strict';
import {createRun,buildStats} from '../dist/engine.mjs';
import {inventoryConnections} from '../dist/adjacency.mjs';
import {renderAssemblyCard,renderAssemblyGuide} from '../dist/assembly-ui.mjs';
import {ASSEMBLIES,ASSEMBLY_STYLES} from '../dist/assemblies.mjs';

test('assembly illustrations recalculate live activation instead of implying a set bonus',()=>{
 const run={...createRun('sword',1),id:'test',title:'검 조립',description:'배치에 따라 달라져.',tradeoff:'공간을 바꾸면 연결도 달라져.'};
 const original=structuredClone(run),connected=inventoryConnections(run),active=buildStats(run).arts.length;
 assert.ok(connected.length>0);assert.ok(active>0);
 const html=renderAssemblyCard(run);
 assert.match(html,new RegExp(`활성 무공 <b>${active}개</b>`));
 assert.match(html,new RegExp(`유효 연결 <b>${connected.length}개</b>`));
 assert.deepEqual(run,original,'reading an example must never arrange the player inventory');
 const book=run.items.find(i=>i.type==='swordbook');book.x=null;book.y=null;
 const detached=renderAssemblyCard(run);
 assert.match(detached,/활성 무공 <b>0개<\/b>/);
 assert.ok(!detached.includes(`data-relation="${book.uid}:`),'a detached art must not display a working connection');
});

test('every guide family exposes its examples and keeps the other families out of the view',()=>{
 for(const family of ASSEMBLY_STYLES){
  const html=renderAssemblyGuide(family.id),expected=ASSEMBLIES.filter(a=>a.family===family.id);
  assert.ok(expected.length>=2,family.id+' needs a real alternative');
  for(const example of ASSEMBLIES)assert.equal(html.includes(`data-assembly="${example.id}"`),expected.includes(example));
  assert.match(html,/세트 보너스는 없어/);
  assert.match(html,/내공 소모·재사용 시간/);
 }
});
