
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var NavigationContainer = require('./NavigationContainer');
var NavigationHeaderTitle = require('./NavigationHeaderTitle');
var NavigationHeaderBackButton = require('./NavigationHeaderBackButton');
var NavigationPropTypes = require('./NavigationPropTypes');
var NavigationHeaderStyleInterpolator = require('./NavigationHeaderStyleInterpolator');

var Animated = ReactNative.Animated,
    Platform = ReactNative.Platform,
    StyleSheet = ReactNative.StyleSheet,
    View = ReactNative.View,
    ViewPropTypes = ReactNative.ViewPropTypes;


var APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
var STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
var PropTypes = require('prop-types');

var NavigationHeader = function (_React$PureComponent) {
  babelHelpers.inherits(NavigationHeader, _React$PureComponent);

  function NavigationHeader() {
    babelHelpers.classCallCheck(this, NavigationHeader);
    return babelHelpers.possibleConstructorReturn(this, (NavigationHeader.__proto__ || Object.getPrototypeOf(NavigationHeader)).apply(this, arguments));
  }

  babelHelpers.createClass(NavigationHeader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          scenes = _props.scenes,
          style = _props.style,
          viewProps = _props.viewProps;


      var scenesProps = scenes.map(function (scene) {
        var props = NavigationPropTypes.extractSceneRendererProps(_this2.props);
        props.scene = scene;
        return props;
      });

      return React.createElement(
        View,
        babelHelpers.extends({ style: [styles.appbar, style] }, viewProps),
        scenesProps.map(this._renderLeft, this),
        scenesProps.map(this._renderTitle, this),
        scenesProps.map(this._renderRight, this)
      );
    }
  }, {
    key: '_renderLeft',
    value: function _renderLeft(props) {
      return this._renderSubView(props, 'left', this.props.renderLeftComponent, NavigationHeaderStyleInterpolator.forLeft);
    }
  }, {
    key: '_renderTitle',
    value: function _renderTitle(props) {
      return this._renderSubView(props, 'title', this.props.renderTitleComponent, NavigationHeaderStyleInterpolator.forCenter);
    }
  }, {
    key: '_renderRight',
    value: function _renderRight(props) {
      return this._renderSubView(props, 'right', this.props.renderRightComponent, NavigationHeaderStyleInterpolator.forRight);
    }
  }, {
    key: '_renderSubView',
    value: function _renderSubView(props, name, renderer, styleInterpolator) {
      var scene = props.scene,
          navigationState = props.navigationState;
      var index = scene.index,
          isStale = scene.isStale,
          key = scene.key;


      var offset = navigationState.index - index;

      if (Math.abs(offset) > 2) {
        return null;
      }

      var subView = renderer(props);
      if (subView === null) {
        return null;
      }

      var pointerEvents = offset !== 0 || isStale ? 'none' : 'box-none';
      return React.createElement(
        Animated.View,
        {
          pointerEvents: pointerEvents,
          key: name + '_' + key,
          style: [styles[name], styleInterpolator(props)] },
        subView
      );
    }
  }]);
  return NavigationHeader;
}(React.PureComponent);

NavigationHeader.defaultProps = {

  renderTitleComponent: function renderTitleComponent(props) {
    var navigationState = props.navigationState;

    var title = String(navigationState.title || '');
    return React.createElement(
      NavigationHeaderTitle,
      null,
      title
    );
  },

  renderLeftComponent: function renderLeftComponent(props) {
    return props.scene.index > 0 ? React.createElement(NavigationHeaderBackButton, null) : null;
  },

  renderRightComponent: function renderRightComponent(props) {
    return null;
  }
};
NavigationHeader.propTypes = babelHelpers.extends({}, NavigationPropTypes.SceneRendererProps, {
  renderLeftComponent: PropTypes.func,
  renderRightComponent: PropTypes.func,
  renderTitleComponent: PropTypes.func,
  style: ViewPropTypes.style,
  viewProps: PropTypes.shape(ViewPropTypes)
});


var styles = StyleSheet.create({
  appbar: {
    alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#FFF',
    borderBottomColor: 'rgba(0, 0, 0, .15)',
    borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 2,
    flexDirection: 'row',
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT,
    justifyContent: 'flex-start',
    left: 0,
    marginBottom: 16,
    position: 'absolute',
    right: 0,
    top: 0
  },

  title: {
    bottom: 0,
    left: APPBAR_HEIGHT,
    marginTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    right: APPBAR_HEIGHT,
    top: 0
  },

  left: {
    bottom: 0,
    left: 0,
    marginTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    top: 0
  },

  right: {
    bottom: 0,
    marginTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

var NavigationHeaderContainer = NavigationContainer.create(NavigationHeader);

NavigationHeaderContainer.HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
NavigationHeaderContainer.Title = NavigationHeaderTitle;
NavigationHeaderContainer.BackButton = NavigationHeaderBackButton;

module.exports = NavigationHeaderContainer;