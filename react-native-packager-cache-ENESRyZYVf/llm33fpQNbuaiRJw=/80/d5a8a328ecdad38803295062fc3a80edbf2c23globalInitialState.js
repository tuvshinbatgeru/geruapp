/**
 * # globalInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict';
/**
 * ## Import
 */Object.defineProperty(exports,"__esModule",{value:true});
var _immutable=require("immutable");
/**
 * ## InitialState
 *
 * * currentUser - object returned from server when validated
 * * showState - toggle for Header to display state
 * * currentState - object in Json format of the entire state
 * * store - the Redux store which is an object w/ 4 initial states
 *   * device
 *   * auth
 *   * global
 *   * profile
 *
 */
var InitialState=(0,_immutable.Record)({
currentUser:null,
showState:false,
currentState:null,
store:null});exports.default=

InitialState;