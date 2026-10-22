import {ITEMS,ENEMIES,VERSION,KITS,SCENES} from './data.mjs';
import {dimensions,inBag,cells,localCells,canPlace,adjacent,rotationIndex,nextRotation,orientations} from './grid.mjs';
import {enemyLoadout} from './enemy-loadouts.mjs';
import {expandBag} from './expansion.mjs';
export {dimensions,inBag,cells,localCells,canPlace,adjacent,rotationIndex,nextRotation,orientations,enemyLoadout};
export function moveItem(run,uid,x,y,rot=false){if(x===null&&y===null){const i=run.items.find(i=>i.uid===uid);if(!i)return false;i.x=null;i.y=null;return true;}if(!canPlace(run,uid,x,y,rot))return false;Object.assign(run.items.find(i=>i.uid===uid),{x,y,rot});return true;}
export function addItem(run,type){if(!ITEMS[type])return null;const item={uid:`i${run.nextId++}`,type,x:null,y:null,rot:false,level:0};run.items.push(item);return item;}
export function autoPlace(run,uid){const item=run.items.find(i=>i.uid===uid);if(!item)return false;const rotations=[item.rot,...orientations(item).filter(r=>r!==rotationIndex(item.rot))];for(const rot of rotations)for(let y=0;y<run.rows;y++)for(let x=0;x<run.cols;x++)if(moveItem(run,uid,x,y,rot))return true;return false;}
function random(state){let n=state.rng>>>0;n^=n<<13;n^=n>>>17;n^=n<<5;state.rng=n>>>0||0x9e3779b9;return state.rng/4294967296;}
function rngFor(run,salt){return {rng:((Number(run.seed)>>>0)^Math.imul(run.stage+1,0x9e3779b1)^salt)>>>0||1234567};}
function shuffle(list,rng){const a=[...list];for(let n=a.length-1;n>0;n--){const j=Math.floor(random(rng)*(n+1));[a[n],a[j]]=[a[j],a[n]];}return a;}
function kitData(kit){return KITS[kit]||KITS.sword;}
export function createRun(kit='sword',seed=Date.now()){
 if(!KITS[kit])kit='sword';const k=kitData(kit);
 const run={version:VERSION,rulesVersion:3,phase:'story',scene:'opening',sceneIndex:0,kit,seed:Number(seed)>>>0,stage:0,cols:6,rows:6,bagExpansions:[],hp:140,maxHp:140,gold:30,nextId:1,items:[],battles:[],battle:null,shopBought:[],shopRoll:0,restChoice:null,cleared:false};
 const w=addItem(run,k.weapon);moveItem(run,w.uid,2,1,false);
 for(const type of [k.art,k.support]){const i=addItem(run,type);let placed=false;for(const rot of orientations(i))for(let y=0;y<run.rows;y++)for(let x=0;x<run.cols;x++)if(!placed&&canPlace(run,i.uid,x,y,rot)&&adjacent({...i,x,y,rot},w)){moveItem(run,i.uid,x,y,rot);placed=true;}if(!placed)autoPlace(run,i.uid);}
 const med=addItem(run,'medicine');autoPlace(run,med.uid);run.shopOwned=run.items.map(i=>i.type);run.shopTag=kit;return run;
}
const BASE_BONUSES={damage:0,speed:0,crit:0,critDamage:0,pierce:0,poison:0,bleed:0,burn:0,lifesteal:0,shield:0,armor:0,energyRegen:0,maxEnergy:0,artPower:0,healPower:0,thorns:0,regen:0,dodge:0,cleanse:0,cooldown:0,poisonPower:0};
const BONUS_ALIASES={leech:'lifesteal',energy:'energyRegen',skillDamage:'artPower'};
// Resource and defensive effects belong to the fighter. Offensive effects can
// instead belong to each connected attack, so one contact never buffs an
// unrelated art. Weapon supports keep their documented weapon + art effects.
const SHARED_BONUS_KEYS=new Set(['shield','armor','energyRegen','maxEnergy','thorns','regen','dodge','cleanse','poisonPower']);
function mergeBonus(target,source,level=0){for(const [key,value] of Object.entries(source||{})){const k=BONUS_ALIASES[key]||key;if(k in target&&Number.isFinite(value))target[k]+=value*(1+level*.2);}}
function mergeBonusSources(target,source){for(const [key,ids]of Object.entries(source))target[key]=[...new Set([...(target[key]||[]),...ids])];}
export function buildStats(run){
 const bag=run.items.filter(inBag),weapons=bag.filter(i=>ITEMS[i.type].kind==='weapon'),weapon=weapons[0],inners=bag.filter(i=>ITEMS[i.type].kind==='inner'),inner=inners[0],errors=[],links=[],active=[],bonuses={...BASE_BONUSES},bonusSources={},localBonuses={},localSources={},globalContributions={},artWeapons={};
 const contribute=(i,values,target=bonuses,sources=bonusSources)=>{
  mergeBonus(target,values,i.level);
  for(const [key,value]of Object.entries(values||{})){const k=BONUS_ALIASES[key]||key;if(!(k in BASE_BONUSES)||!Number.isFinite(value)||!value)continue;sources[k]=[...new Set([...(sources[k]||[]),i.uid])];}
  if(target===bonuses){globalContributions[i.uid]??={...BASE_BONUSES};mergeBonus(globalContributions[i.uid],values,i.level);}
 };
 const localContribute=(i,values,uid)=>{localBonuses[uid]??={...BASE_BONUSES};localSources[uid]??={};contribute(i,values,localBonuses[uid],localSources[uid]);};
 if(!weapon)errors.push('보따리에 공격할 무기를 넣어 주세요.');
 const arts=bag.filter(i=>{if(ITEMS[i.type].kind!=='art')return false;const matching=weapons.filter(w=>['any','all',ITEMS[w.type].tag].includes(ITEMS[i.type].tag)&&adjacent(i,w));if(!matching.length)return false;artWeapons[i.uid]=matching.map(w=>w.uid);return true;});
 active.push(...weapons.map(w=>w.uid));for(const a of arts){active.push(a.uid);for(const uid of artWeapons[a.uid])links.push([a.uid,uid]);}
 for(const i of inners){active.push(i.uid);contribute(i,ITEMS[i.type].bonuses);}
 for(const i of bag.filter(i=>ITEMS[i.type].kind==='support')){
  const d=ITEMS[i.type],artScope=d.target==='art'||d.scope==='art',weaponScope=!artScope&&d.target!=='any',targets=artScope?arts:weaponScope?weapons:[...weapons,...arts],neighbors=targets.filter(t=>adjacent(i,t)),global=d.global||d.scope==='bag';
  if(!global&&!neighbors.length)continue;active.push(i.uid);
  if(global){contribute(i,d.bonuses);continue;}
  for(const neighbor of neighbors)links.push([i.uid,neighbor.uid]);
  const shared={},local={};for(const [key,value]of Object.entries(d.bonuses||{}))(SHARED_BONUS_KEYS.has(BONUS_ALIASES[key]||key)?shared:local)[key]=value;
  for(const neighbor of neighbors)contribute(i,shared);
  // Each physical support contributes once to an attack, even if its bonus
  // reaches that art along two different adjacent weapon paths.
  const recipients=new Set(neighbors.map(n=>n.uid));
  if(weaponScope){const touched=new Set(neighbors.map(w=>w.uid));for(const art of arts)if(artWeapons[art.uid].some(uid=>touched.has(uid)))recipients.add(art.uid);}
  for(const uid of recipients)localContribute(i,local,uid);
 }
 const medicines=bag.filter(i=>ITEMS[i.type].kind==='consumable');active.push(...medicines.map(i=>i.uid));
 const itemBonuses={},itemBonusSources={};for(const uid of active){itemBonuses[uid]={...bonuses};mergeBonus(itemBonuses[uid],localBonuses[uid]);itemBonusSources[uid]={};mergeBonusSources(itemBonusSources[uid],bonusSources);mergeBonusSources(itemBonusSources[uid],localSources[uid]||{});}
 const inactive=bag.filter(i=>!active.includes(i.uid)).map(i=>{const d=ITEMS[i.type];let reason='연결 조건을 충족하지 못했습니다.';if(d.kind==='art'){if(!weapons.length)reason='먼저 공격할 무기를 보따리에 넣어 주세요.';else if(!weapons.some(w=>['any','all',ITEMS[w.type].tag].includes(d.tag)))reason='이 무공과 같은 계열의 무기가 없습니다.';else reason='같은 계열의 무기와 상하좌우로 맞닿아야 합니다.';}else if(d.kind==='support')reason=d.target==='art'||d.scope==='art'?'활성 무공과 상하좌우로 맞닿아야 합니다.':'무기와 상하좌우로 맞닿아야 합니다.';return {...i,reason};});
 const multiplier=1+(itemBonuses[weapon?.uid]?.damage||0)+(weapon?.level||0)*.3;
 const baseDps=+weapons.reduce((sum,w)=>{const d=ITEMS[w.type],bonus=itemBonuses[w.uid];return sum+d.damage*(d.hits||1)*(1+bonus.damage+w.level*.3)*(1+Math.min(.8,bonus.speed))/d.interval;},0).toFixed(1);
 return {weapons,inners,artWeapons,weapon,arts,inner,medicines,shield:bonuses.shield,bonuses,bonusSources,itemBonuses,itemBonusSources,globalContributions,multiplier,poison:weapons.some(w=>itemBonuses[w.uid].poison>0),errors,links,active,inactive,baseDps};
}
function expandedEquipment(i,stats){
 const connectedWeaponUids=stats.artWeapons[i.uid]||[],first=stats.weapons.find(w=>w.uid===connectedWeaponUids[0]);
 return {...ITEMS[i.type],id:i.type,uid:i.uid,level:i.level,effectiveBonuses:stats.itemBonuses[i.uid],effectiveBonusSources:stats.itemBonusSources[i.uid],...(ITEMS[i.type].kind==='art'?{connectedWeaponUids,weaponTag:first?ITEMS[first.type].tag:undefined}:{})};
}
function fighterFromBag(bag,actor,hp,maxHp){
 const stats=buildStats(bag);if(stats.errors.length)throw Error(stats.errors[0]);
 const weapons=stats.weapons.map(i=>expandedEquipment(i,stats)),weaponReady=weapons.map((_,i)=>(actor==='hero'?.55:1.6)+i*.12);
 const shieldPools=Object.entries(stats.globalContributions).filter(([,bonus])=>bonus.shield>0).map(([uid,bonus])=>({uid,amount:bonus.shield}));
 return {actor,itemBonusVersion:1,equipmentVersion:2,hp,maxHp,shield:stats.shield,shieldPools,energy:2,maxEnergy:8+stats.bonuses.maxEnergy,weapons,weaponReady,weapon:weapons[0],nextAttack:weaponReady[0],weaponTelegraphs:weapons.map(()=>false),artCursor:0,nextEnergy:1,nextRegen:1,nextCleanse:stats.bonuses.cleanse||999,frozenUntil:0,skillReady:stats.arts.map((_,i)=>actor==='hero'?1.2+i*.25:2.6+i*.35),arts:stats.arts.map(i=>expandedEquipment(i,stats)),bonuses:stats.bonuses,bonusSources:stats.bonusSources,multiplier:stats.multiplier,poison:stats.poison,medicines:stats.medicines.map(i=>expandedEquipment(i,stats)),used:[],statuses:{poison:{amount:0,until:0,sources:[]},bleed:{amount:0,until:0,sources:[]},burn:{amount:0,until:0,sources:[]}},damage:0,poisonDamage:0,skillDamage:0,received:0,blocked:0,healed:0,casts:0,crits:0,attacks:0};
}
function syncFighterEquipment(f){
 // JSON cannot preserve object aliases. Keep the historical first-weapon
 // fields authoritative while all additional weapons have independent clocks.
 f.weapons??=[f.weapon];f.weaponReady??=[f.nextAttack];f.weapons[0]=f.weapon;f.weaponReady[0]=f.nextAttack;
 f.weaponTelegraphs??=f.weapons.map(()=>false);f.artCursor??=0;
}
function hydrateFighterBonuses(f,bag,now=0){
 const stats=buildStats(bag),oldWeapons=f.weapons||[f.weapon],oldWeaponReady=f.weaponReady||[f.nextAttack],oldArts=f.arts,oldSkillReady=f.skillReady;
 const oldTimers=new Map(oldWeapons.map((w,i)=>[w.uid,i===0?f.nextAttack:oldWeaponReady[i]])),oldArtTimers=new Map(oldArts.map((a,i)=>[a.uid,oldSkillReady[i]]));
 f.bonuses=stats.bonuses;f.bonusSources=stats.bonusSources;f.multiplier=stats.multiplier;f.poison=stats.poison;f.maxEnergy=8+stats.bonuses.maxEnergy;f.energy=Math.min(f.energy,f.maxEnergy);
 f.weapons=stats.weapons.map(i=>expandedEquipment(i,stats));f.weaponReady=f.weapons.map((w,i)=>oldTimers.get(w.uid)??now+.55+i*.12);f.weapon=f.weapons[0];f.nextAttack=f.weaponReady[0];f.weaponTelegraphs=f.weapons.map(()=>false);
 f.arts=stats.arts.map(i=>expandedEquipment(i,stats));f.skillReady=f.arts.map((a,i)=>oldArtTimers.get(a.uid)??now+1.2+i*.25);f.artCursor=Math.min(f.artCursor||0,Math.max(0,f.arts.length-1));
 for(const source of f.medicines){source.effectiveBonuses=stats.itemBonuses[source.uid];source.effectiveBonusSources=stats.itemBonusSources[source.uid];}
 f.itemBonusVersion=1;f.equipmentVersion=2;
}

