module.export({paletteTransform:()=>paletteTransform});module.export({color:()=>color,bgcolor:()=>bgcolor,backgroundColor:()=>backgroundColor},true);let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const palette = compose(color, bgcolor, backgroundColor);
module.exportDefault(palette);