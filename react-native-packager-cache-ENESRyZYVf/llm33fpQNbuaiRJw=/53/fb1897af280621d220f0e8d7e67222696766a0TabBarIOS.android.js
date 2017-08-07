

'use strict';

var React = require('React');
var StyleSheet = require('StyleSheet');
var TabBarItemIOS = require('TabBarItemIOS');
var View = require('View');

var DummyTabBarIOS = function (_React$Component) {
  babelHelpers.inherits(DummyTabBarIOS, _React$Component);

  function DummyTabBarIOS() {
    babelHelpers.classCallCheck(this, DummyTabBarIOS);
    return babelHelpers.possibleConstructorReturn(this, (DummyTabBarIOS.__proto__ || Object.getPrototypeOf(DummyTabBarIOS)).apply(this, arguments));
  }

  babelHelpers.createClass(DummyTabBarIOS, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: [this.props.style, styles.tabGroup] },
        this.props.children
      );
    }
  }]);
  return DummyTabBarIOS;
}(React.Component);

DummyTabBarIOS.Item = TabBarItemIOS;


var styles = StyleSheet.create({
  tabGroup: {
    flex: 1
  }
});

module.exports = DummyTabBarIOS;