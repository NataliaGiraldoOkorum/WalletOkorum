module.export({getModalUtilityClass:()=>getModalUtilityClass});let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
const modalUnstyledClasses = generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);
module.exportDefault(modalUnstyledClasses);