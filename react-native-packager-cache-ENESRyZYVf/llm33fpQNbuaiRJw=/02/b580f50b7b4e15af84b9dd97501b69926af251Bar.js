Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=babelHelpers.interopRequireDefault(_propTypes);
var _reactNative=require("react-native");





var INDETERMINATE_WIDTH_FACTOR=0.3;
var BAR_WIDTH_ZERO_POSITION=INDETERMINATE_WIDTH_FACTOR/(1+INDETERMINATE_WIDTH_FACTOR);var

ProgressBar=function(_Component){babelHelpers.inherits(ProgressBar,_Component);



























function ProgressBar(props){babelHelpers.classCallCheck(this,ProgressBar);var _this=babelHelpers.possibleConstructorReturn(this,(ProgressBar.__proto__||Object.getPrototypeOf(ProgressBar)).call(this,
props));_this.


























































handleLayout=function(event){
if(!_this.props.width){
_this.setState({width:event.nativeEvent.layout.width});
}
if(_this.props.onLayout){
_this.props.onLayout(event);
}
};var progress=Math.min(Math.max(props.progress,0),1);_this.state={width:0,progress:new _reactNative.Animated.Value(props.indeterminate?INDETERMINATE_WIDTH_FACTOR:progress),animationValue:new _reactNative.Animated.Value(BAR_WIDTH_ZERO_POSITION)};return _this;}babelHelpers.createClass(ProgressBar,[{key:"componentDidMount",value:function componentDidMount(){if(this.props.indeterminate){this.animate();}}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(props){if(props.indeterminate!==this.props.indeterminate){if(props.indeterminate){this.animate();}else{_reactNative.Animated.spring(this.state.animationValue,{toValue:BAR_WIDTH_ZERO_POSITION}).start();}}if(props.indeterminate!==this.props.indeterminate||props.progress!==this.props.progress){var progress=props.indeterminate?INDETERMINATE_WIDTH_FACTOR:Math.min(Math.max(props.progress,0),1);if(props.animated){_reactNative.Animated.spring(this.state.progress,{toValue:progress,bounciness:0}).start();}else{this.state.progress.setValue(progress);}}}},{key:"animate",value:function animate(){var _this2=this;this.state.animationValue.setValue(0);_reactNative.Animated.timing(this.state.animationValue,{toValue:1,duration:1000,easing:_reactNative.Easing.linear,isInteraction:false}).start(function(endState){if(endState.finished){_this2.animate();}});}},{key:"render",value:function render()

{var _props=











this.props,borderColor=_props.borderColor,borderRadius=_props.borderRadius,borderWidth=_props.borderWidth,children=_props.children,color=_props.color,height=_props.height,style=_props.style,unfilledColor=_props.unfilledColor,width=_props.width,restProps=babelHelpers.objectWithoutProperties(_props,["borderColor","borderRadius","borderWidth","children","color","height","style","unfilledColor","width"]);

var innerWidth=Math.max(0,width||this.state.width)-borderWidth*2;
var containerStyle={
width:width,
borderWidth:borderWidth,
borderColor:borderColor||color,
borderRadius:borderRadius,
overflow:'hidden',
backgroundColor:unfilledColor};

var progressStyle={
backgroundColor:color,
height:height,
transform:[{
translateX:this.state.animationValue.interpolate({
inputRange:[0,1],
outputRange:[innerWidth*-INDETERMINATE_WIDTH_FACTOR,innerWidth]})},

{
translateX:this.state.progress.interpolate({
inputRange:[0,1],
outputRange:[innerWidth/-2,0]})},

{
// Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
scaleX:this.state.progress.interpolate({
inputRange:[0,1],
outputRange:[0.0001,1]})}]};




return(
_react2.default.createElement(_reactNative.View,babelHelpers.extends({style:[containerStyle,style],onLayout:this.handleLayout},restProps),
_react2.default.createElement(_reactNative.Animated.View,{style:progressStyle}),
children));


}}]);return ProgressBar;}(_react.Component);ProgressBar.propTypes={animated:_propTypes2.default.bool,borderColor:_propTypes2.default.string,borderRadius:_propTypes2.default.number,borderWidth:_propTypes2.default.number,children:_propTypes2.default.node,color:_propTypes2.default.string,height:_propTypes2.default.number,indeterminate:_propTypes2.default.bool,onLayout:_propTypes2.default.func,progress:_propTypes2.default.number,style:_reactNative.View.propTypes.style,unfilledColor:_propTypes2.default.string,width:_propTypes2.default.number};ProgressBar.defaultProps={animated:true,borderRadius:4,borderWidth:1,color:'rgba(0, 122, 255, 1)',height:6,indeterminate:false,progress:0,width:150};exports.default=ProgressBar;