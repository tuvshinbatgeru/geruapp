
'use strict';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _variables = require('../styles/variables');

var _variables2 = babelHelpers.interopRequireDefault(_variables);

var _reactNativeVectorIcons = require('react-native-vector-icons');

var _selection = require('../brand/selection.json');

var _selection2 = babelHelpers.interopRequireDefault(_selection);

var IconSet = (0, _reactNativeVectorIcons.createIconSetFromIcoMoon)(_selection2.default);

var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10
  },
  header: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 50
  },
  mark: {
    height: 100,
    width: 100
  }

});

var Header = _react2.default.createClass({
  displayName: 'Header',
  getInitialState: function getInitialState() {
    return {
      text: '',
      isDisabled: true
    };
  },

  propTypes: {
    isFetching: _react.PropTypes.bool,
    showState: _react.PropTypes.bool,
    currentState: _react.PropTypes.object,
    onGetState: _react.PropTypes.func,
    onSetState: _react.PropTypes.func
  },
  _onPressMark: function _onPressMark() {
    this.props.onGetState(!this.props.showState);
  },
  _onChangeText: function _onChangeText(text) {
    this.setState({
      text: text,
      isDisabled: false
    });
  },
  _updateStateButtonPress: function _updateStateButtonPress() {
    this.props.onSetState(this.state.text);
  },
  render: function render() {
    var _this = this;

    var displayText = void 0;
    if (this.props.showState) {
      displayText = JSON.stringify(this.props.currentState);
    }

    return _react2.default.createElement(
      _reactNative.View,
      null,
      _react2.default.createElement(
        _reactNative.View,
        { style: styles.header },
        _react2.default.createElement(IconSet, { color: 'rgba(255,136,18, 0.40)',
          size: 300,
          name: 'brand_ger',
          style: {
            transform: [{
              rotate: '45deg'
            }, {
              translateY: -130
            }, {
              translateX: 100
            }]
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          null,
          _react2.default.createElement(IconSet, { color: _variables2.default.BRAND_COLOR,
            size: 100,
            name: 'brand_ger'
          })
        ),
        this.props.isFetching ? _react2.default.createElement(_reactNative.ActivityIndicator, { animating: true, size: 'large' }) : null
      ),
      this.props.showState ? _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          I18n.t('Header.current_state'),
          ' (',
          I18n.t('Header.see_console'),
          ')'
        ),
        _react2.default.createElement(_reactNative.TextInput, { style: { height: 100, borderColor: 'gray', borderWidth: 1 },
          value: displayText,
          editable: true,
          multiline: true,
          onChangeText: function onChangeText(text) {
            return _this._onChangeText(text);
          },
          numberOfLines: 20 }),
        _react2.default.createElement(_reactNative.View, { style: {
            marginTop: 10
          } })
      ) : null
    );
  }
});

module.exports = Header;