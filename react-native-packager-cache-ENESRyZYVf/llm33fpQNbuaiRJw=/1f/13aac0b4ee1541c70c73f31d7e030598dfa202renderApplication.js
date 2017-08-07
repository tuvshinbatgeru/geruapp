/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule renderApplication
 * 
 */

'use strict';

var AppContainer=require('AppContainer');
var React=require('React');
var ReactNative=require('ReactNative');

var invariant=require('fbjs/lib/invariant');

// require BackHandler so it sets the default handler that exits the app if no listeners respond
require('BackHandler');

function renderApplication(
RootComponent,
initialProps,
rootTag)
{
invariant(
rootTag,
'Expect to have a valid rootTag, instead got ',rootTag);

ReactNative.render(
React.createElement(AppContainer,{rootTag:rootTag},
React.createElement(RootComponent,babelHelpers.extends({},
initialProps,{
rootTag:rootTag}))),


rootTag);

}

module.exports=renderApplication;