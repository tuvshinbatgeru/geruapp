Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var box = 100;

var ImageUploaderList = function (_Component) {
	babelHelpers.inherits(ImageUploaderList, _Component);

	function ImageUploaderList() {
		babelHelpers.classCallCheck(this, ImageUploaderList);
		return babelHelpers.possibleConstructorReturn(this, (ImageUploaderList.__proto__ || Object.getPrototypeOf(ImageUploaderList)).apply(this, arguments));
	}

	babelHelpers.createClass(ImageUploaderList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.container },
				_react2.default.createElement(_reactNative.View, { style: [styles.itemContainer] }),
				_react2.default.createElement(_reactNative.View, { style: [styles.itemContainer] }),
				_react2.default.createElement(_reactNative.View, { style: [styles.itemContainer] }),
				_react2.default.createElement(_reactNative.View, { style: [styles.itemContainer] })
			);
		}
	}]);
	return ImageUploaderList;
}(_react.Component);

exports.default = ImageUploaderList;


var styles = _reactNative.StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: 'wrap',
		padding: 5
	},

	itemContainer: {
		height: box,
		width: box,
		margin: 5,
		backgroundColor: 'red'
	}
});