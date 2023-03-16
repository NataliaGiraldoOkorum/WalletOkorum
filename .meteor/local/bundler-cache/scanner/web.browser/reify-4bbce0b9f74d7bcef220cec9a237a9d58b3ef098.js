module.export({default:()=>_slicedToArray});let arrayWithHoles;module.link("./arrayWithHoles.js",{default(v){arrayWithHoles=v}},0);let iterableToArrayLimit;module.link("./iterableToArrayLimit.js",{default(v){iterableToArrayLimit=v}},1);let unsupportedIterableToArray;module.link("./unsupportedIterableToArray.js",{default(v){unsupportedIterableToArray=v}},2);let nonIterableRest;module.link("./nonIterableRest.js",{default(v){nonIterableRest=v}},3);



function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}