module.export({default:function(){return styled}});var _extends;module.link("@babel/runtime/helpers/esm/extends",{default:function(v){_extends=v}},0);var _objectWithoutProperties;module.link("@babel/runtime/helpers/esm/objectWithoutProperties",{default:function(v){_objectWithoutProperties=v}},1);var React;module.link('react',{default:function(v){React=v}},2);var clsx;module.link('clsx',{default:function(v){clsx=v}},3);var PropTypes;module.link('prop-types',{default:function(v){PropTypes=v}},4);var chainPropTypes,getDisplayName;module.link('@material-ui/utils',{chainPropTypes:function(v){chainPropTypes=v},getDisplayName:function(v){getDisplayName=v}},5);var hoistNonReactStatics;module.link('hoist-non-react-statics',{default:function(v){hoistNonReactStatics=v}},6);var makeStyles;module.link('../makeStyles',{default:function(v){makeStyles=v}},7);








function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = _objectWithoutProperties(options, ["name"]);

    if (process.env.NODE_ENV !== 'production' && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    var classNamePrefix = name;

    if (process.env.NODE_ENV !== 'production') {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = getDisplayName(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style(_extends({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = makeStyles(stylesOrCreator, _extends({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/React.forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = _objectWithoutProperties(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = clsx(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/React.cloneElement(children, _extends({
          className: clsx(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children(_extends({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/React.createElement(FinalComponent, _extends({
        ref: ref,
        className: className
      }, spread), children);
    });
    process.env.NODE_ENV !== "production" ? StyledComponent.propTypes = _extends({
      /**
       * A render function or node.
       */
      children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

      /**
       * @ignore
       */
      className: PropTypes.string,

      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: chainPropTypes(PropTypes.bool, function (props) {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: PropTypes
      /* @typescript-to-proptypes-ignore */
      .elementType
    }, propTypes) : void 0;

    if (process.env.NODE_ENV !== 'production') {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }

    hoistNonReactStatics(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}