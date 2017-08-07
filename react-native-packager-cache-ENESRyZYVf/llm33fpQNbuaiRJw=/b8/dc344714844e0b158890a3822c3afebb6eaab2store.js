Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = require("redux-promise-middleware");

var _reduxPromiseMiddleware2 = babelHelpers.interopRequireDefault(_reduxPromiseMiddleware);

var _reducers = require("./reducers");

var _reducers2 = babelHelpers.interopRequireDefault(_reducers);

var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, (0, _reduxLogger.createLogger)());

exports.default = (0, _redux.createStore)(_reducers2.default, middleware);