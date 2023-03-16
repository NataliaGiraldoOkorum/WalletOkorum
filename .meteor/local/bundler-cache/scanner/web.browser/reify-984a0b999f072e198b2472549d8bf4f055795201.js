module.export({default:()=>getThemeProps});let resolveProps;module.link('@mui/utils',{internal_resolveProps(v){resolveProps=v}},0);
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}