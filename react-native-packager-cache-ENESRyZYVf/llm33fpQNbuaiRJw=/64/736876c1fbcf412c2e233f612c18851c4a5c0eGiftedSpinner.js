'use strict';

var React=require('react');var _require=






require('react-native'),View=_require.View,ActivityIndicatorIOS=_require.ActivityIndicatorIOS,ProgressBarAndroid=_require.ProgressBarAndroid,Platform=_require.Platform;

var GiftedSpinner=React.createClass({displayName:"GiftedSpinner",

_getSpinner:function _getSpinner(){
{
return(
React.createElement(ProgressBarAndroid,babelHelpers.extends({
style:{
height:20},

styleAttr:"Inverse"},
this.props)));


}








},

render:function render(){
return(
React.createElement(View,null,
this._getSpinner()));


}});




module.exports=GiftedSpinner;