module.export({borderTransform:()=>borderTransform});module.export({border:()=>border,borderTop:()=>borderTop,borderRight:()=>borderRight,borderBottom:()=>borderBottom,borderLeft:()=>borderLeft,borderColor:()=>borderColor,borderTopColor:()=>borderTopColor,borderRightColor:()=>borderRightColor,borderBottomColor:()=>borderBottomColor,borderLeftColor:()=>borderLeftColor,borderRadius:()=>borderRadius},true);let responsivePropType;module.link('./responsivePropType',{default(v){responsivePropType=v}},0);let style;module.link('./style',{default(v){style=v}},1);let compose;module.link('./compose',{default(v){compose=v}},2);let createUnaryUnit,getValue;module.link('./spacing',{createUnaryUnit(v){createUnaryUnit=v},getValue(v){getValue=v}},3);let handleBreakpoints;module.link('./breakpoints',{handleBreakpoints(v){handleBreakpoints=v}},4);




function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
const border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: borderTransform
});
const borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: borderTransform
});
const borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: borderTransform
});
const borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: borderTransform
});
const borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: borderTransform
});
const borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = style({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = style({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType
} : {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
module.exportDefault(borders);