/**
 * # Login.js
 *
 *  The container to display the Login form
 *
 */
'use strict';
/**
 * ## Imports
 *
 * Redux
 */Object.defineProperty(exports,"__esModule",{value:true});
var _redux=require("redux");
var _reactRedux=require("react-redux");




var _authActions=require("../authActions");var authActions=babelHelpers.interopRequireWildcard(_authActions);




var _LoginRender=require("../components/LoginRender");var _LoginRender2=babelHelpers.interopRequireDefault(_LoginRender);




var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);

var _authConstants=require("../authConstants");




/**
 * ## Redux boilerplate
 *//**
 * The necessary React components
 *//**
 * The actions we need
 */function mapStateToProps(state){return{auth:state.auth,
global:state.global};

}/**
 *   LoginRender
 */function mapDispatchToProps(dispatch){
return{
actions:(0,_redux.bindActionCreators)(authActions,dispatch)};

}

function buttonPressHandler(login,username,password){
login(username,password);
}

/**
 * ### Translations
 */
var LoginView=_react2.default.createClass({displayName:"LoginView",

render:function render(){
var loginButtonText='Нэвтрэх';
var onButtonPress=buttonPressHandler.bind(null,
this.props.actions.login,
this.props.auth.form.fields.username,
this.props.auth.form.fields.password);


return(
_react2.default.createElement(_LoginRender2.default,{
formType:_authConstants.LOGIN,
loginButtonText:loginButtonText,
onButtonPress:onButtonPress,
displayPasswordCheckbox:true,
leftMessageType:_authConstants.REGISTER,
rightMessageType:_authConstants.FORGOT_PASSWORD,
auth:this.props.auth,
global:this.props.global}));


}});exports.default=


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(LoginView);