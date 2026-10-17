export const PC_SENSITIVITY=Object.freeze({default:.9,min:.5,max:1.2,step:.05});

export function cleanPcSensitivity(value,fallback=PC_SENSITIVITY.default){
  if(typeof value!=='number'||!Number.isFinite(value))return fallback;
  const clamped=Math.max(PC_SENSITIVITY.min,Math.min(PC_SENSITIVITY.max,value));
  return Math.round(clamped*20)/20;
}

// Omitted input keeps the engine's original speed, including mobile controls.
// The desktop UI explicitly supplies its saved preference after direction
// normalization, so diagonal movement receives the same sensitivity.
export function keyboardSpeed(focus=false,sensitivity=1){
  return (focus?125:285)*cleanPcSensitivity(sensitivity,1);
}
