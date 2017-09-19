Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _ProjectActions = require('../ProjectActions');

var projectActions = babelHelpers.interopRequireWildcard(_ProjectActions);

var _ProjectTagsChooserComponent = require('../components/ProjectTagsChooserComponent');

var _ProjectTagsChooserComponent2 = babelHelpers.interopRequireDefault(_ProjectTagsChooserComponent);

function mapStateToProps(state) {
    return {
        project: state.newProjectState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(projectActions, dispatch)
    };
}

var ProjectTagsChooser = function (_Component) {
    babelHelpers.inherits(ProjectTagsChooser, _Component);

    function ProjectTagsChooser() {
        babelHelpers.classCallCheck(this, ProjectTagsChooser);
        return babelHelpers.possibleConstructorReturn(this, (ProjectTagsChooser.__proto__ || Object.getPrototypeOf(ProjectTagsChooser)).apply(this, arguments));
    }

    babelHelpers.createClass(ProjectTagsChooser, [{
        key: 'onNavigateNext',
        value: function onNavigateNext() {
            _reactNativeRouterFlux.Actions.NewProject();
        }
    }, {
        key: 'onBackAction',
        value: function onBackAction() {
            _reactNativeRouterFlux.Actions.pop();
        }
    }, {
        key: 'getTags',
        value: function getTags() {
            var arrayList = '';
            if (this.props.project.getIn(['tags', 'selected']).length > 0) {
                arrayList = this.props.project.getIn(['tags', 'selected']).map(function (item) {
                    return String(item['_id']);
                });
            }

            this.props.actions.getTags('', arrayList, this.props.project.getIn(['tags', 'selected']).length > 0 ? 'a' : 'n');
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getTags();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_ProjectTagsChooserComponent2.default, { onNavigateNext: this.onNavigateNext.bind(this),
                tags: this.props.project.get('tags'),
                onBackAction: this.onBackAction.bind(this),
                onTagToggled: this.getTags.bind(this) });
        }
    }]);
    return ProjectTagsChooser;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectTagsChooser);