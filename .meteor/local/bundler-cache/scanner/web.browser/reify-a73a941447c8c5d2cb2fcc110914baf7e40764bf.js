module.export({getMenuItemUnstyledUtilityClass:()=>getMenuItemUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getMenuItemUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiMenuItem', slot);
}
const menuItemUnstyledClasses = generateUtilityClasses('MuiMenuItem', ['root', 'disabled', 'focusVisible']);
module.exportDefault(menuItemUnstyledClasses);