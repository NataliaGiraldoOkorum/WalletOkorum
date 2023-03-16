module.export({getSwitchUnstyledUtilityClass:()=>getSwitchUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getSwitchUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSwitch', slot);
}
const switchUnstyledClasses = generateUtilityClasses('MuiSwitch', ['root', 'input', 'track', 'thumb', 'checked', 'disabled', 'focusVisible', 'readOnly']);
module.exportDefault(switchUnstyledClasses);