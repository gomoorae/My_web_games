import {ITEMS,KITS} from '../dist/data.mjs';
import * as E from '../dist/engine.mjs';
import {expansionOptions,expandBag} from '../dist/expansion.mjs';
import {pathToFileURL} from 'node:url';
export function score(type,tag){
 const d=ITEMS[type],b=d.bonuses||{};
 if(d.kind==='weapon')return d.tag===tag?12+d.rarity*4:0;
 if(d.kind==='art')return (d.tag===tag?19+d.rarity*3:d.tag==='any'?20:0)+(d.shield||0)*.35+(d.heal||0)*.5;
 if(d.kind==='inner')return 22+(b.lifesteal||0)*50+(b.poison&&tag==='dart'?8:0)+(b.shield||0)*.15+(b.thorns||0)*2+(b.speed||0)*20;
 if(d.kind==='support')return 14+(d.global?3:0)+(b.lifesteal?5:0)+(b.shield||0)*.2+(b.armor||0)*3+(b.thorns||0)*2+(b.damage||0)*20;
 return 6+(d.heal||0)/20;
}
export function purchaseReserve(type){const d=ITEMS[type];return d.kind==='art'||d.bonuses?.shield?0:10;}
export function arrangeRun(r){
 const tag=r.kit;for(const i of r.items){i.x=null;i.y=null;}
 const weapons=r.items.filter(i=>ITEMS[i.type].kind==='weapon'&&ITEMS[i.type].tag===tag).sort((a,b)=>score(b.type,tag)+b.level*4-score(a.type,tag)-a.level*4),w=weapons[0];if(!E.moveItem(r,w.uid,2,1,0)&&!E.autoPlace(r,w.uid))throw Error('Unable to equip owned weapon');
 const arts=r.items.filter(i=>ITEMS[i.type].kind==='art'&&[tag,'any'].includes(ITEMS[i.type].tag)).sort((a,b)=>score(b.type,tag)+b.level*3-score(a.type,tag)-a.level*3);
 let n=0;for(const a of arts){if(n===3)break;let done=false;for(const rot of [0,1,2,3])for(let y=0;y<r.rows;y++)for(let x=0;x<r.cols;x++)if(!done&&E.canPlace(r,a.uid,x,y,rot)&&E.adjacent({...a,x,y,rot},w)){E.moveItem(r,a.uid,x,y,rot);done=true;n++;}}
 const inner=r.items.filter(i=>ITEMS[i.type].kind==='inner').sort((a,b)=>score(b.type,tag)-score(a.type,tag))[0];if(inner)E.autoPlace(r,inner.uid);
 for(const s of r.items.filter(i=>ITEMS[i.type].kind==='support').sort((a,b)=>score(b.type,tag)-score(a.type,tag))){const d=ITEMS[s.type];if(d.global){E.autoPlace(r,s.uid);continue;}const targets=d.target==='art'?E.buildStats(r).arts:[w];let done=false;for(const rot of [0,1,2,3])for(let y=0;y<r.rows;y++)for(let x=0;x<r.cols;x++)if(!done&&E.canPlace(r,s.uid,x,y,rot)&&targets.some(t=>E.adjacent({...s,x,y,rot},t))){E.moveItem(r,s.uid,x,y,rot);done=true;}}
 for(const m of r.items.filter(i=>ITEMS[i.type].kind==='consumable'))E.autoPlace(r,m.uid);
}
export function campaign(kit,seed){const r=E.createRun(kit,seed),stages=[];let safety=0;while(r.phase!=='complete'&&r.phase!=='defeat'&&safety++<150){
 if(r.phase==='story'){E.advanceStory(r);continue;}
 if(r.phase==='prepare'){arrangeRun(r);const s=E.buildStats(r);if(r.gold>=E.upgradeCost(s.weapon)&&s.weapon.level<(r.stage>=6?3:2))E.upgradeItem(r,s.weapon.uid);if(s.arts[0]&&r.gold>=E.upgradeCost(s.arts[0])&&s.arts[0].level<(r.stage>=6?3:2))E.upgradeItem(r,s.arts[0].uid);r.battle=E.simulate(r);stages.push([r.stage+1,r.battle.status,Math.ceil(r.battle.hp),r.battle.result.time,Math.ceil(r.battle.enemyHp)]);E.settleBattle(r);continue;}
 if(r.phase==='reward'){E.selectReward(r,chooseReward(r));continue;}
 if(r.phase==='shop'){const expansion=chooseExpansion(r,'shop');if(expansion)expandBag(r,expansion.axis,'shop');arrangeRun(r);let chosen=E.shopChoices(r).filter(t=>!r.items.some(i=>i.type===t)&&ITEMS[t].kind!=='weapon').sort((a,b)=>score(b,kit)-score(a,kit));for(const t of chosen){if(score(t,kit)>=18&&r.gold>=ITEMS[t].price+purchaseReserve(t))E.buy(r,t);}while(r.gold>=10&&r.items.filter(i=>i.type==='medicine').length<3&&E.buy(r,'medicine')){}E.leaveShop(r);continue;}
 if(r.phase==='rest'){E.rest(r,restDecision(r));continue;}
 }
 return {kit,seed,result:r.phase,stage:r.stage+1,hp:r.hp,gold:r.gold,bag:[r.cols,r.rows],expansions:r.bagExpansions?.length||0,stages,items:r.items.map(i=>`${i.type}+${i.level}${E.inBag(i)?'*':''}`)};
}
export function chooseReward(r){
 const choices=E.rewardChoices(r),healing=r.items.some(i=>ITEMS[i.type].kind==='consumable'&&ITEMS[i.type].heal);
 if(![2,5,8].includes(r.stage)&&r.hp<r.maxHp*.6&&!healing&&choices.includes('medicine'))return 'medicine';
 return choices.sort((a,b)=>score(b,r.kit)-score(a,r.kit))[0];
}
export function chooseExpansion(r,method){
 const options=expansionOptions(r,method).filter(o=>o.enabled);
 if(!options.length)return null;
 const occupied=r.items.filter(E.inBag).flatMap(E.cells).length;
 if(r.stage<3&&occupied<24)return null;
 if(method==='shop'&&r.gold<options[0].cost+20)return null;
 if(method==='rest'&&(r.stage===9||r.hp<r.maxHp*.8||r.cols*r.rows>=49))return null;
 return options.find(o=>o.axis===(r.cols<=r.rows?'col':'row'))||options[0];
}
export function restDecision(r){const expansion=chooseExpansion(r,'rest');return expansion?'expand-'+expansion.axis:r.stage===9||r.hp<r.maxHp*.7?'heal':'meditate';}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const seeds=Math.max(1,Math.min(20,Number(process.argv[2])||5)),policy=process.argv.includes('--multiple')?multipleCampaign:campaign;
 for(const kit of Object.keys(KITS)){const a=[];for(let seed=1;seed<=seeds;seed++)a.push(policy(kit,seed));console.log(kit,a.filter(r=>r.result==='complete').length+'/'+seeds,a.map(r=>r.stage).join(','));console.log(JSON.stringify(a[0]));}
}

