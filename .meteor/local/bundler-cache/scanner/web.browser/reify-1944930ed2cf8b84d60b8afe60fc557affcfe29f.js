let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let clsx;module.link('clsx',{default(v){clsx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let NativeSelectInput;module.link('./NativeSelectInput',{default(v){NativeSelectInput=v}},6);let formControlState;module.link('../FormControl/formControlState',{default(v){formControlState=v}},7);let useFormControl;module.link('../FormControl/useFormControl',{default(v){useFormControl=v}},8);let ArrowDropDownIcon;module.link('../internal/svg-icons/ArrowDropDown',{default(v){ArrowDropDownIcon=v}},9);let Input;module.link('../Input',{default(v){Input=v}},10);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},11);let getNativeSelectUtilityClasses;module.link('./nativeSelectClasses',{getNativeSelectUtilityClasses(v){getNativeSelectUtilityClasses=v}},12);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},13);

const _excluded = ["className", "children", "classes", "IconComponent", "input", "inputProps", "variant"],
  _excluded2 = ["root"];












const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const defaultInput = /*#__PURE__*/_jsx(Input, {});
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */
const NativeSelect = /*#__PURE__*/React.forwardRef(function NativeSelect(inProps, ref) {
  const props = useThemeProps({
    name: 'MuiNativeSelect',
    props: inProps
  });
  const {
      className,
      children,
      classes: classesProp = {},
      IconComponent = ArrowDropDownIcon,
      input = defaultInput,
      inputProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['variant']
  });
  const ownerState = _extends({}, props, {
    classes: classesProp
  });
  const classes = useUtilityClasses(ownerState);
  const otherClasses = _objectWithoutPropertiesLoose(classesProp, _excluded2);
  return /*#__PURE__*/_jsx(React.Fragment, {
    children: /*#__PURE__*/React.cloneElement(input, _extends({
      // Most of the logic is implemented in `NativeSelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: NativeSelectInput,
      inputProps: _extends({
        children,
        classes: otherClasses,
        IconComponent,
        variant: fcs.variant,
        type: undefined
      }, inputProps, input ? input.props.inputProps : {}),
      ref
    }, other, {
      className: clsx(classes.root, input.props.className, className)
    }))
  });
});
process.env.NODE_ENV !== "production" ? NativeSelect.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: PropTypes.elementType,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   * @default <Input />
   */
  input: PropTypes.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes) applied to the `select` element.
   */
  inputProps: PropTypes.object,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The `input` value. The DOM API casts this to a string.
   */
  value: PropTypes.any,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
} : void 0;
NativeSelect.muiName = 'Select';
module.exportDefault(NativeSelect);