module.export({gridGap:()=>gridGap,gridColumnGap:()=>gridColumnGap,gridRowGap:()=>gridRowGap,gridColumn:()=>gridColumn,gridRow:()=>gridRow,gridAutoFlow:()=>gridAutoFlow,gridAutoColumns:()=>gridAutoColumns,gridAutoRows:()=>gridAutoRows,gridTemplateColumns:()=>gridTemplateColumns,gridTemplateRows:()=>gridTemplateRows,gridTemplateAreas:()=>gridTemplateAreas,gridArea:()=>gridArea});let style;module.link('./style',{default(v){style=v}},0);let compose;module.link('./compose',{default(v){compose=v}},1);

var gridGap = style({
  prop: 'gridGap'
});
var gridColumnGap = style({
  prop: 'gridColumnGap'
});
var gridRowGap = style({
  prop: 'gridRowGap'
});
var gridColumn = style({
  prop: 'gridColumn'
});
var gridRow = style({
  prop: 'gridRow'
});
var gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
var gridArea = style({
  prop: 'gridArea'
});
var grid = compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
module.exportDefault(grid);