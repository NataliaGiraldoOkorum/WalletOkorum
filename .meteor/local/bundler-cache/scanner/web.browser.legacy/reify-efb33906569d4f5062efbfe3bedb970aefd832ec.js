"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _useMenu.default;
  }
});
var _useMenu = _interopRequireDefault(require("./useMenu"));
var _useMenu2 = require("./useMenu.types");
Object.keys(_useMenu2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useMenu2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useMenu2[key];
    }
  });
});