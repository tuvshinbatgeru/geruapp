
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _authConstants = require('./authConstants');

var Form = (0, _immutable.Record)({
  state: _authConstants.REGISTER,
  disabled: false,
  error: null,
  isValid: false,
  isFetching: false,
  fields: new ((0, _immutable.Record)({
    username: '',
    usernameHasError: false,
    usernameErrorMsg: '',
    email: '',
    emailHasError: false,
    emailErrorMsg: '',
    password: '',
    passwordHasError: false,
    passwordErrorMsg: '',
    passwordAgain: '',
    passwordAgainHasError: false,
    passwordAgainErrorMsg: '',
    showPassword: false
  }))()
});

var InitialState = (0, _immutable.Record)({
  form: new Form()
});

exports.default = InitialState;