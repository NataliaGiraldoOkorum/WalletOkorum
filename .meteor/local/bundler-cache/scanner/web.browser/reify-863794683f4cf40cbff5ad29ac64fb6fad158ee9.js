let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let integerPropType;module.link('@mui/utils',{integerPropType(v){integerPropType=v}},5);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},6);let Paper;module.link('../Paper',{default(v){Paper=v}},7);let capitalize;module.link('../utils/capitalize',{default(v){capitalize=v}},8);let LinearProgress;module.link('../LinearProgress',{default(v){LinearProgress=v}},9);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},10);let styled,slotShouldForwardProp;module.link('../styles/styled',{default(v){styled=v},slotShouldForwardProp(v){slotShouldForwardProp=v}},11);let getMobileStepperUtilityClass;module.link('./mobileStepperClasses',{getMobileStepperUtilityClass(v){getMobileStepperUtilityClass=v}},12);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},13);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},14);

const _excluded = ["activeStep", "backButton", "className", "LinearProgressProps", "nextButton", "position", "steps", "variant"];













const useUtilityClasses = ownerState => {
  const {
    classes,
    position
  } = ownerState;
  const slots = {
    root: ['root', `position${capitalize(position)}`],
    dots: ['dots'],
    dot: ['dot'],
    dotActive: ['dotActive'],
    progress: ['progress']
  };
  return composeClasses(slots, getMobileStepperUtilityClass, classes);
};
const MobileStepperRoot = styled(Paper, {
  name: 'MuiMobileStepper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${capitalize(ownerState.position)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: (theme.vars || theme).palette.background.default,
  padding: 8
}, ownerState.position === 'bottom' && {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: (theme.vars || theme).zIndex.mobileStepper
}, ownerState.position === 'top' && {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: (theme.vars || theme).zIndex.mobileStepper
}));
const MobileStepperDots = styled('div', {
  name: 'MuiMobileStepper',
  slot: 'Dots',
  overridesResolver: (props, styles) => styles.dots
})(({
  ownerState
}) => _extends({}, ownerState.variant === 'dots' && {
  display: 'flex',
  flexDirection: 'row'
}));
const MobileStepperDot = styled('div', {
  name: 'MuiMobileStepper',
  slot: 'Dot',
  shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'dotActive',
  overridesResolver: (props, styles) => {
    const {
      dotActive
    } = props;
    return [styles.dot, dotActive && styles.dotActive];
  }
})(({
  theme,
  ownerState,
  dotActive
}) => _extends({}, ownerState.variant === 'dots' && _extends({
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: (theme.vars || theme).palette.action.disabled,
  borderRadius: '50%',
  width: 8,
  height: 8,
  margin: '0 2px'
}, dotActive && {
  backgroundColor: (theme.vars || theme).palette.primary.main
})));
const MobileStepperProgress = styled(LinearProgress, {
  name: 'MuiMobileStepper',
  slot: 'Progress',
  overridesResolver: (props, styles) => styles.progress
})(({
  ownerState
}) => _extends({}, ownerState.variant === 'progress' && {
  width: '50%'
}));
const MobileStepper = /*#__PURE__*/React.forwardRef(function MobileStepper(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiMobileStepper'
  });
  const {
      activeStep = 0,
      backButton,
      className,
      LinearProgressProps,
      nextButton,
      position = 'bottom',
      steps,
      variant = 'dots'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    activeStep,
    position,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsxs(MobileStepperRoot, _extends({
    square: true,
    elevation: 0,
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [backButton, variant === 'text' && /*#__PURE__*/_jsxs(React.Fragment, {
      children: [activeStep + 1, " / ", steps]
    }), variant === 'dots' && /*#__PURE__*/_jsx(MobileStepperDots, {
      ownerState: ownerState,
      className: classes.dots,
      children: [...new Array(steps)].map((_, index) => /*#__PURE__*/_jsx(MobileStepperDot, {
        className: clsx(classes.dot, index === activeStep && classes.dotActive),
        ownerState: ownerState,
        dotActive: index === activeStep
      }, index))
    }), variant === 'progress' && /*#__PURE__*/_jsx(MobileStepperProgress, _extends({
      ownerState: ownerState,
      className: classes.progress,
      variant: "determinate",
      value: Math.ceil(activeStep / (steps - 1) * 100)
    }, LinearProgressProps)), nextButton]
  }));
});
process.env.NODE_ENV !== "production" ? MobileStepper.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   * @default 0
   */
  activeStep: integerPropType,
  /**
   * A back button element. For instance, it can be a `Button` or an `IconButton`.
   */
  backButton: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Props applied to the `LinearProgress` element.
   */
  LinearProgressProps: PropTypes.object,
  /**
   * A next button element. For instance, it can be a `Button` or an `IconButton`.
   */
  nextButton: PropTypes.node,
  /**
   * Set the positioning type.
   * @default 'bottom'
   */
  position: PropTypes.oneOf(['bottom', 'static', 'top']),
  /**
   * The total steps.
   */
  steps: integerPropType.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'dots'
   */
  variant: PropTypes.oneOf(['dots', 'progress', 'text'])
} : void 0;
module.exportDefault(MobileStepper);