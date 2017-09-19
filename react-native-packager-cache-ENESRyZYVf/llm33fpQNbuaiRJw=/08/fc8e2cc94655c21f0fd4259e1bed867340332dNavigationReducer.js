
'use strict';

var NavigationFindReducer = require('./NavigationFindReducer');
var NavigationStackReducer = require('./NavigationStackReducer');
var NavigationTabsReducer = require('./NavigationTabsReducer');

var NavigationReducer = {
  FindReducer: NavigationFindReducer,
  StackReducer: NavigationStackReducer,
  TabsReducer: NavigationTabsReducer
};

module.exports = NavigationReducer;