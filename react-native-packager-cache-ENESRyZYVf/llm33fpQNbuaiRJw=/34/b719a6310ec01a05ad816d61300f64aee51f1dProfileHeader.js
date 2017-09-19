Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactNativeVectorIcons = require('react-native-vector-icons');

var _selection = require('../../brand/selection.json');

var _selection2 = babelHelpers.interopRequireDefault(_selection);

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _MyBookmarkedProjects = require('./MyBookmarkedProjects');

var _MyBookmarkedProjects2 = babelHelpers.interopRequireDefault(_MyBookmarkedProjects);

var IconSet = (0, _reactNativeVectorIcons.createIconSetFromIcoMoon)(_selection2.default);

var ProfileHeader = function (_Component) {
	babelHelpers.inherits(ProfileHeader, _Component);

	function ProfileHeader() {
		babelHelpers.classCallCheck(this, ProfileHeader);
		return babelHelpers.possibleConstructorReturn(this, (ProfileHeader.__proto__ || Object.getPrototypeOf(ProfileHeader)).apply(this, arguments));
	}

	babelHelpers.createClass(ProfileHeader, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    user = _props.user,
			    lastBookmarks = _props.lastBookmarks;


			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.container },
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.backContainer },
					_react2.default.createElement(
						_reactNative.View,
						{ style: styles.nameAvatarContainer },
						_react2.default.createElement(_reactNative.Image, {
							style: styles.avatar,
							source: { uri: user.get('avatar_url') }
						}),
						_react2.default.createElement(
							_reactNative.Text,
							{ style: styles.name },
							user.get('first_name'),
							' ',
							user.get('last_name')
						)
					),
					_react2.default.createElement(
						_reactNative.View,
						{ style: styles.itcBidsContainer },
						_react2.default.createElement(_MyBookmarkedProjects2.default, { lastBookmarks: lastBookmarks,
							onBookmarkDetailPressed: this.props.onBookmarkDetailPressed
						})
					),
					_react2.default.createElement(
						_reactNative.View,
						{ style: { paddingHorizontal: 20, paddingVertical: 10 } },
						_react2.default.createElement(
							_reactNative.View,
							{ style: { paddingVertical: 3 } },
							_react2.default.createElement(
								_reactNative.Text,
								{ style: [_variables.layout.h2] },
								'Payment method'
							)
						),
						_react2.default.createElement(
							_reactNative.View,
							{ style: [_variables.layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopWidth: 1, borderTopColor: '#efefef' }] },
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { padding: 3 }] },
								_react2.default.createElement(_Ionicons2.default, { name: 'md-settings',
									size: 24,
									color: _variables2.default.BRAND_GREEN
								})
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.row, _variables.layout.centerBetween, { flex: 1, paddingLeft: 10 }] },
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2] },
									'5550 **** **** ****'
								),
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2, { color: '#b5b5b5' }] },
									'Verified'
								)
							),
							_react2.default.createElement(_reactNative.View, { style: [_variables.layout.centerCenter, { paddingHorizontal: 7 }] })
						)
					),
					_react2.default.createElement(
						_reactNative.View,
						{ style: { paddingHorizontal: 20, paddingVertical: 10 } },
						_react2.default.createElement(
							_reactNative.View,
							{ style: { paddingVertical: 3 } },
							_react2.default.createElement(
								_reactNative.Text,
								{ style: [_variables.layout.h2] },
								'Agreements'
							)
						),
						_react2.default.createElement(
							_reactNative.View,
							{ style: [_variables.layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopWidth: 1, borderTopColor: '#efefef' }] },
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { padding: 3 }] },
								_react2.default.createElement(IconSet, { name: 'security',
									size: 24,
									color: _variables2.default.BRAND_RED
								})
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.row, _variables.layout.centerBetween, { flex: 1, paddingLeft: 10 }] },
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2] },
									'Privacy'
								)
							)
						),
						_react2.default.createElement(
							_reactNative.View,
							{ style: [_variables.layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef' }] },
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { padding: 3 }] },
								_react2.default.createElement(IconSet, { name: 'security',
									size: 24,
									color: _variables2.default.BRAND_RED
								})
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.row, _variables.layout.centerBetween, { flex: 1, paddingLeft: 10 }] },
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2] },
									'Terms and conditions'
								)
							),
							_react2.default.createElement(_reactNative.View, { style: [_variables.layout.centerCenter, { paddingHorizontal: 7 }] })
						)
					),
					_react2.default.createElement(
						_reactNative.TouchableOpacity,
						{ style: { paddingHorizontal: 20, paddingVertical: 10 } },
						_react2.default.createElement(
							_reactNative.View,
							{ style: { paddingVertical: 3 } },
							_react2.default.createElement(
								_reactNative.Text,
								{ style: [_variables.layout.h2] },
								'Integrations'
							)
						),
						_react2.default.createElement(
							_reactNative.View,
							{ style: [_variables.layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopWidth: 1, borderTopColor: '#efefef' }] },
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { padding: 3 }] },
								_react2.default.createElement(IconSet, { name: 'facebook',
									size: 24,
									color: "#3b5998"
								})
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.row, _variables.layout.centerBetween, { flex: 1, paddingLeft: 10 }] },
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2] },
									'Facebook'
								),
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2, { color: '#b5b5b5' }] },
									'Connected'
								)
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { paddingHorizontal: 7 }] },
								_react2.default.createElement(_Ionicons2.default, { name: 'md-checkmark',
									size: 24,
									color: _variables2.default.BRAND_GREEN
								})
							)
						),
						_react2.default.createElement(
							_reactNative.View,
							{ style: [_variables.layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef' }] },
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { padding: 3 }] },
								_react2.default.createElement(IconSet, { name: 'twitter',
									size: 24,
									color: "#00aced"
								})
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.row, _variables.layout.centerBetween, { flex: 1, paddingLeft: 10 }] },
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2] },
									'Twitter'
								),
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2, { color: '#b5b5b5' }] },
									'Not Connected'
								)
							),
							_react2.default.createElement(_reactNative.View, { style: [_variables.layout.centerCenter, { paddingHorizontal: 7 }] })
						)
					),
					_react2.default.createElement(
						_reactNative.TouchableOpacity,
						{ style: { paddingHorizontal: 20 } },
						_react2.default.createElement(
							_reactNative.View,
							{ style: [_variables.layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef' }] },
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.centerCenter, { padding: 3 }] },
								_react2.default.createElement(IconSet, { name: 'logout',
									size: 24,
									color: _variables2.default.BRAND_RED
								})
							),
							_react2.default.createElement(
								_reactNative.View,
								{ style: [_variables.layout.row, _variables.layout.centerBetween, { flex: 1, paddingLeft: 10 }] },
								_react2.default.createElement(
									_reactNative.Text,
									{ style: [_variables.layout.h2] },
									'Logout'
								)
							),
							_react2.default.createElement(_reactNative.View, { style: [_variables.layout.centerCenter, { paddingHorizontal: 7 }] })
						)
					)
				)
			);
		}
	}]);
	return ProfileHeader;
}(_react.Component);

exports.default = ProfileHeader;


var styles = _reactNative.StyleSheet.create({
	h4: {
		fontSize: 18,
		fontFamily: 'Lato-Heavy',
		color: _variables2.default.BRAND_BLACK
	},

	h5: {
		fontSize: 14,
		color: '#b5b5b5',
		fontFamily: _variables.font.regular
	},

	container: {},

	backContainer: {
		borderRadius: 10
	},

	nameAvatarContainer: {
		height: 120,
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},

	infoContainer: {
		flex: 5,
		flexDirection: 'row',
		padding: 10
	},

	itemContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
		marginRight: 3,
		marginLeft: 3
	},

	avatar: {
		height: 80,
		width: 80,
		borderRadius: 80
	},

	itcBidsContainer: {},

	bidsCount: {
		marginLeft: 10
	},

	name: {
		fontFamily: _variables.font.heavy,
		color: _variables2.default.BRAND_BLACK,
		fontSize: 24,
		marginLeft: 20,
		flex: 1
	}
});

ProfileHeader.propTypes = {
	user: _react.PropTypes.object,

	onGPNavigation: _react.PropTypes.func,
	onBidNavigation: _react.PropTypes.func,
	onPortfolioNavigation: _react.PropTypes.func
};