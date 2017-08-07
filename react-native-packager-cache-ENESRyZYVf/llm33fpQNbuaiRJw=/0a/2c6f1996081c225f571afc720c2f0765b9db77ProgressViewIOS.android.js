
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ProgressViewIOS
 */

'use strict';

var React=require('React');
var StyleSheet=require('StyleSheet');
var Text=require('Text');
var View=require('View');var

DummyProgressViewIOS=function(_React$Component){babelHelpers.inherits(DummyProgressViewIOS,_React$Component);function DummyProgressViewIOS(){babelHelpers.classCallCheck(this,DummyProgressViewIOS);return babelHelpers.possibleConstructorReturn(this,(DummyProgressViewIOS.__proto__||Object.getPrototypeOf(DummyProgressViewIOS)).apply(this,arguments));}babelHelpers.createClass(DummyProgressViewIOS,[{key:"render",value:function render()
{
return(
React.createElement(View,{style:[styles.dummy,this.props.style]},
React.createElement(Text,{style:styles.text},"ProgressViewIOS is not supported on this platform!")));




}}]);return DummyProgressViewIOS;}(React.Component);


var styles=StyleSheet.create({
dummy:{
width:120,
height:20,
backgroundColor:'#ffbcbc',
borderWidth:1,
borderColor:'red',
alignItems:'center',
justifyContent:'center'},

text:{
color:'#333333',
margin:5,
fontSize:10}});



module.exports=DummyProgressViewIOS;