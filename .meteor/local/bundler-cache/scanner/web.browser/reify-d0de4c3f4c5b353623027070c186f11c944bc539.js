module.export({useColorScheme:()=>useColorScheme,getInitColorSchemeScript:()=>getInitColorSchemeScript,Experimental_CssVarsProvider:()=>CssVarsProvider});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let createCssVarsProvider,styleFunctionSx;module.link('@mui/system',{unstable_createCssVarsProvider(v){createCssVarsProvider=v},unstable_styleFunctionSx(v){styleFunctionSx=v}},1);let experimental_extendTheme;module.link('./experimental_extendTheme',{default(v){experimental_extendTheme=v}},2);let createTypography;module.link('./createTypography',{default(v){createTypography=v}},3);let excludeVariablesFromRoot;module.link('./excludeVariablesFromRoot',{default(v){excludeVariablesFromRoot=v}},4);




const defaultTheme = experimental_extendTheme();
const {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  theme: defaultTheme,
  attribute: 'data-mui-color-scheme',
  modeStorageKey: 'mui-mode',
  colorSchemeStorageKey: 'mui-color-scheme',
  defaultColorScheme: {
    light: 'light',
    dark: 'dark'
  },
  resolveTheme: theme => {
    const newTheme = _extends({}, theme, {
      typography: createTypography(theme.palette, theme.typography)
    });
    newTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return newTheme;
  },
  excludeVariablesFromRoot
});
