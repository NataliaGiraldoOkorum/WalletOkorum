let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let KeyboardArrowLeft;module.link('../internal/svg-icons/KeyboardArrowLeft',{default(v){KeyboardArrowLeft=v}},6);let KeyboardArrowRight;module.link('../internal/svg-icons/KeyboardArrowRight',{default(v){KeyboardArrowRight=v}},7);let ButtonBase;module.link('../ButtonBase',{default(v){ButtonBase=v}},8);let useTheme;module.link('../styles/useTheme',{default(v){useTheme=v}},9);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},10);let styled;module.link('../styles/styled',{default(v){styled=v}},11);let tabScrollButtonClasses,getTabScrollButtonUtilityClass;module.link('./tabScrollButtonClasses',{default(v){tabScrollButtonClasses=v},getTabScrollButtonUtilityClass(v){getTabScrollButtonUtilityClass=v}},12);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},13);

var _KeyboardArrowLeft, _KeyboardArrowRight;
const _excluded = ["className", "direction", "orientation", "disabled"];
/* eslint-disable jsx-a11y/aria-role */












const useUtilityClasses = ownerState => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', orientation, disabled && 'disabled']
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
const TabScrollButtonRoot = styled(ButtonBase, {
  name: 'MuiTabScrollButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
  }
})(({
  ownerState
}) => _extends({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses.disabled}`]: {
    opacity: 0
  }
}, ownerState.orientation === 'vertical' && {
  width: '100%',
  height: 40,
  '& svg': {
    transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
  }
}));
const TabScrollButton = /*#__PURE__*/React.forwardRef(function TabScrollButton(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTabScrollButton'
  });
  const {
      className,
      direction
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const ownerState = _extends({
    isRtl
  }, props);
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(TabScrollButtonRoot, _extends({
    component: "div",
    className: clsx(classes.root, className),
    ref: ref,
    role: null,
    ownerState: ownerState,
    tabIndex: null
  }, other, {
    children: direction === 'left' ? _KeyboardArrowLeft || (_KeyboardArrowLeft = /*#__PURE__*/_jsx(KeyboardArrowLeft, {
      fontSize: "small"
    })) : _KeyboardArrowRight || (_KeyboardArrowRight = /*#__PURE__*/_jsx(KeyboardArrowRight, {
      fontSize: "small"
    }))
  }));
});
process.env.NODE_ENV !== "production" ? TabScrollButton.propTypes /* remove-proptypes */ = {
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
   * The direction the button should indicate.
   */
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(TabScrollButton);