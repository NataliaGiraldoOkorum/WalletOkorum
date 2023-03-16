module.export({sizingTransform:()=>sizingTransform});module.export({width:()=>width,maxWidth:()=>maxWidth,minWidth:()=>minWidth,height:()=>height,maxHeight:()=>maxHeight,minHeight:()=>minHeight,sizeWidth:()=>sizeWidth,sizeHeight:()=>sizeHeight,boxSizing:()=>boxSizing},true);let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);let handleBreakpoints,breakpointsValues;module.link('./breakpoints',{handleBreakpoints(v){handleBreakpoints=v},values(v){breakpointsValues=v}},2);


function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || breakpointsValues[propValue];
      return {
        maxWidth: breakpoint || sizingTransform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style({
  prop: 'minHeight',
  transform: sizingTransform
});
const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style({
  prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
module.exportDefault(sizing);