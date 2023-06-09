let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let HTMLElementType,refType;module.link('@mui/utils',{HTMLElementType(v){HTMLElementType=v},refType(v){refType=v}},4);let MenuUnstyledContext;module.link('./MenuUnstyledContext',{default(v){MenuUnstyledContext=v}},5);let getMenuUnstyledUtilityClass;module.link('./menuUnstyledClasses',{getMenuUnstyledUtilityClass(v){getMenuUnstyledUtilityClass=v}},6);let useMenu;module.link('../useMenu',{default(v){useMenu=v}},7);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},8);let PopperUnstyled;module.link('../PopperUnstyled',{default(v){PopperUnstyled=v}},9);let useSlotProps;module.link('../utils/useSlotProps',{default(v){useSlotProps=v}},10);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},11);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},12);

const _excluded = ["actions", "anchorEl", "children", "component", "keepMounted", "listboxId", "onClose", "open", "slotProps", "slots"];











function useUtilityClasses(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded']
  };
  return composeClasses(slots, useClassNamesOverride(getMenuUnstyledUtilityClass));
}
/**
 *
 * Demos:
 *
 * - [Unstyled Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuUnstyled API](https://mui.com/base/api/menu-unstyled/)
 */
const MenuUnstyled = /*#__PURE__*/React.forwardRef(function MenuUnstyled(props, forwardedRef) {
  var _ref, _slots$listbox;
  const {
      actions,
      anchorEl,
      children,
      component,
      keepMounted = false,
      listboxId,
      onClose,
      open = false,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    contextValue,
    getListboxProps,
    highlightFirstItem,
    highlightLastItem
  } = useMenu({
    open,
    onClose,
    listboxId
  });
  React.useImperativeHandle(actions, () => ({
    highlightFirstItem,
    highlightLastItem
  }), [highlightFirstItem, highlightLastItem]);
  const ownerState = _extends({}, props, {
    open
  });
  const classes = useUtilityClasses(ownerState);
  const Root = (_ref = component != null ? component : slots.root) != null ? _ref : PopperUnstyled;
  const rootProps = useSlotProps({
    elementType: Root,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      anchorEl,
      open,
      keepMounted,
      role: undefined,
      ref: forwardedRef
    },
    className: classes.root,
    ownerState
  });
  const Listbox = (_slots$listbox = slots.listbox) != null ? _slots$listbox : 'ul';
  const listboxProps = useSlotProps({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    ownerState,
    className: classes.listbox
  });
  return /*#__PURE__*/_jsx(Root, _extends({}, rootProps, {
    children: /*#__PURE__*/_jsx(Listbox, _extends({}, listboxProps, {
      children: /*#__PURE__*/_jsx(MenuUnstyledContext.Provider, {
        value: contextValue,
        children: children
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" ? MenuUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: refType,
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   */
  anchorEl: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]),
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
   * Always keep the menu in the DOM.
   * This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Menu.
   *
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * @ignore
   */
  listboxId: PropTypes.string,
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: PropTypes.func,
  /**
   * Controls whether the menu is displayed.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Menu.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    listbox: PropTypes.elementType,
    root: PropTypes.elementType
  })
} : void 0;
module.exportDefault(MenuUnstyled);