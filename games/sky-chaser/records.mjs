import {RUN_MODES} from './stages.mjs?v=0.10.1';
import {cleanPcSensitivity} from './pc-controls.mjs?v=0.10.1';
import {audioSettings} from './audio-settings.mjs?v=0.10.1';
// Preserve v1 (one stage) and v2 (two stages). Existing stage-two practice
// scores migrate unchanged; three-stage campaigns have their own record.
export function readRecords(storage){
  const empty=Object.fromEntries(Object.keys(RUN_MODES).map(key=>[key,{easy:0,normal:0}]));
  let old={},two={},saved={};
  try{old=JSON.parse(storage.getItem('sky-chaser.v1')||'{}')||{};}catch{}
  try{two=JSON.parse(storage.getItem('sky-chaser.v2')||'{}')||{};}catch{}
  try{saved=JSON.parse(storage.getItem('sky-chaser.v3')||'{}')||{};}catch{}
  for(const route of Object.keys(RUN_MODES))for(const mode of ['easy','normal']){
    const n=saved[route]?.[mode];if(Number.isFinite(n)&&n>=0)empty[route][mode]=Math.floor(n);
    const legacy=route==='practice2'?two.practice2?.[mode]:0;
    if(Number.isFinite(legacy)&&legacy>=0)empty[route][mode]=Math.max(empty[route][mode],Math.floor(legacy));
  }
  // Before controls revision 2 the default was 90%, without a flag distinguishing it from
  // a manually chosen 90%. Upgrade that value once; keep other adjustments.
  const controlsCurrent=Number.isFinite(saved.pcControlsVersion)&&saved.pcControlsVersion>=2;
  const sensitivity=!controlsCurrent&&saved.pcSensitivity===.9?1:saved.pcSensitivity;
  return {...empty,...audioSettings(saved),pcControlsVersion:2,pcSensitivity:cleanPcSensitivity(sensitivity),muted:saved.muted??two.muted??old.muted??false,motion:saved.motion??two.motion??old.motion??true};
}
export function writeRecords(storage,records){
  const current=readRecords(storage);
  for(const route of Object.keys(RUN_MODES))for(const mode of ['easy','normal'])
    current[route][mode]=Math.max(current[route][mode],records[route][mode]);
  current.muted=records.muted;current.motion=records.motion;
  Object.assign(current,audioSettings({musicVolume:records.musicVolume??current.musicVolume,effectsVolume:records.effectsVolume??current.effectsVolume}));
  current.pcSensitivity=cleanPcSensitivity(records.pcSensitivity,current.pcSensitivity);
  storage.setItem('sky-chaser.v3',JSON.stringify(current));
  return current;
}
