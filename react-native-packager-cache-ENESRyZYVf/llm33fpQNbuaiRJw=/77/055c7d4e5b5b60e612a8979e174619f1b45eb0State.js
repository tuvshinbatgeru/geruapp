Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = getInitialState;

exports.default = function (scenes) {
  var rootRoute = Object.keys(scenes).find(function (route) {
    return {}.hasOwnProperty.call(scenes, route) && !scenes[route].parent;
  });

  return getInitialState(scenes[rootRoute], scenes);
};

var _Util = require('./Util');

var _ActionConst = require('./ActionConst');

var ActionConst = babelHelpers.interopRequireWildcard(_ActionConst);


function getStateFromScenes(route, scenes, props) {
  var getters = [];
  var result = {};
  var scene = route;
  while (scene) {
    if (scene.getInitialState) {
      getters.push(scene.getInitialState);
    }
    scene = scenes[scene.parent];
  }

  if (scenes.rootProps && scenes.rootProps.getInitialState) {
    getters.push(scenes.rootProps.getInitialState);
  }

  getters.reverse().forEach(function (fn) {
    result = babelHelpers.extends({}, result, fn(props));
  });

  return result;
}

function getSceneKey(parent, key, position, sceneKey) {
  return [parent, key, position, sceneKey].filter(function (v) {
    return typeof v !== 'undefined' && v !== null;
  }).join('_');
}

function getInitialState(route, scenes) {
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var parent = props.parent,
      key = props.key,
      style = props.style,
      type = props.type,
      parentProps = babelHelpers.objectWithoutProperties(props, ['parent', 'key', 'style', 'type']);

  if (!route.children) {
    return babelHelpers.extends({}, scenes.rootProps, route, {
      key: getSceneKey(parent, key, position, route.sceneKey)
    }, parentProps, getStateFromScenes(route, scenes, props));
  }
  var res = babelHelpers.extends({}, route, scenes.rootProps, parentProps);
  var index = 0;
  route.children.forEach(function (r, i) {
    (0, _Util.assert)(scenes[r], 'Empty scene for key=' + route.key);
    if (scenes[r].initial) {
      index = i;
    }
  });

  if (route.tabs) {
    res.children = route.children.map(function (r, i) {
      return getInitialState(scenes[r], scenes, i, babelHelpers.extends({}, props, { parentIndex: position }));
    });
    res.index = index;
  } else {
    res.children = [getInitialState(scenes[route.children[index]], scenes, 0, props)];
    res.index = 0;
  }

  if (route.type === ActionConst.JUMP) {
    res.children = res.children.map(function (child) {
      return babelHelpers.extends({}, props, child);
    });
  }

  res.key = position + '_' + res.key;
  return res;
}