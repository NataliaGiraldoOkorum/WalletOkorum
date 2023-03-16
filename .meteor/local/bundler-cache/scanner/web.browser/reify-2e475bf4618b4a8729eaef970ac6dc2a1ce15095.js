module.export({fontFamily:()=>fontFamily,fontSize:()=>fontSize,fontStyle:()=>fontStyle,fontWeight:()=>fontWeight,letterSpacing:()=>letterSpacing,textTransform:()=>textTransform,lineHeight:()=>lineHeight,textAlign:()=>textAlign,typographyVariant:()=>typographyVariant},true);let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = style({
  prop: 'letterSpacing'
});
const textTransform = style({
  prop: 'textTransform'
});
const lineHeight = style({
  prop: 'lineHeight'
});
const textAlign = style({
  prop: 'textAlign'
});
const typographyVariant = style({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
module.exportDefault(typography);