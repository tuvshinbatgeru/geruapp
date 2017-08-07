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

var _NewProjectDetailComponent = require('../components/NewProjectDetailComponent');

var _NewProjectDetailComponent2 = babelHelpers.interopRequireDefault(_NewProjectDetailComponent);

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

var NewProjectDetail = function (_Component) {
  babelHelpers.inherits(NewProjectDetail, _Component);

  function NewProjectDetail(props) {
    babelHelpers.classCallCheck(this, NewProjectDetail);

    var _this = babelHelpers.possibleConstructorReturn(this, (NewProjectDetail.__proto__ || Object.getPrototypeOf(NewProjectDetail)).call(this, props));

    _this.onBackAction = _this.onBackAction.bind(_this);
    _this.onForwardAction = _this.onForwardAction.bind(_this);
    return _this;
  }

  babelHelpers.createClass(NewProjectDetail, [{
    key: 'onBackAction',
    value: function onBackAction() {
      _reactNativeRouterFlux.Actions.pop();
    }
  }, {
    key: 'onForwardAction',
    value: function onForwardAction() {
      _reactNativeRouterFlux.Actions.Tabbar();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_NewProjectDetailComponent2.default, { project: this.props.project,
        onBackAction: this.onBackAction,
        onForwardAction: this.onForwardAction
      });
    }
  }]);
  return NewProjectDetail;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewProjectDetail);