

'use strict';

var React = require('React');
var View = require('View');
var StyleSheet = require('StyleSheet');

var DummyTab = function (_React$Component) {
  babelHelpers.inherits(DummyTab, _React$Component);

  function DummyTab() {
    babelHelpers.classCallCheck(this, DummyTab);
    return babelHelpers.possibleConstructorReturn(this, (DummyTab.__proto__ || Object.getPrototypeOf(DummyTab)).apply(this, arguments));
  }

  babelHelpers.createClass(DummyTab, [{
    key: 'render',
    value: function render() {
      if (!this.props.selected) {
        return React.createElement(View, null);
      }
      return React.createElement(
        View,
        { style: [this.props.style, styles.tab] },
        this.props.children
      );
    }
  }]);
  return DummyTab;
}(React.Component);

var styles = StyleSheet.create({
  tab: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderColor: 'red',
    borderWidth: 1
  }
});

module.exports = DummyTab;