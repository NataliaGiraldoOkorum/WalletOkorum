module.export({css:()=>css});let _toConsumableArray;module.link("@babel/runtime/helpers/esm/toConsumableArray",{default(v){_toConsumableArray=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let chainPropTypes;module.link('@material-ui/utils',{chainPropTypes(v){chainPropTypes=v}},3);let merge;module.link('./merge',{default(v){merge=v}},4);





function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

var warnedOnce = false;

function styleFunctionSx(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return _extends({}, merge(output, styleFunction(_extends({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    if (props.sx) {
      return _extends({}, merge(output, styleFunction(_extends({
        theme: props.theme
      }, props.sx))), omit(props.sx, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes = process.env.NODE_ENV !== 'production' ? _extends({}, styleFunction.propTypes, {
    css: chainPropTypes(PropTypes.object, function (props) {
      if (!warnedOnce && props.css !== undefined) {
        warnedOnce = true;
        return new Error('Material-UI: The `css` prop is deprecated, please use the `sx` prop instead.');
      }

      return null;
    }),
    sx: PropTypes.object
  }) : {};
  newStyleFunction.filterProps = ['css', 'sx'].concat(_toConsumableArray(styleFunction.filterProps));
  return newStyleFunction;
}
/**
 *
 * @deprecated
 * The css style function is deprecated. Use the `styleFunctionSx` instead.
 */


function css(styleFunction) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('Material-UI: The `css` function is deprecated. Use the `styleFunctionSx` instead.');
  }

  return styleFunctionSx(styleFunction);
}
module.exportDefault(styleFunctionSx);