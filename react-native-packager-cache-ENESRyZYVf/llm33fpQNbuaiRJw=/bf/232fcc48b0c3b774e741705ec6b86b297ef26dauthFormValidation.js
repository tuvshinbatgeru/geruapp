
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formValidation;

var _authConstants = require('./authConstants');

function formValidation(state) {
  switch (state.form.state) {
    case _authConstants.LOGOUT:
      return state.setIn(['form', 'isValid'], true);

    case _authConstants.REGISTER:
      if (state.form.fields.username !== '' && state.form.fields.email !== '' && state.form.fields.password !== '' && state.form.fields.passwordAgain !== '' && !state.form.fields.usernameHasError && !state.form.fields.emailHasError && !state.form.fields.passwordHasError && !state.form.fields.passwordAgainHasError) {
        return state.setIn(['form', 'isValid'], true);
      } else {
        return state.setIn(['form', 'isValid'], false);
      }

    case _authConstants.LOGIN:
      if (state.form.fields.username !== '' && state.form.fields.password !== '' && !state.form.fields.usernameHasError && !state.form.fields.passwordHasError) {
        return state.setIn(['form', 'isValid'], true);
      } else {
        return state.setIn(['form', 'isValid'], false);
      }

    case _authConstants.FORGOT_PASSWORD:
      if (state.form.fields.email !== '' && !state.form.fields.emailHasError) {
        return state.setIn(['form', 'isValid'], true);
      } else {
        return state.setIn(['form', 'isValid'], false);
      }

  }

  return state;
}