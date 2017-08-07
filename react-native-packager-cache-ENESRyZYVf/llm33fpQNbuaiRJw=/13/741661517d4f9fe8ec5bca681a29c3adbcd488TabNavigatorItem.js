'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);


var _reactNative=require("react-native");var




TabNavigatorItem=function(_React$Component){babelHelpers.inherits(TabNavigatorItem,_React$Component);function TabNavigatorItem(){babelHelpers.classCallCheck(this,TabNavigatorItem);return babelHelpers.possibleConstructorReturn(this,(TabNavigatorItem.__proto__||Object.getPrototypeOf(TabNavigatorItem)).apply(this,arguments));}babelHelpers.createClass(TabNavigatorItem,[{key:"render",value:function render()

















{
var child=_react2.default.Children.only(this.props.children);
return _react2.default.cloneElement(child,{
style:[child.props.style,this.props.style]});

}}]);return TabNavigatorItem;}(_react2.default.Component);TabNavigatorItem.propTypes={renderIcon:_react.PropTypes.func,renderSelectedIcon:_react.PropTypes.func,badgeText:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),renderBadge:_react.PropTypes.func,title:_react.PropTypes.string,titleStyle:_reactNative.Text.propTypes.style,selectedTitleStyle:_reactNative.Text.propTypes.style,tabStyle:_reactNative.View.propTypes.style,selected:_react.PropTypes.bool,onPress:_react.PropTypes.func,allowFontScaling:_react.PropTypes.bool};TabNavigatorItem.defaultProps={};exports.default=TabNavigatorItem;