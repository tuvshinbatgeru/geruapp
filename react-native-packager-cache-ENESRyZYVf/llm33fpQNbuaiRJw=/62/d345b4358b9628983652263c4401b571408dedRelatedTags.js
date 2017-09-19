Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _reactNativeLinearGradient = require('react-native-linear-gradient');

var _reactNativeLinearGradient2 = babelHelpers.interopRequireDefault(_reactNativeLinearGradient);

var RelatedTags = function (_Component) {
	babelHelpers.inherits(RelatedTags, _Component);

	function RelatedTags(props) {
		babelHelpers.classCallCheck(this, RelatedTags);
		return babelHelpers.possibleConstructorReturn(this, (RelatedTags.__proto__ || Object.getPrototypeOf(RelatedTags)).call(this, props));
	}

	babelHelpers.createClass(RelatedTags, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    suggestedTags = _props.suggestedTags,
			    display = _props.display;


			return _react2.default.createElement(
				_reactNative.View,
				{ style: [display ? styles.showContainer : styles.hideContainer, styles.container] },
				_react2.default.createElement(
					_reactNative.ScrollView,
					{ automaticallyAdjustContentInsets: false,
						horizontal: true,
						backfaceVisibility: false,
						showsHorizontalScrollIndicator: false },
					suggestedTags.get('tags').map(function (tag, i) {
						return _react2.default.createElement(
							_reactNative.TouchableOpacity,
							{ style: [styles.tagContainer, { marginLeft: i == 0 ? 15 : 5 }],
								onPress: function onPress() {
									return _this2.props.onSuggestedTagPressed(tag);
								}
							},
							_react2.default.createElement(
								_reactNative.Image,
								{ style: { width: null, height: null, flex: 1 },
									borderRadius: 5,
									source: { uri: "https://www.theknot.com/static/xo-fashion/wedding-dress-designer-cards/casablanca-bridal.jpg" }
								},
								_react2.default.createElement(
									_reactNativeLinearGradient2.default,
									{ style: { borderRadius: 5, flex: 1 },
										colors: ['rgba(255, 255, 255, 0.4)', 'rgba(52, 52, 52, 0.8)']
									},
									_react2.default.createElement(
										_reactNative.View,
										{ style: [_variables.layout.centerCenter, { flex: 1 }] },
										_react2.default.createElement(
											_reactNative.Text,
											{ style: { fontSize: 17, fontFamily: _variables.font.heavy, color: _variables2.default.BRAND_WHITE } },
											tag.name
										)
									)
								)
							)
						);
					})
				)
			);
		}
	}]);
	return RelatedTags;
}(_react.Component);

exports.default = RelatedTags;


RelatedTags.propTypes = {
	suggestedTags: _react.PropTypes.object,
	display: _react.PropTypes.bool
};

RelatedTags.defaultProps = {
	display: false
};

var styles = _reactNative.StyleSheet.create({
	container: {
		flexDirection: 'row',
		position: 'absolute',
		paddingVertical: 15,
		zIndex: 10,
		height: 100,
		backgroundColor: _variables2.default.BRAND_SUBCOLOR
	},

	showContainer: {
		top: -100
	},

	hideContainer: {
		top: 65
	},

	tagContainer: {
		borderRadius: 5,

		marginLeft: 5,
		marginRight: 5,

		width: 80
	},

	tagText: {
		color: _variables2.default.BRAND_WHITE,
		fontSize: 17,
		padding: 10,
		fontFamily: _variables.font.heavy
	}
});