module.export({getMenuUnstyledUtilityClass:()=>getMenuUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getMenuUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiMenu', slot);
}
const menuUnstyledClasses = generateUtilityClasses('MuiMenu', ['root', 'listbox', 'expanded']);
module.exportDefault(menuUnstyledClasses);