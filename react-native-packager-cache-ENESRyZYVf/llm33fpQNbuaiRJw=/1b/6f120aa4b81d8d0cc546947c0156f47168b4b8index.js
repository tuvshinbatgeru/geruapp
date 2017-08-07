Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactTimerMixin = require('react-timer-mixin');

var _reactTimerMixin2 = babelHelpers.interopRequireDefault(_reactTimerMixin);

var _reactMixin = require('react-mixin');

var _reactMixin2 = babelHelpers.interopRequireDefault(_reactMixin);

var screen = _reactNative.Dimensions.get('window');

var AnimatedButton = function (_Component) {
	babelHelpers.inherits(AnimatedButton, _Component);

	function AnimatedButton(props) {
		babelHelpers.classCallCheck(this, AnimatedButton);

		var _this = babelHelpers.possibleConstructorReturn(this, (AnimatedButton.__proto__ || Object.getPrototypeOf(AnimatedButton)).call(this, props));

		_this.animatedValue = new _reactNative.Animated.Value(0);
		_this.animate = _this.animate.bind(_this);
		_this._renderLoading = _this._renderLoading.bind(_this);
		_this._renderContent = _this._renderContent.bind(_this);
		_this._timerDestroy = _this._timerDestroy.bind(_this);
		return _this;
	}

	babelHelpers.createClass(AnimatedButton, [{
		key: 'animate',
		value: function animate() {
			this.animatedValue.setValue(0);
			_reactNative.Animated.timing(this.animatedValue, {
				toValue: 1,
				duration: 200,
				easing: _reactNative.Easing.cubic
			}).start();
		}
	}, {
		key: '_timerDestroy',
		value: function _timerDestroy() {
			if (this.props.onLoadingComplete) this.props.onLoadingComplete();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this2 = this;

			if (nextProps.loading == true) {
				this.setTimeout(function () {
					return _this2._timerDestroy();
				}, 2000);
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (this.props.loading != nextProps.loading) {
				return true;
			}

			if (this.props.text != nextProps.text) {
				return true;
			}

			return false;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.animate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			this.animate();
		}
	}, {
		key: '_renderLoading',
		value: function _renderLoading() {
			return _react2.default.createElement(_reactNative.ActivityIndicator, { animating: true,
				color: '#fff',
				size: 40
			});
		}
	}, {
		key: '_renderContent',
		value: function _renderContent() {
			var _props = this.props,
			    text = _props.text,
			    iconable = _props.iconable,
			    icon = _props.icon,
			    iconColor = _props.iconColor;


			return _react2.default.createElement(
				_reactNative.View,
				null,
				iconable && _react2.default.createElement(_Ionicons2.default, { name: icon,
					size: 30,
					color: iconColor
				}),
				_react2.default.createElement(
					_reactNative.Text,
					{ style: [styles.btnText, this.props.textStyle] },
					text
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    disabled = _props2.disabled,
			    loading = _props2.loading;


			var widthTransaction = loading ? 60 : screen.width;

			var width = this.animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: [loading ? screen.width : 60, widthTransaction]
			});

			var opacity = this.animatedValue.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 1]
			});

			var borderRadius = loading ? 60 : 0;

			return _react2.default.createElement(
				_reactNative.TouchableOpacity,
				{ onPress: this.props.onPress,
					activeOpacity: 0.9,
					disabled: disabled,
					style: [styles.container, this.props.style] },
				_react2.default.createElement(
					_reactNative.Animated.View,
					{ style: [styles.btnContainer, {
							width: width,
							borderRadius: borderRadius,
							opacity: opacity
						}] },
					loading ? this._renderLoading() : this._renderContent()
				)
			);
		}
	}]);
	return AnimatedButton;
}(_react.Component);

exports.default = AnimatedButton;


AnimatedButton.propTypes = {
	text: _react.PropTypes.string.isRequired,
	iconable: _react.PropTypes.bool,
	icon: _react.PropTypes.string,
	iconColor: _react.PropTypes.string,
	disabled: _react.PropTypes.bool,
	loading: _react.PropTypes.bool
};

AnimatedButton.defaultProps = {
	iconable: false,
	disabled: false,
	loading: false
};

var styles = _reactNative.StyleSheet.create({
	container: {
		flexDirection: 'row',

		paddingHorizontal: 20,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 5
	},

	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#5fcf80',
		height: 60
	},

	btnText: {
		fontSize: 16,
		color: '#fff'
	}
});

(0, _reactMixin2.default)(AnimatedButton.prototype, _reactTimerMixin2.default);