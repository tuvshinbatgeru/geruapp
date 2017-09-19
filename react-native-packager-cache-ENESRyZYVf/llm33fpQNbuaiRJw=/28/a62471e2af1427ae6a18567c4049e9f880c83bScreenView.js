
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _authActions = require('../../auth/authActions');

var authActions = babelHelpers.interopRequireWildcard(_authActions);

var _globalActions = require('../../global/globalActions');

var globalActions = babelHelpers.interopRequireWildcard(_globalActions);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Header = require('../../components/Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _reactTimerMixin = require('react-timer-mixin');

var _reactTimerMixin2 = babelHelpers.interopRequireDefault(_reactTimerMixin);

function mapStateToProps(state) {
  return {
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(babelHelpers.extends({}, authActions, globalActions), dispatch)
  };
}

var styles = _reactNative.StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

var reactMixin = require('react-mixin');


var ScreenView = _react2.default.createClass({
  displayName: 'ScreenView',
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.setTimeout(function () {
      _this.props.actions.getSessionToken();
    }, 1000);
  },
  render: function render() {
    return _react2.default.createElement(
      _reactNative.View,
      { style: styles.container },
      _react2.default.createElement(_Header2.default, { isFetching: this.props.auth.form.isFetching,
        showState: this.props.global.showState,
        currentState: this.props.global.currentState,
        onGetState: this.props.actions.getState,
        onSetState: this.props.actions.setState }),
      _react2.default.createElement(
        _reactNative.Text,
        { style: styles.summary },
        'Welcome to Geru App'
      )
    );
  }
});

reactMixin(ScreenView.prototype, _reactTimerMixin2.default);
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ScreenView);