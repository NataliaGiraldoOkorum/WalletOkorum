module.export({withThemeCreator:function(){return withThemeCreator}});var _extends;module.link("@babel/runtime/helpers/esm/extends",{default:function(v){_extends=v}},0);var _objectWithoutProperties;module.link("@babel/runtime/helpers/esm/objectWithoutProperties",{default:function(v){_objectWithoutProperties=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},3);var hoistNonReactStatics;module.link('hoist-non-react-statics',{default:function(v){hoistNonReactStatics=v}},4);var chainPropTypes,getDisplayName;module.link('@material-ui/utils',{chainPropTypes:function(v){chainPropTypes=v},getDisplayName:function(v){getDisplayName=v}},5);var useTheme;module.link('../useTheme',{default:function(v){useTheme=v}},6);






function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {
    if (process.env.NODE_ENV !== 'production') {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var WithTheme = /*#__PURE__*/React.forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = _objectWithoutProperties(props, ["innerRef"]);

      var theme = useTheme() || defaultTheme;
      return /*#__PURE__*/React.createElement(Component, _extends({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: chainPropTypes(PropTypes.oneOfType([PropTypes.func, PropTypes.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return new Error('Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
      })
    } : void 0;

    if (process.env.NODE_ENV !== 'production') {
      WithTheme.displayName = "WithTheme(".concat(getDisplayName(Component), ")");
    }

    hoistNonReactStatics(WithTheme, Component);

    if (process.env.NODE_ENV !== 'production') {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();
module.exportDefault(withTheme);