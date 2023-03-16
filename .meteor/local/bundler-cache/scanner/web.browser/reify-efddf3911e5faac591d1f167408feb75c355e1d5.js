module.export({getStackUtilityClass:()=>getStackUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getStackUtilityClass(slot) {
  return generateUtilityClass('MuiStack', slot);
}
const stackClasses = generateUtilityClasses('MuiStack', ['root']);
module.exportDefault(stackClasses);