module.export({getFormControlUnstyledUtilityClass:()=>getFormControlUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getFormControlUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiFormControl', slot);
}
const formControlUnstyledClasses = generateUtilityClasses('MuiFormControl', ['root', 'disabled', 'error', 'filled', 'focused', 'required']);
module.exportDefault(formControlUnstyledClasses);