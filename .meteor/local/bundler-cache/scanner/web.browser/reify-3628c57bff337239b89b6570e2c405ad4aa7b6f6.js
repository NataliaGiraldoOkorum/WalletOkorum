module.export({getContainerUtilityClass:()=>getContainerUtilityClass});let generateUtilityClass,generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClass(v){generateUtilityClass=v},unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);
function getContainerUtilityClass(slot) {
  return generateUtilityClass('MuiContainer', slot);
}
const containerClasses = generateUtilityClasses('MuiContainer', ['root', 'disableGutters', 'fixed', 'maxWidthXs', 'maxWidthSm', 'maxWidthMd', 'maxWidthLg', 'maxWidthXl']);
module.exportDefault(containerClasses);