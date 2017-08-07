/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TouchableNativeFeedback
 */
'use strict';

var Platform=require('Platform');
var React=require('React');
var ReactNative=require('ReactNative');
var Touchable=require('Touchable');
var TouchableWithoutFeedback=require('TouchableWithoutFeedback');
var UIManager=require('UIManager');

var ensurePositiveDelayProps=require('ensurePositiveDelayProps');
var processColor=require('processColor');

var PropTypes=React.PropTypes;

var rippleBackgroundPropType=PropTypes.shape({
type:React.PropTypes.oneOf(['RippleAndroid']),
color:PropTypes.number,
borderless:PropTypes.bool});


var themeAttributeBackgroundPropType=PropTypes.shape({
type:React.PropTypes.oneOf(['ThemeAttrAndroid']),
attribute:PropTypes.string.isRequired});


var backgroundPropType=PropTypes.oneOfType([
rippleBackgroundPropType,
themeAttributeBackgroundPropType]);




var PRESS_RETENTION_OFFSET={top:20,left:20,right:20,bottom:30};

/**
 * A wrapper for making views respond properly to touches (Android only).
 * On Android this component uses native state drawable to display touch
 * feedback.
 *
 * At the moment it only supports having a single View instance as a child
 * node, as it's implemented by replacing that View with another instance of
 * RCTView node with some additional properties set.
 *
 * Background drawable of native feedback touchable can be customized with
 * `background` property.
 *
 * Example:
 *
 * ```
 * renderButton: function() {
 *   return (
 *     <TouchableNativeFeedback
 *         onPress={this._onPressButton}
 *         background={TouchableNativeFeedback.SelectableBackground()}>
 *       <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
 *         <Text style={{margin: 30}}>Button</Text>
 *       </View>
 *     </TouchableNativeFeedback>
 *   );
 * },
 * ```
 */