function battleSources(f,source,keys=[]){const sources=source?.effectiveBonusSources||f.bonusSources;return [...new Set([source?.uid,...keys.flatMap(key=>sources[key]||[])].filter(Boolean))];}
function battleEvent(b,type,text,value=0,extra={}){const e={id:++b.eventId,t:+b.t.toFixed(2),type,text,value,...extra};b.events.push(e);if(b.events.length>160)b.events.shift();return e;}
function actorEvent(b,f,type,text,value,source,keys=[],extra={}){const sources=battleSources(f,source,keys);return battleEvent(b,type,text,value,{actor:f.actor,sourceUid:source?.uid||sources[0],sourceUids:sources,effect:type,...extra});}
function syncBattlePublic(b){
 const r=b.rival;b.enemyHp=r.hp;b.enemyMaxHp=r.maxHp;b.enemyShield=r.shield;b.enemyEnergy=r.energy;b.enemyMaxEnergy=r.maxEnergy;b.nextEnemy=r.nextAttack;b.enemyAttacks=r.attacks;b.stunnedUntil=r.frozenUntil;
 for(const [key,label]of [['poison','Poison'],['bleed','Bleed'],['burn','Burn']]){b[`enemy${label}`]=r.statuses[key].amount;b[`enemy${label}Until`]=r.statuses[key].until;b[`hero${label}`]=b.statuses[key].amount;b[`hero${label}Until`]=b.statuses[key].until;}
}
export function createBattle(run){
 const enemy=ENEMIES[run.stage];if(!enemy)throw Error('존재하지 않는 전투입니다.');
 const loadout=enemyLoadout(run),hero=fighterFromBag(run,'hero',run.hp,run.maxHp),rival=fighterFromBag(loadout,'enemy',loadout.maxHp,loadout.maxHp);
 const b={...hero,version:3,enemyId:enemy.id,stage:run.stage,rng:rngFor(run,0x41c64e6d).rng,t:0,step:0,enemyLoadout:loadout,rival,nextPoison:1,enemyPhase:1,telegraph:false,events:[],eventId:0,status:'fighting',result:null};
 for(const f of [b,rival])if(f.shield>0)actorEvent(b,f,f.actor==='hero'?'shield':'guard','보따리 · 시작 방어막',f.shield,null,['shield'],{effect:'shield',target:f.actor,fx:'guard'});
 syncBattlePublic(b);return b;
}
function applyStatus(b,attacker,defender,effect,hits=1,source=null,keys=[]){
 for(const key of ['poison','bleed','burn'])if(effect[key]>0){const status=defender.statuses[key];status.amount=Math.min(12,status.amount+effect[key]*hits);status.until=b.t+(key==='poison'?8:key==='bleed'?6:5);status.sources=[...new Set([...status.sources,...battleSources(attacker,source,[...keys,key])])];}
}
function healFighter(b,f,amount,label,source,keys=[],fx='heal'){
 if(f.hp<=0||amount<=0)return 0;const value=Math.min(f.maxHp-f.hp,amount*(1+(source?.effectiveBonuses||f.bonuses).healPower));f.hp+=value;f.healed+=value;
 if(value>.1)actorEvent(b,f,'heal',label,value,source,[...keys,'healPower'],{effect:'heal',fx,target:f.actor});return value;
}
function grantShield(b,f,amount,label,source){
 if(amount<=0)return;f.shield+=amount;if(source?.uid)f.shieldPools.push({uid:source.uid,amount});
 actorEvent(b,f,f.actor==='hero'?'shield':'guard',label,amount,source,[],{effect:'shield',target:f.actor,fx:'guard'});
}
function absorbShield(b,f,amount){
 const blocked=Math.min(f.shield,amount);if(blocked<=0)return 0;f.shield-=blocked;f.blocked+=blocked;
 let left=blocked;const sources=[];for(const pool of f.shieldPools){if(left<=0)break;const absorbed=Math.min(left,pool.amount);if(absorbed>0){pool.amount-=absorbed;left-=absorbed;sources.push(pool.uid);}}
 f.shieldPools=f.shieldPools.filter(p=>p.amount>.0001);
 battleEvent(b,'block','방어막 흡수',blocked,{actor:f.actor,sourceUid:sources[0],sourceUids:[...new Set(sources)],effect:'shield',target:f.actor,absorption:true,fx:'guard'});return blocked;
}
function damageFighter(b,attacker,defender,amount,kind,source,pierce=0,allowDodge=true){
 if(amount<=0||defender.hp<=0)return {damage:0,blocked:0,landed:false};
 const dot=['poison','bleed','burn','thorns'].includes(kind);
 if(!dot&&allowDodge&&random(b)<Math.min(.5,defender.bonuses.dodge)){
  actorEvent(b,defender,'dodge','신법 · 회피',0,null,['dodge'],{effect:'dodge',fx:'dodge',target:defender.actor});return {damage:0,blocked:0,landed:false};
 }
 const armor=dot?0:Math.max(0,defender.bonuses.armor-pierce-(source?.effectiveBonuses||attacker.bonuses).pierce),hit=dot?amount:Math.max(1,amount-armor),mitigated=Math.max(0,amount-hit);
 if(mitigated>0)actorEvent(b,defender,'armor','호신 장비 · 피해 경감',mitigated,null,['armor'],{effect:'armor',target:defender.actor,fx:'guard',silent:true});
 const blocked=absorbShield(b,defender,hit),damage=Math.min(defender.hp,hit-blocked);defender.hp=Math.max(0,defender.hp-damage);defender.received+=damage;attacker.damage+=damage;
 if(dot)attacker.poisonDamage+=damage;if(kind==='skill')attacker.skillDamage+=damage;

 return {damage,blocked,landed:true};
}
function fighterAttack(b,f,target,a,kind){
 const bonus=a.effectiveBonuses||f.bonuses,hits=a.hits||1,level=1+(a.level||0)*.3,multiplier=kind==='skill'?(1+bonus.damage+bonus.artPower)*level:1+bonus.damage+(a.level||0)*.3;
 let total=0,blocked=0,crit=false,landed=0;
 for(let j=0;j<hits&&target.hp>0&&f.hp>0;j++){
  const critical=random(b)<Math.min(.85,(a.crit||0)+bonus.crit);if(critical){f.crits++;crit=true;}
  const execute=a.execute&&target.hp/target.maxHp<=.35?a.execute:1;
  if(a.damage>0){const hit=damageFighter(b,f,target,a.damage*multiplier*(critical?1.5+bonus.critDamage:1)*execute,kind,a,a.pierce||0);total+=hit.damage;blocked+=hit.blocked;if(hit.landed)landed++;}
 }
 if(landed){applyStatus(b,f,target,a,landed,a);if(kind==='attack')applyStatus(b,f,target,bonus,landed,a,['poison','bleed','burn']);}
 if(a.shield)grantShield(b,f,a.shield*level,a.name,a);
 if(a.heal)healFighter(b,f,a.heal*level,a.name,a,[],a.fx);
 if(a.energy)f.energy=Math.min(f.maxEnergy,f.energy+a.energy);
 if(a.stun&&landed){target.frozenUntil=Math.max(target.frozenUntil,b.t+a.stun);syncFighterEquipment(target);for(let i=0;i<target.weaponReady.length;i++)target.weaponReady[i]+=a.stun;target.nextAttack=target.weaponReady[0];target.weaponTelegraphs.fill(false);for(let i=0;i<target.skillReady.length;i++)target.skillReady[i]+=a.stun;if(target.actor==='enemy')b.telegraph=false;}
 const leech=(a.lifesteal||a.leech||0)+bonus.lifesteal;if(leech)healFighter(b,f,total*leech,'흡기',a,['lifesteal'],'lifesteal');
 const type=f.actor==='enemy'?'enemy':kind,keys=['damage','crit','critDamage','pierce',...(kind==='skill'?['artPower','cooldown']:['speed','poison','bleed','burn'])];
 actorEvent(b,f,type,a.name,total,a,keys,{effect:kind,fx:a.fx||(kind==='skill'?`art-${a.tag}`:`weapon-${a.tag}`),tag:a.tag&&!['any','all'].includes(a.tag)?a.tag:a.weaponTag||f.weapon.tag,target:a.damage?target.actor:f.actor,hits,crit,blocked});
 if(landed&&target.bonuses.thorns&&f.hp>0&&target.hp>0){const reflected=damageFighter(b,target,f,target.bonuses.thorns,'thorns',null,0,false).damage;actorEvent(b,target,'thorns','반탄강기',reflected,null,['thorns'],{effect:'thorns',fx:'thorns',target:f.actor});}
}
function useConsumables(b,f,target){
 for(const c of f.medicines){
  if(f.used.includes(c.uid))continue;const trigger=(c.trigger||'lowhp').toLowerCase();
  const activate=trigger==='start'?b.t<.2:trigger==='lowhp'?f.hp>0&&f.hp<=f.maxHp*(c.threshold??.45):trigger==='lowenergy'?f.energy<=(c.threshold??1)&&b.t>=2:trigger==='poisoned'?f.statuses.poison.amount>0:trigger==='time'?b.t>=(c.time||10):false;
  if(!activate)continue;f.used.push(c.uid);let value=0;
  if(c.heal)value+=healFighter(b,f,c.heal,c.name,c,[],c.fx||'heal');if(c.shield)grantShield(b,f,c.shield,c.name,c);
  if(c.energy)f.energy=Math.min(f.maxEnergy,f.energy+c.energy);if(c.cleanse)for(const status of Object.values(f.statuses)){status.amount=0;status.until=0;status.sources=[];}
  if(c.damage)value+=damageFighter(b,f,target,c.damage,'skill',c,c.pierce||0,false).damage;applyStatus(b,f,target,c,1,c);
  actorEvent(b,f,'consume',c.name,value,c,[],{effect:'consume',fx:c.fx||(c.damage?'explosion':'elixir'),tag:c.tag,target:c.damage?target.actor:f.actor});
  if(trigger==='lowhp'&&f.hp>f.maxHp*(c.threshold??.45))break;
 }
}
function sustainFighter(b,f){
 if(b.t>=f.nextEnergy){f.energy=Math.min(f.maxEnergy,f.energy+1.25+f.bonuses.energyRegen);f.nextEnergy+=1;if(f.bonuses.energyRegen)actorEvent(b,f,'energy','내공 순환',f.bonuses.energyRegen,null,['energyRegen'],{effect:'energy',target:f.actor,silent:true});}
 for(const status of Object.values(f.statuses))if(status.until<b.t){status.amount=0;status.sources=[];}
 if(b.t>=f.nextCleanse&&f.bonuses.cleanse){for(const status of Object.values(f.statuses)){status.amount=0;status.sources=[];}f.nextCleanse=b.t+Math.max(2,f.bonuses.cleanse);actorEvent(b,f,'cleanse','정화',0,null,['cleanse'],{effect:'cleanse',fx:'cleanse',target:f.actor});}
 if(b.t>=f.nextRegen){f.nextRegen+=1;if(f.bonuses.regen)healFighter(b,f,f.bonuses.regen,'회복',null,['regen'],'regen');}
}
function finish(b,status){syncBattlePublic(b);b.status=status;b.result={status,time:+b.t.toFixed(1),hp:Math.ceil(b.hp),damage:Math.round(b.damage),skillDamage:Math.round(b.skillDamage),poisonDamage:Math.round(b.poisonDamage),received:Math.round(b.received),blocked:Math.round(b.blocked),healed:Math.round(b.healed),casts:b.casts,crits:b.crits};battleEvent(b,status,status==='won'?'승리':'패배',0,{fx:status});}
function checkEnd(b){syncBattlePublic(b);if(b.hp<=0){finish(b,'lost');return true;}if(b.rival.hp<=0){finish(b,'won');return true;}return false;}
function takeFighterTurn(b,f,target){
 if(b.t<f.frozenUntil)return;
 for(let i=0;i<f.weapons.length;i++)if(b.t>=f.weaponReady[i]){
  const weapon=f.weapons[i];fighterAttack(b,f,target,weapon,'attack');f.attacks++;f.weaponReady[i]=b.t+weapon.interval/(1+Math.min(.8,(weapon.effectiveBonuses||f.bonuses).speed));if(i===0)f.nextAttack=f.weaponReady[i];f.weaponTelegraphs[i]=false;if(checkEnd(b))return;
 }
 // Ready arts share one energy pool. Advance priority after each cast, so a
 // cheap early book cannot permanently starve later books after caps disappear.
 const count=f.arts.length,start=count?f.artCursor%count:0;
 for(let offset=0;offset<count;offset++){const i=(start+offset)%count,a=f.arts[i];if(b.t>=f.skillReady[i]){if(a.cost>f.maxEnergy)continue;if(f.energy<a.cost){f.artCursor=i;break;}f.energy-=a.cost;f.skillReady[i]=b.t+a.cooldown*(1-Math.min(.5,(a.effectiveBonuses||f.bonuses).cooldown));f.artCursor=(i+1)%count;f.casts++;fighterAttack(b,f,target,a,'skill');if(checkEnd(b))return;}}
}

