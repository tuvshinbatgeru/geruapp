/**
 * Common implementation for a simple stubbed view. Simply applies the view's styles to the inner
 * View component and renders its children.
 *
 * @providesModule UnimplementedView
 */

'use strict';

var React=require('React');
var StyleSheet=require('StyleSheet');var

UnimplementedView=function(_React$Component){babelHelpers.inherits(UnimplementedView,_React$Component);function UnimplementedView(){var _ref;var _temp,_this,_ret;babelHelpers.classCallCheck(this,UnimplementedView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=babelHelpers.possibleConstructorReturn(this,(_ref=UnimplementedView.__proto__||Object.getPrototypeOf(UnimplementedView)).call.apply(_ref,[this].concat(args))),_this),_this.
setNativeProps=function(){
// Do nothing.
// This method is required in order to use this view as a Touchable* child.
// See ensureComponentIsNative.js for more info
},_temp),babelHelpers.possibleConstructorReturn(_this,_ret);}babelHelpers.createClass(UnimplementedView,[{key:"render",value:function render()

{
// Workaround require cycle from requireNativeComponent
var View=require('View');
return(
React.createElement(View,{style:[styles.unimplementedView,this.props.style]},
this.props.children));


}}]);return UnimplementedView;}(React.Component);


var styles=StyleSheet.create({
unimplementedView:{
borderWidth:1,
borderColor:'red',
alignSelf:'flex-start'}});



module.exports=UnimplementedView;