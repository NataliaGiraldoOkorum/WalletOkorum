module.export({default:()=>useListbox});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useForkRef,useId;module.link('@mui/utils',{unstable_useForkRef(v){useForkRef=v},unstable_useId(v){useId=v}},2);let ActionTypes;module.link('./useListbox.types',{ActionTypes(v){ActionTypes=v}},3);let defaultReducer;module.link('./defaultListboxReducer',{default(v){defaultReducer=v}},4);let useControllableReducer;module.link('./useControllableReducer',{default(v){useControllableReducer=v}},5);let areArraysEqual;module.link('../utils/areArraysEqual',{default(v){areArraysEqual=v}},6);let useLatest;module.link('../utils/useLatest',{default(v){useLatest=v}},7);let useTextNavigation;module.link('../utils/useTextNavigation',{default(v){useTextNavigation=v}},8);








const defaultOptionComparer = (optionA, optionB) => optionA === optionB;
const defaultIsOptionDisabled = () => false;
const defaultOptionStringifier = option => typeof option === 'string' ? option : String(option);

/**
 * @ignore - internal hook.
 *
 * The useListbox is a lower-level utility that is used to build a listbox component.
 * It's used to manage the state of the listbox and its options.
 * Contains the logic for keyboard navigation, selection, and focus management.
 */
