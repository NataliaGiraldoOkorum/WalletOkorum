let capitalize;module.link('@mui/utils',{unstable_capitalize(v){capitalize=v}},0);let padding,margin;module.link('../spacing',{padding(v){padding=v},margin(v){margin=v}},1);let handleBreakpoints;module.link('../breakpoints',{handleBreakpoints(v){handleBreakpoints=v}},2);let borderRadius,borderTransform;module.link('../borders',{borderRadius(v){borderRadius=v},borderTransform(v){borderTransform=v}},3);let gap,rowGap,columnGap;module.link('../cssGrid',{gap(v){gap=v},rowGap(v){rowGap=v},columnGap(v){columnGap=v}},4);let paletteTransform;module.link('../palette',{paletteTransform(v){paletteTransform=v}},5);let maxWidth,sizingTransform;module.link('../sizing',{maxWidth(v){maxWidth=v},sizingTransform(v){sizingTransform=v}},6);






const createFontStyleFunction = prop => {
  return props => {
    if (props[prop] !== undefined && props[prop] !== null) {
      const styleFromPropValue = propValue => {
        var _props$theme$typograp, _props$prop;
        let value = (_props$theme$typograp = props.theme.typography) == null ? void 0 : _props$theme$typograp[`${prop}${props[prop] === 'default' || props[prop] === prop ? '' : capitalize((_props$prop = props[prop]) == null ? void 0 : _props$prop.toString())}`];
        if (!value) {
          var _props$theme$typograp2, _props$theme$typograp3;
          value = (_props$theme$typograp2 = props.theme.typography) == null ? void 0 : (_props$theme$typograp3 = _props$theme$typograp2[propValue]) == null ? void 0 : _props$theme$typograp3[prop];
        }
        if (!value) {
          value = propValue;
        }
        return {
          [prop]: value
        };
      };
      return handleBreakpoints(props, props[prop], styleFromPropValue);
    }
    return null;
  };
};
const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: 'typography',
    style: createFontStyleFunction('fontFamily')
  },
  fontSize: {
    themeKey: 'typography',
    style: createFontStyleFunction('fontSize')
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography',
    style: createFontStyleFunction('fontWeight')
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
module.exportDefault(defaultSxConfig);