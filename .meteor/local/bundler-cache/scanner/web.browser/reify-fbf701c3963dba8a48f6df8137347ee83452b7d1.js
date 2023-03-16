module.export({getAlertTitleUtilityClass:()=>getAlertTitleUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getAlertTitleUtilityClass(slot) {
  return generateUtilityClass('MuiAlertTitle', slot);
}
const alertTitleClasses = generateUtilityClasses('MuiAlertTitle', ['root']);
module.exportDefault(alertTitleClasses);