module.export({default:()=>isLayoutViewport});let getUAString;module.link("../utils/userAgent.js",{default(v){getUAString=v}},0);
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}