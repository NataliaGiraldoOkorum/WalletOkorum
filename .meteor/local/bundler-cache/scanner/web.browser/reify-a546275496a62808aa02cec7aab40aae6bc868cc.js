module.export({rootShouldForwardProp:()=>rootShouldForwardProp,slotShouldForwardProp:()=>slotShouldForwardProp},true);let createStyled,shouldForwardProp;module.link('@mui/system',{createStyled(v){createStyled=v},shouldForwardProp(v){shouldForwardProp=v}},0);let defaultTheme;module.link('./defaultTheme',{default(v){defaultTheme=v}},1);

const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled({
  defaultTheme,
  rootShouldForwardProp
});
module.exportDefault(styled);