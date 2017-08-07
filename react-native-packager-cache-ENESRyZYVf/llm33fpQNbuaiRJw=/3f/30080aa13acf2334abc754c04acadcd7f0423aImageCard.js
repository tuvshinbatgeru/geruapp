Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRadialMenu = require('../react-native-radial-menu');

var _reactNativeRadialMenu2 = babelHelpers.interopRequireDefault(_reactNativeRadialMenu);

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var constHeight = 150;
var minRatio = 1.1;

var ImageCard = function (_Component) {
	babelHelpers.inherits(ImageCard, _Component);

	function ImageCard() {
		babelHelpers.classCallCheck(this, ImageCard);
		return babelHelpers.possibleConstructorReturn(this, (ImageCard.__proto__ || Object.getPrototypeOf(ImageCard)).apply(this, arguments));
	}

	babelHelpers.createClass(ImageCard, [{
		key: 'renderRoot',
		value: function renderRoot() {
			return _react2.default.createElement(
				_reactNative.View,
				{ style: [styles.item] },
				_react2.default.createElement(_Ionicons2.default, { name: 'ios-finger-print-outline', size: 30, color: _variables2.default.BRAND_SUBCOLOR1 })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    uri = _props.uri,
			    ratio = _props.ratio;


			return _react2.default.createElement(
				_reactNative.View,
				{ style: [styles.container, { width: constHeight / ratio }] },
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.imageContainer },
					_react2.default.createElement(_reactNative.Image, { source: { uri: uri },
						resizeMode: 'cover',
						style: [styles.cardImage] })
				),
				_react2.default.createElement(
					_reactNativeRadialMenu2.default,
					{ menuRadius: 80, style: styles.radialContainer,
						spreadAngle: 90 },
					this.renderRoot(),
					_react2.default.createElement(
						_reactNative.View,
						{ style: styles.item,
							onSelect: function onSelect() {} },
						_react2.default.createElement(_Ionicons2.default, { size: 30, name: 'ios-heart-outline', color: '#b5b5b5' })
					),
					_react2.default.createElement(
						_reactNative.View,
						{ style: styles.item,
							onSelect: function onSelect() {} },
						_react2.default.createElement(_Ionicons2.default, { size: 30, name: 'ios-radio-button-on-outline', color: '#b5b5b5' })
					)
				)
			);
		}
	}]);
	return ImageCard;
}(_react.Component);

exports.default = ImageCard;


var styles = _reactNative.StyleSheet.create({
	container: {
		padding: 5,
		height: constHeight
	},

	imageContainer: {
		flex: 1
	},

	cardImage: {
		flex: 1,
		width: null,
		height: null
	},

	radialContainer: {
		position: 'absolute',
		bottom: 10,
		right: 10
	},

	item: {
		height: 40,
		width: 40,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#efefef'
	}
});