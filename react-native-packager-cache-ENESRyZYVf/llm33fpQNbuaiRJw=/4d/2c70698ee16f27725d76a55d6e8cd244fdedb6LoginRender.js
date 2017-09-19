
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _authActions = require('../authActions');

var authActions = babelHelpers.interopRequireWildcard(_authActions);

var _globalActions = require('../../global/globalActions');

var globalActions = babelHelpers.interopRequireWildcard(_globalActions);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _Header = require('../../components/Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _ErrorAlert = require('../components/ErrorAlert');

var _ErrorAlert2 = babelHelpers.interopRequireDefault(_ErrorAlert);

var _LoginForm = require('../components/LoginForm');

var _LoginForm2 = babelHelpers.interopRequireDefault(_LoginForm);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Dimensions = require('Dimensions');

var _Dimensions2 = babelHelpers.interopRequireDefault(_Dimensions);

var _variables = require('../../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _authConstants = require('../authConstants');

var _Dimensions$get = _Dimensions2.default.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
});


function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(babelHelpers.extends({}, authActions, globalActions), dispatch)
  };
}

var LoginRender = function (_Component) {
  babelHelpers.inherits(LoginRender, _Component);

  function LoginRender(props) {
    babelHelpers.classCallCheck(this, LoginRender);

    var _this = babelHelpers.possibleConstructorReturn(this, (LoginRender.__proto__ || Object.getPrototypeOf(LoginRender)).call(this, props));

    _this.errorAlert = new _ErrorAlert2.default();
    _this.state = {
      value: {
        username: _this.props.auth.form.fields.username,
        email: _this.props.auth.form.fields.email,
        password: _this.props.auth.form.fields.password,
        passwordAgain: _this.props.auth.form.fields.passwordAgain
      }
    };
    return _this;
  }

  babelHelpers.createClass(LoginRender, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextprops) {
      this.setState({
        value: {
          username: nextprops.auth.form.fields.username,
          email: nextprops.auth.form.fields.email,
          password: nextprops.auth.form.fields.password,
          passwordAgain: nextprops.auth.form.fields.passwordAgain
        }
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (value.username !== '') {
        this.props.actions.onAuthFormFieldChange('username', value.username);
      }
      if (value.email !== '') {
        this.props.actions.onAuthFormFieldChange('email', value.email);
      }
      if (value.password !== '') {
        this.props.actions.onAuthFormFieldChange('password', value.password);
      }
      if (value.passwordAgain !== '') {
        this.props.actions.onAuthFormFieldChange('passwordAgain', value.passwordAgain);
      }
      this.setState({ value: value });
    }
  }, {
    key: 'getMessage',
    value: function getMessage(messageType, actions) {
      var forgotPassword = _react2.default.createElement(
        _reactNative.TouchableHighlight,
        {
          onPress: function onPress() {
            actions.forgotPasswordState();
            _reactNativeRouterFlux.Actions.ForgotPassword();
          } },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          '\u041D\u0443\u0443\u0446 \u04AF\u0433\u044D\u044D \u043C\u0430\u0440\u0442\u0441\u0430\u043D'
        )
      );

      var alreadyHaveAccount = _react2.default.createElement(
        _reactNative.TouchableHighlight,
        {
          onPress: function onPress() {
            actions.loginState();
            _reactNativeRouterFlux.Actions.Login();
          } },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          '\u041D\u044D\u0432\u0442\u0440\u044D\u0445'
        )
      );

      var register = _react2.default.createElement(
        _reactNative.TouchableHighlight,
        {
          onPress: function onPress() {
            actions.registerState();
            _reactNativeRouterFlux.Actions.Register();
          } },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          '\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445'
        )
      );

      switch (messageType) {
        case _authConstants.FORGOT_PASSWORD:
          return forgotPassword;
        case _authConstants.LOGIN:
          return alreadyHaveAccount;
        case _authConstants.REGISTER:
          return register;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var formType = this.props.formType;
      var loginButtonText = this.props.loginButtonText;
      var onButtonPress = this.props.onButtonPress;
      var displayPasswordCheckbox = this.props.displayPasswordCheckbox;
      var leftMessageType = this.props.leftMessageType;
      var rightMessageType = this.props.rightMessageType;

      var passwordCheckbox = _react2.default.createElement(_reactNative.Text, null);
      var leftMessage = this.getMessage(leftMessageType, this.props.actions);
      var rightMessage = this.getMessage(rightMessageType, this.props.actions);

      var self = this;

      this.errorAlert.checkError(this.props.auth.form.error);

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(_Header2.default, { isFetching: this.props.auth.form.isFetching,
          showState: this.props.global.showState,
          currentState: this.props.global.currentState,
          onGetState: this.props.actions.getState,
          onSetState: this.props.actions.setState }),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.inputs },
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { style: { paddingHorizontal: 20 }, activeOpacity: 0.8, onPress: this.props.onFacebookSignUp },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerCenter, { height: 44, backgroundColor: '#3b5998', borderRadius: 5 }] },
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ color: _variables2.default.BRAND_WHITE, fontSize: 13, fontFamily: _variables.font.regular }] },
                'Sign up with Facebook'
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { style: { paddingHorizontal: 20, paddingVertical: 5 }, activeOpacity: 0.8 },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerCenter, { height: 44, backgroundColor: _variables2.default.BRAND_COLOR, borderRadius: 5 }] },
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ color: _variables2.default.BRAND_WHITE, fontSize: 13, fontFamily: _variables.font.regular }] },
                'Sign up coming soon ...'
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { style: { paddingHorizontal: 20, paddingTop: 44, paddingBottom: 20 }, activeOpacity: 0.8 },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerCenter, { height: 44, backgroundColor: '#efefef', borderRadius: 5 }] },
              _react2.default.createElement(
                _reactNative.Text,
                { style: [{ color: _variables2.default.BRAND_BLACK, fontSize: 13, fontFamily: _variables.font.regular }] },
                'Log in'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          null,
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { style: { justifyContent: 'center', alignItems: 'center' } },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 13, color: _variables2.default.BRAND_GRAY } },
              'Forgot password?'
            )
          )
        )
      );
    }
  }]);
  return LoginRender;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(LoginRender);