'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Layout = require('./Layout');

var _Layout2 = babelHelpers.interopRequireDefault(_Layout);

var Badge = function (_React$Component) {
  babelHelpers.inherits(Badge, _React$Component);

  function Badge(props, context) {
    babelHelpers.classCallCheck(this, Badge);

    var _this = babelHelpers.possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, props, context));

    _this.state = {
      computedSize: null
    };


    _this._handleLayout = _this._handleLayout.bind(_this);
    return _this;
  }

  babelHelpers.createClass(Badge, [{
    key: 'render',
    value: function render() {
      var computedSize = this.state.computedSize;

      var style = {};
      if (!computedSize) {
        style.opacity = 0;
      } else {
        style.width = Math.max(computedSize.height, computedSize.width);
      }

      return _react2.default.createElement(
        _reactNative.Text,
        babelHelpers.extends({}, this.props, {
          numberOfLines: 1,
          onLayout: this._handleLayout,
          style: [styles.container, this.props.style, style] }),
        this.props.children
      );
    }
  }, {
    key: '_handleLayout',
    value: function _handleLayout(event) {
      var _event$nativeEvent$la = event.nativeEvent.layout,
          width = _event$nativeEvent$la.width,
          height = _event$nativeEvent$la.height;
      var computedSize = this.state.computedSize;

      if (computedSize && computedSize.height === height && computedSize.width === width) {
        return;
      }

      this.setState({
        computedSize: { width: width, height: height }
      });

      if (this.props.onLayout) {
        this.props.onLayout(event);
      }
    }
  }]);
  return Badge;
}(_react2.default.Component);

Badge.propTypes = _reactNative.Text.propTypes;
exports.default = Badge;


var styles = _reactNative.StyleSheet.create({
  container: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: 'rgb(0, 122, 255)',
    lineHeight: 15,
    textAlign: 'center',
    borderWidth: 1 + _Layout2.default.pixel,
    borderColor: '#fefefe',
    borderRadius: 17 / 2,
    overflow: 'hidden'
  }
});