/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule View
 * 
 */
'use strict';

var NativeMethodsMixin=require('NativeMethodsMixin');
var NativeModules=require('NativeModules');
var Platform=require('Platform');
var React=require('React');
var ReactNativeFeatureFlags=require('ReactNativeFeatureFlags');
var ReactNativeStyleAttributes=require('ReactNativeStyleAttributes');
var ReactNativeViewAttributes=require('ReactNativeViewAttributes');
var ViewPropTypes=require('ViewPropTypes');

var invariant=require('fbjs/lib/invariant');
var warning=require('fbjs/lib/warning');var _require=




require('ViewAccessibility'),AccessibilityComponentTypes=_require.AccessibilityComponentTypes,AccessibilityTraits=_require.AccessibilityTraits;

var requireNativeComponent=require('requireNativeComponent');

var forceTouchAvailable=NativeModules.PlatformConstants&&
NativeModules.PlatformConstants.forceTouchAvailable||false;

/**
 * The most fundamental component for building a UI, `View` is a container that supports layout with
 * [flexbox](docs/flexbox.html), [style](docs/style.html),
 * [some touch handling](docs/handling-touches.html), and
 * [accessibility](docs/accessibility.html) controls. `View` maps directly to the
 * native view equivalent on whatever platform React Native is running on, whether that is a
 * `UIView`, `<div>`, `android.view`, etc.
 *
 * `View` is designed to be nested inside other views and can have 0 to many children of any type.
 *
 * This example creates a `View` that wraps two colored boxes and a text component in a row with
 * padding.
 *
 * ```javascript
 * class ViewColoredBoxesWithText extends Component {
 *   render() {
 *     return (
 *       <View style={{flexDirection: 'row', height: 100, padding: 20}}>
 *         <View style={{backgroundColor: 'blue', flex: 0.3}} />
 *         <View style={{backgroundColor: 'red', flex: 0.5}} />
 *         <Text>Hello World!</Text>
 *       </View>
 *     );
 *   }
 * }
 * ```
 *
 * > `View`s are designed to be used with [`StyleSheet`](docs/style.html) for clarity
 * > and performance, although inline styles are also supported.
 *
 * ### Synthetic Touch Events
 *
 * For `View` responder props (e.g., `onResponderMove`), the synthetic touch event passed to them
 * are of the following form:
 *
 * - `nativeEvent`
 *   - `changedTouches` - Array of all touch events that have changed since the last event.
 *   - `identifier` - The ID of the touch.
 *   - `locationX` - The X position of the touch, relative to the element.
 *   - `locationY` - The Y position of the touch, relative to the element.
 *   - `pageX` - The X position of the touch, relative to the root element.
 *   - `pageY` - The Y position of the touch, relative to the root element.
 *   - `target` - The node id of the element receiving the touch event.
 *   - `timestamp` - A time identifier for the touch, useful for velocity calculation.
 *   - `touches` - Array of all current touches on the screen.
 */
// $FlowFixMe(>=0.41.0)
var View=React.createClass({displayName:"View",
// TODO: We should probably expose the mixins, viewConfig, and statics publicly. For example,
// one of the props is of type AccessibilityComponentType. That is defined as a const[] above,
// but it is not rendered by the docs, since `statics` below is not rendered. So its Possible
// values had to be hardcoded.
mixins:[NativeMethodsMixin],

// `propTypes` should not be accessed directly on View since this wrapper only
// exists for DEV mode. However it's important for them to be declared.
// If the object passed to `createClass` specifies `propTypes`, Flow will
// create a static type from it. This property will be over-written below with
// a warn-on-use getter though.
// TODO (bvaughn) Remove the warn-on-use comment after April 1.
propTypes:ViewPropTypes,

// ReactElementValidator will (temporarily) use this private accessor when
// detected to avoid triggering the warning message.
// TODO (bvaughn) Remove this after April 1 ReactNative RC is tagged.
statics:{
__propTypesSecretDontUseThesePlease:ViewPropTypes},


/**
   * `NativeMethodsMixin` will look for this when invoking `setNativeProps`. We
   * make `this` look like an actual native component class.
   */
viewConfig:{
uiViewClassName:'RCTView',
validAttributes:ReactNativeViewAttributes.RCTView},


contextTypes:{
isInAParentText:React.PropTypes.bool},


render:function render(){
invariant(
!(this.context.isInAParentText&&true),
'Nesting of <View> within <Text> is not supported on Android.');

// WARNING: This method will not be used in production mode as in that mode we
// replace wrapper component View with generated native wrapper RCTView. Avoid
// adding functionality this component that you'd want to be available in both
// dev and prod modes.
return React.createElement(RCTView,this.props);
}});


// Warn about unsupported use of View static properties as these will no longer
// be supported with React fiber. This warning message will go away in the next
// ReactNative release. Use defineProperty() rather than createClass() statics
// because the mixin process auto-triggers the 1-time warning message.
// TODO (bvaughn) Remove this after April 1 ReactNative RC is tagged.
function mixinStatics(target){
var warnedAboutAccessibilityTraits=false;
var warnedAboutAccessibilityComponentType=false;
var warnedAboutForceTouchAvailable=false;
var warnedAboutPropTypes=false;

// $FlowFixMe https://github.com/facebook/flow/issues/285
Object.defineProperty(target,'AccessibilityTraits',{
get:function get(){
warning(
warnedAboutAccessibilityTraits,"View.AccessibilityTraits has been deprecated and will be removed in a future version of ReactNative. Use ViewAccessibility.AccessibilityTraits instead.");




warnedAboutAccessibilityTraits=true;
return AccessibilityTraits;
}});

// $FlowFixMe https://github.com/facebook/flow/issues/285
Object.defineProperty(target,'AccessibilityComponentType',{
get:function get(){
warning(
warnedAboutAccessibilityComponentType,"View.AccessibilityComponentType has been deprecated and will be removed in a future version of ReactNative. Use ViewAccessibility.AccessibilityComponentTypes instead.");




warnedAboutAccessibilityComponentType=true;
return AccessibilityComponentTypes;
}});

// $FlowFixMe https://github.com/facebook/flow/issues/285
Object.defineProperty(target,'forceTouchAvailable',{
get:function get(){
warning(
warnedAboutForceTouchAvailable,"View.forceTouchAvailable has been deprecated and will be removed in a future version of ReactNative. Use NativeModules.PlatformConstants.forceTouchAvailable instead.");




warnedAboutForceTouchAvailable=true;
return forceTouchAvailable;
}});

// $FlowFixMe https://github.com/facebook/flow/issues/285
Object.defineProperty(target,'propTypes',{
get:function get(){
warning(
warnedAboutPropTypes,"View.propTypes has been deprecated and will be removed in a future version of ReactNative. Use ViewPropTypes instead.");



warnedAboutPropTypes=true;
return ViewPropTypes;
}});

}

var RCTView=requireNativeComponent('RCTView',View,{
nativeOnly:{
nativeBackgroundAndroid:true,
nativeForegroundAndroid:true}});
















// TODO (bvaughn) Remove feature flags once all static View accessors are gone.
// We temporarily wrap fiber native views with the create-class View above,
// Because external code sometimes accesses static properties of this view.
var ViewToExport=RCTView;
if(

ReactNativeFeatureFlags.useFiber)
{
mixinStatics(View);
ViewToExport=View;
}else{
// TODO (bvaughn) Remove this mixin once all static View accessors are gone.
mixinStatics(RCTView);
}

// TODO (bvaughn) Temporarily mask Flow warnings for View property accesses.
// We're wrapping the string type (Fiber) for now to avoid any actual problems.
module.exports=ViewToExport;