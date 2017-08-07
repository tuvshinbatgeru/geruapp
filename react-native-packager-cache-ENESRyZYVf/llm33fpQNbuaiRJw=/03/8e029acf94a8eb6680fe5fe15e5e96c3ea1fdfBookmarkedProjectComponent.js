'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);

var _reactNative=require("react-native");








var _variables=require("../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);
var _Masonry=require("../../components/Masonry");var _Masonry2=babelHelpers.interopRequireDefault(_Masonry);
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeLinearGradient=require("react-native-linear-gradient");var _reactNativeLinearGradient2=babelHelpers.interopRequireDefault(_reactNativeLinearGradient);
var _reactNativeNavbar=require("react-native-navbar");var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _CustomGeruIcon=require("../../components/CustomGeruIcon");var _CustomGeruIcon2=babelHelpers.interopRequireDefault(_CustomGeruIcon);var

BookmarkedProjectComponent=function(_Component){babelHelpers.inherits(BookmarkedProjectComponent,_Component);

function BookmarkedProjectComponent(props){babelHelpers.classCallCheck(this,BookmarkedProjectComponent);var _this=babelHelpers.possibleConstructorReturn(this,(BookmarkedProjectComponent.__proto__||Object.getPrototypeOf(BookmarkedProjectComponent)).call(this,
props));

_this._onRowRender=_this._onRowRender.bind(_this);return _this;
}babelHelpers.createClass(BookmarkedProjectComponent,[{key:"_loadMore",value:function _loadMore()

{
//this.props.onGetPortfolios(pageIndex)
var pageIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;}},{key:"_onRowRender",value:function _onRowRender(

item,itemWidth,offset){
//alert('123')
return(
_react2.default.createElement(_reactNative.View,{style:styles.portfolioContainer},
_react2.default.createElement(_reactNative.View,{style:{height:item.cover.ratio*itemWidth+offset}},
_react2.default.createElement(_reactNativeLinearGradient2.default,{style:{zIndex:3,position:'absolute',top:0,left:0,right:0,height:item.cover.ratio*itemWidth+offset,paddingVertical:5,paddingHorizontal:10,borderRadius:5},
colors:['#242424','rgba(255, 255, 255, 0)'],
locations:[0,0.2]},

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{height:24}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerStart,{flex:1}]},
_react2.default.createElement(_Ionicons2.default,{name:"heart",
color:_variables2.default.BRAND_WHITE,
size:15}),

_react2.default.createElement(_reactNative.Text,{style:{color:'#fff',marginLeft:3,fontFamily:_variables.font.regular}},"9")),

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerEnd,{flex:1}]},
_react2.default.createElement(_Ionicons2.default,{name:"eye",
color:_variables2.default.BRAND_WHITE,
size:15}),

_react2.default.createElement(_reactNative.Text,{style:{color:'#fff',marginLeft:3,fontFamily:_variables.font.regular}},"310")))),



_react2.default.createElement(_reactNative.Image,{source:{uri:item.cover.url},
style:styles.porfilioItem})),


_react2.default.createElement(_reactNative.View,{style:styles.cardInfo},
_react2.default.createElement(_reactNative.Text,{style:[styles.caption,{textAlign:'justify'}]},item.caption)),



_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{paddingVertical:1}]},

item.tags.map(function(tag,i){return(
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{borderRadius:5,borderColor:'#9299A7',borderWidth:1,paddingVertical:1,paddingHorizontal:10,marginRight:5}]},
_react2.default.createElement(_reactNative.Text,{style:{color:'#9299A7',fontSize:11,fontFamily:_variables.font.bold}},
tag.name.toUpperCase())));}),





_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{borderRadius:5,backgroundColor:'#9299A7',paddingVertical:1,paddingHorizontal:5,marginRight:5}]},
_react2.default.createElement(_reactNative.Text,{style:{color:_variables2.default.BRAND_WHITE,fontSize:11,fontFamily:_variables.font.bold}},"+3"))),






_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{paddingVertical:5}]},
_react2.default.createElement(_reactNative.View,{style:[{width:24,height:24}]},
_react2.default.createElement(_reactNative.Image,{source:{uri:item.user.avatar_url},
style:{flex:1,width:null,heigth:null,borderRadius:24}})),

_react2.default.createElement(_reactNative.View,{style:[{flex:1,justifyContent:'center',paddingHorizontal:5}]},
_react2.default.createElement(_reactNative.Text,{style:{fontFamily:_variables.font.regular,fontSize:13,color:_variables2.default.BRAND_BLACK}},item.user.first_name," ",item.user.last_name)))));







}},{key:"render",value:function render()

{var


allBookmarks=
this.props.allBookmarks;

var titleConfig={
title:'Project Bookmark',
style:{
fontFamily:_variables.font.bold,
color:_variables2.default.BRAND_GREY}};



return(
_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_react2.default.createElement(_reactNativeNavbar2.default,{title:titleConfig,
leftButton:
_react2.default.createElement(_CustomGeruIcon2.default,{icon:"left_arrow",
size:16,
onPress:this.props.onBackPressed,
color:_variables2.default.BRAND_GRAY})}),




_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.TouchableOpacity,null,
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,styles.tagContainer,{backgroundColor:'#efefef'}]},
_react2.default.createElement(_reactNative.Text,{style:{fontFamily:_variables.font.regular,fontSize:15,color:_variables2.default.BRAND_BLACK}},"\u0411\u04AF\u0433\u0434 "))),



_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_react2.default.createElement(_reactNative.ScrollView,{horizontal:true,
style:{flex:1},
showsHorizontalScrollIndicator:false},


allBookmarks.get('tags').map(function(tag,i){return(
_react2.default.createElement(_reactNative.TouchableOpacity,null,
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,styles.tagContainer,{}]},
_react2.default.createElement(_reactNative.Text,{style:{fontFamily:_variables.font.regular,fontSize:15,color:_variables2.default.BRAND_BLACK}},tag.name," "))));})))),









_react2.default.createElement(_Masonry2.default,{columnCount:2,
offset:50,
topOffset:0,
loading:allBookmarks.get('fetching'),
items:allBookmarks.get('bookmarks'),
onLoadMore:this._loadMore.bind(this),
rowRender:this._onRowRender.bind(this)
//onClick={this.showcaseNavigation.bind(this)}/>
})));



}}]);return BookmarkedProjectComponent;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
portfolioContainer:{
flex:1,
padding:5,
flexDirection:'column',
marginBottom:25},


cardHeader:{
flex:1},


cardInfo:{
//height: 30,
flexDirection:'row',
justifyContent:'space-between',
//marginTop: 3,
padding:3},


caption:{
flex:2,
fontFamily:_variables.font.regular,
fontSize:12
//color: variables.BRAND_BLACK
},

price:{
fontFamily:_variables2.default.FONT_BOLD,
fontSize:10,
color:_variables2.default.BRAND_SUBCOLOR1},


porfilioItem:{
flex:1,
width:null,
height:null,
borderRadius:5},


actionButtonIcon:{
fontSize:20,
height:22,
color:'white'},


container:{
flexDirection:'row',
paddingVertical:10,
paddingHorizontal:10},


tagContainer:{
borderRadius:5,
backgroundColor:'#fff',
paddingVertical:8,
paddingHorizontal:15,
marginRight:5,
flexDirection:'row'}});exports.default=




BookmarkedProjectComponent;