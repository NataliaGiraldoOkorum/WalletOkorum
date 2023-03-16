module.export({styleFunctionMapping:()=>styleFunctionMapping,propToStyleFunction:()=>propToStyleFunction},true);let borders;module.link('./borders',{default(v){borders=v}},0);let display;module.link('./display',{default(v){display=v}},1);let flexbox;module.link('./flexbox',{default(v){flexbox=v}},2);let grid;module.link('./cssGrid',{default(v){grid=v}},3);let positions;module.link('./positions',{default(v){positions=v}},4);let palette;module.link('./palette',{default(v){palette=v}},5);let shadows;module.link('./shadows',{default(v){shadows=v}},6);let sizing;module.link('./sizing',{default(v){sizing=v}},7);let spacing;module.link('./spacing',{default(v){spacing=v}},8);let typography;module.link('./typography',{default(v){typography=v}},9);









const filterPropsMapping = {
  borders: borders.filterProps,
  display: display.filterProps,
  flexbox: flexbox.filterProps,
  grid: grid.filterProps,
  positions: positions.filterProps,
  palette: palette.filterProps,
  shadows: shadows.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  typography: typography.filterProps
};
const styleFunctionMapping = {
  borders,
  display,
  flexbox,
  grid,
  positions,
  palette,
  shadows,
  sizing,
  spacing,
  typography
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});
function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}
module.exportDefault(getThemeValue);