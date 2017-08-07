var React = require('react');
var ReactNative = require('react-native');
var TouchableNativeFeedback = ReactNative.TouchableNativeFeedback,
    View = ReactNative.View;


var Button = function Button(props) {
  return React.createElement(
    TouchableNativeFeedback,
    babelHelpers.extends({
      delayPressIn: 0,
      background: TouchableNativeFeedback.SelectableBackground() }, props),
    props.children
  );
};

module.exports = Button;