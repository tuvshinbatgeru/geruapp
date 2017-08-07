Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");
var _Masonry=require("../../Masonry");var _Masonry2=babelHelpers.interopRequireDefault(_Masonry);
var _variables=require("../../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);var

SuggestedShowcases=function(_Component){babelHelpers.inherits(SuggestedShowcases,_Component);function SuggestedShowcases(){babelHelpers.classCallCheck(this,SuggestedShowcases);return babelHelpers.possibleConstructorReturn(this,(SuggestedShowcases.__proto__||Object.getPrototypeOf(SuggestedShowcases)).apply(this,arguments));}babelHelpers.createClass(SuggestedShowcases,[{key:"_loadMore",value:function _loadMore()

{var pageIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
this.props.onGetSuggestedShowcases(pageIndex);
}},{key:"_onRowRender",value:function _onRowRender(

item){
return(
_react2.default.createElement(_reactNative.View,{style:styles.portfolioContainer},
_react2.default.createElement(_reactNative.View,{style:styles.cardHeader},
_react2.default.createElement(_reactNative.Image,{source:{uri:item.collage.url},
style:styles.porfilioItem}))));



}},{key:"render",value:function render()

{var _props=
this.props,loading=_props.loading,items=_props.items;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_Masonry2.default,{columnCount:3,
offset:0,
topOffset:0,
loading:true,
items:items,
onLoadMore:this._loadMore.bind(this),
rowRender:this._onRowRender.bind(this),
onClick:this.props.onSuggestedClicked
//onScroll={this.masonryScrolled.bind(this)}
})));


}}]);return SuggestedShowcases;}(_react.Component);exports.default=SuggestedShowcases;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},


portfolioContainer:{
flex:1,
padding:5,
flexDirection:'column',
marginBottom:5},


cardHeader:{
flex:1},


cardInfo:{
height:50,
flexDirection:'row',
justifyContent:'space-between',
marginTop:3,
padding:3},


caption:{
flex:2,
fontFamily:_variables2.default.FONT_REGULAR,
fontSize:10,
color:_variables2.default.BRAND_BLACK},


price:{
fontFamily:_variables2.default.FONT_BOLD,
fontSize:10,
color:_variables2.default.BRAND_SUBCOLOR1},


porfilioItem:{
flex:1,
resizeMode:'cover',
borderRadius:5}});