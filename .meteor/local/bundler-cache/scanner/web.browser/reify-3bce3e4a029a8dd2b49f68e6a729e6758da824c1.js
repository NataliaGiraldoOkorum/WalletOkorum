let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let makeStylesWithoutDefault;module.link('@material-ui/styles',{makeStyles(v){makeStylesWithoutDefault=v}},1);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},2);



function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

module.exportDefault(makeStyles);