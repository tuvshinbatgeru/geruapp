Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _RecentSearch = require('./RecentSearch');

var _RecentSearch2 = babelHelpers.interopRequireDefault(_RecentSearch);

var _SuggestedTags = require('./SuggestedTags');

var _SuggestedTags2 = babelHelpers.interopRequireDefault(_SuggestedTags);

var ShowcaseSearchComponent = function (_Component) {
	babelHelpers.inherits(ShowcaseSearchComponent, _Component);

	function ShowcaseSearchComponent(props) {
		babelHelpers.classCallCheck(this, ShowcaseSearchComponent);
		return babelHelpers.possibleConstructorReturn(this, (ShowcaseSearchComponent.__proto__ || Object.getPrototypeOf(ShowcaseSearchComponent)).call(this, props));
	}

	babelHelpers.createClass(ShowcaseSearchComponent, [{
		key: 'clearSearch',
		value: function clearSearch() {
			this.props.onSearchValueCleared();
		}
	}, {
		key: 'handleSearchText',
		value: function handleSearchText(text) {
			this.props.onChangeSearchValue(text);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    searchByTag = _props.searchByTag,
			    recentlySearch = _props.recentlySearch;

			var searchText = searchByTag.get('searchValue');

			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.container },
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.searchContainer },
					_react2.default.createElement(_reactNative.TextInput, { autoFocus: true,
						placeholder: 'Browse on projects',
						autoCorrect: false,
						placeholderTextColor: '#b5b5b5',
						selectionColor: '#efefef',
						underlineColorAndroid: '#fff',
						value: searchText,
						style: styles.searchText,
						onChangeText: this.handleSearchText.bind(this)
					}),
					_react2.default.createElement(
						_reactNative.TouchableOpacity,
						{ onPress: function onPress() {
								return _this2.clearSearch();
							} },
						_react2.default.createElement(_Ionicons2.default, { name: 'md-close-circle', size: 20, color: '#b5b5b5' })
					),
					_react2.default.createElement(
						_reactNative.TouchableOpacity,
						{ onPress: function onPress() {
								return _this2.props.onBackAction();
							}, style: { marginLeft: 3 } },
						_react2.default.createElement(
							_reactNative.Text,
							null,
							'Cancel'
						)
					)
				),
				searchText.trim().length == 0 ? _react2.default.createElement(_RecentSearch2.default, { recentlySearch: recentlySearch }) : _react2.default.createElement(_SuggestedTags2.default, { searchTag: searchText,
					fetching: searchByTag.get('fetching'),
					tags: searchByTag.get('searchResult'),
					onTagPressed: this.props.onTagPressed
				})
			);
		}
	}]);
	return ShowcaseSearchComponent;
}(_react.Component);

exports.default = ShowcaseSearchComponent;


var styles = _reactNative.StyleSheet.create({
	h4: {
		fontSize: 18,
		fontFamily: 'Lato-Bold'
	},

	h5: {
		fontSize: 15,
		color: '#b5b5b5'
	},

	container: {
		flex: 1,
		padding: 10
	},

	searchContainer: {
		height: 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	searchText: {
		flex: 1,
		backgroundColor: '#fff',
		borderWidth: 0,
		fontSize: 18,
		fontFamily: _variables2.default.FONT_HEAVY
	}
});

ShowcaseSearchComponent.propTypes = {
	onBackAction: _react.PropTypes.func,
	searchByTag: _react.PropTypes.object
};