let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let integerPropType;module.link('@mui/utils',{integerPropType(v){integerPropType=v}},5);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let styled;module.link('../styles/styled',{default(v){styled=v}},8);let getStepperUtilityClass;module.link('./stepperClasses',{getStepperUtilityClass(v){getStepperUtilityClass=v}},9);let StepConnector;module.link('../StepConnector',{default(v){StepConnector=v}},10);let StepperContext;module.link('./StepperContext',{default(v){StepperContext=v}},11);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},12);

const _excluded = ["activeStep", "alternativeLabel", "children", "className", "component", "connector", "nonLinear", "orientation"];











const useUtilityClasses = ownerState => {
  const {
    orientation,
    alternativeLabel,
    classes
  } = ownerState;
  const slots = {
    root: ['root', orientation, alternativeLabel && 'alternativeLabel']
  };
  return composeClasses(slots, getStepperUtilityClass, classes);
};
const StepperRoot = styled('div', {
  name: 'MuiStepper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.alternativeLabel && styles.alternativeLabel];
  }
})(({
  ownerState
}) => _extends({
  display: 'flex'
}, ownerState.orientation === 'horizontal' && {
  flexDirection: 'row',
  alignItems: 'center'
}, ownerState.orientation === 'vertical' && {
  flexDirection: 'column'
}, ownerState.alternativeLabel && {
  alignItems: 'flex-start'
}));
const defaultConnector = /*#__PURE__*/_jsx(StepConnector, {});
const Stepper = /*#__PURE__*/React.forwardRef(function Stepper(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiStepper'
  });
  const {
      activeStep = 0,
      alternativeLabel = false,
      children,
      className,
      component = 'div',
      connector = defaultConnector,
      nonLinear = false,
      orientation = 'horizontal'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    alternativeLabel,
    orientation,
    component
  });
  const classes = useUtilityClasses(ownerState);
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  const steps = childrenArray.map((step, index) => {
    return /*#__PURE__*/React.cloneElement(step, _extends({
      index,
      last: index + 1 === childrenArray.length
    }, step.props));
  });
  const contextValue = React.useMemo(() => ({
    activeStep,
    alternativeLabel,
    connector,
    nonLinear,
    orientation
  }), [activeStep, alternativeLabel, connector, nonLinear, orientation]);
  return /*#__PURE__*/_jsx(StepperContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(StepperRoot, _extends({
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ref: ref
    }, other, {
      children: steps
    }))
  });
});
process.env.NODE_ENV !== "production" ? Stepper.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the active step (zero based index).
   * Set to -1 to disable all the steps.
   * @default 0
   */
  activeStep: integerPropType,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   * @default false
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Two or more `<Step />` components.
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
   * An element to be placed between each step.
   * @default <StepConnector />
   */
  connector: PropTypes.element,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   * @default false
   */
  nonLinear: PropTypes.bool,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(Stepper);