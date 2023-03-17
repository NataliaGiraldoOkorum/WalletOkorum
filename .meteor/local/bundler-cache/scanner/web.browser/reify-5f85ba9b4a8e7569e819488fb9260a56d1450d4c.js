module.export({getImageListUtilityClass:()=>getImageListUtilityClass});let generateUtilityClasses;module.link('@mui/utils',{unstable_generateUtilityClasses(v){generateUtilityClasses=v}},0);let generateUtilityClass;module.link('../generateUtilityClass',{default(v){generateUtilityClass=v}},1);

function getImageListUtilityClass(slot) {
  return generateUtilityClass('MuiImageList', slot);
}
const imageListClasses = generateUtilityClasses('MuiImageList', ['root', 'masonry', 'quilted', 'standard', 'woven']);
module.exportDefault(imageListClasses);