let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let styled;module.link('../styles/styled',{default(v){styled=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let AddIcon;module.link('../internal/svg-icons/Add',{default(v){AddIcon=v}},8);let speedDialIconClasses,getSpeedDialIconUtilityClass;module.link('./speedDialIconClasses',{default(v){speedDialIconClasses=v},getSpeedDialIconUtilityClass(v){getSpeedDialIconUtilityClass=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},11);

const _excluded = ["className", "icon", "open", "openIcon"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    open,
    openIcon
  } = ownerState;
  const slots = {
    root: ['root'],
    icon: ['icon', open && 'iconOpen', openIcon && open && 'iconWithOpenIconOpen'],
    openIcon: ['openIcon', open && 'openIconOpen']
  };
  return composeClasses(slots, getSpeedDialIconUtilityClass, classes);
};
const SpeedDialIconRoot = styled('span', {
  name: 'MuiSpeedDialIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${speedDialIconClasses.icon}`]: styles.icon
    }, {
      [`& .${speedDialIconClasses.icon}`]: ownerState.open && styles.iconOpen
    }, {
      [`& .${speedDialIconClasses.icon}`]: ownerState.open && ownerState.openIcon && styles.iconWithOpenIconOpen
    }, {
      [`& .${speedDialIconClasses.openIcon}`]: styles.openIcon
    }, {
      [`& .${speedDialIconClasses.openIcon}`]: ownerState.open && styles.openIconOpen
    }, styles.root];
  }
})(({
  theme,
  ownerState
}) => ({
  height: 24,
  [`& .${speedDialIconClasses.icon}`]: _extends({
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.short
    })
  }, ownerState.open && _extends({
    transform: 'rotate(45deg)'
  }, ownerState.openIcon && {
    opacity: 0
  })),
  [`& .${speedDialIconClasses.openIcon}`]: _extends({
    position: 'absolute',
    transition: theme.transitions.create(['transform', 'opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    transform: 'rotate(-45deg)'
  }, ownerState.open && {
    transform: 'rotate(0deg)',
    opacity: 1
  })
}));
const SpeedDialIcon = /*#__PURE__*/React.forwardRef(function SpeedDialIcon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSpeedDialIcon'
  });
  const {
      className,
      icon: iconProp,
      openIcon: openIconProp
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  function formatIcon(icon, newClassName) {
    if ( /*#__PURE__*/React.isValidElement(icon)) {
      return /*#__PURE__*/React.cloneElement(icon, {
        className: newClassName
      });
    }
    return icon;
  }
  return /*#__PURE__*/_jsxs(SpeedDialIconRoot, _extends({
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: [openIconProp ? formatIcon(openIconProp, classes.openIcon) : null, iconProp ? formatIcon(iconProp, classes.icon) : /*#__PURE__*/_jsx(AddIcon, {
      className: classes.icon
    })]
  }));
});
process.env.NODE_ENV !== "production" ? SpeedDialIcon.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
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
   * @ignore
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.
   */
  openIcon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
SpeedDialIcon.muiName = 'SpeedDialIcon';
module.exportDefault(SpeedDialIcon);