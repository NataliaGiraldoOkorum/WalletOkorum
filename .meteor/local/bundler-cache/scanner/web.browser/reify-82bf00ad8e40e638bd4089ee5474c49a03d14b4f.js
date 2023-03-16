let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let SystemGlobalStyles;module.link('@mui/system',{GlobalStyles(v){SystemGlobalStyles=v}},3);let defaultTheme;module.link('../styles/defaultTheme',{default(v){defaultTheme=v}},4);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},5);





function GlobalStyles(props) {
  return /*#__PURE__*/_jsx(SystemGlobalStyles, _extends({}, props, {
    defaultTheme: defaultTheme
  }));
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.shape({
    __emotion_styles: PropTypes.any.isRequired
  }), PropTypes.string, PropTypes.bool])
} : void 0;
module.exportDefault(GlobalStyles);