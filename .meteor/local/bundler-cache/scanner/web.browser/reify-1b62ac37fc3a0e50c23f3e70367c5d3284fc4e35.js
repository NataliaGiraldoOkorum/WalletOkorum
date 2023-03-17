let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let isFragment;module.link('react-is',{isFragment(v){isFragment=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let clsx;module.link('clsx',{default(v){clsx=v}},5);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},6);let styled;module.link('../styles/styled',{default(v){styled=v}},7);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},8);let getBottomNavigationUtilityClass;module.link('./bottomNavigationClasses',{getBottomNavigationUtilityClass(v){getBottomNavigationUtilityClass=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["children", "className", "component", "onChange", "showLabels", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getBottomNavigationUtilityClass, classes);
};
const BottomNavigationRoot = styled('div', {
  name: 'MuiBottomNavigation',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: 'flex',
  justifyContent: 'center',
  height: 56,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));
const BottomNavigation = /*#__PURE__*/React.forwardRef(function BottomNavigation(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiBottomNavigation'
  });
  const {
      children,
      className,
      component = 'div',
      onChange,
      showLabels = false,
      value
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component,
    showLabels
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(BottomNavigationRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: React.Children.map(children, (child, childIndex) => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return null;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (isFragment(child)) {
          console.error(["MUI: The BottomNavigation component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
        }
      }
      const childValue = child.props.value === undefined ? childIndex : child.props.value;
      return /*#__PURE__*/React.cloneElement(child, {
        selected: childValue === value,
        showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
        value: childValue,
        onChange
      });
    })
  }));
});
process.env.NODE_ENV !== "production" ? BottomNavigation.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child.
   */
  onChange: PropTypes.func,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   * @default false
   */
  showLabels: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The value of the currently selected `BottomNavigationAction`.
   */
  value: PropTypes.any
} : void 0;
module.exportDefault(BottomNavigation);