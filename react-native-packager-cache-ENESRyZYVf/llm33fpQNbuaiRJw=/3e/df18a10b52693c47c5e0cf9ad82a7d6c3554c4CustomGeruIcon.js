Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeVectorIcons = require('react-native-vector-icons');

var _selection = require('../brand/selection.json');

var _selection2 = babelHelpers.interopRequireDefault(_selection);

var IconSet = (0, _reactNativeVectorIcons.createIconSetFromIcoMoon)(_selection2.default);

var defaultIconColor = '#b5b5b5';
var defaultIconSize = 20;

var CustomGeruIcon = function (_Component) {
  babelHelpers.inherits(CustomGeruIcon, _Component);

  function CustomGeruIcon() {
    babelHelpers.classCallCheck(this, CustomGeruIcon);
    return babelHelpers.possibleConstructorReturn(this, (CustomGeruIcon.__proto__ || Object.getPrototypeOf(CustomGeruIcon)).apply(this, arguments));
  }

  babelHelpers.createClass(CustomGeruIcon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        { onPress: this.props.onPress, style: styles.container },
        _react2.default.createElement(IconSet, { name: this.props.icon,
          size: this.props.size,
          color: this.props.color
        })
      );
    }
  }]);
  return CustomGeruIcon;
}(_react.Component);

exports.default = CustomGeruIcon;


var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 7,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

CustomGeruIcon.propTypes = {
  icon: _react.PropTypes.string.isRequired,
  color: _react.PropTypes.string,
  size: _react.PropTypes.number
};

CustomGeruIcon.defaultProps = {
  color: defaultIconColor,
  size: defaultIconSize
};