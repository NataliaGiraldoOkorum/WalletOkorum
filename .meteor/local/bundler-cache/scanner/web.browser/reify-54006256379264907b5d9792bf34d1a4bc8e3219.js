module.export({flexBasis:()=>flexBasis,flexDirection:()=>flexDirection,flexWrap:()=>flexWrap,justifyContent:()=>justifyContent,alignItems:()=>alignItems,alignContent:()=>alignContent,order:()=>order,flex:()=>flex,flexGrow:()=>flexGrow,flexShrink:()=>flexShrink,alignSelf:()=>alignSelf,justifyItems:()=>justifyItems,justifySelf:()=>justifySelf});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

var flexBasis = style({
  prop: 'flexBasis'
});
var flexDirection = style({
  prop: 'flexDirection'
});
var flexWrap = style({
  prop: 'flexWrap'
});
var justifyContent = style({
  prop: 'justifyContent'
});
var alignItems = style({
  prop: 'alignItems'
});
var alignContent = style({
  prop: 'alignContent'
});
var order = style({
  prop: 'order'
});
var flex = style({
  prop: 'flex'
});
var flexGrow = style({
  prop: 'flexGrow'
});
var flexShrink = style({
  prop: 'flexShrink'
});
var alignSelf = style({
  prop: 'alignSelf'
});
var justifyItems = style({
  prop: 'justifyItems'
});
var justifySelf = style({
  prop: 'justifySelf'
});
var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
module.exportDefault(flexbox);