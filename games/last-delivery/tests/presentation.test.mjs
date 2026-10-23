import test from 'node:test';
import assert from 'node:assert/strict';
import {ITEMS,SCENES} from '../dist/data.mjs';
import {createRun,addItem,moveItem,buildStats} from '../dist/engine.mjs';
import {sharedEdge,inventoryConnections,describePlacementConnections} from '../dist/adjacency.mjs';
import {renderInventoryConnections,renderConnectionReadout} from '../dist/inventory-ui.mjs';
import {renderStory,renderStoryRecord} from '../dist/cutscene.mjs';

test('shared contacts follow rotated rectangles and never connect diagonal corners',()=>{
 const a={type:'sword',x:1,y:1,rot:true},b={type:'stone',x:1,y:2,rot:false};
 assert.deepEqual(sharedEdge(a,b),[{x1:1,y1:2,x2:3,y2:2}]);
 assert.deepEqual(sharedEdge(a,{...b,x:4,y:2}),[]);
 const vertical={type:'sword',x:2,y:1,rot:false};
 assert.deepEqual(sharedEdge(vertical,{type:'medicine',x:3,y:2,rot:false}),[{x1:3,y1:2,x2:3,y2:3}]);
});

test('visual links represent actual active effects and exclude global armor contacts',()=>{
 const r=createRun('sword',3),armor=addItem(r,'armor');
 assert.equal(moveItem(r,armor.uid,3,1),true);
 const links=inventoryConnections(r);
 assert.equal(links.length,2);
 assert.ok(links.every(l=>l.sourceUid!==armor.uid&&l.targetUid!==armor.uid));
 assert.match(links.find(l=>l.kind==='support').effect,/25%/);
 assert.equal(links.filter(l=>l.kind==='art').length,buildStats(r).arts.length);
});

test('moving a weapon previews indirect support deactivation without mutating the run',()=>{
 const r=createRun('sword',1);for(const i of r.items){i.x=null;i.y=null;}
 const weapon=r.items.find(i=>i.type==='sword'),book=r.items.find(i=>i.type==='swordbook'),beads=addItem(r,'prayerbeads');
 assert.equal(moveItem(r,weapon.uid,2,2),true);
 assert.equal(moveItem(r,book.uid,0,2),true);
 assert.equal(moveItem(r,beads.uid,0,1),true);
 assert.equal(inventoryConnections(r).length,2);
 const before=JSON.stringify(r),p=describePlacementConnections(r,weapon.uid,5,2,false);
 assert.equal(p.valid,true);assert.equal(p.connections.length,0);assert.equal(p.lost.length,2);assert.equal(p.total,0);
 assert.equal(JSON.stringify(r),before);
 const bad=describePlacementConnections(r,weapon.uid,0,2,false);assert.equal(bad.valid,false);assert.equal(JSON.stringify(r),before);
});

