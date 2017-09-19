
'use strict';

var NavigationAnimatedView = require('./NavigationAnimatedView');
var NavigationCard = require('./NavigationCard');
var NavigationCardStack = require('./NavigationCardStack');
var NavigationContainer = require('./NavigationContainer');
var NavigationHeader = require('./NavigationHeader');
var NavigationLegacyNavigator = null;
var NavigationReducer = require('./NavigationReducer');
var NavigationRootContainer = require('./NavigationRootContainer');
var NavigationStateUtils = require('./NavigationStateUtils');
var NavigationView = require('./NavigationView');
var NavigationPropTypes = require('./NavigationPropTypes');

var NavigationExperimental = {
  StateUtils: NavigationStateUtils,
  Reducer: NavigationReducer,

  Container: NavigationContainer,
  RootContainer: NavigationRootContainer,

  View: NavigationView,
  AnimatedView: NavigationAnimatedView,

  Card: NavigationCard,
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  LegacyNavigator: NavigationLegacyNavigator,

  PropTypes: NavigationPropTypes
};

module.exports = NavigationExperimental;