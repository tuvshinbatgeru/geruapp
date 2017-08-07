Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");








var _variables=require("../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);
//import { SearchBar } from 'react-native-elements'
var
TagsList=function(_Component){babelHelpers.inherits(TagsList,_Component);
function TagsList(props){babelHelpers.classCallCheck(this,TagsList);return babelHelpers.possibleConstructorReturn(this,(TagsList.__proto__||Object.getPrototypeOf(TagsList)).call(this,
props));
}babelHelpers.createClass(TagsList,[{key:"render",value:function render()

{var _this2=this;var _props=
this.props,tags=_props.tags,display=_props.display;
var template=null;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.searchContainer},
_react2.default.createElement(_reactNative.TextInput,null)),







_react2.default.createElement(_reactNative.ScrollView,{style:styles.scrollView,showsVerticalScrollIndicator:false},
_react2.default.createElement(_reactNative.View,{style:styles.tagsContainer},

tags.get('selected').map(function(item,i){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:[styles.tagContainer,styles.selected],
onPress:function onPress(){return _this2.props.onTagDiselect(item);},
disabled:tags.get('fetching')},
_react2.default.createElement(_reactNative.Text,{style:[styles.tagText,styles.tagSelected]},item.name.toUpperCase())));}),




tags.get('suggested').map(function(tag,i){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:[styles.tagContainer,styles.disabled],
onPress:function onPress(){return _this2.props.onTagSelected(tag);},
disabled:tags.get('fetching')},
_react2.default.createElement(_reactNative.Text,{style:[styles.tagText,styles.tagDisabled]},tag.name.toUpperCase())));})))));







}}]);return TagsList;}(_react.Component);exports.default=TagsList;


TagsList.propTypes={
tags:_react.PropTypes.object,
deleteable:_react.PropTypes.bool};


TagsList.defaultProps={
deleteable:true};


var styles=_reactNative.StyleSheet.create({
tagsContainer:{
flex:1,
paddingLeft:20,
backgroundColor:'#fff',
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'flex-start',
alignItems:'center'},


container:{
flex:1},


searchContainer:{
paddingBottom:5,
paddingTop:15,
paddingHorizontal:15},


tagContainer:{
height:30,
borderRadius:2,
margin:5,
paddingHorizontal:35,
paddingVertical:5
/*flexDirection: 'row',*/},


selected:{
backgroundColor:_variables2.default.BRAND_SECONDARY},


disabled:{
backgroundColor:'#efefef'},


tagText:{
color:'#fff',
fontSize:14,
fontFamily:_variables2.default.FONT_REGULAR},


tagSelected:{
color:'#fff'},


tagDisabled:{
color:'#242424'}});