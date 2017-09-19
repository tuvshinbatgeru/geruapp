Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _NavbarButton = require('./NavbarButton');

var _NavbarButton2 = babelHelpers.interopRequireDefault(_NavbarButton);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var ButtonShape = {
  title: _propTypes2.default.string.isRequired,
  style: _reactNative.View.propTypes.style,
  handler: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};

var TitleShape = {
  title: _propTypes2.default.string.isRequired,
  tintColor: _propTypes2.default.string
};

var StatusBarShape = {
  style: _propTypes2.default.oneOf(['light-content', 'default']),
  hidden: _propTypes2.default.bool,
  tintColor: _propTypes2.default.string,
  hideAnimation: _propTypes2.default.oneOf(['fade', 'slide', 'none']),
  showAnimation: _propTypes2.default.oneOf(['fade', 'slide', 'none'])
};

function getButtonElement(data, style) {
  return _react2.default.createElement(
    _reactNative.View,
    { style: _styles2.default.navBarButtonContainer },
    !data || data.props ? data : _react2.default.createElement(_NavbarButton2.default, {
      title: data.title,
      style: [data.style, style],
      tintColor: data.tintColor,
      handler: data.handler,
      accessible: data.accessible,
      accessibilityLabel: data.accessibilityLabel
    })
  );
}

function getTitleElement(data) {
  if (!data || data.props) {
    return _react2.default.createElement(
      _reactNative.View,
      { style: _styles2.default.customTitle },
      data
    );
  }

  var colorStyle = data.tintColor ? { color: data.tintColor } : null;

  return _react2.default.createElement(
    _reactNative.View,
    { style: _styles2.default.navBarTitleContainer },
    _react2.default.createElement(
      _reactNative.Text,
      { style: [_styles2.default.navBarTitleText, data.style, colorStyle] },
      data.title
    )
  );
}

var NavigationBar = function (_Component) {
  babelHelpers.inherits(NavigationBar, _Component);

  function NavigationBar() {
    babelHelpers.classCallCheck(this, NavigationBar);
    return babelHelpers.possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  babelHelpers.createClass(NavigationBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.customizeStatusBar();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.customizeStatusBar();
    }
  }, {
    key: 'customizeStatusBar',
    value: function customizeStatusBar() {
      var statusBar = this.props.statusBar;

      if (_reactNative.Platform.OS === 'ios') {
        if (statusBar.style) {
          _reactNative.StatusBar.setBarStyle(statusBar.style);
        }

        var animation = statusBar.hidden ? statusBar.hideAnimation : statusBar.showAnimation;

        _reactNative.StatusBar.showHideTransition = animation;
        _reactNative.StatusBar.hidden = statusBar.hidden;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerStyle = _props.containerStyle,
          tintColor = _props.tintColor,
          title = _props.title,
          leftButton = _props.leftButton,
          rightButton = _props.rightButton,
          style = _props.style;

      var customTintColor = tintColor ? { backgroundColor: tintColor } : null;

      var customStatusBarTintColor = this.props.statusBar.tintColor ? { backgroundColor: this.props.statusBar.tintColor } : null;

      var statusBar = null;

      if (_reactNative.Platform.OS === 'ios') {
        statusBar = !this.props.statusBar.hidden ? _react2.default.createElement(_reactNative.View, { style: [_styles2.default.statusBar, customStatusBarTintColor] }) : null;
      }

      return _react2.default.createElement(
        _reactNative.View,
        { style: [_styles2.default.navBarContainer, containerStyle, customTintColor] },
        statusBar,
        _react2.default.createElement(
          _reactNative.View,
          { style: [_styles2.default.navBar, style] },
          getTitleElement(title),
          getButtonElement(leftButton, { marginLeft: 8 }),
          getButtonElement(rightButton, { marginRight: 8 })
        )
      );
    }
  }]);
  return NavigationBar;
}(_react.Component);

NavigationBar.propTypes = {
  style: _reactNative.View.propTypes.style,
  tintColor: _propTypes2.default.string,
  statusBar: _propTypes2.default.shape(StatusBarShape),
  leftButton: _propTypes2.default.oneOfType([_propTypes2.default.shape(ButtonShape), _propTypes2.default.element, _propTypes2.default.oneOf([null])]),
  rightButton: _propTypes2.default.oneOfType([_propTypes2.default.shape(ButtonShape), _propTypes2.default.element, _propTypes2.default.oneOf([null])]),
  title: _propTypes2.default.oneOfType([_propTypes2.default.shape(TitleShape), _propTypes2.default.element, _propTypes2.default.oneOf([null])]),
  containerStyle: _reactNative.View.propTypes.style
};
NavigationBar.defaultProps = {
  style: {},
  tintColor: '',
  leftButton: null,
  rightButton: null,
  title: null,
  statusBar: {
    style: 'default',
    hidden: false,
    hideAnimation: 'slide',
    showAnimation: 'slide'
  },
  containerStyle: {}
};
exports.default = NavigationBar;