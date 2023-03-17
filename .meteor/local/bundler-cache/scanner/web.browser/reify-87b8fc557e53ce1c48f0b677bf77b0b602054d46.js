let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let RadioButtonUncheckedIcon;module.link('../internal/svg-icons/RadioButtonUnchecked',{default(v){RadioButtonUncheckedIcon=v}},3);let RadioButtonCheckedIcon;module.link('../internal/svg-icons/RadioButtonChecked',{default(v){RadioButtonCheckedIcon=v}},4);let styled;module.link('../styles/styled',{default(v){styled=v}},5);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},6);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},7);







const RadioButtonIconRoot = styled('span')({
  position: 'relative',
  display: 'flex'
});
const RadioButtonIconBackground = styled(RadioButtonUncheckedIcon)({
  // Scale applied to prevent dot misalignment in Safari
  transform: 'scale(1)'
});
const RadioButtonIconDot = styled(RadioButtonCheckedIcon)(({
  theme,
  ownerState
}) => _extends({
  left: 0,
  position: 'absolute',
  transform: 'scale(0)',
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  })
}, ownerState.checked && {
  transform: 'scale(1)',
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.shortest
  })
}));

/**
 * @ignore - internal component.
 */
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = _extends({}, props, {
    checked
  });
  return /*#__PURE__*/_jsxs(RadioButtonIconRoot, {
    className: classes.root,
    ownerState: ownerState,
    children: [/*#__PURE__*/_jsx(RadioButtonIconBackground, {
      fontSize: fontSize,
      className: classes.background,
      ownerState: ownerState
    }), /*#__PURE__*/_jsx(RadioButtonIconDot, {
      fontSize: fontSize,
      className: classes.dot,
      ownerState: ownerState
    })]
  });
}
process.env.NODE_ENV !== "production" ? RadioButtonIcon.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: PropTypes.oneOf(['small', 'medium'])
} : void 0;
module.exportDefault(RadioButtonIcon);