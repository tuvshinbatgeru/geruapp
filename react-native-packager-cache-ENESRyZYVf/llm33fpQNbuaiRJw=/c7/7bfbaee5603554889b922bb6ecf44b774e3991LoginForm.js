
'use strict';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _authConstants = require('../authConstants');

var t = require('tcomb-form-native');
var Form = t.form.Form;

var LoginForm = _react2.default.createClass({
  displayName: 'LoginForm',

  propTypes: {
    formType: _react.PropTypes.string,
    form: _react.PropTypes.object,
    value: _react.PropTypes.object,
    onChange: _react.PropTypes.func
  },

  render: function render() {
    var formType = this.props.formType;

    var options = {
      fields: {}
    };

    var username = {
      label: 'Хэрэглэгчийн нэр',
      maxLength: 12,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.usernameHasError,
      error: this.props.form.fields.usernameErrorMsg
    };

    var email = {
      label: 'Имэйл',
      keyboardType: 'email-address',
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.emailHasError,
      error: this.props.form.fields.emailErrorMsg
    };

    var secureTextEntry = !this.props.form.fields.showPassword;

    var password = {
      label: 'Нууц үг',
      maxLength: 12,
      secureTextEntry: secureTextEntry,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordHasError,
      error: this.props.form.fields.passwordErrorMsg
    };

    var passwordAgain = {
      label: 'Нууц үгээ давтан оруулах',
      secureTextEntry: secureTextEntry,
      maxLength: 12,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordAgainHasError,
      error: this.props.form.fields.passwordAgainErrorMsg
    };

    var loginForm = void 0;
    switch (formType) {
      case _authConstants.REGISTER:
        loginForm = t.struct({
          username: t.String,
          email: t.String,
          password: t.String,
          passwordAgain: t.String
        });
        options.fields['username'] = username;
        options.fields['username'].placeholder = 'Хэрэглэгчийн нэр';
        options.fields['username'].autoCapitalize = 'none';
        options.fields['email'] = email;
        options.fields['email'].placeholder = 'Имэйл';
        options.fields['email'].autoCapitalize = 'none';
        options.fields['password'] = password;
        options.fields['password'].placeholder = 'Нууц үг';
        options.fields['passwordAgain'] = passwordAgain;
        options.fields['passwordAgain'].placeholder = 'Нууц үгээ давтан оруулах';
        break;

      case _authConstants.LOGIN:
        loginForm = t.struct({
          username: t.String,
          password: t.String
        });
        options.fields['username'] = username;
        options.fields['username'].placeholder = 'Хэрэглэгчийн нэр';
        options.fields['username'].autoCapitalize = 'none';
        options.fields['password'] = password;
        options.fields['password'].placeholder = 'Нууц үг';
        break;

      case _authConstants.FORGOT_PASSWORD:
        loginForm = t.struct({
          email: t.String
        });
        options.fields['email'] = email;
        options.fields['email'].autoCapitalize = 'none';
        options.fields['email'].placeholder = 'Имэйл';
        break;
    }
    return _react2.default.createElement(Form, { ref: 'form',
      type: loginForm,
      options: options,
      value: this.props.value,
      onChange: this.props.onChange
    });
  }
});

module.exports = LoginForm;