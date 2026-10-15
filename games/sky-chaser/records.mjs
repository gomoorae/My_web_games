// The original one-stage records remain at sky-chaser.v1. Two-stage runs and
// stage-two practice have independent records and share only preferences.
export function readRecords(storage){
  const empty={campaign:{easy:0,normal:0},practice2:{easy:0,normal:0}};
  let old={},saved={};
  try{old=JSON.parse(storage.getItem('sky-chaser.v1')||'{}')||{};}catch{}
  try{saved=JSON.parse(storage.getItem('sky-chaser.v2')||'{}')||{};}catch{}
  for(const route of ['campaign','practice2'])for(const mode of ['easy','normal']){
    const n=saved[route]?.[mode];if(Number.isFinite(n)&&n>=0)empty[route][mode]=Math.floor(n);
  }
  return {...empty,muted:saved.muted??old.muted??false,motion:saved.motion??old.motion??true};
}
export function writeRecords(storage,records){
  const current=readRecords(storage);
  for(const route of ['campaign','practice2'])for(const mode of ['easy','normal'])
    current[route][mode]=Math.max(current[route][mode],records[route][mode]);
  current.muted=records.muted;current.motion=records.motion;
  storage.setItem('sky-chaser.v2',JSON.stringify(current));
  return current;
}
