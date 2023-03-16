let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let useControlled;module.link('@mui/utils',{unstable_useControlled(v){useControlled=v}},4);let FormControlUnstyledContext;module.link('./FormControlUnstyledContext',{default(v){FormControlUnstyledContext=v}},5);let getFormControlUnstyledUtilityClass;module.link('./formControlUnstyledClasses',{getFormControlUnstyledUtilityClass(v){getFormControlUnstyledUtilityClass=v}},6);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},7);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},8);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["defaultValue", "children", "component", "disabled", "error", "onChange", "required", "slotProps", "slots", "value"];









function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== '';
}
function useUtilityClasses(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focused && 'focused', error && 'error', filled && 'filled', required && 'required']
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUnstyledUtilityClass));
}

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/material-ui/react-text-field/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `Input` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Unstyled Form Control](https://mui.com/base/react-form-control/)
 *
 * API:
 *
 * - [FormControlUnstyled API](https://mui.com/base/api/form-control-unstyled/)
 */
const FormControlUnstyled = /*#__PURE__*/React.forwardRef(function FormControlUnstyled(props, ref) {
  var _ref;
  const {
      defaultValue,
      children,
      component,
      disabled = false,
      error = false,
      onChange,
      required = false,
      slotProps = {},
      slots = {},
      value: incomingValue
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: 'FormControl',
    state: 'value'
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React.useState(false);
  const focused = focusedState && !disabled;
  React.useEffect(() => setFocused(isFocused => disabled ? false : isFocused), [disabled]);
  const ownerState = _extends({}, props, {
    disabled,
    error,
    filled,
    focused,
    required
  });
  const childContext = React.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: event => {
        setValue(event.target.value);
        onChange == null ? void 0 : onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : ''
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses(ownerState);
  const renderChildren = () => {
    if (typeof children === 'function') {
      return children(childContext);
    }
    return children;
  };
  const Root = (_ref = component != null ? component : slots.root) != null ? _ref : 'div';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/_jsx(FormControlUnstyledContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/_jsx(Root, _extends({}, rootProps))
  });
});
process.env.NODE_ENV !== "production" ? FormControlUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * @ignore
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes.bool,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The props used for each slot inside the FormControl.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * @ignore
   */
  value: PropTypes.any
} : void 0;
module.exportDefault(FormControlUnstyled);