/**
 * # authReducer.js
 *
 * The reducer for all the actions from the various log states
 */
'use strict';
/**
 * ## Imports
 * The InitialState for auth
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */Object.defineProperty(exports,"__esModule",{value:true});exports.default=














































authReducer;var _authInitialState=require("./authInitialState");var _authInitialState2=babelHelpers.interopRequireDefault(_authInitialState);var _fieldValidation=require("../components/fieldValidation");var _fieldValidation2=babelHelpers.interopRequireDefault(_fieldValidation);var _authFormValidation=require("./authFormValidation");var _authFormValidation2=babelHelpers.interopRequireDefault(_authFormValidation);var _authConstants=require("./authConstants");var initialState=new _authInitialState2.default();/**
 * ## authReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 *//**
 * ## Auth actions
 */function authReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];if(!(state instanceof _authInitialState2.default))return initialState.mergeDeep(state);switch(action.type){/**
     * ### Requests start
     * set the form to fetching and clear any errors
     */case _authConstants.SESSION_TOKEN_REQUEST:case _authConstants.SIGNUP_REQUEST:
case _authConstants.LOGOUT_REQUEST:
case _authConstants.LOGIN_REQUEST:
case _authConstants.RESET_PASSWORD_REQUEST:{
var nextState=state.
setIn(['form','isFetching'],true).
setIn(['form','error'],null);
return nextState;
}

/**
     * ### Logout state
     * The logged in user logs out
     * Clear the form's error and all the fields
     */
case _authConstants.LOGOUT:
return(0,_authFormValidation2.default)(
state.setIn(['form','state'],action.type).
setIn(['form','error'],null).
setIn(['form','fields','username'],'').
setIn(['form','fields','email'],'').
setIn(['form','fields','password'],'').
setIn(['form','fields','passwordAgain'],''));


/**
     * ### Loggin in state
     * The user isn't logged in, and needs to
     * login, register or reset password
     *
     * Set the form state and clear any errors
     */
case _authConstants.LOGIN:
case _authConstants.REGISTER:
case _authConstants.FORGOT_PASSWORD:
return(0,_authFormValidation2.default)(
state.setIn(['form','state'],action.type).
setIn(['form','error'],null));


/**
     * ### Auth form field change
     *
     * Set the form's field with the value
     * Clear the forms error
     * Pass the fieldValidation results to the
     * the formValidation
     */
case _authConstants.ON_AUTH_FORM_FIELD_CHANGE:{var _action$payload=
action.payload,field=_action$payload.field,value=_action$payload.value;
var _nextState=state.setIn(['form','fields',field],value).
setIn(['form','error'],null);

return(0,_authFormValidation2.default)(
(0,_fieldValidation2.default)(_nextState,action),
action);
}
/**
     * ### Requests end, good or bad
     * Set the fetching flag so the forms will be enabled
     */
case _authConstants.SESSION_TOKEN_SUCCESS:
case _authConstants.SESSION_TOKEN_FAILURE:
case _authConstants.SIGNUP_SUCCESS:
case _authConstants.LOGIN_SUCCESS:
case _authConstants.LOGOUT_SUCCESS:
case _authConstants.RESET_PASSWORD_SUCCESS:
return state.setIn(['form','isFetching'],false);

/**
     *
     * The fetching is done, but save the error
     * for display to the user
     */
case _authConstants.SIGNUP_FAILURE:
case _authConstants.LOGOUT_FAILURE:
case _authConstants.LOGIN_FAILURE:
case _authConstants.RESET_PASSWORD_FAILURE:
return state.setIn(['form','isFetching'],false).
setIn(['form','error'],action.payload);

/**
     * ### Hot Loading support
     *
     * Set all the field values from the payload
     */
case _authConstants.SET_STATE:
var form=JSON.parse(action.payload).auth.form;

var next=state.setIn(['form','state'],form.state).
setIn(['form','disabled'],form.disabled).
setIn(['form','error'],form.error).
setIn(['form','isValid'],form.isValid).
setIn(['form','isFetching'],form.isFetching).
setIn(['form','fields','username'],form.fields.username).
setIn(['form','fields','usernameHasError'],form.fields.usernameHasError).
setIn(['form','fields','email'],form.fields.email).
setIn(['form','fields','emailHasError'],form.fields.emailHasError).
setIn(['form','fields','password'],form.fields.password).
setIn(['form','fields','passwordHasError'],form.fields.passwordHasError).
setIn(['form','fields','passwordAgain'],form.fields.passwordAgain).
setIn(['form','fields','passwordAgainHasError'],form.fields.passwordAgainHasError);

return next;

case _authConstants.DELETE_TOKEN_REQUEST:
case _authConstants.DELETE_TOKEN_SUCCESS:
/**
         * no state change, just an ability to track action requests...
         */
return state;}


/**
   * ## Default
   */
return state;
}