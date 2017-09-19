
'use strict';

var NavigationStateUtils = require('./NavigationStateUtils');

var defaultGetReducerForState = function defaultGetReducerForState(initialState) {
  return function (state) {
    return state || initialState;
  };
};

function NavigationStackReducer(_ref) {
  var initialState = _ref.initialState,
      getReducerForState = _ref.getReducerForState,
      getPushedReducerForAction = _ref.getPushedReducerForAction;

  var getReducerForStateWithDefault = getReducerForState || defaultGetReducerForState;
  return function (lastState, action) {
    if (!lastState) {
      return initialState;
    }
    var lastParentState = NavigationStateUtils.getParent(lastState);
    if (!lastParentState) {
      return lastState;
    }

    var activeSubState = lastParentState.children[lastParentState.index];
    var activeSubReducer = getReducerForStateWithDefault(activeSubState);
    var nextActiveState = activeSubReducer(activeSubState, action);
    if (nextActiveState !== activeSubState) {
      var nextChildren = [].concat(babelHelpers.toConsumableArray(lastParentState.children));
      nextChildren[lastParentState.index] = nextActiveState;
      return babelHelpers.extends({}, lastParentState, {
        children: nextChildren
      });
    }

    var subReducerToPush = getPushedReducerForAction(action, lastParentState);
    if (subReducerToPush) {
      return NavigationStateUtils.push(lastParentState, subReducerToPush(null, action));
    }

    switch (action.type) {
      case 'back':
      case 'BackAction':
        if (lastParentState.index === 0 || lastParentState.children.length === 1) {
          return lastParentState;
        }
        return NavigationStateUtils.pop(lastParentState);
    }

    return lastParentState;
  };
}

module.exports = NavigationStackReducer;