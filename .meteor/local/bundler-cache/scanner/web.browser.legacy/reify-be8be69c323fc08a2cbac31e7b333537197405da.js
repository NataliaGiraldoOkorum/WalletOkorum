var _extends;module.link("@babel/runtime/helpers/esm/extends",{default:function(v){_extends=v}},0);var withStylesWithoutDefault;module.link('@material-ui/styles',{withStyles:function(v){withStylesWithoutDefault=v}},1);var defaultTheme;module.link('./defaultTheme',{default:function(v){defaultTheme=v}},2);



function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

module.exportDefault(withStyles);