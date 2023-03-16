module.export({width:()=>width,maxWidth:()=>maxWidth,minWidth:()=>minWidth,height:()=>height,maxHeight:()=>maxHeight,minHeight:()=>minHeight,sizeWidth:()=>sizeWidth,sizeHeight:()=>sizeHeight,boxSizing:()=>boxSizing});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);


function transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = style({
  prop: 'width',
  transform: transform
});
var maxWidth = style({
  prop: 'maxWidth',
  transform: transform
});
var minWidth = style({
  prop: 'minWidth',
  transform: transform
});
var height = style({
  prop: 'height',
  transform: transform
});
var maxHeight = style({
  prop: 'maxHeight',
  transform: transform
});
var minHeight = style({
  prop: 'minHeight',
  transform: transform
});
var sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform: transform
});
var sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform: transform
});
var boxSizing = style({
  prop: 'boxSizing'
});
var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
module.exportDefault(sizing);