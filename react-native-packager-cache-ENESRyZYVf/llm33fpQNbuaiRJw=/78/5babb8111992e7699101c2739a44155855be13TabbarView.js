"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _lodash = require("lodash");

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _reactNativeRouterFlux = require("react-native-router-flux");

var _reactRedux = require("react-redux");

var _reactNative = require("react-native");

var _Ionicons = require("react-native-vector-icons/Ionicons");

var _Ionicons2 = babelHelpers.interopRequireDefault(_Ionicons);

var _reactNativeTabNavigator = require("react-native-tab-navigator");

var _reactNativeTabNavigator2 = babelHelpers.interopRequireDefault(_reactNativeTabNavigator);

var _navigationActions = require("../navigation/actions/navigationActions");

var _reactNativeSmartBadge = require("react-native-smart-badge");

var _reactNativeSmartBadge2 = babelHelpers.interopRequireDefault(_reactNativeSmartBadge);

var _reactNativeVectorIcons = require("react-native-vector-icons");

var _selection = require("../brand/selection.json");

var _selection2 = babelHelpers.interopRequireDefault(_selection);

var _MessageView = require("../navigation/views/MessageView");

var _MessageView2 = babelHelpers.interopRequireDefault(_MessageView);

var _NotificationView = require("../notification/containers/NotificationView");

var _NotificationView2 = babelHelpers.interopRequireDefault(_NotificationView);

var _ProfileView = require("../profile/containers/ProfileView");

var _ProfileView2 = babelHelpers.interopRequireDefault(_ProfileView);

var _DashboardView = require("../navigation/views/DashboardView");

var _DashboardView2 = babelHelpers.interopRequireDefault(_DashboardView);

var _ShowcaseView = require("../showcase/containers/ShowcaseView");

var _ShowcaseView2 = babelHelpers.interopRequireDefault(_ShowcaseView);

var _variables = require("../styles/variables");

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var IconSet = (0, _reactNativeVectorIcons.createIconSetFromIcoMoon)(_selection2.default);

var TabbarView = function (_Component) {
  babelHelpers.inherits(TabbarView, _Component);

  function TabbarView() {
    babelHelpers.classCallCheck(this, TabbarView);
    return babelHelpers.possibleConstructorReturn(this, (TabbarView.__proto__ || Object.getPrototypeOf(TabbarView)).apply(this, arguments));
  }

  babelHelpers.createClass(TabbarView, [{
    key: "changeTab",
    value: function changeTab(currentTab) {
      if (currentTab == "newproject") {
        return _reactNativeRouterFlux.Actions.ProjectTagsChooser();
      }

      this.props.tabChanged(currentTab);
    }
  }, {
    key: "notificationRenderBadge",
    value: function notificationRenderBadge(notificationCount) {
      return notificationCount != 0 ? _react2.default.createElement(
        _reactNativeSmartBadge2.default,
        { minWidth: 15,
          minHeight: 15,
          extraPaddingHorizontal: 4,
          textStyle: { color: '#fff' },
          style: styles.badget },
        notificationCount
      ) : null;
    }
  }, {
    key: "renderTabViewItem",
    value: function renderTabViewItem(route) {
      var _this2 = this;

      var currentTab = this.props.navigation.currentTab;

      var content = {};

      switch (route.key) {
        case "showcase":
          content = _react2.default.createElement(_ShowcaseView2.default, null);
          break;
        case "message":
          content = _react2.default.createElement(_MessageView2.default, null);
          break;
        case "notification":
          content = _react2.default.createElement(_NotificationView2.default, null);
          break;
        case "project":
          content = _react2.default.createElement(_DashboardView2.default, null);
          break;
        case "profile":
          content = _react2.default.createElement(_ProfileView2.default, null);
          break;
        default:
          break;
      }

      return _react2.default.createElement(
        _reactNativeTabNavigator2.default.Item,
        {
          key: route.key,
          selected: currentTab === route.key,
          renderBadge: function renderBadge() {
            return _this2.notificationRenderBadge(route.notificationCount);
          },
          renderIcon: function renderIcon() {
            return _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerCenter, { height: 40, width: 40 }] },
              _react2.default.createElement(IconSet, { color: route.color,
                name: route.icon,
                size: route.iconSize
              })
            );
          },

          renderSelectedIcon: function renderSelectedIcon() {
            return _react2.default.createElement(
              _reactNative.View,
              { style: [_variables.layout.centerCenter, { height: 40, width: 40 }] },
              _react2.default.createElement(IconSet, { color: route.activeColor,
                name: route.icon,
                size: route.iconSize
              })
            );
          },
          onPress: function onPress() {
            return _this2.changeTab(route.key);
          }
        },
        content
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var tabItems = [];
      _lodash2.default.forEach(this.props.navigation.routes, function (route) {
        tabItems.push(_this3.renderTabViewItem(route));
      });

      var tabHeight = 60;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 } },
        _react2.default.createElement(
          _reactNativeTabNavigator2.default,
          { tabBarStyle: { backgroundColor: '#fff', height: tabHeight },
            tabBarShadowStyle: { backgroundColor: _variables2.default.BRAND_SUBCOLOR, height: 0 },
            sceneStyle: { paddingBottom: tabHeight } },
          tabItems
        )
      );
    }
  }]);
  return TabbarView;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },

  tabView: {
    flex: 1,
    padding: 5,
    backgroundColor: '#242424'
  },

  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 600,
    width: 300,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

  badget: {
    backgroundColor: '#f66f6f',
    marginTop: 8,
    borderColor: '#fff',
    borderWidth: 2
  }
});

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    navigation: state.navigationState
  };
}, function (dispatch) {
  return {
    tabChanged: function tabChanged(currentTab) {
      dispatch((0, _navigationActions.tabChanged)(currentTab));
    },
    backAction: function backAction() {
      dispatch((0, _navigationActions.navigatePop)());
    }
  };
})(TabbarView);