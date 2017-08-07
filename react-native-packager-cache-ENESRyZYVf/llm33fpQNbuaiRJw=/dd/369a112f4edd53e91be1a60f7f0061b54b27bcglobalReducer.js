/**
 * # globalReducer.js
 *
 *
 */
'use strict';
/**
 * ## Imports
 * The InitialState for auth
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */Object.defineProperty(exports,"__esModule",{value:true});exports.default=
























globalReducer;var _authConstants=require("../auth/authConstants");var _globalInitialState=require("./globalInitialState");var _globalInitialState2=babelHelpers.interopRequireDefault(_globalInitialState);var initialState=new _globalInitialState2.default();/**
 * ## globalReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */function globalReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];if(!(state instanceof _globalInitialState2.default))return initialState.merge(state);switch(action.type){/**
     * ### Save the sessionToken
     */
case _authConstants.SET_SESSION_TOKEN:
return state.set('sessionToken',action.payload);

/**
     * ### Save the payload in the store
     *
     * This payload is the ```currentUser``` object returned by
     * the server.  It contains the ```sessionToken``` and the user's
     * ```objectId``` which will be needed for some calls to the server
     */
case _authConstants.SIGNUP_SUCCESS:
case _authConstants.LOGIN_SUCCESS:
case _authConstants.GET_PROFILE_SUCCESS:
return state.set('currentUser',action.payload);

case _authConstants.SESSION_TOKEN_SUCCESS:
return state.set('currentUser',action.payload.sessionToken);

/**
     * ### Clear currentUser
     *
     *
     *
     *
     */
case _authConstants.LOGOUT_SUCCESS:

return state.set('currentUser',null);

/**
     * ### sets the payload into the store
     *
     * *Note* this is for support of Hot Loading - the payload is the
     * ```store``` itself.
     *
     */
case _authConstants.SET_STORE:
return state.set('store',action.payload);

/**
     * ### Get the current state from the store
     *
     * The Redux ```store``` provides the state object.
     * We convert each key to JSON and set it in the state
     *
     * *Note*: the global state removes the ```store```, otherwise,
     * when trying to convert to JSON, it will be recursive and fail
     */
case _authConstants.GET_STATE:{
var _state=state.store.getState();

if(action.payload){
var newState={};
newState['auth']=_state.auth.toJS();
newState['device']=_state.device.toJS();
newState['profile']=_state.profile.toJS();

// Make sure global doesn't have the previous currentState
// let _noCurrentState =  _state.global.set('currentState',null);
// let _noStore = _noCurrentState.set('store',null);

newState['global']=_state.global.set('currentState',null).set('store',null).toJS();

return state.set('showState',action.payload).
set('currentState',newState);
}else{
return state.set('showState',action.payload);
}
}

/**
     * ### Set the state
     *
     * This is in support of Hot Loading
     *
     */
case _authConstants.SET_STATE:
var global=JSON.parse(action.payload).global;
var next=state.set('currentUser',global.currentUser).
set('showState',false).
set('currentState',null);
return next;}



return state;
}