var withThemeCreator;module.link('@material-ui/styles',{withThemeCreator:function(v){withThemeCreator=v}},0);var defaultTheme;module.link('./defaultTheme',{default:function(v){defaultTheme=v}},1);

var withTheme = withThemeCreator({
  defaultTheme: defaultTheme
});
module.exportDefault(withTheme);