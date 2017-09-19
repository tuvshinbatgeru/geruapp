
'use strict';

var Animated = require('react-native').Animated;
var React = require('react');

var PropTypes = require('prop-types');

var action = PropTypes.shape({
  type: PropTypes.string.isRequired
});

var animatedValue = PropTypes.instanceOf(Animated.Value);

var navigationState = PropTypes.shape({
  key: PropTypes.string.isRequired
});

var navigationParentState = PropTypes.shape({
  index: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(navigationState)
});

var layout = PropTypes.shape({
  height: animatedValue,
  initHeight: PropTypes.number.isRequired,
  initWidth: PropTypes.number.isRequired,
  isMeasured: PropTypes.bool.isRequired,
  width: animatedValue
});

var scene = PropTypes.shape({
  index: PropTypes.number.isRequired,
  isStale: PropTypes.bool.isRequired,
  key: PropTypes.string.isRequired,
  navigationState: navigationState
});

var SceneRendererProps = {
  layout: layout.isRequired,
  navigationState: navigationParentState.isRequired,
  onNavigate: PropTypes.func.isRequired,
  position: animatedValue.isRequired,
  scene: scene.isRequired,
  scenes: PropTypes.arrayOf(scene).isRequired
};

var SceneRenderer = PropTypes.shape(SceneRendererProps);

var panHandlers = PropTypes.shape({
  onMoveShouldSetResponder: PropTypes.func.isRequired,
  onMoveShouldSetResponderCapture: PropTypes.func.isRequired,
  onResponderEnd: PropTypes.func.isRequired,
  onResponderGrant: PropTypes.func.isRequired,
  onResponderMove: PropTypes.func.isRequired,
  onResponderReject: PropTypes.func.isRequired,
  onResponderRelease: PropTypes.func.isRequired,
  onResponderStart: PropTypes.func.isRequired,
  onResponderTerminate: PropTypes.func.isRequired,
  onResponderTerminationRequest: PropTypes.func.isRequired,
  onStartShouldSetResponder: PropTypes.func.isRequired,
  onStartShouldSetResponderCapture: PropTypes.func.isRequired
});

function extractSceneRendererProps(props) {
  return {
    layout: props.layout,
    navigationState: props.navigationState,
    onNavigate: props.onNavigate,
    position: props.position,
    scene: props.scene,
    scenes: props.scenes
  };
}

module.exports = {
  extractSceneRendererProps: extractSceneRendererProps,

  SceneRendererProps: SceneRendererProps,

  action: action,
  navigationParentState: navigationParentState,
  navigationState: navigationState,
  panHandlers: panHandlers,
  SceneRenderer: SceneRenderer
};