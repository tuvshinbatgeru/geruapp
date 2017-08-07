var isNil = require('./isNil');
var assert = require('./assert');

module.exports = function mixin(target, source, overwrite) {
  if (isNil(source)) {
    return target;
  }
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (overwrite !== true) {
        if (process.env.NODE_ENV !== 'production') {
          assert(!target.hasOwnProperty(k) || target[k] === source[k], function () {
            return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object';
          });
        }
      }
      target[k] = source[k];
    }
  }
  return target;
};