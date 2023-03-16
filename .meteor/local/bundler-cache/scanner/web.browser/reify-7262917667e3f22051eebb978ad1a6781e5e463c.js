module.export({createMessageBus:()=>createMessageBus,default:()=>useMessageBus});let React;module.link('react',{"*"(v){React=v}},0);
function createMessageBus() {
  const listeners = new Map();
  function subscribe(topic, callback) {
    let topicListeners = listeners.get(topic);
    if (!topicListeners) {
      topicListeners = new Set([callback]);
      listeners.set(topic, topicListeners);
    } else {
      topicListeners.add(callback);
    }
    return () => {
      topicListeners.delete(callback);
      if (topicListeners.size === 0) {
        listeners.delete(topic);
      }
    };
  }
  function publish(topic, ...args) {
    const topicListeners = listeners.get(topic);
    if (topicListeners) {
      topicListeners.forEach(callback => callback(...args));
    }
  }
  return {
    subscribe,
    publish
  };
}

/**
 * @ignore - internal hook.
 */
function useMessageBus() {
  const bus = React.useRef();
  if (!bus.current) {
    bus.current = createMessageBus();
  }
  return bus.current;
}