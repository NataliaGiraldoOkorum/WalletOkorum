module.export({fontFamily:()=>fontFamily,fontSize:()=>fontSize,fontStyle:()=>fontStyle,fontWeight:()=>fontWeight,letterSpacing:()=>letterSpacing,lineHeight:()=>lineHeight,textAlign:()=>textAlign});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

var fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = style({
  prop: 'letterSpacing'
});
var lineHeight = style({
  prop: 'lineHeight'
});
var textAlign = style({
  prop: 'textAlign'
});
var typography = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
module.exportDefault(typography);