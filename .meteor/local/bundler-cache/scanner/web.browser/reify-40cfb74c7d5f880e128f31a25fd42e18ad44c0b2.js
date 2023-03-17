module.export({default:()=>SliderValueLabel});let React;module.link('react',{"*"(v){React=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let clsx;module.link('clsx',{default(v){clsx=v}},2);let sliderClasses;module.link('./sliderClasses',{default(v){sliderClasses=v}},3);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},4);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},5);





const useValueLabelClasses = props => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: clsx(open && sliderClasses.valueLabelOpen),
    circle: sliderClasses.valueLabelCircle,
    label: sliderClasses.valueLabelLabel
  };
  return utilityClasses;
};

/**
 * @ignore - internal component.
 */
function SliderValueLabel(props) {
  const {
    children,
    className,
    value
  } = props;
  const classes = useValueLabelClasses(props);
  if (!children) {
    return null;
  }
  return /*#__PURE__*/React.cloneElement(children, {
    className: clsx(children.props.className)
  }, /*#__PURE__*/_jsxs(React.Fragment, {
    children: [children.props.children, /*#__PURE__*/_jsx("span", {
      className: clsx(classes.offset, className),
      "aria-hidden": true,
      children: /*#__PURE__*/_jsx("span", {
        className: classes.circle,
        children: /*#__PURE__*/_jsx("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
process.env.NODE_ENV !== "production" ? SliderValueLabel.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  value: PropTypes.node
} : void 0;