test('every story page uses a dedicated scene painting with readable dialogue and manual navigation',()=>{
 const arts=new Set();let pages=0;
 for(const [scene,lines] of Object.entries(SCENES))for(let sceneIndex=0;sceneIndex<lines.length;sceneIndex++){
  const p=lines[sceneIndex],html=renderStory({scene,sceneIndex});
  assert.equal((html.match(/role="img"/g)||[]).length,1);
  assert.ok(html.includes(`story-art-${p.art}`));arts.add(p.art);
  assert.match(html,/<\/figure>\s*<article class="scene-dialogue/);
  assert.doesNotMatch(html,/scene-portrait-atlas|scene-body-atlas|style="--scene-x/);
  for(const action of ['next-story','previous-story','skip-story','story-record'])assert.ok(html.includes(`data-action="${action}"`));
  assert.ok(html.includes(p.location));assert.ok(html.includes(p.time));assert.ok(html.includes(p.beat));
  assert.equal(html.includes('scene-dialogue is-narration'),p.who==='이야기');
  if(sceneIndex===0)assert.match(html,/data-action="previous-story" disabled/);
  if(sceneIndex===lines.length-1)assert.match(html,/계속하기/);
  pages++;
 }
 assert.ok(pages>=48);assert.ok(arts.size>=14);
});

test('replay navigation cannot call gameplay actions, and records expose only supplied chapters',()=>{
 const html=renderStory({scene:'ending',sceneIndex:SCENES.ending.length-1},{replay:true});
 assert.match(html,/data-action="next-replay"/);assert.match(html,/data-action="previous-replay"/);assert.match(html,/data-action="close-replay"/);
 assert.doesNotMatch(html,/data-action="(?:next-story|skip-story|previous-story)"/);
 const record=renderStoryRecord(['opening','reveal']);
 assert.match(record,/data-replay-scene="opening"/);assert.match(record,/data-replay-scene="reveal"/);
 assert.doesNotMatch(record,/data-replay-scene="(?:midpoint|proof|boss|ending)"/);
 assert.doesNotMatch(record,/\[object Object\]/);
 assert.match(renderStoryRecord([]),/새 표행을 시작하면/);
});

function twoArtContacts(supportType='inkstone'){
 const run=createRun('sword',1);run.items=[];
 const weapon=addItem(run,'sword'),first=addItem(run,'swordbook'),second=addItem(run,'cloudstep'),support=addItem(run,supportType);
 for(const [item,x,y,rot]of [[weapon,2,2,0],[first,0,2,0],[second,0,4,1],[support,0,3,0]])assert.equal(moveItem(run,item.uid,x,y,rot),true);
 return {run,weapon,first,second,support};
}

test('every adjacent active art gets a visible support relation and its own numeric label',()=>{
 const {run,first,second,support}=twoArtContacts(),stats=buildStats(run),relations=inventoryConnections(run,stats),own=relations.filter(r=>r.sourceUid===support.uid);
 assert.equal(stats.arts.length,2);assert.equal(own.length,2);assert.deepEqual(new Set(own.map(r=>r.targetUid)),new Set([first.uid,second.uid]));
 for(const relation of own){assert.match(relation.effect,/이 연결로 공통 내공 회복 \+0\.4\/초/);assert.ok(relation.segments.length>0);}
 const svg=renderInventoryConnections(relations,support.uid),readout=renderConnectionReadout(run,stats,relations,support.uid);
 for(const relation of own)assert.ok(svg.includes(`data-relation="${relation.id}"`));
 assert.equal((svg.match(/link-support focused/g)||[]).length,2);
 assert.match(readout,/무공 2개에 적용/);assert.match(readout,/공통 내공 회복 합계 \+0\.8\/초/);assert.match(readout,/같은 종류의 보조품을 여러 개 놓으면 각각 합산해/);assert.match(readout,/보조품 한 개가 한 무공과 여러 면으로 닿은 경우에는 한 번/);
 assert.ok(readout.includes(`data-item="${first.uid}"`));assert.ok(readout.includes(`data-item="${second.uid}"`));
});

test('moving a support previews only the lost or gained art contact and leaves the other active',()=>{
 const {run,first,second,support}=twoArtContacts(),before=JSON.stringify(run),single=describePlacementConnections(run,support.uid,0,1,0);
 assert.equal(single.valid,true);assert.equal(single.connections.length,1);assert.equal(single.connections[0].targetUid,first.uid);assert.equal(single.lost.length,1);assert.equal(single.lost[0].targetUid,second.uid);assert.equal(single.gained.length,0);assert.equal(JSON.stringify(run),before);
 assert.equal(moveItem(run,support.uid,0,1,0),true);
 const both=describePlacementConnections(run,support.uid,0,3,0);
 assert.equal(both.valid,true);assert.equal(both.connections.length,2);assert.equal(both.gained.length,1);assert.equal(both.gained[0].targetUid,second.uid);assert.equal(both.lost.length,0);
});

test('art damage support labels each linked art and excludes unconnected arts from its readout',()=>{
 const {run,first,second,support}=twoArtContacts('prayerbeads'),third=addItem(run,'swordpierce');
 assert.equal(moveItem(run,third.uid,3,2,1),true);
 const stats=buildStats(run),relations=inventoryConnections(run,stats),own=relations.filter(r=>r.sourceUid===support.uid);
 assert.equal(stats.arts.length,3);assert.equal(own.length,2);assert.ok(own.every(r=>r.targetUid!==third.uid));
 assert.ok(own.every(r=>r.effect==='이 무공 피해 +20%'));
 const readout=renderConnectionReadout(run,stats,relations,support.uid);
 assert.match(readout,/무공 2개에 적용/);assert.ok(readout.includes(`data-item="${first.uid}"`));assert.ok(readout.includes(`data-item="${second.uid}"`));assert.ok(!readout.includes(`data-item="${third.uid}"`));
});

function twinWeaponContacts(){
 const run=createRun('sword',3);run.items=[];
 const first=addItem(run,'sword'),second=addItem(run,'sword'),art=addItem(run,'swordbook'),stone=addItem(run,'stone');
 for(const [item,x,y]of [[first,1,1],[second,2,1],[art,1,0],[stone,1,4]])assert.ok(moveItem(run,item.uid,x,y,0));
 return {run,first,second,art,stone};
}
test('one physical art displays every matching weapon connection without implying repeated casts',()=>{
 const {run,first,second,art}=twinWeaponContacts(),stats=buildStats(run),relations=inventoryConnections(run,stats),own=relations.filter(r=>r.sourceUid===art.uid);
 assert.equal(stats.arts.length,1);assert.equal(own.length,2);assert.deepEqual(new Set(own.map(r=>r.targetUid)),new Set([first.uid,second.uid]));
 const readout=renderConnectionReadout(run,stats,relations,art.uid);assert.match(readout,/무기 2개에 연결/);assert.match(readout,/여러 무기에 닿아도 중복 발동하지 않아/);
 for(const weapon of [first,second])assert.ok(readout.includes(`data-item="${weapon.uid}"`));
 const next=describePlacementConnections(run,second.uid,4,1,0);assert.equal(next.valid,true);assert.ok(next.lost.some(r=>r.sourceUid===art.uid&&r.targetUid===second.uid));assert.ok(next.allConnections.some(r=>r.sourceUid===art.uid&&r.targetUid===first.uid));
});
test('weapon support shows every recipient and clarifies shared-art deduplication',()=>{
 const {run,first,second,stone}=twinWeaponContacts(),stats=buildStats(run),relations=inventoryConnections(run,stats),own=relations.filter(r=>r.sourceUid===stone.uid);
 assert.equal(own.length,2);const readout=renderConnectionReadout(run,stats,relations,stone.uid);
 assert.match(readout,/무기 2개에 적용/);assert.match(readout,/같은 종류의 보조품을 여러 개 놓으면 각각 합산해/);assert.match(readout,/보조품 한 개에서 여러 경로로 이어진 효과는 대상마다 한 번 계산해/);
 for(const weapon of [first,second])assert.ok(readout.includes(`data-item="${weapon.uid}"`));
 assert.equal((renderInventoryConnections(relations,stone.uid).match(/link-support focused/g)||[]).length,2);
});
