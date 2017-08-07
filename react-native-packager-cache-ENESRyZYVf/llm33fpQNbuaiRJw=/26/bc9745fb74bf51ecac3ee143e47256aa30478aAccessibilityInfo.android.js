/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AccessibilityInfo
 * 
 */
'use strict';

var NativeModules=require('NativeModules');
var RCTDeviceEventEmitter=require('RCTDeviceEventEmitter');

var RCTAccessibilityInfo=NativeModules.AccessibilityInfo;

var TOUCH_EXPLORATION_EVENT='touchExplorationDidChange';





var _subscriptions=new Map();

var AccessibilityInfo={

fetch:function fetch(){
return new Promise(function(resolve,reject){
RCTAccessibilityInfo.isTouchExplorationEnabled(
function(resp){
resolve(resp);
});

});
},

addEventListener:function addEventListener(
eventName,
handler)
{
var listener=RCTDeviceEventEmitter.addListener(
TOUCH_EXPLORATION_EVENT,
function(enabled){
handler(enabled);
});

_subscriptions.set(handler,listener);
},

removeEventListener:function removeEventListener(
eventName,
handler)
{
var listener=_subscriptions.get(handler);
if(!listener){
return;
}
listener.remove();
_subscriptions.delete(handler);
}};



module.exports=AccessibilityInfo;