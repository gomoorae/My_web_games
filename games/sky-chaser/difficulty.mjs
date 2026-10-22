// Stage-wide pressure grows through pace and speed, not only projectile count.
// Entry shots remain immediate; missed enemies cannot keep firing behind Lumi.
export const STAGE_PRESSURE=Object.freeze({
  1:Object.freeze({shotSpeed:1,regularInterval:1.08,fireCeiling:430,maxVolleys:3}),
  2:Object.freeze({shotSpeed:1.12,regularInterval:.98,fireCeiling:450,maxVolleys:4}),
  3:Object.freeze({shotSpeed:1.22,regularInterval:.90,fireCeiling:470,maxVolleys:4})
});
export const stagePressure=stage=>STAGE_PRESSURE[stage]||STAGE_PRESSURE[1];
export const hostileSpeed=(stage,difficulty)=>stagePressure(stage).shotSpeed*(difficulty==='easy'?.72:1);
export const regularInterval=(stage,difficulty)=>stagePressure(stage).regularInterval*(difficulty==='easy'?1.24:1);
export const regularCanFire=(e,stage)=>e.y<=stagePressure(stage).fireCeiling&&(e.volley===0||e.volley<stagePressure(stage).maxVolleys);
