// These are inspectable examples of the normal adjacency rules, not recipes.
// Shapes, rotations and shared supports work the same way in any arrangement.
const assemblyPiece=(type,x,y,rot=0)=>({type,x,y,rot,level:0});
const assemblyExample=(id,family,title,description,tradeoff,cols,rows,items)=>({
 id,family,title,description,tradeoff,cols,rows,
 items:items.map((item,n)=>({...item,uid:`${id}-${n+1}`}))
});

export const ASSEMBLY_STYLES=[
 {id:'sword',name:'검 · 옆면 나누기',principle:'긴 검날의 옆면을 작은 비급이 나눠 쓰고, 갈고리 홈에는 도구를 끼워 넣어.',tradeoff:'비급을 늘려 내공을 순환시킬지, 접촉면을 기본 공격 강화에 쓸지 고를 수 있어.'},
 {id:'saber',name:'도 · 모서리 맞물림',principle:'굽은 도와 반대쪽 모서리의 비급을 엇물리고, 남은 작은 홈을 활용해.',tradeoff:'출혈을 차곡차곡 쌓는 작은 묶음과 길게 뻗은 처형·흡혈 조합은 필요한 공간과 내공이 달라.'},
 {id:'spear',name:'창 · 긴 면 분할',principle:'네 칸의 긴 면을 나란히 쓰거나, 두 칸짜리 비급과 도구가 나눠 써.',tradeoff:'직선으로 좁고 길게 정리하거나, 용린창의 홈에 끼워 더 넓은 회전 초식과 엮을 수 있어.'},
 {id:'dart',name:'암기 · 작은 홈 활용',principle:'암기의 한 칸 홈은 독낭·혈옥매듭 같은 작은 도구에 맞아. 비급은 바깥 면에 연결해.',tradeoff:'적중 효과를 겹쳐 기본 공격을 강화할지, 바깥 면을 여러 초식과 제어에 쓸지 선택해.'},
 {id:'fist',name:'권 · 감싸기와 받침',principle:'철권갑의 모서리를 회복 비급과 엇물리거나, 큰 초식의 계단 홈에 끼워 넣어.',tradeoff:'회복을 오래 이어 가는 조합과 한 번에 강하게 치는 조합은 내공과 주변 접촉면을 다르게 써.'},
 {id:'mixed',name:'혼합 · 연결 공유',principle:'두 무기 사이의 도구, 여러 비급 사이의 도구는 같은 공간으로 여러 대상을 도울 수 있어.',tradeoff:'공유할 연결은 늘지만 무기·비급도 더 많은 공간을 차지해. 초식이 많아지면 공통 내공을 함께 써.'}
];

