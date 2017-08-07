Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _class = function (_React$Component) {
  babelHelpers.inherits(_class, _React$Component);

  function _class() {
    babelHelpers.classCallCheck(this, _class);
    return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  babelHelpers.createClass(_class, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return _class;
}(_react2.default.Component);

_class.propTypes = {
  tabBarStyle: _reactNative.ViewPropTypes.style,
  tabBarSelectedItemStyle: _reactNative.ViewPropTypes.style,
  tabBarIconContainerStyle: _reactNative.ViewPropTypes.style,
  tabBarShadowStyle: _reactNative.ViewPropTypes.style,
  tabSceneStyle: _reactNative.ViewPropTypes.style,
  tabStyle: _reactNative.ViewPropTypes.style,
  tabTitleStyle: _reactNative.Text.propTypes.style,
  tabSelectedTitleStyle: _reactNative.Text.propTypes.style,
  tabTitle: _react.PropTypes.string
};
exports.default = _class;