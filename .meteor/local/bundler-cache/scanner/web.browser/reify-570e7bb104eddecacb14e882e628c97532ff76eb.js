let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let deepmerge;module.link('@mui/utils',{deepmerge(v){deepmerge=v}},1);let cssVarsParser;module.link('./cssVarsParser',{default(v){cssVarsParser=v}},2);
const _excluded = ["colorSchemes", "components"],
  _excluded2 = ["light"];


function prepareCssVars(theme, parserConfig) {
  // @ts-ignore - ignore components do not exist
  const {
      colorSchemes = {}
    } = theme,
    otherTheme = _objectWithoutPropertiesLoose(theme, _excluded);
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
      light
    } = colorSchemes,
    otherColorSchemes = _objectWithoutPropertiesLoose(colorSchemes, _excluded2);
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css,
      vars
    };
  });
  if (light) {
    // light color scheme vars should be merged last to set as default
    const {
      css,
      vars,
      varsWithDefaults
    } = cssVarsParser(light, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap.light = {
      css,
      vars
    };
  }
  const generateCssVars = colorScheme => {
    if (!colorScheme) {
      return {
        css: rootCss,
        vars: rootVars
      };
    }
    return colorSchemesMap[colorScheme];
  };
  return {
    vars: themeVars,
    generateCssVars
  };
}
module.exportDefault(prepareCssVars);