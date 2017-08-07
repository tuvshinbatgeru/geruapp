/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * 
 */

'use strict';

var invariant=require('fbjs/lib/invariant');

var caughtError=null;

var _invokeGuardedCallback=function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){
var funcArgs=Array.prototype.slice.call(arguments,3);
try{
func.apply(context,funcArgs);
}catch(error){
return error;
}
return null;
};











































var _rethrowCaughtError=function _rethrowCaughtError(){
if(caughtError){
var error=caughtError;
caughtError=null;
throw error;
}
};

/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */
var ReactErrorUtils={
injection:{
injectErrorUtils:function injectErrorUtils(injectedErrorUtils){
invariant(
typeof injectedErrorUtils.invokeGuardedCallback==='function',
'Injected invokeGuardedCallback() must be a function.');

_invokeGuardedCallback=injectedErrorUtils.invokeGuardedCallback;
}},


invokeGuardedCallback:function invokeGuardedCallback(
name,
func,
context,
a,
b,
c,
d,
e,
f)
{
return _invokeGuardedCallback.apply(this,arguments);
},

/**
   * Same as invokeGuardedCallback, but instead of returning an error, it stores
   * it in a global so it can be rethrown by `rethrowCaughtError` later.
   *
   * @param {String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} context The context to use when calling the function
   * @param {...*} args Arguments for function
   */
invokeGuardedCallbackAndCatchFirstError:function invokeGuardedCallbackAndCatchFirstError(
name,
func,
context,
a,
b,
c,
d,
e,
f)
{
var error=ReactErrorUtils.invokeGuardedCallback.apply(this,arguments);
if(error!==null&&caughtError===null){
caughtError=error;
}
},

/**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
rethrowCaughtError:function rethrowCaughtError(){
return _rethrowCaughtError.apply(this,arguments);
}};


module.exports=ReactErrorUtils;