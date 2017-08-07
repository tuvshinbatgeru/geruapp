Object.defineProperty(exports,"__esModule",{value:true});

var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=babelHelpers.interopRequireDefault(_propTypes);
var _reactNative=require("react-native");

var CIRCLE=Math.PI*2;/* eslint new-cap: ["error", { "capIsNew": false }] */

function makeArcPath(x,y,startAngleArg,endAngleArg,radius,direction){
var startAngle=startAngleArg;
var endAngle=endAngleArg;
if(endAngle-startAngle>=CIRCLE){
endAngle=CIRCLE+endAngle%CIRCLE;
}else{
endAngle=endAngle%CIRCLE;
}
startAngle=startAngle%CIRCLE;
var angle=startAngle>endAngle?CIRCLE-startAngle+endAngle:endAngle-startAngle;

if(angle>=CIRCLE){
return _reactNative.ART.Path().
moveTo(x+radius,y).
arc(0,radius*2,radius,radius).
arc(0,radius*-2,radius,radius).
close();
}

var directionFactor=direction==='counter-clockwise'?-1:1;
endAngle*=directionFactor;
startAngle*=directionFactor;
var startSine=Math.sin(startAngle);
var startCosine=Math.cos(startAngle);
var endSine=Math.sin(endAngle);
var endCosine=Math.cos(endAngle);

var arcFlag=angle>Math.PI?1:0;
var reverseFlag=direction==='counter-clockwise'?0:1;

return"M"+(x+radius*(1+startSine))+" "+(y+radius-radius*startCosine)+"\n          A"+
radius+" "+radius+" 0 "+arcFlag+" "+reverseFlag+" "+(x+radius*(1+endSine))+" "+(y+radius-radius*endCosine);
}var

Arc=function(_Component){babelHelpers.inherits(Arc,_Component);function Arc(){babelHelpers.classCallCheck(this,Arc);return babelHelpers.possibleConstructorReturn(this,(Arc.__proto__||Object.getPrototypeOf(Arc)).apply(this,arguments));}babelHelpers.createClass(Arc,[{key:"render",value:function render()





















{var _props=









this.props,startAngle=_props.startAngle,endAngle=_props.endAngle,radius=_props.radius,offset=_props.offset,direction=_props.direction,strokeCap=_props.strokeCap,strokeWidth=_props.strokeWidth,restProps=babelHelpers.objectWithoutProperties(_props,["startAngle","endAngle","radius","offset","direction","strokeCap","strokeWidth"]);

var path=makeArcPath(
(offset.left||0)+strokeWidth/2,
(offset.top||0)+strokeWidth/2,
startAngle,
endAngle,
radius-strokeWidth/2,
direction);


return(
_react2.default.createElement(_reactNative.ART.Shape,babelHelpers.extends({
d:path,
strokeCap:strokeCap,
strokeWidth:strokeWidth},
restProps)));


}}]);return Arc;}(_react.Component);Arc.propTypes={startAngle:_propTypes2.default.number.isRequired,// in radians
endAngle:_propTypes2.default.number.isRequired,// in radians
radius:_propTypes2.default.number.isRequired,offset:_propTypes2.default.shape({top:_propTypes2.default.number,left:_propTypes2.default.number}),strokeCap:_propTypes2.default.string,strokeWidth:_propTypes2.default.number,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise'])};Arc.defaultProps={startAngle:0,offset:{top:0,left:0},strokeCap:'butt',strokeWidth:0,direction:'clockwise'};exports.default=Arc;