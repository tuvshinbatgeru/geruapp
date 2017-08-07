var assert = require('./assert');
var Boolean = require('./Boolean');
var isType = require('./isType');
var getTypeName = require('./getTypeName');

module.exports = function isIdentity(type) {
  if (isType(type)) {
    if (process.env.NODE_ENV !== 'production') {
      assert(Boolean.is(type.meta.identity), function () {
        return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type);
      });
    }
    return type.meta.identity;
  }

  return true;
};