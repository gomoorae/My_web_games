export const PC_SENSITIVITY=Object.freeze({default:1,min:.5,max:1.2,step:.05});

export function cleanPcSensitivity(value,fallback=PC_SENSITIVITY.default){
  if(typeof value!=='number'||!Number.isFinite(value))return fallback;
  const clamped=Math.max(PC_SENSITIVITY.min,Math.min(PC_SENSITIVITY.max,value));
  return Math.round(clamped*20)/20;
}

// Sensitivity applies after direction normalization, including diagonals.
// Focus keeps 70 percent of normal speed at every selected sensitivity.
// Relative touch-target movement has its own unchanged speed limit.
export function keyboardSpeed(focus=false,sensitivity=1){
  return 285*(focus?.7:1)*cleanPcSensitivity(sensitivity,1);
}