export function tickBattle(b,dt=.05){
 if(b.status!=='fighting'||!Number.isFinite(dt)||dt<=0)return b;syncFighterEquipment(b);syncFighterEquipment(b.rival);
 // Retain the public flat battle fields used by the HUD and saved-game API.
 b.rival.hp=b.enemyHp;b.rival.maxHp=b.enemyMaxHp;b.rival.shield=b.enemyShield;b.rival.frozenUntil=Math.max(b.rival.frozenUntil,b.stunnedUntil||0);
 b.t+=Math.min(dt,.25);b.step++;const r=b.rival;
 sustainFighter(b,b);sustainFighter(b,r);useConsumables(b,b,r);useConsumables(b,r,b);if(checkEnd(b))return b;
 if(b.t>=b.nextPoison){
  b.nextPoison+=1;for(const [f,target]of [[b,r],[r,b]])for(const [key,rate,label]of [['poison',1.4,'중독'],['bleed',1,'출혈'],['burn',1.2,'화상']]){
   const status=target.statuses[key];if(!status.amount||target.hp<=0)continue;
   const hit=damageFighter(b,f,target,status.amount*rate*(key==='poison'?1+f.bonuses.poisonPower:1),key,null,0,false);
   battleEvent(b,f.actor==='enemy'?'enemy':'poison',label,hit.damage,{actor:f.actor,sourceUid:status.sources[0],sourceUids:status.sources,effect:'dot',fx:key,target:target.actor,blocked:hit.blocked});
  }
  useConsumables(b,b,r);useConsumables(b,r,b);
 }
 if(checkEnd(b))return b;
 // Half-health is a readable story beat, not an invisible damage multiplier.
 if(b.stage===9&&b.enemyPhase===1&&r.hp<=r.maxHp*.5){b.enemyPhase=2;actorEvent(b,r,'phase','곽진 · 보따리의 비전으로 결전을 잇는다',0,r.arts[0]||r.weapon,[],{effect:'phase',fx:'boss-awaken',target:'enemy'});}
 takeFighterTurn(b,b,r);if(b.status!=='fighting')return b;
 for(let i=0;i<r.weapons.length;i++)if(b.t>=r.weaponReady[i]-.6&&!r.weaponTelegraphs[i]&&b.t>=r.frozenUntil){r.weaponTelegraphs[i]=true;const weapon=r.weapons[i];actorEvent(b,r,'telegraph',`${weapon.name} · 공격 준비`,0,weapon,[],{effect:'ready',fx:'warning',tag:weapon.tag,target:'hero',heavy:false});}
 takeFighterTurn(b,r,b);b.telegraph=r.weaponTelegraphs.some(Boolean);useConsumables(b,b,r);useConsumables(b,r,b);
 if(checkEnd(b))return b;if(b.t>=120){finish(b,'lost');battleEvent(b,'timeout','기력이 다했다');}syncBattlePublic(b);return b;
}

