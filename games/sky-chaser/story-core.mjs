export const STORY_STORAGE='sky-chaser.story.v1';
const asset=name=>'./assets/'+name;
const heart=asset('story/theft.jpg'),returning=asset('story/homecoming.jpg');
export const STAGE_GOALS={
  1:'바람의 심장을 실은 수송선을 추격하세요. 아이언 레이븐이 도주로를 지키고 있습니다.',
  2:'템페스트의 송전 시설이 폭풍을 만들고 있습니다. 요새를 격추해 조선소로 가는 길을 여세요.',
  3:'해적들이 바람의 심장으로 기계룡을 기동하려 합니다. 이그니스를 멈추고 동력핵을 되찾으세요.'
};
export const BOSS_STORIES={boss:'raven',tempest:'tempest',ignis:'ignis'};
export const STAGE_STORIES={2:'canyon',3:'foundry'};
export const STORIES={
  opening:{label:'오프닝 · 빼앗긴 바람',chapter:'PROLOGUE',scenes:[
    {title:'하늘길을 달리는 배달부',text:'섬과 도시를 잇는 바람길. 룬 등대의 「바람의 심장」이 그 길을 지켜 왔다.',line:'루미에게 이 하늘은, 매일 누군가의 소식을 전하던 길이었다.',art:asset('harbor-painted-v2.png'),position:'50% 50%',duration:5500,theme:'harbor'},
    {title:'빛을 잃은 항구',text:'공중해적단이 바람의 심장을 빼앗았다. 등대가 꺼지고, 항구의 배들이 발을 묶였다.',line:'해적들은 그 힘으로 기계룡을 완성해 하늘길을 장악하려 한다.',art:heart,position:'50% 42%',duration:6500,theme:'theft'},
    {title:'첫 번째 목적지, 해풍의 항구',text:'동력핵을 실은 수송선이 멀어진다. 루미는 룬 날개를 펼치고 도주하는 선단을 뒤쫓았다.',speaker:'루미',line:'다들 기다리고 있어. 내가 되찾아올게!',art:asset('harbor-painted-v2.png'),position:'50% 42%',duration:5000,theme:'harbor'}
  ]},
  raven:{label:'1스테이지 · 후위 기함',chapter:'STAGE 01 / IRON RAVEN',scenes:[
    {title:'퇴로를 지키는 아이언 레이븐',text:'해적의 후위 기함이 퇴로를 가로막았다. 수송선이 달아날 시간을 벌려는 것이다.',speaker:'루미',line:'길 좀 비켜! 저 배를 놓칠 순 없어.',art:asset('harbor-painted-v2.png'),position:'50% 46%',boss:'airship',duration:4200,theme:'harbor'}
  ]},
  canyon:{label:'2스테이지 · 폭풍 속의 항로',chapter:'STAGE 02 / THUNDER CANYON',scenes:[
    {title:'뇌운의 협곡',text:'아이언 레이븐을 뚫었다. 수송선의 항로는 짙은 먹구름 속으로 이어져 있었다.',speaker:'루미',line:'저 송전 시설이 폭풍을 만들고 있어. 전원을 끊으면 길이 보일 거야.',art:asset('thunder-canyon-v040.png'),position:'50% 46%',duration:6500,theme:'storm'}
  ]},
  tempest:{label:'2스테이지 · 뇌전요새',chapter:'STAGE 02 / TEMPEST',scenes:[
    {title:'폭풍의 중심, 템페스트',text:'조선소를 감추는 인공 폭풍. 그 중심에서 뇌전요새가 송전망을 가동하고 있었다.',speaker:'루미',line:'하늘길을 막고 있는 건 너였구나!',art:asset('thunder-canyon-v040.png'),position:'50% 42%',boss:'tempest',duration:4200,theme:'storm'}
  ]},
  foundry:{label:'3스테이지 · 드러난 조선소',chapter:'STAGE 03 / CRIMSON FOUNDRY',scenes:[
    {title:'홍련의 조선소',text:'요새가 무너지자 먹구름이 갈라졌다. 그 너머로, 해적 군함을 만들던 붉은 조선소가 드러났다.',speaker:'루미',line:'바람의 심장은 저 안에 있어. 아직 늦지 않았어!',art:asset('crimson-foundry-v050.png'),position:'50% 43%',duration:6500,theme:'foundry'}
  ]},
  ignis:{label:'3스테이지 · 기계룡의 강제 기동',chapter:'STAGE 03 / IGNIS',scenes:[
    {title:'강제 기동, 홍련룡 이그니스',text:'추격에 몰린 해적들이 미완성 기계룡을 깨웠다. 빼앗긴 동력핵이 과열된 장갑 속에서 빛난다.',speaker:'루미',line:'그건 너희 것이 아니야. 우리 항구로 돌려보내겠어!',art:asset('crimson-foundry-v050.png'),position:'50% 46%',boss:'ignisArmor',duration:4500,theme:'foundry'}
  ]},
  ending:{label:'엔딩 · 돌아온 바람',chapter:'EPILOGUE',scenes:[
    {title:'마지막 배달',text:'기계룡의 장갑이 무너졌다. 그 안에 남은 작은 바람의 심장은 무사했다.',speaker:'루미',line:'잡았다. 이제, 집으로 가자.',art:asset('story/recovery.jpg'),position:'50% 42%',duration:6000,theme:'foundry'},
    {title:'다시 켜진 등대',text:'바람의 심장이 제자리로 돌아왔다. 룬 등대가 다시 빛나고, 멎었던 항로가 열린다.',line:'부두의 깃발이 펄럭였다. 기다리던 배들이 하나둘 하늘로 떠올랐다.',art:returning,position:'50% 43%',duration:6500,theme:'harbor'},
    {title:'바람은 다시, 우리 편',text:'루미의 목도리가 익숙한 바람을 받는다. 항구에는 다시 전해야 할 소식이 가득했다.',speaker:'루미',line:'조금 늦었지만… 배송 완료!',art:returning,position:'50% 47%',duration:5500,theme:'home'}
  ]}
};
export const STORY_IDS=Object.keys(STORIES);
const validIds=value=>Array.isArray(value)?value.filter(id=>STORY_IDS.includes(id)):[];
export function cleanStoryProgress(raw={}){
  raw=raw&&typeof raw==='object'?raw:{};
  const seen=[...new Set(validIds(raw.seen))];
  return {skipSeen:raw.skipSeen!==false,seen,unlocked:[...new Set(['opening',...validIds(raw.unlocked),...seen])]};
}
export function loadStoryProgress(storage){try{return cleanStoryProgress(JSON.parse(storage.getItem(STORY_STORAGE)||'{}'));}catch{return cleanStoryProgress();}}
export function saveStoryProgress(storage,progress,preferenceChanged=false){
  const old=loadStoryProgress(storage),next=cleanStoryProgress(progress);
  let storedPreference;try{storedPreference=JSON.parse(storage.getItem(STORY_STORAGE)||'null')?.skipSeen;}catch{}
  const skipSeen=preferenceChanged?next.skipSeen:typeof storedPreference==='boolean'?storedPreference:next.skipSeen;
  const merged=cleanStoryProgress({skipSeen,
    seen:[...old.seen,...next.seen],unlocked:[...old.unlocked,...next.unlocked]});
  try{storage.setItem(STORY_STORAGE,JSON.stringify(merged));}catch{}
  return merged;
}
export function shouldPlayStory(progress,id,mode='campaign',replay=false){
  if(!Object.hasOwn(STORIES,id))return false;
  if(replay)return progress.unlocked.includes(id);
  return mode==='campaign'&&(!progress.skipSeen||!progress.seen.includes(id));
}

// One timer per scene; cancellation and pause never run an old completion.
export class SceneTimer {
  constructor({now=()=>performance.now(),schedule=(fn,ms)=>setTimeout(fn,ms),cancel=id=>clearTimeout(id)}={}){Object.assign(this,{now,schedule,cancel});this.token=0;this.stop();}
  stop(){if(this.id!=null)this.cancel(this.id);this.id=null;this.callback=null;this.remaining=0;this.paused=false;this.token++;}
  start(ms,callback){this.stop();this.remaining=ms;this.callback=callback;this.resume();}
  pause(){if(!this.callback||this.paused)return;this.remaining=Math.max(0,this.remaining-(this.now()-this.since));if(this.id!=null)this.cancel(this.id);this.id=null;this.paused=true;this.token++;}
  resume(){if(!this.callback||this.id!=null)return;this.paused=false;this.since=this.now();const token=++this.token;
    this.id=this.schedule(()=>{if(token!==this.token||this.paused||!this.callback)return;const cb=this.callback;this.stop();cb();},Math.max(1,this.remaining));}
}
