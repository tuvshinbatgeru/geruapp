Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeExperimentalNavigation = require('react-native-experimental-navigation');

var _reactNativeExperimentalNavigation2 = babelHelpers.interopRequireDefault(_reactNativeExperimentalNavigation);

var _Actions = require('./Actions');

var _Actions2 = babelHelpers.interopRequireDefault(_Actions);

var _State = require('./State');

var _State2 = babelHelpers.interopRequireDefault(_State);

var _Reducer = require('./Reducer');

var _Reducer2 = babelHelpers.interopRequireDefault(_Reducer);

var _DefaultRenderer = require('./DefaultRenderer');

var _DefaultRenderer2 = babelHelpers.interopRequireDefault(_DefaultRenderer);

var _Scene = require('./Scene');

var _Scene2 = babelHelpers.interopRequireDefault(_Scene);

var _ActionConst = require('./ActionConst');

var ActionConst = babelHelpers.interopRequireWildcard(_ActionConst);
var NavigationRootContainer = _reactNativeExperimentalNavigation2.default.RootContainer;


var propTypes = {
  dispatch: _react.PropTypes.func,
  backAndroidHandler: _react.PropTypes.func,
  onBackAndroid: _react.PropTypes.func,
  onExitApp: _react.PropTypes.func
};

var Router = function (_Component) {
  babelHelpers.inherits(Router, _Component);

  function Router(props) {
    babelHelpers.classCallCheck(this, Router);

    var _this = babelHelpers.possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

    _this.renderNavigation = _this.renderNavigation.bind(_this);
    _this.handleProps = _this.handleProps.bind(_this);
    _this.handleBackAndroid = _this.handleBackAndroid.bind(_this);
    var reducer = _this.handleProps(props);
    _this.state = { reducer: reducer };
    return _this;
  }

  babelHelpers.createClass(Router, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routes: _Actions2.default
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.BackHandler.addEventListener('hardwareBackPress', this.handleBackAndroid);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var reducer = this.handleProps(props);
      this.setState({ reducer: reducer });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactNative.BackHandler.removeEventListener('hardwareBackPress', this.handleBackAndroid);
    }
  }, {
    key: 'handleBackAndroid',
    value: function handleBackAndroid() {
      var _props = this.props,
          backAndroidHandler = _props.backAndroidHandler,
          onBackAndroid = _props.onBackAndroid,
          onExitApp = _props.onExitApp;

      if (backAndroidHandler) {
        return backAndroidHandler();
      }

      try {
        _Actions2.default.androidBack();
        if (onBackAndroid) {
          onBackAndroid();
        }
        return true;
      } catch (err) {
        if (onExitApp) {
          return onExitApp();
        }

        return false;
      }
    }
  }, {
    key: 'handleProps',
    value: function handleProps(props) {
      var scenesMap = void 0;

      if (props.scenes) {
        scenesMap = props.scenes;
      } else {
        var _scenes = props.children;

        if (Array.isArray(props.children) || props.children.props.component) {
          _scenes = _react2.default.createElement(
            _Scene2.default,
            babelHelpers.extends({
              key: '__root',
              hideNav: true
            }, this.props),
            props.children
          );
        }
        scenesMap = _Actions2.default.create(_scenes, props.wrapBy);
      }

      var children = props.children,
          styles = props.styles,
          scenes = props.scenes,
          reducer = props.reducer,
          createReducer = props.createReducer,
          parentProps = babelHelpers.objectWithoutProperties(props, ['children', 'styles', 'scenes', 'reducer', 'createReducer']);


      scenesMap.rootProps = parentProps;

      var initialState = (0, _State2.default)(scenesMap);
      var reducerCreator = props.createReducer || _Reducer2.default;

      var routerReducer = props.reducer || reducerCreator({
        initialState: initialState,
        scenes: scenesMap
      });

      return routerReducer;
    }
  }, {
    key: 'renderNavigation',
    value: function renderNavigation(navigationState, onNavigate) {
      var _this2 = this;

      if (!navigationState) {
        return null;
      }
      _Actions2.default.get = function (key) {
        return (0, _Reducer.findElement)(navigationState, key, ActionConst.REFRESH);
      };
      _Actions2.default.callback = function (props) {
        var constAction = props.type && _Actions.ActionMap[props.type] ? _Actions.ActionMap[props.type] : null;
        if (_this2.props.dispatch) {
          if (constAction) {
            _this2.props.dispatch(babelHelpers.extends({}, props, { type: constAction }));
          } else {
            _this2.props.dispatch(props);
          }
        }
        return constAction ? onNavigate(babelHelpers.extends({}, props, { type: constAction })) : onNavigate(props);
      };

      return _react2.default.createElement(_DefaultRenderer2.default, { onNavigate: onNavigate, navigationState: navigationState });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.reducer) return null;

      return _react2.default.createElement(NavigationRootContainer, {
        reducer: this.state.reducer,
        renderNavigation: this.renderNavigation
      });
    }
  }]);
  return Router;
}(_react.Component);

Router.childContextTypes = {
  routes: _react.PropTypes.object
};


Router.propTypes = propTypes;

exports.default = Router;