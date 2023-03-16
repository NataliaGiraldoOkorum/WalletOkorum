module.export({position:()=>position,zIndex:()=>zIndex,top:()=>top,right:()=>right,bottom:()=>bottom,left:()=>left});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

var position = style({
  prop: 'position'
});
var zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var top = style({
  prop: 'top'
});
var right = style({
  prop: 'right'
});
var bottom = style({
  prop: 'bottom'
});
var left = style({
  prop: 'left'
});
module.exportDefault(compose(position, zIndex, top, right, bottom, left));