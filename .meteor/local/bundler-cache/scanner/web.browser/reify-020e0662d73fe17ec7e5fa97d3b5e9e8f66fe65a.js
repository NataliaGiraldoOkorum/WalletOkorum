let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},0);let createGrid2;module.link('@mui/system/Unstable_Grid',{createGrid(v){createGrid2=v}},1);let styled,useThemeProps;module.link('../styles',{styled(v){styled=v},useThemeProps(v){useThemeProps=v}},2);


const Grid2 = createGrid2({
  createStyledComponent: styled('div', {
    name: 'MuiGrid2',
    overridesResolver: (props, styles) => styles.root
  }),
  componentName: 'MuiGrid2',
  useThemeProps: inProps => useThemeProps({
    props: inProps,
    name: 'MuiGrid2'
  })
});
process.env.NODE_ENV !== "production" ? Grid2.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(Grid2);