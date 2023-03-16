module.export({default:function(){return ServerStyleSheets}});var _extends;module.link("@babel/runtime/helpers/esm/extends",{default:function(v){_extends=v}},0);var _classCallCheck;module.link("@babel/runtime/helpers/esm/classCallCheck",{default:function(v){_classCallCheck=v}},1);var _createClass;module.link("@babel/runtime/helpers/esm/createClass",{default:function(v){_createClass=v}},2);var React;module.link('react',{default:function(v){React=v}},3);var SheetsRegistry;module.link('jss',{SheetsRegistry:function(v){SheetsRegistry=v}},4);var StylesProvider;module.link('../StylesProvider',{default:function(v){StylesProvider=v}},5);var createGenerateClassName;module.link('../createGenerateClassName',{default:function(v){createGenerateClassName=v}},6);







var ServerStyleSheets = /*#__PURE__*/function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ServerStyleSheets);

    this.options = options;
  }

  _createClass(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new SheetsRegistry(); // A new class name generator

      var generateClassName = createGenerateClassName();
      return /*#__PURE__*/React.createElement(StylesProvider, _extends({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return /*#__PURE__*/React.createElement('style', _extends({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();

