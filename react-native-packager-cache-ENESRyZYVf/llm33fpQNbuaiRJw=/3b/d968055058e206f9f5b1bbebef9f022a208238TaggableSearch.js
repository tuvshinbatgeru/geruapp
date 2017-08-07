Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNative=require("react-native");

var _reactNativeVectorIcons=require("react-native-vector-icons");
var _selection=require("../brand/selection.json");var _selection2=babelHelpers.interopRequireDefault(_selection);

var _variables=require("../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);var IconSet=(0,_reactNativeVectorIcons.createIconSetFromIcoMoon)(_selection2.default);var

TaggableSearch=function(_Component){babelHelpers.inherits(TaggableSearch,_Component);function TaggableSearch(){babelHelpers.classCallCheck(this,TaggableSearch);return babelHelpers.possibleConstructorReturn(this,(TaggableSearch.__proto__||Object.getPrototypeOf(TaggableSearch)).apply(this,arguments));}babelHelpers.createClass(TaggableSearch,[{key:"render",value:function render()

{var _this2=this;var

tags=this.props.tags;

return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:this.props.onSearchFired},
_react2.default.createElement(_reactNative.View,{style:styles.searchContainer},
tags.length==0&&
_react2.default.createElement(_reactNative.View,{style:styles.emptyContainer},
_react2.default.createElement(_Ionicons2.default,{name:"ios-search-outline",
color:"#b5b5b5",
size:20}),
_react2.default.createElement(_reactNative.Text,{style:styles.emptyText},"Browse showcase")),






_react2.default.createElement(_reactNative.View,{style:styles.emptyContainer},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{width:40}]},
_react2.default.createElement(IconSet,{name:"search",
size:21,
color:_variables2.default.BRAND_BLACK})),


_react2.default.createElement(_reactNative.ScrollView,{horizontal:true,
showsHorizontalScrollIndicator:false,
automaticallyAdjustContentInsets:false,
backfaceVisibility:false,
style:styles.tagContainer},

tags.map(function(item){return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:_this2.props.onSearchFired},
_react2.default.createElement(_reactNative.View,{style:[styles.tagItem,{justifyContent:'space-between',alignItems:'center'}]},
_react2.default.createElement(_reactNative.Text,{style:styles.tagLabel},
item),

_react2.default.createElement(_reactNative.TouchableOpacity,{style:[{width:30,justifyContent:'center',alignItems:'flex-end',paddingRight:5}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{width:20,height:20,borderRadius:20,backgroundColor:'#fff'}]},
_react2.default.createElement(IconSet,{name:"close",
size:9,
color:_variables2.default.BRAND_BLACK}))))));}))))));












}}]);return TaggableSearch;}(_react.Component);exports.default=TaggableSearch;


var styles=_reactNative.StyleSheet.create({
searchContainer:{
flexDirection:'row',
//width: 210,
//paddingHorizontal: 10,
paddingVertical:5,
backgroundColor:'#efefef',
borderRadius:4,
borderColor:'#b5b5b5',
justifyContent:'space-around',
alignItems:'center'},


emptyContainer:{
flex:1,
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center'},


emptyText:{
padding:3,
marginLeft:5,
fontFamily:_variables.font.regular,
color:'#b5b5b5',
fontSize:16},


tagContainer:{
paddingRight:10,
flex:1},


tagItem:{
flexDirection:'row',
paddingLeft:10,
paddingVertical:5,
borderRadius:5,
marginLeft:3,
backgroundColor:'rgba(254,95,85, 0.6)'},


tagLabel:{
color:'#fff',
fontFamily:_variables.font.regular,
fontSize:17},


tagRemove:{
padding:3,
marginLeft:3}});



TaggableSearch.propTypes={
tags:_react.PropTypes.array,
onSearchFired:_react.PropTypes.func};


TaggableSearch.defaultProps={
//tags: [],
tags:['Дээл','Цагаан сар','Хүннү','Дээл','Цагаан сар','Хүннү'],
onSearchFired:null};