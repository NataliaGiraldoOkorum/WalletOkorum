module.export({default:()=>createCssVarsProvider});module.export({DISABLE_CSS_TRANSITION:()=>DISABLE_CSS_TRANSITION},true);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let _formatMuiErrorMessage;module.link("@mui/utils",{formatMuiErrorMessage(v){_formatMuiErrorMessage=v}},2);let React;module.link('react',{"*"(v){React=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let deepmerge;module.link('@mui/utils',{deepmerge(v){deepmerge=v}},5);let GlobalStyles;module.link('@mui/styled-engine',{GlobalStyles(v){GlobalStyles=v}},6);let muiUseTheme;module.link('@mui/private-theming',{useTheme(v){muiUseTheme=v}},7);let ThemeProvider;module.link('../ThemeProvider',{default(v){ThemeProvider=v}},8);let systemGetInitColorSchemeScript,DEFAULT_ATTRIBUTE,DEFAULT_COLOR_SCHEME_STORAGE_KEY,DEFAULT_MODE_STORAGE_KEY;module.link('./getInitColorSchemeScript',{default(v){systemGetInitColorSchemeScript=v},DEFAULT_ATTRIBUTE(v){DEFAULT_ATTRIBUTE=v},DEFAULT_COLOR_SCHEME_STORAGE_KEY(v){DEFAULT_COLOR_SCHEME_STORAGE_KEY=v},DEFAULT_MODE_STORAGE_KEY(v){DEFAULT_MODE_STORAGE_KEY=v}},9);let useCurrentColorScheme;module.link('./useCurrentColorScheme',{default(v){useCurrentColorScheme=v}},10);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},11);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},12);


const _excluded = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"];










