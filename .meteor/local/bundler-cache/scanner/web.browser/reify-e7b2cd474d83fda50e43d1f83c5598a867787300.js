module.export({default:()=>useEventCallback});let React;module.link('react',{"*"(v){React=v}},0);let useEnhancedEffect;module.link('./useEnhancedEffect',{default(v){useEnhancedEffect=v}},1);


/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
function useEventCallback(fn) {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) =>
  // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}