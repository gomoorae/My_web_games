import test from 'node:test';
import assert from 'node:assert/strict';
import {SCENES,SCENE_TITLES,SCENE_SUMMARIES,STORY_VERSION,DELIVERY_CONTRACT} from '../dist/data.mjs';
import {createRun,createBattle,tickBattle,settleBattle,advanceStory,availableStoryScenes,deliverySummary,migrateRun,validateRun} from '../dist/engine.mjs';

function finishScene(run){let pages=0;while(run.phase==='story'){assert.ok(pages++<30);assert.equal(advanceStory(run),true);}return pages;}
function finalVictory(){
 const run=createRun('sword',29);run.stage=9;run.phase='combat';run.scene='boss';
 run.battles=Array.from({length:9},(_,stage)=>({stage,status:'won',casts:1,time:10}));
 run.battle=createBattle(run);run.battle.enemyHp=0;run.battle.rival.hp=0;tickBattle(run.battle);
 assert.equal(run.battle.status,'won');assert.equal(settleBattle(run),true);assert.equal(run.phase,'story');assert.equal(run.scene,'ending');
 return run;
}

test('the signed advance is the only contract money available before delivery',()=>{
 const run=createRun('spear',81);assert.equal(run.gold,30);assert.equal(DELIVERY_CONTRACT.total,DELIVERY_CONTRACT.advance+DELIVERY_CONTRACT.balance);
 run.gold-=12;finishScene(run);assert.equal(run.gold,18);assert.equal(run.deliveryReceipt,null);
 assert.deepEqual([deliverySummary(run).status,deliverySummary(run).paidBalance,deliverySummary(run).paidTotal],['pending',0,30]);
});

test('a final victory and a reload in its ending award the promised balance exactly once',()=>{
 const run=finalVictory(),before=run.gold;assert.equal(run.cleared,true);assert.equal(run.deliveryReceipt,null);
 advanceStory(run);advanceStory(run);const saved=JSON.parse(JSON.stringify(run)),restored=migrateRun(saved);
 assert.equal(restored.sceneIndex,2);assert.equal(restored.gold,before);assert.equal(validateRun(restored),true);
 finishScene(restored);assert.equal(restored.phase,'complete');assert.equal(restored.gold,before+170);
 assert.deepEqual(deliverySummary(restored),{...DELIVERY_CONTRACT,status:'settled',received:true,paidBalance:170,paidTotal:200});
 assert.equal(validateRun(restored),true);assert.equal(advanceStory(restored),false);assert.equal(settleBattle(restored),false);
 const loaded=migrateRun(JSON.parse(JSON.stringify(restored)));assert.equal(loaded.gold,before+170);assert.deepEqual(loaded.deliveryReceipt,restored.deliveryReceipt);
 // A stale UI cursor may retry completion; the stored receipt is the barrier.
 loaded.phase='story';loaded.scene='ending';loaded.sceneIndex=SCENES.ending.length-1;assert.equal(advanceStory(loaded),true);assert.equal(loaded.gold,before+170);
});

test('skipping the ending uses the same signed delivery and payment as reading it',()=>{
 const read=finalVictory(),skipped=structuredClone(read);
 for(let page=0;page<SCENES.ending.length;page++)assert.equal(advanceStory(read),true);
 finishScene(skipped);assert.deepEqual(skipped,read);assert.equal(skipped.deliveryReceipt.receiver,'청하성 구휼소');assert.equal(skipped.deliveryReceipt.payer,'청하상회');
 const unfinished=createRun();unfinished.scene='ending';finishScene(unfinished);assert.equal(unfinished.gold,30);assert.equal(unfinished.deliveryReceipt,null);
});

test('older completed saves retain their exact funds and an explicitly unknown payment history',()=>{
 const old=finalVictory();finishScene(old);old.gold=47;delete old.storyVersion;delete old.deliveryReceipt;
 const before=JSON.stringify(old),restored=migrateRun(old);assert.ok(restored);assert.equal(JSON.stringify(old),before);assert.equal(restored.gold,47);
 assert.deepEqual(restored.deliveryReceipt,{version:STORY_VERSION,status:'legacy',balance:0,total:null});
 assert.equal(deliverySummary(restored).status,'legacy');assert.equal(deliverySummary(restored).paidBalance,null);assert.equal(deliverySummary(restored).paidTotal,null);
 assert.equal(advanceStory(restored),false);assert.deepEqual(migrateRun(structuredClone(restored)),restored);assert.equal(validateRun(restored),true);
});

