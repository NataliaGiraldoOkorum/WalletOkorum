module.export({getInputUnstyledUtilityClass:()=>getInputUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getInputUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiInput', slot);
}
const inputUnstyledClasses = generateUtilityClasses('MuiInput', ['root', 'formControl', 'focused', 'disabled', 'error', 'multiline', 'input', 'inputMultiline', 'inputTypeSearch', 'adornedStart', 'adornedEnd']);
module.exportDefault(inputUnstyledClasses);