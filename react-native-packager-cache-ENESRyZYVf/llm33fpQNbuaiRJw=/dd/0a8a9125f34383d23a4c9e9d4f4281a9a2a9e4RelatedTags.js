Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");







var _variables=require("../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);
var _reactNativeLinearGradient=require("react-native-linear-gradient");var _reactNativeLinearGradient2=babelHelpers.interopRequireDefault(_reactNativeLinearGradient);var

RelatedTags=function(_Component){babelHelpers.inherits(RelatedTags,_Component);
function RelatedTags(props){babelHelpers.classCallCheck(this,RelatedTags);return babelHelpers.possibleConstructorReturn(this,(RelatedTags.__proto__||Object.getPrototypeOf(RelatedTags)).call(this,
props));
}babelHelpers.createClass(RelatedTags,[{key:"render",value:function render()

{var _props=

this.props,related_tags=_props.related_tags,display=_props.display;
return(
_react2.default.createElement(_reactNative.View,{style:[display?styles.showContainer:styles.hideContainer,styles.container]},
_react2.default.createElement(_reactNative.ScrollView,{automaticallyAdjustContentInsets:false,
horizontal:true,
backfaceVisibility:false,
showsHorizontalScrollIndicator:false},

related_tags.map(function(tag,i){return(
_react2.default.createElement(_reactNative.TouchableOpacity,{style:[styles.tagContainer,{marginLeft:i==0?15:5}]},
_react2.default.createElement(_reactNative.Image,{style:{width:null,height:null,flex:1},
borderRadius:5,
source:{uri:tag.cover_url}},

_react2.default.createElement(_reactNativeLinearGradient2.default,{style:{borderRadius:5,flex:1},
colors:['rgba(255, 255, 255, 0.4)','rgba(52, 52, 52, 0.8)']},

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{flex:1}]},
_react2.default.createElement(_reactNative.Text,{style:{fontSize:17,fontFamily:_variables.font.heavy,color:_variables2.default.BRAND_WHITE}},tag.name))))));}))));









}}]);return RelatedTags;}(_react.Component);exports.default=RelatedTags;


RelatedTags.propTypes={
related_tags:_react.PropTypes.array,
display:_react.PropTypes.bool};


RelatedTags.defaultProps={
related_tags:[{
name:'Wedding',
cover_url:"https://www.herecomestheguide.com/images/venues_large/011880UnionHotel-20170201.jpg"},
{
name:'Flower',
cover_url:'https://s-media-cache-ak0.pinimg.com/originals/e6/ae/d0/e6aed0df66d524c9b4e05c23971bd403.jpg'},
{
name:'Ring',
cover_url:'http://www.thejewelleryhut.net/Static/images/WeddingRings.jpg'},
{
name:'White',
cover_url:'http://www.artflyz.com/server16-cdn/2016/05/08/black-white-and-silver-wedding-white-and-silver-wedding-reception-ideas-400x300-19ce34c7061262b7.jpg'},
{
name:'Wedding',
cover_url:"https://www.herecomestheguide.com/images/venues_large/011880UnionHotel-20170201.jpg"},
{
name:'Flower',
cover_url:'https://s-media-cache-ak0.pinimg.com/originals/e6/ae/d0/e6aed0df66d524c9b4e05c23971bd403.jpg'},
{
name:'Ring',
cover_url:'http://www.thejewelleryhut.net/Static/images/WeddingRings.jpg'},
{
name:'White',
cover_url:'http://www.artflyz.com/server16-cdn/2016/05/08/black-white-and-silver-wedding-white-and-silver-wedding-reception-ideas-400x300-19ce34c7061262b7.jpg'}],

display:false};


var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'row',
position:'absolute',
paddingVertical:15,
zIndex:10,
height:100,
backgroundColor:_variables2.default.BRAND_SUBCOLOR},


showContainer:{
top:-100},


hideContainer:{
top:65},


tagContainer:{
borderRadius:5,
//borderWidth: 1,
//borderColor: variables.BRAND_SUBCOLOR1,
//backgroundColor: variables.BRAND_SUBCOLOR1,
//justifyContent: 'center',
//backgroundColor: 'red',
//alignItems: 'center',
marginLeft:5,
marginRight:5,
//height: 80,
width:80
//padding: 10, 
//borderRadius: 70,
},

tagText:{
color:_variables2.default.BRAND_WHITE,
fontSize:17,
padding:10,
fontFamily:_variables.font.heavy}});