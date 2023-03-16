module.export({systemDefaultTheme:()=>systemDefaultTheme},true);let createTheme;module.link('./createTheme',{default(v){createTheme=v}},0);let useThemeWithoutDefault;module.link('./useThemeWithoutDefault',{default(v){useThemeWithoutDefault=v}},1);

const systemDefaultTheme = createTheme();
function useTheme(defaultTheme = systemDefaultTheme) {
  return useThemeWithoutDefault(defaultTheme);
}
module.exportDefault(useTheme);