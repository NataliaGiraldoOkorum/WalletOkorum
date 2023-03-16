module.export({getSelectUnstyledUtilityClass:()=>getSelectUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getSelectUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSelect', slot);
}
const selectUnstyledClasses = generateUtilityClasses('MuiSelect', ['root', 'button', 'listbox', 'popper', 'active', 'expanded', 'disabled', 'focusVisible']);
module.exportDefault(selectUnstyledClasses);