Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var RecentSearch = function (_Component) {
	babelHelpers.inherits(RecentSearch, _Component);

	function RecentSearch() {
		babelHelpers.classCallCheck(this, RecentSearch);
		return babelHelpers.possibleConstructorReturn(this, (RecentSearch.__proto__ || Object.getPrototypeOf(RecentSearch)).apply(this, arguments));
	}

	babelHelpers.createClass(RecentSearch, [{
		key: 'render',
		value: function render() {
			var recentlySearch = this.props.recentlySearch;

			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.searchContainer },
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.headerContainer },
					_react2.default.createElement(
						_reactNative.Text,
						{ style: styles.header },
						'\u0421\u04AF\u04AF\u043B\u0434 \u0445\u0430\u0439\u0441\u0430\u043D'
					)
				),
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.resultContainer },
					recentlySearch.map(function (item, i) {
						return _react2.default.createElement(
							_reactNative.TouchableOpacity,
							null,
							_react2.default.createElement(
								_reactNative.Text,
								{ style: styles.tagText },
								item.search_string
							)
						);
					})
				)
			);
		}
	}]);
	return RecentSearch;
}(_react.Component);

exports.default = RecentSearch;


RecentSearch.propTypes = {
	recentlySearch: _react.PropTypes.array
};

var styles = _reactNative.StyleSheet.create({
	searchContainer: {
		flex: 1
	},

	headerContainer: {
		paddingBottom: 10,
		flexDirection: 'row'
	},

	resultContainer: {
		flex: 1
	},

	header: {
		fontSize: 14,
		fontFamily: _variables2.default.FONT_REGULAR
	},

	tagText: {
		fontSize: 18,
		fontFamily: _variables2.default.FONT_HEAVY
	}
});