let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let deepmerge;module.link('@mui/utils',{deepmerge(v){deepmerge=v}},2);let createBreakpoints;module.link('./createBreakpoints',{default(v){createBreakpoints=v}},3);let shape;module.link('./shape',{default(v){shape=v}},4);let createSpacing;module.link('./createSpacing',{default(v){createSpacing=v}},5);let styleFunctionSx;module.link('../styleFunctionSx/styleFunctionSx',{default(v){styleFunctionSx=v}},6);let defaultSxConfig;module.link('../styleFunctionSx/defaultSxConfig',{default(v){defaultSxConfig=v}},7);

const _excluded = ["breakpoints", "palette", "spacing", "shape"];






function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends({}, shape, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
module.exportDefault(createTheme);