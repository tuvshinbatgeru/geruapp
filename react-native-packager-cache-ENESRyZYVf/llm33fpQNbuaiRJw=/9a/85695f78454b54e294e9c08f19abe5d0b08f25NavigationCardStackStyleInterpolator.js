
'use strict';

function forInitial(props) {
  var navigationState = props.navigationState,
      scene = props.scene;


  var focused = navigationState.index === scene.index;
  var opacity = focused ? 1 : 0;

  var translate = focused ? 0 : 1000000;
  return {
    opacity: opacity,
    transform: [{ translateX: translate }, { translateY: translate }]
  };
}

function forHorizontal(props) {
  var layout = props.layout,
      position = props.position,
      scene = props.scene;


  if (!layout.isMeasured) {
    return forInitial(props);
  }

  var index = scene.index;
  var inputRange = [index - 1, index, index + 1];
  var width = layout.initWidth;

  var opacity = position.interpolate({
    inputRange: inputRange,
    outputRange: [1, 1, 0.3]
  });

  var scale = position.interpolate({
    inputRange: inputRange,
    outputRange: [1, 1, 0.95]
  });

  var translateY = 0;
  var translateX = position.interpolate({
    inputRange: inputRange,
    outputRange: [width, 0, -10]
  });

  return {
    opacity: opacity,
    transform: [{ scale: scale }, { translateX: translateX }, { translateY: translateY }]
  };
}

function forVertical(props) {
  var layout = props.layout,
      position = props.position,
      scene = props.scene;


  if (!layout.isMeasured) {
    return forInitial(props);
  }

  var index = scene.index;
  var inputRange = [index - 1, index, index + 1];
  var height = layout.initHeight;

  var opacity = position.interpolate({
    inputRange: inputRange,
    outputRange: [1, 1, 0.3]
  });

  var scale = position.interpolate({
    inputRange: inputRange,
    outputRange: [1, 1, 0.95]
  });

  var translateX = 0;
  var translateY = position.interpolate({
    inputRange: inputRange,
    outputRange: [height, 0, -10]
  });

  return {
    opacity: opacity,
    transform: [{ scale: scale }, { translateX: translateX }, { translateY: translateY }]
  };
}

module.exports = {
  forHorizontal: forHorizontal,
  forVertical: forVertical
};