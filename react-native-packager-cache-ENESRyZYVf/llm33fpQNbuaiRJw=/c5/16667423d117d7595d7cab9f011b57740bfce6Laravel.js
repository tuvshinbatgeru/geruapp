
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.laravel = exports.Laravel = undefined;

var _env = require('./env');

var _env2 = babelHelpers.interopRequireDefault(_env);

var _underscore = require('underscore');

var _underscore2 = babelHelpers.interopRequireDefault(_underscore);

var _axios = require('axios');

var _axios2 = babelHelpers.interopRequireDefault(_axios);

var Laravel = exports.Laravel = function () {
  function Laravel() {
    babelHelpers.classCallCheck(this, Laravel);
  }

  babelHelpers.createClass(Laravel, [{
    key: 'initialize',
    value: function initialize(token) {
      if (!_underscore2.default.isNull(token) && _underscore2.default.isUndefined(token.sessionToken)) {
        throw new Error('TokenMissing');
      }

      this._sessionToken = _underscore2.default.isNull(token) ? null : token.sessionToken.sessionToken;
      this.API_BASE_URL = _env2.default.backend.laravelLocal ? _env2.default.LARAVEL.local.URL : _env2.default.LARAVEL.remote.URL;
    }
  }, {
    key: 'login',
    value: function login(data) {}
  }, {
    key: 'getTags',
    value: function getTags(filter) {

      var data = new FormData();
      data.append('searchValue', filter.searchValue);
      data.append('tags', String(filter.tags));

      return _axios2.default.post(this.API_BASE_URL + 'api/tag/mobile', data);
    }
  }, {
    key: 'saveProject',
    value: function saveProject(data) {
      return _axios2.default.post(this.API_BASE_URL + 'api/project', data.formData);
    }
  }]);
  return Laravel;
}();

var laravel = exports.laravel = new Laravel();