module.export({default:()=>useRadioGroup});let React;module.link('react',{"*"(v){React=v}},0);let RadioGroupContext;module.link('./RadioGroupContext',{default(v){RadioGroupContext=v}},1);

function useRadioGroup() {
  return React.useContext(RadioGroupContext);
}