var TouchableNativeFeedback=React.createClass({displayName:"TouchableNativeFeedback",
propTypes:babelHelpers.extends({},
TouchableWithoutFeedback.propTypes,{

/**
     * Determines the type of background drawable that's going to be used to
     * display feedback. It takes an object with `type` property and extra data
     * depending on the `type`. It's recommended to use one of the static
     * methods to generate that dictionary.
     */
background:backgroundPropType,

/**
     * Set to true to add the ripple effect to the foreground of the view, instead of the
     * background. This is useful if one of your child views has a background of its own, or you're
     * e.g. displaying images, and you don't want the ripple to be covered by them.
     *
     * Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on
     * Android 6.0 and above. If you try to use this on older versions you will get a warning and
     * fallback to background.
     */
useForeground:PropTypes.bool}),


statics:{
/**
     * Creates an object that represents android theme's default background for
     * selectable elements (?android:attr/selectableItemBackground).
     */
SelectableBackground:function SelectableBackground(){
return{type:'ThemeAttrAndroid',attribute:'selectableItemBackground'};
},
/**
     * Creates an object that represent android theme's default background for borderless
     * selectable elements (?android:attr/selectableItemBackgroundBorderless).
     * Available on android API level 21+.
     */
SelectableBackgroundBorderless:function SelectableBackgroundBorderless(){
return{type:'ThemeAttrAndroid',attribute:'selectableItemBackgroundBorderless'};
},
/**
     * Creates an object that represents ripple drawable with specified color (as a
     * string). If property `borderless` evaluates to true the ripple will
     * render outside of the view bounds (see native actionbar buttons as an
     * example of that behavior). This background type is available on Android
     * API level 21+.
     *
     * @param color The ripple color
     * @param borderless If the ripple can render outside it's bounds
     */
Ripple:function Ripple(color,borderless){
return{type:'RippleAndroid',color:processColor(color),borderless:borderless};
},

canUseNativeForeground:function canUseNativeForeground(){
return Platform.Version>=23;
}},


mixins:[Touchable.Mixin],

getDefaultProps:function getDefaultProps(){
return{
background:this.SelectableBackground()};

},

getInitialState:function getInitialState(){
return this.touchableGetInitialState();
},

componentDidMount:function componentDidMount(){
ensurePositiveDelayProps(this.props);
},

componentWillReceiveProps:function componentWillReceiveProps(nextProps){
ensurePositiveDelayProps(nextProps);
},

/**
   * `Touchable.Mixin` self callbacks. The mixin will invoke these if they are
   * defined on your component.
   */
touchableHandleActivePressIn:function touchableHandleActivePressIn(e){
this.props.onPressIn&&this.props.onPressIn(e);
this._dispatchPressedStateChange(true);
this._dispatchHotspotUpdate(this.pressInLocation.locationX,this.pressInLocation.locationY);
},

touchableHandleActivePressOut:function touchableHandleActivePressOut(e){
this.props.onPressOut&&this.props.onPressOut(e);
this._dispatchPressedStateChange(false);
},

touchableHandlePress:function touchableHandlePress(e){
this.props.onPress&&this.props.onPress(e);
},

touchableHandleLongPress:function touchableHandleLongPress(e){
this.props.onLongPress&&this.props.onLongPress(e);
},

touchableGetPressRectOffset:function touchableGetPressRectOffset(){
// Always make sure to predeclare a constant!
return this.props.pressRetentionOffset||PRESS_RETENTION_OFFSET;
},

touchableGetHitSlop:function touchableGetHitSlop(){
return this.props.hitSlop;
},

touchableGetHighlightDelayMS:function touchableGetHighlightDelayMS(){
return this.props.delayPressIn;
},

touchableGetLongPressDelayMS:function touchableGetLongPressDelayMS(){
return this.props.delayLongPress;
},

touchableGetPressOutDelayMS:function touchableGetPressOutDelayMS(){
return this.props.delayPressOut;
},

_handleResponderMove:function _handleResponderMove(e){
this.touchableHandleResponderMove(e);
this._dispatchHotspotUpdate(e.nativeEvent.locationX,e.nativeEvent.locationY);
},

_dispatchHotspotUpdate:function _dispatchHotspotUpdate(destX,destY){
UIManager.dispatchViewManagerCommand(
ReactNative.findNodeHandle(this),
UIManager.RCTView.Commands.hotspotUpdate,
[destX||0,destY||0]);

},

_dispatchPressedStateChange:function _dispatchPressedStateChange(pressed){
UIManager.dispatchViewManagerCommand(
ReactNative.findNodeHandle(this),
UIManager.RCTView.Commands.setPressed,
[pressed]);

},

render:function render(){var _babelHelpers$extends;
var child=React.Children.only(this.props.children);
var children=child.props.children;
if(Touchable.TOUCH_TARGET_DEBUG&&child.type.displayName==='View'){
if(!Array.isArray(children)){
children=[children];
}
children.push(Touchable.renderDebugView({color:'brown',hitSlop:this.props.hitSlop}));
}
if(this.props.useForeground&&!TouchableNativeFeedback.canUseNativeForeground()){
console.warn("Requested foreground ripple, but it is not available on this version of Android. Consider calling TouchableNativeFeedback.canUseNativeForeground() and using a different Touchable if the result is false.");



}
var drawableProp=
this.props.useForeground&&TouchableNativeFeedback.canUseNativeForeground()?
'nativeForegroundAndroid':
'nativeBackgroundAndroid';
var childProps=babelHelpers.extends({},
child.props,(_babelHelpers$extends={},babelHelpers.defineProperty(_babelHelpers$extends,
drawableProp,this.props.background),babelHelpers.defineProperty(_babelHelpers$extends,"accessible",
this.props.accessible!==false),babelHelpers.defineProperty(_babelHelpers$extends,"accessibilityLabel",
this.props.accessibilityLabel),babelHelpers.defineProperty(_babelHelpers$extends,"accessibilityComponentType",
this.props.accessibilityComponentType),babelHelpers.defineProperty(_babelHelpers$extends,"accessibilityTraits",
this.props.accessibilityTraits),babelHelpers.defineProperty(_babelHelpers$extends,"children",
children),babelHelpers.defineProperty(_babelHelpers$extends,"testID",
this.props.testID),babelHelpers.defineProperty(_babelHelpers$extends,"onLayout",
this.props.onLayout),babelHelpers.defineProperty(_babelHelpers$extends,"hitSlop",
this.props.hitSlop),babelHelpers.defineProperty(_babelHelpers$extends,"onStartShouldSetResponder",
this.touchableHandleStartShouldSetResponder),babelHelpers.defineProperty(_babelHelpers$extends,"onResponderTerminationRequest",
this.touchableHandleResponderTerminationRequest),babelHelpers.defineProperty(_babelHelpers$extends,"onResponderGrant",
this.touchableHandleResponderGrant),babelHelpers.defineProperty(_babelHelpers$extends,"onResponderMove",
this._handleResponderMove),babelHelpers.defineProperty(_babelHelpers$extends,"onResponderRelease",
this.touchableHandleResponderRelease),babelHelpers.defineProperty(_babelHelpers$extends,"onResponderTerminate",
this.touchableHandleResponderTerminate),_babelHelpers$extends));


// We need to clone the actual element so that the ripple background drawable
// can be applied directly to the background of this element rather than to
// a wrapper view as done in other Touchable*
return React.cloneElement(
child,
childProps);

}});


module.exports=TouchableNativeFeedback;