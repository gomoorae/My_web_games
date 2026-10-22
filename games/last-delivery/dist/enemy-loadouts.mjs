import {ITEMS,ENEMIES,TAG_LABEL} from './data.mjs';
import {canPlace,adjacent,dimensions,cells,orientations} from './grid.mjs';

// The bag is the encounter. No attack pattern, hidden damage or armor is added.
const enemyBagCache=new Map();
const enemyBagHp=[82,100,120,140,160,190,215,240,270,300];
const enemyBagTags=[['sword','fist'],['spear'],['dart'],['saber','sword'],['fist','spear'],['saber','sword'],['spear','dart'],['fist','dart'],['saber','spear'],['fist','saber','sword']];
const enemyBagWeapons={sword:['sword','moonblade'],saber:['saber','bloodsaber'],spear:['spear','dragonlance'],dart:['darts','needles'],fist:['gauntlet','jadeglove']};
const enemyBagArts={sword:['swordbook','swordguard','swordpierce'],saber:['saberbook','saberbleed','saberexecute'],spear:['spearbook','spearpierce','spearstorm'],dart:['dartbook','dartstun','dartpoison'],fist:['fistbook','fistheal','fistshock']};
function enemyBagRandom(state){let n=state.value>>>0;n^=n<<13;n^=n>>>17;n^=n<<5;state.value=n>>>0||0x9e3779b9;return state.value/4294967296;}
function enemyBagShuffle(items,state){const out=[...items];for(let n=out.length-1;n>0;n--){const j=Math.floor(enemyBagRandom(state)*(n+1));[out[n],out[j]]=[out[j],out[n]];}return out;}
function enemyBagPlace(bag,type,state,level=0,targets=[]){
 const item={uid:`e${bag.stage+1}-${bag.items.length+1}`,type,x:null,y:null,rot:0,level};bag.items.push(item);
 const candidates=[];
 for(const rot of orientations(item))for(let y=0;y<bag.rows;y++)for(let x=0;x<bag.cols;x++){
  if(!canPlace(bag,item.uid,x,y,rot))continue;
  const placed={...item,x,y,rot};if(targets.length&&!targets.some(t=>adjacent(placed,t)))continue;
  const d=dimensions(placed),centre=Math.abs(x+d.w/2-bag.cols/2)+Math.abs(y+d.h/2-bag.rows/2);
  candidates.push({x,y,rot,score:centre+enemyBagRandom(state)*1.5});
 }
 if(!candidates.length){bag.items.pop();return null;}
 candidates.sort((a,b)=>a.score-b.score);Object.assign(item,candidates[0]);delete item.score;return item;
}
export function enemyLoadout(run){
 const stage=Math.max(0,Math.min(9,run.stage|0)),seed=Number(run.seed)>>>0,key=`${seed}:${stage}`;
 if(enemyBagCache.has(key))return JSON.parse(JSON.stringify(enemyBagCache.get(key)));
 const state={value:(seed^Math.imul(stage+1,0x9e3779b1)^0x4b1d5267)>>>0||17},pick=items=>items[Math.floor(enemyBagRandom(state)*items.length)];
 const tag=pick(enemyBagTags[stage]),weaponType=enemyBagWeapons[tag][stage>=7&&enemyBagRandom(state)>.4?1:0];
 const bag={stage,seed,cols:stage>=7?7:6,rows:stage>=4?7:6,items:[],name:ENEMIES[stage].name,tag,maxHp:enemyBagHp[stage],style:''};
 const level=stage>=8?1:0,weapon=enemyBagPlace(bag,weaponType,state,level),weapons=[weapon],arts=[],inners=[];
 // These are alternative budgets, not free extra equipment. A second weapon
 // or inner manual replaces an art AND a support from the normal encounter.
 // A separate seed roll leaves early encounters and ordinary loadouts intact.
 const equipmentRoll={value:(Math.imul(seed^0x9e3779b9,0x85ebca6b)^Math.imul(stage+1,0xc2b2ae35)^0x27d4eb2d)>>>0||29},variant=stage>=5?Math.floor(enemyBagRandom(equipmentRoll)*6):5;
 let equipmentTrade=false;
 if(variant===0){const secondary=enemyBagPlace(bag,tag==='dart'?'sword':'darts',state);if(secondary){weapons.push(secondary);equipmentTrade=true;}}
 const artCount=(stage===0?0:stage<5?1:stage<8?2:3)-(equipmentTrade||variant===1?1:0);
 const pool=stage<4?[enemyBagArts[tag][0],'cloudstep']:enemyBagShuffle([...enemyBagArts[tag],...(stage>=7?['ironpalm','phoenix']:['cloudstep','ironpalm'])].filter(type=>ITEMS[type].rarity<3||stage>=7),state);
 for(const type of enemyBagShuffle(pool,state)){if(arts.length>=artCount)break;const targets=weapons.filter(w=>['any','all',ITEMS[w.type].tag].includes(ITEMS[type].tag)),a=enemyBagPlace(bag,type,state,stage===9?1:0,targets);if(a)arts.push(a);}
 // Inner manuals and supports follow exactly the player's activation rules.
 if(stage>=4){const choices=stage<6?['innerbalanced']:tag==='dart'?['innerbalanced','innerwind']:tag==='fist'?['inneriron','innerbalanced']:['innerbalanced','innerwind','innerblood'];const inner=enemyBagPlace(bag,pick(choices),state);if(inner)inners.push(inner);}
 if(variant===1){const secondary=enemyBagPlace(bag,inners[0]?.type==='innerbalanced'?'innerwind':'innerbalanced',state);if(secondary){inners.push(secondary);equipmentTrade=true;}}
 const supportCount=(stage<2?0:stage<5?1:stage<8?2:3)-(equipmentTrade?1:0);
 const supportPool=enemyBagShuffle(stage<4?['silkwrap','tassel','armor','bambooamulet']:['stone','silkwrap','tigerseal','armor','prayerbeads','jinglingbell','inkstone','jadependant',...(stage>=7?['poison','redthread','ironspikes']:[])],state);
 let placedSupports=0;for(const type of supportPool){if(placedSupports>=supportCount)break;const d=ITEMS[type],targets=d.global?[]:d.target==='art'?arts:weapons;if(!d.global&&!targets.length)continue;if(enemyBagPlace(bag,type,state,0,targets))placedSupports++;}
 if(stage>=5)enemyBagPlace(bag,pick(stage>=8?['ginseng','barrierpill','antidote']:['medicine','qiwater','antidote']),state);
 bag.equipmentTrade=equipmentTrade?(weapons.length>1?'weapon':'inner'):null;
 bag.style=`${weapons.map(w=>ITEMS[w.type].name).join(' + ')} · ${inners.length?inners.map(i=>ITEMS[i.type].name).join(' + '):TAG_LABEL[tag]} · ${arts.length?arts.map(a=>ITEMS[a.type].name).join(' / '):'기본 무기 운용'}`;
 bag.occupied=bag.items.flatMap(cells).length;
 if(enemyBagCache.size>160)enemyBagCache.clear();enemyBagCache.set(key,bag);
 return JSON.parse(JSON.stringify(bag));
}
