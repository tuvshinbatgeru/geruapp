Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var deprecatedPropType = require('react-native/Libraries/Utilities/deprecatedPropType.js');

var convertPoint = function convertPoint(name, point) {
  if (Array.isArray(point)) {
    console.warn('LinearGradient \'' + name + '\' property shoule be an object with fields \'x\' and \'y\', ' + 'Array type is deprecated.');
  }
  if (point !== null && typeof point === 'object') {
    return [point.x, point.y];
  }
  return point;
};

var LinearGradient = function (_Component) {
  babelHelpers.inherits(LinearGradient, _Component);

  function LinearGradient() {
    babelHelpers.classCallCheck(this, LinearGradient);
    return babelHelpers.possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
  }

  babelHelpers.createClass(LinearGradient, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.gradientRef.setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          colors = _props.colors,
          end = _props.end,
          locations = _props.locations,
          start = _props.start,
          style = _props.style,
          otherProps = babelHelpers.objectWithoutProperties(_props, ['children', 'colors', 'end', 'locations', 'start', 'style']);


      if (colors && locations && colors.length !== locations.length) {
        console.warn('LinearGradient colors and locations props should be arrays of the same length');
      }

      var flatStyle = _reactNative.StyleSheet.flatten(style) || {};
      var borderRadius = flatStyle.borderRadius || 0;

      var borderRadiiPerCorner = [flatStyle.borderTopLeftRadius || borderRadius, flatStyle.borderTopLeftRadius || borderRadius, flatStyle.borderTopRightRadius || borderRadius, flatStyle.borderTopRightRadius || borderRadius, flatStyle.borderBottomRightRadius || borderRadius, flatStyle.borderBottomRightRadius || borderRadius, flatStyle.borderBottomLeftRadius || borderRadius, flatStyle.borderBottomLeftRadius || borderRadius];

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({ ref: function ref(component) {
            _this2.gradientRef = component;
          } }, otherProps, { style: style }),
        _react2.default.createElement(NativeLinearGradient, {
          style: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
          colors: colors.map(_reactNative.processColor),
          start: convertPoint('start', start),
          end: convertPoint('end', end),
          locations: locations ? locations.slice(0, colors.length) : null,
          borderRadii: borderRadiiPerCorner
        }),
        children
      );
    }
  }]);
  return LinearGradient;
}(_react.Component);

LinearGradient.propTypes = babelHelpers.extends({
  start: _propTypes2.default.oneOfType([_reactNative.PointPropType, deprecatedPropType(_propTypes2.default.arrayOf(_propTypes2.default.number), 'Use point object with {x, y} instead.')]),
  end: _propTypes2.default.oneOfType([_reactNative.PointPropType, deprecatedPropType(_propTypes2.default.arrayOf(_propTypes2.default.number), 'Use point object with {x, y} instead.')]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  locations: _propTypes2.default.arrayOf(_propTypes2.default.number)
}, _reactNative.ViewPropTypes);
exports.default = LinearGradient;


var NativeLinearGradient = (0, _reactNative.requireNativeComponent)('BVLinearGradient', null);