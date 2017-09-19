
'use strict';

var invariant = require('fbjs/lib/invariant');

var SCENE_KEY_PREFIX = 'scene_';

function compareKey(one, two) {
  var delta = one.length - two.length;
  if (delta > 0) {
    return 1;
  }
  if (delta < 0) {
    return -1;
  }
  return one > two ? 1 : -1;
}

function compareScenes(one, two) {
  if (one.index > two.index) {
    return 1;
  }
  if (one.index < two.index) {
    return -1;
  }

  return compareKey(one.key, two.key);
}

function areScenesShallowEqual(one, two) {
  return one.key === two.key && one.index === two.index && one.isStale === two.isStale && one.navigationState === two.navigationState && one.navigationState.key === two.navigationState.key;
}

function NavigationScenesReducer(scenes, nextState, prevState) {

  var prevScenes = new Map();
  var freshScenes = new Map();
  var staleScenes = new Map();

  scenes.forEach(function (scene) {
    var key = scene.key;

    if (scene.isStale) {
      staleScenes.set(key, scene);
    }
    prevScenes.set(key, scene);
  });

  var nextKeys = new Set();
  nextState.children.forEach(function (navigationState, index) {
    var key = SCENE_KEY_PREFIX + navigationState.key;
    var scene = {
      index: index,
      isStale: false,
      key: key,
      navigationState: navigationState
    };
    invariant(!nextKeys.has(key), 'navigationState.children[' + index + '].key "' + key + '" conflicts with' + 'another child!');
    nextKeys.add(key);

    if (staleScenes.has(key)) {
      staleScenes.delete(key);
    }
    freshScenes.set(key, scene);
  });

  if (prevState) {
    prevState.children.forEach(function (navigationState, index) {
      var key = SCENE_KEY_PREFIX + navigationState.key;
      if (freshScenes.has(key)) {
        return;
      }
      staleScenes.set(key, {
        index: index,
        isStale: true,
        key: key,
        navigationState: navigationState
      });
    });
  }

  var nextScenes = [];

  var mergeScene = function mergeScene(nextScene) {
    var key = nextScene.key;

    var prevScene = prevScenes.has(key) ? prevScenes.get(key) : null;
    if (prevScene && areScenesShallowEqual(prevScene, nextScene)) {
      nextScenes.push(prevScene);
    } else {
      nextScenes.push(nextScene);
    }
  };

  staleScenes.forEach(mergeScene);
  freshScenes.forEach(mergeScene);

  return nextScenes.sort(compareScenes);
}

module.exports = NavigationScenesReducer;