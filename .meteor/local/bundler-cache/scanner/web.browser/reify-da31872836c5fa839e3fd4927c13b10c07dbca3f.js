module.export({default:()=>_arrayWithoutHoles});let arrayLikeToArray;module.link("./arrayLikeToArray.js",{default(v){arrayLikeToArray=v}},0);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}