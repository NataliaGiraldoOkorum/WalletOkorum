module.export({default:()=>useThemeProps});let systemUseThemeProps;module.link('@mui/system',{useThemeProps(v){systemUseThemeProps=v}},0);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},1);

function useThemeProps({
  props,
  name
}) {
  return systemUseThemeProps({
    props,
    name,
    defaultTheme
  });
}