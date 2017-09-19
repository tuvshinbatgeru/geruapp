Object.defineProperty(exports, "__esModule", {
       value: true
});

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var _store = require("./store");

var _store2 = babelHelpers.interopRequireDefault(_store);

var _Platform = require("Platform");

var _Platform2 = babelHelpers.interopRequireDefault(_Platform);

var _reactNativeRouterFlux = require("react-native-router-flux");

var _reactRedux = require("react-redux");

var _TabbarView = require("./containers/TabbarView");

var _TabbarView2 = babelHelpers.interopRequireDefault(_TabbarView);

var _ScreenView = require("./navigation/views/ScreenView");

var _ScreenView2 = babelHelpers.interopRequireDefault(_ScreenView);

var _LoginView = require("./auth/containers/LoginView");

var _LoginView2 = babelHelpers.interopRequireDefault(_LoginView);

var _NewProject = require("./project/containers/NewProject");

var _NewProject2 = babelHelpers.interopRequireDefault(_NewProject);

var _NewProjectDetail = require("./project/containers/NewProjectDetail");

var _NewProjectDetail2 = babelHelpers.interopRequireDefault(_NewProjectDetail);

var _ProjectTagsChooser = require("./project/containers/ProjectTagsChooser");

var _ProjectTagsChooser2 = babelHelpers.interopRequireDefault(_ProjectTagsChooser);

var _WorkingProjectDashboard = require("./project/containers/WorkingProjectDashboard");

var _WorkingProjectDashboard2 = babelHelpers.interopRequireDefault(_WorkingProjectDashboard);

var _BookmarkedProjectsView = require("./project/containers/BookmarkedProjectsView");

var _BookmarkedProjectsView2 = babelHelpers.interopRequireDefault(_BookmarkedProjectsView);

var _ShowcaseView = require("./showcase/containers/ShowcaseView");

var _ShowcaseView2 = babelHelpers.interopRequireDefault(_ShowcaseView);

var _ShowcaseSearch = require("./showcase/containers/ShowcaseSearch");

var _ShowcaseSearch2 = babelHelpers.interopRequireDefault(_ShowcaseSearch);

var geru = function (_Component) {
       babelHelpers.inherits(geru, _Component);

       function geru() {
              babelHelpers.classCallCheck(this, geru);
              return babelHelpers.possibleConstructorReturn(this, (geru.__proto__ || Object.getPrototypeOf(geru)).apply(this, arguments));
       }

       babelHelpers.createClass(geru, [{
              key: "render",
              value: function render() {
                     return _react2.default.createElement(
                            _reactRedux.Provider,
                            { store: _store2.default },
                            _react2.default.createElement(
                                   _reactNativeRouterFlux.Router,
                                   { sceneStyle: { backgroundColor: 'white' } },
                                   _react2.default.createElement(
                                          _reactNativeRouterFlux.Scene,
                                          { key: "root", hideNavBar: true },
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "App",
                                                 component: _ScreenView2.default,
                                                 type: "replace"
                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "InitialLoginForm",
                                                 component: _LoginView2.default

                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "TabbarView",
                                                 component: _TabbarView2.default,
                                                 initial: true
                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "BookmarkedProjectsView",
                                                 component: _BookmarkedProjectsView2.default

                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "ProjectTagsChooser",
                                                 component: _ProjectTagsChooser2.default

                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "NewProject",
                                                 component: _NewProject2.default
                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "NewProjectDetail",
                                                 component: _NewProjectDetail2.default
                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "ShowcaseView",
                                                 component: _ShowcaseView2.default

                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "ShowcaseSearch",
                                                 direction: "vertical",
                                                 component: _ShowcaseSearch2.default
                                          }),
                                          _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: "WorkingProjectDashboard",
                                                 component: _WorkingProjectDashboard2.default
                                          })
                                   )
                            )
                     );
              }
       }]);
       return geru;
}(_react.Component);

exports.default = geru;