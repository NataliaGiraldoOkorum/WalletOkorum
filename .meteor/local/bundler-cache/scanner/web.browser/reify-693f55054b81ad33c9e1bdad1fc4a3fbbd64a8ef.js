let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let styledWithoutDefault;module.link('@material-ui/styles',{styled(v){styledWithoutDefault=v}},1);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},2);



var styled = function styled(Component) {
  var componentCreator = styledWithoutDefault(Component);
  return function (style, options) {
    return componentCreator(style, _extends({
      defaultTheme: defaultTheme
    }, options));
  };
};

module.exportDefault(styled);