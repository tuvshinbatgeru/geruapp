/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Button
 * 
 */
'use strict';

var ColorPropType=require('ColorPropType');
var Platform=require('Platform');
var React=require('React');
var StyleSheet=require('StyleSheet');
var Text=require('Text');
var TouchableNativeFeedback=require('TouchableNativeFeedback');
var TouchableOpacity=require('TouchableOpacity');
var View=require('View');

var invariant=require('fbjs/lib/invariant');

/**
 * A basic button component that should render nicely on any platform. Supports
 * a minimal level of customization.
 *
 * <center><img src="img/buttonExample.png"></img></center>
 *
 * If this button doesn't look right for your app, you can build your own
 * button using [TouchableOpacity](docs/touchableopacity.html)
 * or [TouchableNativeFeedback](docs/touchablenativefeedback.html).
 * For inspiration, look at the [source code for this button component](https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js).
 * Or, take a look at the [wide variety of button components built by the community](https://js.coach/react-native?search=button).
 *
 * Example usage:
 *
 * ```
 * <Button
 *   onPress={onPressLearnMore}
 *   title="Learn More"
 *   color="#841584"
 *   accessibilityLabel="Learn more about this purple button"
 * />
 * ```
 *
 */var

Button=function(_React$Component){babelHelpers.inherits(Button,_React$Component);function Button(){babelHelpers.classCallCheck(this,Button);return babelHelpers.possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}babelHelpers.createClass(Button,[{key:"render",value:function render()





































{var _props=







this.props,accessibilityLabel=_props.accessibilityLabel,color=_props.color,onPress=_props.onPress,title=_props.title,disabled=_props.disabled,testID=_props.testID;
var buttonStyles=[styles.button];
var textStyles=[styles.text];
var Touchable=TouchableNativeFeedback;
if(color&&false){
textStyles.push({color:color});
}else if(color){
buttonStyles.push({backgroundColor:color});
}
if(disabled){
buttonStyles.push(styles.buttonDisabled);
textStyles.push(styles.textDisabled);
}
invariant(
typeof title==='string',
'The title prop of a Button must be a string');

var formattedTitle=title.toUpperCase();
var accessibilityTraits=['button'];
if(disabled){
accessibilityTraits.push('disabled');
}
return(
React.createElement(Touchable,{
accessibilityComponentType:"button",
accessibilityLabel:accessibilityLabel,
accessibilityTraits:accessibilityTraits,
testID:testID,
disabled:disabled,
onPress:onPress},
React.createElement(View,{style:buttonStyles},
React.createElement(Text,{style:textStyles},formattedTitle))));



}}]);return Button;}(React.Component);


// Material design blue from https://material.google.com/style/color.html#color-color-palette
Button.propTypes={/**
     * Text to display inside the button
     */title:React.PropTypes.string.isRequired,/**
     * Text to display for blindness accessibility features
     */accessibilityLabel:React.PropTypes.string,/**
     * Color of the text (iOS), or background color of the button (Android)
     */color:ColorPropType,/**
     * If true, disable all interactions for this component.
     */disabled:React.PropTypes.bool,/**
     * Handler to be called when the user taps the button
     */onPress:React.PropTypes.func.isRequired,/**
     * Used to locate this view in end-to-end tests.
     */testID:React.PropTypes.string};var defaultBlue='#2196F3';var styles=StyleSheet.create({button:{elevation:4,backgroundColor:defaultBlue,borderRadius:2},


text:






{
textAlign:'center',
color:'white',
padding:8,
fontWeight:'500'},


buttonDisabled:

{
elevation:0,
backgroundColor:'#dfdfdf'},


textDisabled:



{
color:'#a1a1a1'}});




module.exports=Button;