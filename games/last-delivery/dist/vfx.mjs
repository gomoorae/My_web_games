// Battle choreography. Effects are visual only; the deterministic engine owns all damage.
const fxTimers=new Set(),fxAnimations=new Set();
const fxItemTimers=new Map();
const fxPoseIndex={sword:1,saber:2,spear:3,dart:4,fist:5,palm:5};
// Native leading edges in techniques.png: the red crescent bends left, unlike
// the right-facing silver arc, spearhead, dart fan and travelling palm.
const fxAtlasFacing={0:1,1:-1,2:1,3:1,4:1,5:1,7:1};
let fxPoseTimer=null,fxSerial=0,fxHeroPose=0,fxHeroFeedback=null;
// Torso landmarks in each hero atlas cell; the weapon tip and transparent
// margins are not reliable hit targets. The live DOM rect includes lunges.
const fxHeroTorso=[[.49,.37],[.49,.43],[.49,.40],[.47,.40],[.46,.35],[.47,.44]];
function fxTargetPoint(arena,target='hero'){
 const sprite=document.querySelector(target==='hero'?'#hero-fighter .body-sprite':'#enemy-fighter .body-sprite');
 const frame=arena?.getBoundingClientRect?.(),body=sprite?.getBoundingClientRect?.();
 if(!frame?.width||!frame?.height||!body?.width||!body?.height)return {x:target==='hero'?23:74,y:43};
 const [u,v]=target==='hero'?fxHeroTorso[fxHeroPose]:[.5,.40];
 return {x:Math.max(4,Math.min(96,(body.left-frame.left+body.width*u)/frame.width*100)),y:Math.max(8,Math.min(87,(body.top-frame.top+body.height*v)/frame.height*100))};
}
function fxLocation(arena,target){const point=fxTargetPoint(arena,target);return {'--effect-x':`${point.x}%`,'--effect-y':`${point.y}%`};}
function fxAttackVector(arena,from,to){
 // Percent coordinates have different scales on wide/tall arenas. Derive the
 // flight angle in pixels so the arrowhead and its trail follow the same path.
 const frame=arena?.getBoundingClientRect?.(),dx=(to.x-from.x)*(frame?.width||100)/100,dy=(to.y-from.y)*(frame?.height||100)/100,length=Math.hypot(dx,dy)||1;
 const facing=dx<0?-1:1,angle=Math.atan2(dy,dx)*180/Math.PI;
 return {facing,angle,tilt:angle-(facing<0?(dy<0?-180:180):0),x:dx/length,y:dy/length};
}
const fxReduced=()=>Boolean(globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
function fxLater(fn,ms){const id=setTimeout(()=>{fxTimers.delete(id);fn();},ms);fxTimers.add(id);return id;}
function fxAnim(el,frames,options){if(!el?.animate)return;const a=el.animate(frames,options);fxAnimations.add(a);a.finished?.then(()=>fxAnimations.delete(a)).catch(()=>fxAnimations.delete(a));return a;}
function fxNode(arena,className,life=900,style={},text=''){
 if(!arena)return null;
 const classes=className.split(/\s+/),delay=Math.max(0,parseFloat(style['--delay'])||0);
 // Keep delayed debris until its final fade has completed. Short healing
 // auras retain their intended duration instead of being cut off mid-fade.
 const duration=Math.max(0,...classes.map(name=>({'fx-spark':620,'fx-petal':1050,'fx-ground-cut':800,'fx-stone-chip':700})[name]||0));
 if(duration)life=Math.max(life,delay+duration+60);
 if(classes.includes('fx-aura'))style={'--aura-time':`${Math.max(100,life-60)}ms`,...style};
 const old=arena.querySelectorAll?.('.battle-fx')||[];
 if(old.length>52)for(let i=0;i<old.length-44;i++)old[i].remove();
 const node=document.createElement('div');node.className=`battle-fx ${className}`;
 Object.entries(style).forEach(([key,value])=>node.style.setProperty(key,String(value)));
 if(text)node.textContent=text;
 arena.appendChild(node);fxLater(()=>node.remove(),life);return node;
}
function fxSprite(arena,index,variant='',delay=0,extra={}){
 return fxNode(arena,`fx-technique ${variant}`,delay+(variant.split(/\s+/).includes('fx-cloud')?1400:1100),{'--fx-col':index%4,'--fx-row':Math.floor(index/4),'--delay':`${delay}ms`,...extra});
}
function fxInventoryNodes(){return [...(document.querySelectorAll?.('[data-live-item]')||[])];}
function fxInventoryUse(event){
 if(!event||event.silent&&event.effect!=='armor')return;
 const actor=event.actor||(event.type==='enemy'?'enemy':'hero'),effect=event.effect||event.type;
 // Source IDs come from the resolver, including the actual shield pools that
 // absorbed a hit. An equipped passive does not flash merely for existing.
 if(!['attack','skill','shield','armor','heal','consume','thorns','dodge','cleanse'].includes(effect))return;
 const kind=['shield','armor','dodge'].includes(effect)?'guard':['heal','cleanse'].includes(effect)?'heal':effect==='consume'?'consume':'attack';
 const ids=new Set([event.sourceUid,...(event.sourceUids||[])].filter(Boolean));if(!ids.size)return;
 const label=effect==='attack'?'공격':effect==='skill'?'무공 발동':effect==='shield'?(event.absorption?'방어':'보호'):effect==='armor'?'피해 경감':effect==='heal'?'회복':effect==='consume'?'사용 완료':effect==='thorns'?'반격':effect==='dodge'?'회피':'정화';
 for(const node of fxInventoryNodes()){
  const key=String(node.dataset.liveItem||''),uid=key.slice(actor.length+1);if(!key.startsWith(actor+':')||!ids.has(uid))continue;
  const old=fxItemTimers.get(node);if(old){clearTimeout(old);fxTimers.delete(old);}
  node.querySelectorAll?.('.item-use-label').forEach(el=>el.remove());
  node.dataset.itemUse=kind;node.dataset.itemContribution=uid!==event.sourceUid?'true':'false';
  const badge=document.createElement('span');badge.className='item-use-label';badge.textContent=uid===event.sourceUid?label:'효과 보탬';badge.setAttribute?.('aria-hidden','true');node.appendChild(badge);
  const timer=fxLater(()=>{delete node.dataset.itemUse;delete node.dataset.itemContribution;badge.remove();fxItemTimers.delete(node);},uid===event.sourceUid?900:650);fxItemTimers.set(node,timer);
 }
}

export function updateInventoryActivity(battle,paused=false){
 if(!battle)return;const now=battle.t||0;
 const fighters={hero:battle,enemy:battle.rival};
 for(const node of fxInventoryNodes()){
  const key=String(node.dataset.liveItem||''),split=key.indexOf(':'),owner=key.slice(0,split),uid=key.slice(split+1),fighter=fighters[owner];if(!fighter)continue;
  const spent=(fighter.used||[]).includes(uid);node.dataset.itemSpent=String(spent);
  const weapons=fighter.weapons?.length?fighter.weapons:fighter.weapon?[fighter.weapon]:[],weaponIndex=weapons.findIndex(w=>w.uid===uid),weapon=weaponIndex>=0?weapons[weaponIndex]:null,artIndex=(fighter.arts||[]).findIndex(a=>a.uid===uid),art=artIndex>=0?fighter.arts[artIndex]:null;
  let text='',progress=1;
  if(spent)text='소모됨';
  else if(weapon||art){
   const next=weapon?(weaponIndex===0?fighter.nextAttack??fighter.weaponReady?.[0]:fighter.weaponReady?.[weaponIndex]):fighter.skillReady?.[artIndex],effective=(weapon||art).effectiveBonuses||fighter.bonuses||{},duration=weapon?weapon.interval/(1+Math.min(.8,effective.speed||0)):art.cooldown*(1-Math.min(.5,effective.cooldown||0));
   const remaining=Math.max(0,(Number(next)||0)-now);progress=Math.max(0,Math.min(1,1-remaining/Math.max(.1,duration||1)));
   text=remaining>.05?`${remaining.toFixed(1)}초`:art&&fighter.energy<art.cost?'내공 대기':'준비';if(paused)text='정지 · '+text;
  }
  const labels=node.querySelectorAll?.('.item-readiness')||[];let label=labels[0];
  if(!text){labels.forEach(el=>el.remove());delete node.dataset.itemReady;continue;}
  if(!label){label=document.createElement('span');label.className='item-readiness';label.setAttribute?.('aria-hidden','true');node.appendChild(label);}
  label.textContent=text;node.style.setProperty('--item-ready',String(progress));node.dataset.itemReady=String(progress>=1&&!spent&&(!art||fighter.energy>=art.cost));
 }
}
function fxPose(tag){
 const sprite=document.querySelector('#hero-fighter .body-sprite');if(!sprite)return;
 const pose=fxPoseIndex[tag]||1;fxHeroPose=pose;sprite.style.setProperty('--sx',pose%3);sprite.style.setProperty('--sy',Math.floor(pose/3));
 if(fxPoseTimer){clearTimeout(fxPoseTimer);fxTimers.delete(fxPoseTimer);}
 fxPoseTimer=fxLater(()=>{sprite.style.setProperty('--sx',0);sprite.style.setProperty('--sy',0);fxHeroPose=0;fxPoseTimer=null;},680);
}
function fxMove(who,tag,strong=false){
 const el=document.querySelector(who==='hero'?'#hero-fighter':'#enemy-fighter');if(!el||fxReduced())return;
 const sign=who==='hero'?1:-1;
 const reach=tag==='dart'?6:tag==='spear'?25:tag==='fist'?42:tag==='saber'?34:30;
 fxAnim(el,[{transform:'translate(0,0) rotate(0)'},{transform:`translate(${-sign*7}px,${tag==='saber'?-7:0}px) rotate(${-sign*3}deg)`,offset:.16},{transform:`translate(${sign*reach*(strong?1.5:1)}px,${tag==='fist'?-5:0}px) rotate(${sign*(tag==='saber'?8:3)}deg)`,offset:.4},{transform:'translate(0,0) rotate(0)'}],{duration:strong?650:420,easing:'cubic-bezier(.2,.7,.25,1)'});
}
function fxImpact(arena,target='foe',strong=false,color='#fff0bd',seed=0,blocked=false){
 const point=fxTargetPoint(arena,target),left=point.x,el=document.querySelector(target==='hero'?'#hero-fighter':'#enemy-fighter');
 fxNode(arena,`fx-impact ${target==='hero'?'fx-hero-impact':''}`,500,{'--impact-x':`${left}%`,'--impact-y':`${point.y}%`,'--fx-color':color,'--impact-scale':strong?1.5:1});
 if(fxReduced())return;
 if(el)fxAnim(el,[{filter:'brightness(1)'},{filter:`brightness(${blocked?1.3:2.1})`,transform:`translateX(${target==='hero'?(blocked?-3:-9):9}px)`,offset:.3},{filter:'brightness(1)',transform:'translateX(0)'}],{duration:240});
 for(let i=0;i<(strong?9:4);i++){
  const angle=(i*137+seed*23)%360,radius=(strong?75:40)+(i%3)*11;
  fxNode(arena,'fx-spark',680,{'--spark-x':`${left}%`,'--spark-y':`${point.y}%`,'--dx':`${Math.cos(angle*Math.PI/180)*radius}px`,'--dy':`${Math.sin(angle*Math.PI/180)*radius}px`,'--fx-color':color,'--spark-turn':`${angle}deg`,'--delay':`${i*13}ms`});
 }
 if(strong)fxAnim(arena,[{transform:'translate(0,0)'},{transform:'translate(-3px,2px)'},{transform:'translate(3px,-2px)'},{transform:'translate(-2px,1px)'},{transform:'translate(0,0)'}],{duration:220});
}
function fxConsumableTile(event){return /poison|toxic|venom/.test(String(event.fx||''))?6:10;}
function fxEnemyAttack(arena,event){
 const key=String(event.fx||''),dot=['poison','bleed','burn'].includes(key),consumable=event.type==='consume',retaliation=event.type==='thorns',heavy=/execute|boss|collapse|thunder/.test(key),delay=dot||retaliation?0:180;
 const toxic=/poison|toxic|venom|drain/.test(key);
 const shield=Math.max(0,Number(event.blocked)||0),damage=Math.max(0,Number(event.value)||0);
 if(!dot&&!retaliation){
  const from=fxTargetPoint(arena,'foe'),to=fxTargetPoint(arena,'hero');
  const vector=fxAttackVector(arena,from,to);
  const tag=event.tag&&!['any','all'].includes(event.tag)?event.tag:consumable||toxic?'dart':/spear/.test(key)?'spear':'sword';
  fxMove('foe',tag,heavy&&!consumable);
  if(!fxReduced())fxNode(arena,'fx-incoming',delay+80,{'--from-x':`${from.x}%`,'--from-y':`${from.y}%`,'--to-x':`${to.x}%`,'--to-y':`${to.y}%`,'--flight-angle':`${vector.angle}deg`,'--flight-time':`${delay}ms`,'--fx-color':toxic?'#b7df87':'#ff9b7d'});
 }
 fxLater(()=>{
  const point=fxTargetPoint(arena,'hero'),location={'--effect-x':`${point.x}%`,'--effect-y':`${point.y}%`};
  // Compact effects stay centred on the struck body, not on a sweeping atlas
  // image whose centre may lie between the two fighters.
 const technique=consumable?fxConsumableTile(event):retaliation||shield>0&&damage===0?8:/burn|solar|flame|boss/.test(key)?10:/bleed|blood|execute|execution/.test(key)?7:/poison|drain|cloud-step/.test(key)?6:/vajra/.test(key)?8:/thunder/.test(key)?11:/moon|frost/.test(key)?5:/spear|thrust|armor-break|dragon-coil/.test(key)||event.tag==='spear'?2:/palm|fist|mountain/.test(key)||event.tag==='fist'?4:/dart|star|meridian|venom-rain/.test(key)||event.tag==='dart'?3:event.tag==='sword'?0:1;
  // Match each picture's native leading edge to the attack vector separately
  // from its approach. The red crescent already faces left, so an enemy must
  // not mirror it. Centring before reflection preserves the struck torso;
  // radial shields, clouds, fire bursts and lightning need no horizontal facing.
 const directed=!dot&&!retaliation&&!consumable&&fxAtlasFacing[technique]!==undefined;
  if(directed){
   const vector=fxAttackVector(arena,fxTargetPoint(arena,'foe'),point);
   Object.assign(location,{'--strike-facing':vector.facing/fxAtlasFacing[technique],'--strike-angle':`${vector.tilt}deg`,'--strike-entry-x':`${-vector.x*18}px`,'--strike-entry-y':`${-vector.y*18}px`,'--strike-exit-x':`${vector.x*8}px`,'--strike-exit-y':`${vector.y*8}px`});
  }
  fxSprite(arena,technique,`fx-received${directed?' fx-received-directed':''}`,0,location);
  if(shield>0)fxNode(arena,'fx-hero-shield',700,location);
 if(damage>0||shield>0)fxImpact(arena,'hero',heavy&&damage>0,damage>0?(key==='bleed'?'#ff9ba0':key==='burn'?'#ffb771':dot||technique===6?'#bde78c':'#ff8d77'):'#ffe5a0',event.id,damage===0);
  // The two events of a flurry land together; show their total in one readable
  // label instead of placing two identical numbers on top of each other.
  const stamp=Number(event.t),same=fxHeroFeedback&&Number.isFinite(stamp)&&fxHeroFeedback.stamp===stamp&&fxHeroFeedback.dot===dot;
  const totals={damage:damage+(same?fxHeroFeedback.damage:0),shield:shield+(same?fxHeroFeedback.shield:0)};
  arena.querySelectorAll?.('.fx-hit-label').forEach(node=>node.remove());
 const damageLabel=dot?(key==='bleed'?'출혈':key==='burn'?'화상':'독상'):retaliation?'반격':'피격',combinedLabel=same&&fxHeroFeedback.label!==damageLabel?(dot?'지속 피해':'피격'):damageLabel;
  let label=totals.damage>0?`${combinedLabel} −${Math.ceil(totals.damage)}`:'기혈 피해 없음';
  if(totals.shield>0)label+=` · 방어막 −${Math.ceil(totals.shield)}`;
  fxNode(arena,`fx-hit-label ${totals.damage>0?'hurt':'blocked'}`,1250,{'--hit-x':`${Math.max(18,Math.min(82,point.x))}%`,'--hit-y':`${Math.min(76,point.y+17)}%`},label);
  fxHeroFeedback={stamp,dot,label:combinedLabel,...totals};
 },delay);
}
function fxNumber(arena,value,type,target){
 if(!Number.isFinite(Number(value))||Number(value)<=0)return;
 const healing=type==='heal'||type==='shield',point=fxTargetPoint(arena,target);
 fxNode(arena,`fx-number ${type}`,1150,{'--number-x':`${point.x}%`,'--number-y':`${Math.max(10,point.y-12)}%`,'--number-offset':`${(fxSerial++%3-1)*22}px`},`${healing?'+':type==='block'?'−':''}${Math.round(Number(value))}`);
}
function fxCallout(arena,text,boss=false){
 if(!text)return;
 // Repeated simultaneous arts share the available strip instead of stacking unreadable labels.
 arena.querySelectorAll?.('.fx-callout').forEach(n=>n.remove());
 fxNode(arena,`fx-callout ${boss?'boss':''}`,1600,{},text);
}
function fxVolley(arena,count=3,strong=false,poison=false){
 for(let i=0;i<count;i++){
  fxNode(arena,`fx-projectile ${poison?'toxic':''}`,1000,{'--flight-y':`${42+(i-(count-1)/2)*(strong?7:5)}%`,'--flight-turn':`${(i-(count-1)/2)*3}deg`,'--delay':`${i*65}ms`});
 }
 fxSprite(arena,3,strong?'fx-darts-fan strong':'fx-darts-fan',60);
}
function fxRing(arena,index=9,color='#e8d2a0',target='foe',delay=0){
 const point=fxTargetPoint(arena,target);
 fxNode(arena,'fx-ring',1000+delay,{'--ring-x':`${point.x}%`,'--ring-y':`${point.y}%`,'--fx-color':color,'--delay':`${delay}ms`});
 fxSprite(arena,index,'fx-burst',delay,fxLocation(arena,target));
}
function fxWeapon(arena,tag,strong=false){
 switch(tag){
  case 'saber':fxSprite(arena,1,strong?'fx-cleave strong':'fx-cleave');fxNode(arena,'fx-ground-cut',800);break;
  case 'spear':fxSprite(arena,2,strong?'fx-thrust strong':'fx-thrust');fxNode(arena,'fx-thrust-line',650);break;
  case 'dart':fxVolley(arena,strong?5:3,strong);break;
  case 'fist':case 'palm':fxSprite(arena,4,'fx-palm');fxRing(arena,9,'#acebcf');break;
  default:fxSprite(arena,0,strong?'fx-sword strong':'fx-sword');if(strong)fxSprite(arena,0,'fx-sword reverse',110);break;
 }
}
function fxTechnique(arena,event,tag){
 const key=String(event.fx||'').toLowerCase();
 // Every learnable technique has its own silhouette, rhythm and impact placement.
 switch(key){
  case 'flowing-sword':for(let i=0;i<3;i++)fxSprite(arena,0,`fx-sword ${i%2?'reverse':''}`,i*110,{'--effect-y':`${42+i*6}%`});return;
  case 'moon-thrust':fxSprite(arena,5,'fx-frost');fxNode(arena,'fx-thrust-line',750,{'--delay':'120ms'});return;
  case 'plum-guard':fxRing(arena,8,'#f1c9d9','hero');for(let i=0;i<9;i++)fxNode(arena,'fx-petal',1200,{'--petal-x':`${25+(i%3)*11}%`,'--petal-y':`${30+Math.floor(i/3)*12}%`,'--petal-turn':`${i*46}deg`,'--delay':`${i*37}ms`});fxSprite(arena,0,'fx-sword',180);return;
  case 'thunder-cleave':fxSprite(arena,11,'fx-thunder');fxSprite(arena,1,'fx-cleave strong',180);fxNode(arena,'fx-ground-cut',1000,{'--delay':'220ms'});return;
  case 'blood-river':for(let i=0;i<3;i++)fxSprite(arena,7,'fx-blood',i*120,{'--effect-y':`${39+i*10}%`,'--effect-turn':`${i*35-35}deg`});return;
  case 'execution':fxNode(arena,'fx-execution-shadow',800);fxSprite(arena,1,'fx-cleave strong',150);fxSprite(arena,7,'fx-blood',240);fxNode(arena,'fx-ground-cut red',1000,{'--delay':'240ms'});return;
  case 'meteor-spear':for(let i=0;i<4;i++){fxSprite(arena,2,'fx-thrust',i*100,{'--effect-y':`${40+(i%2)*15}%`});fxNode(arena,'fx-thrust-line',1000,{'--delay':`${i*100}ms`,'--line-y':`${43+(i%2)*15}%`});}return;
  case 'armor-break':fxSprite(arena,2,'fx-thrust strong');fxRing(arena,8,'#ffe6a2','foe',160);fxNode(arena,'fx-shatter',1000);return;
  case 'dragon-coil':for(let i=0;i<5;i++)fxSprite(arena,2,'fx-thrust',i*80,{'--effect-y':`${35+i*8}%`,'--effect-turn':`${-22+i*11}deg`});fxRing(arena,9,'#d9e6bd','foe',300);return;
  case 'falling-stars':fxVolley(arena,5,true);for(let i=0;i<3;i++)fxNode(arena,'fx-star',850,{'--star-x':`${64+i*8}%`,'--star-y':`${36+(i%2)*19}%`,'--delay':`${150+i*80}ms`});return;
  case 'venom-rain':fxVolley(arena,6,true,true);fxSprite(arena,6,'fx-cloud',220);return;
  case 'sealed-meridians':for(let i=0;i<2;i++){fxNode(arena,'fx-projectile cyan',900,{'--flight-y':`${43+i*17}%`,'--delay':`${i*170}ms`});fxNode(arena,'fx-meridian',1000,{'--meridian-y':`${43+i*17}%`,'--delay':`${180+i*170}ms`});}return;
  case 'stone-fist':for(let i=0;i<3;i++){fxSprite(arena,4,'fx-palm',i*145,{'--effect-y':`${45+i*4}%`});fxNode(arena,'fx-stone-chip',950,{'--chip-turn':`${i*75}deg`,'--chip-x':`${67+i*4}%`,'--delay':`${140+i*145}ms`});}return;
  case 'serene-palm':fxSprite(arena,4,'fx-palm');fxSprite(arena,4,'fx-healing',230,fxLocation(arena,'hero'));fxNode(arena,'fx-aura healing',1200,fxLocation(arena,'hero'));return;
  case 'mountain-collapse':fxSprite(arena,4,'fx-palm strong');for(let i=0;i<3;i++)fxRing(arena,9,'#f2d69e','foe',i*150);fxNode(arena,'fx-ground-cut',1100);return;
  case 'cloud-step':fxSprite(arena,6,'fx-step-cloud',0,fxLocation(arena,'hero'));fxNode(arena,'fx-step-trail',950);return;
  case 'vajra-shield':fxRing(arena,8,'#f5dda0','hero');fxSprite(arena,8,'fx-vajra',180,fxLocation(arena,'hero'));return;
  case 'solar-flare':fxSprite(arena,10,'fx-flame');fxRing(arena,10,'#ffbb70','foe',120);fxNode(arena,'fx-embers',1000);return;
 }
 if(/poison|toxic|venom|mist|jade_needle/.test(key)){
  if(tag==='dart')fxVolley(arena,5,true,true);fxSprite(arena,6,'fx-cloud');fxNode(arena,'fx-aura toxic',1350);return;
 }
 if(/frost|ice|snow|cold|moon/.test(key)){
  fxSprite(arena,5,'fx-frost');fxSprite(arena,0,'fx-sword reverse',170);fxImpact(arena,'foe',true,'#c3f2ff',event.id);return;
 }
 if(/fire|flame|blaze|sun|phoenix/.test(key)){
  fxSprite(arena,10,'fx-flame');fxRing(arena,10,'#ffbb70','foe',120);fxNode(arena,'fx-embers',900);return;
 }
 if(/thunder|lightning|storm/.test(key)){
  fxSprite(arena,11,'fx-thunder');fxNode(arena,'fx-flash',180);fxRing(arena,9,'#eef7ff','foe',90);return;
 }
 if(/blood|bleed|crimson|red|execution|reap/.test(key)){
  fxSprite(arena,7,'fx-blood');fxSprite(arena,1,'fx-cleave',130);fxNode(arena,'fx-ground-cut red',900);return;
 }
 if(/shield|guard|ward|iron|protect|gold|bell/.test(key)){
  fxRing(arena,8,'#f7d78c','hero');fxNode(arena,'fx-aura gold',1200,fxLocation(arena,'hero'));if(event.value)fxWeapon(arena,tag,true);return;
 }
 if(/heal|lotus|bloom|spring|renew/.test(key)){
  fxSprite(arena,4,'fx-healing',0,fxLocation(arena,'hero'));fxNode(arena,'fx-aura healing',1000,fxLocation(arena,'hero'));return;
 }
 if(/dragon|palm|mountain|wave|quake|fist|tiger/.test(key)){
  fxSprite(arena,4,'fx-palm strong');fxRing(arena,9,'#b9edcf');fxRing(arena,9,'#f2e2a5','foe',180);return;
 }
 if(/rain|needle|dart|star/.test(key)){fxVolley(arena,7,true);return;}
 if(/spear|thrust|pierc|comet/.test(key)){fxSprite(arena,2,'fx-thrust strong');for(let i=0;i<3;i++)fxNode(arena,'fx-thrust-line',800,{'--delay':`${i*90}ms`,'--line-y':`${44+i*7}%`});return;}
 if(/saber|cleav|split|sweep/.test(key)){fxSprite(arena,1,'fx-cleave strong');fxSprite(arena,1,'fx-cleave reverse',160);fxNode(arena,'fx-ground-cut',800);return;}
 if(/sword|slash|petal|wind|swift|swallow/.test(key)){for(let i=0;i<3;i++)fxSprite(arena,i===1?5:0,`fx-sword ${i%2?'reverse':''}`,i*95,{'--effect-y':`${43+i*6}%`});return;}
 fxWeapon(arena,tag,true);
}

export function initBattleVisuals(run){
 const arena=document.querySelector('#arena');if(!arena)return;
 arena.classList.toggle('fx-reduced',fxReduced());
 arena.dataset.weapon=run?.battle?.weapon?.tag||run?.kit||'sword';
 fxHeroPose=0;fxHeroFeedback=null;
 const sprite=document.querySelector('#hero-fighter .body-sprite');if(sprite){sprite.style.setProperty('--sx',0);sprite.style.setProperty('--sy',0);}
}
export function clearEffects(){
 for(const id of fxTimers)clearTimeout(id);fxTimers.clear();fxPoseTimer=null;fxHeroPose=0;fxHeroFeedback=null;
 for(const a of fxAnimations){try{a.cancel();}catch{}}fxAnimations.clear();
 document.querySelectorAll?.('.battle-fx').forEach(node=>node.remove());
 fxItemTimers.clear();for(const node of fxInventoryNodes()){delete node.dataset.itemUse;delete node.dataset.itemContribution;delete node.dataset.itemSpent;delete node.dataset.itemReady;node.querySelectorAll?.('.item-use-label').forEach(el=>el.remove());node.querySelectorAll?.('.item-readiness').forEach(el=>el.remove());}
 const sprite=document.querySelector('#hero-fighter .body-sprite');if(sprite){sprite.style.setProperty('--sx',0);sprite.style.setProperty('--sy',0);}
}
export function battleEffect(event,run){
 if(!event)return;fxInventoryUse(event);if(event.silent)return;
 const arena=document.querySelector('#arena');if(!arena)return;
 const type=event.type,actor=event.actor||(type==='enemy'?'enemy':'hero'),tag=event.tag&&event.tag!=='any'?event.tag:(actor==='enemy'?run?.battle?.rival?.weapon?.tag:run?.battle?.weapon?.tag)||run?.kit||'sword';
 const target=event.target==='hero'?'hero':event.target==='enemy'||event.target==='foe'?'foe':type==='enemy'||type==='heal'||type==='shield'?'hero':'foe';
 if(type==='attack'||type==='skill'){
  if(Number(event.value)>0){fxPose(tag);fxMove('hero',tag,type==='skill');}
  if(type==='skill'){fxCallout(arena,event.text);fxNode(arena,'fx-inkstroke',900);fxTechnique(arena,event,tag);}
  else if(event.fx&&!['sword','saber','spear','dart','palm','fist'].includes(event.fx))fxTechnique(arena,event,tag);
  else fxWeapon(arena,tag);
  if(Number(event.value)>0)fxLater(()=>fxImpact(arena,'foe',type==='skill',tag==='dart'?'#bfdeb5':tag==='saber'?'#ffc49b':'#f4edc8',event.id),type==='skill'?180:100);
  fxNumber(arena,event.value,type,'foe');
 }else if(type==='enemy'){
  fxEnemyAttack(arena,event);
 }else if(type==='heal'||type==='shield'){
  if(event.fx==='regen'||event.fx==='lifesteal')fxNode(arena,'fx-aura healing',700,fxLocation(arena,target));
  else fxRing(arena,type==='shield'?8:4,type==='shield'?'#eed58d':'#c1eb9d',target);fxNumber(arena,event.value,type,target);
 }else if(type==='poison'||type==='bleed'||type==='burn'){
  const status=['bleed','burn'].includes(event.fx)?event.fx:type;
  fxSprite(arena,status==='poison'?6:status==='bleed'?7:10,'fx-dot',0,fxLocation(arena,target));fxNumber(arena,event.value,status,target);
 }else if(type==='telegraph'){
  if(event.heavy!==false){fxNode(arena,'fx-danger-line',1100);fxCallout(arena,event.text,true);}
  else fxNode(arena,'fx-enemy-intent',800);
 }else if(type==='phase'){
  fxNode(arena,'fx-boss-surge',1600);fxRing(arena,10,'#fc8b5e');fxCallout(arena,event.text||'적운당주의 진기',true);fxImpact(arena,'foe',true,'#feab77',event.id);
 }else if(type==='won'||type==='lost'){
  fxCallout(arena,type==='won'?'길을 열었다':'표행 중단',type==='lost');
  const el=document.querySelector(type==='won'?'#enemy-fighter':'#hero-fighter');
  if(el&&!fxReduced())fxAnim(el,[{opacity:1,transform:'translateY(0)'},{opacity:.3,transform:'translateY(22px) rotate(8deg)'}],{duration:1000,fill:'forwards'});
 }else if(type==='dodge')fxNode(arena,'fx-dodge',800,{left:target==='hero'?'24%':'72%'},'회피');
 else if(type==='consume'){
  const hostile=target===(actor==='enemy'?'hero':'foe');
  if(hostile&&actor==='enemy')fxEnemyAttack(arena,event);
  else if(hostile){const poison=fxConsumableTile(event)===6;fxSprite(arena,poison?6:10,poison?'fx-cloud':'fx-flame',0,fxLocation(arena,target));if(!poison)fxRing(arena,9,'#ffe4aa',target);if(Number(event.value)>0||Number(event.blocked)>0)fxImpact(arena,target,!poison,poison?'#bde78c':'#ffe4aa',event.id,Number(event.value)===0);fxNumber(arena,event.value,'skill',target);}
  else fxNode(arena,'fx-aura healing',850,fxLocation(arena,target));
 }else if(type==='guard'){fxRing(arena,8,'#ffe3ae',target);fxNumber(arena,event.value,'shield',target);}
 else if(type==='block'){if(target==='foe'){fxRing(arena,8,'#ffe3ae',target);fxNumber(arena,event.value,'block',target);}}
 else if(type==='thorns'){if(target==='hero')fxEnemyAttack(arena,event);else{fxSprite(arena,8,'fx-dot',0,fxLocation(arena,target));fxNumber(arena,event.value,'skill',target);}}
 else if(type==='cleanse')fxRing(arena,4,'#d0f9e1',target);
 else if(type==='debuff')fxNode(arena,'fx-aura toxic',900,fxLocation(arena,target));
}
