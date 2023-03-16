let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},4);let SelectUnstyledContext;module.link('../SelectUnstyled/SelectUnstyledContext',{SelectUnstyledContext(v){SelectUnstyledContext=v}},5);let getOptionUnstyledUtilityClass;module.link('./optionUnstyledClasses',{getOptionUnstyledUtilityClass(v){getOptionUnstyledUtilityClass=v}},6);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},7);let useOption;module.link('../useOption',{default(v){useOption=v}},8);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["children", "component", "disabled", "label", "slotProps", "slots", "value"];









function useUtilityClasses(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', highlighted && 'highlighted', selected && 'selected']
  };
  return composeClasses(slots, useClassNamesOverride(getOptionUnstyledUtilityClass));
}

/**
 * An unstyled option to be used within a SelectUnstyled.
 */
const OptionUnstyled = /*#__PURE__*/React.forwardRef(function OptionUnstyled(props, ref) {
  const {
      children,
      component,
      disabled = false,
      slotProps = {},
      slots = {},
      value
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const selectContext = React.useContext(SelectUnstyledContext);
  if (!selectContext) {
    throw new Error('OptionUnstyled must be used within a SelectUnstyled');
  }
  const Root = component || slots.root || 'li';
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = useOption({
    disabled,
    value,
    optionRef: ref
  });
  const ownerState = _extends({}, props, {
    disabled,
    highlighted,
    index,
    selected
  });
  const classes = useUtilityClasses(ownerState);
  const rootProps = useSlotProps({
    getSlotProps: getRootProps,
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return /*#__PURE__*/_jsx(Root, _extends({}, rootProps, {
    children: children
  }));
});
process.env.NODE_ENV !== "production" ? OptionUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
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
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: PropTypes.string,
  /**
   * The props used for each slot inside the OptionUnstyled.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the OptionUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * The value of the option.
   */
  value: PropTypes.any.isRequired
} : void 0;

/**
 * An unstyled option to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Unstyled Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionUnstyled API](https://mui.com/base/api/option-unstyled/)
 */
module.exportDefault(React.memo(OptionUnstyled));