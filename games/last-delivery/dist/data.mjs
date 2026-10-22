// All battle values are data driven; inventory icon indices map to four 4×4 atlases.
export const VERSION=2;
const item=(id,name,kind,tag,w,h,icon,price,rarity,short,desc,extra={})=>({id,name,kind,tag,w,h,icon,price,rarity,short,desc,color:kind==='weapon'?'jade':kind==='art'?'blue':kind==='inner'?'purple':kind==='consumable'?'red':'sand',...extra});
export const ITEMS={
 sword:item('sword','청강검','weapon','sword',1,3,0,24,1,'검 · 안정적인 연격','2.1초마다 8 피해. 검 비급을 맞대면 검술이 발동한다.',{damage:8,interval:2.1,fx:'sword'}),
 darts:item('darts','비도갑','weapon','dart',2,2,1,24,1,'암기 · 세 발의 비도','2.7초마다 3 피해의 비도를 세 발 던진다. 적중 효과를 자주 쌓는다.',{damage:3,hits:3,interval:2.7,fx:'dart'}),
 swordbook:item('swordbook','유운검법','art','sword',2,1,2,22,1,'내공 3 · 검격 3회','검에 인접해야 활성화. 6 피해의 검격을 세 번 가한다. 재사용 5초.',{damage:6,hits:3,cost:3,cooldown:5,fx:'flowing-sword'}),
 dartbook:item('dartbook','낙성비도','art','dart',2,1,3,22,1,'내공 3 · 비도 5발','암기에 인접해야 활성화. 4 피해의 비도 다섯 발을 흩뿌린다. 재사용 6초.',{damage:4,hits:5,cost:3,cooldown:6,fx:'falling-stars'}),
 stone:item('stone','숫돌','support','any',2,1,4,16,1,'인접 무기 피해 +25%','맞닿은 모든 무기의 기본 공격과 그 무기에 연결된 무공 피해가 숫돌 한 개당 25% 증가한다. 숫돌 2개는 +50%, 3개는 +75%. 숫돌 한 개에서 여러 연결 경로로 이어진 효과는 대상마다 한 번 계산한다.',{target:'weapon',bonuses:{damage:.25}}),
 poison:item('poison','독낭','support','any',1,1,5,18,1,'인접 무기에 중독 +1','맞닿은 모든 무기의 기본 공격 적중마다 독낭 한 개당 중독 1중첩을 추가한다. 독낭 2개는 적중마다 +2중첩, 3개는 +3중첩. 무공에는 이 추가 중독이 적용되지 않는다.',{target:'weapon',bonuses:{poison:1}}),
 medicine:item('medicine','금창약','consumable','any',1,1,6,10,1,'체력 45% 이하 · 35 회복','체력이 45% 이하가 되면 한 번 사용해 체력을 35 회복한다.',{trigger:'lowhp',threshold:.45,heal:35}),
 armor:item('armor','철호심경','support','any',2,2,7,20,1,'보따리 · 방어력 2 · 방어막 26','보따리에 넣으면 방어력 2와 전투 시작 방어막 26을 얻는다. 방어력은 직접 적중 피해를 줄이며, 인접 조건은 없다.',{global:true,target:'any',bonuses:{armor:2,shield:26}}),
 moonblade:item('moonblade','월영검','weapon','sword',1,3,8,46,2,'검 · 빠른 치명타','1.7초마다 7 피해. 치명타 확률 +15%. 경쾌한 검격과 연속 초식에 어울린다.',{damage:7,interval:1.7,crit:.15,fx:'moon-thrust'}),
 saber:item('saber','패왕도','weapon','saber',2,3,9,26,1,'도 · 묵직한 일격','3.1초마다 17 피해. 적 방어력 1을 무시한다. 도 비급을 맞대면 도법이 발동한다.',{damage:17,interval:3.1,pierce:1,fx:'saber'}),
 bloodsaber:item('bloodsaber','혈조도','weapon','saber',2,3,10,48,2,'도 · 출혈을 남기는 칼','2.8초마다 14 피해와 출혈 2중첩. 기본 공격으로 준 피해의 5%를 체력으로 회복한다.',{damage:14,interval:2.8,bleed:2,lifesteal:.05,fx:'blood-river'}),
 spear:item('spear','백랍창','weapon','spear',1,4,11,25,1,'창 · 방어 관통','2.8초마다 15 피해. 적 방어력 2를 무시한다. 창 비급과 연결해 연속 찌르기를 펼친다.',{damage:15,interval:2.8,pierce:2,fx:'spear'}),
 dragonlance:item('dragonlance','용린창','weapon','spear',1,4,12,48,2,'창 · 철갑을 꿰는 용린','3초마다 19 피해. 적 방어력 4를 무시한다. 장갑이 단단한 적에게 강하다.',{damage:19,interval:3,pierce:4,fx:'armor-break'}),
 needles:item('needles','폭우침갑','weapon','dart',2,2,13,46,2,'암기 · 다섯 발의 독침','3초마다 2 피해의 침 다섯 발. 적중마다 중독 1중첩을 쌓는다.',{damage:2,hits:5,interval:3,poison:1,fx:'venom-rain'}),
 gauntlet:item('gauntlet','철권갑','weapon','fist',2,2,14,24,1,'권 · 빠르고 단단한 주먹','1.7초마다 8 피해. 권법 비급을 맞대면 권과 장의 초식을 쓴다.',{damage:8,interval:1.7,fx:'palm'}),
 jadeglove:item('jadeglove','청옥수','weapon','fist',2,2,15,46,2,'권 · 기혈을 돌리는 장법','1.8초마다 9 피해. 기본 공격으로 준 피해의 10%를 체력으로 회복한다.',{damage:9,interval:1.8,lifesteal:.1,fx:'serene-palm'}),
 swordpierce:item('swordpierce','일선관월','art','sword',3,1,16,32,2,'내공 4 · 관통 일격','검에 인접. 36 피해를 주며 방어력 5를 무시한다. 적 체력 35% 이하이면 피해 1.5배. 재사용 7초.',{damage:36,cost:4,cooldown:7,pierce:5,execute:1.5,fx:'moon-thrust'}),
 swordguard:item('swordguard','매화호신','art','sword',2,2,17,34,2,'내공 3 · 검격과 보호','검에 인접. 8 피해의 검격 두 번과 방어막 15를 얻는다. 재사용 7초.',{damage:8,hits:2,cost:3,cooldown:7,shield:15,fx:'plum-guard'}),
 saberbook:item('saberbook','벽력도법','art','saber',2,1,18,22,1,'내공 3 · 낙뢰 같은 참격','도에 인접. 27 피해를 주고 적의 행동을 0.6초 늦춘다. 재사용 6초.',{damage:27,cost:3,cooldown:6,stun:.6,fx:'thunder-cleave'}),
 saberbleed:item('saberbleed','혈하삼첩','art','saber',2,2,19,34,2,'내공 4 · 출혈 연속 베기','도에 인접. 8 피해를 세 번 가하고 적중마다 출혈 1중첩. 재사용 7초.',{damage:8,hits:3,cost:4,cooldown:7,bleed:1,fx:'blood-river'}),
 saberexecute:item('saberexecute','단악일도','art','saber',3,1,20,42,3,'내공 5 · 마무리 일도','도에 인접. 42 피해, 방어력 3 무시. 적 체력 35% 이하이면 피해 2배. 재사용 9초.',{damage:42,cost:5,cooldown:9,pierce:3,execute:2,fx:'execution'}),
 spearbook:item('spearbook','유성창법','art','spear',2,1,21,22,1,'내공 3 · 유성 네 줄기','창에 인접. 7 피해의 찌르기 네 번. 방어력 2를 무시한다. 재사용 6초.',{damage:7,hits:4,cost:3,cooldown:6,pierce:2,fx:'meteor-spear'}),
 spearpierce:item('spearpierce','파갑관천','art','spear',3,1,22,34,2,'내공 4 · 갑옷을 가르는 창','창에 인접. 38 피해, 방어력 8 무시. 재사용 7초.',{damage:38,cost:4,cooldown:7,pierce:8,fx:'armor-break'}),
 spearstorm:item('spearstorm','회룡십팔식','art','spear',2,2,23,42,3,'내공 5 · 회전하는 창풍','창에 인접. 7 피해의 회전 찌르기 다섯 번과 방어막 10. 재사용 8초.',{damage:7,hits:5,cost:5,cooldown:8,shield:10,fx:'dragon-coil'}),
 dartpoison:item('dartpoison','만독귀침','art','dart',2,2,24,34,2,'내공 4 · 여섯 줄기 독침','암기에 인접. 3 피해의 침 여섯 발. 적중마다 중독 2중첩. 재사용 8초.',{damage:3,hits:6,cost:4,cooldown:8,poison:2,fx:'venom-rain'}),
 dartstun:item('dartstun','봉혈수','art','dart',1,3,25,32,2,'내공 3 · 혈도를 봉하는 침','암기에 인접. 9 피해의 침 두 발을 쏘고 적의 행동을 1.5초 늦춘다. 재사용 8초.',{damage:9,hits:2,cost:3,cooldown:8,stun:1.5,fx:'sealed-meridians'}),
 fistbook:item('fistbook','쇄석권법','art','fist',2,1,26,22,1,'내공 3 · 바위를 깨는 삼연권','권갑에 인접. 7 피해의 주먹 세 번. 방어력 1을 무시한다. 재사용 5.5초.',{damage:7,hits:3,cost:3,cooldown:5.5,pierce:1,fx:'stone-fist'}),
 fistheal:item('fistheal','청심장법','art','fist',2,2,27,34,2,'내공 4 · 타격과 기혈 회복','권갑에 인접. 18 피해와 체력 15 회복. 재사용 8초.',{damage:18,cost:4,cooldown:8,heal:15,fx:'serene-palm'}),
 fistshock:item('fistshock','진산붕','art','fist',3,1,28,42,3,'내공 5 · 산을 울리는 충격','권갑에 인접. 40 피해, 방어력 3 무시. 적의 행동을 1초 늦춘다. 재사용 9초.',{damage:40,cost:5,cooldown:9,pierce:3,stun:1,fx:'mountain-collapse'}),
 cloudstep:item('cloudstep','운영보','art','any',1,2,29,28,1,'내공 2 · 몸을 흘리는 보법','어느 무기든 인접. 5 피해를 주고 방어막 14를 얻으며 적의 행동을 0.5초 늦춘다. 재사용 7초.',{damage:5,cost:2,cooldown:7,shield:14,stun:.5,fx:'cloud-step'}),
 ironpalm:item('ironpalm','금강호체','art','any',2,2,30,36,2,'내공 4 · 금강 방어막','어느 무기든 인접. 8 피해를 주고 방어막 30을 얻는다. 재사용 9초.',{damage:8,cost:4,cooldown:9,shield:30,fx:'vajra-shield'}),
 phoenix:item('phoenix','열양기공','art','any',2,2,31,42,3,'내공 5 · 불꽃 같은 기공','어느 무기든 인접. 25 피해와 화상 4중첩을 가한다. 재사용 8초.',{damage:25,cost:5,cooldown:8,burn:4,fx:'solar-flare'}),
 innerbalanced:item('innerbalanced','청하심법','inner','any',2,2,32,32,1,'내공 회복 +0.5 · 무공 +10%','보따리에 넣은 모든 심법의 효과가 합산된다. 초당 내공 회복 +0.5, 무공 피해 +10%. 보따리에 넣으면 발동한다.',{global:true,bonuses:{energyRegen:.5,artPower:.1}}),
 innerpoison:item('innerpoison','오독심경','inner','any',2,2,33,38,2,'중독 피해 +60% · 적중 중독 +1','다른 심법과 함께 운용할 수 있다. 중독 피해 +60%, 기본 공격 적중마다 중독 1중첩을 추가한다.',{global:true,bonuses:{poisonPower:.6,poison:1}}),
 innerblood:item('innerblood','혈류진경','inner','any',2,2,34,38,2,'피해 흡수 10% · 출혈 +1','다른 심법과 함께 운용할 수 있다. 기본 공격과 무공으로 준 피해의 10%를 체력으로 회복하고 기본 공격 적중 시 출혈 1중첩을 추가한다.',{global:true,bonuses:{lifesteal:.1,bleed:1}}),
 inneriron:item('inneriron','철벽호흡','inner','any',2,2,35,36,2,'방어력 1 · 방어막 40 · 반격 3','다른 심법과 함께 운용할 수 있다. 방어력 +1, 전투 시작 방어막 +40. 적이 공격하면 반격 피해 3을 준다.',{global:true,bonuses:{armor:1,shield:40,thorns:3}}),
 innerwind:item('innerwind','유풍신공','inner','any',2,2,36,38,2,'공격 속도 +25% · 회피 +8%','다른 심법과 함께 운용할 수 있다. 기본 공격 속도 +25%, 적 공격 회피 확률 +8%.', {global:true,bonuses:{speed:.25,dodge:.08}}),
 inneryang:item('inneryang','태양심결','inner','any',2,2,37,42,3,'무공 피해 +35% · 최대 내공 +3','다른 심법과 함께 운용할 수 있다. 무공 피해 +35%, 최대 내공 +3, 초당 내공 회복 +0.3.',{global:true,bonuses:{artPower:.35,maxEnergy:3,energyRegen:.3}}),
 silkwrap:item('silkwrap','비단검대','support','any',1,2,38,18,1,'인접 무기 공격 속도 +18%','맞닿은 모든 무기의 기본 공격 속도가 각각 18% 증가한다.',{target:'weapon',bonuses:{speed:.18}}),
 tassel:item('tassel','창미술','support','any',1,2,39,18,1,'인접 무기 관통 +2','맞닿은 모든 무기의 기본 공격과 그 무기에 연결된 무공이 적 방어력 2를 더 무시한다.',{target:'weapon',bonuses:{pierce:2}}),
 redthread:item('redthread','혈옥매듭','support','any',1,1,40,22,2,'인접 무기에 출혈 +1','맞닿은 모든 무기의 기본 공격 적중마다 출혈 1중첩을 추가한다.',{target:'weapon',bonuses:{bleed:1}}),
 tigerseal:item('tigerseal','백호패','support','any',1,2,41,26,2,'인접 무기 치명타 +15%','맞닿은 모든 무기와 그 무기에 연결된 무공의 치명타 확률 +15%, 치명타 배율 +0.25.',{target:'weapon',bonuses:{crit:.15,critDamage:.25}}),
 prayerbeads:item('prayerbeads','묵향염주','support','any',2,1,42,22,1,'인접 무공 피해 +20%','맞닿은 모든 활성 무공의 피해가 각각 20% 증가한다. 닿지 않은 무공에는 적용되지 않는다.',{target:'art',bonuses:{artPower:.2}}),
 jinglingbell:item('jinglingbell','청동풍령','support','any',1,2,43,24,2,'인접 무공 재사용 15% 단축','맞닿은 모든 활성 무공의 재사용 대기시간을 각각 15% 줄인다. 닿지 않은 무공에는 적용되지 않는다.',{target:'art',bonuses:{cooldown:.15}}),
 dragonteeth:item('dragonteeth','용아편','support','any',1,2,44,28,2,'인접 무기 피해 흡수 +6%','맞닿은 모든 무기와 그 무기에 연결된 무공으로 준 피해의 6%를 체력으로 회복한다.',{target:'weapon',bonuses:{lifesteal:.06}}),
 herbcase:item('herbcase','약초함','support','any',2,2,45,24,1,'보따리 · 회복 효과 +35%','보따리에 넣으면 약품과 무공의 체력 회복 효과가 35% 증가한다.',{global:true,target:'any',bonuses:{healPower:.35}}),
 ironspikes:item('ironspikes','역린갑편','support','any',2,1,46,24,2,'보따리 · 반격 3 · 방어막 10','보따리에 넣으면 방어막 10을 얻고 적 공격마다 반격 피해 3을 준다.',{global:true,target:'any',bonuses:{thorns:3,shield:10}}),
 bambooamulet:item('bambooamulet','죽엽부','support','any',1,2,47,22,1,'보따리 · 회피 +10%','보따리에 넣으면 적의 공격을 피할 확률이 10% 증가한다.',{global:true,target:'any',bonuses:{dodge:.1}}),
 inkstone:item('inkstone','현묵연','support','any',2,1,48,24,2,'인접 무공 하나당 내공 회복 +0.4','맞닿은 활성 무공 하나당 초당 내공 회복이 0.4 증가한다. 무공 3개에 닿으면 +1.2. 현묵연을 여러 개 놓으면 각각 합산한다. 현묵연 한 개가 한 무공과 여러 면으로 닿은 경우에는 한 번 계산한다.',{target:'art',bonuses:{energyRegen:.4}}),
 jadependant:item('jadependant','통맥옥','support','any',1,2,49,24,2,'보따리 · 최대 내공 +2 · 회복 +0.2','보따리에 넣으면 최대 내공 +2, 초당 내공 회복 +0.2.',{global:true,target:'any',bonuses:{maxEnergy:2,energyRegen:.2}}),
 oilflask:item('oilflask','화유병','support','any',1,2,50,26,2,'인접 무기에 화상 +1','맞닿은 모든 무기의 기본 공격 적중마다 화상 1중첩을 추가한다.',{target:'weapon',bonuses:{burn:1}}),
 ginseng:item('ginseng','백년삼','consumable','any',1,2,51,22,2,'체력 35% 이하 · 65 회복','체력이 35% 이하가 되면 한 번 사용해 체력을 65 회복한다.',{trigger:'lowhp',threshold:.35,heal:65}),
 antidote:item('antidote','청독산','consumable','any',1,1,52,12,1,'중독 시 · 해독과 18 회복','자신이 중독되면 한 번 사용해 중독을 제거하고 체력을 18 회복한다.',{trigger:'poisoned',heal:18,cleanse:true}),
 barrierpill:item('barrierpill','철기환','consumable','any',1,1,53,14,1,'전투 시작 · 방어막 35','전투가 시작되면 한 번 사용해 방어막 35를 얻는다.',{trigger:'start',shield:35}),
 qiwater:item('qiwater','운기수','consumable','any',1,1,54,14,1,'내공 부족 시 · 내공 5','전투 시작 2초 이후, 내공이 1 이하일 때 한 번 사용해 내공 5를 회복한다.',{trigger:'lowenergy',threshold:1,energy:5}),
 explosive:item('explosive','벽력탄','consumable','any',1,1,55,18,2,'전투 시작 · 폭발 피해 36','전투가 시작되면 한 번 던져 적에게 36 피해를 준다.',{trigger:'start',damage:36,fx:'thunder-cleave'}),
 toxicbottle:item('toxicbottle','독무병','consumable','any',1,1,56,18,2,'전투 시작 · 중독 8중첩','전투가 시작되면 한 번 던져 8 피해와 중독 8중첩을 가한다.',{trigger:'start',damage:8,poison:8,fx:'venom-rain'}),
 bloodpill:item('bloodpill','혈기단','consumable','any',1,1,57,18,2,'체력 50% 이하 · 회복과 내공','체력이 50% 이하가 되면 체력 25와 내공 4를 회복한다. 한 번 사용.',{trigger:'lowhp',threshold:.5,heal:25,energy:4}),
 revitalizer:item('revitalizer','회생고','consumable','any',1,2,58,26,3,'체력 25% 이하 · 80 회복','체력이 25% 이하가 되면 체력을 80 회복하고 중독을 제거한다. 치명상을 대신 막아 주지는 않는다.',{trigger:'lowhp',threshold:.25,heal:80,cleanse:true}),
 plumwine:item('plumwine','매화주','consumable','any',1,2,59,18,2,'전투 시작 · 내공 4 · 방어막 12','전투가 시작되면 한 번 마셔 내공 4와 방어막 12를 얻는다.',{trigger:'start',energy:4,shield:12})
};
// The silhouette is also the occupied footprint. Empty cells inside an item
// remain usable, and every silhouette supports all four clockwise rotations.
const ITEM_FOOTPRINTS={
 darts:{shape:['110','011'],shapeName:'엇갈림'},
 moonblade:{shape:['01','01','11'],shapeName:'갈고리'},
 saber:{shape:['10','10','11'],shapeName:'긴 ㄴ자'},
 bloodsaber:{shape:['100','111'],shapeName:'긴 ㄴ자'},
 dragonlance:{shape:['010','010','111','010'],shapeName:'십자 장형'},
 needles:{shape:['101','111'],shapeName:'ㄷ자'},
 gauntlet:{shape:['11','10'],shapeName:'모서리'},
 jadeglove:{shape:['110','011'],shapeName:'엇갈림'},
 swordguard:{shape:['111','010'],shapeName:'ㅜ자'},
 saberbleed:{shape:['110','011'],shapeName:'엇갈림'},
 saberexecute:{w:4,h:1,shapeName:'장형'},
 spearpierce:{w:1,h:4,shapeName:'장형'},
 spearstorm:{shape:['010','111','010'],shapeName:'십자'},
 dartpoison:{shape:['111','101'],shapeName:'ㄷ자'},
 dartstun:{shape:['100','111'],shapeName:'긴 ㄴ자'},
 fistheal:{shape:['10','11'],shapeName:'모서리'},
 fistshock:{w:3,h:2,shapeName:'넓은 직사각형'},
 ironpalm:{shape:['111','101','111'],shapeName:'고리'},
 phoenix:{shape:['010','111','010'],shapeName:'십자'},
 innerbalanced:{w:2,h:3,shapeName:'넓은 직사각형'},
 innerpoison:{shape:['111','101'],shapeName:'ㄷ자'},
 innerblood:{shape:['110','011'],shapeName:'엇갈림'},
 inneriron:{w:2,h:3,shapeName:'넓은 직사각형'},
 innerwind:{shape:['01','11'],shapeName:'모서리'},
 inneryang:{shape:['010','111','010'],shapeName:'십자'},
 tigerseal:{shape:['10','11'],shapeName:'모서리'},
 jinglingbell:{shape:['111','010'],shapeName:'ㅜ자'},
 dragonteeth:{shape:['10','11'],shapeName:'모서리'},
 herbcase:{shape:['11','10','11'],shapeName:'ㄷ자'},
 ironspikes:{shape:['101','111'],shapeName:'ㄷ자'},
 jadependant:{shape:['01','11'],shapeName:'모서리'},
 oilflask:{shape:['10','11'],shapeName:'모서리'},
 ginseng:{w:1,h:3,shapeName:'장형'},
 explosive:{w:2,h:2,shapeName:'정방형'},
 toxicbottle:{shape:['11','10'],shapeName:'모서리'},
 revitalizer:{shape:['10','11'],shapeName:'모서리'}
};
for(const [id,profile] of Object.entries(ITEM_FOOTPRINTS)){
 const d=ITEMS[id];Object.assign(d,profile);
 if(d.shape){d.w=Math.max(...d.shape.map(row=>row.length));d.h=d.shape.length;}
}
for(const d of Object.values(ITEMS))d.shapeName??=d.w===1&&d.h===1?'한 칸':d.w===d.h?'정방형':d.w===1||d.h===1?'장형':'직사각형';

