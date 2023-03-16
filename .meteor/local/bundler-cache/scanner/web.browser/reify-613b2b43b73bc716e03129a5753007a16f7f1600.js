let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let ListContext;module.link('../List/ListContext',{default(v){ListContext=v}},6);let styled;module.link('../styles/styled',{default(v){styled=v}},7);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},8);let getListItemAvatarUtilityClass;module.link('./listItemAvatarClasses',{getListItemAvatarUtilityClass(v){getListItemAvatarUtilityClass=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["className"];









const useUtilityClasses = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return composeClasses(slots, getListItemAvatarUtilityClass, classes);
};
const ListItemAvatarRoot = styled('div', {
  name: 'MuiListItemAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(({
  ownerState
}) => _extends({
  minWidth: 56,
  flexShrink: 0
}, ownerState.alignItems === 'flex-start' && {
  marginTop: 8
}));

/**
 * A simple wrapper to apply `List` styles to an `Avatar`.
 */
const ListItemAvatar = /*#__PURE__*/React.forwardRef(function ListItemAvatar(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiListItemAvatar'
  });
  const {
      className
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const context = React.useContext(ListContext);
  const ownerState = _extends({}, props, {
    alignItems: context.alignItems
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(ListItemAvatarRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? ListItemAvatar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `Avatar`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(ListItemAvatar);