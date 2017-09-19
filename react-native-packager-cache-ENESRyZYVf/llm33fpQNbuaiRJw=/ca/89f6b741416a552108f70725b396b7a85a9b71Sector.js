Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var CIRCLE = Math.PI * 2;

function makeSectorPath(x, y, angle, radius) {
  if (angle >= CIRCLE) {
    return _reactNative.ART.Path().moveTo(x, y).move(radius, 0).arc(0, radius * 2, radius, radius).arc(0, radius * -2, radius, radius).close();
  }

  var startAngle = Math.PI / 2 - angle;
  var endAngle = Math.PI / 2;
  var arcFlag = angle > Math.PI ? 1 : 0;
  var centerX = x + radius;
  var centerY = y + radius;

  return 'M' + centerX + ' ' + centerY + '\n          L' + (centerX + Math.cos(startAngle) * radius) + ' ' + (centerY - Math.sin(startAngle) * radius) + '\n          A' + radius + ' ' + radius + ' 0 ' + arcFlag + ' 0 ' + (centerX + Math.cos(endAngle) * radius) + ' ' + (centerY - Math.sin(endAngle) * radius) + '\n          L' + centerX + ' ' + centerY;
}

var Sector = function (_Component) {
  babelHelpers.inherits(Sector, _Component);

  function Sector() {
    babelHelpers.classCallCheck(this, Sector);
    return babelHelpers.possibleConstructorReturn(this, (Sector.__proto__ || Object.getPrototypeOf(Sector)).apply(this, arguments));
  }

  babelHelpers.createClass(Sector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          angle = _props.angle,
          radius = _props.radius,
          offset = _props.offset,
          restProps = babelHelpers.objectWithoutProperties(_props, ['angle', 'radius', 'offset']);

      var path = makeSectorPath(offset.left || 0, offset.top || 0, angle, radius);
      return _react2.default.createElement(_reactNative.ART.Shape, babelHelpers.extends({ d: path }, restProps));
    }
  }]);
  return Sector;
}(_react.Component);

Sector.propTypes = {
  angle: _propTypes2.default.number.isRequired,
  radius: _propTypes2.default.number.isRequired,
  offset: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    left: _propTypes2.default.number
  })
};
Sector.defaultProps = {
  offset: { top: 0, left: 0 }
};
exports.default = Sector;