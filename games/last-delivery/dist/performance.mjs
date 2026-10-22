import {ITEMS} from './data.mjs';
import {buildStats,inBag} from './engine.mjs';

// Numeric presentation of the same pre-mitigation rules used by the battle
// engine. This deliberately does not invent a combined weapon + art DPS:
// energy availability, stagger, execution and enemy defenses change that rate.
function perfMetric(key,label,value,unit='',digits=1,description=''){
 return {key,label,value,unit,digits,description};
}
function perfValue(metrics,key){return metrics.find(m=>m.key===key)?.value||0;}
function perfSupportContributions(run,item,stats,bonus){
 const d=ITEMS[item.type];if(!stats.active.includes(item.uid)||!['weapon','art'].includes(d.kind))return [];
 const weapon=d.kind==='weapon',meta={damage:['피해 증가','%',100],crit:['치명타 확률','%p',100],critDamage:['치명타 배율','배',1],pierce:['방어 관통','',1],lifesteal:['피해 흡수 회복률','%p',100]};
 if(weapon)Object.assign(meta,{speed:['공격 속도 증가','%',100],poison:['기본 공격 중독','중첩/적중',1],bleed:['기본 공격 출혈','중첩/적중',1],burn:['기본 공격 화상','중첩/적중',1]});
 else Object.assign(meta,{artPower:['무공 피해 증가','%',100],cooldown:['재사용 시간 단축','%',100],energyRegen:['공통 내공 회복','/초',1],maxEnergy:['공통 최대 내공','',1]});
 if(d.heal||d.lifesteal||d.leech||bonus.lifesteal)meta.healPower=['회복 효과 증가','%',100];
 const aliases={leech:'lifesteal',energy:'energyRegen',skillDamage:'artPower'},groups=new Map(),byUid=new Map(run.items.map(i=>[i.uid,i]));
 for(const [key,[label,unit,factor]]of Object.entries(meta)){
  for(const uid of new Set(stats.itemBonusSources?.[item.uid]?.[key]||[])){
   const source=byUid.get(uid),definition=ITEMS[source?.type];if(definition?.kind!=='support'||!stats.active.includes(uid))continue;
   const base=Object.entries(definition.bonuses||{}).reduce((sum,[raw,value])=>sum+((aliases[raw]||raw)===key&&Number.isFinite(value)?value:0),0);
   const amount=stats.globalContributions?.[uid]?.[key]||base*(1+(source.level||0)*.2);if(!amount)continue;
   if(!groups.has(source.type))groups.set(source.type,{type:source.type,name:definition.name,sourceUids:[],effects:[]});
   const group=groups.get(source.type);if(!group.sourceUids.includes(uid))group.sourceUids.push(uid);
   let effect=group.effects.find(e=>e.key===key);if(!effect){effect={...perfMetric(key,label,0,unit,2),sourceUids:[]};group.effects.push(effect);}
   effect.value+=amount*factor;effect.sourceUids.push(uid);
  }
 }
 return [...groups.values()].map(group=>({...group,count:group.sourceUids.length}));
}
function perfSupportCapNotes(d,bonus,contributions){
 if(!contributions.length)return [];
 const notes=[],amount=n=>+(n*100).toFixed(2);
 if(d.kind==='weapon'&&bonus.speed>.8)notes.push(`심법 등을 포함한 공격 속도 증가 합계 +${amount(bonus.speed)}% → 적용 +80% (상한)`);
 if(d.kind==='art'&&bonus.cooldown>.5)notes.push(`심법 등을 포함한 재사용 시간 단축 합계 ${amount(bonus.cooldown)}% → 적용 50% (상한)`);
 if((d.crit||0)+bonus.crit>.85)notes.push(`고유 능력·심법을 포함한 치명타 확률 합계 ${amount((d.crit||0)+bonus.crit)}% → 적용 85% (상한)`);
 return notes;
}
function perfItem(run,item,stats){
 const d=ITEMS[item.type],active=stats.active.includes(item.uid),bonus=active?(stats.itemBonuses?.[item.uid]||stats.bonuses):{},b=k=>bonus[k]||0,level=1+(item.level||0)*.3,metrics=[];
 const artSupport=d.kind==='support'&&(d.target==='art'||d.scope==='art'),weaponSupport=d.kind==='support'&&!artSupport&&!d.global&&d.scope!=='bag',targetCount=active&&(artSupport||weaponSupport)?new Set(stats.links.filter(([source])=>source===item.uid).map(([,target])=>target)).size:0,sharedContribution=stats.globalContributions?.[item.uid],hasSharedContribution=sharedContribution&&Object.values(sharedContribution).some(value=>value!==0);
 const connectedWeapons=(stats.artWeapons?.[item.uid]||[]).map(uid=>run.items.find(i=>i.uid===uid)).filter(Boolean).map(i=>({uid:i.uid,type:i.type,name:ITEMS[i.type].name,level:i.level||0}));
 const context=active?(artSupport?`무공 ${targetCount}개 연결 · ${hasSharedContribution?'공통 능력치 합산':'각 무공에 아래 보너스 적용'}`:weaponSupport?`무기 ${targetCount}개 연결 · 각 무기에 아래 보너스 적용`:['inner','support'].includes(d.kind)?'현재 적용 중인 이 아이템의 보너스':d.kind==='art'?`현재 보따리 보너스 반영 · 연결 무기 ${connectedWeapons.map(i=>i.name).join(' · ')}`:d.kind==='consumable'?'현재 보따리 보너스 반영 · 소모품 사용 효과':'현재 보따리 보너스 반영 · 이 무기의 개별 성능'):(inBag(item)?'비활성 · 연마만 반영한 단독 성능':'보관 중 · 연마만 반영한 단독 성능');
 if(d.kind==='weapon'||d.kind==='art'){
  const weapon=d.kind==='weapon',multiplier=weapon?1+b('damage')+(item.level||0)*.3:(1+b('damage')+b('artPower'))*level,damage=(d.damage||0)*multiplier,hits=d.hits||1;
  metrics.push(perfMetric('damage','1타 피해',damage,'',2,'치명타·마무리 배율과 적 방어력·방어막 적용 전 피해입니다.'));
  if(hits>1){metrics.push(perfMetric('hits','타격 횟수',hits,'회',0));metrics.push(perfMetric('actionDamage','1회 총 피해',damage*hits,'',2,'모든 타격이 명중했을 때의 비치명타 합계입니다.'));}
  if(weapon){const interval=d.interval/(1+Math.min(.8,b('speed')));metrics.push(perfMetric('interval','기본 공격 간격',interval,'초',2));metrics.push(perfMetric('dps','기본 공격 DPS',+(damage*hits/interval).toFixed(1),'',1,'기본 공격만의 초당 피해입니다. 무공·치명타·지속 피해·적 방어와 전투 시작 대기는 제외합니다.'));}
  else{metrics.push(perfMetric('cooldown','재사용 시간',d.cooldown*(1-Math.min(.5,b('cooldown'))),'초',2,'내공이 부족하거나 행동이 지연되면 실제 발동은 더 늦어집니다.'));metrics.push(perfMetric('cost','소모 내공',d.cost,'',0));}
  metrics.push(perfMetric('crit','치명타 확률',Math.min(.85,(d.crit||0)+b('crit'))*100,'%',1,'직접 타격마다 판정합니다. 최대 85%입니다.'));
  metrics.push(perfMetric('critMultiplier','치명타 배율',1.5+b('critDamage'),'배',2));
  if(d.pierce||b('pierce'))metrics.push(perfMetric('pierce','방어 관통',(d.pierce||0)+b('pierce'),'',2));
  if(d.shield)metrics.push(perfMetric('shield','발동 방어막',d.shield*level,'',2,'무공 발동마다 얻는 방어막입니다.'));
  if(d.heal)metrics.push(perfMetric('heal','발동 회복',d.heal*level*(1+b('healPower')),'',2,'잃은 체력 이내에서 회복합니다.'));
  const leech=(d.lifesteal||d.leech||0)+b('lifesteal');
  if(leech)metrics.push(perfMetric('lifesteal','피해 흡수 회복률',leech*(1+b('healPower'))*100,'%',2,'실제로 준 피해에 대한 체력 회복률입니다. 회복 효과 보너스를 포함합니다.'));
  if(d.execute)metrics.push(perfMetric('execute','마무리 피해 배율',d.execute,'배',2,'적 체력이 35% 이하일 때 적용합니다. 위 피해·DPS에는 포함하지 않습니다.'));
  if(d.stun)metrics.push(perfMetric('stun','행동 지연',d.stun,'초',2));
  for(const [key,label]of [['poison','중독'],['bleed','출혈'],['burn','화상']]){const amount=(d[key]||0)+(weapon?b(key):0);if(amount)metrics.push(perfMetric(key,`${label} / 적중`,amount,'중첩',2,'명중한 타격마다 적용하며 대상의 최대 중첩은 12입니다.'));}
 }else if(d.kind==='consumable'){
  if(d.damage)metrics.push(perfMetric('damage','사용 피해',d.damage,'',2,'피해 증가·연마·치명타 보너스는 적용되지 않습니다. 적의 방어력·방어막 적용 전 피해입니다.'));
  if(d.heal)metrics.push(perfMetric('heal','사용 회복',d.heal*(1+b('healPower')),'',2,'잃은 체력 이내에서 회복합니다.'));
  if(d.shield)metrics.push(perfMetric('shield','사용 방어막',d.shield,'',2));
  if(d.energy)metrics.push(perfMetric('energy','사용 내공 회복',d.energy,'',2,'최대 내공을 넘겨 회복하지 않습니다.'));
  if(d.damage&&(d.pierce||b('pierce')))metrics.push(perfMetric('pierce','방어 관통',(d.pierce||0)+b('pierce'),'',2));
  for(const [key,label]of [['poison','중독'],['bleed','출혈'],['burn','화상']])if(d[key])metrics.push(perfMetric(key,`사용 ${label}`,d[key],'중첩',2));
 }else{
  const meta={damage:['직접 피해 증가','%',100],speed:['공격 속도 증가','%',100],crit:['치명타 확률 증가','%p',100],critDamage:['치명타 배율 증가','배',1],pierce:['방어 관통 증가','',1],poison:['기본 공격 중독 추가','중첩',1],bleed:['기본 공격 출혈 추가','중첩',1],burn:['기본 공격 화상 추가','중첩',1],lifesteal:['피해 흡수 회복률 증가','%p',100],shield:['시작 방어막 증가','',1],armor:['방어력 증가','',1],energyRegen:['내공 회복 증가','/초',1],maxEnergy:['최대 내공 증가','',1],artPower:['무공 피해 증가','%',100],healPower:['회복 효과 증가','%',100],thorns:['반격 피해','',1],regen:['체력 회복 증가','/초',1],dodge:['회피 확률 증가','%p',100],cleanse:['상태 정화 주기','초',1],cooldown:['무공 재사용 단축','%',100],poisonPower:['중독 피해 증가','%',100]},aliases={leech:'lifesteal',energy:'energyRegen',skillDamage:'artPower'};
  for(const [raw,value]of Object.entries(d.bonuses||{})){const key=aliases[raw]||raw,m=meta[key],contribution=active&&sharedContribution?.[key],amount=contribution||value*(1+(item.level||0)*.2);if(m&&Number.isFinite(value))metrics.push(perfMetric(key,m[0],amount*m[2],m[1],2,artSupport&&contribution?`맞닿은 활성 무공당 +${+(value*(1+(item.level||0)*.2)*m[2]).toFixed(3)}${m[1]}, 현재 ${targetCount}개. 합산한 공통 보너스입니다.`:'이 아이템이 제공하는 보너스입니다. 조합 합계의 상한은 실제 능력치에 반영합니다.'));}
 }
 const supportContributions=perfSupportContributions(run,item,stats,bonus),supportCapNotes=perfSupportCapNotes(d,bonus,supportContributions);
 return {uid:item.uid,type:item.type,name:d.name,kind:d.kind,level:item.level||0,active,context,targetCount,connectedWeapons,metrics,supportContributions,supportCapNotes};
}

