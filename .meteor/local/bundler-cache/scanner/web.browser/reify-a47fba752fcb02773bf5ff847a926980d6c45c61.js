let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let styled;module.link('../styles/styled',{default(v){styled=v}},5);let capitalize;module.link('../utils/capitalize',{default(v){capitalize=v}},6);let isHorizontal;module.link('../Drawer/Drawer',{isHorizontal(v){isHorizontal=v}},7);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},8);

const _excluded = ["anchor", "classes", "className", "width", "style"];







const SwipeAreaRoot = styled('div')(({
  theme,
  ownerState
}) => _extends({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  zIndex: theme.zIndex.drawer - 1
}, ownerState.anchor === 'left' && {
  right: 'auto'
}, ownerState.anchor === 'right' && {
  left: 'auto',
  right: 0
}, ownerState.anchor === 'top' && {
  bottom: 'auto',
  right: 0
}, ownerState.anchor === 'bottom' && {
  top: 'auto',
  bottom: 0,
  right: 0
}));

/**
 * @ignore - internal component.
 */
const SwipeArea = /*#__PURE__*/React.forwardRef(function SwipeArea(props, ref) {
  const {
      anchor,
      classes = {},
      className,
      width,
      style
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  return /*#__PURE__*/_jsx(SwipeAreaRoot, _extends({
    className: clsx('PrivateSwipeArea-root', classes.root, classes[`anchor${capitalize(anchor)}`], className),
    ref: ref,
    style: _extends({
      [isHorizontal(anchor) ? 'width' : 'height']: width
    }, style),
    ownerState: ownerState
  }, other));
});
process.env.NODE_ENV !== "production" ? SwipeArea.propTypes = {
  /**
   * Side on which to attach the discovery area.
   */
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']).isRequired,
  /**
   * @ignore
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The width of the left most (or right most) area in `px` where the
   * drawer can be swiped open from.
   */
  width: PropTypes.number.isRequired
} : void 0;
module.exportDefault(SwipeArea);