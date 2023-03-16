module.export({default:()=>_toPropertyKey});let _typeof;module.link("./typeof.js",{default(v){_typeof=v}},0);let toPrimitive;module.link("./toPrimitive.js",{default(v){toPrimitive=v}},1);

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}