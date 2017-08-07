/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AppRegistry
 * 
 */
'use strict';

var BatchedBridge=require('BatchedBridge');
var BugReporting=require('BugReporting');
var FrameRateLogger=require('FrameRateLogger');
var NativeModules=require('NativeModules');
var ReactNative=require('ReactNative');

var infoLog=require('infoLog');
var invariant=require('fbjs/lib/invariant');
var renderApplication=require('renderApplication');






























var runnables={};
var runCount=1;
var sections={};
var tasks=new Map();
var componentProviderInstrumentationHook=
function componentProviderInstrumentationHook(component){return component();};

/**
 * `AppRegistry` is the JS entry point to running all React Native apps.  App
 * root components should register themselves with
 * `AppRegistry.registerComponent`, then the native system can load the bundle
 * for the app and then actually run the app when it's ready by invoking
 * `AppRegistry.runApplication`.
 *
 * To "stop" an application when a view should be destroyed, call
 * `AppRegistry.unmountApplicationComponentAtRootTag` with the tag that was
 * passed into `runApplication`. These should always be used as a pair.
 *
 * `AppRegistry` should be `require`d early in the `require` sequence to make
 * sure the JS execution environment is setup before other modules are
 * `require`d.
 */
var AppRegistry={
registerConfig:function registerConfig(config){
config.forEach(function(appConfig){
if(appConfig.run){
AppRegistry.registerRunnable(appConfig.appKey,appConfig.run);
}else{
invariant(
appConfig.component!=null,"AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.",


appConfig.appKey);

AppRegistry.registerComponent(
appConfig.appKey,
appConfig.component,
appConfig.section);

}
});
},

registerComponent:function registerComponent(
appKey,
component,
section)
{
runnables[appKey]={
component:component,
run:function run(appParameters){return(
renderApplication(
componentProviderInstrumentationHook(component),
appParameters.initialProps,
appParameters.rootTag));}};


if(section){
sections[appKey]=runnables[appKey];
}
return appKey;
},

registerRunnable:function registerRunnable(appKey,run){
runnables[appKey]={run:run};
return appKey;
},

registerSection:function registerSection(appKey,component){
AppRegistry.registerComponent(appKey,component,true);
},

getAppKeys:function getAppKeys(){
return Object.keys(runnables);
},

getSectionKeys:function getSectionKeys(){
return Object.keys(sections);
},

getSections:function getSections(){
return babelHelpers.extends({},
sections);

},

getRunnable:function getRunnable(appKey){
return runnables[appKey];
},

getRegistry:function getRegistry(){
return{
sections:AppRegistry.getSectionKeys(),
runnables:babelHelpers.extends({},runnables)};

},

setComponentProviderInstrumentationHook:function setComponentProviderInstrumentationHook(hook){
componentProviderInstrumentationHook=hook;
},

runApplication:function runApplication(appKey,appParameters){
var msg=
'Running application "'+appKey+'" with appParams: '+
JSON.stringify(appParameters)+'. '+
'__DEV__ === '+String(false)+
', development-level warning are '+'OFF'+
', performance optimizations are '+'ON';
infoLog(msg);
BugReporting.addSource('AppRegistry.runApplication'+runCount++,function(){return msg;});
invariant(
runnables[appKey]&&runnables[appKey].run,
'Application '+appKey+' has not been registered.\n\n'+
'Hint: This error often happens when you\'re running the packager '+
'(local dev server) from a wrong folder. For example you have '+
'multiple apps and the packager is still running for the app you '+
'were working on before.\nIf this is the case, simply kill the old '+
'packager instance (e.g. close the packager terminal window) '+
'and start the packager in the correct app folder (e.g. cd into app '+
'folder and run \'npm start\').\n\n'+
'This error can also happen due to a require() error during '+
'initialization or failure to call AppRegistry.registerComponent.\n\n');

FrameRateLogger.setContext(appKey);
runnables[appKey].run(appParameters);
},

unmountApplicationComponentAtRootTag:function unmountApplicationComponentAtRootTag(rootTag){
ReactNative.unmountComponentAtNodeAndRemoveContainer(rootTag);
},

/**
   * Register a headless task. A headless task is a bit of code that runs without a UI.
   * @param taskKey the key associated with this task
   * @param task    a promise returning function that takes some data passed from the native side as
   *                the only argument; when the promise is resolved or rejected the native side is
   *                notified of this event and it may decide to destroy the JS context.
   */
registerHeadlessTask:function registerHeadlessTask(taskKey,task){
if(tasks.has(taskKey)){
console.warn("registerHeadlessTask called multiple times for same key '"+taskKey+"'");
}
tasks.set(taskKey,task);
},

/**
   * Only called from native code. Starts a headless task.
   *
   * @param taskId the native id for this task instance to keep track of its execution
   * @param taskKey the key for the task to start
   * @param data the data to pass to the task
   */
startHeadlessTask:function startHeadlessTask(taskId,taskKey,data){
var taskProvider=tasks.get(taskKey);
if(!taskProvider){
throw new Error("No task registered for key "+taskKey);
}
taskProvider()(data).
then(function(){return NativeModules.HeadlessJsTaskSupport.notifyTaskFinished(taskId);}).
catch(function(reason){
console.error(reason);
NativeModules.HeadlessJsTaskSupport.notifyTaskFinished(taskId);
});
}};



BatchedBridge.registerCallableModule(
'AppRegistry',
AppRegistry);


module.exports=AppRegistry;