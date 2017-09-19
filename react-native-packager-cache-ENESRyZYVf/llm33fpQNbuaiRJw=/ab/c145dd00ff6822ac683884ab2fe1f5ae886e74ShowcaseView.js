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

	function ShowcaseView(props) {
		babelHelpers.classCallCheck(this, ShowcaseView);

		var _this = babelHelpers.possibleConstructorReturn(this, (ShowcaseView.__proto__ || Object.getPrototypeOf(ShowcaseView)).call(this, props));

		_this.onSuggestedTagPressed = _this.onSuggestedTagPressed.bind(_this);
		return _this;
	}

	babelHelpers.createClass(ShowcaseView, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.actions.getShowcaseSuggestedTags('hat');
		}
	}, {
		key: 'onSuggestedTagPressed',
		value: function onSuggestedTagPressed(tag) {
			var _this2 = this;

			Promise.resolve(this.props.actions.setTagAutocomplete(tag.name)).then(function (res) {
				var showcase = _this2.props.showcase;


				_this2.props.actions.getShowcaseSuggestedTags(tag.name);
				_this2.props.actions.getPortfolios(showcase.get('tags'), 1);
			});
		}
	}, {
		key: 'getPortfolios',
		value: function getPortfolios(pageIndex) {
			var showcase = this.props.showcase;


			this.props.actions.getPortfolios(showcase.get('tags'), pageIndex);
		}
	}, {
		key: 'toggleSearchScene',
		value: function toggleSearchScene() {
			_reactNativeRouterFlux.Actions.ShowcaseSearch();
		}
	}, {
		key: 'render',
		value: function render() {
			var showcase = this.props.showcase;


			return _react2.default.createElement(_ShowcaseListComponent2.default, { portfolios: this.props.showcase.portfolios,
				tags: showcase.get('tags'),
				suggestedTags: showcase.get('suggestedTags'),
				onGetPortfolios: this.getPortfolios.bind(this),
				onToggleSearchScene: this.toggleSearchScene.bind(this),
				onSuggestedTagPressed: this.onSuggestedTagPressed
			});
		}
	}]);
	return ShowcaseView;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ShowcaseView);