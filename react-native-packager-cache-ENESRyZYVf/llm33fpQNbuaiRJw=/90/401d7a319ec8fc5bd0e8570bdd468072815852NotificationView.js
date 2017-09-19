Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _NotificationHeaderComponent = require('../components/NotificationHeaderComponent');

var _NotificationHeaderComponent2 = babelHelpers.interopRequireDefault(_NotificationHeaderComponent);

var NotificationView = function (_Component) {
  babelHelpers.inherits(NotificationView, _Component);

  function NotificationView() {
    babelHelpers.classCallCheck(this, NotificationView);
    return babelHelpers.possibleConstructorReturn(this, (NotificationView.__proto__ || Object.getPrototypeOf(NotificationView)).apply(this, arguments));
  }

  babelHelpers.createClass(NotificationView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_NotificationHeaderComponent2.default, null);
    }
  }]);
  return NotificationView;
}(_react.Component);

exports.default = NotificationView;