export function simulate(run){const b=createBattle(run);while(b.status==='fighting')tickBattle(b);return b;}
function setScene(run,scene){run.phase='story';run.scene=scene;run.sceneIndex=0;}
export function settleBattle(run){const b=run.battle;if(!b||b.status==='fighting'||run.battles.length>run.stage)return false;run.hp=Math.max(0,Math.ceil(b.hp));run.items=run.items.filter(i=>!b.used.includes(i.uid));run.battles.push({...b.result,stage:run.stage,weapon:b.weapon.id,weapons:(b.weapons||[b.weapon]).map(w=>w.id)});if(b.status==='won'){run.gold+=ENEMIES[run.stage].gold;run.hp=Math.min(run.maxHp,run.hp+20);if(run.stage===ENEMIES.length-1){run.cleared=true;setScene(run,'ending');}else run.phase='reward';}else run.phase='defeat';return true;}
function availableItems(run){return Object.keys(ITEMS).filter(t=>(ITEMS[t].rarity||1)<=Math.min(3,1+Math.floor((run.stage+1)/3)));}
function currentTags(run){const tags=[...new Set(run.items.filter(i=>inBag(i)&&ITEMS[i.type].kind==='weapon').map(i=>ITEMS[i.type].tag))];return tags.length?tags:[run.kit];}
function currentTag(run){return currentTags(run)[0];}
export function rewardChoices(run){
 const rng=rngFor(run,0x1234abcd),owned=new Set(run.items.map(i=>i.type)),available=availableItems(run),pool=available.filter(t=>!owned.has(t)||ITEMS[t].kind==='consumable'),tags=currentTags(run),shuffled=shuffle(pool,rng),chosen=[];
 const synergies=shuffled.filter(t=>tags.includes(ITEMS[t].tag)&&['art','weapon'].includes(ITEMS[t].kind));if(synergies.length)chosen.push(synergies[0]);
 const build=shuffled.find(t=>!chosen.includes(t)&&['support','inner','art'].includes(ITEMS[t].kind));if(build)chosen.push(build);
 // Later rewards sometimes offer another physical copy. Most choices still
 // discover new equipment; duplicates consume exactly the same bag space.
 const repeats=run.stage>=2?available.filter(t=>owned.has(t)&&['weapon','inner','art','support'].includes(ITEMS[t].kind)):[];
 const repeat=repeats.length&&random(rng)<.4?shuffle(repeats,rng)[0]:null;
 const surprise=repeat||shuffled.find(t=>!chosen.includes(t)&&ITEMS[t].kind!=='consumable');if(surprise)chosen.push(surprise);chosen.push('medicine');return [...new Set(chosen)].slice(0,4);
}

function enterNextStage(run){run.battle=null;run.shopBought=[];run.shopRoll=0;run.shopOwned=run.items.map(i=>i.type);run.shopTag=currentTag(run);run.shopTags=currentTags(run);run.restChoice=null;const cleared=run.stage;if(cleared===3)setScene(run,'reveal');else if(cleared===6)setScene(run,'midpoint');else if(cleared===8)setScene(run,'proof');else if([2,5].includes(cleared))run.phase='shop';else if(cleared===9)run.phase='rest';else run.phase='prepare';}
export function selectReward(run,type){if(run.phase!=='reward'||!rewardChoices(run).includes(type))return false;addItem(run,type);run.stage++;enterNextStage(run);return true;}
export function advanceStory(run){if(run.phase!=='story'||!SCENES[run.scene])return false;const scene=SCENES[run.scene];if(run.sceneIndex<scene.length-1){run.sceneIndex++;return true;}const finished=run.scene;run.sceneIndex=0;if(finished==='ending')run.phase='complete';else if(['reveal','midpoint'].includes(finished))run.phase='rest';else if(finished==='proof')run.phase='shop';else run.phase='prepare';return true;}
export function shopChoices(run){
 const rng=rngFor(run,0x5f3759df+Math.imul(run.shopRoll||0,0x45d9f3b)),owned=new Set(run.shopOwned||run.items.map(i=>i.type)),tags=run.shopTags||(run.shopTag?[run.shopTag]:currentTags(run)),available=availableItems(run),pool=shuffle(available.filter(t=>t!=='medicine'&&(!owned.has(t)||ITEMS[t].kind==='consumable')),rng),chosen=[];
 const fit=pool.find(t=>ITEMS[t].kind==='art'&&tags.includes(ITEMS[t].tag));if(fit)chosen.push(fit);
 for(const kind of ['weapon','inner','support']){const t=pool.find(t=>ITEMS[t].kind===kind&&!chosen.includes(t));if(t)chosen.push(t);}
 // One stable stock slot can repeat any owned equipment, including supports.
 const repeat=shuffle(available.filter(t=>owned.has(t)&&['weapon','inner','art','support'].includes(ITEMS[t].kind)),rng)[0];if(repeat)chosen.push(repeat);
 for(const t of pool)if(chosen.length<7&&!chosen.includes(t))chosen.push(t);chosen.push('medicine');return chosen;
}

