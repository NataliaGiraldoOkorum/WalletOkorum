let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},0);
const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};
module.exportDefault(responsivePropType);