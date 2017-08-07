Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactNative = require('react-native');

var NavBarSearch = function (_Component) {
  babelHelpers.inherits(NavBarSearch, _Component);

  function NavBarSearch() {
    babelHelpers.classCallCheck(this, NavBarSearch);
    return babelHelpers.possibleConstructorReturn(this, (NavBarSearch.__proto__ || Object.getPrototypeOf(NavBarSearch)).apply(this, arguments));
  }

  babelHelpers.createClass(NavBarSearch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flexDirection: 'row' } },
        _react2.default.createElement(_reactNative.TextInput, null)
      );
    }
  }]);
  return NavBarSearch;
}(_react.Component);

exports.default = NavBarSearch;


var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 7,
    width: 50
  }
});

NavBarSearch.propTypes = {};