export function buy(run,type){if(run.phase!=='shop'||!shopChoices(run).includes(type)||run.gold<ITEMS[type].price)return false;const stock=ITEMS[type].kind==='consumable'?3:1;if(run.shopBought.filter(t=>t===type).length>=stock)return false;run.gold-=ITEMS[type].price;run.shopBought.push(type);addItem(run,type);return true;}
export function leaveShop(run){if(run.phase!=='shop')return false;run.phase='prepare';return true;}
export function rerollShop(run){if(run.phase!=='shop'||run.gold<8)return false;run.gold-=8;run.shopRoll++;run.shopBought=[];run.shopOwned=run.items.map(i=>i.type);run.shopTag=currentTag(run);run.shopTags=currentTags(run);return true;}
export function upgradeCost(item){return 20+(item?.level||0)*15;}
export function upgradeItem(run,uid,free=false){if(!['prepare','shop','rest','reward'].includes(run.phase))return false;const i=run.items.find(i=>i.uid===uid);if(!i||ITEMS[i.type].kind==='consumable'||i.level>=3)return false;const cost=upgradeCost(i);if(!free&&run.gold<cost)return false;if(!free)run.gold-=cost;i.level++;return true;}
export function sellItem(run,uid){if(!['prepare','shop','rest','reward'].includes(run.phase))return false;const index=run.items.findIndex(i=>i.uid===uid);if(index<0)return false;const i=run.items[index];if(ITEMS[i.type].kind==='weapon'&&run.items.filter(v=>ITEMS[v.type].kind==='weapon').length===1)return false;run.gold+=Math.max(1,Math.floor(ITEMS[i.type].price*.5)+i.level*8);run.items.splice(index,1);return true;}
export function restRefinementTargets(run){const stats=buildStats(run),pick=items=>items.filter(i=>i.level<3).sort((a,b)=>a.level-b.level)[0];return [pick(stats.weapons),pick(stats.arts)].filter(Boolean);}
export function rest(run,choice){if(run.phase!=='rest'||!['heal','train','meditate','expand-row','expand-col'].includes(choice))return false;if(choice.startsWith('expand-')&&!expandBag(run,choice.slice(7),'rest'))return false;run.restChoice=choice;if(choice==='heal')run.hp=Math.min(run.maxHp,run.hp+Math.ceil(run.maxHp*.65));if(choice==='train'){run.maxHp+=18;run.hp=Math.min(run.maxHp,run.hp+18);}if(choice==='meditate'){for(const i of restRefinementTargets(run))upgradeItem(run,i.uid,true);run.hp=Math.min(run.maxHp,run.hp+20);}if(run.stage===9)setScene(run,'boss');else run.phase='prepare';return true;}
function validFighter(f){
 if(!f||!['hero','enemy'].includes(f.actor)||!Array.isArray(f.arts)||f.arts.length>64||!Array.isArray(f.skillReady)||f.skillReady.length!==f.arts.length||f.skillReady.some(t=>!Number.isFinite(t))||!Array.isArray(f.medicines)||!Array.isArray(f.used)||!Array.isArray(f.shieldPools)||!f.bonuses||Object.keys(BASE_BONUSES).some(k=>!Number.isFinite(f.bonuses[k]))||!f.bonusSources||!f.statuses)return false;
 if(!ITEMS[f.weapon?.id]||!f.weapon.uid||!Number.isFinite(f.weapon.damage)||!Number.isFinite(f.weapon.interval)||f.weapon.interval<=0)return false;
 if(f.arts.some(a=>!a||ITEMS[a.id]?.kind!=='art'||!a.uid||!Number.isFinite(a.damage)||!Number.isFinite(a.cost)||a.cost<0||!Number.isFinite(a.cooldown)||a.cooldown<=0))return false;
 if(f.equipmentVersion!==undefined&&f.equipmentVersion!==2)return false;
 if(f.equipmentVersion===2||f.weapons||f.weaponReady){if(!Array.isArray(f.weapons)||!f.weapons.length||f.weapons.length>64||!Array.isArray(f.weaponReady)||f.weaponReady.length!==f.weapons.length||f.weaponReady.some(t=>!Number.isFinite(t))||f.weapons.some(w=>!w||ITEMS[w.id]?.kind!=='weapon'||!w.uid||!Number.isFinite(w.damage)||!Number.isFinite(w.interval)||w.interval<=0)||f.weapons[0].uid!==f.weapon.uid)return false;}
 if(f.equipmentVersion===2&&(!Array.isArray(f.weaponTelegraphs)||f.weaponTelegraphs.length!==f.weapons.length||f.weaponTelegraphs.some(v=>typeof v!=='boolean')||!Number.isInteger(f.artCursor)||f.artCursor<0||f.artCursor>=Math.max(1,f.arts.length)))return false;
 if(f.medicines.some(c=>!c||!ITEMS[c.id]||!c.uid))return false;
 if(f.itemBonusVersion!==undefined&&f.itemBonusVersion!==1)return false;
 for(const source of [f.weapon,...(f.weapons||[]),...f.arts,...f.medicines])if(f.itemBonusVersion===1||source.effectiveBonuses||source.effectiveBonusSources){if(!source.effectiveBonuses||Object.keys(BASE_BONUSES).some(k=>!Number.isFinite(source.effectiveBonuses[k]))||!source.effectiveBonusSources||Object.values(source.effectiveBonusSources).some(ids=>!Array.isArray(ids)))return false;}
 if(f.shieldPools.some(p=>!p||typeof p.uid!=='string'||!Number.isFinite(p.amount)||p.amount<0))return false;
 for(const key of ['hp','maxHp','shield','energy','maxEnergy','nextAttack','nextEnergy','nextRegen','nextCleanse','frozenUntil','multiplier','damage','skillDamage','poisonDamage','received','blocked','healed','casts','crits','attacks'])if(!Number.isFinite(f[key]))return false;
 if(f.hp<0||f.hp>f.maxHp||f.maxHp<=0||f.shield<0||f.energy<0||f.energy>f.maxEnergy)return false;
 for(const key of ['poison','bleed','burn']){const status=f.statuses[key];if(!status||!Number.isFinite(status.amount)||status.amount<0||!Number.isFinite(status.until)||!Array.isArray(status.sources))return false;}
 return true;
}
function validExpansionHistory(r){
 if(!Number.isInteger(r.cols)||!Number.isInteger(r.rows)||r.cols<6||r.cols>8||r.rows<6||r.rows>8)return false;
 const history=r.bagExpansions||[];if(!Array.isArray(history)||history.length>4||history.length!==r.cols+r.rows-12)return false;
 let cols=6,rows=6;const stages=new Set();for(const [n,e]of history.entries()){
  if(!e||!Number.isInteger(e.stage)||e.stage>r.stage||stages.has(e.stage)||!['row','col'].includes(e.axis)||!['shop','rest'].includes(e.method))return false;
  if(!(e.method==='shop'?[2,5,8]:[3,6,9]).includes(e.stage)||e.cost!==(e.method==='shop'?24+8*n:0))return false;
  stages.add(e.stage);if(e.axis==='row')rows++;else cols++;if(rows>8||cols>8)return false;
 }
 return cols===r.cols&&rows===r.rows;
}
function validEnemyBag(bag,stage){
 if(!bag||bag.stage!==stage||!Number.isInteger(bag.cols)||!Number.isInteger(bag.rows)||bag.cols<6||bag.cols>8||bag.rows<6||bag.rows>8||!Array.isArray(bag.items)||bag.items.length<1||bag.items.length>64)return false;
 const ids=new Set(),occupied=new Set();for(const i of bag.items){
  if(!i||!ITEMS[i.type]||typeof i.uid!=='string'||!/^e[1-9][0-9]*-[1-9][0-9]*$/.test(i.uid)||ids.has(i.uid)||!Number.isInteger(i.level)||i.level<0||i.level>3||!(typeof i.rot==='boolean'||Number.isInteger(i.rot)&&i.rot>=0&&i.rot<4)||!inBag(i))return false;
  ids.add(i.uid);for(const [x,y]of cells(i)){const key=`${x},${y}`;if(x<0||y<0||x>=bag.cols||y>=bag.rows||occupied.has(key))return false;occupied.add(key);}
 }
 return buildStats(bag).errors.length===0;
}
function validFighterSources(f,bag){
 const stats=buildStats(bag),owned=new Set(bag.items.map(i=>i.uid)),weapons=f.weapons||[f.weapon],equippedWeapons=new Map(stats.weapons.map(i=>[i.uid,i])),equippedArts=new Map(stats.arts.map(i=>[i.uid,i]));
 if(f.weapon.uid!==stats.weapon?.uid||f.weapon.id!==stats.weapon?.type||f.weapon.damage!==ITEMS[f.weapon.id]?.damage||f.weapon.interval!==ITEMS[f.weapon.id]?.interval)return false;
 if(weapons.some(w=>equippedWeapons.get(w.uid)?.type!==w.id||w.damage!==ITEMS[w.id]?.damage||w.interval!==ITEMS[w.id]?.interval)||new Set(weapons.map(w=>w.uid)).size!==weapons.length)return false;
 if(f.arts.some(a=>equippedArts.get(a.uid)?.type!==a.id)||new Set(f.arts.map(a=>a.uid)).size!==f.arts.length)return false;
 if(f.equipmentVersion===2&&(weapons.length!==stats.weapons.length||weapons.some((w,n)=>w.uid!==stats.weapons[n].uid)||f.arts.length!==stats.arts.length||f.arts.some((a,n)=>a.uid!==stats.arts[n].uid)))return false;
 if(f.medicines.some(c=>!owned.has(c.uid)||ITEMS[c.id]?.kind!=='consumable')||f.used.some(uid=>!f.medicines.some(c=>c.uid===uid)))return false;
 if(f.shieldPools.some(p=>!owned.has(p.uid)))return false;
 return [f.bonusSources,...[f.weapon,...weapons,...f.arts,...f.medicines].map(a=>a.effectiveBonusSources||{})].every(sources=>Object.values(sources).every(ids=>Array.isArray(ids)&&ids.every(uid=>owned.has(uid))));
}

