
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.node = exports.Node = undefined;

var _env = require('./env');

var _env2 = babelHelpers.interopRequireDefault(_env);

var _underscore = require('underscore');

var _underscore2 = babelHelpers.interopRequireDefault(_underscore);

var _axios = require('axios');

var _axios2 = babelHelpers.interopRequireDefault(_axios);

var _querystring = require('querystring');

var _querystring2 = babelHelpers.interopRequireDefault(_querystring);

var Node = exports.Node = function () {
  function Node() {
    babelHelpers.classCallCheck(this, Node);
  }

  babelHelpers.createClass(Node, [{
    key: 'initialize',
    value: function initialize(token) {

      if (!_underscore2.default.isNull(token) && _underscore2.default.isUndefined(token.sessionToken)) {
        throw new Error('TokenMissing');
      }

      this._sessionToken = _underscore2.default.isNull(token) ? null : token.sessionToken.sessionToken;
      this.API_BASE_URL = _env2.default.backend.nodeLocal ? _env2.default.node.local.url : _env2.default.node.remote.url;
    }
  }, {
    key: 'login',
    value: function login(data) {}
  }, {
    key: 'getShowcaseByTags',
    value: function getShowcaseByTags(params) {
      var tags = [];
      _underscore2.default.forEach(params.tags, function (tag) {
        tags.push(tag.name);
      });

      return _axios2.default.get(this.API_BASE_URL + 'showcase/tag?' + _querystring2.default.stringify({
        page: params.page,
        tags: tags
      }));
    }
  }, {
    key: 'getShowcaseSuggestedTags',
    value: function getShowcaseSuggestedTags(data) {
      return _axios2.default.get(this.API_BASE_URL + 'tag/suggested', {
        params: data
      });
    }
  }, {
    key: 'getTagAutoComplete',
    value: function getTagAutoComplete(params) {
      return _axios2.default.get(this.API_BASE_URL + 'tag/auto_complete', {
        params: params
      });
    }
  }, {
    key: 'getMyBookmark',
    value: function getMyBookmark(data) {
      return _axios2.default.get(this.API_BASE_URL + 'user/' + data.user_id + '/bookmark');
    }
  }, {
    key: 'getTags',
    value: function getTags(filter) {
      return _axios2.default.get(this.API_BASE_URL + 'tag?' + _querystring2.default.stringify({
        tags: filter.tags ? filter.tags : []
      }), {
        params: filter
      });
    }
  }, {
    key: 'saveProject',
    value: function saveProject(data) {
      return _axios2.default.post(this.API_BASE_URL + 'api/project', data.formData);
    }
  }]);
  return Node;
}();

var node = exports.node = new Node();