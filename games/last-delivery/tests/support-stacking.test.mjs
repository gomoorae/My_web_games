import test from 'node:test';
import assert from 'node:assert/strict';
import {createRun,addItem,moveItem,adjacent,buildStats,createBattle,tickBattle,validateRun,rewardChoices,selectReward,shopChoices,buy,rerollShop} from '../dist/engine.mjs';

const closeSupport=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-8,`${actual} != ${expected}`);
function supportRun(expanded=false){
 const run=createRun('sword',47);run.items=[];run.phase='prepare';
 if(expanded){run.cols=run.rows=8;run.stage=6;run.bagExpansions=[{stage:2,method:'shop',axis:'row',cost:24},{stage:3,method:'rest',axis:'col',cost:0},{stage:5,method:'shop',axis:'row',cost:40},{stage:6,method:'rest',axis:'col',cost:0}];}
 return run;
}
function putSupport(run,type,x,y,rot=0){const item=addItem(run,type);assert.ok(moveItem(run,item.uid,x,y,rot),`${type} at ${x},${y}`);return item;}
function supportBattle(run,actor='hero'){
 const battle=createBattle(run);
 if(actor==='enemy'){const copy=JSON.parse(JSON.stringify(battle));delete copy.rival;delete copy.enemyLoadout;copy.actor='enemy';battle.rival=copy;}
 battle.hp=battle.maxHp=battle.enemyHp=battle.enemyMaxHp=battle.rival.hp=battle.rival.maxHp=10000;
 battle.shield=battle.enemyShield=battle.rival.shield=0;
 for(const f of [battle,battle.rival]){f.shieldPools=[];f.nextAttack=999;f.weaponReady=f.weaponReady.map(()=>999);f.skillReady=f.skillReady.map(()=>999);f.medicines=[];f.bonuses.armor=f.bonuses.dodge=f.bonuses.thorns=0;}
 return {battle,source:actor==='hero'?battle:battle.rival,target:actor==='hero'?battle.rival:battle};
}
function poisonBuild(count){
 const run=supportRun(),weapon=putSupport(run,'sword',2,1),art=putSupport(run,'swordbook',3,1),pouches=[];
 for(let n=0;n<count;n++)pouches.push(putSupport(run,'poison',1,n+1));
 assert.ok(validateRun(run));return {run,weapon,art,pouches};
}

for(const count of [1,2,3])test(`${count} separate poison pouches add ${count} stacks per landed basic hit on either side`,()=>{
 const {run,weapon,pouches}=poisonBuild(count),stats=buildStats(run);
 closeSupport(stats.itemBonuses[weapon.uid].poison,count);assert.deepEqual(stats.itemBonusSources[weapon.uid].poison,pouches.map(i=>i.uid));
 for(const actor of ['hero','enemy']){
  const {battle,source,target}=supportBattle(run,actor);source.nextAttack=source.weaponReady[0]=.55;
  for(let n=0;n<13;n++)tickBattle(battle);
  assert.equal(source.attacks,1);closeSupport(target.statuses.poison.amount,count);
  const event=battle.events.find(e=>e.actor===actor&&e.effect==='attack');assert.ok(event);
  for(const i of [weapon,...pouches]){assert.ok(event.sourceUids.includes(i.uid));assert.ok(target.statuses.poison.sources.includes(i.uid));}
 }
});

test('stored and disconnected copies stop contributing, and basic-hit poison does not leak onto arts',()=>{
 const {run,weapon,art,pouches}=poisonBuild(3);assert.ok(moveItem(run,pouches[1].uid,null,null));assert.ok(moveItem(run,pouches[2].uid,5,5));
 const stats=buildStats(run);closeSupport(stats.itemBonuses[weapon.uid].poison,1);assert.deepEqual(stats.itemBonusSources[weapon.uid].poison,[pouches[0].uid]);
 const {battle,target}=supportBattle(run);battle.skillReady=[0];battle.energy=8;tickBattle(battle);
 const event=battle.events.find(e=>e.effect==='skill');assert.equal(event.sourceUid,art.uid);closeSupport(target.statuses.poison.amount,0);
 for(const i of pouches)assert.ok(!event.sourceUids.includes(i.uid));
});

test('separate whetstones stack on a shared art while each physical stone counts once across two weapon paths',()=>{
 for(const count of [1,2,3]){
  const run=supportRun(true),left=putSupport(run,'sword',2,1),right=putSupport(run,'sword',5,1),art=putSupport(run,'swordbook',3,2),stones=[];
  for(const [x,y]of [[3,1],[1,4],[5,4]].slice(0,count))stones.push(putSupport(run,'stone',x,y));
  assert.ok(validateRun(run));assert.ok(adjacent(stones[0],left)&&adjacent(stones[0],right));
  const stats=buildStats(run);assert.deepEqual(stats.artWeapons[art.uid],[left.uid,right.uid]);closeSupport(stats.itemBonuses[art.uid].damage,count*.25);assert.deepEqual(stats.itemBonusSources[art.uid].damage,stones.map(i=>i.uid));
  const {battle}=supportBattle(run);battle.skillReady=[0];battle.energy=8;tickBattle(battle);
  const events=battle.events.filter(e=>e.effect==='skill');assert.equal(events.length,1);closeSupport(events[0].value,18*(1+count*.25));
  for(const stone of stones)assert.ok(events[0].sourceUids.includes(stone.uid));
 }
});

