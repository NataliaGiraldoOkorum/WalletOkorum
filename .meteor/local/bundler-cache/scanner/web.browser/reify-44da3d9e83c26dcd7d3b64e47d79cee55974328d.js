module.export({getInputUtilityClass:()=>getInputUtilityClass});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},1);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},2);let inputBaseClasses;module.link('../InputBase',{inputBaseClasses(v){inputBaseClasses=v}},3);



function getInputUtilityClass(slot) {
  return generateUtilityClass('MuiInput', slot);
}
const inputClasses = _extends({}, inputBaseClasses, generateUtilityClasses('MuiInput', ['root', 'underline', 'input']));
module.exportDefault(inputClasses);