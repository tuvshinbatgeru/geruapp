/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TabBarIOS
 * 
 */

'use strict';

var React=require('React');
var StyleSheet=require('StyleSheet');
var TabBarItemIOS=require('TabBarItemIOS');
var View=require('View');var

DummyTabBarIOS=function(_React$Component){babelHelpers.inherits(DummyTabBarIOS,_React$Component);function DummyTabBarIOS(){babelHelpers.classCallCheck(this,DummyTabBarIOS);return babelHelpers.possibleConstructorReturn(this,(DummyTabBarIOS.__proto__||Object.getPrototypeOf(DummyTabBarIOS)).apply(this,arguments));}babelHelpers.createClass(DummyTabBarIOS,[{key:"render",value:function render()


{
return(
React.createElement(View,{style:[this.props.style,styles.tabGroup]},
this.props.children));


}}]);return DummyTabBarIOS;}(React.Component);DummyTabBarIOS.Item=TabBarItemIOS;


var styles=StyleSheet.create({
tabGroup:{
flex:1}});



module.exports=DummyTabBarIOS;