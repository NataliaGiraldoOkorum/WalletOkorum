module.export({default:function(){return useTheme}});var useThemeWithoutDefault;module.link('@material-ui/styles',{useTheme:function(v){useThemeWithoutDefault=v}},0);var React;module.link('react',{default:function(v){React=v}},1);var defaultTheme;module.link('./defaultTheme',{default:function(v){defaultTheme=v}},2);


function useTheme() {
  var theme = useThemeWithoutDefault() || defaultTheme;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}