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

var _NewProjectComponent = require('../components/NewProjectComponent');

var _NewProjectComponent2 = babelHelpers.interopRequireDefault(_NewProjectComponent);

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

var NewProject = function (_Component) {
    babelHelpers.inherits(NewProject, _Component);

    function NewProject(props) {
        babelHelpers.classCallCheck(this, NewProject);

        var _this = babelHelpers.possibleConstructorReturn(this, (NewProject.__proto__ || Object.getPrototypeOf(NewProject)).call(this, props));

        _this.onFetchMyProjectsHistory = _this.onFetchMyProjectsHistory.bind(_this);
        return _this;
    }

    babelHelpers.createClass(NewProject, [{
        key: 'onFetchMyProjectsHistory',
        value: function onFetchMyProjectsHistory(page, callback, options) {
            callback();
        }
    }, {
        key: 'onBackAction',
        value: function onBackAction() {
            _reactNativeRouterFlux.Actions.pop();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_NewProjectComponent2.default, { project: this.props.project,
                onBackAction: this.onBackAction.bind(this),
                onFetchMyProjectsHistory: this.onFetchMyProjectsHistory
            });
        }
    }]);
    return NewProject;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewProject);