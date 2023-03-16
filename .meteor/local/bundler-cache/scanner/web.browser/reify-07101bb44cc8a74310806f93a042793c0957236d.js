let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},4);let getOptionGroupUnstyledUtilityClass;module.link('./optionGroupUnstyledClasses',{getOptionGroupUnstyledUtilityClass(v){getOptionGroupUnstyledUtilityClass=v}},5);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},6);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},7);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},8);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},9);

const _excluded = ["component", "disabled", "slotProps", "slots"];








function useUtilityClasses(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list']
  };
  return composeClasses(slots, useClassNamesOverride(getOptionGroupUnstyledUtilityClass));
}

/**
 * An unstyled option group to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Unstyled Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionGroupUnstyled API](https://mui.com/base/api/option-group-unstyled/)
 */
const OptionGroupUnstyled = /*#__PURE__*/React.forwardRef(function OptionGroupUnstyled(props, ref) {
  const {
      component,
      disabled = false,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const Root = component || (slots == null ? void 0 : slots.root) || 'li';
  const Label = (slots == null ? void 0 : slots.label) || 'span';
  const List = (slots == null ? void 0 : slots.list) || 'ul';
  const classes = useUtilityClasses(disabled);
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps({
    elementType: List,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    children: [/*#__PURE__*/_jsx(Label, _extends({}, labelProps, {
      children: props.label
    })), /*#__PURE__*/_jsx(List, _extends({}, listProps, {
      children: props.children
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? OptionGroupUnstyled.propTypes /* remove-proptypes */ = {
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
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * The human-readable description of the group.
   */
  label: PropTypes.node,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    list: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the OptionGroupUnstyled.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    label: PropTypes.elementType,
    list: PropTypes.elementType,
    root: PropTypes.elementType
  })
} : void 0;
module.exportDefault(OptionGroupUnstyled);