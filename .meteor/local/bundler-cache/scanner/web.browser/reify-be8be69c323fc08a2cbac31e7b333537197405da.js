let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let withStylesWithoutDefault;module.link('@material-ui/styles',{withStyles(v){withStylesWithoutDefault=v}},1);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},2);



function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

module.exportDefault(withStyles);