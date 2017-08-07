Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElement = findElement;
exports.getCurrent = getCurrent;

var _reactNative = require('react-native');

var _lodash = require('lodash.isequal');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _ActionConst = require('./ActionConst');

var ActionConst = babelHelpers.interopRequireWildcard(_ActionConst);

var _Actions = require('./Actions');

var _Util = require('./Util');

var _State = require('./State');

function checkPropertiesEqual(action, lastAction) {
  for (var _iterator = Object.keys(action), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    if (['key', 'type', 'parent'].indexOf(key) === -1) {
      if (!(0, _lodash2.default)(action[key], lastAction[key]) && typeof action[key] !== 'function' && typeof lastAction[key] !== 'function') {
        return false;
      }
    }
  }
  return true;
}

function resetHistoryStack(state) {
  var newState = state;

  if (newState.children) {
    newState.index = 0;

    var i = void 0;
    for (i = 0; i < newState.children.length; i += 1) {
      var el = newState.children[i];

      if (el.initial) {
        newState.index = i;

        if (!newState.tabs) {
          newState.children = [resetHistoryStack(el)];
        } else {
          newState.children[i] = resetHistoryStack(el);
        }
      } else {
        newState.children[i] = resetHistoryStack(el);
      }
    }
  }
  return newState;
}

function refreshTopChild(children, refresh) {
  if (refresh) {
    var topChild = children[children.length - 1];
    return [].concat(babelHelpers.toConsumableArray(children.slice(0, -1)), [babelHelpers.extends({}, topChild, refresh)]);
  }
  return children;
}

