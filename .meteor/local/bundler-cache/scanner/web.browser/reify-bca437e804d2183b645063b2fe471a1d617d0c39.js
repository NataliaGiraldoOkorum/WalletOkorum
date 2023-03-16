let useTabContext,getPanelId,getTabId;module.link('../TabsUnstyled',{useTabContext(v){useTabContext=v},getPanelId(v){getPanelId=v},getTabId(v){getTabId=v}},0);
/**
 *
 * Demos:
 *
 * - [Unstyled Tabs](https://mui.com/base/react-tabs/#hooks)
 *
 * API:
 *
 * - [useTabPanel API](https://mui.com/base/api/use-tab-panel/)
 */
function useTabPanel(parameters) {
  const {
    value
  } = parameters;
  const context = useTabContext();
  if (context === null) {
    throw new Error('No TabContext provided');
  }
  const hidden = value !== context.value;
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);
  const getRootProps = () => {
    return {
      'aria-labelledby': tabId != null ? tabId : undefined,
      hidden,
      id: id != null ? id : undefined
    };
  };
  return {
    hidden,
    getRootProps
  };
}
module.exportDefault(useTabPanel);