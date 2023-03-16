let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},4);let useBadge;module.link('../useBadge',{default(v){useBadge=v}},5);let getBadgeUnstyledUtilityClass;module.link('./badgeUnstyledClasses',{getBadgeUnstyledUtilityClass(v){getBadgeUnstyledUtilityClass=v}},6);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},7);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},8);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},9);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},10);

const _excluded = ["badgeContent", "component", "children", "invisible", "max", "slotProps", "slots", "showZero"];









const useUtilityClasses = ownerState => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', invisible && 'invisible']
  };
  return composeClasses(slots, useClassNamesOverride(getBadgeUnstyledUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Unstyled badge](https://mui.com/base/react-badge/)
 *
 * API:
 *
 * - [BadgeUnstyled API](https://mui.com/base/api/badge-unstyled/)
 */
const BadgeUnstyled = /*#__PURE__*/React.forwardRef(function BadgeUnstyled(props, ref) {
  const {
      component,
      children,
      max: maxProp = 99,
      slotProps = {},
      slots = {},
      showZero = false
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    badgeContent,
    max,
    displayValue,
    invisible
  } = useBadge(_extends({}, props, {
    max: maxProp
  }));
  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max,
    showZero
  });
  const classes = useUtilityClasses(ownerState);
  const Root = component || slots.root || 'span';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const Badge = slots.badge || 'span';
  const badgeProps = useSlotProps({
    elementType: Badge,
    externalSlotProps: slotProps.badge,
    ownerState,
    className: classes.badge
  });
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    children: [children, /*#__PURE__*/_jsx(Badge, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? BadgeUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,
  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: PropTypes.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: PropTypes.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: PropTypes.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: PropTypes.shape({
    badge: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    badge: PropTypes.elementType,
    root: PropTypes.elementType
  })
} : void 0;
module.exportDefault(BadgeUnstyled);