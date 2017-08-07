
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSessionToken = setSessionToken;
exports.setStore = setStore;
exports.setState = setState;
exports.getState = getState;

var _authConstants = require('../auth/authConstants');

function setSessionToken(sessionToken) {
  return {
    type: _authConstants.SET_SESSION_TOKEN,
    payload: sessionToken
  };
}
function setStore(store) {
  return {
    type: _authConstants.SET_STORE,
    payload: store
  };
}
function setState(newState) {
  return {
    type: _authConstants.SET_STATE,
    payload: newState
  };
}
function getState(toggle) {
  return {
    type: _authConstants.GET_STATE,
    payload: toggle
  };
}