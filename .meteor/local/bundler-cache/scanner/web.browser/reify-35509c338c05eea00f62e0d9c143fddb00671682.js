let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let clsx;module.link('clsx',{default(v){clsx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let capitalize;module.link('../utils/capitalize',{default(v){capitalize=v}},6);let styled;module.link('../styles/styled',{default(v){styled=v}},7);let useTheme;module.link('../styles/useTheme',{default(v){useTheme=v}},8);let getHiddenCssUtilityClass;module.link('./hiddenCssClasses',{getHiddenCssUtilityClass(v){getHiddenCssUtilityClass=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["children", "className", "only"];









const useUtilityClasses = ownerState => {
  const {
    classes,
    breakpoints
  } = ownerState;
  const slots = {
    root: ['root', ...breakpoints.map(({
      breakpoint,
      dir
    }) => {
      return dir === 'only' ? `${dir}${capitalize(breakpoint)}` : `${breakpoint}${capitalize(dir)}`;
    })]
  };
  return composeClasses(slots, getHiddenCssUtilityClass, classes);
};
const HiddenCssRoot = styled('div', {
  name: 'PrivateHiddenCss',
  slot: 'Root'
})(({
  theme,
  ownerState
}) => {
  const hidden = {
    display: 'none'
  };
  return _extends({}, ownerState.breakpoints.map(({
    breakpoint,
    dir
  }) => {
    if (dir === 'only') {
      return {
        [theme.breakpoints.only(breakpoint)]: hidden
      };
    }
    return dir === 'up' ? {
      [theme.breakpoints.up(breakpoint)]: hidden
    } : {
      [theme.breakpoints.down(breakpoint)]: hidden
    };
  }).reduce((r, o) => {
    Object.keys(o).forEach(k => {
      r[k] = o[k];
    });
    return r;
  }, {}));
});

/**
 * @ignore - internal component.
 */
function HiddenCss(props) {
  const {
      children,
      className,
      only
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const theme = useTheme();
  if (process.env.NODE_ENV !== 'production') {
    const unknownProps = Object.keys(other).filter(propName => {
      const isUndeclaredBreakpoint = !theme.breakpoints.keys.some(breakpoint => {
        return `${breakpoint}Up` === propName || `${breakpoint}Down` === propName;
      });
      return !['classes', 'theme', 'isRtl', 'sx'].includes(propName) && isUndeclaredBreakpoint;
    });
    if (unknownProps.length > 0) {
      console.error(`MUI: Unsupported props received by \`<Hidden implementation="css" />\`: ${unknownProps.join(', ')}. Did you forget to wrap this component in a ThemeProvider declaring these breakpoints?`);
    }
  }
  const breakpoints = [];
  for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
    const breakpoint = theme.breakpoints.keys[i];
    const breakpointUp = other[`${breakpoint}Up`];
    const breakpointDown = other[`${breakpoint}Down`];
    if (breakpointUp) {
      breakpoints.push({
        breakpoint,
        dir: 'up'
      });
    }
    if (breakpointDown) {
      breakpoints.push({
        breakpoint,
        dir: 'down'
      });
    }
  }
  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(breakpoint => {
      breakpoints.push({
        breakpoint,
        dir: 'only'
      });
    });
  }
  const ownerState = _extends({}, props, {
    breakpoints
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(HiddenCssRoot, {
    className: clsx(classes.root, className),
    ownerState: ownerState,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? HiddenCss.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: PropTypes.oneOf(['js', 'css']),
  /**
   * If `true`, screens this size and down are hidden.
   */
  lgDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  lgUp: PropTypes.bool,
  /**
   * If `true`, screens this size and down are hidden.
   */
  mdDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  mdUp: PropTypes.bool,
  /**
   * Hide the given breakpoint(s).
   */
  only: PropTypes.oneOfType([PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), PropTypes.arrayOf(PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),
  /**
   * If `true`, screens this size and down are hidden.
   */
  smDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  smUp: PropTypes.bool,
  /**
   * If `true`, screens this size and down are hidden.
   */
  xlDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  xlUp: PropTypes.bool,
  /**
   * If `true`, screens this size and down are hidden.
   */
  xsDown: PropTypes.bool,
  /**
   * If `true`, screens this size and up are hidden.
   */
  xsUp: PropTypes.bool
} : void 0;
module.exportDefault(HiddenCss);