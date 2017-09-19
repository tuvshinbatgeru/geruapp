Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressPie = undefined;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _Circle = require('./Shapes/Circle');

var _Circle2 = babelHelpers.interopRequireDefault(_Circle);

var _Sector = require('./Shapes/Sector');

var _Sector2 = babelHelpers.interopRequireDefault(_Sector);

var _withAnimation = require('./withAnimation');

var _withAnimation2 = babelHelpers.interopRequireDefault(_withAnimation);

var CIRCLE = Math.PI * 2;

var AnimatedSurface = _reactNative.Animated.createAnimatedComponent(_reactNative.ART.Surface);
var AnimatedSector = _reactNative.Animated.createAnimatedComponent(_Sector2.default);

var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  }
});

var ProgressPie = exports.ProgressPie = function (_Component) {
  babelHelpers.inherits(ProgressPie, _Component);

  function ProgressPie() {
    babelHelpers.classCallCheck(this, ProgressPie);
    return babelHelpers.possibleConstructorReturn(this, (ProgressPie.__proto__ || Object.getPrototypeOf(ProgressPie)).apply(this, arguments));
  }

  babelHelpers.createClass(ProgressPie, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          animated = _props.animated,
          borderColor = _props.borderColor,
          borderWidth = _props.borderWidth,
          children = _props.children,
          color = _props.color,
          progress = _props.progress,
          rotation = _props.rotation,
          size = _props.size,
          style = _props.style,
          unfilledColor = _props.unfilledColor,
          restProps = babelHelpers.objectWithoutProperties(_props, ['animated', 'borderColor', 'borderWidth', 'children', 'color', 'progress', 'rotation', 'size', 'style', 'unfilledColor']);


      var Surface = rotation ? AnimatedSurface : _reactNative.ART.Surface;
      var Shape = animated ? AnimatedSector : _Sector2.default;

      var angle = animated ? _reactNative.Animated.multiply(progress, CIRCLE) : progress * CIRCLE;
      var radius = size / 2 - borderWidth;
      var offset = {
        top: borderWidth,
        left: borderWidth
      };

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({ style: [styles.container, style] }, restProps),
        _react2.default.createElement(
          Surface,
          {
            width: size,
            height: size,
            style: rotation ? {
              transform: [{
                rotate: rotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg']
                })
              }]
            } : undefined
          },
          unfilledColor ? _react2.default.createElement(_Circle2.default, {
            radius: radius,
            offset: offset,
            fill: unfilledColor
          }) : false,
          _react2.default.createElement(Shape, {
            radius: radius,
            angle: angle,
            offset: offset,
            fill: color
          }),
          borderWidth ? _react2.default.createElement(_Circle2.default, {
            radius: size / 2,
            stroke: borderColor || color,
            strokeWidth: borderWidth
          }) : false
        ),
        children
      );
    }
  }]);
  return ProgressPie;
}(_react.Component);

ProgressPie.propTypes = {
  animated: _propTypes2.default.bool,
  borderColor: _propTypes2.default.string,
  borderWidth: _propTypes2.default.number,
  color: _propTypes2.default.string,
  children: _propTypes2.default.node,
  progress: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.instanceOf(_reactNative.Animated.Value)]),
  rotation: _propTypes2.default.instanceOf(_reactNative.Animated.Value),
  size: _propTypes2.default.number,
  style: _reactNative.View.propTypes.style,
  unfilledColor: _propTypes2.default.string
};
ProgressPie.defaultProps = {
  borderWidth: 1,
  color: 'rgba(0, 122, 255, 1)',
  progress: 0,
  size: 40
};
exports.default = (0, _withAnimation2.default)(ProgressPie, 0.2);