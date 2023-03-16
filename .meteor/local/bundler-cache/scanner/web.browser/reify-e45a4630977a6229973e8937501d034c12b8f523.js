let React;module.link('react',{"*"(v){React=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let MuiThemeProvider;module.link('@mui/private-theming',{ThemeProvider(v){MuiThemeProvider=v}},2);let exactProp;module.link('@mui/utils',{exactProp(v){exactProp=v}},3);let StyledEngineThemeContext;module.link('@mui/styled-engine',{ThemeContext(v){StyledEngineThemeContext=v}},4);let useTheme;module.link('../useTheme',{default(v){useTheme=v}},5);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},6);






const EMPTY_THEME = {};
function InnerThemeProvider(props) {
  const theme = useTheme();
  return /*#__PURE__*/_jsx(StyledEngineThemeContext.Provider, {
    value: typeof theme === 'object' ? theme : EMPTY_THEME,
    children: props.children
  });
}
process.env.NODE_ENV !== "production" ? InnerThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node
} : void 0;

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 */
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  return /*#__PURE__*/_jsx(MuiThemeProvider, {
    theme: localTheme,
    children: /*#__PURE__*/_jsx(InnerThemeProvider, {
      children: children
    })
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}
module.exportDefault(ThemeProvider);