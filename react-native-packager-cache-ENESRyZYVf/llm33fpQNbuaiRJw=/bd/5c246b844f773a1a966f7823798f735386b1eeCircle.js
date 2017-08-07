Object.defineProperty(exports,"__esModule",{value:true});exports.ProgressCircle=undefined;var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=babelHelpers.interopRequireDefault(_propTypes);
var _reactNative=require("react-native");







var _Arc=require("./Shapes/Arc");var _Arc2=babelHelpers.interopRequireDefault(_Arc);
var _withAnimation=require("./withAnimation");var _withAnimation2=babelHelpers.interopRequireDefault(_withAnimation);

var CIRCLE=Math.PI*2;

var AnimatedSurface=_reactNative.Animated.createAnimatedComponent(_reactNative.ART.Surface);
var AnimatedArc=_reactNative.Animated.createAnimatedComponent(_Arc2.default);

var styles=_reactNative.StyleSheet.create({
container:{
backgroundColor:'transparent',
overflow:'hidden'}});var



ProgressCircle=exports.ProgressCircle=function(_Component){babelHelpers.inherits(ProgressCircle,_Component);

































function ProgressCircle(props,context){babelHelpers.classCallCheck(this,ProgressCircle);var _this=babelHelpers.possibleConstructorReturn(this,(ProgressCircle.__proto__||Object.getPrototypeOf(ProgressCircle)).call(this,
props,context));

_this.progressValue=0;return _this;
}babelHelpers.createClass(ProgressCircle,[{key:"componentWillMount",value:function componentWillMount()

{var _this2=this;
if(this.props.animated){
this.props.progress.addListener(function(event){
_this2.progressValue=event.value;
if(_this2.props.showsText||_this2.progressValue===1){
_this2.forceUpdate();
}
});
}
}},{key:"render",value:function render()

{var _props=



















this.props,animated=_props.animated,borderColor=_props.borderColor,borderWidth=_props.borderWidth,color=_props.color,children=_props.children,direction=_props.direction,formatText=_props.formatText,indeterminate=_props.indeterminate,progress=_props.progress,rotation=_props.rotation,showsText=_props.showsText,size=_props.size,style=_props.style,strokeCap=_props.strokeCap,textStyle=_props.textStyle,thickness=_props.thickness,unfilledColor=_props.unfilledColor,restProps=babelHelpers.objectWithoutProperties(_props,["animated","borderColor","borderWidth","color","children","direction","formatText","indeterminate","progress","rotation","showsText","size","style","strokeCap","textStyle","thickness","unfilledColor"]);

var border=borderWidth||(indeterminate?1:0);

var radius=size/2-border;
var offset={
top:border,
left:border};

var textOffset=border+thickness;
var textSize=size-textOffset*2;

var Surface=rotation?AnimatedSurface:_reactNative.ART.Surface;
var Shape=animated?AnimatedArc:_Arc2.default;
var progressValue=animated?this.progressValue:progress;
var angle=animated?_reactNative.Animated.multiply(progress,CIRCLE):progress*CIRCLE;

return(
_react2.default.createElement(_reactNative.View,babelHelpers.extends({style:[styles.container,style]},restProps),
_react2.default.createElement(Surface,{
width:size,
height:size,
style:{
transform:[{
rotate:indeterminate&&rotation?
rotation.interpolate({
inputRange:[0,1],
outputRange:['0deg','360deg']}):

'0deg'}]}},



unfilledColor&&progressValue!==1?
_react2.default.createElement(Shape,{
radius:radius,
offset:offset,
startAngle:angle,
endAngle:CIRCLE,
direction:direction,
stroke:unfilledColor,
strokeWidth:thickness}):

false,
!indeterminate?
_react2.default.createElement(Shape,{
radius:radius,
offset:offset,
startAngle:0,
endAngle:angle,
direction:direction,
stroke:color,
strokeWidth:thickness}):

false,
border?
_react2.default.createElement(_Arc2.default,{
radius:size/2,
startAngle:0,
endAngle:(indeterminate?1.8:2)*Math.PI,
stroke:borderColor||color,
strokeCap:strokeCap,
strokeWidth:border}):

false),

!indeterminate&&showsText?
_react2.default.createElement(_reactNative.View,{
style:{
position:'absolute',
left:textOffset,
top:textOffset,
width:textSize,
height:textSize,
borderRadius:textSize/2,
alignItems:'center',
justifyContent:'center'}},


_react2.default.createElement(_reactNative.Text,{
style:[{
color:color,
fontSize:textSize/4.5,
fontWeight:'300'},
textStyle]},

formatText(progressValue))):


false,
children));


}}]);return ProgressCircle;}(_react.Component);ProgressCircle.propTypes={animated:_propTypes2.default.bool,borderColor:_propTypes2.default.string,borderWidth:_propTypes2.default.number,color:_propTypes2.default.string,children:_react2.default.PropTypes.node,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise']),formatText:_propTypes2.default.func,indeterminate:_propTypes2.default.bool,progress:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.instanceOf(_reactNative.Animated.Value)]),rotation:_propTypes2.default.instanceOf(_reactNative.Animated.Value),showsText:_propTypes2.default.bool,size:_propTypes2.default.number,style:_reactNative.View.propTypes.style,textStyle:_reactNative.Text.propTypes.style,thickness:_propTypes2.default.number,unfilledColor:_propTypes2.default.string};ProgressCircle.defaultProps={borderWidth:1,color:'rgba(0, 122, 255, 1)',direction:'clockwise',formatText:function formatText(progress){return Math.round(progress*100)+"%";},progress:0,showsText:false,size:40,thickness:3};exports.default=


(0,_withAnimation2.default)(ProgressCircle);