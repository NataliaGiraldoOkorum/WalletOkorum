module.export({getSnackbarUnstyledUtilityClass:()=>getSnackbarUnstyledUtilityClass});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);let generateUtilityClasses;module.link('../generateUtilityClasses',{default(v){generateUtilityClasses=v}},1);

function getSnackbarUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSnackbar', slot);
}
const snackbarUnstyledClasses = generateUtilityClasses('MuiSnackbar', ['root']);
module.exportDefault(snackbarUnstyledClasses);