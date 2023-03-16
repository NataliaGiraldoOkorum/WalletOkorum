module.export({default:()=>useMenuChangeNotifiers});let React;module.link('react',{"*"(v){React=v}},0);let useMessageBus;module.link('../utils/useMessageBus',{default(v){useMessageBus=v}},1);

const HIGHLIGHT_CHANGE_TOPIC = 'menu:change-highlight';
/**
 * @ignore - internal hook.
 *
 * This hook is used to notify any interested components about changes in the Menu's selection and highlight.
 */
function useMenuChangeNotifiers() {
  const messageBus = useMessageBus();
  const notifyHighlightChanged = React.useCallback(newValue => {
    messageBus.publish(HIGHLIGHT_CHANGE_TOPIC, newValue);
  }, [messageBus]);
  const registerHighlightChangeHandler = React.useCallback(handler => {
    return messageBus.subscribe(HIGHLIGHT_CHANGE_TOPIC, handler);
  }, [messageBus]);
  return {
    notifyHighlightChanged,
    registerHighlightChangeHandler
  };
}