export const KITS={
 sword:{name:'유운검객',weapon:'sword',art:'swordbook',support:'stone',desc:'빠른 검격과 치명타, 방어 초식을 엮는 균형형.'},
 saber:{name:'벽력도객',weapon:'saber',art:'saberbook',support:'stone',desc:'묵직한 일격, 출혈, 마무리 초식으로 압도한다.'},
 spear:{name:'유성창수',weapon:'spear',art:'spearbook',support:'tassel',desc:'관통과 연속 찌르기로 단단한 방어를 뚫는다.'},
 dart:{name:'낙성암수',weapon:'darts',art:'dartbook',support:'poison',desc:'다수의 암기로 중독과 출혈을 빠르게 쌓는다.'},
 fist:{name:'쇄석권사',weapon:'gauntlet',art:'fistbook',support:'armor',desc:'권장 연격에 회복과 보호 초식을 조합한다.'}
};
export const ENEMIES=[
 {id:'bandit',name:'길목도적',title:'남의 길을 막는 자',portrait:3,body:0,backIndex:0,location:'안개 낀 산길',hp:110,damage:7,interval:2.8,armor:0,gold:22,pattern:'basic',quote:'보따리만 내려놓고 가. 목숨까지 탐내는 건 아니니까.',hint:'일정한 간격으로 공격한다. 무기와 무공을 맞대어 초식을 활성화하자.',description:'약재 상자를 보더니, 도적이 칼을 빼 들었다.',back:'mountain',units:1},
 {id:'spearman',name:'적운당 창수',title:'닫힌 나루',portrait:4,body:1,backIndex:1,location:'청하 나루다리',hp:150,damage:9,interval:3,armor:1,gold:28,pattern:'spear',specialEvery:3,quote:'오늘은 나루도, 다리도 닫혔다. 돌아가라.',hint:'세 번째 공격은 강한 찌르기. 방어막과 회복을 준비하자.',description:'통행 금지 팻말 아래, 적운당의 붉은 깃발이 걸려 있었다.',back:'bridge',units:1},
 {id:'assassin',name:'녹의 독침객',title:'봉인을 쫓는 그림자',portrait:5,body:2,backIndex:2,location:'낡은 주막',hp:190,damage:8,interval:2.6,armor:0,gold:30,pattern:'poison',specialEvery:3,poison:2,quote:'장부를 읽었나? 아직이라면, 모른 채 죽는 편이 낫다.',hint:'독침으로 중독을 쌓는다. 청독산이나 회복 초식이 유용하다.',description:'문이 닫히자, 등잔 뒤에서 가느다란 침이 날아왔다.',back:'inn',units:1},
 {id:'duelist',name:'쌍도객 설호',title:'달빛을 가르는 두 칼',portrait:3,body:3,backIndex:0,location:'검푸른 대숲',hp:235,damage:10,interval:2.4,armor:1,gold:32,pattern:'duelist',specialEvery:3,quote:'네 이름을 들었다. 몰락한 표국의 마지막 표사라지.',hint:'세 번째 공격은 빠른 연격. 방어막·반격·회피 조합을 시험하자.',description:'대숲 사이로 두 자루의 곡도가 서로 다른 궤적을 그렸다.',back:'bamboo',units:1},
 {id:'checkpoint',name:'철갑병과 길목도적',title:'약재에 매겨진 통행세',portrait:4,body:4,minions:[0],backIndex:1,location:'수로 검문소',hp:290,damage:12,interval:2.9,armor:3,gold:38,pattern:'armored',specialEvery:3,shield:24,quote:'관가의 물자라면 통행세부터 내라. 사람 목숨도 공짜가 아니다.',hint:'철갑과 방어막으로 버틴다. 관통·중독·출혈이 유리하다.',description:'창고에서 나온 구휼 상자가 검문소 뒤편에 쌓여 있었다.',back:'ferry',units:2},
 {id:'executor',name:'집행관 진백',title:'돌아갈 수 있는 마지막 길',portrait:4,body:5,backIndex:2,location:'폐역참',hp:380,damage:15,interval:3,armor:2,gold:46,pattern:'executor',specialEvery:3,quote:'표국 하나 다시 세울 돈을 주겠다. 장부만 두고 떠나라.',hint:'세 번째 공격은 처형 일격. 제어 초식이나 충분한 회복을 준비하자.',description:'젖은 장부 위에 금괴 하나가 놓였다. 연우는 손을 대지 않았다.',back:'relay',units:1},
 {id:'levee',name:'추격 창수와 독침객',title:'물길마저 닫히기 전에',portrait:5,body:1,minions:[2],backIndex:1,location:'성 밖 제방',hp:420,damage:14,interval:2.6,armor:2,gold:40,pattern:'duo',specialEvery:3,poison:2,quote:'성까지 가지 못한다. 물러설 길도 이제 없다.',hint:'연속 공격과 독침이 함께 온다. 약품을 창고에 두지 말고 보따리에 넣자.',description:'멀리 성벽이 보였지만, 제방 양쪽에서 발소리가 좁혀 왔다.',back:'levee',units:2},
 {id:'warehouse',name:'적운당 술사와 철갑병',title:'창고 안의 굶주림',portrait:4,body:6,minions:[4],backIndex:2,location:'구휼 창고',hp:510,damage:16,interval:2.9,armor:3,gold:44,pattern:'channeler',specialEvery:3,shield:30,quote:'이 물자는 당의 것이다. 굶주린 자에게 나눠 줄 의무는 없어.',hint:'기공 공격이 내공을 소모시킨다. 내공 회복 심법과 기본 공격 강화가 유용하다.',description:'구휼소의 인장이 찍힌 자루들이 천장까지 쌓여 있었다.',back:'warehouse',units:2},
 {id:'gatekeepers',name:'성문 쌍도객과 창수',title:'열어야 할 문',portrait:3,body:3,minions:[1],backIndex:3,location:'청하성 남문',hp:580,damage:17,interval:2.8,armor:3,gold:48,pattern:'gate',specialEvery:3,quote:'당주님의 명령이다. 아무도 문을 통과할 수 없다.',hint:'빠른 연격 뒤에 강한 찌르기가 온다. 마지막 정비를 위한 물자를 아끼지 말자.',description:'문 안쪽에서 아이의 울음소리가 들렸다. 연우가 보따리 끈을 고쳐 맸다.',back:'gate',units:2},
 {id:'gwoakjin',name:'적운당주 곽진',title:'닫힌 문 앞의 마지막 표행',portrait:4,body:7,backIndex:3,location:'청하성 문루 광장',hp:760,damage:18,interval:2.8,armor:4,gold:0,pattern:'boss',specialEvery:3,intensifyAt:.5,phaseThreshold:.5,phaseDamage:1.35,phaseSpeed:1.25,phase2:{damage:1.35,interval:.8,armor:2},quote:'표사 하나가 세상을 바꿀 수 있을 것 같으냐?',hint:'연마된 무기와 세 가지 비급을 갖춘 마지막 상대다. 보따리의 회복·방어 연결을 살펴보고 대비하자.',description:'곽진은 성문 한가운데 섰다. 그 뒤로 약을 기다리는 사람들이 보였다.',back:'plaza',units:1}
];
export const SCENES={
 opening:[
 {who:'소연',portrait:1,text:'동이 트기 전에 청하성 구휼소까지 가야 해요. 약이 떨어진 지 이틀이 됐어요.'},
 {who:'연우',portrait:0,text:'약재 상자 하나. 봉인된 장부 하나. 길이 막혔다고 했소?'},
 {who:'소연',portrait:1,text:'적운당이 나루를 지키고 있어요. 선금은 이것뿐이에요. 나머지는 도착하면…'},
 {who:'연우',portrait:0,text:'도착해서 이야기합시다. 맡은 표물은 가져다 드리겠소.'}
 ],
 reveal:[
 {who:'독침객',portrait:5,text:'약 몇 상자 때문에… 당주와 등을 질 셈이냐.'},
 {who:'소연',portrait:1,text:'봉인이 찢어졌어요. 이 장부… 구휼소에 도착했다는 물자가 적혀 있어요. 받은 적도 없는데.'},
 {who:'연우',portrait:0,text:'길을 막은 이유가 있었군. 굶주림을 팔아 금고를 채우고 있었어.'},
 {who:'소연',portrait:1,text:'장부의 마지막 장에 창고 위치가 있어요. 약만 전하는 것으로는 끝나지 않겠네요.'},
 {who:'연우',portrait:0,text:'그래도 우리가 갈 곳은 같소. 청하성. 동이 트기 전까지.'}
 ],
 midpoint:[
 {who:'진백',body:5,portrait:4,text:'적운당을 거슬러 살아남을 수 있다고 믿나? 당주께서는 아직 거래할 뜻이 있다.'},
 {who:'진백',body:5,portrait:4,text:'네 표국은 빚 때문에 문을 닫았다지. 장부 한 권이면 옛 간판을 다시 걸 수 있다.'},
 {who:'연우',portrait:0,text:'그 간판 아래에서는 맡은 표물을 버리지 않았소.'},
 {who:'소연',portrait:1,text:'연우 씨… 사실 잔금도 없어요. 구휼소는 이미 빈털터리예요. 미안해요.'},
 {who:'연우',portrait:0,text:'알고 있었소. 그 상자를 안는 사람 손을 보면 알 수 있지.'},
 {who:'연우',portrait:0,text:'계약은 아직 끝나지 않았소. 성문까지 갑시다.'}
 ],
 proof:[
 {who:'소연',portrait:1,text:'이 약재… 저희가 세 달 전에 주문한 거예요. 여기 있었어요. 전부.'},
 {who:'만복',portrait:2,text:'창고 인장과 장부가 맞아떨어지는군. 이제 저들이 발뺌하지는 못하겠어.'},
 {who:'연우',portrait:0,text:'증거를 사람들에게 보여 주시오. 우린 약을 먼저 들고 성문으로 가겠소.'},
 {who:'만복',portrait:2,text:'성문 앞에서 쓸 물건들을 챙겨 뒀소. 필요한 것이 있으면 골라 보시오. 마지막 정비를 하고 가야지.'},
 {who:'소연',portrait:1,text:'문만 열리면 이 물자도 사람들에게 갈 수 있어요. 조금만 더 가요.'}
 ],
 boss:[
 {who:'곽진',body:7,portrait:4,text:'내 창고를 털고 부하들을 쓰러뜨렸더군. 고작 약쟁이 하나의 심부름으로.'},
 {who:'연우',portrait:0,text:'문을 여시오. 저 안에 약을 기다리는 사람들이 있소.'},
 {who:'곽진',body:7,portrait:4,text:'내가 막아 주지 않으면 이 성은 무너진다. 굶주림도 질서의 대가다.'},
 {who:'소연',portrait:1,text:'질서가 아니라 사람들의 목숨을 담보로 잡았을 뿐이에요. 장부는 이미 성 안에 들어갔어요.'},
 {who:'곽진',body:7,portrait:4,text:'그렇다면 너희는 여기서 끝이다.'},
 {who:'연우',portrait:0,text:'표행은 도착해야 끝나는 법이지.'}
 ],
 ending:[
 {who:'소연',portrait:1,text:'문이 열렸어요. 사람들이 나오고 있어요. 약을… 어서 약을 가져가야 해요.'},
 {who:'연우',portrait:0,text:'표물, 약재 상자 하나. 수취 확인을 부탁하오.'},
 {who:'소연',portrait:1,text:'확인했어요. 한 상자도 잃지 않았어요. 정말 고마워요.'},
 {who:'만복',portrait:2,text:'장부를 본 사람들이 창고를 열었소. 곽진의 부하들도 무기를 내려놓더군.'},
 {who:'연우',portrait:0,text:'그럼 이제 돌아갈 시간이군.'},
 {who:'소연',portrait:1,text:'다음 표행도 맡아 주실래요? 북쪽 마을에도 약이 필요해요. 이번에는 제대로 값을 치를게요.'},
 {who:'연우',portrait:0,text:'길이 어디로 이어지는지부터 듣겠소.'},
 {who:'이튿날 아침',portrait:0,text:'성문에 햇빛이 닿았다. 사람들은 문을 연 이를 표사라 불렀다. 마지막일 줄 알았던 표행이, 다시 이어지고 있었다.'}
 ]
};
export const SCENE_TITLES={opening:'맡은 표물',reveal:'찢어진 봉인',midpoint:'간판의 값',proof:'쌓여 있던 약재',boss:'문을 여는 사람',ending:'다시 이어지는 길'};
export const ROUTE=['산길','나루','주막','대숲','검문소','폐역참','제방','창고','성문','곽진'];
export const SHOP_STAGES=[2,5,8];
export const REST_STAGES=[3,6,9];
export const KIND_LABEL={weapon:'무기',art:'무공',inner:'심법',support:'보조품',consumable:'약품'};
export const TAG_LABEL={sword:'검',saber:'도',spear:'창',dart:'암기',fist:'권',any:'공통'};
