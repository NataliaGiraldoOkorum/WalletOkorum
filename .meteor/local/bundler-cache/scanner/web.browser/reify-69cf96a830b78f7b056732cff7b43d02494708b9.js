let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let ClickAwayListener;module.link('../ClickAwayListener',{default(v){ClickAwayListener=v}},4);let composeClasses;module.link('../composeClasses',{default(v){composeClasses=v}},5);let getSnackbarUnstyledUtilityClass;module.link('./snackbarUnstyledClasses',{getSnackbarUnstyledUtilityClass(v){getSnackbarUnstyledUtilityClass=v}},6);let useSnackbar;module.link('../useSnackbar',{default(v){useSnackbar=v}},7);let useSlotProps;module.link('../utils',{useSlotProps(v){useSlotProps=v}},8);let useClassNamesOverride;module.link('../utils/ClassNameConfigurator',{useClassNamesOverride(v){useClassNamesOverride=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["autoHideDuration", "children", "component", "disableWindowBlurListener", "exited", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "slotProps", "slots"];









const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, useClassNamesOverride(getSnackbarUnstyledUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Unstyled Snackbar](https://mui.com/base/react-snackbar/)
 *
 * API:
 *
 * - [SnackbarUnstyled API](https://mui.com/base/api/snackbar-unstyled/)
 */
const SnackbarUnstyled = /*#__PURE__*/React.forwardRef(function SnackbarUnstyled(props, ref) {
  const {
      autoHideDuration = null,
      children,
      component,
      disableWindowBlurListener = false,
      exited = true,
      onClose,
      open,
      resumeHideDuration,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const classes = useUtilityClasses();
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(_extends({}, props, {
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration,
    ref
  }));
  const ownerState = props;
  const Root = component || slots.root || 'div';
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = useSlotProps({
    elementType: ClickAwayListener,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });

  // ClickAwayListener doesn't support ownerState
  delete clickAwayListenerProps.ownerState;

  // So that we only render active snackbars.
  if (!open && exited) {
    return null;
  }
  return /*#__PURE__*/_jsx(ClickAwayListener, _extends({}, clickAwayListenerProps, {
    children: /*#__PURE__*/_jsx(Root, _extends({}, rootProps, {
      children: children
    }))
  }));
});
process.env.NODE_ENV !== "production" ? SnackbarUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: PropTypes.number,
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
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: PropTypes.bool,
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited: PropTypes.bool,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  onMouseEnter: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: PropTypes.number,
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps: PropTypes.shape({
    clickAwayListener: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      children: PropTypes.element.isRequired,
      disableReactTree: PropTypes.bool,
      mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', 'onPointerDown', 'onPointerUp', false]),
      onClickAway: PropTypes.func,
      touchEvent: PropTypes.oneOf(['onTouchEnd', 'onTouchStart', false])
    })]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  })
} : void 0;
module.exportDefault(SnackbarUnstyled);