module.export({default:function(){return _toPropertyKey}});var _typeof;module.link("./typeof.js",{default:function(v){_typeof=v}},0);var toPrimitive;module.link("./toPrimitive.js",{default:function(v){toPrimitive=v}},1);

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}