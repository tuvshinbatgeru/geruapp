'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REJECTED = exports.FULFILLED = exports.PENDING = undefined;

var _typeof = typeof Symbol === "function" && typeof (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = promiseMiddleware;

var _isPromise = require('./isPromise');

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PENDING = exports.PENDING = 'PENDING';
var FULFILLED = exports.FULFILLED = 'FULFILLED';
var REJECTED = exports.REJECTED = 'REJECTED';

var defaultTypes = [PENDING, FULFILLED, REJECTED];

function promiseMiddleware() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypes;

  return function (ref) {
    var dispatch = ref.dispatch;

    return function (next) {
      return function (action) {
        if (action.payload) {
          if (!(0, _isPromise2.default)(action.payload) && !(0, _isPromise2.default)(action.payload.promise)) {
            return next(action);
          }
        } else {
          return next(action);
        }

        var type = action.type,
            payload = action.payload,
            meta = action.meta;

        var _promiseTypeSuffixes = _slicedToArray(promiseTypeSuffixes, 3),
            _PENDING = _promiseTypeSuffixes[0],
            _FULFILLED = _promiseTypeSuffixes[1],
            _REJECTED = _promiseTypeSuffixes[2];

        var getAction = function getAction(newPayload, isRejected) {
          return _extends({
            type: type + '_' + (isRejected ? _REJECTED : _FULFILLED)
          }, newPayload === null || typeof newPayload === 'undefined' ? {} : {
            payload: newPayload
          }, meta !== undefined ? { meta: meta } : {}, isRejected ? {
            error: true
          } : {});
        };

        var promise = void 0;
        var data = void 0;

        if (!(0, _isPromise2.default)(action.payload) && _typeof(action.payload) === 'object') {
          promise = payload.promise;
          data = payload.data;
        } else {
          promise = payload;
          data = undefined;
        }

        next(_extends({
          type: type + '_' + _PENDING
        }, data !== undefined ? { payload: data } : {}, meta !== undefined ? { meta: meta } : {}));

        var transformFulfill = function transformFulfill() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var resolvedAction = getAction(value, false);
          return { value: value, action: resolvedAction };
        };

        var handleReject = function handleReject(reason) {
          var rejectedAction = getAction(reason, true);
          dispatch(rejectedAction);
        };

        var handleFulfill = function handleFulfill(successValue) {
          dispatch(successValue.action);
        };

        var promiseValue = promise.then(transformFulfill);
        var sideEffects = promiseValue.then(handleFulfill, handleReject);
        return sideEffects.then(function () {
          return promiseValue;
        }, function () {
          return promiseValue;
        });
      };
    };
  };
}