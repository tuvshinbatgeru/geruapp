
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = globalReducer;

var _authConstants = require('../auth/authConstants');

var _globalInitialState = require('./globalInitialState');

var _globalInitialState2 = babelHelpers.interopRequireDefault(_globalInitialState);

var initialState = new _globalInitialState2.default();
function globalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (!(state instanceof _globalInitialState2.default)) return initialState.merge(state);

  switch (action.type) {
    case _authConstants.SET_SESSION_TOKEN:
      return state.set('sessionToken', action.payload);

    case _authConstants.SIGNUP_SUCCESS:
    case _authConstants.LOGIN_SUCCESS:
    case _authConstants.GET_PROFILE_SUCCESS:
      return state.set('currentUser', action.payload);

    case _authConstants.SESSION_TOKEN_SUCCESS:
      return state.set('currentUser', action.payload.sessionToken);

    case _authConstants.LOGOUT_SUCCESS:

      return state.set('currentUser', null);

    case _authConstants.SET_STORE:
      return state.set('store', action.payload);

    case _authConstants.GET_STATE:
      {
        var _state = state.store.getState();

        if (action.payload) {
          var newState = {};
          newState['auth'] = _state.auth.toJS();
          newState['device'] = _state.device.toJS();
          newState['profile'] = _state.profile.toJS();

          newState['global'] = _state.global.set('currentState', null).set('store', null).toJS();

          return state.set('showState', action.payload).set('currentState', newState);
        } else {
          return state.set('showState', action.payload);
        }
      }

    case _authConstants.SET_STATE:
      var global = JSON.parse(action.payload).global;
      var next = state.set('currentUser', global.currentUser).set('showState', false).set('currentState', null);
      return next;

  }

  return state;
}