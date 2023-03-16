let createBox;module.link('@mui/system',{createBox(v){createBox=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let ClassNameGenerator;module.link('../className',{unstable_ClassNameGenerator(v){ClassNameGenerator=v}},2);let createTheme;module.link('../styles',{createTheme(v){createTheme=v}},3);



const defaultTheme = createTheme();
const Box = createBox({
  defaultTheme,
  defaultClassName: 'MuiBox-root',
  generateClassName: ClassNameGenerator.generate
});
process.env.NODE_ENV !== "production" ? Box.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(Box);