
'use strict';

var NavigationFindReducer = require('./NavigationFindReducer');
var NavigationStateUtils = require('./NavigationStateUtils');

var ActionTypes = {
  JUMP_TO: 'react-native/NavigationExperimental/tabs-jumpTo'
};

function NavigationTabsJumpToAction(index) {
  return {
    type: ActionTypes.JUMP_TO,
    index: index
  };
}

function NavigationTabsReducer(_ref) {
  var key = _ref.key,
      initialIndex = _ref.initialIndex,
      tabReducers = _ref.tabReducers;

  return function (lastNavState, action) {
    if (!lastNavState) {
      lastNavState = {
        children: tabReducers.map(function (reducer) {
          return reducer(null, null);
        }),
        index: initialIndex || 0,
        key: key
      };
    }
    var lastParentNavState = NavigationStateUtils.getParent(lastNavState);
    if (!action || !lastParentNavState) {
      return lastNavState;
    }
    if (action.type === ActionTypes.JUMP_TO && action.index !== lastParentNavState.index) {
      return NavigationStateUtils.jumpToIndex(lastParentNavState, action.index);
    }
    var subReducers = tabReducers.map(function (tabReducer, tabIndex) {
      return function (navState, tabAction) {
        if (!navState) {
          return lastParentNavState;
        }
        var parentState = NavigationStateUtils.getParent(navState);
        var tabState = parentState && parentState.children[tabIndex];
        var nextTabState = tabReducer(tabState, tabAction);
        if (nextTabState && tabState !== nextTabState) {
          var tabs = parentState && parentState.children || [];
          tabs[tabIndex] = nextTabState;
          return babelHelpers.extends({}, lastParentNavState, {
            tabs: tabs,
            index: tabIndex
          });
        }
        return lastParentNavState;
      };
    });
    var selectedTabReducer = subReducers.splice(lastParentNavState.index, 1)[0];
    subReducers.unshift(function (navState, action) {
      if (navState && action.type === 'BackAction') {
        return NavigationStateUtils.jumpToIndex(lastParentNavState, initialIndex || 0);
      }
      return lastParentNavState;
    });
    subReducers.unshift(selectedTabReducer);
    var findReducer = NavigationFindReducer(subReducers, lastParentNavState);
    return findReducer(lastParentNavState, action);
  };
}

NavigationTabsReducer.JumpToAction = NavigationTabsJumpToAction;

module.exports = NavigationTabsReducer;