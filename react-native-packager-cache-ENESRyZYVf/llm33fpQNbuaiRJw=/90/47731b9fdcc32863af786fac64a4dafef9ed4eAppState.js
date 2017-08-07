/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AppState
 * 
 */
'use strict';

var EventEmitter=require('EventEmitter');
var NativeEventEmitter=require('NativeEventEmitter');
var NativeModules=require('NativeModules');
var RCTAppState=NativeModules.AppState;

var logError=require('logError');
var invariant=require('fbjs/lib/invariant');

/**
 * `AppState` can tell you if the app is in the foreground or background,
 * and notify you when the state changes.
 *
 * AppState is frequently used to determine the intent and proper behavior when
 * handling push notifications.
 *
 * ### App States
 *
 *  - `active` - The app is running in the foreground
 *  - `background` - The app is running in the background. The user is either
 *     in another app or on the home screen
 *  - `inactive` - This is a state that occurs when transitioning between
 *  	 foreground & background, and during periods of inactivity such as
 *  	 entering the Multitasking view or in the event of an incoming call
 *
 * For more information, see
 * [Apple's documentation](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html)
 *
 * ### Basic Usage
 *
 * To see the current state, you can check `AppState.currentState`, which
 * will be kept up-to-date. However, `currentState` will be null at launch
 * while `AppState` retrieves it over the bridge.
 *
 * ```
 * import React, {Component} from 'react'
 * import {AppState, Text} from 'react-native'
 *
 * class AppStateExample extends Component {
 *
 *   state = {
 *     appState: AppState.currentState
 *   }
 *
 *   componentDidMount() {
 *     AppState.addEventListener('change', this._handleAppStateChange);
 *   }
 *
 *   componentWillUnmount() {
 *     AppState.removeEventListener('change', this._handleAppStateChange);
 *   }
 *
 *   _handleAppStateChange = (nextAppState) => {
 *     if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
 *       console.log('App has come to the foreground!')
 *     }
 *     this.setState({appState: nextAppState});
 *   }
 *
 *   render() {
 *     return (
 *       <Text>Current state is: {this.state.appState}</Text>
 *     );
 *   }
 *
 * }
 * ```
 *
 * This example will only ever appear to say "Current state is: active" because
 * the app is only visible to the user when in the `active` state, and the null
 * state will happen only momentarily.
 */var

AppState=function(_NativeEventEmitter){babelHelpers.inherits(AppState,_NativeEventEmitter);





function AppState(){babelHelpers.classCallCheck(this,AppState);var _this=babelHelpers.possibleConstructorReturn(this,(AppState.__proto__||Object.getPrototypeOf(AppState)).call(this,
RCTAppState));

_this.isAvailable=true;
_this._eventHandlers={
change:new Map(),
memoryWarning:new Map()};


// TODO: Remove the 'active' fallback after `initialAppState` is exported by
// the Android implementation.
_this.currentState=RCTAppState.initialAppState||'active';

// TODO: this is a terrible solution - in order to ensure `currentState` prop
// is up to date, we have to register an observer that updates it whenever
// the state changes, even if nobody cares. We should just deprecate the
// `currentState` property and get rid of this.
_this.addListener(
'appStateDidChange',
function(appStateData){
_this.currentState=appStateData.app_state;
});


// TODO: see above - this request just populates the value of `currentState`
// when the module is first initialized. Would be better to get rid of the prop
// and expose `getCurrentAppState` method directly.
RCTAppState.getCurrentAppState(
function(appStateData){
_this.currentState=appStateData.app_state;
},
logError);return _this;

}

/**
   * Add a handler to AppState changes by listening to the `change` event type
   * and providing the handler
   *
   * TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate
   * `addEventListener` and `removeEventListener` and just use `addListener` and
   * `listener.remove()` directly. That will be a breaking change though, as both
   * the method and event names are different (addListener events are currently
   * required to be globally unique).
   */babelHelpers.createClass(AppState,[{key:"addEventListener",value:function addEventListener(

type,
handler)
{
invariant(
['change','memoryWarning'].indexOf(type)!==-1,
'Trying to subscribe to unknown event: "%s"',type);

if(type==='change'){
this._eventHandlers[type].set(handler,this.addListener(
'appStateDidChange',
function(appStateData){
handler(appStateData.app_state);
}));

}else if(type==='memoryWarning'){
this._eventHandlers[type].set(handler,this.addListener(
'memoryWarning',
handler));

}
}

/**
   * Remove a handler by passing the `change` event type and the handler
   */},{key:"removeEventListener",value:function removeEventListener(

type,
handler)
{
invariant(
['change','memoryWarning'].indexOf(type)!==-1,
'Trying to remove listener for unknown event: "%s"',type);

if(!this._eventHandlers[type].has(handler)){
return;
}
this._eventHandlers[type].get(handler).remove();
this._eventHandlers[type].delete(handler);
}}]);return AppState;}(NativeEventEmitter);


function throwMissingNativeModule(){
invariant(
false,"Cannot use AppState module when native RCTAppState is not included in the build.\nEither include it, or check AppState.isAvailable before calling any methods.");



}var

MissingNativeAppStateShim=function(_EventEmitter){babelHelpers.inherits(MissingNativeAppStateShim,_EventEmitter);function MissingNativeAppStateShim(){var _ref;var _temp,_this2,_ret;babelHelpers.classCallCheck(this,MissingNativeAppStateShim);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this2=babelHelpers.possibleConstructorReturn(this,(_ref=MissingNativeAppStateShim.__proto__||Object.getPrototypeOf(MissingNativeAppStateShim)).call.apply(_ref,[this].concat(args))),_this2),_this2.

isAvailable=false,_this2.
currentState=null,_temp),babelHelpers.possibleConstructorReturn(_this2,_ret);}// AppState
babelHelpers.createClass(MissingNativeAppStateShim,[{key:"addEventListener",value:function addEventListener()
{
throwMissingNativeModule();
}},{key:"removeEventListener",value:function removeEventListener()

{
throwMissingNativeModule();
}

// EventEmitter
},{key:"addListener",value:function addListener(){
throwMissingNativeModule();
}},{key:"removeAllListeners",value:function removeAllListeners()

{
throwMissingNativeModule();
}},{key:"removeSubscription",value:function removeSubscription()

{
throwMissingNativeModule();
}}]);return MissingNativeAppStateShim;}(EventEmitter);


// This module depends on the native `RCTAppState` module. If you don't include it,
// `AppState.isAvailable` will return `false`, and any method calls will throw.
// We reassign the class variable to keep the autodoc generator happy.
if(RCTAppState){
AppState=new AppState();
}else{
AppState=new MissingNativeAppStateShim();
}

module.exports=AppState;