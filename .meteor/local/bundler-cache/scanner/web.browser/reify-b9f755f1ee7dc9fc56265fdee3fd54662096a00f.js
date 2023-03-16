module.export({default:()=>GlobalStyles});let React;module.link('react',{"*"(v){React=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let Global;module.link('@emotion/react',{Global(v){Global=v}},2);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},3);



function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/_jsx(Global, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
  defaultTheme: PropTypes.object,
  styles: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
} : void 0;