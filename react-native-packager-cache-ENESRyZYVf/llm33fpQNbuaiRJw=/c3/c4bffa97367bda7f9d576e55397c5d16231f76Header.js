/**
 * # Header.js
 *
 * This component initially displays a image. But when clicked, things
 * get interesting.
 *
 * On the initial display after being clicked, the
 * textinput will display the current ```state``` of the application.
 *
 * The button will be enabled and if clicked, whatever state is now
 * contained in the textinput will be processed and the application
 * will be restored to that state.
 *
 * By pasting in a previous state, the application will reset to that
 * state
 *
 * When the mark image is clicked, it is just toggled to display or hide.
*/
'use strict';

/**
 * ## Imports
 *
 * React
*/
var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");










var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'column',
flex:1,
marginTop:10},

header:{
marginTop:20,
justifyContent:'center',
alignItems:'center',
backgroundColor:'transparent'},

mark:{
height:100,
width:100}});




var Header=_react2.default.createClass({displayName:"Header",
/**
   * ## Header.class
   * set the initial state of having the button be disabled.
   */
getInitialState:function getInitialState(){
return{
text:'',
isDisabled:true};

},
/**
   * ### propTypes
   * * isFetching: display the spinner if true
   * * showState: should the JSON state, currentState, be displayed
   * * currentState: the JSON state
   * * onGetState: the action to call to get the current state
   * * onSetState: the action to call to set the state
   */
propTypes:{
isFetching:_react.PropTypes.bool,
showState:_react.PropTypes.bool,
currentState:_react.PropTypes.object,
onGetState:_react.PropTypes.func,
onSetState:_react.PropTypes.func},

/**
   * ### _onPressMark
   * Call the onGetState action passing the state prop
   */
_onPressMark:function _onPressMark(){
this.props.onGetState(!this.props.showState);
},
/**
   * ### _onChangeText
   * when the textinput value changes, set the state for that component
   */
_onChangeText:function _onChangeText(text){
this.setState({
text:text,
isDisabled:false});

},
/**
   * ### _updateStateButtonPress
   * When the button for the state is pressed, call ```onSetState```
   */
_updateStateButtonPress:function _updateStateButtonPress(){
this.props.onSetState(this.state.text);
},

/**
   * ### render
   *
   * if showState, stringify the currentState and display it to the
   * browser for copying. Then display to the user.
   *
   * When the value of the input changes, call ```_onChangeText```
   *
   * When the 'Update State' button is pressed, we're off to the
   * races with Hot Loading...just call the
   * ```_updateStateButtonPress``` and away we go...
   *
   */
render:function render(){var _this=this;
var displayText=void 0;
if(this.props.showState){
displayText=JSON.stringify(this.props.currentState);
}

return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.View,{style:styles.header},

_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this._onPressMark},

_react2.default.createElement(_reactNative.Image,{style:styles.mark,
source:require('../images/geru.png')})),


this.props.isFetching?
_react2.default.createElement(_reactNative.ActivityIndicator,{animating:true,size:"large"}):
null),



this.props.showState?
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,null,I18n.t('Header.current_state')," (",I18n.t('Header.see_console'),")"),
_react2.default.createElement(_reactNative.TextInput,{style:{height:100,borderColor:'gray',borderWidth:1},
value:displayText,
editable:true,
multiline:true,
onChangeText:function onChangeText(text){return _this._onChangeText(text);},
numberOfLines:20}),
_react2.default.createElement(_reactNative.View,{style:{
marginTop:10}})):




null));


}});


module.exports=Header;