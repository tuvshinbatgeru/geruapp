Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactNative = require('react-native');

var NavBarIcon = function (_Component) {
  babelHelpers.inherits(NavBarIcon, _Component);

  function NavBarIcon() {
    babelHelpers.classCallCheck(this, NavBarIcon);
    return babelHelpers.possibleConstructorReturn(this, (NavBarIcon.__proto__ || Object.getPrototypeOf(NavBarIcon)).apply(this, arguments));
  }

  babelHelpers.createClass(NavBarIcon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { onPress: this.props.onPress, style: styles.container },
        _react2.default.createElement(_Ionicons2.default, {
          name: this.props.icon,
          size: this.props.size,
          color: this.props.color })
      );
    }
  }]);
  return NavBarIcon;
}(_react.Component);

exports.default = NavBarIcon;


var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 7,
    width: 50
  }
});

NavBarIcon.propTypes = {
  icon: _react.PropTypes.string.isRequired,
  color: _react.PropTypes.string
};