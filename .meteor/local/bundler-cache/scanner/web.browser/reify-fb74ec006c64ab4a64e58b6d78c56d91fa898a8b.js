let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let React;module.link('react',{"*"(v){React=v}},2);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},5);let Tablelvl2Context;module.link('../Table/Tablelvl2Context',{default(v){Tablelvl2Context=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let styled;module.link('../styles/styled',{default(v){styled=v}},8);let getTableFooterUtilityClass;module.link('./tableFooterClasses',{getTableFooterUtilityClass(v){getTableFooterUtilityClass=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);

const _excluded = ["className", "component"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableFooterUtilityClass, classes);
};
const TableFooterRoot = styled('tfoot', {
  name: 'MuiTableFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'table-footer-group'
});
const tablelvl2 = {
  variant: 'footer'
};
const defaultComponent = 'tfoot';
const TableFooter = /*#__PURE__*/React.forwardRef(function TableFooter(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTableFooter'
  });
  const {
      className,
      component = defaultComponent
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /*#__PURE__*/_jsx(TableFooterRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      role: component === defaultComponent ? null : 'rowgroup',
      ownerState: ownerState
    }, other))
  });
});
process.env.NODE_ENV !== "production" ? TableFooter.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
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
module.exportDefault(TableFooter);