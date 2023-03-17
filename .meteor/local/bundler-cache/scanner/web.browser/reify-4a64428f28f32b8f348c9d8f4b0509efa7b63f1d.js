module.export({getTableContainerUtilityClass:()=>getTableContainerUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getTableContainerUtilityClass(slot) {
  return generateUtilityClass('MuiTableContainer', slot);
}
const tableContainerClasses = generateUtilityClasses('MuiTableContainer', ['root']);
module.exportDefault(tableContainerClasses);