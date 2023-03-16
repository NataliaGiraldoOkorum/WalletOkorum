let React;module.link('react',{"*"(v){React=v}},0);
const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
module.exportDefault(useEnhancedEffect);