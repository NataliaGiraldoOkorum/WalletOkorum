module.export({default:function(){return createMuiStrictModeTheme}});var deepmerge;module.link('@material-ui/utils',{deepmerge:function(v){deepmerge=v}},0);var createTheme;module.link('./createTheme',{default:function(v){createTheme=v}},1);

function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return createTheme.apply(void 0, [deepmerge({
    unstable_strictMode: true
  }, options)].concat(args));
}