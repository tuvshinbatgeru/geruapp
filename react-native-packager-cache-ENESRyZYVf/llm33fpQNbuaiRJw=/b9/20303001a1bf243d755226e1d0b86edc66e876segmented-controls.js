'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);

var _ = require('./');

var _2 = babelHelpers.interopRequireDefault(_);

var Text = _reactNative2.default.Text,
    TouchableWithoutFeedback = _reactNative2.default.TouchableWithoutFeedback,
    View = _reactNative2.default.View,
    Platform = _reactNative2.default.Platform;

var SegmentedControls = function (_React$Component) {
  babelHelpers.inherits(SegmentedControls, _React$Component);

  function SegmentedControls() {
    babelHelpers.classCallCheck(this, SegmentedControls);
    return babelHelpers.possibleConstructorReturn(this, (SegmentedControls.__proto__ || Object.getPrototypeOf(SegmentedControls)).apply(this, arguments));
  }

  babelHelpers.createClass(SegmentedControls, [{
    key: 'render',
    value: function render() {
      var config = this.getConfig();

      return _react2.default.createElement(_2.default, babelHelpers.extends({}, this.props, {
        renderOption: this.renderOption.bind(this, config),
        renderContainer: this.renderContainer.bind(this, config)
      }));
    }
  }, {
    key: 'getConfig',
    value: function getConfig() {
      var tint = this.props.tint || DEFAULTS.tint;
      var backTint = this.props.backTint || DEFAULTS.backTint;
      var colors = {
        tint: tint,
        selectedTint: backTint,
        backgroundColor: backTint,
        selectedBackgroundColor: tint,
        containerBorderTint: tint,
        separatorTint: tint
      };

      return babelHelpers.extends({}, DEFAULTS, colors, this.props);
    }
  }, {
    key: 'renderContainer',
    value: function renderContainer(config, options) {
      var baseContainerStyle = {
        flexDirection: config.direction,
        backgroundColor: config.backgroundColor,
        borderColor: config.containerBorderTint,
        borderWidth: config.containerBorderWidth,
        overflow: 'hidden'
      };

      baseContainerStyle.borderRadius = config.containerBorderRadius;

      var containerStyle = [baseContainerStyle, this.props.containerStyle];

      return _react2.default.createElement(
        View,
        { style: containerStyle },
        options
      );
    }
  }, {
    key: 'renderOption',
    value: function renderOption(config, option, selected, onSelect, index) {

      var disabled = this.props.enabled === false;

      var baseTextStyle = {
        textAlign: config.textAlign
      };

      var normalTextStyle = [baseTextStyle, this.props.optionStyle, {
        color: config.tint
      }];

      var selectedTextStyle = [baseTextStyle, this.props.optionStyle, {
        color: config.selectedTint
      }];

      var baseColor = selected ? config.selectedBackgroundColor : config.backgroundColor;
      var opacity = disabled ? 0.5 : 1.0;
      var baseOptionContainerStyle = {
        flex: 1,
        paddingTop: config.paddingTop,
        paddingBottom: config.paddingBottom,
        backgroundColor: baseColor,
        opacity: opacity
      };

      var borderStyles = config.direction === 'row' ? {
        borderLeftWidth: config.separatorWidth,
        borderLeftColor: config.separatorTint
      } : {
        borderTopWidth: config.separatorWidth,
        borderTopColor: config.separatorTint
      };

      var separatorStyle = [baseOptionContainerStyle, borderStyles];

      var containerBorderRadius = config.containerBorderRadius,
          containerBorderWidth = config.containerBorderWidth;

      var borderRadiusStyle = void 0;

      if (Platform.OS === "android" && containerBorderRadius) {
        var adjustedBorderRadius = containerBorderRadius - containerBorderWidth;
        if (this.props.options.length > 1) {
          if (index === 0) {
            borderRadiusStyle = { borderTopLeftRadius: adjustedBorderRadius,
              borderBottomLeftRadius: adjustedBorderRadius };
          } else if (index === this.props.options.length - 1) {
            borderRadiusStyle = { borderTopRightRadius: adjustedBorderRadius,
              borderBottomRightRadius: adjustedBorderRadius };
          }
        } else {
          borderRadiusStyle = { borderRadius: adjustedBorderRadius };
        }
      }

      var textStyle = selected ? selectedTextStyle : normalTextStyle;

      var label = this.props.extractText ? this.props.extractText(option) : option;

      var scaleFont = this.props.allowFontScaling === false ? false : true;

      return _react2.default.createElement(
        TouchableWithoutFeedback,
        { onPress: onSelect, key: index, disabled: disabled },
        _react2.default.createElement(
          View,
          { style: [index > 0 ? separatorStyle : baseOptionContainerStyle, this.props.optionContainerStyle, borderRadiusStyle] },
          typeof this.props.renderOption === 'function' ? this.props.renderOption.call(this, option, selected) : _react2.default.createElement(
            Text,
            { allowFontScaling: scaleFont, style: textStyle },
            label
          )
        )
      );
    }
  }]);
  return SegmentedControls;
}(_react2.default.Component);

var IOS_BLUE = '#007AFF';
var IOS_WHITE = '#ffffff';

var DEFAULTS = {
  direction: 'row',

  tint: IOS_BLUE,
  backTint: IOS_WHITE,

  paddingTop: 5,
  paddingBottom: 5,
  textAlign: 'center',

  selectedTint: IOS_WHITE,
  selectedBackgroundColor: IOS_WHITE,

  separatorTint: IOS_BLUE,
  separatorWidth: 1,

  containerBorderTint: IOS_BLUE,
  containerBorderWidth: 1,
  containerBorderRadius: 5

};
exports.default = SegmentedControls;