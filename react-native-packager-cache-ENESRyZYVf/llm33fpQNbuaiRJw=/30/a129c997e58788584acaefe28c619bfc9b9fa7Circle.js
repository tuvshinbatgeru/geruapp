Object.defineProperty(exports,"__esModule",{value:true});


var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _propTypes=require("prop-types");var _propTypes2=babelHelpers.interopRequireDefault(_propTypes);
var _reactNative=require("react-native");

function makeCirclePath(x,y,radius,direction){
var arcMethod=direction==='counter-clockwise'?'counterArc':'arc';

return _reactNative.ART.Path().
moveTo(x,y).
move(radius,0)[
arcMethod](0,radius*2,radius,radius)[
arcMethod](0,radius*-2,radius,radius).
close();
}/* eslint new-cap: ["error", { "capIsNew": false }] *//* eslint no-unexpected-multiline: 0 */var

Circle=function(_Component){babelHelpers.inherits(Circle,_Component);function Circle(){babelHelpers.classCallCheck(this,Circle);return babelHelpers.possibleConstructorReturn(this,(Circle.__proto__||Object.getPrototypeOf(Circle)).apply(this,arguments));}babelHelpers.createClass(Circle,[{key:"render",value:function render()
















{var _props=
this.props,radius=_props.radius,offset=_props.offset,strokeWidth=_props.strokeWidth,direction=_props.direction,restProps=babelHelpers.objectWithoutProperties(_props,["radius","offset","strokeWidth","direction"]);
var path=makeCirclePath(
(offset.left||0)+strokeWidth/2,
(offset.top||0)+strokeWidth/2,
radius-strokeWidth/2,
direction);

return(
_react2.default.createElement(_reactNative.ART.Shape,babelHelpers.extends({
d:path,
strokeCap:"butt",
strokeWidth:strokeWidth},
restProps)));


}}]);return Circle;}(_react.Component);Circle.propTypes={radius:_propTypes2.default.number.isRequired,offset:_propTypes2.default.shape({top:_propTypes2.default.number,left:_propTypes2.default.number}),strokeWidth:_propTypes2.default.number,direction:_propTypes2.default.oneOf(['clockwise','counter-clockwise'])};Circle.defaultProps={offset:{top:0,left:0},strokeWidth:0,direction:'clockwise'};exports.default=Circle;