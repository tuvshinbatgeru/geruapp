/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Modal
 * 
 */
'use strict';var _container;

var AppContainer=require('AppContainer');
var I18nManager=require('I18nManager');
var Platform=require('Platform');
var React=require('React');
var StyleSheet=require('StyleSheet');
var View=require('View');

var deprecatedPropType=require('deprecatedPropType');
var requireNativeComponent=require('requireNativeComponent');
var RCTModalHostView=requireNativeComponent('RCTModalHostView',null);

var PropTypes=React.PropTypes;

/**
 * The Modal component is a simple way to present content above an enclosing view.
 *
 * _Note: If you need more control over how to present modals over the rest of your app,
 * then consider using a top-level Navigator._
 *
 * ```javascript
 * import React, { Component } from 'react';
 * import { Modal, Text, TouchableHighlight, View } from 'react-native';
 *
 * class ModalExample extends Component {
 *
 *   state = {
 *     modalVisible: false,
 *   }
 *
 *   setModalVisible(visible) {
 *     this.setState({modalVisible: visible});
 *   }
 *
 *   render() {
 *     return (
 *       <View style={{marginTop: 22}}>
 *         <Modal
 *           animationType={"slide"}
 *           transparent={false}
 *           visible={this.state.modalVisible}
 *           onRequestClose={() => {alert("Modal has been closed.")}}
 *           >
 *          <View style={{marginTop: 22}}>
 *           <View>
 *             <Text>Hello World!</Text>
 *
 *             <TouchableHighlight onPress={() => {
 *               this.setModalVisible(!this.state.modalVisible)
 *             }}>
 *               <Text>Hide Modal</Text>
 *             </TouchableHighlight>
 *
 *           </View>
 *          </View>
 *         </Modal>
 *
 *         <TouchableHighlight onPress={() => {
 *           this.setModalVisible(true)
 *         }}>
 *           <Text>Show Modal</Text>
 *         </TouchableHighlight>
 *
 *       </View>
 *     );
 *   }
 * }
 * ```
 */var
Modal=function(_React$Component){babelHelpers.inherits(Modal,_React$Component);function Modal(){babelHelpers.classCallCheck(this,Modal);return babelHelpers.possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).apply(this,arguments));}babelHelpers.createClass(Modal,[{key:"render",value:function render()




























































{
if(this.props.visible===false){
return null;
}

var containerStyles={
backgroundColor:this.props.transparent?'transparent':'white'};


var animationType=this.props.animationType;
if(!animationType){
// manually setting default prop here to keep support for the deprecated 'animated' prop
animationType='none';
if(this.props.animated){
animationType='slide';
}
}

var innerChildren=



this.props.children;

return(
React.createElement(RCTModalHostView,{
animationType:animationType,
transparent:this.props.transparent,
hardwareAccelerated:this.props.hardwareAccelerated,
onRequestClose:this.props.onRequestClose,
onShow:this.props.onShow,
style:styles.modal,
onStartShouldSetResponder:this._shouldSetResponder,
supportedOrientations:this.props.supportedOrientations,
onOrientationChange:this.props.onOrientationChange},

React.createElement(View,{style:[styles.container,containerStyles]},
innerChildren)));



}

// We don't want any responder events bubbling out of the modal.
},{key:"_shouldSetResponder",value:function _shouldSetResponder(){
return true;
}}]);return Modal;}(React.Component);Modal.propTypes={/**
     * The `animationType` prop controls how the modal animates.
     *
     * - `slide` slides in from the bottom
     * - `fade` fades into view
     * - `none` appears without an animation
     *
     * Default is set to `none`.
     */animationType:PropTypes.oneOf(['none','slide','fade']),/**
     * The `transparent` prop determines whether your modal will fill the entire view. Setting this to `true` will render the modal over a transparent background.
     */transparent:PropTypes.bool,/**
     * The `hardwareAccelerated` prop controls whether to force hardware acceleration for the underlying window.
     * @platform android
     */hardwareAccelerated:PropTypes.bool,/**
     * The `visible` prop determines whether your modal is visible.
     */visible:PropTypes.bool,/**
     * The `onRequestClose` callback is called when the user taps the hardware back button.
     * @platform android
     */onRequestClose:PropTypes.func.isRequired,/**
     * The `onShow` prop allows passing a function that will be called once the modal has been shown.
     */onShow:PropTypes.func,animated:deprecatedPropType(PropTypes.bool,'Use the `animationType` prop instead.'),/**
     * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
     * On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.
     * @platform ios
     */supportedOrientations:PropTypes.arrayOf(PropTypes.oneOf(['portrait','portrait-upside-down','landscape','landscape-left','landscape-right'])),/**
     * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
     * The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.
     * @platform ios
     */onOrientationChange:PropTypes.func};Modal.defaultProps={visible:true,hardwareAccelerated:false};Modal.contextTypes={rootTag:React.PropTypes.number};var side=I18nManager.isRTL?'right':'left';var styles=StyleSheet.create({modal:{position:'absolute'},container:(_container={position:'absolute'},babelHelpers.defineProperty(_container,side,0),babelHelpers.defineProperty(_container,"top",0),_container)});module.exports=Modal;