Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var StickyScrollView = function (_Component) {
  babelHelpers.inherits(StickyScrollView, _Component);

  function StickyScrollView(props) {
    babelHelpers.classCallCheck(this, StickyScrollView);

    var _this = babelHelpers.possibleConstructorReturn(this, (StickyScrollView.__proto__ || Object.getPrototypeOf(StickyScrollView)).call(this, props));

    _this._onScroll = _this._onScroll.bind(_this);
    return _this;
  }

  babelHelpers.createClass(StickyScrollView, [{
    key: '_onScroll',
    value: function _onScroll(e) {
      var stickyHeight = this.props.stickyHeight;


      if (this.props.onStickyVisibility == null) return;

      if (e.nativeEvent.contentOffset.y >= stickyHeight) {
        this.props.onStickyVisibility(true);
      } else {
        this.props.onStickyVisibility(false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.ScrollView,
        babelHelpers.extends({}, this.props, {
          onScroll: this._onScroll
        }),
        this.props.children
      );
    }
  }]);
  return StickyScrollView;
}(_react.Component);

exports.default = StickyScrollView;


StickyScrollView.propTypes = {
  scrollTop: _react.PropTypes.number.isRequired,
  onStickyVisibility: _react.PropTypes.func
};

StickyScrollView.defaultProps = {};

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});