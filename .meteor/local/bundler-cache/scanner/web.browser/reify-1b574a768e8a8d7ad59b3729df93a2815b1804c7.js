module.export({getTabUnstyledUtilityClass:()=>getTabUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getTabUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiTab', slot);
}
const tabUnstyledClasses = generateUtilityClasses('MuiTab', ['root', 'selected', 'disabled']);
module.exportDefault(tabUnstyledClasses);