function inject(state, action, props, scenes) {
  var condition = _Actions.ActionMap[action.type] === ActionConst.REFRESH ? state.key === props.key || state.sceneKey === action.key : state.sceneKey === props.parent;

  if (!condition) {
    if (state.children) {
      var res = state.children.map(function (el) {
        return inject(el, action, props, scenes);
      });
      var changed = false;
      var changedIndex = -1;
      for (var i = 0; i < res.length; i += 1) {
        if (res[i] !== state.children[i]) {
          changed = true;
          changedIndex = i;
          break;
        }
      }
      return changed ? babelHelpers.extends({}, state, { children: res, index: changedIndex }) : state;
    }
    return state;
  }
  var ind = void 0;

  switch (_Actions.ActionMap[action.type]) {
    case ActionConst.POP_TO:
      {
        var targetIndex = action.targetIndex;

        return babelHelpers.extends({}, state, {
          index: targetIndex,
          children: refreshTopChild(state.children.slice(0, targetIndex + 1), action.refresh)
        });
      }

    case ActionConst.BACK:
    case ActionConst.BACK_ACTION:
      {
        (0, _Util.assert)(!state.tabs, 'pop() operation cannot be run on tab bar (tabs=true)');

        if (state.index === 0) {
          return state;
        }

        var popNum = 1;
        if (action.popNum) {
          (0, _Util.assert)(typeof action.popNum === 'number', 'The data is the number of scenes you want to pop, it must be Number');
          popNum = action.popNum;
          (0, _Util.assert)(popNum % 1 === 0, 'The data is the number of scenes you want to pop, it must be integer.');
          (0, _Util.assert)(popNum > 1, 'The data is the number of scenes you want to pop, it must be bigger than 1.');
          (0, _Util.assert)(popNum <= state.index, 'The data is the number of scenes you want to pop, ' + "it must be smaller than scenes stack's length.");
        }

        return babelHelpers.extends({}, state, {
          index: state.index - popNum,
          from: state.children[state.children.length - popNum],
          children: refreshTopChild(state.children.slice(0, -1 * popNum), action.refresh)
        });
      }
    case ActionConst.ANDROID_BACK:
      {
        if (_reactNative.Platform.OS === 'android') {
          (0, _Util.assert)(state.index > 0, 'You are already in the root scene.');
        }

        return babelHelpers.extends({}, state, {
          index: state.index - 1,
          from: state.children[state.children.length - 1],
          children: refreshTopChild(state.children.slice(0, -1), action.refresh)
        });
      }

    case ActionConst.POP_AND_REPLACE:
      {
        (0, _Util.assert)(!state.tabs, 'pop() operation cannot be run on tab bar (tabs=true)');
        (0, _Util.assert)(state.index > 0, 'You are already in the root scene.');

        var _popNum = 1;
        if (action.popNum) {
          (0, _Util.assert)(typeof action.popNum === 'number', 'The data is the number of scenes you want to pop, it must be Number');
          _popNum = action.popNum;
          (0, _Util.assert)(_popNum % 1 === 0, 'The data is the number of scenes you want to pop, it must be integer.');
          (0, _Util.assert)(_popNum > 1, 'The data is the number of scenes you want to pop, it must be bigger than 1.');
          (0, _Util.assert)(_popNum <= state.index, 'The data is the number of scenes you want to pop, ' + "it must be smaller than scenes stack's length.");
        }

        state = babelHelpers.extends({}, state, {
          index: state.index - _popNum,
          from: state.children[state.children.length - _popNum],
          children: state.children.slice(0, -1 * _popNum)
        });

        if (state.children[state.index].sceneKey === action.key) {
          return state;
        }

        var newAction = babelHelpers.extends({
          duration: 0 }, action);
        delete newAction.popNum;

        var newProps = babelHelpers.extends({}, props);
        delete newProps.popNum;

        state.children[state.children.length - 1] = (0, _State.getInitialState)(newProps, scenes, state.index, newAction);

        return babelHelpers.extends({}, state, { children: state.children });
      }
    case ActionConst.REFRESH:
      return props.base ? babelHelpers.extends({
        navBar: state.navBar
      }, scenes.rootProps, props, {
        key: state.key,
        from: null
      }) : babelHelpers.extends({}, state, props, {
        key: state.key,
        from: null
      });
    case ActionConst.PUSH_OR_POP:
      ind = state.children.findIndex(function (el) {
        return el.sceneKey === action.key;
      });
      if (ind !== -1) {
        return babelHelpers.extends({}, state, {
          index: ind,
          from: state.children[state.index],
          children: refreshTopChild(state.children.slice(0, ind + 1), action.refresh)
        });
      }
      return babelHelpers.extends({}, state, {
        index: state.index + 1,
        from: null,
        children: [].concat(babelHelpers.toConsumableArray(state.children), [(0, _State.getInitialState)(props, scenes, state.index + 1, action)])
      });
    case ActionConst.PUSH:
      if (state.children[state.index].sceneKey === action.key && !props.clone && checkPropertiesEqual(action, state.children[state.index])) {
        return state;
      }
      return babelHelpers.extends({}, state, {
        index: state.index + 1,
        from: null,
        children: [].concat(babelHelpers.toConsumableArray(state.children), [(0, _State.getInitialState)(props, scenes, state.index + 1, action)])
      });
    case ActionConst.JUMP:
      {
        (0, _Util.assert)(state.tabs, 'Parent=' + state.key + ' is not tab bar, jump action is not valid');
        ind = -1;
        state.children.forEach(function (c, i) {
          if (c.sceneKey === action.key) {
            ind = i;
          }
        });
        (0, _Util.assert)(ind !== -1, 'Cannot find route with key=' + action.key + ' for parent=' + state.key);

        var activeChild = state.children[state.index];
        var incomingChild = state.children[ind];

        var incomingChildHadTabs = incomingChild.tabs;
        var incomingChildWasActive = incomingChild.children.length > 1;
        var activeChildIsIncomingChild = activeChild.sceneKey === action.key;
        if (incomingChildHadTabs || !incomingChildWasActive || activeChildIsIncomingChild) {
          state.children[ind] = (0, _State.getInitialState)(babelHelpers.extends({}, props), scenes, state.index, babelHelpers.extends({}, action, { parentIndex: state.children[ind].parentIndex }));
        }

        if (action.unmountScenes) {
          var rState = resetHistoryStack(state);
          return babelHelpers.extends({}, rState, { index: ind });
        }

        return babelHelpers.extends({}, state, { index: ind });
      }
    case ActionConst.REPLACE:
      if (state.children[state.index].sceneKey === action.key) {
        return state;
      }

      state.children[state.children.length - 1] = (0, _State.getInitialState)(props, scenes, state.index, action);

      return babelHelpers.extends({}, state, { children: state.children });
    case ActionConst.RESET:
      if (state.children[state.index].sceneKey === action.key) {
        return state;
      }

      state.children = state.children.splice(0, 1);
      state.children[0] = (0, _State.getInitialState)(props, scenes, 0, action);

      return babelHelpers.extends({}, state, {
        index: 0,
        from: null,
        children: state.children
      });
    default:
      return state;
  }
}

function findElement(state, key, type) {
  if (_Actions.ActionMap[type] === ActionConst.REFRESH && state.key === key || state.sceneKey === key) {
    return state;
  }
  if (state.children) {
    for (var _iterator2 = state.children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var child = _ref2;

      var current = findElement(child, key, type);
      if (current) return current;
    }
  }
  return null;
}

function getCurrent(state) {
  if (!state.children) {
    return state;
  }
  return getCurrent(state.children[state.index]);
}

function update(state, action) {
  var props = babelHelpers.extends({}, state.scenes[action.key], action);
  (0, _Util.assert)(props.parent, 'No parent is defined for route=' + action.key);
  return inject(state, action, props, state.scenes);
}

