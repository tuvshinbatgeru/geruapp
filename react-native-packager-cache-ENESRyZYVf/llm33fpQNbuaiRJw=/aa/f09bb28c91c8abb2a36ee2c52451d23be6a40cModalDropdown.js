Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");








var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _variables=require("../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);exports.default=

ModalDropdown=_react2.default.createClass({displayName:"ModalDropdown",
propTypes:{
onPress:_react.PropTypes.func,
title:_react.PropTypes.string,
selectedValue:_react.PropTypes.string,
disabled:_react.PropTypes.bool,
loading:_react.PropTypes.bool},


getDefaultProps:function getDefaultProps(){
return{
onPress:null,
title:'Сонгох',
disabled:false,
selectedValue:'',
loading:false};

},

render:function render(){

var iconName=this.props.loading?'ios-arrow-up-outline':'ios-arrow-down-outline';

return _react2.default.createElement(_reactNative.TouchableOpacity,{style:{height:50},onPress:this.props.onPress},
_react2.default.createElement(_reactNative.View,{style:[styles.dropdown]},
_react2.default.createElement(_reactNative.Text,{style:{fontSize:16,fontFamily:'Lato-Regular',color:'#242424'}},this.props.title),
_react2.default.createElement(_reactNative.Text,{style:styles.selectedOption},
this.props.selectedValue),


_react2.default.createElement(_Ionicons2.default,{name:iconName,
size:20,
style:styles.dropdownIcon,
color:'#b5b5b5'})));


}});


var styles=_reactNative.StyleSheet.create({
dropdown:{
flex:1,
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'center',
marginBottom:10,
marginLeft:10,
marginRight:10},


selectedOption:{
marginLeft:5,
fontFamily:'Lato-Black'},


dropdownIcon:{
marginLeft:10}});