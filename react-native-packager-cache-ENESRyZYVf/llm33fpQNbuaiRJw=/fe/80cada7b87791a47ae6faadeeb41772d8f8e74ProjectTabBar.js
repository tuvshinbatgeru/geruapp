Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");






var _variables=require("../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);

var ProjectTabBar=_react2.default.createClass({displayName:"ProjectTabBar",
tabIcons:[],

propTypes:{
goToPage:_react2.default.PropTypes.func,
activeTab:_react2.default.PropTypes.number,
tabs:_react2.default.PropTypes.array},


componentDidMount:function componentDidMount(){
this._listener=this.props.scrollValue.addListener(this.setAnimationValue);
},

setAnimationValue:function setAnimationValue(_ref){var _this=this;var value=_ref.value;
this.tabIcons.forEach(function(icon,i){
var progress=Math.min(1,Math.abs(value-i));

icon.setNativeProps({
style:{
color:_this.iconColor(progress)}});


});
},

//color between rgb(59,89,152) and rgb(204,204,204)
iconColor:function iconColor(progress){
var red=59+145*progress;
var green=89+115*progress;
var blue=152+52*progress;
return'rgb(${red}, ${green}, ${blue})';
},

render:function render(){var _this2=this;
var containerWidth=this.props.containerWidth;
var numberOfTabs=this.props.tabs.length;
var tabUnderlineStyle={
position:'absolute',
width:containerWidth/numberOfTabs-2,
//backgroundColor: '#FE5F55',
height:2,
bottom:5,
marginLeft:2,
marginRight:2,
paddingHorizontal:20,
zIndex:1,
justifyContent:'center',
alignItems:'center'};


var left={
transform:[
{
translateX:this.props.scrollValue.interpolate({
inputRange:[0,1],
outputRange:[0,containerWidth/numberOfTabs]})}]};var






fixed=
this.props.fixed;

return _react2.default.createElement(_reactNative.View,{style:[styles.tabs,'',this.props.style]},

this.props.tabs.map(function(tab,i){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{key:tab,onPress:function onPress(){return _this2.props.goToPage(i);},style:styles.tab},
_react2.default.createElement(_reactNative.View,{style:styles.tabContainer},
_react2.default.createElement(_reactNative.Text,{style:[styles.tabText,_this2.props.activeTab===i?styles.activeTab:''],
ref:function ref(text){_this2.tabIcons[i]=text;}},tab))));



}),

_react2.default.createElement(_reactNative.Animated.View,{style:[tabUnderlineStyle,left,this.props.underlineStyle]},
_react2.default.createElement(_reactNative.View,{style:{height:2,width:50,borderRadius:10,backgroundColor:'#FE5F55'}})));


}});


var styles=_reactNative.StyleSheet.create({
tabContainer:{
padding:3,
alignItems:'center',
justifyContent:'center'},


tabText:{
color:'#b5b5b5',
fontFamily:_variables2.default.FONT_REGULAR},


activeTab:{
color:'#555555',
fontFamily:_variables2.default.FONT_BOLD},


tab:{
flex:1,
alignItems:'center',
justifyContent:'center',
zIndex:2},


tabs:{
height:40,
flexDirection:'row',
//backgroundColor: '#fff',
//backgroundColor: 'transparent',
justifyContent:'space-around',
borderRadius:5},


fixedTabs:{
position:'absolute',
top:0,
left:0,
right:0,
height:40,
zIndex:2}});exports.default=



ProjectTabBar;