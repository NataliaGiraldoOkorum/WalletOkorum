module.export({getStackUtilityClass:()=>getStackUtilityClass});let generateUtilityClass,generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClass(v){generateUtilityClass=v},unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);
function getStackUtilityClass(slot) {
  return generateUtilityClass('MuiStack', slot);
}
const stackClasses = generateUtilityClasses('MuiStack', ['root']);
module.exportDefault(stackClasses);