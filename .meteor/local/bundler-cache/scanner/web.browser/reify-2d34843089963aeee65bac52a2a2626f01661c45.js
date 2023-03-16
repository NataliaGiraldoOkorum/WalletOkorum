module.export({default:()=>useThemeProps});let getThemeProps;module.link('./getThemeProps',{default(v){getThemeProps=v}},0);let useTheme;module.link('../useTheme',{default(v){useTheme=v}},1);

function useThemeProps({
  props,
  name,
  defaultTheme
}) {
  const theme = useTheme(defaultTheme);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}