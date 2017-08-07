'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Badge = require('./Badge');

var _Badge2 = babelHelpers.interopRequireDefault(_Badge);

var _Layout = require('./Layout');

var _Layout2 = babelHelpers.interopRequireDefault(_Layout);

var _StaticContainer = require('./StaticContainer');

var _StaticContainer2 = babelHelpers.interopRequireDefault(_StaticContainer);

var _Tab = require('./Tab');

var _Tab2 = babelHelpers.interopRequireDefault(_Tab);

var _TabBar = require('./TabBar');

var _TabBar2 = babelHelpers.interopRequireDefault(_TabBar);

var _TabNavigatorItem = require('./TabNavigatorItem');

var _TabNavigatorItem2 = babelHelpers.interopRequireDefault(_TabNavigatorItem);

var TabNavigator = function (_React$Component) {
  babelHelpers.inherits(TabNavigator, _React$Component);

  function TabNavigator(props, context) {
    babelHelpers.classCallCheck(this, TabNavigator);

    var _this = babelHelpers.possibleConstructorReturn(this, (TabNavigator.__proto__ || Object.getPrototypeOf(TabNavigator)).call(this, props, context));

    _this.state = {
      renderedSceneKeys: _this._updateRenderedSceneKeys(props.children)
    };

    _this._renderTab = _this._renderTab.bind(_this);
    return _this;
  }

  babelHelpers.createClass(TabNavigator, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var renderedSceneKeys = this.state.renderedSceneKeys;

      this.setState({
        renderedSceneKeys: this._updateRenderedSceneKeys(nextProps.children, renderedSceneKeys)
      });
    }
  }, {
    key: '_getSceneKey',
    value: function _getSceneKey(item, index) {
      return 'scene-' + (item.key !== null ? item.key : index);
    }
  }, {
    key: '_updateRenderedSceneKeys',
    value: function _updateRenderedSceneKeys(children) {
      var _this2 = this;

      var oldSceneKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _immutable.Set)();

      var newSceneKeys = (0, _immutable.Set)().asMutable();
      _react2.default.Children.forEach(children, function (item, index) {
        if (item === null) {
          return;
        }
        var key = _this2._getSceneKey(item, index);
        if (oldSceneKeys.has(key) || item.props.selected) {
          newSceneKeys.add(key);
        }
      });
      return newSceneKeys.asImmutable();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          style = _props.style,
          children = _props.children,
          tabBarStyle = _props.tabBarStyle,
          tabBarShadowStyle = _props.tabBarShadowStyle,
          sceneStyle = _props.sceneStyle,
          props = babelHelpers.objectWithoutProperties(_props, ['style', 'children', 'tabBarStyle', 'tabBarShadowStyle', 'sceneStyle']);

      var scenes = [];

      _react2.default.Children.forEach(children, function (item, index) {
        if (item === null) {
          return;
        }
        var sceneKey = _this3._getSceneKey(item, index);
        if (!_this3.state.renderedSceneKeys.has(sceneKey)) {
          return;
        }

        var selected = item.props.selected;

        var scene = _react2.default.createElement(
          SceneContainer,
          { key: sceneKey, selected: selected, style: sceneStyle },
          item
        );

        scenes.push(scene);
      });

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, props, { style: [styles.container, style] }),
        scenes,
        _react2.default.createElement(
          _TabBar2.default,
          { style: tabBarStyle, shadowStyle: tabBarShadowStyle },
          _react2.default.Children.map(children, this._renderTab)
        )
      );
    }
  }, {
    key: '_renderTab',
    value: function _renderTab(item) {
      var icon = void 0;
      if (item === null) {
        return;
      }
      if (item.props.selected) {
        if (item.props.renderSelectedIcon) {
          icon = item.props.renderSelectedIcon();
        } else if (item.props.renderIcon) {
          var defaultIcon = item.props.renderIcon();
          icon = _react2.default.cloneElement(defaultIcon, {
            style: [defaultIcon.props.style, styles.defaultSelectedIcon]
          });
        }
      } else if (item.props.renderIcon) {
        icon = item.props.renderIcon();
      }

      var badge = void 0;
      if (item.props.renderBadge) {
        badge = item.props.renderBadge();
      } else if (item.props.badgeText) {
        badge = _react2.default.createElement(
          _Badge2.default,
          null,
          item.props.badgeText
        );
      }

      return _react2.default.createElement(
        _Tab2.default,
        {
          testID: item.props.testID,
          title: item.props.title,
          allowFontScaling: item.props.allowFontScaling,
          titleStyle: [item.props.titleStyle, item.props.selected ? [styles.defaultSelectedTitle, item.props.selectedTitleStyle] : null],
          badge: badge,
          onPress: item.props.onPress,
          hidesTabTouch: this.props.hidesTabTouch,
          style: item.props.tabStyle },
        icon
      );
    }
  }]);
  return TabNavigator;
}(_react2.default.Component);

TabNavigator.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  sceneStyle: _reactNative.View.propTypes.style,
  tabBarStyle: _TabBar2.default.propTypes.style,
  tabBarShadowStyle: _TabBar2.default.propTypes.shadowStyle,
  hidesTabTouch: _react.PropTypes.bool
});
exports.default = TabNavigator;

var SceneContainer = function (_React$Component2) {
  babelHelpers.inherits(SceneContainer, _React$Component2);

  function SceneContainer() {
    babelHelpers.classCallCheck(this, SceneContainer);
    return babelHelpers.possibleConstructorReturn(this, (SceneContainer.__proto__ || Object.getPrototypeOf(SceneContainer)).apply(this, arguments));
  }

  babelHelpers.createClass(SceneContainer, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          selected = _props2.selected,
          props = babelHelpers.objectWithoutProperties(_props2, ['selected']);

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, props, {
          pointerEvents: selected ? 'auto' : 'none',
          removeClippedSubviews: !selected,
          style: [styles.sceneContainer, selected ? null : styles.hiddenSceneContainer, props.style] }),
        _react2.default.createElement(
          _StaticContainer2.default,
          { shouldUpdate: selected },
          this.props.children
        )
      );
    }
  }]);
  return SceneContainer;
}(_react2.default.Component);

SceneContainer.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  selected: _react.PropTypes.bool
});


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: _Layout2.default.tabBarHeight
  },
  hiddenSceneContainer: {
    overflow: 'hidden',
    opacity: 0
  },
  defaultSelectedTitle: {
    color: 'rgb(0, 122, 255)'
  },
  defaultSelectedIcon: {
    tintColor: 'rgb(0, 122, 255)'
  }
});

TabNavigator.Item = _TabNavigatorItem2.default;