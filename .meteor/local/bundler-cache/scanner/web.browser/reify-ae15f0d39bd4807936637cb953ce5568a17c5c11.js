module.export({displayPrint:()=>displayPrint,displayRaw:()=>displayRaw,overflow:()=>overflow,textOverflow:()=>textOverflow,visibility:()=>visibility,whiteSpace:()=>whiteSpace},true);let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

const displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = style({
  prop: 'display'
});
const overflow = style({
  prop: 'overflow'
});
const textOverflow = style({
  prop: 'textOverflow'
});
const visibility = style({
  prop: 'visibility'
});
const whiteSpace = style({
  prop: 'whiteSpace'
});
module.exportDefault(compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));