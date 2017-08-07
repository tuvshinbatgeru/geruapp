'use strict';

exports.__esModule=true;
exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;

var _createStore=require('./createStore');

var _createStore2=_interopRequireDefault(_createStore);

var _combineReducers=require('./combineReducers');

var _combineReducers2=_interopRequireDefault(_combineReducers);

var _bindActionCreators=require('./bindActionCreators');

var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);

var _applyMiddleware=require('./applyMiddleware');

var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);

var _compose=require('./compose');

var _compose2=_interopRequireDefault(_compose);

var _warning=require('./utils/warning');

var _warning2=_interopRequireDefault(_warning);

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed(){}





exports.createStore=_createStore2['default'];
exports.combineReducers=_combineReducers2['default'];
exports.bindActionCreators=_bindActionCreators2['default'];
exports.applyMiddleware=_applyMiddleware2['default'];
exports.compose=_compose2['default'];