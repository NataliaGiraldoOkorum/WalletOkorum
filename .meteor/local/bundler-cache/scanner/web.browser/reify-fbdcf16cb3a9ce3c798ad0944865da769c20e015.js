module.export({displayPrint:()=>displayPrint,displayRaw:()=>displayRaw,overflow:()=>overflow,textOverflow:()=>textOverflow,visibility:()=>visibility,whiteSpace:()=>whiteSpace});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

var displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = style({
  prop: 'display'
});
var overflow = style({
  prop: 'overflow'
});
var textOverflow = style({
  prop: 'textOverflow'
});
var visibility = style({
  prop: 'visibility'
});
var whiteSpace = style({
  prop: 'whiteSpace'
});
module.exportDefault(compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));