var _extends;module.link("@babel/runtime/helpers/esm/extends",{default:function(v){_extends=v}},0);var makeStylesWithoutDefault;module.link('@material-ui/styles',{makeStyles:function(v){makeStylesWithoutDefault=v}},1);var defaultTheme;module.link('./defaultTheme',{default:function(v){defaultTheme=v}},2);



function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

module.exportDefault(makeStyles);