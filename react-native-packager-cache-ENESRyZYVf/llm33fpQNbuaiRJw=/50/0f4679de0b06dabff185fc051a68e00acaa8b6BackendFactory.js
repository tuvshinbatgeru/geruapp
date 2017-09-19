
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BackendFactory;

var _env = require('./env');

var _env2 = babelHelpers.interopRequireDefault(_env);

var _Laravel = require('./Laravel');

var _Node = require('./Node');

function BackendFactory() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


  if (_env2.default.backend.nodeRemote || _env2.default.backend.nodeLocal) {
    _Node.node.initialize(token);
    return _Node.node;
  }
}