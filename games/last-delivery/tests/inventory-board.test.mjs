import test from 'node:test';
import assert from 'node:assert/strict';
import {localCells,dimensions} from '../dist/grid.mjs';
import {renderFootprint,footprintText,renderBagItem,renderReadOnlyBag} from '../dist/inventory-board.mjs';
import {renderPlacementGhost} from '../dist/inventory-ui.mjs';
import {createRun,addItem,moveItem,buildStats} from '../dist/engine.mjs';

test('shape thumbnails and placement previews preserve the defensive frame cavity',()=>{
 const item={uid:'ring',type:'ironpalm',x:2,y:1,rot:0,level:0};
 assert.equal(localCells(item).length,8);
 const mini=renderFootprint(item),ghost=renderPlacementGhost(item,2,1,0,true);
 assert.equal((mini.match(/<rect /g)||[]).length,8);assert.match(mini,/viewBox="0 0 48 36"/);assert.doesNotMatch(mini,/<rect x="13" y="13"/);
 assert.equal((ghost.match(/<rect /g)||[]).length,8);assert.doesNotMatch(ghost,/<rect x="303" y="203"/);
 assert.match(footprintText(item),/4×3 · 8칸 · 큰 감쌈/);
});

test('placed pieces expose buttons only on actual cells with one keyboard stop and one live source',()=>{
 for(const rot of [0,1,2,3]){
  const item={uid:'l-shape',type:'saber',x:1,y:2,rot,level:1},html=renderBagItem(item,{draggable:true,selected:true});
  const actual=[...html.matchAll(/data-piece-cell="(\d+),(\d+)"/g)].map(m=>[Number(m[1]),Number(m[2])]);
  assert.deepEqual(actual,localCells(item));assert.equal((html.match(/data-live-item=/g)||[]).length,1);
  assert.equal((html.match(/tabindex="0"/g)||[]).length,1);assert.equal((html.match(/draggable="true"/g)||[]).length,actual.length);
  assert.match(html,/data-live-item="hero:l-shape"/);assert.match(html,/--label-x:/);assert.match(html,/bag-piece-content/);
 }
});

test('opponent board scales to its dimensions and cannot emit player item selection actions',()=>{
 const weapon={uid:'enemy-weapon',type:'sword',x:2,y:1,rot:0,level:2};
 const art={uid:'enemy-art',type:'swordbook',x:0,y:1,rot:0,level:1};
 const loadout={cols:8,rows:7,items:[weapon,art]},stats={weapon,arts:[art],inner:null,shield:0,baseDps:6,active:[weapon.uid,art.uid],inactive:[],links:[[art.uid,weapon.uid]]};
 const html=renderReadOnlyBag(loadout,stats,{selectedUid:art.uid,title:'상대의 보따리'});
 assert.match(html,/--cols:8;--rows:7/);assert.match(html,/viewBox="0 0 800 700"/);assert.equal((html.match(/class="bag-cell"/g)||[]).length,56);
 assert.match(html,/data-live-item="enemy:enemy-weapon"/);assert.match(html,/data-enemy-item="enemy-art"/);assert.doesNotMatch(html,/\bdata-item=/);
 assert.match(html,/초식 활성 · 내공 3/);assert.match(html,/인접 조건 충족/);assert.match(html,/유운검법/);
});

test('rotated footprint dimensions in labels and preview agree with occupied cells',()=>{
 const item={uid:'hook',type:'moonblade',x:0,y:0,rot:1,level:0},{w,h}=dimensions(item);
 assert.match(footprintText(item),new RegExp(`${w}×${h} · ${localCells(item).length}칸`));
 const preview=renderPlacementGhost(item,1,2,item.rot,false),points=[...preview.matchAll(/<rect x="(\d+)" y="(\d+)"/g)].map(m=>[(Number(m[1])-103)/100,(Number(m[2])-203)/100]);
 assert.deepEqual(points,localCells(item));assert.match(preview,/placement-ghost invalid/);
});

test('opponent inspection lists every equipped weapon and inner and more than three arts',()=>{
 const run=createRun('sword',11);run.items=[];run.cols=run.rows=8;
 const put=(type,x,y,rot=0,level=0)=>{const i=addItem(run,type);i.level=level;assert.ok(moveItem(run,i.uid,x,y,rot),type);return i;};
 const weapons=[put('sword',1,1,0,1),put('sword',2,1,0,2)],arts=[put('swordbook',1,0),put('swordbook',0,1,1),put('swordbook',3,1,1),put('swordbook',3,3)],inners=[put('inneriron',5,0,1),put('innerwind',5,4)];
 const stats=buildStats(run),html=renderReadOnlyBag(run,stats,{selectedUid:arts[0].uid});
 assert.equal(stats.weapons.length,2);assert.equal(stats.inners.length,2);assert.equal(stats.arts.length,4);
 assert.match(html,/무기 <b>2개<\/b>/);assert.match(html,/심법 <b>2개<\/b>/);assert.match(html,/활성 무공 <b>4개<\/b>/);assert.doesNotMatch(html,/4\/3/);
 assert.match(html,/연결 무기 2개/);assert.match(html,/여러 무기에 닿아도 중복 발동하지 않아/);
 const line=html.split('class="enemy-loadout-line"')[1];
 assert.match(line,/청강검 \+1 · 청강검 \+2/);assert.match(line,/철벽호흡 · 유풍신공/);
 for(const item of [...weapons,...arts,...inners])assert.ok(html.includes(`data-live-item="enemy:${item.uid}"`));
 assert.doesNotMatch(html,/\bdata-item=/);
});
