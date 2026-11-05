export const PC_SENSITIVITY=Object.freeze({default:1,min:.5,max:1.2,step:.05});

export function cleanPcSensitivity(value,fallback=PC_SENSITIVITY.default){
  if(typeof value!=='number'||!Number.isFinite(value))return fallback;
  const clamped=Math.max(PC_SENSITIVITY.min,Math.min(PC_SENSITIVITY.max,value));
  return Math.round(clamped*20)/20;
}

// Retain the original keyboard fallback for mobile and generic engine callers.
// Desktop input explicitly opts into its independent normal/focus profile.
export function keyboardSpeed(focus=false,sensitivity=1){
  return 285*(focus?.7:1)*cleanPcSensitivity(sensitivity,1);
}

export const PC_MOVEMENT_SPEED=Object.freeze({normal:420,focus:180});
export const PC_CONTROLS_VERSION=3;
export function pcKeyboardSpeed(focus=false,sensitivity=1,focusSensitivity=1){
  return focus?PC_MOVEMENT_SPEED.focus*cleanPcSensitivity(focusSensitivity,1):PC_MOVEMENT_SPEED.normal*cleanPcSensitivity(sensitivity,1);
}
