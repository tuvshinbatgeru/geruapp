/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ActivityIndicator
 * 
 */
'use strict';

var ColorPropType=require('ColorPropType');
var NativeMethodsMixin=require('NativeMethodsMixin');
var Platform=require('Platform');
var React=require('React');
var StyleSheet=require('StyleSheet');
var View=require('View');

var ViewPropTypes=require('ViewPropTypes');

var requireNativeComponent=require('requireNativeComponent');

var PropTypes=React.PropTypes;

var GRAY='#999999';










/**
 * Displays a circular loading indicator.
 */
var ActivityIndicator=React.createClass({displayName:"ActivityIndicator",
mixins:[NativeMethodsMixin],

propTypes:babelHelpers.extends({},
ViewPropTypes,{
/**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
animating:PropTypes.bool,
/**
     * The foreground color of the spinner (default is gray).
     */
color:ColorPropType,
/**
     * Size of the indicator (default is 'small').
     * Passing a number to the size prop is only supported on Android.
     */
size:PropTypes.oneOfType([
PropTypes.oneOf(['small','large']),
PropTypes.number]),

/**
     * Whether the indicator should hide when not animating (true by default).
     *
     * @platform ios
     */
hidesWhenStopped:PropTypes.bool}),


getDefaultProps:function getDefaultProps(){
return{
animating:true,
color:undefined,
hidesWhenStopped:true,
size:'small'};

},

render:function render(){var _props=
this.props,onLayout=_props.onLayout,style=_props.style,props=babelHelpers.objectWithoutProperties(_props,["onLayout","style"]);
var sizeStyle=void 0;

switch(props.size){
case'small':
sizeStyle=styles.sizeSmall;
break;
case'large':
sizeStyle=styles.sizeLarge;
break;
default:
sizeStyle={height:props.size,width:props.size};
break;}


return(
React.createElement(View,{
onLayout:onLayout,
style:[styles.container,style]},
React.createElement(RCTActivityIndicator,babelHelpers.extends({},
props,{
style:sizeStyle,
styleAttr:"Normal",
indeterminate:true}))));



}});


var styles=StyleSheet.create({
container:{
alignItems:'center',
justifyContent:'center'},

sizeSmall:{
width:20,
height:20},

sizeLarge:{
width:36,
height:36}});









{
var RCTActivityIndicator=requireNativeComponent(
'AndroidProgressBar',
ActivityIndicator,
// Ignore props that are specific to non inderterminate ProgressBar.
{nativeOnly:{
indeterminate:true,
progress:true,
styleAttr:true}});


}

module.exports=ActivityIndicator;