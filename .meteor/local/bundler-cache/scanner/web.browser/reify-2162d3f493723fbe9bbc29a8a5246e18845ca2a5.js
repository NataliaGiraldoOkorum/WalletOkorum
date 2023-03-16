module.export({default:()=>isMuiElement});let React;module.link('react',{"*"(v){React=v}},0);
function isMuiElement(element, muiNames) {
  return /*#__PURE__*/React.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}