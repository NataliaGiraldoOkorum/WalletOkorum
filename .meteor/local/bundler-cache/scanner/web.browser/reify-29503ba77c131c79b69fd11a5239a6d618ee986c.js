module.export({getListItemButtonUtilityClass:()=>getListItemButtonUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass('MuiListItemButton', slot);
}
const listItemButtonClasses = generateUtilityClasses('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);
module.exportDefault(listItemButtonClasses);