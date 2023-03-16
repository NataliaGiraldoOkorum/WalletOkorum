module.export({default:()=>_defineProperty});let toPropertyKey;module.link("./toPropertyKey.js",{default(v){toPropertyKey=v}},0);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}