function useListbox(props) {
  var _props$optionIdGenera;
  const {
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = 'activeDescendant',
    id: idProp,
    isOptionDisabled = defaultIsOptionDisabled,
    listboxRef: externalListboxRef,
    optionComparer = defaultOptionComparer,
    optionStringifier = defaultOptionStringifier,
    options,
    stateReducer: externalReducer,
    value: valueParam,
    selectionLimit = null
  } = props;
  const id = useId(idProp);
  const defaultIdGenerator = React.useCallback((_, index) => `${id}-option-${index}`, [id]);
  const optionIdGenerator = (_props$optionIdGenera = props.optionIdGenerator) != null ? _props$optionIdGenera : defaultIdGenerator;
  const propsWithDefaults = useLatest(_extends({}, props, {
    disabledItemsFocusable,
    disableListWrap,
    focusManagement,
    isOptionDisabled,
    optionComparer,
    optionStringifier,
    selectionLimit
  }), [props]);
  const listboxRef = React.useRef(null);
  const handleRef = useForkRef(externalListboxRef, listboxRef);
  const [{
    highlightedValue,
    selectedValues: selectedValue
  }, dispatch] = useControllableReducer(defaultReducer, externalReducer, propsWithDefaults);
  const handleTextNavigation = useTextNavigation((searchString, event) => dispatch({
    type: ActionTypes.textNavigation,
    event,
    searchString
  }));
  React.useEffect(() => {
    // if a controlled value changes, we need to update the state to keep things in sync
    if (valueParam !== undefined && valueParam !== selectedValue) {
      dispatch({
        type: ActionTypes.setValue,
        event: null,
        value: valueParam
      });
    }
  }, [valueParam, selectedValue, dispatch]);
  const highlightedIndex = React.useMemo(() => {
    return highlightedValue == null ? -1 : options.findIndex(option => optionComparer(option, highlightedValue));
  }, [highlightedValue, options, optionComparer]);

  // introducing refs to avoid recreating the getOptionState function on each change.
  const latestSelectedValue = useLatest(selectedValue);
  const latestHighlightedIndex = useLatest(highlightedIndex);
  const previousOptions = React.useRef([]);
  React.useEffect(() => {
    if (areArraysEqual(previousOptions.current, options, optionComparer)) {
      return;
    }
    dispatch({
      type: ActionTypes.optionsChange,
      event: null,
      options,
      previousOptions: previousOptions.current
    });
    previousOptions.current = options;
  }, [options, optionComparer, dispatch]);
  const setSelectedValue = React.useCallback(values => {
    dispatch({
      type: ActionTypes.setValue,
      event: null,
      value: values
    });
  }, [dispatch]);
  const setHighlightedValue = React.useCallback(option => {
    dispatch({
      type: ActionTypes.setHighlight,
      event: null,
      highlight: option
    });
  }, [dispatch]);
  const createHandleOptionClick = React.useCallback((option, other) => event => {
    var _other$onClick;
    (_other$onClick = other.onClick) == null ? void 0 : _other$onClick.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    dispatch({
      type: ActionTypes.optionClick,
      option,
      event
    });
  }, [dispatch]);
  const createHandleOptionPointerOver = React.useCallback((option, other) => event => {
    var _other$onMouseOver;
    (_other$onMouseOver = other.onMouseOver) == null ? void 0 : _other$onMouseOver.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    dispatch({
      type: ActionTypes.optionHover,
      option,
      event
    });
  }, [dispatch]);
  const createHandleKeyDown = other => event => {
    var _other$onKeyDown;
    (_other$onKeyDown = other.onKeyDown) == null ? void 0 : _other$onKeyDown.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    const keysToPreventDefault = ['ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'];
    if (focusManagement === 'activeDescendant') {
      // When the child element is focused using the activeDescendant attribute,
      // the listbox handles keyboard events on its behalf.
      // We have to `preventDefault()` is this case to prevent the browser from
      // scrolling the view when space is pressed or submitting forms when enter is pressed.
      keysToPreventDefault.push(' ', 'Enter');
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: ActionTypes.keyDown,
      event
    });
    handleTextNavigation(event);
  };
  const createHandleBlur = other => event => {
    var _other$onBlur, _listboxRef$current;
    (_other$onBlur = other.onBlur) == null ? void 0 : _other$onBlur.call(other, event);
    if (event.defaultPrevented) {
      return;
    }
    if ((_listboxRef$current = listboxRef.current) != null && _listboxRef$current.contains(document.activeElement)) {
      // focus is within the listbox
      return;
    }
    dispatch({
      type: ActionTypes.blur,
      event
    });
  };
  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? optionIdGenerator(highlightedValue, highlightedIndex) : undefined,
      id,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      role: 'listbox',
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef
    });
  };
  const getOptionState = React.useCallback(option => {
    var _latestSelectedValue$;
    const index = options.findIndex(opt => optionComparer(opt, option));
    const selected = ((_latestSelectedValue$ = latestSelectedValue.current) != null ? _latestSelectedValue$ : []).some(value => value != null && optionComparer(option, value));
    const disabled = isOptionDisabled(option, index);
    const highlighted = latestHighlightedIndex.current === index && index !== -1;
    return {
      disabled,
      highlighted,
      index,
      selected
    };
  }, [options, isOptionDisabled, optionComparer, latestSelectedValue, latestHighlightedIndex]);
  const getOptionTabIndex = React.useCallback(optionState => {
    if (focusManagement === 'activeDescendant') {
      return undefined;
    }
    if (!optionState.highlighted) {
      return -1;
    }
    if (optionState.disabled && !disabledItemsFocusable) {
      return -1;
    }
    return 0;
  }, [focusManagement, disabledItemsFocusable]);
  const getOptionProps = React.useCallback((option, otherHandlers = {}) => {
    const optionState = getOptionState(option);
    return _extends({}, otherHandlers, {
      'aria-disabled': optionState.disabled || undefined,
      'aria-selected': optionState.selected,
      id: optionIdGenerator(option, optionState.index),
      onClick: createHandleOptionClick(option, otherHandlers),
      onPointerOver: createHandleOptionPointerOver(option, otherHandlers),
      role: 'option',
      tabIndex: getOptionTabIndex(optionState)
    });
  }, [optionIdGenerator, createHandleOptionClick, createHandleOptionPointerOver, getOptionTabIndex, getOptionState]);
  React.useDebugValue({
    highlightedOption: highlightedValue,
    selectedOption: selectedValue
  });
  return {
    getRootProps,
    getOptionProps,
    getOptionState,
    highlightedOption: highlightedValue,
    selectedOption: selectedValue,
    setSelectedValue,
    setHighlightedValue
  };
}