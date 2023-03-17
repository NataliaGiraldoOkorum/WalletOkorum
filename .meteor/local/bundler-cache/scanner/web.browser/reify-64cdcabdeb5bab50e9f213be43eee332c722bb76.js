let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let React;module.link('react',{"*"(v){React=v}},1);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},2);let emphasize;module.link('@mui/system',{emphasize(v){emphasize=v}},3);let styled;module.link('../styles/styled',{default(v){styled=v}},4);let MoreHorizIcon;module.link('../internal/svg-icons/MoreHoriz',{default(v){MoreHorizIcon=v}},5);let ButtonBase;module.link('../ButtonBase',{default(v){ButtonBase=v}},6);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},7);







const BreadcrumbCollapsedButton = styled(ButtonBase)(({
  theme
}) => _extends({
  display: 'flex',
  marginLeft: `calc(${theme.spacing(1)} * 0.5)`,
  marginRight: `calc(${theme.spacing(1)} * 0.5)`
}, theme.palette.mode === 'light' ? {
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.grey[700]
} : {
  backgroundColor: theme.palette.grey[700],
  color: theme.palette.grey[100]
}, {
  borderRadius: 2,
  '&:hover, &:focus': _extends({}, theme.palette.mode === 'light' ? {
    backgroundColor: theme.palette.grey[200]
  } : {
    backgroundColor: theme.palette.grey[600]
  }),
  '&:active': _extends({
    boxShadow: theme.shadows[0]
  }, theme.palette.mode === 'light' ? {
    backgroundColor: emphasize(theme.palette.grey[200], 0.12)
  } : {
    backgroundColor: emphasize(theme.palette.grey[600], 0.12)
  })
}));
const BreadcrumbCollapsedIcon = styled(MoreHorizIcon)({
  width: 24,
  height: 16
});

/**
 * @ignore - internal component.
 */
function BreadcrumbCollapsed(props) {
  const ownerState = props;
  return /*#__PURE__*/_jsx("li", {
    children: /*#__PURE__*/_jsx(BreadcrumbCollapsedButton, _extends({
      focusRipple: true
    }, props, {
      ownerState: ownerState,
      children: /*#__PURE__*/_jsx(BreadcrumbCollapsedIcon, {
        ownerState: ownerState
      })
    }))
  });
}
process.env.NODE_ENV !== "production" ? BreadcrumbCollapsed.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
} : void 0;
module.exportDefault(BreadcrumbCollapsed);