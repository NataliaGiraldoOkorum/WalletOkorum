module.export({default:()=>StyledEngineProvider});let React;module.link('react',{"*"(v){React=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let CacheProvider;module.link('@emotion/react',{CacheProvider(v){CacheProvider=v}},2);let createCache;module.link('@emotion/cache',{default(v){createCache=v}},3);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},4);




// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

let cache;
if (typeof document === 'object') {
  cache = createCache({
    key: 'css',
    prepend: true
  });
}
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst && cache ? /*#__PURE__*/_jsx(CacheProvider, {
    value: cache,
    children: children
  }) : children;
}
process.env.NODE_ENV !== "production" ? StyledEngineProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: PropTypes.bool
} : void 0;