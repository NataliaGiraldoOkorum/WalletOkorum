module.export({default:()=>useOption});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useForkRef;module.link('@mui/utils',{unstable_useForkRef(v){useForkRef=v}},2);let SelectUnstyledContext;module.link('../SelectUnstyled/SelectUnstyledContext',{SelectUnstyledContext(v){SelectUnstyledContext=v}},3);let useForcedRerendering;module.link('../utils/useForcedRerendering',{default(v){useForcedRerendering=v}},4);





/**
 *
 * API:
 *
 * - [useOption API](https://mui.com/base/api/use-option/)
 */
function useOption(params) {
  const {
    value,
    optionRef: optionRefParam
  } = params;
  const selectContext = React.useContext(SelectUnstyledContext);
  if (!selectContext) {
    throw new Error('Option must have access to the SelectUnstyledContext (i.e., be used inside a SelectUnstyled component).');
  }
  const {
    getOptionProps,
    getOptionState,
    listboxRef,
    registerHighlightChangeHandler,
    registerSelectionChangeHandler
  } = selectContext;
  const optionState = getOptionState(value);
  const {
    selected,
    highlighted
  } = optionState;
  const rerender = useForcedRerendering();
  React.useEffect(() => {
    function updateSelectedState(selectedValues) {
      if (!selected) {
        if (Array.isArray(selectedValues)) {
          if (selectedValues.includes(value)) {
            rerender();
          }
        } else if (selectedValues === value) {
          rerender();
        }
      } else if (Array.isArray(selectedValues)) {
        if (!selectedValues.includes(value)) {
          rerender();
        }
      } else if (selectedValues !== value) {
        rerender();
      }
    }
    return registerSelectionChangeHandler(updateSelectedState);
  }, [registerSelectionChangeHandler, rerender, selected, value]);
  React.useEffect(() => {
    function updateHighlightedState(highlightedValue) {
      if (highlightedValue === value && !highlighted) {
        rerender();
      } else if (highlightedValue !== value && highlighted) {
        rerender();
      }
    }
    return registerHighlightChangeHandler(updateHighlightedState);
  }, [registerHighlightChangeHandler, rerender, value, highlighted]);
  const optionRef = React.useRef(null);
  const handleRef = useForkRef(optionRefParam, optionRef);
  React.useEffect(() => {
    // Scroll to the currently highlighted option
    if (highlighted) {
      if (!listboxRef.current || !optionRef.current) {
        return;
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [highlighted, listboxRef]);
  return {
    getRootProps: (otherHandlers = {}) => _extends({}, otherHandlers, getOptionProps(value, otherHandlers), {
      ref: handleRef
    }),
    highlighted,
    index: optionState.index,
    selected
  };
}