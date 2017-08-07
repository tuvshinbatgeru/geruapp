Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeNavbar = require('react-native-navbar');

var _reactNativeNavbar2 = babelHelpers.interopRequireDefault(_reactNativeNavbar);

var _CustomIcon = require('./navbar/CustomIcon');

var _CustomIcon2 = babelHelpers.interopRequireDefault(_CustomIcon);

var _TaggableSearch = require('./navbar/TaggableSearch');

var _TaggableSearch2 = babelHelpers.interopRequireDefault(_TaggableSearch);

var _variables = require('../../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var SearchBar = function (_Component) {
	babelHelpers.inherits(SearchBar, _Component);

	function SearchBar() {
		babelHelpers.classCallCheck(this, SearchBar);
		return babelHelpers.possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
	}

	babelHelpers.createClass(SearchBar, [{
		key: 'toggleSearchScene',
		value: function toggleSearchScene() {
			this.props.onToggleSearchScene();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.container },
				_react2.default.createElement(_reactNativeNavbar2.default, {
					style: { height: 50 },
					title: _react2.default.createElement(_TaggableSearch2.default, { onSearchFired: this.toggleSearchScene.bind(this)
					}),
					leftButton: _react2.default.createElement(_CustomIcon2.default, {
						icon: 'ios-arrow-back-outline',
						size: 30,
						onPress: function onPress() {
							return _this2.props.onBackPressed();
						},
						color: '#b5b5b5'
					}),
					rightButton: _react2.default.createElement(_CustomIcon2.default, {
						icon: 'ios-funnel',
						size: 30,
						onPress: this.props.onForwardPressed,
						color: '#b5b5b5'
					})
				})
			);
		}
	}]);
	return SearchBar;
}(_react.Component);

exports.default = SearchBar;


SearchBar.propTypes = {
	onToggleSearchScene: _react.PropTypes.func
};

var styles = _reactNative.StyleSheet.create({
	container: {
		padding: 10,
		height: 70,
		backgroundColor: 'rgba(255,255,255, 0.7)'
	}
});