/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NavigationExperimental
 * 
 */
'use strict';

var NavigationAnimatedView=require('./NavigationAnimatedView');
var NavigationCard=require('./NavigationCard');
var NavigationCardStack=require('./NavigationCardStack');
var NavigationContainer=require('./NavigationContainer');
var NavigationHeader=require('./NavigationHeader');
var NavigationLegacyNavigator=null;
var NavigationReducer=require('./NavigationReducer');
var NavigationRootContainer=require('./NavigationRootContainer');
var NavigationStateUtils=require('./NavigationStateUtils');
var NavigationView=require('./NavigationView');
var NavigationPropTypes=require('./NavigationPropTypes');

var NavigationExperimental={
// Core
StateUtils:NavigationStateUtils,
Reducer:NavigationReducer,

// Containers
Container:NavigationContainer,
RootContainer:NavigationRootContainer,

// Views
View:NavigationView,
AnimatedView:NavigationAnimatedView,

// CustomComponents:
Card:NavigationCard,
CardStack:NavigationCardStack,
Header:NavigationHeader,
LegacyNavigator:NavigationLegacyNavigator,

PropTypes:NavigationPropTypes};


module.exports=NavigationExperimental;