var isFunction = require('./isFunction');
var isNil = require('./isNil');
var fail = require('./fail');
var stringify = require('./stringify');

function assert(guard, message) {
  if (guard !== true) {
    if (isFunction(message)) {
      message = message();
    } else if (isNil(message)) {
      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
    }
    assert.fail(message);
  }
}

assert.fail = fail;
assert.stringify = stringify;

module.exports = assert;