test('older in-progress chapters restart their rewritten scene without changing gameplay state',()=>{
 const old=createRun('dart',319);delete old.storyVersion;delete old.deliveryReceipt;old.scene='midpoint';old.sceneIndex=4;old.stage=6;old.gold=51;old.hp=83;
 const before=JSON.stringify(old),restored=migrateRun(old);assert.ok(restored);assert.equal(JSON.stringify(old),before);
 assert.equal(restored.sceneIndex,0);assert.equal(restored.scene,'midpoint');assert.equal(restored.phase,'story');assert.equal(restored.storyVersion,STORY_VERSION);assert.equal(restored.deliveryReceipt,null);
 for(const field of ['gold','hp','items','battles','stage','kit','seed'])assert.deepEqual(restored[field],old[field]);
 finishScene(restored);assert.equal(restored.phase,'rest');assert.equal(restored.gold,51);
});

test('invalid receipts and unsupported story schemas fail without altering the save',()=>{
 const settled=finalVictory();finishScene(settled);
 for(const mutate of [r=>r.deliveryReceipt.balance=171,r=>r.deliveryReceipt.total=201,r=>r.deliveryReceipt.status='pending',r=>r.deliveryReceipt.receiver='unknown',r=>r.storyVersion=STORY_VERSION+1,r=>r.cleared=false]){
  const bad=structuredClone(settled);mutate(bad);const before=JSON.stringify(bad);assert.equal(validateRun(bad),false);assert.equal(migrateRun(bad),null);assert.equal(JSON.stringify(bad),before);
 }
});

test('rewritten story migration does not conceal a corrupt legacy cursor',()=>{
 for(const index of [-1,NaN,'2',99]){const old=createRun();delete old.storyVersion;delete old.deliveryReceipt;old.sceneIndex=index;assert.equal(migrateRun(old),null);}
});

test('the story archive exposes reached chapters while leaving future chapters locked',()=>{
 const run=createRun();const before=JSON.stringify(run);assert.deepEqual(availableStoryScenes(null),[]);assert.deepEqual(availableStoryScenes(run),['opening']);assert.equal(JSON.stringify(run),before);
 run.stage=3;run.scene='reveal';assert.deepEqual(availableStoryScenes(run),['opening','reveal']);
 run.stage=6;run.scene='midpoint';assert.deepEqual(availableStoryScenes(run),['opening','reveal','midpoint']);
 run.stage=8;run.scene='proof';assert.deepEqual(availableStoryScenes(run),['opening','reveal','midpoint','proof']);
 run.stage=9;run.phase='rest';assert.deepEqual(availableStoryScenes(run),['opening','reveal','midpoint','proof']);
 run.phase='story';run.scene='boss';assert.deepEqual(availableStoryScenes(run),['opening','reveal','midpoint','proof','boss']);
 const victory=finalVictory();assert.deepEqual(availableStoryScenes(victory),Object.keys(SCENES));
});

test('each story beat has a stable identity, staging and a matching chapter recap',()=>{
 const ids=new Set(),art=new Set(),allowedArt=new Set(['clinic','contract','departure','ambush','ledger','bribe','resolve','warehouse','dispatch','gate','duel','arrest','relief','payment','renewal']);
 for(const [scene,pages] of Object.entries(SCENES)){
  assert.ok(pages.length>=8&&pages.length<=12,scene);assert.ok(SCENE_TITLES[scene]);assert.ok(SCENE_SUMMARIES[scene]?.summary);assert.ok(SCENE_SUMMARIES[scene]?.objective);
  for(const p of pages){assert.ok(p.id&&!ids.has(p.id),p.id);ids.add(p.id);assert.ok(p.who&&p.location&&p.time&&p.beat&&p.text,p.id);assert.ok(allowedArt.has(p.art),p.art);art.add(p.art);}
 }
 assert.equal(ids.size,60);assert.deepEqual([...art].sort(),[...allowedArt].sort());
});