// Optional space-first strategy for v1.4 regressions. It uses only earned gold,
// offered rewards and visible shop stock; two weapons is a policy choice,
// never an equipment rule. Existing single-weapon samples remain available.
export function multipleWeaponScore(i){const d=ITEMS[i.type];return d.damage*(d.hits||1)*(1+i.level*.3)/d.interval+(d.lifesteal||0)*20+(d.poison||0)+(d.bleed||0)*.5;}
export function multipleScore(type,r){
 const d=ITEMS[type],owned=r.items.filter(i=>ITEMS[i.type].kind===d.kind).length;
 if(d.kind==='weapon')return owned<2?65+multipleWeaponScore({type,level:0}):0;
 if(d.kind==='inner')return owned<3?45+score(type,r.kit):0;
 const tags=new Set(r.items.filter(i=>ITEMS[i.type].kind==='weapon').map(i=>ITEMS[i.type].tag));
 if(d.kind==='art')return tags.has(d.tag)||d.tag==='any'?score(type,d.tag)+6:0;
 return score(type,r.kit);
}
export function arrangeMultipleRun(r){
 for(const i of r.items){i.x=null;i.y=null;}
 const weapons=r.items.filter(i=>ITEMS[i.type].kind==='weapon').sort((a,b)=>multipleWeaponScore(b)-multipleWeaponScore(a)).slice(0,2);
 for(const [n,w]of weapons.entries())if(!E.moveItem(r,w.uid,n?4:2,1,0))E.autoPlace(r,w.uid);
 const placeNear=(item,targets)=>{let best=null;for(const rot of [0,1,2,3])for(let y=0;y<r.rows;y++)for(let x=0;x<r.cols;x++)if(E.canPlace(r,item.uid,x,y,rot)){const count=targets.filter(t=>E.adjacent({...item,x,y,rot},t)).length;if(count&&(!best||count>best.count))best={x,y,rot,count};}return best?E.moveItem(r,item.uid,best.x,best.y,best.rot):false;};
 const arts=r.items.filter(i=>ITEMS[i.type].kind==='art').sort((a,b)=>score(b.type,ITEMS[b.type].tag)+b.level*3-score(a.type,ITEMS[a.type].tag)-a.level*3);
 const placeArt=a=>placeNear(a,weapons.filter(w=>E.inBag(w)&&['any','all',ITEMS[w.type].tag].includes(ITEMS[a.type].tag)));
 let count=0;for(const a of arts)if(count<3&&placeArt(a))count++;
 for(const i of r.items.filter(i=>ITEMS[i.type].kind==='inner').sort((a,b)=>score(b.type,r.kit)-score(a.type,r.kit)))E.autoPlace(r,i.uid);
 for(const i of r.items.filter(i=>ITEMS[i.type].kind==='support').sort((a,b)=>score(b.type,r.kit)-score(a.type,r.kit))){const d=ITEMS[i.type];if(d.global)E.autoPlace(r,i.uid);else placeNear(i,d.target==='art'?E.buildStats(r).arts:weapons.filter(E.inBag));}
 for(const m of r.items.filter(i=>ITEMS[i.type].kind==='consumable'))E.autoPlace(r,m.uid);
 for(const a of arts.filter(i=>!E.inBag(i)))placeArt(a);
}
export function chooseMultipleReward(r){
 const choices=E.rewardChoices(r),healing=r.items.some(i=>ITEMS[i.type].kind==='consumable'&&ITEMS[i.type].heal);
 if(![2,5,8].includes(r.stage)&&r.hp<r.maxHp*.6&&!healing&&choices.includes('medicine'))return 'medicine';
 return choices.sort((a,b)=>multipleScore(b,r)-multipleScore(a,r))[0];
}
export function multipleShopChoices(r){return E.shopChoices(r).filter(t=>multipleScore(t,r)>=18&&(ITEMS[t].kind==='weapon'?r.items.filter(i=>ITEMS[i.type].kind==='weapon').length<2:ITEMS[t].kind==='inner'?r.items.filter(i=>i.type===t).length<2:!r.items.some(i=>i.type===t))).sort((a,b)=>multipleScore(b,r)-multipleScore(a,r));}
export function multipleUpgradeTargets(r){const s=E.buildStats(r);return [...s.weapons,...s.arts.slice(0,1)].filter(i=>i.level<(r.stage>=6?3:2));}
export function multipleCampaign(kit,seed){
 const r=E.createRun(kit,seed),stages=[];let safety=0,maxWeapons=0,maxInners=0;
 while(!['complete','defeat'].includes(r.phase)&&safety++<180){
  if(r.phase==='story'){E.advanceStory(r);continue;}
  if(r.phase==='prepare'){
   arrangeMultipleRun(r);const s=E.buildStats(r);maxWeapons=Math.max(maxWeapons,s.weapons.length);maxInners=Math.max(maxInners,s.inners.length);
   for(const i of multipleUpgradeTargets(r))if(r.gold>=E.upgradeCost(i))E.upgradeItem(r,i.uid);
   r.battle=E.simulate(r);stages.push([r.stage+1,r.battle.status,Math.ceil(r.battle.hp),s.weapons.length,s.inners.length]);E.settleBattle(r);continue;
  }
  if(r.phase==='reward'){E.selectReward(r,chooseMultipleReward(r));continue;}
  if(r.phase==='shop'){
   const expansion=chooseExpansion(r,'shop');if(expansion)expandBag(r,expansion.axis,'shop');arrangeMultipleRun(r);
   for(const t of multipleShopChoices(r))if(r.gold>=ITEMS[t].price+purchaseReserve(t))E.buy(r,t);
   while(r.gold>=10&&r.items.filter(i=>i.type==='medicine').length<3&&E.buy(r,'medicine')){}
   E.leaveShop(r);continue;
  }
  if(r.phase==='rest'){E.rest(r,restDecision(r));continue;}
 }
 return {kit,seed,result:r.phase,stage:r.stage+1,hp:r.hp,maxWeapons,maxInners,stages};
}
