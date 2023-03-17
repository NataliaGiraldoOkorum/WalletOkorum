module.export({getAccordionActionsUtilityClass:()=>getAccordionActionsUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getAccordionActionsUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionActions', slot);
}
const accordionActionsClasses = generateUtilityClasses('MuiAccordionActions', ['root', 'spacing']);
module.exportDefault(accordionActionsClasses);