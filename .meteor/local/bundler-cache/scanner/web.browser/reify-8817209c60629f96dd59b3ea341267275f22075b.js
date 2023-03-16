module.export({default:()=>useTheme});let React;module.link('react',{"*"(v){React=v}},0);let ThemeContext;module.link('./ThemeContext',{default(v){ThemeContext=v}},1);

function useTheme() {
  const theme = React.useContext(ThemeContext);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }
  return theme;
}