let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},2);let integerPropType;module.link('@mui/utils',{integerPropType(v){integerPropType=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},5);let React;module.link('react',{"*"(v){React=v}},6);let styled;module.link('../styles/styled',{default(v){styled=v}},7);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},8);let getImageListUtilityClass;module.link('./imageListClasses',{getImageListUtilityClass(v){getImageListUtilityClass=v}},9);let ImageListContext;module.link('./ImageListContext',{default(v){ImageListContext=v}},10);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},11);

const _excluded = ["children", "className", "cols", "component", "rowHeight", "gap", "style", "variant"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant]
  };
  return composeClasses(slots, getImageListUtilityClass, classes);
};
const ImageListRoot = styled('ul', {
  name: 'MuiImageList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})(({
  ownerState
}) => {
  return _extends({
    display: 'grid',
    overflowY: 'auto',
    listStyle: 'none',
    padding: 0,
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch'
  }, ownerState.variant === 'masonry' && {
    display: 'block'
  });
});
const ImageList = /*#__PURE__*/React.forwardRef(function ImageList(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiImageList'
  });
  const {
      children,
      className,
      cols = 2,
      component = 'ul',
      rowHeight = 'auto',
      gap = 4,
      style: styleProp,
      variant = 'standard'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const contextValue = React.useMemo(() => ({
    rowHeight,
    gap,
    variant
  }), [rowHeight, gap, variant]);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // Detect Internet Explorer 8+
      if (document !== undefined && 'objectFit' in document.documentElement.style === false) {
        console.error(['MUI: ImageList v5+ no longer natively supports Internet Explorer.', 'Use v4 of this component instead, or polyfill CSS object-fit.'].join('\n'));
      }
    }
  }, []);
  const style = variant === 'masonry' ? _extends({
    columnCount: cols,
    columnGap: gap
  }, styleProp) : _extends({
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap
  }, styleProp);
  const ownerState = _extends({}, props, {
    component,
    gap,
    rowHeight,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(ImageListRoot, _extends({
    as: component,
    className: clsx(classes.root, classes[variant], className),
    ref: ref,
    style: style,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/_jsx(ImageListContext.Provider, {
      value: contextValue,
      children: children
    })
  }));
});
process.env.NODE_ENV !== "production" ? ImageList.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `ImageListItem`s.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Number of columns.
   * @default 2
   */
  cols: integerPropType,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The gap between items in px.
   * @default 4
   */
  gap: PropTypes.number,
  /**
   * The height of one row in px.
   * @default 'auto'
   */
  rowHeight: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['masonry', 'quilted', 'standard', 'woven']), PropTypes.string])
} : void 0;
module.exportDefault(ImageList);