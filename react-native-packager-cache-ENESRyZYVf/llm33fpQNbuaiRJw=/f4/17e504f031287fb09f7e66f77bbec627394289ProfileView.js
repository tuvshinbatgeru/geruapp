Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _ProfileActions = require('../ProfileActions');

var profileActions = babelHelpers.interopRequireWildcard(_ProfileActions);

var _ProjectActions = require('../../project/ProjectActions');

var _reactNativeStickyView = require('../../components/react-native-sticky-view');

var _reactNativeStickyView2 = babelHelpers.interopRequireDefault(_reactNativeStickyView);

var _ProfileHeader = require('../components/ProfileHeader');

var _ProfileHeader2 = babelHelpers.interopRequireDefault(_ProfileHeader);

var _MyProjectsComponent = require('../components/MyProjectsComponent');

var _MyProjectsComponent2 = babelHelpers.interopRequireDefault(_MyProjectsComponent);

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(profileActions, dispatch),
    newProject: (0, _redux.bindActionCreators)(_ProjectActions.newProject, dispatch)
  };
}

var ProfileView = function (_Component) {
  babelHelpers.inherits(ProfileView, _Component);

  function ProfileView(props) {
    babelHelpers.classCallCheck(this, ProfileView);

    var _this = babelHelpers.possibleConstructorReturn(this, (ProfileView.__proto__ || Object.getPrototypeOf(ProfileView)).call(this, props));

    _this.onFetchMyProjectsHistory = _this.onFetchMyProjectsHistory.bind(_this);
    _this.onFetchMyProjectsWorking = _this.onFetchMyProjectsWorking.bind(_this);
    _this.onFetchMyProjectsBidded = _this.onFetchMyProjectsBidded.bind(_this);
    _this.onStickyVisibility = _this.onStickyVisibility.bind(_this);
    _this.onBookmarkDetailPressed = _this.onBookmarkDetailPressed.bind(_this);

    _this.state = {
      onStickyState: false
    };
    return _this;
  }

  babelHelpers.createClass(ProfileView, [{
    key: 'onBookmarkDetailPressed',
    value: function onBookmarkDetailPressed() {
      _reactNativeRouterFlux.Actions.BookmarkedProjectsView();
    }
  }, {
    key: 'bidNavigation',
    value: function bidNavigation() {
      alert('bid');
    }
  }, {
    key: 'gpNavigation',
    value: function gpNavigation() {
      alert('gp');
    }
  }, {
    key: 'portfolioNavigation',
    value: function portfolioNavigation() {
      _reactNativeRouterFlux.Actions.MyPortfolioView();
    }
  }, {
    key: 'onStickyVisibility',
    value: function onStickyVisibility(state) {
      var onStickyState = this.state.onStickyState;


      if (onStickyState != state) {
        this.setState({
          onStickyState: state
        });
      }
    }
  }, {
    key: 'onFetchMyProjectsWorking',
    value: function onFetchMyProjectsWorking(page, callback, options) {
      var profile = this.props.profile;


      callback(profile.get('workingOnProjects'), {
        allLoaded: true });
    }
  }, {
    key: 'onFetchMyProjectsHistory',
    value: function onFetchMyProjectsHistory(page, callback, options) {
      var profile = this.props.profile;


      callback(profile.get('historyProjects'), {
        allLoaded: true });
    }
  }, {
    key: 'onFetchMyProjectsBidded',
    value: function onFetchMyProjectsBidded(page, callback, options) {
      var profile = this.props.profile;


      callback(profile.get('biddedProjects'), {
        allLoaded: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var profile = this.props.profile;
      var onStickyState = this.state.onStickyState;


      return _react2.default.createElement(
        _reactNativeStickyView2.default,
        { style: { flex: 1, backgroundColor: '#fff' },
          stickyHeight: 250,
          onStickyVisibility: this.onStickyVisibility,
          showsVerticalScrollIndicator: false
        },
        _react2.default.createElement(_ProfileHeader2.default, { user: profile.get('user'),
          lastBookmarks: profile.get('lastBookmarks'),
          onBidNavigation: function onBidNavigation() {
            return _this2.bidNavigation();
          },
          onGPNavigation: function onGPNavigation() {
            return _this2.gpNavigation();
          },
          onPortfolioNavigation: function onPortfolioNavigation() {
            return _this2.portfolioNavigation();
          },
          onBookmarkDetailPressed: this.onBookmarkDetailPressed
        }),
        _react2.default.createElement(_reactNative.View, { style: { flex: 1 } })
      );
    }
  }]);
  return ProfileView;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProfileView);