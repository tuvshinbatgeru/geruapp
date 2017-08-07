/**
 * # authInitialState.js
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
var _authConstants=require("./authConstants");

/**
 * ## Form
 * This Record contains the state of the form and the
 * fields it contains.
 */
var Form=(0,_immutable.Record)({
state:_authConstants.REGISTER,
disabled:false,
error:null,
isValid:false,
isFetching:false,
fields:new((0,_immutable.Record)({
username:'',
usernameHasError:false,
usernameErrorMsg:'',
email:'',
emailHasError:false,
emailErrorMsg:'',
password:'',
passwordHasError:false,
passwordErrorMsg:'',
passwordAgain:'',
passwordAgainHasError:false,
passwordAgainErrorMsg:'',
showPassword:false}))()});



/**
 * ## InitialState
 * The form is set
 */
var InitialState=(0,_immutable.Record)({
form:new Form()});exports.default=


InitialState;