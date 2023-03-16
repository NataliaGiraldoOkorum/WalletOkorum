module.export({default:()=>createBox});let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let clsx;module.link('clsx',{default(v){clsx=v}},3);let styled;module.link('@mui/styled-engine',{default(v){styled=v}},4);let styleFunctionSx,extendSxProp;module.link('./styleFunctionSx',{default(v){styleFunctionSx=v},extendSxProp(v){extendSxProp=v}},5);let useTheme;module.link('./useTheme',{default(v){useTheme=v}},6);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},7);

const _excluded = ["className", "component"];






function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx);
  const Box = /*#__PURE__*/React.forwardRef(function Box(inProps, ref) {
    const theme = useTheme(defaultTheme);
    const _extendSxProp = extendSxProp(inProps),
      {
        className,
        component = 'div'
      } = _extendSxProp,
      other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded);
    return /*#__PURE__*/_jsx(BoxRoot, _extends({
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
  return Box;
}