export function getItemPerformance(run,uid){
 const item=run.items.find(i=>i.uid===uid);return item?perfItem(run,item,buildStats(run)):null;
}

export function buildLoadoutSummary(run){
 const stats=buildStats(run),b=stats.bonuses,weapons=(stats.weapons||[stats.weapon].filter(Boolean)).map(i=>perfItem(run,i,stats)),inners=(stats.inners||[stats.inner].filter(Boolean)).map(i=>perfItem(run,i,stats)),arts=stats.arts.map(i=>perfItem(run,i,stats));
 const metrics=[
  perfMetric('weaponCount','공격하는 무기',weapons.length,'개',0,'보따리의 모든 무기가 각자의 공격 간격으로 독립적으로 공격합니다.'),
  perfMetric('dps','기본 공격 합산 DPS',stats.baseDps,'',1,'모든 무기의 기본 초당 피해를 합산한 뒤 반올림합니다. 무공·치명타·지속 피해·적 방어와 전투 시작 대기는 제외합니다.'),
  perfMetric('armor','방어력',b.armor,'',2,'직접 적중마다 피해를 줄입니다. 상대의 관통에 의해 감소하며 지속 피해에는 적용하지 않습니다.'),
  perfMetric('shield','시작 방어막',stats.shield,'',2,'활성 장비·심법의 전투 시작 방어막입니다. 소모품과 무공의 방어막은 별도입니다.'),
  perfMetric('innerCount','활성 심법',inners.length,'개',0,'보따리에 넣은 모든 심법의 보너스를 합산합니다.'),
  perfMetric('artCount','활성 무공',arts.length,'개',0,'같은 계열 무기와 맞닿은 모든 비급이 발동합니다. 비급 하나가 여러 무기에 닿아도 한 번씩만 발동하며 내공을 함께 사용합니다.'),
  perfMetric('energyRegen','내공 회복',1.25+b.energyRegen,'/초',2,'모든 무공이 함께 쓰는 내공을 전투 중 1초마다 회복합니다. 전투 시작 내공은 2입니다.'),
  perfMetric('maxEnergy','최대 내공',8+b.maxEnergy,'',2),
  perfMetric('regen','지속 체력 회복',b.regen*(1+b.healPower),'/초',2,'회복 효과 보너스를 포함하며 잃은 체력 이내에서 회복합니다.')
 ];
 if(b.dodge)metrics.push(perfMetric('dodge','회피 확률',Math.min(.5,b.dodge)*100,'%',1,'무기·무공 타격마다 판정하며 최대 50%입니다. 소모품과 지속 피해에는 적용하지 않습니다.'));
 if(b.thorns)metrics.push(perfMetric('thorns','반격 피해',b.thorns,'',2,'명중한 상대 공격 한 번당 반격합니다. 연타 수만큼 반복하지 않습니다.'));
 if(b.healPower)metrics.push(perfMetric('healPower','회복 효과 증가',b.healPower*100,'%',1,'약품·무공·지속 회복·피해 흡수에 적용합니다.'));
 if(b.lifesteal)metrics.push(perfMetric('lifesteal','공통 피해 흡수 회복률',b.lifesteal*(1+b.healPower)*100,'%',2,'기본 공격·무공으로 실제로 준 피해에 대한 회복률입니다. 무기별 인접·고유 효과는 해당 무기 성능에 추가됩니다.'));
 if(b.cooldown)metrics.push(perfMetric('cooldownReduction','공통 무공 재사용 단축',Math.min(.5,b.cooldown)*100,'%',1,'모든 무공에 적용하는 공통 보너스입니다. 인접 보너스는 각 무공의 재사용 시간에 반영합니다. 최대 50%입니다.'));
 if(b.cleanse)metrics.push(perfMetric('cleanse','상태 정화 주기',Math.max(2,b.cleanse),'초',2,'최초 정화는 보너스 주기 뒤에, 이후에는 최소 2초 간격으로 발동합니다.'));
 if(b.poisonPower)metrics.push(perfMetric('poisonPower','중독 피해 증가',b.poisonPower*100,'%',1));
 return {valid:stats.errors.length===0,errors:[...stats.errors],metrics,weapons,inners,weapon:weapons[0]||null,arts};
}

export function compareItemLevels(run,uid,fromLevel,toLevel){
 const item=run.items.find(i=>i.uid===uid);if(!item)return null;
 const level=n=>Math.max(0,Math.min(3,Number.isFinite(n)?Math.trunc(n):0));fromLevel=level(fromLevel);toLevel=level(toLevel);
 const at=n=>getItemPerformance({...run,items:run.items.map(i=>i.uid===uid?{...i,level:n}:i)},uid),before=at(fromLevel),after=at(toLevel);
 const rows=after.metrics.flatMap(m=>{const prior=before.metrics.find(p=>p.key===m.key)?.value||0,delta=m.value-prior;return Math.abs(delta)<1e-9?[]:[{...m,before:prior,after:m.value,delta}];});
 return {uid,fromLevel,toLevel,active:after.active,context:after.context,rows};
}