test('three same-kind bells combine to 45 percent cooldown reduction on their shared art',()=>{
 const run=supportRun();putSupport(run,'sword',2,2);const art=putSupport(run,'swordbook',3,2,1),bells=[[2,0,0],[3,4,0],[4,1,1]].map(p=>putSupport(run,'jinglingbell',...p));
 assert.ok(validateRun(run));const stats=buildStats(run);closeSupport(stats.itemBonuses[art.uid].cooldown,.45);assert.deepEqual(stats.itemBonusSources[art.uid].cooldown,bells.map(i=>i.uid));
 const {battle}=supportBattle(run);battle.skillReady=[0];battle.energy=battle.maxEnergy=100;
 for(let n=0;n<130;n++)tickBattle(battle);
 const casts=battle.events.filter(e=>e.effect==='skill');assert.equal(casts.length,3);
 for(let n=1;n<casts.length;n++)assert.ok(casts[n].t-casts[n-1].t>=2.75-.001&&casts[n].t-casts[n-1].t<=2.801);
 for(const event of casts)for(const bell of bells)assert.ok(event.sourceUids.includes(bell.uid));
});

test('each inkstone contributes per active neighbor and combines with an inner manual',()=>{
 const run=supportRun();putSupport(run,'sword',2,2);const art=putSupport(run,'swordbook',3,2,1),other=putSupport(run,'swordbook',3,4),first=putSupport(run,'inkstone',2,1),second=putSupport(run,'inkstone',4,2,1),inner=putSupport(run,'innerbalanced',0,0);
 assert.ok(validateRun(run));assert.ok(adjacent(second,art)&&adjacent(second,other));const stats=buildStats(run);
 closeSupport(stats.globalContributions[first.uid].energyRegen,.4);closeSupport(stats.globalContributions[second.uid].energyRegen,.8);closeSupport(stats.bonuses.energyRegen,1.7);
 assert.deepEqual(new Set(stats.bonusSources.energyRegen),new Set([first.uid,second.uid,inner.uid]));
 const {battle}=supportBattle(run);battle.energy=0;for(let n=0;n<20;n++)tickBattle(battle);closeSupport(battle.energy,2.95);
});

test('same-kind global armor copies each add defense and their own shield pool',()=>{
 const run=supportRun();putSupport(run,'sword',0,0);const first=putSupport(run,'armor',1,0),second=putSupport(run,'armor',3,0);assert.ok(validateRun(run));
 const stats=buildStats(run),battle=createBattle(run);closeSupport(stats.bonuses.armor,4);closeSupport(battle.shield,52);assert.deepEqual(battle.shieldPools,[{uid:first.uid,amount:26},{uid:second.uid,amount:26}]);
 moveItem(run,second.uid,null,null);closeSupport(buildStats(run).bonuses.armor,2);closeSupport(buildStats(run).shield,26);
});

test('shops can sell second and third support copies across stable stock rolls',()=>{
 const {run}=poisonBuild(1);run.stage=5;run.phase='shop';run.gold=500;run.shopOwned=run.items.map(i=>i.type);
 for(let n=0;n<30&&run.items.filter(i=>i.type==='poison').length<3;n++){
  const stock=shopChoices(run);assert.equal(new Set(stock).size,stock.length);
  if(stock.includes('poison')){assert.ok(buy(run,'poison'));assert.deepEqual(shopChoices(run),stock);assert.equal(buy(run,'poison'),false);}
  if(run.items.filter(i=>i.type==='poison').length<3)assert.ok(rerollShop(run));
 }
 const pouches=run.items.filter(i=>i.type==='poison');assert.equal(pouches.length,3);assert.equal(new Set(pouches.map(i=>i.uid)).size,3);
});

test('later rewards can offer and grant another support even when two copies are already owned',()=>{
 let offered=0;
 for(let seed=1;seed<=80;seed++){
  const {run}=poisonBuild(2);run.seed=seed;run.stage=5;run.phase='reward';const before=run.items.filter(i=>i.type==='poison').map(i=>i.uid),choices=rewardChoices(run);
  assert.deepEqual(rewardChoices(run),choices);assert.equal(new Set(choices).size,choices.length);
  if(!choices.includes('poison'))continue;offered++;assert.ok(selectReward(run,'poison'));
  const pouches=run.items.filter(i=>i.type==='poison');assert.equal(pouches.length,3);assert.ok(!before.includes(pouches.at(-1).uid));
 }
 assert.ok(offered>0,'at least one real reward offers an owned support');
});
