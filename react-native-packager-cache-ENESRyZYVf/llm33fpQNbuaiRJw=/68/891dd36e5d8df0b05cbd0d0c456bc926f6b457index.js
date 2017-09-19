'use strict';

var _typeof = typeof Symbol === "function" && typeof (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function (obj) {
	return typeof obj;
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof obj;
};

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}return arr2;
	} else {
		return Array.from(arr);
	}
}
/**
 * @overview A minimalistic wrapper around React Native's AsyncStorage.
 * @license MIT
 */

var deviceStorage = {
	get: function get(key) {
		if (!Array.isArray(key)) {
			return _reactNative.AsyncStorage.getItem(key).then(function (value) {
				return JSON.parse(value);
			});
		} else {
			return _reactNative.AsyncStorage.multiGet(key).then(function (values) {
				return values.map(function (value) {
					return JSON.parse(value[1]);
				});
			});
		}
	},

	save: function save(key, value) {
		if (!Array.isArray(key)) {
			return _reactNative.AsyncStorage.setItem(key, JSON.stringify(value));
		} else {
			var pairs = key.map(function (pair) {
				return [pair[0], JSON.stringify(pair[1])];
			});
			return _reactNative.AsyncStorage.multiSet(pairs);
		}
	},

	update: function update(key, value) {
		return deviceStorage.get(key).then(function (item) {
			value = typeof value === 'string' ? value : (0, _lodash2.default)({}, item, value);
			return _reactNative.AsyncStorage.setItem(key, JSON.stringify(value));
		});
	},

	delete: function _delete(key) {
		if (Array.isArray(key)) {
			return _reactNative.AsyncStorage.multiRemove(key);
		} else {
			return _reactNative.AsyncStorage.removeItem(key);
		}
	},

	keys: function keys() {
		return _reactNative.AsyncStorage.getAllKeys();
	},

	push: function push(key, value) {
		return deviceStorage.get(key).then(function (currentValue) {
			if (currentValue === null) {
				return deviceStorage.save(key, [value]);
			}
			if (Array.isArray(currentValue)) {
				return deviceStorage.save(key, [].concat(_toConsumableArray(currentValue), [value]));
			}
			throw new Error('Existing value for key "' + key + '" must be of type null or Array, received ' + (typeof currentValue === 'undefined' ? 'undefined' : _typeof(currentValue)) + '.');
		});
	}
};

module.exports = deviceStorage;