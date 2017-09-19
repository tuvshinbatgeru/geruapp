
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appAuthToken = exports.AppAuthToken = undefined;

var _reactNativeSimpleStore = require('react-native-simple-store');

var _reactNativeSimpleStore2 = babelHelpers.interopRequireDefault(_reactNativeSimpleStore);

var _env = require('../env');

var _env2 = babelHelpers.interopRequireDefault(_env);

var AppAuthToken = exports.AppAuthToken = function () {
  function AppAuthToken() {
    babelHelpers.classCallCheck(this, AppAuthToken);

    this.SESSION_TOKEN_KEY = _env2.default.SESSION_TOKEN_KEY;
  }

  babelHelpers.createClass(AppAuthToken, [{
    key: 'storeSessionToken',
    value: function storeSessionToken(sessionToken) {
      return _reactNativeSimpleStore2.default.save(this.SESSION_TOKEN_KEY, {
        sessionToken: sessionToken
      });
    }
  }, {
    key: 'getSessionToken',
    value: function getSessionToken(sessionToken) {
      var _this = this;

      if (sessionToken) {
        return _reactNativeSimpleStore2.default.save(this.SESSION_TOKEN_KEY, {
          sessionToken: sessionToken
        }).then(function () {
          return _reactNativeSimpleStore2.default.get(_this.SESSION_TOKEN_KEY);
        });
      }
      return _reactNativeSimpleStore2.default.get(this.SESSION_TOKEN_KEY);
    }
  }, {
    key: 'deleteSessionToken',
    value: function deleteSessionToken() {
      return _reactNativeSimpleStore2.default.delete(this.SESSION_TOKEN_KEY);
    }
  }]);
  return AppAuthToken;
}();

var appAuthToken = exports.appAuthToken = new AppAuthToken();