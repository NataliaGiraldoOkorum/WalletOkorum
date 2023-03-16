let muiUseTheme;module.link('@mui/private-theming',{useTheme(v){muiUseTheme=v}},0);
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = muiUseTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
module.exportDefault(useTheme);