Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _TabBar = require('./TabBar');

var _TabBar2 = babelHelpers.interopRequireDefault(_TabBar);

var _Actions = require('./Actions');

var _Actions2 = babelHelpers.interopRequireDefault(_Actions);

function Switch(props) {
  var navState = props.navigationState;

  var selector = props.selector;
  var statem = props.statem;
  if (!selector && !statem) console.error('Selector should be defined.');
  var index = -1;
  var selectedKey = void 0;
  if (!selector) {
    navState.children.forEach(function (el, i) {
      if (!(el.default || el.state)) {
        console.error('Either default or state should be defined for element=' + el.key);
      }
      if (el.default) {
        index = i;
      } else if (el.state.active) {
        index = i;
      }
    });
  } else {
    selectedKey = selector(props);
    if (!selectedKey) console.error('Selector should return key.');
    navState.children.forEach(function (el, i) {
      if (el.sceneKey === selectedKey) {
        index = i;
      }
    });
  }
  if (index === -1) console.error('A scene for key \u201C' + selectedKey + '\u201D does not exist.');
  var navigationState = babelHelpers.extends({}, navState, { index: index });

  if (index !== navState.index) {
    if (props.unmountScenes) {
      setTimeout(function () {
        _Actions2.default[selectedKey]({ unmountScenes: true });
      }, 0);
      navigationState = babelHelpers.extends({}, navState, { children: [navState.children[navState.index]], index: 0 });
    } else {
      setTimeout(function () {
        _Actions2.default[selectedKey]();
      }, 0);
    }
  }

  return _react2.default.createElement(_TabBar2.default, {
    onNavigate: props.onNavigate,
    navigationState: navigationState
  });
}

Switch.propTypes = {
  navigationState: _react.PropTypes.object,
  onNavigate: _react.PropTypes.func,
  selector: _react.PropTypes.func,
  statem: _react.PropTypes.any,
  unmountScenes: _react.PropTypes.bool
};