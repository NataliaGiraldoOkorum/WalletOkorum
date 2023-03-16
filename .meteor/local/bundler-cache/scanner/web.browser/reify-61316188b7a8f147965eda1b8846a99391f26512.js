module.export({default:()=>useTheme});let useThemeWithoutDefault;module.link('@material-ui/styles',{useTheme(v){useThemeWithoutDefault=v}},0);let React;module.link('react',{default(v){React=v}},1);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},2);


function useTheme() {
  var theme = useThemeWithoutDefault() || defaultTheme;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}