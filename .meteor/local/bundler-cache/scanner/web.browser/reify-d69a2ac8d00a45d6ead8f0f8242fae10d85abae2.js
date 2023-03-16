module.export({flexBasis:()=>flexBasis,flexDirection:()=>flexDirection,flexWrap:()=>flexWrap,justifyContent:()=>justifyContent,alignItems:()=>alignItems,alignContent:()=>alignContent,order:()=>order,flex:()=>flex,flexGrow:()=>flexGrow,flexShrink:()=>flexShrink,alignSelf:()=>alignSelf,justifyItems:()=>justifyItems,justifySelf:()=>justifySelf},true);let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

const flexBasis = style({
  prop: 'flexBasis'
});
const flexDirection = style({
  prop: 'flexDirection'
});
const flexWrap = style({
  prop: 'flexWrap'
});
const justifyContent = style({
  prop: 'justifyContent'
});
const alignItems = style({
  prop: 'alignItems'
});
const alignContent = style({
  prop: 'alignContent'
});
const order = style({
  prop: 'order'
});
const flex = style({
  prop: 'flex'
});
const flexGrow = style({
  prop: 'flexGrow'
});
const flexShrink = style({
  prop: 'flexShrink'
});
const alignSelf = style({
  prop: 'alignSelf'
});
const justifyItems = style({
  prop: 'justifyItems'
});
const justifySelf = style({
  prop: 'justifySelf'
});
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
module.exportDefault(flexbox);