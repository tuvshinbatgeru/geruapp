Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=babelHelpers.interopRequireDefault(_propTypes);
var _reactNative=require("react-native");






var _Arc=require("./Shapes/Arc");var _Arc2=babelHelpers.interopRequireDefault(_Arc);

var AnimatedArc=_reactNative.Animated.createAnimatedComponent(_Arc2.default);

var MIN_ARC_ANGLE=0.1;
var MAX_ARC_ANGLE=1.5*Math.PI;var

CircleSnail=function(_Component){babelHelpers.inherits(CircleSnail,_Component);

























function CircleSnail(props){babelHelpers.classCallCheck(this,CircleSnail);var _this=babelHelpers.possibleConstructorReturn(this,(CircleSnail.__proto__||Object.getPrototypeOf(CircleSnail)).call(this,
props));

_this.state={
startAngle:new _reactNative.Animated.Value(-MIN_ARC_ANGLE),
endAngle:new _reactNative.Animated.Value(0),
rotation:new _reactNative.Animated.Value(0),
colorIndex:0};return _this;

}babelHelpers.createClass(CircleSnail,[{key:"componentDidMount",value:function componentDidMount()

{
if(this.props.animating){
this.animate();
this.spin();
}
}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

props){
if(props.animating!==this.props.animating){
if(props.animating){
this.animate();
this.spin();
}else{
this.stopAnimations();
}
}
}},{key:"animate",value:function animate()

{var _this2=this;var iteration=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
_reactNative.Animated.sequence([
_reactNative.Animated.timing(this.state.startAngle,{
toValue:-MAX_ARC_ANGLE*iteration-MIN_ARC_ANGLE,
duration:this.props.duration||1000,
isInteraction:false,
easing:_reactNative.Easing.inOut(_reactNative.Easing.quad)}),

_reactNative.Animated.timing(this.state.endAngle,{
toValue:-MAX_ARC_ANGLE*iteration,
duration:this.props.duration||1000,
isInteraction:false,
easing:_reactNative.Easing.inOut(_reactNative.Easing.quad)})]).

start(function(endState){
if(endState.finished){
if(Array.isArray(_this2.props.color)){
_this2.setState({
colorIndex:iteration%_this2.props.color.length});

}
_this2.animate(iteration+1);
}
});
}},{key:"spin",value:function spin()

{var _this3=this;
_reactNative.Animated.timing(this.state.rotation,{
toValue:1,
duration:this.props.spinDuration||5000,
easing:_reactNative.Easing.linear,
isInteraction:false}).
start(function(endState){
if(endState.finished){
_this3.state.rotation.setValue(0);
_this3.spin();
}
});
}},{key:"stopAnimations",value:function stopAnimations()

{
this.state.startAngle.stopAnimation();
this.state.endAngle.stopAnimation();
this.state.rotation.stopAnimation();
}},{key:"render",value:function render()

{var _props=










this.props,animating=_props.animating,children=_props.children,color=_props.color,direction=_props.direction,hidesWhenStopped=_props.hidesWhenStopped,size=_props.size,style=_props.style,thickness=_props.thickness,restProps=babelHelpers.objectWithoutProperties(_props,["animating","children","color","direction","hidesWhenStopped","size","style","thickness"]);

if(!animating&&hidesWhenStopped){
return null;
}

var radius=size/2-thickness;
var offset={
top:thickness,
left:thickness};


var directionFactor=direction==='counter-clockwise'?-1:1;

return(
_react2.default.createElement(_reactNative.Animated.View,babelHelpers.extends({},
restProps,{
style:[
style,
{
backgroundColor:'transparent',
overflow:'hidden',
transform:[{
rotate:this.state.rotation.interpolate({
inputRange:[0,1],
outputRange:['0deg',directionFactor*360+"deg"]})}]}]}),





_react2.default.createElement(_reactNative.ART.Surface,{
width:size,
height:size},

_react2.default.createElement(AnimatedArc,{
direction:direction==='counter-clockwise'?'clockwise':'counter-clockwise',
radius:radius,
stroke:Array.isArray(color)?color[this.state.colorIndex]:color,
offset:offset,
startAngle:this.state.startAngle,
endAngle:this.state.endAngle,
strokeCap:"round",
strokeWidth:thickness})),


children));


}}]);return CircleSnail;}(_react.Component);CircleSnail.propTypes={animating:_propTypes2.default.bool,color:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.arrayOf(_propTypes2.default.string)]),children:_propTypes2.default.node,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise']),duration:_propTypes2.default.number,hidesWhenStopped:_propTypes2.default.bool,size:_propTypes2.default.number,spinDuration:_propTypes2.default.number,style:_reactNative.View.propTypes.style,thickness:_propTypes2.default.number};CircleSnail.defaultProps={animating:true,color:'rgba(0, 122, 255, 1)',direction:'counter-clockwise',hidesWhenStopped:false,size:40,thickness:3};exports.default=CircleSnail;