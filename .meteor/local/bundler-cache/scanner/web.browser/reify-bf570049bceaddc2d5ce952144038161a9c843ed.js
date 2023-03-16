module.export({getTabsUnstyledUtilityClass:()=>getTabsUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getTabsUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiTabs', slot);
}
const tabsUnstyledClasses = generateUtilityClasses('MuiTabs', ['root', 'horizontal', 'vertical']);
module.exportDefault(tabsUnstyledClasses);