Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");
var _reactStaticContainer=require("react-static-container");var _reactStaticContainer2=babelHelpers.interopRequireDefault(_reactStaticContainer);

var styles=_reactNative.StyleSheet.create({
scene:{
bottom:0,
left:0,
position:'absolute',
right:0,
top:0}});var



TabbedView=function(_Component){babelHelpers.inherits(TabbedView,_Component);







function TabbedView(props,context){babelHelpers.classCallCheck(this,TabbedView);var _this=babelHelpers.possibleConstructorReturn(this,(TabbedView.__proto__||Object.getPrototypeOf(TabbedView)).call(this,
props,context));
_this.renderedSceneKeys={};
_this.renderScene=_this.renderScene.bind(_this);return _this;
}babelHelpers.createClass(TabbedView,[{key:"renderScene",value:function renderScene(

navigationState,index){
var isSelected=index===this.props.navigationState.index;
return(
_react2.default.createElement(_reactNative.View,{
key:navigationState.key,
pointerEvents:isSelected?'auto':'none',
removeClippedSubviews:!isSelected,
style:[
styles.scene,
{opacity:isSelected?1:0}]},


_react2.default.createElement(_reactStaticContainer2.default,{shouldUpdate:isSelected},
this.props.renderScene(navigationState,index))));



}},{key:"render",value:function render()

{var _this2=this;
var scenes=[];var _props$navigationStat=
this.props.navigationState,index=_props$navigationStat.index,children=_props$navigationStat.children;
children.forEach(function(item,i){
var key=item.key;
if(i!==index&&!_this2.renderedSceneKeys[key]){
return;
}
_this2.renderedSceneKeys[key]=true;
scenes.push(_this2.renderScene(item,i));
});
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
scenes));


}}]);return TabbedView;}(_react.Component);TabbedView.propTypes={navigationState:_react.PropTypes.object.isRequired,renderScene:_react.PropTypes.func.isRequired,style:_reactNative.ViewPropTypes.style};exports.default=



TabbedView;