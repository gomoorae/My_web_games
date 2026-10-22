import {SHOP_STAGES,REST_STAGES} from './data.mjs';

const BAG_MIN=6,BAG_MAX=8;
const expansionStops={shop:SHOP_STAGES,rest:REST_STAGES};

// Adding a row or column leaves every placed item exactly where it was.
// Rest progression belongs to engine.rest; this module only applies the choice.
export function expansionOptions(run,method='shop'){
 const validSize=run&&Number.isInteger(run.cols)&&Number.isInteger(run.rows)&&run.cols>=BAG_MIN&&run.cols<=BAG_MAX&&run.rows>=BAG_MIN&&run.rows<=BAG_MAX;
 const cols=validSize?run.cols:BAG_MIN,rows=validSize?run.rows:BAG_MIN;
 const history=run?.bagExpansions??[];
 const validHistory=Array.isArray(history)&&history.every(e=>e&&Number.isInteger(e.stage)&&['row','col'].includes(e.axis)&&['shop','rest'].includes(e.method)&&Number.isFinite(e.cost)&&e.cost>=0);
 const count=cols+rows-BAG_MIN*2,cost=method==='rest'?0:24+count*8;
 let commonReason='';
 if(!validSize||!validHistory)commonReason='보따리 정보를 확인할 수 없어.';
 else if(!expansionStops[method])commonReason='상점이나 휴식에서 확장할 수 있어.';
 else if(run.phase!==method||!expansionStops[method].includes(run.stage))commonReason=method==='rest'?'쉬어 가는 곳에서 보따리를 확장할 수 있어.':'상점에서 보따리 확장을 맡길 수 있어.';
 else if(history.some(e=>e.stage===run.stage))commonReason='이곳에서는 이미 한 번 확장했어.';
 else if(method==='rest'&&run.restChoice)commonReason='이번 휴식의 선택을 이미 마쳤어.';
 else if(count>=4)commonReason='보따리를 최대 크기까지 확장했어.';
 else if(method==='shop'&&(!Number.isFinite(run.gold)||run.gold<cost))commonReason=`은전 ${cost}개가 필요해.`;
 return ['col','row'].map(axis=>{
  const capped=(axis==='col'?cols:rows)>=BAG_MAX;
  const reason=commonReason||(capped?`${axis==='col'?'가로':'세로'}는 최대 ${BAG_MAX}칸이야.`:'');
  return {axis,label:axis==='col'?'가로 확장 · +1열':'세로 확장 · +1행',cost,enabled:!reason,reason,cols:cols+(axis==='col'&&!capped?1:0),rows:rows+(axis==='row'&&!capped?1:0),gain:capped?0:axis==='col'?rows:cols};
 });
}

export function expandBag(run,axis,method='shop'){
 const choice=expansionOptions(run,method).find(option=>option.axis===axis);
 if(!choice?.enabled)return false;
 run.cols=choice.cols;run.rows=choice.rows;
 if(method==='shop')run.gold-=choice.cost;
 run.bagExpansions=[...(run.bagExpansions||[]),{stage:run.stage,axis,method,cost:choice.cost}];
 return true;
}
