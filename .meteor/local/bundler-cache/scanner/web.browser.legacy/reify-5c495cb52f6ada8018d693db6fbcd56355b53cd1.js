module.export({default:function(){return useTheme}});var React;module.link('react',{default:function(v){React=v}},0);var ThemeContext;module.link('./ThemeContext',{default:function(v){ThemeContext=v}},1);

function useTheme() {
  var theme = React.useContext(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}