module.export({default:()=>useLatest});let React;module.link('react',{"*"(v){React=v}},0);

/**
 * @ignore - internal hook.
 *
 * Initializes a ref with the given value and updates it when the value changes.
 *
 * @param value Value to store in the ref
 * @param deps An optional array of dependencies to watch for changes. If not provided, the ref will be updated each time the `value` changes.
 * @returns A React.RefObject containing the latest value
 *
 * API:
 *
 * - [useLatest API](https://mui.com/base/api/use-latest/)
 */
function useLatest(value, deps) {
  const ref = React.useRef(value);
  React.useEffect(() => {
    ref.current = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps != null ? deps : [value]);
  return ref;
}