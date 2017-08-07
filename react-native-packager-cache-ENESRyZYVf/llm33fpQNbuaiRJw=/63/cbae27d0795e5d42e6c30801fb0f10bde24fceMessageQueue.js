/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule MessageQueue
 * 
 */

/*eslint no-bitwise: 0*/

'use strict';

var ErrorUtils=require('ErrorUtils');
var JSTimersExecution=require('JSTimersExecution');
var Systrace=require('Systrace');

var deepFreezeAndThrowOnMutationInDev=require('deepFreezeAndThrowOnMutationInDev');
var invariant=require('fbjs/lib/invariant');
var stringifySafe=require('stringifySafe');








var TO_JS=0;
var TO_NATIVE=1;

var MODULE_IDS=0;
var METHOD_IDS=1;
var PARAMS=2;
var MIN_TIME_BETWEEN_FLUSHES_MS=5;

var TRACE_TAG_REACT_APPS=131072;

var DEBUG_INFO_LIMIT=32;var

MessageQueue=function(){















function MessageQueue(){babelHelpers.classCallCheck(this,MessageQueue);
this._callableModules={};
this._queue=[[],[],[],0];
this._callbacks=[];
this._callbackID=0;
this._callID=0;
this._lastFlush=0;
this._eventLoopStartTime=new Date().getTime();







this.callFunctionReturnFlushedQueue=this.callFunctionReturnFlushedQueue.bind(this);
this.callFunctionReturnResultAndFlushedQueue=this.callFunctionReturnResultAndFlushedQueue.bind(this);
this.flushedQueue=this.flushedQueue.bind(this);
this.invokeCallbackAndReturnFlushedQueue=this.invokeCallbackAndReturnFlushedQueue.bind(this);
}

/**
   * Public APIs
   */babelHelpers.createClass(MessageQueue,[{key:"callFunctionReturnFlushedQueue",value:function callFunctionReturnFlushedQueue(















module,method,args){var _this=this;
this.__guard(function(){
_this.__callFunction(module,method,args);
_this.__callImmediates();
});

return this.flushedQueue();
}},{key:"callFunctionReturnResultAndFlushedQueue",value:function callFunctionReturnResultAndFlushedQueue(

module,method,args){var _this2=this;
var result=void 0;
this.__guard(function(){
result=_this2.__callFunction(module,method,args);
_this2.__callImmediates();
});

return[result,this.flushedQueue()];
}},{key:"invokeCallbackAndReturnFlushedQueue",value:function invokeCallbackAndReturnFlushedQueue(

cbID,args){var _this3=this;
this.__guard(function(){
_this3.__invokeCallback(cbID,args);
_this3.__callImmediates();
});

return this.flushedQueue();
}},{key:"flushedQueue",value:function flushedQueue()

{
this.__callImmediates();

var queue=this._queue;
this._queue=[[],[],[],this._callID];
return queue[0].length?queue:null;
}},{key:"getEventLoopRunningTime",value:function getEventLoopRunningTime()

{
return new Date().getTime()-this._eventLoopStartTime;
}},{key:"registerCallableModule",value:function registerCallableModule(

name,module){
this._callableModules[name]=module;
}},{key:"enqueueNativeCall",value:function enqueueNativeCall(

moduleID,methodID,params,onFail,onSucc){
if(onFail||onSucc){







onFail&&params.push(this._callbackID);
/* $FlowFixMe(>=0.38.0 site=react_native_fb,react_native_oss) - Flow error
       * detected during the deployment of v0.38.0. To see the error, remove
       * this comment and run flow */
this._callbacks[this._callbackID++]=onFail;
onSucc&&params.push(this._callbackID);
/* $FlowFixMe(>=0.38.0 site=react_native_fb,react_native_oss) - Flow error
       * detected during the deployment of v0.38.0. To see the error, remove
       * this comment and run flow */
this._callbacks[this._callbackID++]=onSucc;
}





this._callID++;

this._queue[MODULE_IDS].push(moduleID);
this._queue[METHOD_IDS].push(methodID);








this._queue[PARAMS].push(params);

var now=new Date().getTime();
if(global.nativeFlushQueueImmediate&&(
now-this._lastFlush>=MIN_TIME_BETWEEN_FLUSHES_MS||
this._inCall===0)){
var queue=this._queue;
this._queue=[[],[],[],this._callID];
this._lastFlush=now;
global.nativeFlushQueueImmediate(queue);
}
Systrace.counterEvent('pending_js_to_native_queue',this._queue[0].length);







if(this.__spy){
this.__spy({type:TO_NATIVE,module:moduleID+'',method:methodID,args:params});
}
}},{key:"createDebugLookup",value:function createDebugLookup(

moduleID,name,methods){




}

/**
   * Private methods
   */},{key:"__guard",value:function __guard(

fn){
this._inCall++;
try{
fn();
}catch(error){
ErrorUtils.reportFatalError(error);
}finally{
this._inCall--;
}
}},{key:"__callImmediates",value:function __callImmediates()

{
Systrace.beginEvent('JSTimersExecution.callImmediates()');
this.__guard(function(){return JSTimersExecution.callImmediates();});
Systrace.endEvent();
}},{key:"__callFunction",value:function __callFunction(

module,method,args){
this._lastFlush=new Date().getTime();
this._eventLoopStartTime=this._lastFlush;
Systrace.beginEvent(module+"."+method+"()");
if(this.__spy){
this.__spy({type:TO_JS,module:module,method:method,args:args});
}
var moduleMethods=this._callableModules[module];
invariant(
!!moduleMethods,
'Module %s is not a registered callable module (calling %s)',
module,method);

invariant(
!!moduleMethods[method],
'Method %s does not exist on module %s',
method,module);

var result=moduleMethods[method].apply(moduleMethods,args);
Systrace.endEvent();
return result;
}},{key:"__invokeCallback",value:function __invokeCallback(

cbID,args){
this._lastFlush=new Date().getTime();
this._eventLoopStartTime=this._lastFlush;
var callback=this._callbacks[cbID];






















{
if(!callback){
return;
}
}

/* $FlowFixMe(>=0.38.0 site=react_native_fb,react_native_oss) - Flow error
     * detected during the deployment of v0.38.0. To see the error, remove this
     * comment and run flow */
this._callbacks[cbID&~1]=null;
/* $FlowFixMe(>=0.38.0 site=react_native_fb,react_native_oss) - Flow error
     * detected during the deployment of v0.38.0. To see the error, remove this
     * comment and run flow */
this._callbacks[cbID|1]=null;
// $FlowIssue(>=0.35.0) #14551610
callback.apply(null,args);




}}],[{key:"spy",value:function spy(spyOrToggle){if(spyOrToggle===true){MessageQueue.prototype.__spy=function(info){console.log((info.type===TO_JS?'N->JS':'JS->N')+" : "+(""+(info.module?info.module+'.':'')+info.method)+("("+JSON.stringify(info.args)+")"));};}else if(spyOrToggle===false){MessageQueue.prototype.__spy=null;}else{MessageQueue.prototype.__spy=spyOrToggle;}}}]);return MessageQueue;}();


module.exports=MessageQueue;