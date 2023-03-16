module.export({getTabsListUnstyledUtilityClass:()=>getTabsListUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getTabsListUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiTabsList', slot);
}
const tabsListUnstyledClasses = generateUtilityClasses('MuiTabsList', ['root', 'horizontal', 'vertical']);
module.exportDefault(tabsListUnstyledClasses);