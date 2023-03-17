let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},0);let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},1);let composeClasses;module.link('@mui/base',{unstable_composeClasses(v){composeClasses=v}},2);let clsx;module.link('clsx',{default(v){clsx=v}},3);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},4);let React;module.link('react',{"*"(v){React=v}},5);let styled;module.link('../styles/styled',{default(v){styled=v}},6);let useThemeProps;module.link('../styles/useThemeProps',{default(v){useThemeProps=v}},7);let capitalize;module.link('../utils/capitalize',{default(v){capitalize=v}},8);let getImageListItemBarUtilityClass;module.link('./imageListItemBarClasses',{getImageListItemBarUtilityClass(v){getImageListItemBarUtilityClass=v}},9);let _jsx;module.link("react/jsx-runtime",{jsx(v){_jsx=v}},10);let _jsxs;module.link("react/jsx-runtime",{jsxs(v){_jsxs=v}},11);

const _excluded = ["actionIcon", "actionPosition", "className", "subtitle", "title", "position"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    position,
    actionIcon,
    actionPosition
  } = ownerState;
  const slots = {
    root: ['root', `position${capitalize(position)}`],
    titleWrap: ['titleWrap', `titleWrap${capitalize(position)}`, actionIcon && `titleWrapActionPos${capitalize(actionPosition)}`],
    title: ['title'],
    subtitle: ['subtitle'],
    actionIcon: ['actionIcon', `actionIconActionPos${capitalize(actionPosition)}`]
  };
  return composeClasses(slots, getImageListItemBarUtilityClass, classes);
};
const ImageListItemBarRoot = styled('div', {
  name: 'MuiImageListItemBar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${capitalize(ownerState.position)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  return _extends({
    position: 'absolute',
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily
  }, ownerState.position === 'bottom' && {
    bottom: 0
  }, ownerState.position === 'top' && {
    top: 0
  }, ownerState.position === 'below' && {
    position: 'relative',
    background: 'transparent',
    alignItems: 'normal'
  });
});
const ImageListItemBarTitleWrap = styled('div', {
  name: 'MuiImageListItemBar',
  slot: 'TitleWrap',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.titleWrap, styles[`titleWrap${capitalize(ownerState.position)}`], ownerState.actionIcon && styles[`titleWrapActionPos${capitalize(ownerState.actionPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  return _extends({
    flexGrow: 1,
    padding: '12px 16px',
    color: (theme.vars || theme).palette.common.white,
    overflow: 'hidden'
  }, ownerState.position === 'below' && {
    padding: '6px 0 12px',
    color: 'inherit'
  }, ownerState.actionIcon && ownerState.actionPosition === 'left' && {
    paddingLeft: 0
  }, ownerState.actionIcon && ownerState.actionPosition === 'right' && {
    paddingRight: 0
  });
});
const ImageListItemBarTitle = styled('div', {
  name: 'MuiImageListItemBar',
  slot: 'Title',
  overridesResolver: (props, styles) => styles.title
})(({
  theme
}) => {
  return {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: '24px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
});
const ImageListItemBarSubtitle = styled('div', {
  name: 'MuiImageListItemBar',
  slot: 'Subtitle',
  overridesResolver: (props, styles) => styles.subtitle
})(({
  theme
}) => {
  return {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
});
const ImageListItemBarActionIcon = styled('div', {
  name: 'MuiImageListItemBar',
  slot: 'ActionIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.actionIcon, styles[`actionIconActionPos${capitalize(ownerState.actionPosition)}`]];
  }
})(({
  ownerState
}) => {
  return _extends({}, ownerState.actionPosition === 'left' && {
    order: -1
  });
});
const ImageListItemBar = /*#__PURE__*/React.forwardRef(function ImageListItemBar(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiImageListItemBar'
  });
  const {
      actionIcon,
      actionPosition = 'right',
      className,
      subtitle,
      title,
      position = 'bottom'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    position,
    actionPosition
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsxs(ImageListItemBarRoot, _extends({
    ownerState: ownerState,
    className: clsx(classes.root, className),
    ref: ref
  }, other, {
    children: [/*#__PURE__*/_jsxs(ImageListItemBarTitleWrap, {
      ownerState: ownerState,
      className: classes.titleWrap,
      children: [/*#__PURE__*/_jsx(ImageListItemBarTitle, {
        className: classes.title,
        children: title
      }), subtitle ? /*#__PURE__*/_jsx(ImageListItemBarSubtitle, {
        className: classes.subtitle,
        children: subtitle
      }) : null]
    }), actionIcon ? /*#__PURE__*/_jsx(ImageListItemBarActionIcon, {
      ownerState: ownerState,
      className: classes.actionIcon,
      children: actionIcon
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" ? ImageListItemBar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the item itself).
   */
  actionIcon: PropTypes.node,
  /**
   * Position of secondary action IconButton.
   * @default 'right'
   */
  actionPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * @ignore
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
   * Position of the title bar.
   * @default 'bottom'
   */
  position: PropTypes.oneOf(['below', 'bottom', 'top']),
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Title to be displayed.
   */
  title: PropTypes.node
} : void 0;
module.exportDefault(ImageListItemBar);