export const ASSEMBLIES=[
 assemblyExample('sword-circulation','sword','두 초식 사이의 현묵연',
  '매화호신의 두 칸 홈에 현묵연을 끼워 유운검법과 매화호신을 함께 연결해. 같은 두 칸으로 내공 회복 +0.8/초를 얻어.',
  '검의 옆면을 두 초식에 쓰는 대신 무기에 직접 붙일 도구 자리가 줄어. 초식 두 개는 내공을 공유해.',4,3,
  [assemblyPiece('sword',0,0),assemblyPiece('swordbook',1,0),assemblyPiece('swordguard',1,1,3),assemblyPiece('inkstone',1,1)]),
 assemblyExample('sword-critical','sword','월영검의 속도와 치명타',
  '월영검 안쪽 모서리에는 백호패를 걸고, 비단검대는 그 바깥을 채워. 일선관월은 검의 긴 바깥 면에 붙여.',
  '기본 공격 속도와 치명타에 공간을 투자한 배치야. 내공 회복이나 방어 초식은 별도로 마련해야 해.',4,3,
  [assemblyPiece('moonblade',1,0),assemblyPiece('swordpierce',3,0,1),assemblyPiece('silkwrap',0,1),assemblyPiece('tigerseal',0,0,2)]),
 assemblyExample('saber-bleed','saber','두 모서리 사이의 혈옥',
  '패왕도와 혈하삼첩을 엇물리면 가운데 한 칸이 남아. 혈옥매듭이 그 틈에서 도의 기본 공격에 출혈을 더해.',
  '3×3을 꽉 채워 출혈을 쌓지만 회복·방어와 다른 초식을 위한 공간은 밖으로 확장해야 해.',3,3,
  [assemblyPiece('saber',0,0),assemblyPiece('saberbleed',1,0),assemblyPiece('redthread',1,1)]),
 assemblyExample('saber-execution','saber','혈조도의 마무리와 흡혈',
  '혈조도의 긴 면에 단악일도를 깔고, 용아편을 바깥 모서리에 걸어. 용아편은 도와 연결된 처형 초식의 피해 흡수를 함께 도와.',
  '마무리 일격은 내공 5와 긴 재사용 시간을 요구해. 회복도 실제로 준 피해에 달려 있어.',4,3,
  [assemblyPiece('bloodsaber',0,0),assemblyPiece('saberexecute',0,2),assemblyPiece('dragonteeth',2,0,2)]),
 assemblyExample('spear-rail','spear','긴 창 양쪽의 관통',
  '백랍창과 파갑관천을 나란히 세우고, 반대편을 유성창법과 창미술이 절반씩 나눠 써. 창미술의 관통은 연결된 두 초식에도 적용돼.',
  '3×4에 빈틈없이 들어가지만 보호·회복은 없어. 두 공격 초식의 내공을 댈 방법도 필요해.',3,4,
  [assemblyPiece('spear',1,0),assemblyPiece('spearpierce',0,0),assemblyPiece('spearbook',2,0,1),assemblyPiece('tassel',2,2)]),
 assemblyExample('spear-coil','spear','받침 안쪽의 회룡',
  '용린창의 홈에서 유성창법이 회룡십팔식 쪽으로 뻗어. 아래 창미술까지 창에 닿으며 4×4 중 한 칸만 남겨.',
  '회룡십팔식으로 공격과 방어막을 함께 얻지만 내공 5를 더 요구해. 직선 배치보다 폭도 넓어져.',4,4,
  [assemblyPiece('dragonlance',0,0),assemblyPiece('spearstorm',2,0,2),assemblyPiece('spearbook',1,1),assemblyPiece('tassel',2,2)]),
 assemblyExample('dart-status','dart','두 홈의 적중 효과',
  '비도갑 양쪽 홈에 독낭과 혈옥매듭을 넣고 아래에 낙성비도를 붙여. 각 도구가 암기에 직접 닿아 중독과 출혈을 더해.',
  '도구의 추가 중독·출혈은 기본 공격에 적용돼. 같은 홈에 독낭을 두 개 넣는 식으로 지속 피해 종류를 바꿔도 돼.',3,3,
  [assemblyPiece('darts',0,0),assemblyPiece('poison',0,1),assemblyPiece('redthread',2,1),assemblyPiece('dartbook',0,2)]),
 assemblyExample('dart-control','dart','독침 아래의 두 초식',
  '폭우침갑의 가운데 홈은 독낭으로 채워. 봉혈수와 낙성비도는 아래에서 암기의 긴 면을 나눠 쓰며 3×4를 채워.',
  '한 칸 도구를 더 쌓는 대신 봉혈수의 제어와 두 초식을 선택한 배치야. 초식이 늘어난 만큼 내공 소모도 커져.',3,4,
  [assemblyPiece('needles',0,0),assemblyPiece('poison',1,0),assemblyPiece('dartstun',0,2),assemblyPiece('dartbook',1,2)]),
 assemblyExample('fist-recovery','fist','엇물린 권과 회복',
  '철권갑과 청심장법은 2×3에 맞물려. 옆의 약초함과 금창약도 홈을 채우고, 약초함의 상시 효과가 장법과 약품의 회복을 강화해.',
  '회복을 위한 공간이 커서 공격 초식의 수는 적어. 약초함은 인접 보너스가 없으니 다른 빈자리로 옮겨도 돼.',4,3,
  [assemblyPiece('gauntlet',0,0),assemblyPiece('fistheal',0,1),assemblyPiece('herbcase',2,0),assemblyPiece('medicine',3,1)]),
 assemblyExample('fist-burst','fist','계단에 받친 진산붕',
  '진산붕의 세 칸 빈 모서리에 철권갑이 들어가 3×3을 채워. 바깥 숫돌은 권갑과 연결된 진산붕의 피해를 함께 강화해.',
  '큰 한 방과 짧은 제어를 얻지만 진산붕은 내공 5를 써. 권갑이 감싸여 다른 비급을 붙일 면도 줄어들어.',4,3,
  [assemblyPiece('gauntlet',1,0),assemblyPiece('fistshock',1,0),assemblyPiece('stone',0,0,1)]),
 assemblyExample('mixed-shared-stone','mixed','검과 암기가 공유하는 숫돌',
  '비도갑의 작은 홈에서 숫돌을 아래로 뻗으면 옆의 청강검에도 닿아. 숫돌 하나가 두 무기와 각 무기에 연결된 두 비급을 함께 강화해.',
  '한 도구의 효율은 높지만 두 무기를 넣을 공간이 필요해. 검과 암기의 초식도 같은 내공을 나눠 써.',4,4,
  [assemblyPiece('sword',0,0),assemblyPiece('darts',1,0),assemblyPiece('stone',1,1,1),assemblyPiece('swordbook',0,3),assemblyPiece('dartbook',2,2)]),
 assemblyExample('mixed-shared-energy','mixed','세 초식이 공유하는 현묵연',
  '청강검과 철권갑 사이를 운영보가 잇고, 현묵연은 세 활성 무공에 닿아 내공 회복 +1.2/초를 만들어. 운영보는 두 무기에 닿아도 한 번만 시전해.',
  '서로 다른 초식을 운용하는 대신 무기 피해 도구는 빠져 있어. 회복되는 내공도 세 초식이 공유하므로 모든 재사용 때 즉시 시전되는 것은 아니야.',4,4,
  [assemblyPiece('sword',0,0),assemblyPiece('gauntlet',2,0),assemblyPiece('swordbook',0,3),assemblyPiece('fistbook',3,1,1),assemblyPiece('cloudstep',1,0),assemblyPiece('inkstone',1,2)])
];
