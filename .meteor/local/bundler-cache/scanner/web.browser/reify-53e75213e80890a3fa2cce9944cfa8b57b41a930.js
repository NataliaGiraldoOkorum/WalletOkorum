module.export({default:()=>jssPreset});let functions;module.link('jss-plugin-rule-value-function',{default(v){functions=v}},0);let global;module.link('jss-plugin-global',{default(v){global=v}},1);let nested;module.link('jss-plugin-nested',{default(v){nested=v}},2);let camelCase;module.link('jss-plugin-camel-case',{default(v){camelCase=v}},3);let defaultUnit;module.link('jss-plugin-default-unit',{default(v){defaultUnit=v}},4);let vendorPrefixer;module.link('jss-plugin-vendor-prefixer',{default(v){vendorPrefixer=v}},5);let propsSort;module.link('jss-plugin-props-sort',{default(v){propsSort=v}},6);





 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [functions(), global(), nested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : vendorPrefixer(), propsSort()]
  };
}