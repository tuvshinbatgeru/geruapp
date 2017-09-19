var React = require('react');

var _ReactNative = ReactNative = require('react-native'),
    ViewPropTypes = _ReactNative.ViewPropTypes;

var _ReactNative2 = ReactNative,
    StyleSheet = _ReactNative2.StyleSheet,
    Text = _ReactNative2.Text,
    View = _ReactNative2.View,
    Animated = _ReactNative2.Animated;

var Button = require('./Button');

var DefaultTabBar = React.createClass({
  displayName: 'DefaultTabBar',

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: ViewPropTypes.style
  },

  getDefaultProps: function getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null
    };
  },
  renderTabOption: function renderTabOption(name, page) {},
  renderTab: function renderTab(name, page, isTabActive, onPressHandler) {
    var _props = this.props,
        activeTextColor = _props.activeTextColor,
        inactiveTextColor = _props.inactiveTextColor,
        textStyle = _props.textStyle;

    var textColor = isTabActive ? activeTextColor : inactiveTextColor;
    var fontWeight = isTabActive ? 'bold' : 'normal';

    return React.createElement(
      Button,
      {
        style: { flex: 1 },
        key: name,
        accessible: true,
        accessibilityLabel: name,
        accessibilityTraits: 'button',
        onPress: function onPress() {
          return onPressHandler(page);
        }
      },
      React.createElement(
        View,
        { style: [styles.tab, this.props.tabStyle] },
        React.createElement(
          Text,
          { style: [{ color: textColor, fontWeight: fontWeight }, textStyle] },
          name
        )
      )
    );
  },
  render: function render() {
    var _this = this;

    var containerWidth = this.props.containerWidth;
    var numberOfTabs = this.props.tabs.length;
    var tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0
    };

    var translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    });
    return React.createElement(
      View,
      { style: [styles.tabs, { backgroundColor: this.props.backgroundColor }, this.props.style] },
      this.props.tabs.map(function (name, page) {
        var isTabActive = _this.props.activeTab === page;
        var renderTab = _this.props.renderTab || _this.renderTab;
        return renderTab(name, page, isTabActive, _this.props.goToPage);
      }),
      React.createElement(Animated.View, {
        style: [tabUnderlineStyle, {
          transform: [{ translateX: translateX }]
        }, this.props.underlineStyle]
      })
    );
  }
});

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc'
  }
});

module.exports = DefaultTabBar;