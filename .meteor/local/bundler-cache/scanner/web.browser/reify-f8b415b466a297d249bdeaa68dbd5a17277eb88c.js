let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let useForkRef;module.link('@mui/utils',{unstable_useForkRef(v){useForkRef=v}},4);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},5);let getTabUnstyledUtilityClass;module.link('./tabUnstyledClasses',{getTabUnstyledUtilityClass(v){getTabUnstyledUtilityClass=v}},6);let useTab;module.link('../useTab',{default(v){useTab=v}},7);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},8);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["action", "children", "value", "disabled", "onChange", "onClick", "onFocus", "component", "slotProps", "slots"];









const useUtilityClasses = ownerState => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled']
  };
  return composeClasses(slots, useClassNamesOverride(getTabUnstyledUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Unstyled Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabUnstyled API](https://mui.com/base/api/tab-unstyled/)
 */
const TabUnstyled = /*#__PURE__*/React.forwardRef(function TabUnstyled(props, ref) {
  var _ref;
  const {
      action,
      children,
      disabled = false,
      component,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const tabRef = React.useRef();
  const handleRef = useForkRef(tabRef, ref);
  const {
    active,
    focusVisible,
    setFocusVisible,
    selected,
    getRootProps
  } = useTab(_extends({}, props, {
    ref: handleRef
  }));
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      tabRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    active,
    focusVisible,
    disabled,
    selected
  });
  const classes = useUtilityClasses(ownerState);
  const TabRoot = (_ref = component != null ? component : slots.root) != null ? _ref : 'button';
  const tabRootProps = useSlotProps({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  return /*#__PURE__*/_jsx(TabRoot, _extends({}, tabRootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? TabUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      focusVisible: PropTypes.func.isRequired
    })
  })]),
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
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Callback invoked when new value is being set.
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * The props used for each slot inside the Tab.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Tab.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * You can provide your own value. Otherwise, we fall back to the child position index.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : void 0;
module.exportDefault(TabUnstyled);