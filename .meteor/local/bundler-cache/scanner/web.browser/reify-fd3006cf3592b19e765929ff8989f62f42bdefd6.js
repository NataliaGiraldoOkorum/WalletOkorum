let React;module.link('react',{"*"(v){React=v}},0);let useControlled,useId;module.link('@mui/utils',{unstable_useControlled(v){useControlled=v},unstable_useId(v){useId=v}},1);

/**
 *
 * Demos:
 *
 * - [Unstyled Tabs](https://mui.com/base/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabs API](https://mui.com/base/api/use-tabs/)
 */
function useTabs(parameters) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value'
  });
  const idPrefix = useId();
  const onSelected = React.useCallback((e, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(e, newValue);
    }
  }, [onChange, setValue]);
  const tabsContextValue = React.useMemo(() => {
    return {
      idPrefix,
      value,
      onSelected,
      orientation,
      direction,
      selectionFollowsFocus
    };
  }, [idPrefix, value, onSelected, orientation, direction, selectionFollowsFocus]);
  return {
    tabsContextValue
  };
}
module.exportDefault(useTabs);