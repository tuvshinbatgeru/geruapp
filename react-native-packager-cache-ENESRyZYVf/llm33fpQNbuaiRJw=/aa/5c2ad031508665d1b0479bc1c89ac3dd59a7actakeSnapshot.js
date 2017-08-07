/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule takeSnapshot
 * 
 */
'use strict';

var ReactNative=require('ReactNative');
var UIManager=require('UIManager');



/**
 * Capture an image of the screen, window or an individual view. The image
 * will be stored in a temporary file that will only exist for as long as the
 * app is running.
 *
 * The `view` argument can be the literal string `window` if you want to
 * capture the entire window, or it can be a reference to a specific
 * React Native component.
 *
 * The `options` argument may include:
 * - width/height (number) - the width and height of the image to capture.
 * - format (string) - either 'png' or 'jpeg'. Defaults to 'png'.
 * - quality (number) - the quality when using jpeg. 0.0 - 1.0 (default).
 *
 * Returns a Promise.
 * @platform ios
 */
module.exports=function takeSnapshot(
view,
options){return regeneratorRuntime.async(function takeSnapshot$(_context){while(1){switch(_context.prev=_context.next){case 0:






if(
typeof view!=='number'&&
view!=='window')
{
view=ReactNative.findNodeHandle(view)||'window';
}

// Call the hidden '__takeSnapshot' method; the main one throws an error to
// prevent accidental backwards-incompatible usage.
return _context.abrupt("return",UIManager.__takeSnapshot(view,options));case 2:case"end":return _context.stop();}}},null,this);};