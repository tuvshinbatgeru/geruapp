Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");








var _variables=require("../../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);
var _reactNativeLinearGradient=require("react-native-linear-gradient");var _reactNativeLinearGradient2=babelHelpers.interopRequireDefault(_reactNativeLinearGradient);
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeProgress=require("react-native-progress");var Progress=babelHelpers.interopRequireWildcard(_reactNativeProgress);

var screen=_reactNative.Dimensions.get('window');var

ProjectCardWorking=function(_Component){babelHelpers.inherits(ProjectCardWorking,_Component);function ProjectCardWorking(){babelHelpers.classCallCheck(this,ProjectCardWorking);return babelHelpers.possibleConstructorReturn(this,(ProjectCardWorking.__proto__||Object.getPrototypeOf(ProjectCardWorking)).apply(this,arguments));}babelHelpers.createClass(ProjectCardWorking,[{key:"render",value:function render()

{var

project=
this.props.project;

return(
_react2.default.createElement(_reactNative.TouchableHighlight,{
underlayColor:"#efefef"
//onPress={() => this.props.onPress(project)}
},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,styles.container]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{paddingVertical:10,paddingRight:10}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,_variables.layout.row,{flex:1}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{width:40}]},
_react2.default.createElement(_reactNative.View,{style:[styles.circleIndicator,{borderColor:'#5fcf80'}]})),


_react2.default.createElement(_reactNative.Text,{style:[_variables.layout.h2,{flex:1}]},project.name)),


_react2.default.createElement(_reactNative.View,{style:[_variables.layout.endCenter,{width:20}]})),






_react2.default.createElement(_reactNative.View,{style:styles.imageContainer},
_react2.default.createElement(_reactNative.Image,{source:{uri:project.cover},
style:styles.image})),



_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerBetween,{paddingHorizontal:10,paddingTop:10,paddingBottom:3}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{alignItems:'center',justifyContent:'flex-start',width:120}]},
_react2.default.createElement(_Ionicons2.default,{name:"md-time",
size:20,
color:"#9299A7"}),

_react2.default.createElement(_reactNative.Text,{style:{fontFamily:_variables.font.regular,marginLeft:5}},"\u0425\u04AF\u043B\u044D\u044D\u043B\u0433\u044D\u043D \u04E9\u0433\u04E9\u0445")),

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerEnd,{flex:1}]},
_react2.default.createElement(_reactNative.Text,{style:[{fontFamily:_variables.font.bold,marginLeft:5}]},project.end_date))),



_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerBetween,{paddingHorizontal:10,paddingVertical:5}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{alignItems:'center',justifyContent:'flex-start',width:120}]},
_react2.default.createElement(_Ionicons2.default,{name:"md-list-box",
size:20,
color:"#9299A7"}),

_react2.default.createElement(_reactNative.Text,{style:[{fontFamily:_variables.font.regular,marginLeft:5}]},"\u0422\u04E9\u0441\u043B\u0438\u0439\u043D \u0431\u0438\u0435\u043B\u044D\u043B\u0442")),




_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerEnd,{flex:1}]},
_react2.default.createElement(_reactNative.Text,{style:[{fontFamily:_variables.font.heavy,color:_variables2.default.BRAND_GRAY}]},
_react2.default.createElement(_reactNative.Text,{style:[{fontSize:16,color:_variables2.default.BRAND_BLACK}]},project.milestones.success),"/",
project.milestones.total))),




_react2.default.createElement(Progress.Bar,{progress:project.milestones.success/project.milestones.total,
borderColor:_variables2.default.BRAND_GREEN,
color:_variables2.default.BRAND_GREEN,
width:screen.width-40,
height:4,
borderRadius:3}),

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerCenter,{height:60,paddingVertical:20}]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,styles.avatarContainer]},
_react2.default.createElement(_reactNative.Image,{style:styles.avatar,
source:{uri:project.hirer.avatar_url}})),


_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,{flex:1}]},
_react2.default.createElement(_reactNative.Text,{style:[{fontFamily:_variables.font.regular}]},project.hirer.first_name," ",project.hirer.last_name),

_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerBetween,{flex:1,paddingRight:10}]},
_react2.default.createElement(_reactNative.View,null),
_react2.default.createElement(_reactNative.TouchableOpacity,{style:[_variables.layout.centerCenter,{width:35,height:35,borderRadius:35/*backgroundColor: variables.BRAND_GREEN*/}]},
_react2.default.createElement(_Ionicons2.default,{name:"ios-chatboxes",
size:24,
color:"#9299A7"}))))))));







}}]);return ProjectCardWorking;}(_react.Component);exports.default=ProjectCardWorking;


var styles=_reactNative.StyleSheet.create({
container:{
//flex: 1,
backgroundColor:_variables2.default.BRAND_WHITE,
borderRadius:10,
flex:1},


imageContainer:{
height:200,
width:screen.width,
backgroundColor:'#efefef'},


image:{
height:null,
width:null,
flex:1,
borderRadius:10},


circleIndicator:{
width:15,
height:15,
borderRadius:5,
borderWidth:3},


avatarContainer:{
height:40,
width:50},


avatar:{
height:30,
width:30,
borderRadius:30}});



ProjectCardWorking.propTypes={
project:_react.PropTypes.object};