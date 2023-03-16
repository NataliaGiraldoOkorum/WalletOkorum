module.export({getOptionUnstyledUtilityClass:()=>getOptionUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getOptionUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOption', slot);
}
const optionUnstyledClasses = generateUtilityClasses('MuiOption', ['root', 'disabled', 'selected', 'highlighted']);
module.exportDefault(optionUnstyledClasses);