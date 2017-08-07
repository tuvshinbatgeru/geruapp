/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule InitializeCore
 * 
 */

/* eslint-disable strict */
/* globals window: true */


/**
 * Sets up global variables typical in most JavaScript environments.
 *
 *   1. Global timers (via `setTimeout` etc).
 *   2. Global console object.
 *   3. Hooks for printing stack traces with source maps.
 *
 * Leaves enough room in the environment for implementing your own:
 *
 *   1. Require system.
 *   2. Bridged modules.
 *
 */
'use strict';

if(global.GLOBAL===undefined){
global.GLOBAL=global;
}

if(global.window===undefined){
global.window=global;
}

var defineLazyObjectProperty=require('defineLazyObjectProperty');

/**
 * Sets an object's property. If a property with the same name exists, this will
 * replace it but maintain its descriptor configuration. By default, the property
 * will replaced with a lazy getter.
 *
 * The original property value will be preserved as `original[PropertyName]` so
 * that, if necessary, it can be restored. For example, if you want to route
 * network requests through DevTools (to trace them):
 *
 *   global.XMLHttpRequest = global.originalXMLHttpRequest;
 *
 * @see https://github.com/facebook/react-native/issues/934
 */
function defineProperty(
object,
name,
getValue,
eager)
{
var descriptor=Object.getOwnPropertyDescriptor(object,name);
if(descriptor){
var backupName="original"+name[0].toUpperCase()+name.substr(1);
Object.defineProperty(object,backupName,babelHelpers.extends({},
descriptor,{
value:object[name]}));

}var _ref=

descriptor||{},enumerable=_ref.enumerable,writable=_ref.writable,configurable=_ref.configurable;
if(descriptor&&!configurable){
console.error('Failed to set polyfill. '+name+' is not configurable.');
return;
}

if(eager===true){
Object.defineProperty(object,name,{
configurable:true,
enumerable:enumerable!==false,
writable:writable!==false,
value:getValue()});

}else{
defineLazyObjectProperty(object,name,{
get:getValue,
enumerable:enumerable!==false,
writable:writable!==false});

}
}

// Set up process
global.process=global.process||{};
global.process.env=global.process.env||{};
if(!global.process.env.NODE_ENV){
global.process.env.NODE_ENV='production';
}

// Set up profile
var Systrace=require('Systrace');
Systrace.setEnabled(global.__RCTProfileIsProfiling||false);

// Set up console
var ExceptionsManager=require('ExceptionsManager');
ExceptionsManager.installConsoleErrorReporter();

// TODO: Move these around to solve the cycle in a cleaner way
var BatchedBridge=require('BatchedBridge');
BatchedBridge.registerCallableModule('Systrace',require('Systrace'));
BatchedBridge.registerCallableModule('JSTimersExecution',require('JSTimersExecution'));
BatchedBridge.registerCallableModule('HeapCapture',require('HeapCapture'));
BatchedBridge.registerCallableModule('SamplingProfiler',require('SamplingProfiler'));





// RCTLog needs to register with BatchedBridge
require('RCTLog');

// Set up error handler
if(!global.__fbDisableExceptionsManager){
var handleError=function handleError(e,isFatal){
try{
ExceptionsManager.handleException(e,isFatal);
}catch(ee){
/* eslint-disable no-console-disallow */
console.log('Failed to print error: ',ee.message);
/* eslint-enable no-console-disallow */
throw e;
}
};

var ErrorUtils=require('ErrorUtils');
ErrorUtils.setGlobalHandler(handleError);
}

// Set up timers
var defineLazyTimer=function defineLazyTimer(name){
defineProperty(global,name,function(){return require('JSTimers')[name];});
};
defineLazyTimer('setTimeout');
defineLazyTimer('setInterval');
defineLazyTimer('setImmediate');
defineLazyTimer('clearTimeout');
defineLazyTimer('clearInterval');
defineLazyTimer('clearImmediate');
defineLazyTimer('requestAnimationFrame');
defineLazyTimer('cancelAnimationFrame');
defineLazyTimer('requestIdleCallback');
defineLazyTimer('cancelIdleCallback');

// Set up alert
if(!global.alert){
global.alert=function(text){
// Require Alert on demand. Requiring it too early can lead to issues
// with things like Platform not being fully initialized.
require('Alert').alert('Alert',''+text);
};
}

// Set up Promise
// The native Promise implementation throws the following error:
// ERROR: Event loop not supported.
defineProperty(global,'Promise',function(){return require('Promise');});

// Set up regenerator.
defineProperty(global,'regeneratorRuntime',function(){
// The require just sets up the global, so make sure when we first
// invoke it the global does not exist
delete global.regeneratorRuntime;
require('regenerator-runtime/runtime');
return global.regeneratorRuntime;
});

// Set up XHR
// The native XMLHttpRequest in Chrome dev tools is CORS aware and won't
// let you fetch anything from the internet
defineProperty(global,'XMLHttpRequest',function(){return require('XMLHttpRequest');});
defineProperty(global,'FormData',function(){return require('FormData');});

defineProperty(global,'fetch',function(){return require('fetch').fetch;});
defineProperty(global,'Headers',function(){return require('fetch').Headers;});
defineProperty(global,'Request',function(){return require('fetch').Request;});
defineProperty(global,'Response',function(){return require('fetch').Response;});
defineProperty(global,'WebSocket',function(){return require('WebSocket');});

// Set up Geolocation
var navigator=global.navigator;
if(navigator===undefined){
global.navigator=navigator={};
}

// see https://github.com/facebook/react-native/issues/10881
defineProperty(navigator,'product',function(){return'ReactNative';},true);
defineProperty(navigator,'geolocation',function(){return require('Geolocation');});

// Set up collections
// We can't make these lazy because `Map` checks for `global.Map` (which wouldc
// not exist if it were lazily defined).
defineProperty(global,'Map',function(){return require('Map');},true);
defineProperty(global,'Set',function(){return require('Set');},true);

// Set up devtools










// Set up inspector





// Just to make sure the JS gets packaged up. Wait until the JS environment has
// been initialized before requiring them.
require('RCTDeviceEventEmitter');
require('RCTNativeAppEventEmitter');
require('PerformanceLogger');