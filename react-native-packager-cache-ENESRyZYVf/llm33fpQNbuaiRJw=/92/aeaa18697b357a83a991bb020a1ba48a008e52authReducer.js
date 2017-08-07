
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authReducer;

var _authInitialState = require('./authInitialState');

var _authInitialState2 = babelHelpers.interopRequireDefault(_authInitialState);

var _fieldValidation = require('../components/fieldValidation');

var _fieldValidation2 = babelHelpers.interopRequireDefault(_fieldValidation);

var _authFormValidation = require('./authFormValidation');

var _authFormValidation2 = babelHelpers.interopRequireDefault(_authFormValidation);

var _authConstants = require('./authConstants');

var initialState = new _authInitialState2.default();
function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (!(state instanceof _authInitialState2.default)) return initialState.mergeDeep(state);

  switch (action.type) {
    case _authConstants.SESSION_TOKEN_REQUEST:
    case _authConstants.SIGNUP_REQUEST:
    case _authConstants.LOGOUT_REQUEST:
    case _authConstants.LOGIN_REQUEST:
    case _authConstants.RESET_PASSWORD_REQUEST:
      {
        var nextState = state.setIn(['form', 'isFetching'], true).setIn(['form', 'error'], null);
        return nextState;
      }

    case _authConstants.LOGOUT:
      return (0, _authFormValidation2.default)(state.setIn(['form', 'state'], action.type).setIn(['form', 'error'], null).setIn(['form', 'fields', 'username'], '').setIn(['form', 'fields', 'email'], '').setIn(['form', 'fields', 'password'], '').setIn(['form', 'fields', 'passwordAgain'], ''));

    case _authConstants.LOGIN:
    case _authConstants.REGISTER:
    case _authConstants.FORGOT_PASSWORD:
      return (0, _authFormValidation2.default)(state.setIn(['form', 'state'], action.type).setIn(['form', 'error'], null));

    case _authConstants.ON_AUTH_FORM_FIELD_CHANGE:
      {
        var _action$payload = action.payload,
            field = _action$payload.field,
            value = _action$payload.value;

        var _nextState = state.setIn(['form', 'fields', field], value).setIn(['form', 'error'], null);

        return (0, _authFormValidation2.default)((0, _fieldValidation2.default)(_nextState, action), action);
      }

    case _authConstants.SESSION_TOKEN_SUCCESS:
    case _authConstants.SESSION_TOKEN_FAILURE:
    case _authConstants.SIGNUP_SUCCESS:
    case _authConstants.LOGIN_SUCCESS:
    case _authConstants.LOGOUT_SUCCESS:
    case _authConstants.RESET_PASSWORD_SUCCESS:
      return state.setIn(['form', 'isFetching'], false);

    case _authConstants.SIGNUP_FAILURE:
    case _authConstants.LOGOUT_FAILURE:
    case _authConstants.LOGIN_FAILURE:
    case _authConstants.RESET_PASSWORD_FAILURE:
      return state.setIn(['form', 'isFetching'], false).setIn(['form', 'error'], action.payload);

    case _authConstants.SET_STATE:
      var form = JSON.parse(action.payload).auth.form;

      var next = state.setIn(['form', 'state'], form.state).setIn(['form', 'disabled'], form.disabled).setIn(['form', 'error'], form.error).setIn(['form', 'isValid'], form.isValid).setIn(['form', 'isFetching'], form.isFetching).setIn(['form', 'fields', 'username'], form.fields.username).setIn(['form', 'fields', 'usernameHasError'], form.fields.usernameHasError).setIn(['form', 'fields', 'email'], form.fields.email).setIn(['form', 'fields', 'emailHasError'], form.fields.emailHasError).setIn(['form', 'fields', 'password'], form.fields.password).setIn(['form', 'fields', 'passwordHasError'], form.fields.passwordHasError).setIn(['form', 'fields', 'passwordAgain'], form.fields.passwordAgain).setIn(['form', 'fields', 'passwordAgainHasError'], form.fields.passwordAgainHasError);

      return next;

    case _authConstants.DELETE_TOKEN_REQUEST:
    case _authConstants.DELETE_TOKEN_SUCCESS:
      return state;

  }

  return state;
}