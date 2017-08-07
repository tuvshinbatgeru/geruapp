/**
 * # AppAuthToken.js
 *
 * A thin wrapper over the react-native-simple-store
 *
 * Singleton module see https://k94n.com/es6-modules-single-instance-pattern
 */
'use strict';
/**
 * ## Imports
 *
 * Redux  & the config file
 */Object.defineProperty(exports,"__esModule",{value:true});exports.appAuthToken=exports.AppAuthToken=undefined;
var _reactNativeSimpleStore=require("react-native-simple-store");var _reactNativeSimpleStore2=babelHelpers.interopRequireDefault(_reactNativeSimpleStore);
var _env=require("../env");var _env2=babelHelpers.interopRequireDefault(_env);var

AppAuthToken=exports.AppAuthToken=function(){
/**
   * ## AppAuthToken
   *
   * set the key from the config
   */
function AppAuthToken(){babelHelpers.classCallCheck(this,AppAuthToken);
this.SESSION_TOKEN_KEY=_env2.default.SESSION_TOKEN_KEY;
}

/**
   * ### storeSessionToken
   * Store the session key
   */babelHelpers.createClass(AppAuthToken,[{key:"storeSessionToken",value:function storeSessionToken(
sessionToken){
return _reactNativeSimpleStore2.default.save(this.SESSION_TOKEN_KEY,{
sessionToken:sessionToken});

}
/**
   * ### getSessionToken
   * @param {Object} sessionToken the currentUser object
   *
   * When Hot Loading, the sessionToken  will be passed in, and if so,
   * it needs to be stored on the device.  Remember, the store is a
   * promise so, have to be careful.
   */},{key:"getSessionToken",value:function getSessionToken(
sessionToken){var _this=this;
if(sessionToken){
return _reactNativeSimpleStore2.default.save(this.SESSION_TOKEN_KEY,{
sessionToken:sessionToken}).
then(function(){
return _reactNativeSimpleStore2.default.get(_this.SESSION_TOKEN_KEY);
});
}
return _reactNativeSimpleStore2.default.get(this.SESSION_TOKEN_KEY);
}
/**
   * ### deleteSessionToken
   * Deleted during log out
   */},{key:"deleteSessionToken",value:function deleteSessionToken()
{
return _reactNativeSimpleStore2.default.delete(this.SESSION_TOKEN_KEY);
}}]);return AppAuthToken;}();

// The singleton variable
var appAuthToken=exports.appAuthToken=new AppAuthToken();