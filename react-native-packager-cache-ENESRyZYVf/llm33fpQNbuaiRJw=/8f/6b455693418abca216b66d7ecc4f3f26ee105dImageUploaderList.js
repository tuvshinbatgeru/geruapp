Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _reactNativeCameraRollPicker = require('react-native-camera-roll-picker');

var _reactNativeCameraRollPicker2 = babelHelpers.interopRequireDefault(_reactNativeCameraRollPicker);

var ReadImageData = require('NativeModules').ReadImageData;


var box = 100;

var ImageUploaderList = function (_Component) {
	babelHelpers.inherits(ImageUploaderList, _Component);

	function ImageUploaderList(props) {
		babelHelpers.classCallCheck(this, ImageUploaderList);

		var _this = babelHelpers.possibleConstructorReturn(this, (ImageUploaderList.__proto__ || Object.getPrototypeOf(ImageUploaderList)).call(this, props));

		_this.state = {
			num: 0,
			selected: []
		};
		return _this;
	}

	babelHelpers.createClass(ImageUploaderList, [{
		key: 'getSelectedImages',
		value: function getSelectedImages(images, current) {
			var num = images.length;

			this.setState({
				num: num,
				selected: images
			});

			ReadImageData.readImage(images[0].uri, function (image) {
				alert(image);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.container },
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.content },
					_react2.default.createElement(
						_reactNative.Text,
						{ style: styles.text },
						_react2.default.createElement(
							_reactNative.Text,
							{ style: { fontFamily: _variables.font.heavy } },
							' ',
							this.state.num,
							' '
						),
						' images has been selected'
					)
				),
				_react2.default.createElement(_reactNativeCameraRollPicker2.default, {
					scrollRenderAheadDistance: 500,
					initialListSize: 1,
					pageSize: 3,
					removeClippedSubviews: false,
					groupTypes: 'SavedPhotos',
					batchSize: 5,
					maximum: 5,
					selected: this.state.selected,
					assetType: 'Photos',
					imagesPerRow: 3,
					imageMargin: 5,
					callback: this.getSelectedImages.bind(this) })
			);
		}
	}]);
	return ImageUploaderList;
}(_react.Component);

exports.default = ImageUploaderList;


var styles = _reactNative.StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		marginTop: 15,
		height: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	text: {
		fontSize: 15,
		alignItems: 'center',
		color: _variables2.default.BRAND_BLACK
	},

	bold: {
		fontFamily: _variables.font.bold
	},

	info: {
		fontSize: 11
	}
});