module.export({getListUtilityClass:()=>getListUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getListUtilityClass(slot) {
  return generateUtilityClass('MuiList', slot);
}
const listClasses = generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);
module.exportDefault(listClasses);