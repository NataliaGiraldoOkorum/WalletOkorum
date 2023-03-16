module.export({getOutlinedInputUtilityClass:()=>getOutlinedInputUtilityClass});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},1);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},2);let inputBaseClasses;module.link('../InputBase',{inputBaseClasses(v){inputBaseClasses=v}},3);



function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass('MuiOutlinedInput', slot);
}
const outlinedInputClasses = _extends({}, inputBaseClasses, generateUtilityClasses('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));
module.exportDefault(outlinedInputClasses);