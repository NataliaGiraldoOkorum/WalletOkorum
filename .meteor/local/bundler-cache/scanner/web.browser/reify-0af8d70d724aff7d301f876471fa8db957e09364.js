module.export({default:()=>useFormControl});let React;module.link('react',{"*"(v){React=v}},0);let FormControlContext;module.link('./FormControlContext',{default(v){FormControlContext=v}},1);

function useFormControl() {
  return React.useContext(FormControlContext);
}