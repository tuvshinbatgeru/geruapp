
'use strict';

var _underscore = require('underscore');

var _underscore2 = babelHelpers.interopRequireDefault(_underscore);

var ErrorAlert = function () {
  function ErrorAlertClass() {
    babelHelpers.classCallCheck(this, ErrorAlertClass);
  }

  babelHelpers.createClass(ErrorAlertClass, [{
    key: 'checkError',
    value: function checkError(obj) {
      var errorMessage = '';
      if (!_underscore2.default.isNull(obj)) {
        if (!_underscore2.default.isUndefined(obj.error)) {
          if (!_underscore2.default.isUndefined(obj.error.error)) {
            errorMessage = obj.error.error;
          } else {
            errorMessage = obj.error;
          }
        } else {
          errorMessage = obj;
        }
        if (errorMessage !== '') {
          if (!_underscore2.default.isUndefined(errorMessage.message)) {
            alert('Error', errorMessage.message);
          } else {
            alert('Error', errorMessage);
          }
        }
      }
    }
  }]);
  return ErrorAlertClass;
}();

module.exports = ErrorAlert;