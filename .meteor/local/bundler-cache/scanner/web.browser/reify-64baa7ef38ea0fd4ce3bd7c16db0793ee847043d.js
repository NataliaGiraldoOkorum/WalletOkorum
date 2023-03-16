const hasSymbol = typeof Symbol === 'function' && Symbol.for;
module.exportDefault(hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');