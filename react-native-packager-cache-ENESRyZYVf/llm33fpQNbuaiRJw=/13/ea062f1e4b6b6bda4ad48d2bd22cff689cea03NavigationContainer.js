
'use strict';

var React = require('react');
var NavigationRootContainer = require('./NavigationRootContainer');

function createNavigationContainer(Component) {
  var NavigationComponent = function (_React$Component) {
    babelHelpers.inherits(NavigationComponent, _React$Component);

    function NavigationComponent() {
      babelHelpers.classCallCheck(this, NavigationComponent);
      return babelHelpers.possibleConstructorReturn(this, (NavigationComponent.__proto__ || Object.getPrototypeOf(NavigationComponent)).apply(this, arguments));
    }

    babelHelpers.createClass(NavigationComponent, [{
      key: 'render',
      value: function render() {
        return React.createElement(Component, babelHelpers.extends({
          onNavigate: this.getNavigationHandler()
        }, this.props));
      }
    }, {
      key: 'getNavigationHandler',
      value: function getNavigationHandler() {
        return this.props.onNavigate || this.context.onNavigate;
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        return {
          onNavigate: this.getNavigationHandler()
        };
      }
    }]);
    return NavigationComponent;
  }(React.Component);

  NavigationComponent.contextTypes = {
    onNavigate: React.PropTypes.func
  };
  NavigationComponent.childContextTypes = {
    onNavigate: React.PropTypes.func
  };
  return NavigationComponent;
}

var NavigationContainer = {
  create: createNavigationContainer,
  RootContainer: NavigationRootContainer
};

module.exports = NavigationContainer;