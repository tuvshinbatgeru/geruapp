Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");
var _variables=require("../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);


var _TaggableSearch=require("../../components/TaggableSearch");var _TaggableSearch2=babelHelpers.interopRequireDefault(_TaggableSearch);
var _reactNativeNavbar=require("react-native-navbar");var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _NavBarIcon=require("../../components/NavBarIcon");var _NavBarIcon2=babelHelpers.interopRequireDefault(_NavBarIcon);
var _NavBarSearch=require("../../components/NavBarSearch");var _NavBarSearch2=babelHelpers.interopRequireDefault(_NavBarSearch);
var _RelatedTags=require("./RelatedTags");var _RelatedTags2=babelHelpers.interopRequireDefault(_RelatedTags);

var _Masonry=require("../../components/Masonry");var _Masonry2=babelHelpers.interopRequireDefault(_Masonry);
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);var

ShowcaseListComponent=function(_Component){babelHelpers.inherits(ShowcaseListComponent,_Component);

function ShowcaseListComponent(props){babelHelpers.classCallCheck(this,ShowcaseListComponent);var _this=babelHelpers.possibleConstructorReturn(this,(ShowcaseListComponent.__proto__||Object.getPrototypeOf(ShowcaseListComponent)).call(this,
props));

_this.state={
delta:1,
lastScrollTop:0,
navbarHeight:70,
hideNavbar:false};return _this;

}babelHelpers.createClass(ShowcaseListComponent,[{key:"_loadMore",value:function _loadMore()

{var pageIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
this.props.onGetPortfolios(pageIndex);
}},{key:"_onRowRender",value:function _onRowRender(

item,itemWidth,offset){
return(
_react2.default.createElement(_reactNative.View,{style:styles.portfolioContainer},
_react2.default.createElement(_reactNative.View,{style:{height:item.cover.ratio*itemWidth+offset}},
_react2.default.createElement(_reactNative.Image,{source:{uri:item.cover.url},
style:styles.porfilioItem})),

_react2.default.createElement(_reactNative.View,{style:{padding:3}},
_react2.default.createElement(_reactNative.Text,{style:{fontFamily:_variables.font.bold,fontSize:15,color:_variables2.default.BRAND_BLACK}},item.title)),

_react2.default.createElement(_reactNative.View,{style:{paddingBottom:5,paddingHorizontal:3}},
_react2.default.createElement(_reactNative.Text,{style:[styles.caption,{textAlign:'justify',color:_variables2.default.BRAND_GRAY}]},item.caption)),

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerCenter,{height:30}]},
_react2.default.createElement(_reactNative.View,{style:[{width:30}]},
_react2.default.createElement(_reactNative.Image,{style:{width:null,height:null,flex:1,borderRadius:30},
source:{uri:"https://scontent.fuln1-1.fna.fbcdn.net/v/t1.0-1/p160x160/12733965_1022408714486124_4791379202953934223_n.jpg?oh=c5dee8ac5caada420d79f7413ed33701&oe=5A341C7F"}})),


_react2.default.createElement(_reactNative.View,{style:[{flex:1,paddingLeft:10}]},
_react2.default.createElement(_reactNative.Text,{style:[_variables.layout.h2,{fontFamily:_variables.font.regular,fontSize:13}]},"Tuvshinbat Gansukh")))));




}},{key:"showcaseNavigation",value:function showcaseNavigation(

item){
alert(item);
}},{key:"masonryScrolled",value:function masonryScrolled(

event){var _state=
this.state,delta=_state.delta,lastScrollTop=_state.lastScrollTop,navbarHeight=_state.navbarHeight,hideNavbar=_state.hideNavbar;var
contentOffset=event.nativeEvent.contentOffset;
var scrollOffset=contentOffset.y;

if(Math.abs(lastScrollTop-scrollOffset)<=delta)
return;

if(scrollOffset>lastScrollTop&&scrollOffset>navbarHeight){
// Scroll Down
hideNavbar=true;
}else{
// Scroll Up
hideNavbar=false;
}

lastScrollTop=scrollOffset;

this.setState({
lastScrollTop:lastScrollTop,
hideNavbar:hideNavbar});


}},{key:"render",value:function render()

{var
hideNavbar=this.state.hideNavbar;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:{padding:10}},
_react2.default.createElement(_TaggableSearch2.default,{onSearchFired:this.props.onToggleSearchScene})),


_react2.default.createElement(_RelatedTags2.default,{display:hideNavbar}),

_react2.default.createElement(_Masonry2.default,{columnCount:2,
offset:100,
topOffset:100,
loading:this.props.portfolios.fetching,
items:this.props.portfolios.get('data'),
onLoadMore:this._loadMore.bind(this),
rowRender:this._onRowRender.bind(this),
onClick:this.showcaseNavigation.bind(this),
onScroll:this.masonryScrolled.bind(this)})));


}}]);return ShowcaseListComponent;}(_react.Component);//import { SearchBar } from '../../components/react-native-taggable-search'
exports.default=ShowcaseListComponent;

var styles=_reactNative.StyleSheet.create({
h4:{
fontSize:18,
fontFamily:'Lato-Bold'},


h5:{
fontSize:15,
color:'#b5b5b5'},


container:{
flex:1},


portfolioContainer:{
flex:1,
padding:5,
flexDirection:'column',
marginBottom:25},


cardHeader:{
flex:1},


cardInfo:{
//height: 50,
flexDirection:'row',
justifyContent:'space-between',
marginTop:3,
padding:3},


caption:{
flex:2,
fontFamily:_variables2.default.FONT_REGULAR,
fontSize:13,
color:_variables2.default.BRAND_BLACK},


price:{
fontFamily:_variables2.default.FONT_BOLD,
fontSize:14,
color:_variables2.default.BRAND_SUBCOLOR1},


porfilioItem:{
flex:1,
resizeMode:'cover',
borderRadius:5},


actionButtonIcon:{
fontSize:20,
height:22,
color:'white'}});



ShowcaseListComponent.propTypes={
portfolios:_react.PropTypes.object,
onToggleSearchScene:_react.PropTypes.func,
onGetPortfolios:_react.PropTypes.func};