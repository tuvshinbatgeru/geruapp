Object.defineProperty(exports,"__esModule",{value:true});






var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);



var _reactNative=require("react-native");/*
 * A smart badge for react-native apps
 * https://github.com/react-native-component/react-native-smart-badge/
 * Released under the MIT license
 * Copyright (c) 2016 react-native-component <moonsunfall@aliyun.com>
 */
var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'red',
justifyContent:'center',
alignItems:'center',
flexDirection:'row'},

text:{
paddingVertical:2,
paddingHorizontal:4,
color:'#fff',
fontFamily:'.HelveticaNeueInterface-MediumP4',
backgroundColor:'transparent',
fontSize:14,
textAlign:'center',//for android
textAlignVertical:'center'//for android
}});var


Badge=function(_Component){babelHelpers.inherits(Badge,_Component);
















// 构造
function Badge(props){babelHelpers.classCallCheck(this,Badge);

// 初始状态
var _this=babelHelpers.possibleConstructorReturn(this,(Badge.__proto__||Object.getPrototypeOf(Badge)).call(this,props));_this.























_onLayout=function(e){
var width=void 0;

if(e.nativeEvent.layout.width<=e.nativeEvent.layout.height){
width=e.nativeEvent.layout.height;
}else
{
width=e.nativeEvent.layout.width+_this.props.extraPaddingHorizontal;
}
width=Math.max(width,_this.props.minWidth);
if(_this._width==width){
return;
}
_this._width=width;
var height=Math.max(e.nativeEvent.layout.height,_this.props.minHeight);
var borderRadius=height/2;
_this._container.setNativeProps({
style:{
width:width,
height:height,
borderRadius:borderRadius}});


};_this.state={};_this._width=0;return _this;}babelHelpers.createClass(Badge,[{key:"render",value:function render(){var _this2=this;return _react2.default.createElement(_reactNative.View,{ref:function ref(component){return _this2._container=component;},style:[styles.container,this.props.style]},this._renderChildren());}},{key:"_renderChildren",value:function _renderChildren(){var _this3=this;return _react2.default.Children.map(this.props.children,function(child){if(!_react2.default.isValidElement(child)){return _react2.default.createElement(_reactNative.Text,{onLayout:_this3._onLayout,style:[styles.text,_this3.props.textStyle]},child);}return child;});}}]);return Badge;}(_react.Component);Badge.defaultProps={extraPaddingHorizontal:10,minHeight:0,minWidth:0};Badge.propTypes={//borderRadius: PropTypes.number,   //number 18, null 5
extraPaddingHorizontal:_react.PropTypes.number,style:_reactNative.View.propTypes.style,textStyle:_reactNative.Text.propTypes.style,minHeight:_react.PropTypes.number,minWidth:_react.PropTypes.number};exports.default=Badge;