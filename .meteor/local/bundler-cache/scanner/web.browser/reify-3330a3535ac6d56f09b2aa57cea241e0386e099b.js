module.export({getOptionGroupUnstyledUtilityClass:()=>getOptionGroupUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getOptionGroupUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOptionGroup', slot);
}
const optionGroupUnstyledClasses = generateUtilityClasses('MuiOptionGroup', ['root', 'label', 'list']);
module.exportDefault(optionGroupUnstyledClasses);