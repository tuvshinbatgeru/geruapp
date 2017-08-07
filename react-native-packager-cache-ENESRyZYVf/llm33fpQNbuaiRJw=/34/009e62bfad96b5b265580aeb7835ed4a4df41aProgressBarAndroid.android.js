/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ProgressBarAndroid
 */
'use strict';

var NativeMethodsMixin=require('NativeMethodsMixin');
var React=require('React');
var ViewPropTypes=require('ViewPropTypes');
var ColorPropType=require('ColorPropType');

var requireNativeComponent=require('requireNativeComponent');

var ReactPropTypes=React.PropTypes;

var STYLE_ATTRIBUTES=[
'Horizontal',
'Normal',
'Small',
'Large',
'Inverse',
'SmallInverse',
'LargeInverse'];


var indeterminateType=function indeterminateType(props,propName,componentName){
var checker=function checker(){
var indeterminate=props[propName];
var styleAttr=props.styleAttr;
if(!indeterminate&&styleAttr!=='Horizontal'){
return new Error('indeterminate=false is only valid for styleAttr=Horizontal');
}
};

return ReactPropTypes.bool(props,propName,componentName)||checker();
};

/**
 * React component that wraps the Android-only `ProgressBar`. This component is used to indicate
 * that the app is loading or there is some activity in the app.
 *
 * Example:
 *
 * ```
 * render: function() {
 *   var progressBar =
 *     <View style={styles.container}>
 *       <ProgressBar styleAttr="Inverse" />
 *     </View>;

 *   return (
 *     <MyLoadingComponent
 *       componentView={componentView}
 *       loadingView={progressBar}
 *       style={styles.loadingComponent}
 *     />
 *   );
 * },
 * ```
 */
var ProgressBarAndroid=React.createClass({displayName:"ProgressBarAndroid",
propTypes:babelHelpers.extends({},
ViewPropTypes,{
/**
     * Style of the ProgressBar. One of:
     *
     * - Horizontal
     * - Normal (default)
     * - Small
     * - Large
     * - Inverse
     * - SmallInverse
     * - LargeInverse
     */
styleAttr:ReactPropTypes.oneOf(STYLE_ATTRIBUTES),
/**
     * If the progress bar will show indeterminate progress. Note that this
     * can only be false if styleAttr is Horizontal.
     */
indeterminate:indeterminateType,
/**
     * The progress value (between 0 and 1).
     */
progress:ReactPropTypes.number,
/**
     * Color of the progress bar.
     */
color:ColorPropType,
/**
     * Used to locate this view in end-to-end tests.
     */
testID:ReactPropTypes.string}),


getDefaultProps:function getDefaultProps(){
return{
styleAttr:'Normal',
indeterminate:true};

},

mixins:[NativeMethodsMixin],

componentDidMount:function componentDidMount(){
if(this.props.indeterminate&&this.props.styleAttr!=='Horizontal'){
console.warn("Circular indeterminate `ProgressBarAndroid`is deprecated. Use `ActivityIndicator` instead.");



}
},

render:function render(){
return React.createElement(AndroidProgressBar,this.props);
}});


var AndroidProgressBar=requireNativeComponent(
'AndroidProgressBar',
ProgressBarAndroid,
{nativeOnly:{animating:true}});


module.exports=ProgressBarAndroid;