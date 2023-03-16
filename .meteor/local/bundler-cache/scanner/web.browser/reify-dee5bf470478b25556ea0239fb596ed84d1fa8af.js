module.export({useTabContext:()=>useTabContext,getPanelId:()=>getPanelId,getTabId:()=>getTabId});let React;module.link('react',{"*"(v){React=v}},0);
/**
 * @ignore - internal component.
 */
const Context = /*#__PURE__*/React.createContext(null);
if (process.env.NODE_ENV !== 'production') {
  Context.displayName = 'TabsContext';
}

/**
 * @returns {unknown}
 */
function useTabContext() {
  return React.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}
module.exportDefault(Context);