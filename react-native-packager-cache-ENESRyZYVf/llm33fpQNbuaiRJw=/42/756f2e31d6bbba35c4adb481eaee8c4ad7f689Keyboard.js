/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Keyboard
 * 
 */
'use strict';

var invariant=require('fbjs/lib/invariant');
var NativeEventEmitter=require('NativeEventEmitter');
var KeyboardObserver=require('NativeModules').KeyboardObserver;
var dismissKeyboard=require('dismissKeyboard');
var KeyboardEventEmitter=new NativeEventEmitter(KeyboardObserver);




















// The following object exists for documentation purposes
// Actual work happens in
// https://github.com/facebook/react-native/blob/master/Libraries/EventEmitter/NativeEventEmitter.js

/**
 * `Keyboard` module to control keyboard events.
 *
 * ### Usage
 *
 * The Keyboard module allows you to listen for native events and react to them, as
 * well as make changes to the keyboard, like dismissing it.
 *
 *```
 * import React, { Component } from 'react';
 * import { Keyboard, TextInput } from 'react-native';
 *
 * class Example extends Component {
 *   componentWillMount () {
 *     this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
 *     this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
 *   }
 *
 *   componentWillUnmount () {
 *     this.keyboardDidShowListener.remove();
 *     this.keyboardDidHideListener.remove();
 *   }
 *
 *   _keyboardDidShow () {
 *     alert('Keyboard Shown');
 *   }
 *
 *   _keyboardDidHide () {
 *     alert('Keyboard Hidden');
 *   }
 *
 *   render() {
 *     return (
 *       <TextInput
 *         onSubmitEditing={Keyboard.dismiss}
 *       />
 *     );
 *   }
 * }
 *```
 */

var Keyboard={
/**
   * The `addListener` function connects a JavaScript function to an identified native
   * keyboard notification event.
   *
   * This function then returns the reference to the listener.
   *
   * @param {string} eventName The `nativeEvent` is the string that identifies the event you're listening for.  This
   *can be any of the following:
   *
   * - `keyboardWillShow`
   * - `keyboardDidShow`
   * - `keyboardWillHide`
   * - `keyboardDidHide`
   * - `keyboardWillChangeFrame`
   * - `keyboardDidChangeFrame`
   *
   * @param {function} callback function to be called when the event fires.
   */
addListener:function addListener(eventName,callback){
invariant(false,'Dummy method used for documentation');
},

/**
   * Removes a specific listener.
   *
   * @param {string} eventName The `nativeEvent` is the string that identifies the event you're listening for.
   * @param {function} callback function to be called when the event fires.
   */
removeListener:function removeListener(eventName,callback){
invariant(false,'Dummy method used for documentation');
},

/**
   * Removes all listeners for a specific event type.
   *
   * @param {string} eventType The native event string listeners are watching which will be removed.
   */
removeAllListeners:function removeAllListeners(eventName){
invariant(false,'Dummy method used for documentation');
},

/**
   * Dismisses the active keyboard and removes focus.
   */
dismiss:function dismiss(){
invariant(false,'Dummy method used for documentation');
}};


// Throw away the dummy object and reassign it to original module
Keyboard=KeyboardEventEmitter;
Keyboard.dismiss=dismissKeyboard;

module.exports=Keyboard;