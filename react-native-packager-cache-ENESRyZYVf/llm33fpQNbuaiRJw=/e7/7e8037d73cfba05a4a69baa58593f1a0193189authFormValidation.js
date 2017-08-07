/**
 * # authFormValidation.js
 *
 * This class determines only if the form is valid
 * so that the form button can be enabled.
 * if all the fields on the form are without error,
 * the form is considered valid
 */
'use strict';

/**
 * ## Imports
 * the actions being addressed
 */Object.defineProperty(exports,"__esModule",{value:true});exports.default=











formValidation;var _authConstants=require("./authConstants");/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */function formValidation(state){switch(state.form.state){/**
     * ### Logout has no fields, so always valid
     */case _authConstants.LOGOUT:
return state.setIn(['form','isValid'],true);
/**
     * ### Registration has 4 fields
     */
case _authConstants.REGISTER:
if(state.form.fields.username!==''&&
state.form.fields.email!==''&&
state.form.fields.password!==''&&
state.form.fields.passwordAgain!==''&&
!state.form.fields.usernameHasError&&
!state.form.fields.emailHasError&&
!state.form.fields.passwordHasError&&
!state.form.fields.passwordAgainHasError){
return state.setIn(['form','isValid'],true);
}else{
return state.setIn(['form','isValid'],false);
}
/**
     * ### Login has 2 fields
     */
case _authConstants.LOGIN:
if(state.form.fields.username!==''&&
state.form.fields.password!==''&&
!state.form.fields.usernameHasError&&
!state.form.fields.passwordHasError){
return state.setIn(['form','isValid'],true);
}else{
return state.setIn(['form','isValid'],false);
}
/**
     * ### Reset password has 1 field
     */
case _authConstants.FORGOT_PASSWORD:
if(state.form.fields.email!==''&&
!state.form.fields.emailHasError){
return state.setIn(['form','isValid'],true);
}else{
return state.setIn(['form','isValid'],false);
}}


/**
   * Default, return the state
   */
return state;
}