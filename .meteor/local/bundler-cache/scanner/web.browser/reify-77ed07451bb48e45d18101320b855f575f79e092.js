module.export({default:()=>useMenuItem});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let useId,useForkRef;module.link('@mui/utils',{unstable_useId(v){useId=v},unstable_useForkRef(v){useForkRef=v}},2);let MenuUnstyledContext;module.link('../MenuUnstyled',{MenuUnstyledContext(v){MenuUnstyledContext=v}},3);let useButton;module.link('../useButton',{default(v){useButton=v}},4);let useForcedRerendering;module.link('../utils/useForcedRerendering',{default(v){useForcedRerendering=v}},5);






/**
 *
 * Demos:
 *
 * - [Unstyled Menu](https://mui.com/base/react-menu/#hooks)
 *
 * API:
 *
 * - [useMenuItem API](https://mui.com/base/api/use-menu-item/)
 */
function useMenuItem(props) {
  var _itemState$disabled;
  const {
    disabled = false,
    ref,
    label
  } = props;
  const id = useId();
  const menuContext = React.useContext(MenuUnstyledContext);
  const itemRef = React.useRef(null);
  const handleRef = useForkRef(itemRef, ref);
  if (menuContext === null) {
    throw new Error('MenuItemUnstyled must be used within a MenuUnstyled');
  }
  const {
    registerItem,
    unregisterItem,
    open,
    registerHighlightChangeHandler
  } = menuContext;
  React.useEffect(() => {
    if (id === undefined) {
      return undefined;
    }
    registerItem(id, {
      disabled,
      id,
      ref: itemRef,
      label
    });
    return () => unregisterItem(id);
  }, [id, registerItem, unregisterItem, disabled, ref, label]);
  const {
    getRootProps: getButtonProps,
    focusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    ref: handleRef
  });

  // Ensure the menu item is focused when highlighted
  const [focusRequested, requestFocus] = React.useState(false);
  const focusIfRequested = React.useCallback(() => {
    if (focusRequested && itemRef.current != null) {
      itemRef.current.focus();
      requestFocus(false);
    }
  }, [focusRequested]);
  React.useEffect(() => {
    focusIfRequested();
  });
  React.useDebugValue({
    id,
    disabled,
    label
  });
  const itemState = menuContext.getItemState(id != null ? id : '');
  const {
    highlighted
  } = itemState != null ? itemState : {
    highlighted: false
  };
  const rerender = useForcedRerendering();
  React.useEffect(() => {
    function updateHighlightedState(highlightedItemId) {
      if (highlightedItemId === id && !highlighted) {
        rerender();
      } else if (highlightedItemId !== id && highlighted) {
        rerender();
      }
    }
    return registerHighlightChangeHandler(updateHighlightedState);
  });
  React.useEffect(() => {
    // TODO: this should be handled by the MenuButton
    requestFocus(highlighted && open);
  }, [highlighted, open]);
  if (id === undefined) {
    return {
      getRootProps: (otherHandlers = {}) => _extends({}, otherHandlers, getButtonProps(otherHandlers), {
        role: 'menuitem'
      }),
      disabled: false,
      focusVisible,
      highlighted: false
    };
  }
  return {
    getRootProps: (otherHandlers = {}) => {
      const optionProps = menuContext.getItemProps(id, otherHandlers);
      return _extends({}, otherHandlers, getButtonProps(otherHandlers), {
        tabIndex: optionProps.tabIndex,
        id: optionProps.id,
        role: 'menuitem'
      });
    },
    disabled: (_itemState$disabled = itemState == null ? void 0 : itemState.disabled) != null ? _itemState$disabled : false,
    focusVisible,
    highlighted
  };
}