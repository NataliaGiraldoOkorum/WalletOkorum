let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let styled;module.link('../styles/styled',{default(v){styled=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let Collapse;module.link('../Collapse',{default(v){Collapse=v}},8);let StepperContext;module.link('../Stepper/StepperContext',{default(v){StepperContext=v}},9);let StepContext;module.link('../Step/StepContext',{default(v){StepContext=v}},10);let getStepContentUtilityClass;module.link('./stepContentClasses',{getStepContentUtilityClass(v){getStepContentUtilityClass=v}},11);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},12);

const _excluded = ["children", "className", "TransitionComponent", "transitionDuration", "TransitionProps"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    last
  } = ownerState;
  const slots = {
    root: ['root', last && 'last'],
    transition: ['transition']
  };
  return composeClasses(slots, getStepContentUtilityClass, classes);
};
const StepContentRoot = styled('div', {
  name: 'MuiStepContent',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.last && styles.last];
  }
})(({
  ownerState,
  theme
}) => _extends({
  marginLeft: 12,
  // half icon
  paddingLeft: 8 + 12,
  // margin + half icon
  paddingRight: 8,
  borderLeft: theme.vars ? `1px solid ${theme.vars.palette.StepContent.border}` : `1px solid ${theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]}`
}, ownerState.last && {
  borderLeft: 'none'
}));
const StepContentTransition = styled(Collapse, {
  name: 'MuiStepContent',
  slot: 'Transition',
  overridesResolver: (props, styles) => styles.transition
})({});
const StepContent = /*#__PURE__*/React.forwardRef(function StepContent(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiStepContent'
  });
  const {
      children,
      className,
      TransitionComponent = Collapse,
      transitionDuration: transitionDurationProp = 'auto',
      TransitionProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    orientation
  } = React.useContext(StepperContext);
  const {
    active,
    last,
    expanded
  } = React.useContext(StepContext);
  const ownerState = _extends({}, props, {
    last
  });
  const classes = useUtilityClasses(ownerState);
  if (process.env.NODE_ENV !== 'production') {
    if (orientation !== 'vertical') {
      console.error('MUI: <StepContent /> is only designed for use with the vertical stepper.');
    }
  }
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  }
  return /*#__PURE__*/_jsx(StepContentRoot, _extends({
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/_jsx(StepContentTransition, _extends({
      as: TransitionComponent,
      in: active || expanded,
      className: classes.transition,
      ownerState: ownerState,
      timeout: transitionDuration,
      unmountOnExit: true
    }, TransitionProps, {
      children: children
    }))
  }));
});
process.env.NODE_ENV !== "production" ? StepContent.propTypes /* remove-proptypes */ = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Adjust the duration of the content expand transition.
   * Passed as a prop to the transition component.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: PropTypes.object
} : void 0;
module.exportDefault(StepContent);