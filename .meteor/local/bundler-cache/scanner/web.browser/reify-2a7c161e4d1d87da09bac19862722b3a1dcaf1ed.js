module.export({default:()=>useForcedRerendering});let React;module.link('react',{"*"(v){React=v}},0);
/**
 * @ignore - internal hook.
 */
function useForcedRerendering() {
  const [, setState] = React.useState({});
  return React.useCallback(() => {
    setState({});
  }, []);
}