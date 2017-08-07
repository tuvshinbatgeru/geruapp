/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Settings
 * 
 */
'use strict';

var Settings={
get:function get(key){
console.warn('Settings is not yet supported on Android');
return null;
},

set:function set(settings){
console.warn('Settings is not yet supported on Android');
},

watchKeys:function watchKeys(keys,callback){
console.warn('Settings is not yet supported on Android');
return-1;
},

clearWatch:function clearWatch(watchId){
console.warn('Settings is not yet supported on Android');
}};


module.exports=Settings;