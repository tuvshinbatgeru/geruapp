/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DatePickerIOS
 */

'use strict';

var React=require('React');
var StyleSheet=require('StyleSheet');
var Text=require('Text');
var View=require('View');var

DummyDatePickerIOS=function(_React$Component){babelHelpers.inherits(DummyDatePickerIOS,_React$Component);function DummyDatePickerIOS(){babelHelpers.classCallCheck(this,DummyDatePickerIOS);return babelHelpers.possibleConstructorReturn(this,(DummyDatePickerIOS.__proto__||Object.getPrototypeOf(DummyDatePickerIOS)).apply(this,arguments));}babelHelpers.createClass(DummyDatePickerIOS,[{key:"render",value:function render()
{
return(
React.createElement(View,{style:[styles.dummyDatePickerIOS,this.props.style]},
React.createElement(Text,{style:styles.datePickerText},"DatePickerIOS is not supported on this platform!")));


}}]);return DummyDatePickerIOS;}(React.Component);


var styles=StyleSheet.create({
dummyDatePickerIOS:{
height:100,
width:300,
backgroundColor:'#ffbcbc',
borderWidth:1,
borderColor:'red',
alignItems:'center',
justifyContent:'center',
margin:10},

datePickerText:{
color:'#333333',
margin:20}});



module.exports=DummyDatePickerIOS;