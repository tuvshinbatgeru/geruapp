/**
 * # globalActions.js
 *
 * Actions that are global in nature
 */
'use strict';

/**
 * ## Imports
 *
 * The actions supported
 */Object.defineProperty(exports,"__esModule",{value:true});exports.











setSessionToken=setSessionToken;exports.













setStore=setStore;exports.









setState=setState;exports.









getState=getState;var _authConstants=require("../auth/authConstants");/**
 * ## set the sessionToken
 *
 */function setSessionToken(sessionToken){return{type:_authConstants.SET_SESSION_TOKEN,payload:sessionToken};}/**
 * ## set the store
 *
 * this is the Redux store
 *
 * this is here to support Hot Loading
 *
 */function setStore(store){return{type:_authConstants.SET_STORE,payload:store};}/**
 * ## set state
 *
 */function setState(newState){return{type:_authConstants.SET_STATE,payload:newState};}/**
 * ## getState
 *
 */function getState(toggle){return{type:_authConstants.GET_STATE,payload:toggle};}