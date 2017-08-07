/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Picker
 * 
 */

'use strict';var _class,_temp;

var ColorPropType=require('ColorPropType');
var PickerIOS=require('PickerIOS');
var PickerAndroid=require('PickerAndroid');
var Platform=require('Platform');
var React=require('React');
var StyleSheetPropType=require('StyleSheetPropType');
var TextStylePropTypes=require('TextStylePropTypes');
var UnimplementedView=require('UnimplementedView');
var ViewPropTypes=require('ViewPropTypes');
var ViewStylePropTypes=require('ViewStylePropTypes');

var itemStylePropType=StyleSheetPropType(TextStylePropTypes);

var pickerStyleType=StyleSheetPropType(babelHelpers.extends({},
ViewStylePropTypes,{
color:ColorPropType}));


var MODE_DIALOG='dialog';
var MODE_DROPDOWN='dropdown';

/**
 * Renders the native picker component on iOS and Android. Example:
 *
 *     <Picker
 *       selectedValue={this.state.language}
 *       onValueChange={(lang) => this.setState({language: lang})}>
 *       <Picker.Item label="Java" value="java" />
 *       <Picker.Item label="JavaScript" value="js" />
 *     </Picker>
 */var
Picker=function(_React$Component){babelHelpers.inherits(Picker,_React$Component);function Picker(){babelHelpers.classCallCheck(this,Picker);return babelHelpers.possibleConstructorReturn(this,(Picker.__proto__||Object.getPrototypeOf(Picker)).apply(this,arguments));}babelHelpers.createClass(Picker,[{key:"render",











/**
  * On Android, display the options in a dialog.
  */value:function render()
























































{



{
// $FlowFixMe found when converting React.createClass to ES6
return React.createElement(PickerAndroid,this.props,this.props.children);
}


}// $FlowFixMe(>=0.41.0)
/**
  * On Android, display the options in a dropdown (this is the default).
  */}]);return Picker;}(React.Component);/**
 * Individual selectable item in a Picker.
 */
// $FlowFixMe found when converting React.createClass to ES6
Picker.MODE_DIALOG=MODE_DIALOG;Picker.MODE_DROPDOWN=MODE_DROPDOWN;Picker.defaultProps={mode:MODE_DIALOG};Picker.propTypes=babelHelpers.extends({},ViewPropTypes,{style:pickerStyleType,/**
    * Value matching value of one of the items. Can be a string or an integer.
    */selectedValue:React.PropTypes.any,/**
    * Callback for when an item is selected. This is called with the following parameters:
    *   - `itemValue`: the `value` prop of the item that was selected
    *   - `itemPosition`: the index of the selected item in this picker
    */onValueChange:React.PropTypes.func,/**
    * If set to false, the picker will be disabled, i.e. the user will not be able to make a
    * selection.
    * @platform android
    */enabled:React.PropTypes.bool,/**
    * On Android, specifies how to display the selection items when the user taps on the picker:
    *
    *   - 'dialog': Show a modal dialog. This is the default.
    *   - 'dropdown': Shows a dropdown anchored to the picker view
    *
    * @platform android
    */mode:React.PropTypes.oneOf(['dialog','dropdown']),/**
    * Style to apply to each of the item labels.
    * @platform ios
    */itemStyle:itemStylePropType,/**
    * Prompt string for this picker, used on Android in dialog mode as the title of the dialog.
    * @platform android
    */prompt:React.PropTypes.string,/**
    * Used to locate this view in end-to-end tests.
    */testID:React.PropTypes.string});Picker.Item=(_temp=_class=function(_React$Component2){babelHelpers.inherits(_class,_React$Component2);function _class(){babelHelpers.classCallCheck(this,_class);return babelHelpers.possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).apply(this,arguments));}babelHelpers.createClass(_class,[{key:"render",value:function render()



{
// The items are not rendered directly
throw null;
}}]);return _class;}(React.Component),_class.propTypes={/**
    * Text to display for this item.
    */label:React.PropTypes.string.isRequired,/**
    * The value to be passed to picker's `onValueChange` callback when
    * this item is selected. Can be a string or an integer.
    */value:React.PropTypes.any,/**
    * Color of this item's text.
    * @platform android
    */color:ColorPropType,/**
    * Used to locate the item in end-to-end tests.
    */testID:React.PropTypes.string},_temp);module.exports=Picker;