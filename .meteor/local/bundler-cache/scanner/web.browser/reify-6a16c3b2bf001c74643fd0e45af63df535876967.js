let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let styled;module.link('../styles/styled',{default(v){styled=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let ButtonBase;module.link('../ButtonBase',{default(v){ButtonBase=v}},8);let StepLabel;module.link('../StepLabel',{default(v){StepLabel=v}},9);let isMuiElement;module.link('../utils/isMuiElement',{default(v){isMuiElement=v}},10);let StepperContext;module.link('../Stepper/StepperContext',{default(v){StepperContext=v}},11);let StepContext;module.link('../Step/StepContext',{default(v){StepContext=v}},12);let stepButtonClasses,getStepButtonUtilityClass;module.link('./stepButtonClasses',{default(v){stepButtonClasses=v},getStepButtonUtilityClass(v){getStepButtonUtilityClass=v}},13);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},14);

const _excluded = ["children", "className", "icon", "optional"];













const useUtilityClasses = ownerState => {
  const {
    classes,
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation],
    touchRipple: ['touchRipple']
  };
  return composeClasses(slots, getStepButtonUtilityClass, classes);
};
const StepButtonRoot = styled(ButtonBase, {
  name: 'MuiStepButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${stepButtonClasses.touchRipple}`]: styles.touchRipple
    }, styles.root, styles[ownerState.orientation]];
  }
})(({
  ownerState
}) => _extends({
  width: '100%',
  padding: '24px 16px',
  margin: '-24px -16px',
  boxSizing: 'content-box'
}, ownerState.orientation === 'vertical' && {
  justifyContent: 'flex-start',
  padding: '8px',
  margin: '-8px'
}, {
  [`& .${stepButtonClasses.touchRipple}`]: {
    color: 'rgba(0, 0, 0, 0.3)'
  }
}));
const StepButton = /*#__PURE__*/React.forwardRef(function StepButton(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiStepButton'
  });
  const {
      children,
      className,
      icon,
      optional
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    disabled
  } = React.useContext(StepContext);
  const {
    orientation
  } = React.useContext(StepperContext);
  const ownerState = _extends({}, props, {
    orientation
  });
  const classes = useUtilityClasses(ownerState);
  const childProps = {
    icon,
    optional
  };
  const child = isMuiElement(children, ['StepLabel']) ? /*#__PURE__*/React.cloneElement(children, childProps) : /*#__PURE__*/_jsx(StepLabel, _extends({}, childProps, {
    children: children
  }));
  return /*#__PURE__*/_jsx(StepButtonRoot, _extends({
    focusRipple: true,
    disabled: disabled,
    TouchRippleProps: {
      className: classes.touchRipple
    },
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: child
  }));
});
process.env.NODE_ENV !== "production" ? StepButton.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
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
   * The icon displayed by the step label.
   */
  icon: PropTypes.node,
  /**
   * The optional node to display.
   */
  optional: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(StepButton);