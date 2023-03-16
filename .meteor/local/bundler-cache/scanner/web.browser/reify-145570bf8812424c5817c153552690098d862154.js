let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let styled;module.link('../styles/styled',{default(v){styled=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let ButtonBase;module.link('../ButtonBase',{default(v){ButtonBase=v}},8);let unsupportedProp;module.link('../utils/unsupportedProp',{default(v){unsupportedProp=v}},9);let bottomNavigationActionClasses,getBottomNavigationActionUtilityClass;module.link('./bottomNavigationActionClasses',{default(v){bottomNavigationActionClasses=v},getBottomNavigationActionUtilityClass(v){getBottomNavigationActionUtilityClass=v}},10);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},11);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},12);

const _excluded = ["className", "icon", "label", "onChange", "onClick", "selected", "showLabel", "value"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    showLabel,
    selected
  } = ownerState;
  const slots = {
    root: ['root', !showLabel && !selected && 'iconOnly', selected && 'selected'],
    label: ['label', !showLabel && !selected && 'iconOnly', selected && 'selected']
  };
  return composeClasses(slots, getBottomNavigationActionUtilityClass, classes);
};
const BottomNavigationActionRoot = styled(ButtonBase, {
  name: 'MuiBottomNavigationAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.showLabel && !ownerState.selected && styles.iconOnly];
  }
})(({
  theme,
  ownerState
}) => _extends({
  transition: theme.transitions.create(['color', 'padding-top'], {
    duration: theme.transitions.duration.short
  }),
  padding: '0px 12px',
  minWidth: 80,
  maxWidth: 168,
  color: (theme.vars || theme).palette.text.secondary,
  flexDirection: 'column',
  flex: '1'
}, !ownerState.showLabel && !ownerState.selected && {
  paddingTop: 14
}, !ownerState.showLabel && !ownerState.selected && !ownerState.label && {
  paddingTop: 0
}, {
  [`&.${bottomNavigationActionClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.main
  }
}));
const BottomNavigationActionLabel = styled('span', {
  name: 'MuiBottomNavigationAction',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.label
})(({
  theme,
  ownerState
}) => _extends({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(12),
  opacity: 1,
  transition: 'font-size 0.2s, opacity 0.2s',
  transitionDelay: '0.1s'
}, !ownerState.showLabel && !ownerState.selected && {
  opacity: 0,
  transitionDelay: '0s'
}, {
  [`&.${bottomNavigationActionClasses.selected}`]: {
    fontSize: theme.typography.pxToRem(14)
  }
}));
const BottomNavigationAction = /*#__PURE__*/React.forwardRef(function BottomNavigationAction(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiBottomNavigationAction'
  });
  const {
      className,
      icon,
      label,
      onChange,
      onClick,
      value
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const handleChange = event => {
    if (onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  return /*#__PURE__*/_jsxs(BottomNavigationActionRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    focusRipple: true,
    onClick: handleChange,
    ownerState: ownerState
  }, other, {
    children: [icon, /*#__PURE__*/_jsx(BottomNavigationActionLabel, {
      className: classes.label,
      ownerState: ownerState,
      children: label
    })]
  }));
});
process.env.NODE_ENV !== "production" ? BottomNavigationAction.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The icon to display.
   */
  icon: PropTypes.node,
  /**
   * The label element.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   *
   * The prop defaults to the value (`false`) inherited from the parent BottomNavigation component.
   */
  showLabel: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any
} : void 0;
module.exportDefault(BottomNavigationAction);