function validBattleEvents(b,run){
 if(b.events.length>160)return false;const owned={hero:new Set(run.items.map(i=>i.uid)),enemy:new Set(b.enemyLoadout.items.map(i=>i.uid))},ids=new Set();
 for(const e of b.events){
  if(!e||!Number.isInteger(e.id)||e.id<=0||e.id>b.eventId||ids.has(e.id)||!Number.isFinite(e.t)||e.t<0||e.t>b.t+.011||typeof e.type!=='string'||!e.type||e.type.length>30||typeof e.text!=='string'||e.text.length>300||!Number.isFinite(e.value))return false;ids.add(e.id);
  if(e.actor&&!owned[e.actor])return false;
  if(e.sourceUid!==undefined&&(!e.actor||!owned[e.actor].has(e.sourceUid)))return false;
  if(e.sourceUids!==undefined&&(!Array.isArray(e.sourceUids)||!e.actor||e.sourceUids.some(uid=>!owned[e.actor].has(uid))))return false;
 }
 return true;
}
export function validateRun(r){try{
 if(!r||r.version!==VERSION||!Array.isArray(r.items)||r.items.length>160||!Number.isInteger(r.stage)||r.stage<0||r.stage>=ENEMIES.length||!validExpansionHistory(r)||!Number.isFinite(r.hp)||r.hp<0||r.hp>r.maxHp||!Number.isFinite(r.maxHp)||r.maxHp<140||r.maxHp>194||!Number.isFinite(r.gold)||r.gold<0||!Array.isArray(r.battles)||r.battles.length>10||!Array.isArray(r.shopBought)||!Number.isInteger(r.nextId)||r.nextId<1||!Number.isInteger(r.seed)||!KITS[r.kit])return false;
 if(!['story','prepare','combat','reward','shop','rest','complete','defeat'].includes(r.phase)||!r.items.some(i=>ITEMS[i?.type]?.kind==='weapon'))return false;
 const seen=new Set(),occupied=new Set();for(const i of r.items){if(!i||!ITEMS[i.type]||typeof i.uid!=='string'||!/^i[1-9][0-9]*$/.test(i.uid)||Number(i.uid.slice(1))>=r.nextId||seen.has(i.uid)||!(typeof i.rot==='boolean'||Number.isInteger(i.rot)&&i.rot>=0&&i.rot<4)||!Number.isInteger(i.level)||i.level<0||i.level>3)return false;seen.add(i.uid);if(i.x===null&&i.y===null)continue;if(!inBag(i))return false;const {w,h}=dimensions(i);if(i.x<0||i.y<0||i.x+w>r.cols||i.y+h>r.rows)return false;for(const c of cells(i)){const key=c.join(',');if(occupied.has(key))return false;occupied.add(key);}}
 if(r.phase==='story'&&(!SCENES[r.scene]||!Number.isInteger(r.sceneIndex)||r.sceneIndex<0||r.sceneIndex>=SCENES[r.scene].length))return false;
 if(r.phase==='combat'){
  const b=r.battle;if(!b||b.version!==3||b.stage!==r.stage||b.enemyId!==ENEMIES[r.stage].id||!Number.isFinite(b.t)||b.t<0||b.t>121||!Array.isArray(b.events)||!['fighting','won','lost'].includes(b.status)||!Number.isFinite(b.rng)||!validFighter(b)||!validFighter(b.rival)||b.actor!=='hero'||b.rival.actor!=='enemy'||!validEnemyBag(b.enemyLoadout,r.stage)||!validFighterSources(b,r)||!validFighterSources(b.rival,b.enemyLoadout)||!validBattleEvents(b,r))return false;
  for(const key of ['nextEnemy','nextPoison','stunnedUntil','enemyPoison','enemyPoisonUntil','enemyBleed','enemyBleedUntil','enemyBurn','enemyBurnUntil','heroPoison','heroPoisonUntil','enemyHp','enemyShield','enemyMaxHp','eventId','enemyAttacks'])if(!Number.isFinite(b[key]))return false;
  if(b.enemyHp<0||b.enemyHp>b.enemyMaxHp||b.enemyHp!==b.rival.hp||b.enemyShield!==b.rival.shield)return false;
 }
 return true;
}catch{return false;}}
export function migrateRun(raw){try{
 if(!raw||raw.version!==VERSION)return null;
 if(raw.rulesVersion===3){
  if(!validateRun(raw))return null;
  if(raw.phase!=='combat'||raw.battle.itemBonusVersion===1&&raw.battle.rival.itemBonusVersion===1&&raw.battle.equipmentVersion===2&&raw.battle.rival.equipmentVersion===2)return raw;
  // Old battle snapshots retain HP, resources, status effects and already
  // scheduled timers; new per-art rules apply to subsequent attacks/casts.
  const restored=JSON.parse(JSON.stringify(raw));hydrateFighterBonuses(restored.battle,restored,restored.battle.t);hydrateFighterBonuses(restored.battle.rival,restored.battle.enemyLoadout,restored.battle.t);return validateRun(restored)?restored:null;
 }
 const run=JSON.parse(JSON.stringify(raw));if(!Array.isArray(run.items)||run.items.some(i=>!i||!ITEMS[i.type]||!(typeof i.rot==='boolean'||Number.isInteger(i.rot)&&i.rot>=0&&i.rot<4)))return null;
 const placements=run.items.map(i=>({x:i.x,y:i.y,rot:rotationIndex(i.rot)}));for(const i of run.items){i.x=null;i.y=null;}let stowed=0;
 for(let n=0;n<run.items.length;n++){const item=run.items[n],p=placements[n];item.rot=p.rot;if(p.x===null&&p.y===null)continue;if(canPlace(run,item.uid,p.x,p.y,p.rot)){item.x=p.x;item.y=p.y;}else stowed++;}
 const restarted=run.phase==='combat';if(restarted){run.phase='prepare';run.battle=null;}
 run.rulesVersion=3;run.bagExpansions??=[];run.migrationNotice=[stowed?`형태가 바뀌어 겹치는 물건 ${stowed}개를 창고로 옮겼어.`:'',restarted?'전투 규칙이 바뀌어 이번 전투는 준비 화면부터 다시 시작해.':''].filter(Boolean).join(' ');
 return validateRun(run)?run:null;
}catch{return null;}}
