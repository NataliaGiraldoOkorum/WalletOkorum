let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},4);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},5);let getTabsListUnstyledUtilityClass;module.link('./tabsListUnstyledClasses',{getTabsListUnstyledUtilityClass(v){getTabsListUnstyledUtilityClass=v}},6);let useTabsList;module.link('../useTabsList',{default(v){useTabsList=v}},7);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},8);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},9);

const _excluded = ["children", "component", "slotProps", "slots"];








const useUtilityClasses = ownerState => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ['root', orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsListUnstyledUtilityClass));
};

/**
 *
 * Demos:
 *
 * - [Unstyled Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabsListUnstyled API](https://mui.com/base/api/tabs-list-unstyled/)
 */
const TabsListUnstyled = /*#__PURE__*/React.forwardRef((props, ref) => {
  var _ref;
  const {
      component,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    isRtl,
    orientation,
    getRootProps,
    processChildren
  } = useTabsList(_extends({}, props, {
    ref
  }));
  const ownerState = _extends({}, props, {
    isRtl,
    orientation
  });
  const classes = useUtilityClasses(ownerState);
  const TabsListRoot = (_ref = component != null ? component : slots.root) != null ? _ref : 'div';
  const tabsListRootProps = useSlotProps({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const processedChildren = processChildren();
  return /*#__PURE__*/_jsx(TabsListRoot, _extends({}, tabsListRootProps, {
    children: processedChildren
  }));
});
process.env.NODE_ENV !== "production" ? TabsListUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The props used for each slot inside the TabsList.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the TabsList.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  })
} : void 0;
module.exportDefault(TabsListUnstyled);