Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var NotificationHeaderComponent = _react2.default.createClass({
  displayName: 'NotificationHeaderComponent',
  render: function render() {
    return _react2.default.createElement(
      _reactNative.Text,
      null,
      '\u041C\u044D\u0434\u044D\u0433\u0434\u044D\u043B\u04AF\u04AF\u0434'
    );
  }
});

var styles = _reactNative.StyleSheet.create({
  badge: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 0,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)'
  }
});

exports.default = NotificationHeaderComponent;