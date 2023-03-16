let withThemeCreator;module.link('@material-ui/styles',{withThemeCreator(v){withThemeCreator=v}},0);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},1);

var withTheme = withThemeCreator({
  defaultTheme: defaultTheme
});
module.exportDefault(withTheme);