"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _utils = require("@mui/utils");
var _useButton = _interopRequireDefault(require("../useButton"));
var _useListbox = _interopRequireWildcard(require("../useListbox"));
var _defaultOptionStringifier = _interopRequireDefault(require("../SelectUnstyled/defaultOptionStringifier"));
var _useSelectChangeNotifiers = _interopRequireDefault(require("./useSelectChangeNotifiers"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 *
 * Demos:
 *
 * - [Unstyled Select](https://mui.com/base/react-select/#hook)
 *
 * API:
 *
 * - [useSelect API](https://mui.com/base/api/use-select/)
 */
function useSelect(props) {
  const {
    buttonRef: buttonRefProp,
    defaultValue: defaultValueProp,
    disabled = false,
    listboxId: listboxIdProp,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onHighlightChange,
    onOpenChange,
    open = false,
    options,
    optionStringifier = _defaultOptionStringifier.default,
    value: valueProp
  } = props;
  const buttonRef = React.useRef(null);
  const handleButtonRef = (0, _utils.unstable_useForkRef)(buttonRefProp, buttonRef);
  const listboxRef = React.useRef(null);
  const listboxId = (0, _utils.unstable_useId)(listboxIdProp);
  let defaultValue;
  if (valueProp === undefined && defaultValueProp === undefined) {
    defaultValue = [];
  } else if (defaultValueProp !== undefined) {
    defaultValue = multiple ? defaultValueProp : [defaultValueProp];
  }
  const value = React.useMemo(() => {
    if (valueProp !== undefined) {
      return multiple ? valueProp : [valueProp];
    }
    return undefined;
  }, [valueProp, multiple]);
  const optionsMap = React.useMemo(() => {
    const map = new Map();
    options.forEach(option => {
      map.set(option.value, option);
    });
    return map;
  }, [options]);

  // prevents closing the listbox on keyUp right after opening it
  const ignoreEnterKeyUp = React.useRef(false);

  // prevents reopening the listbox when button is clicked
  // (listbox closes on lost focus, then immediately reopens on click)
  const ignoreClick = React.useRef(false);

  // Ensure the listbox is focused after opening
  const [listboxFocusRequested, requestListboxFocus] = React.useState(false);
  const focusListboxIfRequested = React.useCallback(() => {
    if (listboxFocusRequested && listboxRef.current != null) {
      listboxRef.current.focus();
      requestListboxFocus(false);
    }
  }, [listboxFocusRequested]);
  const handleListboxRef = (0, _utils.unstable_useForkRef)(listboxRefProp, listboxRef, focusListboxIfRequested);
  const {
    notifySelectionChanged,
    notifyHighlightChanged,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = (0, _useSelectChangeNotifiers.default)();
  React.useEffect(() => {
    focusListboxIfRequested();
  }, [focusListboxIfRequested]);
  React.useEffect(() => {
    requestListboxFocus(open);
  }, [open]);
  const createHandleMouseDown = otherHandlers => event => {
    var _otherHandlers$onMous;
    otherHandlers == null ? void 0 : (_otherHandlers$onMous = otherHandlers.onMouseDown) == null ? void 0 : _otherHandlers$onMous.call(otherHandlers, event);
    if (!event.defaultPrevented && open) {
      ignoreClick.current = true;
    }
  };
  const createHandleButtonClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    otherHandlers == null ? void 0 : (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (!event.defaultPrevented && !ignoreClick.current) {
      onOpenChange == null ? void 0 : onOpenChange(!open);
    }
    ignoreClick.current = false;
  };
  const createHandleButtonKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    otherHandlers == null ? void 0 : (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null ? void 0 : _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === 'Enter') {
      ignoreEnterKeyUp.current = true;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      onOpenChange == null ? void 0 : onOpenChange(true);
    }
  };
  const createHandleListboxKeyUp = otherHandlers => event => {
    var _otherHandlers$onKeyU;
    otherHandlers == null ? void 0 : (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null ? void 0 : _otherHandlers$onKeyU.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    const closingKeys = multiple ? ['Escape'] : ['Escape', 'Enter', ' '];
    if (open && !ignoreEnterKeyUp.current && closingKeys.includes(event.key)) {
      var _buttonRef$current;
      buttonRef == null ? void 0 : (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.focus();
    }
    ignoreEnterKeyUp.current = false;
  };
  const createHandleListboxItemClick = React.useCallback(otherHandlers => event => {
    var _otherHandlers$onClic2;
    otherHandlers == null ? void 0 : (_otherHandlers$onClic2 = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic2.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (!multiple) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  }, [multiple, onOpenChange]);
  const createHandleListboxBlur = otherHandlers => event => {
    var _otherHandlers$onBlur;
    otherHandlers == null ? void 0 : (_otherHandlers$onBlur = otherHandlers.onBlur) == null ? void 0 : _otherHandlers$onBlur.call(otherHandlers, event);
    if (!event.defaultPrevented) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };
  const listboxReducer = React.useCallback((state, action) => {
    const newState = (0, _useListbox.defaultListboxReducer)(state, action);
    switch (action.type) {
      case _useListbox.ActionTypes.keyDown:
        // change selection when listbox is closed
        if ((action.event.key === 'ArrowUp' || action.event.key === 'ArrowDown') && !open && !multiple) {
          return (0, _extends2.default)({}, newState, {
            selectedValues: newState.highlightedValue != null ? [newState.highlightedValue] : []
          });
        }
        break;
      case _useListbox.ActionTypes.blur:
      case _useListbox.ActionTypes.setValue:
      case _useListbox.ActionTypes.optionsChange:
        return (0, _extends2.default)({}, newState, {
          highlightedValue: newState.selectedValues.length > 0 ? newState.selectedValues[0] : null
        });
      default:
        return newState;
    }
    return newState;
  }, [open, multiple]);
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible
  } = (0, _useButton.default)({
    disabled,
    ref: handleButtonRef
  });
  const optionValues = React.useMemo(() => options.map(o => o.value), [options]);
  const isOptionDisabled = React.useCallback(valueToCheck => {
    var _option$disabled;
    const option = optionsMap.get(valueToCheck);
    return (_option$disabled = option == null ? void 0 : option.disabled) != null ? _option$disabled : false;
  }, [optionsMap]);
  const stringifyOption = React.useCallback(valueToCheck => {
    const option = optionsMap.get(valueToCheck);
    if (!option) {
      return '';
    }
    return optionStringifier(option);
  }, [optionsMap, optionStringifier]);
  const useListboxParameters = {
    defaultValue,
    id: listboxId,
    isOptionDisabled,
    listboxRef: handleListboxRef,
    onChange: (e, newValues) => {
      if (multiple) {
        onChange == null ? void 0 : onChange(e, newValues);
      } else {
        var _newValues$;
        onChange == null ? void 0 : onChange(e, (_newValues$ = newValues[0]) != null ? _newValues$ : null);
      }
    },
    onHighlightChange: (e, newValue) => {
      onHighlightChange == null ? void 0 : onHighlightChange(e, newValue != null ? newValue : null);
    },
    options: optionValues,
    optionStringifier: stringifyOption,
    selectionLimit: multiple ? null : 1,
    stateReducer: listboxReducer,
    value
  };
  const {
    getRootProps: getListboxRootProps,
    getOptionProps: getListboxOptionProps,
    getOptionState,
    highlightedOption,
    selectedOption
  } = (0, _useListbox.default)(useListboxParameters);
  React.useEffect(() => {
    notifySelectionChanged(selectedOption);
  }, [selectedOption, notifySelectionChanged]);
  React.useEffect(() => {
    notifyHighlightChanged(highlightedOption);
  }, [highlightedOption, notifyHighlightChanged]);
  const getButtonProps = (otherHandlers = {}) => {
    return (0, _extends2.default)({}, getButtonRootProps((0, _extends2.default)({}, otherHandlers, {
      onClick: createHandleButtonClick(otherHandlers),
      onMouseDown: createHandleMouseDown(otherHandlers),
      onKeyDown: createHandleButtonKeyDown(otherHandlers)
    })), {
      role: 'combobox',
      'aria-expanded': open,
      'aria-haspopup': 'listbox',
      'aria-controls': listboxId
    });
  };
  const getListboxProps = (otherHandlers = {}) => getListboxRootProps((0, _extends2.default)({}, otherHandlers, {
    onBlur: createHandleListboxBlur(otherHandlers),
    onKeyUp: createHandleListboxKeyUp(otherHandlers)
  }));
  const getOptionProps = React.useCallback((optionValue, otherHandlers = {}) => {
    return getListboxOptionProps(optionValue, (0, _extends2.default)({}, otherHandlers, {
      onClick: createHandleListboxItemClick(otherHandlers)
    }));
  }, [getListboxOptionProps, createHandleListboxItemClick]);
  React.useDebugValue({
    selectedOption,
    highlightedOption,
    open
  });
  const contextValue = React.useMemo(() => ({
    listboxRef,
    getOptionProps,
    getOptionState,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  }), [getOptionProps, getOptionState, registerHighlightChangeHandler, registerSelectionChangeHandler]);
  if (props.multiple) {
    return {
      buttonActive,
      buttonFocusVisible,
      disabled,
      getButtonProps,
      getListboxProps,
      contextValue,
      open,
      value: selectedOption,
      highlightedOption
    };
  }
  return {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    contextValue,
    open,
    value: selectedOption.length > 0 ? selectedOption[0] : null,
    highlightedOption
  };
}
var _default = useSelect;
exports.default = _default;