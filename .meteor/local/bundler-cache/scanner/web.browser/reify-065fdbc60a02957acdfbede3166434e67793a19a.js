let _extends;module.link("@babel/runtime/helpers/esm/extends",{default(v){_extends=v}},0);let _objectWithoutPropertiesLoose;module.link("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose",{default(v){_objectWithoutPropertiesLoose=v}},1);let useTabContext,getTabId,getPanelId;module.link('../TabsUnstyled',{useTabContext(v){useTabContext=v},getTabId(v){getTabId=v},getPanelId(v){getPanelId=v}},2);let useButton;module.link('../useButton',{default(v){useButton=v}},3);

const _excluded = ["getRootProps"];


/**
 *
 * Demos:
 *
 * - [Unstyled Tabs](https://mui.com/base/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTab API](https://mui.com/base/api/use-tab/)
 */
function useTab(parameters) {
  var _getPanelId, _getTabId;
  const {
    value: valueProp,
    onChange,
    onClick,
    onFocus
  } = parameters;
  const _useButton = useButton(parameters),
    {
      getRootProps: getRootPropsButton
    } = _useButton,
    otherButtonProps = _objectWithoutPropertiesLoose(_useButton, _excluded);
  const context = useTabContext();
  if (context === null) {
    throw new Error('No TabContext provided');
  }
  const value = valueProp != null ? valueProp : 0;
  const selected = context.value === value;
  const selectionFollowsFocus = context.selectionFollowsFocus;
  const a11yAttributes = {
    role: 'tab',
    'aria-controls': (_getPanelId = getPanelId(context, value)) != null ? _getPanelId : undefined,
    id: (_getTabId = getTabId(context, value)) != null ? _getTabId : undefined,
    'aria-selected': selected,
    disabled: otherButtonProps.disabled
  };
  const createHandleFocus = otherHandlers => event => {
    var _otherHandlers$onFocu;
    (_otherHandlers$onFocu = otherHandlers.onFocus) == null ? void 0 : _otherHandlers$onFocu.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (selectionFollowsFocus && !selected) {
      if (onChange) {
        onChange(event, value);
      }
      context.onSelected(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const createHandleClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null ? void 0 : _otherHandlers$onClic.call(otherHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (!selected) {
      if (onChange) {
        onChange(event, value);
      }
      context.onSelected(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const buttonResolvedProps = getRootPropsButton(_extends({}, otherHandlers, {
      onClick: createHandleClick(otherHandlers),
      onFocus: createHandleFocus(otherHandlers)
    }));
    return _extends({}, buttonResolvedProps, a11yAttributes);
  };
  return _extends({
    getRootProps
  }, otherButtonProps, {
    selected
  });
}
module.exportDefault(useTab);