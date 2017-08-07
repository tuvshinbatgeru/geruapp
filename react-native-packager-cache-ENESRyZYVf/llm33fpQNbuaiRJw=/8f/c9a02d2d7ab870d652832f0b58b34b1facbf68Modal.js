Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _DefaultRenderer = require('./DefaultRenderer');

var _DefaultRenderer2 = babelHelpers.interopRequireDefault(_DefaultRenderer);

var propTypes = {
  navigationState: _react.PropTypes.shape({
    children: _react.PropTypes.array
  }).isRequired,
  onNavigate: _react.PropTypes.func.isRequired
};

function Modal(props) {
  var children = props.navigationState.children;
  var state = children[0];

  return _react2.default.createElement(
    _reactNative.View,
    { style: { flex: 1 } },
    _react2.default.createElement(_DefaultRenderer2.default, babelHelpers.extends({
      navigationState: state,
      key: state.key
    }, state, {
      onNavigate: props.onNavigate
    })),
    children.length > 1 && children.map(function (el, i) {
      if (i > 0 && el.component) {
        var Component = el.component;
        return _react2.default.createElement(Component, babelHelpers.extends({
          navigationState: children[i],
          key: el.key
        }, el, {
          onNavigate: props.onNavigate
        }));
      }

      return null;
    })
  );
}

Modal.propTypes = propTypes;