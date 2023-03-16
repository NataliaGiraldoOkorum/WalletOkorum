module.export({useInsertionEffectAlwaysWithSyncFallback:()=>useInsertionEffectAlwaysWithSyncFallback,useInsertionEffectWithLayoutFallback:()=>useInsertionEffectWithLayoutFallback});let React;module.link('react',{"*"(v){React=v}},0);let useLayoutEffect;module.link('react',{useLayoutEffect(v){useLayoutEffect=v}},1);


var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React['useInsertion' + 'Effect'] ? React['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || useLayoutEffect;


