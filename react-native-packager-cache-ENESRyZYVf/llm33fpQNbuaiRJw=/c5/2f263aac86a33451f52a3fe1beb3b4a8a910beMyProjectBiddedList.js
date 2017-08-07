Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeGiftedListview = require('react-native-gifted-listview');

var _reactNativeGiftedListview2 = babelHelpers.interopRequireDefault(_reactNativeGiftedListview);

var _reactNativeGiftedSpinner = require('react-native-gifted-spinner');

var _reactNativeGiftedSpinner2 = babelHelpers.interopRequireDefault(_reactNativeGiftedSpinner);

var _ProjectCardBid = require('./card/ProjectCardBid');

var _ProjectCardBid2 = babelHelpers.interopRequireDefault(_ProjectCardBid);

var MyProjectBiddedList = function (_Component) {
		babelHelpers.inherits(MyProjectBiddedList, _Component);

		function MyProjectBiddedList(props) {
				babelHelpers.classCallCheck(this, MyProjectBiddedList);

				var _this = babelHelpers.possibleConstructorReturn(this, (MyProjectBiddedList.__proto__ || Object.getPrototypeOf(MyProjectBiddedList)).call(this, props));

				_this.state = {};

				_this._renderRowView = _this._renderRowView.bind(_this);
				return _this;
		}

		babelHelpers.createClass(MyProjectBiddedList, [{
				key: '_onPress',
				value: function _onPress(data) {}
		}, {
				key: '_renderRowView',
				value: function _renderRowView(rowData) {
						return _react2.default.createElement(_ProjectCardBid2.default, { project: rowData
						});
				}
		}, {
				key: '_renderSeparatorView',
				value: function _renderSeparatorView() {
						return _react2.default.createElement(_reactNative.View, { style: styles.separator });
				}
		}, {
				key: '_renderEmptyView',
				value: function _renderEmptyView(refreshCallback) {
						return _react2.default.createElement(
								_reactNative.View,
								{ style: styles.defaultView },
								_react2.default.createElement(
										_reactNative.Text,
										{ style: styles.defaultViewTitle },
										'\u0422\u0430\u043D\u0434 \u043E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u0434\u0443\u0443\u0441\u0433\u0430\u0441\u0430\u043D \u0430\u0436\u0438\u043B \u0430\u043B\u0433\u0430 \u0431\u0430\u0439\u043D\u0430. \u0410\u043B\u0438\u0432\u0430\u0430\u0433 \u044D\u0445\u043B\u044D\u0445 \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0445\u044D\u0446\u04AF\u04AF \u0431\u0430\u0439\u0434\u0430\u0433.'
								),
								_react2.default.createElement(
										_reactNative.TouchableHighlight,
										{
												underlayColor: '#c8c7cc',
												onPress: refreshCallback
										},
										_react2.default.createElement(
												_reactNative.Text,
												null,
												'\u21BB'
										)
								)
						);
				}
		}, {
				key: '_renderPaginationWaitingView',
				value: function _renderPaginationWaitingView(paginateCallback) {
						return _react2.default.createElement(
								_reactNative.TouchableHighlight,
								{
										underlayColor: '#c8c7cc',
										onPress: paginateCallback,
										style: styles.paginationView
								},
								_react2.default.createElement(
										_reactNative.Text,
										{ style: [styles.actionsLabel, { fontSize: 13 }] },
										'\u0426\u0410\u0410\u0428'
								)
						);
				}
		}, {
				key: '_renderPaginationFetchigView',
				value: function _renderPaginationFetchigView() {
						return _react2.default.createElement(
								_reactNative.View,
								{ style: styles.paginationView },
								_react2.default.createElement(_reactNativeGiftedSpinner2.default, null)
						);
				}
		}, {
				key: '_renderPaginationAllLoadedView',
				value: function _renderPaginationAllLoadedView() {
						return _react2.default.createElement(_reactNative.View, null);
				}
		}, {
				key: 'render',
				value: function render() {
						return _react2.default.createElement(
								_reactNative.View,
								{ style: styles.container },
								_react2.default.createElement(_reactNativeGiftedListview2.default, {
										rowView: this._renderRowView,
										onFetch: this.props.onFetchMyProjectsBidded,
										initialListSize: 8,
										firstLoader: true,
										pagination: true,
										paginationFetchigView: this._renderPaginationFetchigView,
										paginationWaitingView: this._renderPaginationWaitingView,
										paginationAllLoadedView: this._renderPaginationAllLoadedView,
										refreshable: true,
										refreshableViewHeight: 50,
										refreshableDistance: 40,
										emptyView: this._renderEmptyView,
										renderSeparator: this._renderSeparatorView,
										refreshableTintColor: 'red'
								})
						);
				}
		}]);
		return MyProjectBiddedList;
}(_react.Component);

exports.default = MyProjectBiddedList;


var styles = _reactNative.StyleSheet.create({
		container: {
				flex: 1
		},

		separator: {
				height: 10,
				backgroundColor: 'transparent'
		}
});