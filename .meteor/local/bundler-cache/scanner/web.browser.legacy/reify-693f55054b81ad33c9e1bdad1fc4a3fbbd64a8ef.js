var _extends;module.link("@babel/runtime/helpers/esm/extends",{default:function(v){_extends=v}},0);var styledWithoutDefault;module.link('@material-ui/styles',{styled:function(v){styledWithoutDefault=v}},1);var defaultTheme;module.link('./defaultTheme',{default:function(v){defaultTheme=v}},2);



var styled = function styled(Component) {
  var componentCreator = styledWithoutDefault(Component);
  return function (style, options) {
    return componentCreator(style, _extends({
      defaultTheme: defaultTheme
    }, options));
  };
};

module.exportDefault(styled);