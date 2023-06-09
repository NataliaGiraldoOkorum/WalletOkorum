'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@mui/material/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _reactFormValidatorCore = require('react-form-validator-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

/* eslint-enable */


var TextValidator = function (_ValidatorComponent) {
    _inherits(TextValidator, _ValidatorComponent);

    function TextValidator() {
        _classCallCheck(this, TextValidator);

        return _possibleConstructorReturn(this, (TextValidator.__proto__ || Object.getPrototypeOf(TextValidator)).apply(this, arguments));
    }

    _createClass(TextValidator, [{
        key: 'renderValidatorComponent',
        value: function renderValidatorComponent() {
            /* eslint-disable no-unused-vars */
            var _props = this.props,
                error = _props.error,
                errorMessages = _props.errorMessages,
                validators = _props.validators,
                requiredError = _props.requiredError,
                helperText = _props.helperText,
                validatorListener = _props.validatorListener,
                withRequiredValidator = _props.withRequiredValidator,
                containerProps = _props.containerProps,
                rest = _objectWithoutProperties(_props, ['error', 'errorMessages', 'validators', 'requiredError', 'helperText', 'validatorListener', 'withRequiredValidator', 'containerProps']);

            var isValid = this.state.isValid;

            return _react2.default.createElement(_TextField2.default, _extends({}, rest, {
                error: !isValid || error,
                helperText: !isValid && this.getErrorMessage() || helperText
            }));
        }
    }]);

    return TextValidator;
}(_reactFormValidatorCore.ValidatorComponent);

exports.default = TextValidator;