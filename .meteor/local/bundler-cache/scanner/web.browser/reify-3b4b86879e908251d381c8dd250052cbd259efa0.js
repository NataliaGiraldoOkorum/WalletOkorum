module.export({default:()=>generateUtilityClasses});let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},0);
function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}