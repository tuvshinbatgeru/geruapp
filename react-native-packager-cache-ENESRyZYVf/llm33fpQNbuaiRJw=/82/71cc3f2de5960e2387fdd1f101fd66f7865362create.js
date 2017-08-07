var isType = require('./isType');
var getFunctionName = require('./getFunctionName');
var assert = require('./assert');
var stringify = require('./stringify');

module.exports = function create(type, value, path) {
  if (isType(type)) {
    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path) : type(value, path);
  }

  if (process.env.NODE_ENV !== 'production') {
    path = path || [getFunctionName(type)];
    assert(value instanceof type, function () {
      return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/');
    });
  }

  return value;
};