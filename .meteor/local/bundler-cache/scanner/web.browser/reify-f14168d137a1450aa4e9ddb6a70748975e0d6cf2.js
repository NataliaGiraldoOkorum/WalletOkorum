module.export({position:()=>position,zIndex:()=>zIndex,top:()=>top,right:()=>right,bottom:()=>bottom,left:()=>left},true);let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

const position = style({
  prop: 'position'
});
const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const top = style({
  prop: 'top'
});
const right = style({
  prop: 'right'
});
const bottom = style({
  prop: 'bottom'
});
const left = style({
  prop: 'left'
});
module.exportDefault(compose(position, zIndex, top, right, bottom, left));