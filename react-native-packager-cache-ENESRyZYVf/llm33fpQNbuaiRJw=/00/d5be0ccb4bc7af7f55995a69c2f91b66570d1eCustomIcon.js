Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactNative = require('react-native');

var defaultIconColor = '#b5b5b5';
var defaultIconSize = 20;

var CustomIcon = function (_Component) {
  babelHelpers.inherits(CustomIcon, _Component);

  function CustomIcon() {
    babelHelpers.classCallCheck(this, CustomIcon);
    return babelHelpers.possibleConstructorReturn(this, (CustomIcon.__proto__ || Object.getPrototypeOf(CustomIcon)).apply(this, arguments));
  }

  babelHelpers.createClass(CustomIcon, [{
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
  return CustomIcon;
}(_react.Component);

exports.default = CustomIcon;


var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 7,
    width: 50
  }
});

CustomIcon.propTypes = {
  icon: _react.PropTypes.string.isRequired,
  color: _react.PropTypes.string,
  size: _react.PropTypes.number
};

CustomIcon.defaultProps = {
  color: defaultIconColor,
  size: defaultIconSize
};