module.export({getCollapseUtilityClass:()=>getCollapseUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getCollapseUtilityClass(slot) {
  return generateUtilityClass('MuiCollapse', slot);
}
const collapseClasses = generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);
module.exportDefault(collapseClasses);