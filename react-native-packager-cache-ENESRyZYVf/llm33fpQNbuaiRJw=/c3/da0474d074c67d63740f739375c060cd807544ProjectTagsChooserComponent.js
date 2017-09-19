Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _ProjectActions = require('../ProjectActions');

var projectActions = babelHelpers.interopRequireWildcard(_ProjectActions);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactNative = require('react-native');

var _reactNativeNavbar = require('react-native-navbar');

var _reactNativeNavbar2 = babelHelpers.interopRequireDefault(_reactNativeNavbar);

var _CustomIcon = require('../../components/react-native-taggable-search/lib/navbar/CustomIcon');

var _CustomIcon2 = babelHelpers.interopRequireDefault(_CustomIcon);

var _TagsList = require('../../showcase/components/TagsList');

var _TagsList2 = babelHelpers.interopRequireDefault(_TagsList);

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _NavBarIconText = require('../../components/NavBarIconText');

var _NavBarIconText2 = babelHelpers.interopRequireDefault(_NavBarIconText);

function mapDispatchToProps(dispatch) {
	return {
		actions: (0, _redux.bindActionCreators)(projectActions, dispatch)
	};
}

var ProjectTagsChooserComponent = function (_Component) {
	babelHelpers.inherits(ProjectTagsChooserComponent, _Component);

	function ProjectTagsChooserComponent() {
		babelHelpers.classCallCheck(this, ProjectTagsChooserComponent);
		return babelHelpers.possibleConstructorReturn(this, (ProjectTagsChooserComponent.__proto__ || Object.getPrototypeOf(ProjectTagsChooserComponent)).apply(this, arguments));
	}

	babelHelpers.createClass(ProjectTagsChooserComponent, [{
		key: 'onTagSelected',
		value: function onTagSelected(tag) {
			this.props.actions.tagSelected(tag);
			this.props.onTagToggled();
		}
	}, {
		key: 'onTagDiselect',
		value: function onTagDiselect(tag) {
			if (tag.type == 'N') {
				this.props.actions.tagRemove();
			} else {
				this.props.actions.tagDiselect(tag);
			}

			this.props.onTagToggled();
		}
	}, {
		key: 'render',
		value: function render() {
			var tags = this.props.tags;

			return _react2.default.createElement(
				_reactNative.View,
				{ style: styles.container },
				_react2.default.createElement(_reactNativeNavbar2.default, {
					leftButton: _react2.default.createElement(_NavBarIconText2.default, { icon: 'ios-arrow-back-outline',
						size: 30,
						color: '#b5b5b5',
						text: 'cancel',
						position: 'back',
						onPress: this.props.onBackAction
					}),
					rightButton: _react2.default.createElement(_NavBarIconText2.default, { icon: 'ios-arrow-forward-outline',
						size: 30,
						color: '#b5b5b5',
						text: 'next',
						onPress: this.props.onNavigateNext
					})
				}),
				_react2.default.createElement(
					_reactNative.View,
					{ style: styles.questionContainer },
					_react2.default.createElement(
						_reactNative.Text,
						{ style: styles.question },
						'Would you like us to make something for you?'
					)
				),
				_react2.default.createElement(_TagsList2.default, { tags: tags,
					onTagSelected: this.onTagSelected.bind(this),
					onTagDiselect: this.onTagDiselect.bind(this) })
			);
		}
	}]);
	return ProjectTagsChooserComponent;
}(_react.Component);

ProjectTagsChooserComponent.propTypes = {
	tags: _react.PropTypes.object
};

var styles = _reactNative.StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},

	question: {
		fontSize: 24,
		fontFamily: _variables2.default.FONT_HEAVY,
		justifyContent: 'center',
		alignItems: 'center'
	},

	questionContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 25,
		paddingHorizontal: 15
	}
});

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ProjectTagsChooserComponent);