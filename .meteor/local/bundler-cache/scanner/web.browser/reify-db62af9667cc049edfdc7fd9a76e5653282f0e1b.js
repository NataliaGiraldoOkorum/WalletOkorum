module.export({isPlainObject:()=>isPlainObject,default:()=>deepmerge});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _typeof;module.link("@babel/runtime/helpers/esm/typeof",{default(v){_typeof=v}},1);

function isPlainObject(item) {
  return item && _typeof(item) === 'object' && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}