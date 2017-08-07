Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withAnimation;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

function withAnimation(WrappedComponent, indeterminateProgress) {
  var _class, _temp;

  var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return _temp = _class = function (_Component) {
    babelHelpers.inherits(AnimatedComponent, _Component);

    function AnimatedComponent(props) {
      babelHelpers.classCallCheck(this, AnimatedComponent);

      var _this = babelHelpers.possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).call(this, props));

      _this.progressValue = Math.min(Math.max(props.progress, 0), 1);
      _this.rotationValue = 0;
      _this.state = {
        progress: new _reactNative.Animated.Value(_this.progressValue),
        rotation: new _reactNative.Animated.Value(_this.rotationValue)
      };
      return _this;
    }

    babelHelpers.createClass(AnimatedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.state.progress.addListener(function (event) {
          _this2.progressValue = event.value;
        });
        this.state.rotation.addListener(function (event) {
          _this2.rotationValue = event.value;
        });
        if (this.props.indeterminate) {
          this.spin();
          if (indeterminateProgress) {
            _reactNative.Animated.spring(this.state.progress, {
              toValue: indeterminateProgress
            }).start();
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.state.progress.removeAllListeners();
        this.state.rotation.removeAllListeners();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        var _this3 = this;

        if (props.indeterminate !== this.props.indeterminate) {
          if (props.indeterminate) {
            this.spin();
          } else {
            _reactNative.Animated.spring(this.state.rotation, {
              toValue: this.rotationValue > 0.5 ? 1 : 0
            }).start(function (endState) {
              if (endState.finished) {
                _this3.state.rotation.setValue(0);
              }
            });
          }
        }
        var progress = props.indeterminate ? indeterminateProgress || 0 : Math.min(Math.max(props.progress, 0), 1);
        if (progress !== this.progressValue) {
          if (props.animated) {
            _reactNative.Animated.spring(this.state.progress, {
              toValue: progress,
              bounciness: 0
            }).start();
          } else {
            this.state.progress.setValue(progress);
          }
        }
      }
    }, {
      key: 'spin',
      value: function spin() {
        var _this4 = this;

        this.state.rotation.setValue(0);
        _reactNative.Animated.timing(this.state.rotation, {
          toValue: this.props.direction === 'counter-clockwise' ? -1 : 1,
          duration: 1000,
          easing: _reactNative.Easing.linear,
          isInteraction: false
        }).start(function (endState) {
          if (endState.finished) {
            _this4.spin();
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, babelHelpers.extends({}, this.props, {
          progress: this.props.animated ? this.state.progress : this.props.progress,
          rotation: this.state.rotation
        }));
      }
    }]);
    return AnimatedComponent;
  }(_react.Component), _class.displayName = 'withAnimation(' + wrappedComponentName + ')', _class.propTypes = {
    animated: _propTypes2.default.bool,
    direction: _propTypes2.default.oneOf(['clockwise', 'counter-clockwise']),
    indeterminate: _propTypes2.default.bool,
    progress: _propTypes2.default.number.isRequired
  }, _class.defaultProps = {
    animated: true,
    indeterminate: false,
    progress: 0
  }, _temp;
}