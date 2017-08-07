Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNative=require("react-native");var

NavBarIconText=function(_Component){babelHelpers.inherits(NavBarIconText,_Component);function NavBarIconText(){babelHelpers.classCallCheck(this,NavBarIconText);return babelHelpers.possibleConstructorReturn(this,(NavBarIconText.__proto__||Object.getPrototypeOf(NavBarIconText)).apply(this,arguments));}babelHelpers.createClass(NavBarIconText,[{key:"render",value:function render()
{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.props.onPress,style:styles.container},


this.props.position=='front'&&_react2.default.createElement(_reactNative.Text,{style:[styles.text,this.props.textStyle]},this.props.text.toUpperCase()),


_react2.default.createElement(_Ionicons2.default,{
name:this.props.icon,
size:this.props.size,
color:this.props.color}),


this.props.position=='back'&&_react2.default.createElement(_reactNative.Text,{style:[styles.text,this.props.textStyle]},this.props.text.toUpperCase())));




}}]);return NavBarIconText;}(_react.Component);exports.default=NavBarIconText;


var styles=_reactNative.StyleSheet.create({
container:{
padding:7,
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},


text:{
fontFamily:'Font-Lato',
color:'#b5b5b5',
fontSize:14,
marginRight:7,
marginLeft:7}});




NavBarIconText.propTypes={
text:_react.PropTypes.string.isRequired,
icon:_react.PropTypes.string.isRequired,
color:_react.PropTypes.string,
position:_react.PropTypes.string};


NavBarIconText.defaultProps={
position:'front'};