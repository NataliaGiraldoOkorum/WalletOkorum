module.export({getTabPanelUnstyledUtilityClass:()=>getTabPanelUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getTabPanelUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiTabPanel', slot);
}
const tabPanelUnstyledClasses = generateUtilityClasses('MuiTabPanel', ['root', 'hidden']);
module.exportDefault(tabPanelUnstyledClasses);