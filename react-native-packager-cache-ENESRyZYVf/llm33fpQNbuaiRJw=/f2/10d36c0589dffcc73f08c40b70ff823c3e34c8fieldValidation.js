/**
 * # fieldValidation.js
 *
 * Define the validation rules for various fields such as email, username,
 * and passwords.  If the rules are not passed, the appropriate
 * message is displayed to the user
 *
 */
'use strict';

/**
 * ## Imports
 *
 * validate and underscore
 *
 */Object.defineProperty(exports,"__esModule",{value:true});exports.default=










































































fieldValidation;var _validate=require("validate.js");var _validate2=babelHelpers.interopRequireDefault(_validate);var _underscore=require("underscore");var _underscore2=babelHelpers.interopRequireDefault(_underscore);/**
 * ### Translations
 *//**
 * ## Email validation setup
 * Used for validation of emails
 */var emailConstraints={from:{email:true}/**
* ## username validation rule
* read the message.. ;)
*/};var usernamePattern=/^[a-zA-Z0-9]{6,12}$/;var usernameConstraints={username:{format:{pattern:usernamePattern,flags:'i'}}};var titlePattern=/^.{6,30}$/;var titleConstraints={title:{format:{pattern:titlePattern,flags:'i'}}};var descriptionPattern=/^.{10,300}$/;var descriptionConstraints={description:{format:{pattern:descriptionPattern,flags:'i'}}/**
* ## password validation rule
* read the message... ;)
*/};var passwordPattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;var passwordConstraints={password:{format:{pattern:passwordPattern,flags:'i'}}};var passwordAgainConstraints={confirmPassword:{equality:'password'}/**
 * ## Field Validation
 * @param {Object} state Redux state
 * @param {Object} action type & payload
 */};function fieldValidation(state,action){var _action$payload=action.payload,field=_action$payload.field,value=_action$payload.value;switch(field){/**
     * ### username validation
     * set the form field error
     */case'title':{var validTitle=_underscore2.default.isUndefined((0,_validate2.default)({title:value},titleConstraints));if(validTitle){return state.setIn(['form','fields','titleHasError'],false).setIn(['form','fields','titleErrorMsg'],'');}else{return state.setIn(['form','fields','titleHasError'],true).setIn(['form','fields','titleErrorMsg'],'Гарчиг нь 6-30 тэмдэгтийн урттай байна.');}
}

case'description':{
var validDesc=_underscore2.default.isUndefined((0,_validate2.default)({description:value},descriptionConstraints));

if(validDesc){
return state.setIn(['form','fields','descriptionHasError'],
false).
setIn(['form','fields','descriptionErrorMsg'],'');
}else{
return state.setIn(['form','fields','descriptionHasError'],true).
setIn(['form','fields','descriptionErrorMsg'],'Тайлбар нь 10-300 тэмдэгтийн урттай байна.');
}
}

case'username':{
var validUsername=_underscore2.default.isUndefined((0,_validate2.default)({username:value},
usernameConstraints));
if(validUsername){
return state.setIn(['form','fields','usernameHasError'],
false).
setIn(['form','fields','usernameErrorMsg'],'');
}else{
return state.setIn(['form','fields','usernameHasError'],true).
setIn(['form','fields','usernameErrorMsg'],'6-12 in length with letters or numbers');
}
}

/**
     * ### email validation
     * set the form field error
     */
case'email':{
var validEmail=_underscore2.default.isUndefined((0,_validate2.default)({from:value},
emailConstraints));
if(validEmail){
return state.setIn(['form','fields','emailHasError'],false);
}else{
return state.setIn(['form','fields','emailHasError'],true).
setIn(['form','fields','emailErrorMsg'],
'not valid email');
}
}

/**
     * ### password validation
     * set the form field error
     */
case'password':{
var validPassword=_underscore2.default.isUndefined((0,_validate2.default)({password:value},
passwordConstraints));
if(validPassword){
return state.setIn(['form','fields','passwordHasError'],
false).
setIn(['form','fields','passwordErrorMsg'],
'');
}else{
return state.setIn(['form','fields','passwordHasError'],true).
setIn(['form','fields','passwordErrorMsg'],
'Not valid passpord');
}
}

/**
     * ### passwordAgain validation
     * set the form field error
     */
case'passwordAgain':
var validPasswordAgain=
_underscore2.default.isUndefined((0,_validate2.default)({password:state.form.fields.password,
confirmPassword:value},passwordAgainConstraints));
if(validPasswordAgain){
return state.setIn(['form','fields','passwordAgainHasError'],
false).
setIn(['form','fields','passwordAgainErrorMsg'],'');
}else{
return state.setIn(['form','fields','passwordAgainHasError'],
true).
setIn(['form','fields','passwordAgainErrorMsg'],
'dahial buruu pass');
}

/**
     * ### showPassword
     * toggle the display of the password
     */
case'showPassword':
return state.setIn(['form','fields',
'showPassword'],value);}


return state;
}