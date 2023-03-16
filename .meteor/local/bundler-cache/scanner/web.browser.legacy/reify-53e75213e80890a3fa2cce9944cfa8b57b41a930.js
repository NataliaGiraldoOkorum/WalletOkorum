module.export({default:function(){return jssPreset}});var functions;module.link('jss-plugin-rule-value-function',{default:function(v){functions=v}},0);var global;module.link('jss-plugin-global',{default:function(v){global=v}},1);var nested;module.link('jss-plugin-nested',{default:function(v){nested=v}},2);var camelCase;module.link('jss-plugin-camel-case',{default:function(v){camelCase=v}},3);var defaultUnit;module.link('jss-plugin-default-unit',{default:function(v){defaultUnit=v}},4);var vendorPrefixer;module.link('jss-plugin-vendor-prefixer',{default:function(v){vendorPrefixer=v}},5);var propsSort;module.link('jss-plugin-props-sort',{default:function(v){propsSort=v}},6);





 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [functions(), global(), nested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : vendorPrefixer(), propsSort()]
  };
}