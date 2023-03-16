module.export({getButtonUnstyledUtilityClass:()=>getButtonUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getButtonUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiButton', slot);
}
const buttonUnstyledClasses = generateUtilityClasses('MuiButton', ['root', 'active', 'disabled', 'focusVisible']);
module.exportDefault(buttonUnstyledClasses);