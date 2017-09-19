
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var InitialState = (0, _immutable.Record)({
  currentUser: null,
  showState: false,
  currentState: null,
  store: null
});
exports.default = InitialState;