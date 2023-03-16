module.export({default:()=>createMuiStrictModeTheme});let deepmerge;module.link('@mui/utils',{deepmerge(v){deepmerge=v}},0);let createTheme;module.link('./createTheme',{default(v){createTheme=v}},1);

function createMuiStrictModeTheme(options, ...args) {
  return createTheme(deepmerge({
    unstable_strictMode: true
  }, options), ...args);
}