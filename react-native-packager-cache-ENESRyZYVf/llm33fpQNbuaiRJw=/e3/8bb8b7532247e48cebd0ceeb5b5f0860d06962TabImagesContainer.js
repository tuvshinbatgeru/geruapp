Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");
var _reactNativeScrollableTabView=require("react-native-scrollable-tab-view");var _reactNativeScrollableTabView2=babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);
var _ProjectTabBar=require("../ProjectTabBar");var _ProjectTabBar2=babelHelpers.interopRequireDefault(_ProjectTabBar);
var _SuggestedShowcases=require("./tabs/SuggestedShowcases");var _SuggestedShowcases2=babelHelpers.interopRequireDefault(_SuggestedShowcases);
var _ImageUploaderList=require("./tabs/ImageUploaderList");var _ImageUploaderList2=babelHelpers.interopRequireDefault(_ImageUploaderList);
var _reactNativeRadialMenu=require("../react-native-radial-menu");var _reactNativeRadialMenu2=babelHelpers.interopRequireDefault(_reactNativeRadialMenu);var

TabImagesContainer=function(_Component){babelHelpers.inherits(TabImagesContainer,_Component);function TabImagesContainer(){babelHelpers.classCallCheck(this,TabImagesContainer);return babelHelpers.possibleConstructorReturn(this,(TabImagesContainer.__proto__||Object.getPrototypeOf(TabImagesContainer)).apply(this,arguments));}babelHelpers.createClass(TabImagesContainer,[{key:"_renderTab",value:function _renderTab(

tab){
switch(tab.get('key')){
case"suggested":
return _react2.default.createElement(_SuggestedShowcases2.default,{loading:tab.get('fetching'),
items:tab.get('data'),
onSuggestedClicked:this.props.onSuggestedClicked,
onGetSuggestedShowcases:this.props.onGetSuggestedShowcases});
break;
case"bookmarked":
return(
_react2.default.createElement(_ImageUploaderList2.default,null));

break;
case"take":
return(
_react2.default.createElement(_ImageUploaderList2.default,null));

break;
default:
break;}

}},{key:"render",value:function render()

{var _this2=this;var
tabs=this.props.tabs;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNativeScrollableTabView2.default,{renderTabBar:function renderTabBar(){return _react2.default.createElement(_ProjectTabBar2.default,null);}},

tabs.map(function(tab,i){return(
_react2.default.createElement(_reactNative.View,{tabLabel:tab.label,style:{flex:3}},
_this2._renderTab(tab)));}))));









}}]);return TabImagesContainer;}(_react.Component);exports.default=TabImagesContainer;


var styles=_reactNative.StyleSheet.create({
container:{
padding:10,
flex:3},


testContainer:{
flex:1,
justifyContent:'space-around',
alignItems:'center',
backgroundColor:'#F5FCFF'},


tabContainer:{
marginTop:5},


item:{
height:60,
width:60,
borderRadius:30,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#DDD'},


root:{
backgroundColor:'#FFCC00'}});