function reducer(_ref3) {
  var initialState = _ref3.initialState,
      scenes = _ref3.scenes;

  (0, _Util.assert)(initialState, 'initialState should not be null');
  (0, _Util.assert)(initialState.key, 'initialState.key should not be null');
  (0, _Util.assert)(scenes, 'scenes should not be null');
  return function (stateParam, actionParam) {
    var state = stateParam;
    var action = actionParam;
    state = state || babelHelpers.extends({}, initialState, { scenes: scenes });
    (0, _Util.assert)(action, 'action should be defined');
    (0, _Util.assert)(action.type, 'action type should be defined');
    (0, _Util.assert)(state.scenes, 'state.scenes is missed');

    if (action.key) {
      if (_Actions.ActionMap[action.type] === ActionConst.REFRESH) {
        var key = action.key;
        var child = findElement(state, key, action.type) || state.scenes[key];
        var sceneKey = child.sceneKey;
        if (child.base) {
          child = babelHelpers.extends({}, state.scenes[child.base], child);
          (0, _Util.assert)(state.scenes[child.base], 'No scene exists for base=' + child.base);
          key = state.scenes[child.base].key;
          sceneKey = state.scenes[child.base].sceneKey;
        }
        (0, _Util.assert)(child, 'missed child data for key=' + key);

        var evaluated = {};
        Object.keys(action).forEach(function (el) {
          if (typeof action[el] === 'function' && typeof child[el] !== 'undefined' && typeof child[el] !== typeof action[el]) {
            evaluated[el] = action[el](child[el], child);
          }
        });
        action = babelHelpers.extends({}, child, action, evaluated, { sceneKey: sceneKey, key: key });
      } else {
        var scene = state.scenes[action.key];
        (0, _Util.assert)(scene, 'missed route data for key=' + action.key);

        if (scene.clone) {
          action.parent = getCurrent(state).parent;
        }
      }
    } else {
      if (_Actions.ActionMap[action.type] === ActionConst.BACK_ACTION || _Actions.ActionMap[action.type] === ActionConst.BACK || _Actions.ActionMap[action.type] === ActionConst.ANDROID_BACK || _Actions.ActionMap[action.type] === ActionConst.POP_AND_REPLACE || _Actions.ActionMap[action.type] === ActionConst.REFRESH || _Actions.ActionMap[action.type] === ActionConst.POP_TO) {
        if (!action.key && !action.parent) {
          action = babelHelpers.extends({}, getCurrent(state), action);
        }
      }

      if (_Actions.ActionMap[action.type] === ActionConst.POP_TO) {
        var target = action.data || action.scene;
        (0, _Util.assert)(target, 'PopTo() must be called with a single argument: ' + 'either the scene name (string) or an object with within the scene property ' + 'carrying the target scene to pop to');

        var targetEl = findElement(state, target, action.type);
        (0, _Util.assert)(targetEl, 'Cannot find element name named ' + target + ' within current state');

        var parent = targetEl.sceneKey;
        var targetIndex = 0;

        if (!targetEl.children) {
          var targetParent = findElement(state, targetEl.parent, action.type);
          (0, _Util.assert)(targetParent, 'Cannot find parent for target ' + target);
          parent = targetParent.sceneKey;

          targetIndex = targetParent.children.indexOf(targetEl);
          (0, _Util.assert)(targetIndex > -1, target + ' does not belong to ' + targetParent.sceneKey);
        }

        action.parent = parent;
        action.targetIndex = targetIndex;
      }

      if (_Actions.ActionMap[action.type] === ActionConst.BACK_ACTION || _Actions.ActionMap[action.type] === ActionConst.BACK || _Actions.ActionMap[action.type] === ActionConst.ANDROID_BACK || _Actions.ActionMap[action.type] === ActionConst.POP_AND_REPLACE) {
        var _parent = action.parent || state.scenes[action.key].parent;
        var el = findElement(state, _parent, action.type);
        while (el.parent && (el.children.length <= 1 || el.tabs)) {
          el = findElement(state, el.parent, action.type);
          (0, _Util.assert)(el, 'Cannot find element for parent=' + el.parent + ' within current state');
        }
        action.parent = el.sceneKey;
      }
    }

    switch (_Actions.ActionMap[action.type]) {
      case ActionConst.BACK:
      case ActionConst.BACK_ACTION:
      case ActionConst.POP_AND_REPLACE:
      case ActionConst.POP_TO:
      case ActionConst.REFRESH:
      case ActionConst.PUSH:
      case ActionConst.PUSH_OR_POP:
      case ActionConst.JUMP:
      case ActionConst.REPLACE:
      case ActionConst.RESET:
      case ActionConst.ANDROID_BACK:
        return update(state, action);

      default:
        return state;

    }
  };
}

exports.default = reducer;