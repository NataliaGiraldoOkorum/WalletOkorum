let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let useForkRef,useControlled;module.link('@mui/utils',{unstable_useForkRef(v){useForkRef=v},unstable_useControlled(v){useControlled=v}},4);let flattenOptionGroups,getOptionsFromChildren;module.link('./utils',{flattenOptionGroups(v){flattenOptionGroups=v},getOptionsFromChildren(v){getOptionsFromChildren=v}},5);let useSelect;module.link('../useSelect',{default(v){useSelect=v}},6);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},7);let PopperUnstyled;module.link('../PopperUnstyled',{default(v){PopperUnstyled=v}},8);let SelectUnstyledContext;module.link('./SelectUnstyledContext',{SelectUnstyledContext(v){SelectUnstyledContext=v}},9);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},10);let getSelectUnstyledUtilityClass;module.link('./selectUnstyledClasses',{getSelectUnstyledUtilityClass(v){getSelectUnstyledUtilityClass=v}},11);let defaultOptionStringifier;module.link('./defaultOptionStringifier',{default(v){defaultOptionStringifier=v}},12);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},13);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},14);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},15);

const _excluded = ["autoFocus", "children", "component", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "listboxId", "listboxOpen", "multiple", "name", "onChange", "onListboxOpenChange", "optionStringifier", "renderValue", "slotProps", "slots", "value"];














function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return /*#__PURE__*/_jsx(React.Fragment, {
      children: selectedOptions.map(o => o.label).join(', ')
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : '';
}
function defaultFormValueProvider(selectedOption) {
  if (Array.isArray(selectedOption)) {
    if (selectedOption.length === 0) {
      return '';
    }
    if (selectedOption.every(o => typeof o.value === 'string' || typeof o.value === 'number' || typeof o.value === 'boolean')) {
      return selectedOption.map(o => String(o.value));
    }
    return JSON.stringify(selectedOption.map(o => o.value));
  }
  if ((selectedOption == null ? void 0 : selectedOption.value) == null) {
    return '';
  }
  if (typeof selectedOption.value === 'string' || typeof selectedOption.value === 'number') {
    return selectedOption.value;
  }
  return JSON.stringify(selectedOption.value);
}
function useUtilityClasses(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', active && 'active', open && 'expanded'],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper']
  };
  return composeClasses(slots, useClassNamesOverride(getSelectUnstyledUtilityClass));
}

/**
 * The foundation for building custom-styled select components.
 *
 * Demos:
 *
 * - [Unstyled Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [SelectUnstyled API](https://mui.com/base/api/select-unstyled/)
 */
const SelectUnstyled = /*#__PURE__*/React.forwardRef(function SelectUnstyled(props, forwardedRef) {
  var _ref, _slots$listbox, _slots$popper;
  const {
      autoFocus,
      children,
      component,
      defaultValue,
      defaultListboxOpen = false,
      disabled: disabledProp,
      getSerializedValue = defaultFormValueProvider,
      listboxId,
      listboxOpen: listboxOpenProp,
      multiple = false,
      name,
      onChange,
      onListboxOpenChange,
      optionStringifier = defaultOptionStringifier,
      renderValue: renderValueProp,
      slotProps = {},
      slots = {},
      value: valueProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [groupedOptions, setGroupedOptions] = React.useState([]);
  const options = React.useMemo(() => flattenOptionGroups(groupedOptions), [groupedOptions]);
  const [listboxOpen, setListboxOpen] = useControlled({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'SelectUnstyled',
    state: 'listboxOpen'
  });
  React.useEffect(() => {
    setGroupedOptions(getOptionsFromChildren(children));
  }, [children]);
  const [buttonDefined, setButtonDefined] = React.useState(false);
  const buttonRef = React.useRef(null);
  const listboxRef = React.useRef(null);
  const Button = (_ref = component != null ? component : slots.root) != null ? _ref : 'button';
  const ListboxRoot = (_slots$listbox = slots.listbox) != null ? _slots$listbox : 'ul';
  const Popper = (_slots$popper = slots.popper) != null ? _slots$popper : PopperUnstyled;
  const handleButtonRefChange = React.useCallback(element => {
    setButtonDefined(element != null);
  }, []);
  const handleButtonRef = useForkRef(forwardedRef, buttonRef, handleButtonRefChange);
  React.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const handleOpenChange = React.useCallback(isOpen => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  }, [setListboxOpen, onListboxOpenChange]);
  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    contextValue,
    value
  } = useSelect({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple,
    open: listboxOpen,
    onChange,
    onOpenChange: handleOpenChange,
    options,
    optionStringifier,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    multiple,
    renderValue,
    value
  });
  const classes = useUtilityClasses(ownerState);
  const selectedOption = React.useMemo(() => {
    var _options$find;
    if (multiple) {
      if (value == null) {
        return [];
      }
      return options.filter(o => value.includes(o.value));
    }
    return (_options$find = options.find(o => value === o.value)) != null ? _options$find : null;
  }, [options, value, multiple]);
  const buttonProps = useSlotProps({
    elementType: Button,
    getSlotProps: getButtonProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: slotProps.popper,
    additionalProps: {
      anchorEl: buttonRef.current,
      disablePortal: true,
      open: listboxOpen,
      placement: 'bottom-start',
      role: undefined
    },
    ownerState,
    className: classes.popper
  });
  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
      children: renderValue(selectedOption)
    })), buttonDefined && /*#__PURE__*/_jsx(Popper, _extends({}, popperProps, {
      children: /*#__PURE__*/_jsx(ListboxRoot, _extends({}, listboxProps, {
        children: /*#__PURE__*/_jsx(SelectUnstyledContext.Provider, {
          value: contextValue,
          children: children
        })
      }))
    })), name && /*#__PURE__*/_jsx("input", {
      type: "hidden",
      name: name,
      value: getSerializedValue(selectedOption)
    })]
  });
});
process.env.NODE_ENV !== "production" ? SelectUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: PropTypes.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: PropTypes.func,
  /**
   * `id` attribute of the listbox element.
   * Also used to derive the `id` attributes of options.
   */
  listboxId: PropTypes.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: PropTypes.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   *
   * @default false
   */
  multiple: PropTypes.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   * If the name is provided, the component will render a hidden input element that can be submitted to a server.
   */
  name: PropTypes.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: PropTypes.func,
  /**
   * A function used to convert the option label to a string.
   * It's useful when labels are elements and need to be converted to plain text
   * to enable navigation using character keys on a keyboard.
   *
   * @default defaultOptionStringifier
   */
  optionStringifier: PropTypes.func,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: PropTypes.func,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    popper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes /* @typescript-to-proptypes-ignore */.shape({
    listbox: PropTypes.elementType,
    popper: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: PropTypes.any
} : void 0;
module.exportDefault(SelectUnstyled);