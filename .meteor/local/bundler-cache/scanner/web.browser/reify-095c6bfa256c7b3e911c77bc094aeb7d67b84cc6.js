let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let prepareCssVars;module.link('./prepareCssVars',{default(v){prepareCssVars=v}},2);

const _excluded = ["cssVarPrefix", "shouldSkipGeneratingVar"];

function createCssVarsTheme(theme) {
  const {
      cssVarPrefix,
      shouldSkipGeneratingVar
    } = theme,
    otherTheme = _objectWithoutPropertiesLoose(theme, _excluded);
  return _extends({}, theme, prepareCssVars(otherTheme, {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar
  }));
}
module.exportDefault(createCssVarsTheme);