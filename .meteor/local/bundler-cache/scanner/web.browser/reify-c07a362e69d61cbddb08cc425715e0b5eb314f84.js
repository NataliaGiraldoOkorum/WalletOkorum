module.export({default:()=>useTheme});let React;module.link('react',{"*"(v){React=v}},0);let useThemeSystem;module.link('@mui/system',{useTheme(v){useThemeSystem=v}},1);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},2);


function useTheme() {
  const theme = useThemeSystem(defaultTheme);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }
  return theme;
}