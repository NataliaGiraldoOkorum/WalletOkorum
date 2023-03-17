let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},2);let integerPropType;module.link('@mui/utils',{integerPropType(v){integerPropType=v}},3);let clsx;module.link('clsx',{default(v){clsx=v}},4);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},5);let React;module.link('react',{"*"(v){React=v}},6);let isFragment;module.link('react-is',{isFragment(v){isFragment=v}},7);let ImageListContext;module.link('../ImageList/ImageListContext',{default(v){ImageListContext=v}},8);let styled;module.link('../styles/styled',{default(v){styled=v}},9);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},10);let isMuiElement;module.link('../utils/isMuiElement',{default(v){isMuiElement=v}},11);let imageListItemClasses,getImageListItemUtilityClass;module.link('./imageListItemClasses',{default(v){imageListItemClasses=v},getImageListItemUtilityClass(v){getImageListItemUtilityClass=v}},12);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},13);

const _excluded = ["children", "className", "cols", "component", "rows", "style"];












const useUtilityClasses = ownerState => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant],
    img: ['img']
  };
  return composeClasses(slots, getImageListItemUtilityClass, classes);
};
const ImageListItemRoot = styled('li', {
  name: 'MuiImageListItem',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${imageListItemClasses.img}`]: styles.img
    }, styles.root, styles[ownerState.variant]];
  }
})(({
  ownerState
}) => _extends({
  display: 'block',
  position: 'relative'
}, ownerState.variant === 'standard' && {
  // For titlebar under list item
  display: 'flex',
  flexDirection: 'column'
}, ownerState.variant === 'woven' && {
  height: '100%',
  alignSelf: 'center',
  '&:nth-of-type(even)': {
    height: '70%'
  }
}, {
  [`& .${imageListItemClasses.img}`]: _extends({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    display: 'block'
  }, ownerState.variant === 'standard' && {
    height: 'auto',
    flexGrow: 1
  })
}));
const ImageListItem = /*#__PURE__*/React.forwardRef(function ImageListItem(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiImageListItem'
  });

  // TODO: - Use jsdoc @default?: "cols rows default values are for docs only"
  const {
      children,
      className,
      cols = 1,
      component = 'li',
      rows = 1,
      style
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    rowHeight = 'auto',
    gap,
    variant
  } = React.useContext(ImageListContext);
  let height = 'auto';
  if (variant === 'woven') {
    height = undefined;
  } else if (rowHeight !== 'auto') {
    height = rowHeight * rows + gap * (rows - 1);
  }
  const ownerState = _extends({}, props, {
    cols,
    component,
    gap,
    rowHeight,
    rows,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(ImageListItemRoot, _extends({
    as: component,
    className: clsx(classes.root, classes[variant], className),
    ref: ref,
    style: _extends({
      height,
      gridColumnEnd: variant !== 'masonry' ? `span ${cols}` : undefined,
      gridRowEnd: variant !== 'masonry' ? `span ${rows}` : undefined,
      marginBottom: variant === 'masonry' ? gap : undefined
    }, style),
    ownerState: ownerState
  }, other, {
    children: React.Children.map(children, child => {
      if (! /*#__PURE__*/React.isValidElement(child)) {
        return null;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (isFragment(child)) {
          console.error(["MUI: The ImageListItem component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
        }
      }
      if (child.type === 'img' || isMuiElement(child, ['Image'])) {
        return /*#__PURE__*/React.cloneElement(child, {
          className: clsx(classes.img, child.props.className)
        });
      }
      return child;
    })
  }));
});
process.env.NODE_ENV !== "production" ? ImageListItem.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `<img>`.
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
   * Width of the item in number of grid columns.
   * @default 1
   */
  cols: integerPropType,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Height of the item in number of grid rows.
   * @default 1
   */
  rows: integerPropType,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
module.exportDefault(ImageListItem);