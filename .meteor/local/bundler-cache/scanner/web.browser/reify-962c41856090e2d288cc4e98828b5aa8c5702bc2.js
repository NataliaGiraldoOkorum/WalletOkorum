let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let styled;module.link('../styles/styled',{default(v){styled=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let CheckCircle;module.link('../internal/svg-icons/CheckCircle',{default(v){CheckCircle=v}},8);let Warning;module.link('../internal/svg-icons/Warning',{default(v){Warning=v}},9);let SvgIcon;module.link('../SvgIcon',{default(v){SvgIcon=v}},10);let stepIconClasses,getStepIconUtilityClass;module.link('./stepIconClasses',{default(v){stepIconClasses=v},getStepIconUtilityClass(v){getStepIconUtilityClass=v}},11);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},12);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},13);

var _circle;
const _excluded = ["active", "className", "completed", "error", "icon"];












const useUtilityClasses = ownerState => {
  const {
    classes,
    active,
    completed,
    error
  } = ownerState;
  const slots = {
    root: ['root', active && 'active', completed && 'completed', error && 'error'],
    text: ['text']
  };
  return composeClasses(slots, getStepIconUtilityClass, classes);
};
const StepIconRoot = styled(SvgIcon, {
  name: 'MuiStepIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: 'block',
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest
  }),
  color: (theme.vars || theme).palette.text.disabled,
  [`&.${stepIconClasses.completed}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses.active}`]: {
    color: (theme.vars || theme).palette.primary.main
  },
  [`&.${stepIconClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const StepIconText = styled('text', {
  name: 'MuiStepIcon',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontFamily: theme.typography.fontFamily
}));
const StepIcon = /*#__PURE__*/React.forwardRef(function StepIcon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiStepIcon'
  });
  const {
      active = false,
      className: classNameProp,
      completed = false,
      error = false,
      icon
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    active,
    completed,
    error
  });
  const classes = useUtilityClasses(ownerState);
  if (typeof icon === 'number' || typeof icon === 'string') {
    const className = clsx(classNameProp, classes.root);
    if (error) {
      return /*#__PURE__*/_jsx(StepIconRoot, _extends({
        as: Warning,
        className: className,
        ref: ref,
        ownerState: ownerState
      }, other));
    }
    if (completed) {
      return /*#__PURE__*/_jsx(StepIconRoot, _extends({
        as: CheckCircle,
        className: className,
        ref: ref,
        ownerState: ownerState
      }, other));
    }
    return /*#__PURE__*/_jsxs(StepIconRoot, _extends({
      className: className,
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [_circle || (_circle = /*#__PURE__*/_jsx("circle", {
        cx: "12",
        cy: "12",
        r: "12"
      })), /*#__PURE__*/_jsx(StepIconText, {
        className: classes.text,
        x: "12",
        y: "12",
        textAnchor: "middle",
        dominantBaseline: "central",
        ownerState: ownerState,
        children: icon
      })]
    }));
  }
  return icon;
});
process.env.NODE_ENV !== "production" ? StepIcon.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * If `true`, the step is marked as failed.
   * @default false
   */
  error: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(StepIcon);