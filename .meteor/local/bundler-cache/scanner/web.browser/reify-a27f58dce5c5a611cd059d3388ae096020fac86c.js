let React;module.link('react',{"*"(v){React=v}},0);
const usePreviousProps = value => {
  const ref = React.useRef({});
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
module.exportDefault(usePreviousProps);