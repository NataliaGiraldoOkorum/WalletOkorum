module.export({getPopperUnstyledUtilityClass:()=>getPopperUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getPopperUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiPopper', slot);
}
const popperUnstyledClasses = generateUtilityClasses('MuiPopper', ['root']);
module.exportDefault(popperUnstyledClasses);