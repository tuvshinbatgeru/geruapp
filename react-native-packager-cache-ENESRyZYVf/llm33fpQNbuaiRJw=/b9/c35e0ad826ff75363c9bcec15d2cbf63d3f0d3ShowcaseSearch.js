Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _ShowcaseActions = require('../ShowcaseActions');

var showcaseActions = babelHelpers.interopRequireWildcard(_ShowcaseActions);

var _ShowcaseSearchComponent = require('../components/ShowcaseSearchComponent');

var _ShowcaseSearchComponent2 = babelHelpers.interopRequireDefault(_ShowcaseSearchComponent);

function mapStateToProps(state) {
	return {
		searchByTag: state.showcase.searchByTag,
		recentlySearch: state.showcase.recentlySearch
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(showcaseActions, dispatch)
	};
}

var ShowcaseSearch = function (_Component) {
	babelHelpers.inherits(ShowcaseSearch, _Component);

	function ShowcaseSearch() {
		babelHelpers.classCallCheck(this, ShowcaseSearch);
		return babelHelpers.possibleConstructorReturn(this, (ShowcaseSearch.__proto__ || Object.getPrototypeOf(ShowcaseSearch)).apply(this, arguments));
	}

	babelHelpers.createClass(ShowcaseSearch, [{
		key: 'backAction',
		value: function backAction() {
			_reactNativeRouterFlux.Actions.pop();
		}
	}, {
		key: 'onChangeSearchValue',
		value: function onChangeSearchValue(text) {
			this.props.actions.onShowCaseSearchValueChanged(text);
		}
	}, {
		key: 'onSearchValueCleared',
		value: function onSearchValueCleared() {
			this.props.actions.onShowCaseSearchValueCleared();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(_ShowcaseSearchComponent2.default, { searchByTag: this.props.searchByTag,
				recentlySearch: this.props.recentlySearch,
				onBackAction: function onBackAction() {
					return _this2.backAction();
				},
				onSearchValueCleared: this.onSearchValueCleared.bind(this),
				onChangeSearchValue: this.onChangeSearchValue.bind(this) });
		}
	}]);
	return ShowcaseSearch;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShowcaseSearch);