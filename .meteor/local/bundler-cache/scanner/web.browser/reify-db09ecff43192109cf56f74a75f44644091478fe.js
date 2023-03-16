module.export({color:()=>color,bgcolor:()=>bgcolor});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

var color = style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = compose(color, bgcolor);
module.exportDefault(palette);