const DISABLE_CSS_TRANSITION = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function createCssVarsProvider(options) {
  const {
    theme: defaultTheme = {},
    attribute: defaultAttribute = DEFAULT_ATTRIBUTE,
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    defaultMode: designSystemMode = 'light',
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    resolveTheme,
    excludeVariablesFromRoot
  } = options;
  if (!defaultTheme.colorSchemes || typeof designSystemColorScheme === 'string' && !defaultTheme.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === 'object' && !defaultTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === 'object' && !defaultTheme.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }
  const ColorSchemeContext = /*#__PURE__*/React.createContext(undefined);
  const useColorScheme = () => {
    const value = React.useContext(ColorSchemeContext);
    if (!value) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : _formatMuiErrorMessage(19));
    }
    return value;
  };
  function CssVarsProvider({
    children,
    theme: themeProp = defaultTheme,
    modeStorageKey = defaultModeStorageKey,
    colorSchemeStorageKey = defaultColorSchemeStorageKey,
    attribute = defaultAttribute,
    defaultMode = designSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    storageWindow = typeof window === 'undefined' ? undefined : window,
    documentNode = typeof document === 'undefined' ? undefined : document,
    colorSchemeNode = typeof document === 'undefined' ? undefined : document.documentElement,
    colorSchemeSelector = ':root',
    disableNestedContext = false,
    disableStyleSheetGeneration = false
  }) {
    const hasMounted = React.useRef(false);
    const upperTheme = muiUseTheme();
    const ctx = React.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const {
        colorSchemes = {},
        components = {},
        generateCssVars = () => ({
          vars: {},
          css: {}
        }),
        cssVarPrefix
      } = themeProp,
      restThemeProp = _objectWithoutPropertiesLoose(themeProp, _excluded);
    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme = typeof defaultColorScheme === 'string' ? defaultColorScheme : defaultColorScheme.dark;

    // 1. Get the data about the `mode`, `colorScheme`, and setter functions.
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }
    const calculatedMode = (() => {
      if (mode) {
        return mode;
      }
      // This scope occurs on the server
      if (defaultMode === 'system') {
        return designSystemMode;
      }
      return defaultMode;
    })();
    const calculatedColorScheme = (() => {
      if (!colorScheme) {
        // This scope occurs on the server
        if (calculatedMode === 'dark') {
          return defaultDarkColorScheme;
        }
        // use light color scheme, if default mode is 'light' | 'system'
        return defaultLightColorScheme;
      }
      return colorScheme;
    })();

    // 2. Create CSS variables and store them in objects (to be generated in stylesheets in the final step)
    const {
      css: rootCss,
      vars: rootVars
    } = generateCssVars();

    // 3. Start composing the theme object
    const theme = _extends({}, restThemeProp, {
      components,
      colorSchemes,
      cssVarPrefix,
      vars: rootVars,
      getColorSchemeSelector: targetColorScheme => `[${attribute}="${targetColorScheme}"] &`
    });

    // 4. Create color CSS variables and store them in objects (to be generated in stylesheets in the final step)
    //    The default color scheme stylesheet is constructed to have the least CSS specificity.
    //    The other color schemes uses selector, default as data attribute, to increase the CSS specificity so that they can override the default color scheme stylesheet.
    const defaultColorSchemeStyleSheet = {};
    const otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css,
        vars
      } = generateCssVars(key);
      theme.vars = deepmerge(theme.vars, vars);
      if (key === calculatedColorScheme) {
        // 4.1 Merge the selected color scheme to the theme
        Object.keys(scheme).forEach(schemeKey => {
          if (scheme[schemeKey] && typeof scheme[schemeKey] === 'object') {
            // shallow merge the 1st level structure of the theme.
            theme[schemeKey] = _extends({}, theme[schemeKey], scheme[schemeKey]);
          } else {
            theme[schemeKey] = scheme[schemeKey];
          }
        });
        if (theme.palette) {
          theme.palette.colorScheme = key;
        }
      }
      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === 'string') {
          return defaultColorScheme;
        }
        if (defaultMode === 'dark') {
          return defaultColorScheme.dark;
        }
        return defaultColorScheme.light;
      })();
      if (key === resolvedDefaultColorScheme) {
        if (excludeVariablesFromRoot) {
          const excludedVariables = {};
          excludeVariablesFromRoot(cssVarPrefix).forEach(cssVar => {
            excludedVariables[cssVar] = css[cssVar];
            delete css[cssVar];
          });
          defaultColorSchemeStyleSheet[`[${attribute}="${key}"]`] = excludedVariables;
        }
        defaultColorSchemeStyleSheet[`${colorSchemeSelector}, [${attribute}="${key}"]`] = css;
      } else {
        otherColorSchemesStyleSheet[`${colorSchemeSelector === ':root' ? '' : colorSchemeSelector}[${attribute}="${key}"]`] = css;
      }
    });
    theme.vars = deepmerge(theme.vars, rootVars);

    // 5. Declaring effects
    // 5.1 Updates the selector value to use the current color scheme which tells CSS to use the proper stylesheet.
    React.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);

    // 5.2 Remove the CSS transition when color scheme changes to create instant experience.
    // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
    React.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css = documentNode.createElement('style');
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css);

        // Force browser repaint
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React.useMemo(() => ({
      mode,
      systemMode,
      setMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme,
      allColorSchemes
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || nested && (upperTheme == null ? void 0 : upperTheme.cssVarPrefix) === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = /*#__PURE__*/_jsxs(React.Fragment, {
      children: [shouldGenerateStyleSheet && /*#__PURE__*/_jsxs(React.Fragment, {
        children: [/*#__PURE__*/_jsx(GlobalStyles, {
          styles: {
            [colorSchemeSelector]: rootCss
          }
        }), /*#__PURE__*/_jsx(GlobalStyles, {
          styles: defaultColorSchemeStyleSheet
        }), /*#__PURE__*/_jsx(GlobalStyles, {
          styles: otherColorSchemesStyleSheet
        })]
      }), /*#__PURE__*/_jsx(ThemeProvider, {
        theme: resolveTheme ? resolveTheme(theme) : theme,
        children: children
      })]
    });
    if (nested) {
      return element;
    }
    return /*#__PURE__*/_jsx(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  process.env.NODE_ENV !== "production" ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: PropTypes.string,
    /**
     * The component tree.
     */
    children: PropTypes.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: PropTypes.any,
    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: PropTypes.string,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: PropTypes.string,
    /**
     * The initial color scheme used.
     */
    defaultColorScheme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * The initial mode used.
     */
    defaultMode: PropTypes.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: PropTypes.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: PropTypes.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes
     */
    disableTransitionOnChange: PropTypes.bool,
    /**
     * The document to attach the attribute to
     */
    documentNode: PropTypes.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: PropTypes.string,
    /**
     * The window that attaches the 'storage' event listener
     * @default window
     */
    storageWindow: PropTypes.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: PropTypes.object
  } : void 0;
  const defaultLightColorScheme = typeof designSystemColorScheme === 'string' ? designSystemColorScheme : designSystemColorScheme.light;
  const defaultDarkColorScheme = typeof designSystemColorScheme === 'string' ? designSystemColorScheme : designSystemColorScheme.dark;
  const getInitColorSchemeScript = params => systemGetInitColorSchemeScript(_extends({
    attribute: defaultAttribute,
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultMode: designSystemMode,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey
  }, params));
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}