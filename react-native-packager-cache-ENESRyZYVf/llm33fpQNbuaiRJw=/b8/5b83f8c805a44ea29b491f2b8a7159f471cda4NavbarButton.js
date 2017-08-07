Object.defineProperty(exports,"__esModule",{value:true});exports.default=









NavbarButton;var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);var _reactNative=require("react-native");var _propTypes=require("prop-types");var _propTypes2=babelHelpers.interopRequireDefault(_propTypes);var _styles=require("./styles");var _styles2=babelHelpers.interopRequireDefault(_styles);function NavbarButton(props){var

style=






props.style,tintColor=props.tintColor,title=props.title,handler=props.handler,disabled=props.disabled,accessible=props.accessible,accessibilityLabel=props.accessibilityLabel;

return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
style:_styles2.default.navBarButton,
onPress:handler,
disabled:disabled,
accessible:accessible,
accessibilityLabel:accessibilityLabel},

_react2.default.createElement(_reactNative.View,{style:style},
_react2.default.createElement(_reactNative.Text,{style:[_styles2.default.navBarButtonText,{color:tintColor}]},title))));



}

NavbarButton.propTypes={
style:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.array]),

tintColor:_propTypes2.default.string,
title:_propTypes2.default.string,
handler:_propTypes2.default.func,
disabled:_propTypes2.default.bool,
accessible:_propTypes2.default.bool,
accessibilityLabel:_propTypes2.default.string};


NavbarButton.defaultProps={
style:{},
title:'',
tintColor:'#0076FF',
disabled:false,
handler:function handler(){return{};}};