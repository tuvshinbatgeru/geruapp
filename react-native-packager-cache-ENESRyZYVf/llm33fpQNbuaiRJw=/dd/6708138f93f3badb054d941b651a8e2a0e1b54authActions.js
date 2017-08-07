
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutState = logoutState;
exports.registerState = registerState;
exports.loginState = loginState;
exports.forgotPasswordState = forgotPasswordState;
exports.logoutRequest = logoutRequest;
exports.logoutSuccess = logoutSuccess;
exports.logoutFailure = logoutFailure;
exports.logout = logout;
exports.onAuthFormFieldChange = onAuthFormFieldChange;
exports.signupRequest = signupRequest;
exports.signupSuccess = signupSuccess;
exports.signupFailure = signupFailure;
exports.sessionTokenRequest = sessionTokenRequest;
exports.sessionTokenRequestSuccess = sessionTokenRequestSuccess;
exports.sessionTokenRequestFailure = sessionTokenRequestFailure;
exports.deleteTokenRequest = deleteTokenRequest;
exports.deleteTokenRequestSuccess = deleteTokenRequestSuccess;
exports.deleteSessionToken = deleteSessionToken;
exports.getSessionToken = getSessionToken;
exports.saveSessionToken = saveSessionToken;
exports.signup = signup;
exports.loginRequest = loginRequest;
exports.loginSuccess = loginSuccess;
exports.loginFailure = loginFailure;
exports.login = login;
exports.resetPasswordRequest = resetPasswordRequest;
exports.resetPasswordSuccess = resetPasswordSuccess;
exports.resetPasswordFailure = resetPasswordFailure;
exports.resetPassword = resetPassword;

var _authConstants = require('./authConstants');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _AppAuthToken = require('./AppAuthToken');

var _ = require('underscore');

function logoutState() {
  return {
    type: _authConstants.LOGOUT
  };
}
function registerState() {
  return {
    type: _authConstants.REGISTER
  };
}

function loginState() {
  return {
    type: _authConstants.LOGIN
  };
}

function forgotPasswordState() {
  return {
    type: _authConstants.FORGOT_PASSWORD
  };
}

function logoutRequest() {
  return {
    type: _authConstants.LOGOUT_REQUEST
  };
}

function logoutSuccess() {
  return {
    type: _authConstants.LOGOUT_SUCCESS
  };
}
function logoutFailure(error) {
  return {
    type: _authConstants.LOGOUT_FAILURE,
    payload: error
  };
}
function logout() {
  return function (dispatch) {
    dispatch(logoutRequest());
    return _AppAuthToken.appAuthToken.getSessionToken().then(function (token) {
      return BackendFactory(token).logout();
    }).then(function () {
      dispatch(loginState());
      dispatch(logoutSuccess());
      dispatch(deleteSessionToken());
      _reactNativeRouterFlux.Actions.InitialLoginForm();
    }).catch(function (error) {
      dispatch(loginState());
      dispatch(logoutFailure(error));
    });
  };
}
function onAuthFormFieldChange(field, value) {
  return {
    type: _authConstants.ON_AUTH_FORM_FIELD_CHANGE,
    payload: { field: field, value: value }
  };
}
function signupRequest() {
  return {
    type: _authConstants.SIGNUP_REQUEST
  };
}
function signupSuccess(json) {
  return {
    type: _authConstants.SIGNUP_SUCCESS,
    payload: json
  };
}
function signupFailure(error) {
  return {
    type: _authConstants.SIGNUP_FAILURE,
    payload: error
  };
}
function sessionTokenRequest() {
  return {
    type: _authConstants.SESSION_TOKEN_REQUEST
  };
}
function sessionTokenRequestSuccess(token) {
  return {
    type: _authConstants.SESSION_TOKEN_SUCCESS,
    payload: token
  };
}
function sessionTokenRequestFailure(error) {
  return {
    type: _authConstants.SESSION_TOKEN_FAILURE,
    payload: _.isUndefined(error) ? null : error
  };
}

function deleteTokenRequest() {
  return {
    type: _authConstants.DELETE_TOKEN_REQUEST
  };
}
function deleteTokenRequestSuccess() {
  return {
    type: _authConstants.DELETE_TOKEN_SUCCESS
  };
}

function deleteSessionToken() {
  return function (dispatch) {
    dispatch(deleteTokenRequest());
    return _AppAuthToken.appAuthToken.deleteSessionToken().then(function () {
      dispatch(deleteTokenRequestSuccess());
    });
  };
}
function getSessionToken() {
  return function (dispatch) {
    dispatch(sessionTokenRequest());
    return _AppAuthToken.appAuthToken.getSessionToken().then(function (token) {
      if (token) {
        dispatch(sessionTokenRequestSuccess(token));
        dispatch(logoutState());
        _reactNativeRouterFlux.Actions.Tabbar();
      } else {
        console.log('InitialLoginForm sented');
        dispatch(sessionTokenRequestFailure());
        _reactNativeRouterFlux.Actions.InitialLoginForm();
      }
    }).catch(function (error) {
      dispatch(sessionTokenRequestFailure(error));
      dispatch(loginState());
      _reactNativeRouterFlux.Actions.InitialLoginForm();
    });
  };
}

function saveSessionToken(json) {
  return _AppAuthToken.appAuthToken.storeSessionToken(json);
}
function signup(username, email, password) {
  return function (dispatch) {
    dispatch(signupRequest());
    return BackendFactory().signup({
      username: username,
      email: email,
      password: password
    }).then(function (json) {
      return saveSessionToken(babelHelpers.extends({}, json, { username: username,
        email: email
      })).then(function () {
        dispatch(signupSuccess(babelHelpers.extends({}, json, { username: username,
          email: email
        })));
        dispatch(logoutState());

        _reactNativeRouterFlux.Actions.Tabbar();
      });
    }).catch(function (error) {
      dispatch(signupFailure(error));
    });
  };
}

function loginRequest() {
  return {
    type: _authConstants.LOGIN_REQUEST
  };
}

function loginSuccess(json) {
  return {
    type: _authConstants.LOGIN_SUCCESS,
    payload: json
  };
}

function loginFailure(error) {
  return {
    type: _authConstants.LOGIN_FAILURE,
    payload: error
  };
}
function login(username, password) {
  return function (dispatch) {
    dispatch(loginRequest());
    _reactNativeRouterFlux.Actions.Tabbar();
  };

  return function (dispatch) {
    dispatch(loginRequest());
    return BackendFactory().login({
      username: username,
      password: password
    }).then(function (json) {
      return saveSessionToken(json).then(function () {
        dispatch(loginSuccess(json));

        _reactNativeRouterFlux.Actions.Tabbar();
        dispatch(logoutState());
      });
    }).catch(function (error) {
      dispatch(loginFailure(error));
    });
  };
}

function resetPasswordRequest() {
  return {
    type: _authConstants.RESET_PASSWORD_REQUEST
  };
}

function resetPasswordSuccess() {
  return {
    type: _authConstants.RESET_PASSWORD_SUCCESS
  };
}

function resetPasswordFailure(error) {
  return {
    type: _authConstants.RESET_PASSWORD_FAILURE,
    payload: error
  };
}
function resetPassword(email) {
  return function (dispatch) {
    dispatch(resetPasswordRequest());
    return BackendFactory().resetPassword({
      email: email
    }).then(function () {
      dispatch(loginState());
      dispatch(resetPasswordSuccess());
      _reactNativeRouterFlux.Actions.Login();
    }).catch(function (error) {
      dispatch(resetPasswordFailure(error));
    });
  };
}