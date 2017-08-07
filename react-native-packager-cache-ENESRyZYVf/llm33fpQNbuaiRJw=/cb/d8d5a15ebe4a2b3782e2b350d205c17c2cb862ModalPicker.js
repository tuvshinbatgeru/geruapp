Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");








var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeModalbox=require("react-native-modalbox");var _reactNativeModalbox2=babelHelpers.interopRequireDefault(_reactNativeModalbox);
var _lodash=require("lodash");var _lodash2=babelHelpers.interopRequireDefault(_lodash);exports.default=

ModalPicker=_react2.default.createClass({displayName:"ModalPicker",
propTypes:{
style:_react.PropTypes.func,
disabled:_react.PropTypes.bool,
options:_react.PropTypes.array,
selectedIndex:_react.PropTypes.number,
onChange:_react.PropTypes.func,
onClosed:_react.PropTypes.func,
label:_react.PropTypes.func,
initLabel:_react.PropTypes.string,
isOpen:_react.PropTypes.bool,
title:_react.PropTypes.string,
closed:_react.PropTypes.func,
closeAfterChoosed:_react.PropTypes.bool,
selectedOption:_react.PropTypes.any,
identity:_react.PropTypes.string,
multiple:_react.PropTypes.bool},


getDefaultProps:function getDefaultProps(){
return{
selectedIndex:-1,
selectedOption:-1,
initLabel:'Сонгох',
onChange:function onChange(){},
onClosed:function onClosed(){},
disabled:false,
options:[],
closed:null,
closeAfterChoosed:true,
multiple:false};

},

getInitialState:function getInitialState(){
return{
loaded:false};

},

setChoosed:function setChoosed(item){
this.props.onChange(item);
if(this.props.multiple)
this.forceUpdate();
if(this.props.closeAfterChoosed)
this.closed();
},

closed:function closed(){
this.refs.modal.close();
//this.props.closed()
},

_renderItemStyle:function _renderItemStyle(item){var _this=this;
if(this.props.multiple){
var isSelected=false;
_lodash2.default.forEach(this.props.selectedOption,function(option){
if(option[_this.props.identity]==item[_this.props.identity]){
isSelected=true;
return false;
}
});

return isSelected?styles.selectedOption:styles.regularOption;
}

if(item instanceof Object){
return this.props.selectedOption===item[this.props.identity]?styles.selectedOption:styles.regularOption;
}

return this.props.selectedOption==item?styles.selectedOption:styles.regularOption;
},

render:function render(){var _this2=this;
return _react2.default.createElement(_reactNativeModalbox2.default,{swipeToClose:false,
animationDuration:200,
isOpen:this.props.isOpen,
ref:"modal",
onClosed:this.props.onClosed,
style:[styles.modal,styles.modal4],
position:"bottom"},
_react2.default.createElement(_reactNative.View,{style:{height:70}},
_react2.default.createElement(_reactNative.View,{style:styles.header},
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.closed},
_react2.default.createElement(_Ionicons2.default,{name:"md-close",
color:"#b5b5b5",
size:30,
style:styles.closeBtn})),

_react2.default.createElement(_reactNative.Text,{style:styles.title},this.props.title))),


_react2.default.createElement(_reactNative.ScrollView,{
automaticallyAdjustContentInsets:false,
style:styles.scrollView},


this.props.options.map(function(item,i){return(

_react2.default.createElement(_reactNative.TouchableOpacity,{key:i,onPress:function onPress(){return _this2.setChoosed(item);},style:styles.item},
_react2.default.createElement(_reactNative.Text,{style:[
styles.label,
_this2._renderItemStyle(item)]},
_this2.props.label(item))));})));








}});


var styles=_reactNative.StyleSheet.create({
modal:{
height:300},


modal4:{},



header:{
flex:1,
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'center',
marginLeft:10},


scrollView:{
padding:20},


item:{
height:50,
backgroundColor:'rgba(0,0,0,0)'},


title:{
marginLeft:10,
fontFamily:'Lato-Black',
fontSize:20,
color:'#3e474f'},


closeBtn:{},



label:{
fontSize:17,
backgroundColor:'rgba(0,0,0,0)'},


selectedOption:{
fontFamily:'Lato-Black',
color:'#3e474f'},


regularOption:{
color:'#b5b5b5',
fontFamily:'Lato-Medium'}});