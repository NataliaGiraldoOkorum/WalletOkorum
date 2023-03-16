module.export({default:function(){return createStyles}});var createStylesOriginal;module.link('@material-ui/styles',{createStyles:function(v){createStylesOriginal=v}},0); // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStylesOriginal(styles);
}