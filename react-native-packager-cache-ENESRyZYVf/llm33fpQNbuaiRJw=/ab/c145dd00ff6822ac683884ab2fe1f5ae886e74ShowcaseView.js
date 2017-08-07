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

var _ShowcaseListComponent = require('../components/ShowcaseListComponent');

var _ShowcaseListComponent2 = babelHelpers.interopRequireDefault(_ShowcaseListComponent);

function mapStateToProps(state) {
	return {
		showcase: state.showcase
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(showcaseActions, dispatch)
	};
}

var ShowcaseView = function (_Component) {
	babelHelpers.inherits(ShowcaseView, _Component);

	function ShowcaseView() {
		babelHelpers.classCallCheck(this, ShowcaseView);
		return babelHelpers.possibleConstructorReturn(this, (ShowcaseView.__proto__ || Object.getPrototypeOf(ShowcaseView)).apply(this, arguments));
	}

	babelHelpers.createClass(ShowcaseView, [{
		key: 'getPortfolios',
		value: function getPortfolios(pageIndex) {
			this.props.actions.getPortfolios(pageIndex);
		}
	}, {
		key: 'toggleSearchScene',
		value: function toggleSearchScene() {
			_reactNativeRouterFlux.Actions.ShowcaseSearch();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_ShowcaseListComponent2.default, { portfolios: this.props.showcase.portfolios,
				onGetPortfolios: this.getPortfolios.bind(this),
				onToggleSearchScene: this.toggleSearchScene.bind(this) });
		}
	}]);
	return ShowcaseView;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShowcaseView);