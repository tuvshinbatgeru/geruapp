/**
 * # LoginForm.js
 *
 * This class utilizes the ```tcomb-form-native``` library and just
 * sets up the options required for the 3 states of Login, namely
 * Login, Register or Reset Password
 *
 */
'use strict';
/**
 * ## Import
 *
 * React
 */
var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _moment=require("moment");var _moment2=babelHelpers.interopRequireDefault(_moment);
var _lodash=require("lodash");var _lodash2=babelHelpers.interopRequireDefault(_lodash);


var t=require('tcomb-form-native');
var stylesheet=require('../../styles/customTcombStyle');
var datePickerStylesheet=_lodash2.default.cloneDeep(stylesheet);

datePickerStylesheet.fieldset={
flexDirection:'row'};


datePickerStylesheet.formGroup.normal.flex=1;
datePickerStylesheet.formGroup.normal.marginLeft=5;
datePickerStylesheet.formGroup.error.flex=1;

var titleStylesheed=_lodash2.default.cloneDeep(stylesheet);
titleStylesheed.textbox.normal.height=36;

t.form.Form.stylesheet=stylesheet;
var Form=t.form.Form;

var ProjectForm=_react2.default.createClass({displayName:"ProjectForm",
/**
   * ## LoginForm class
   *
   * * form: the properties to set into the UI form
   * * value: the values to set in the input fields
   * * onChange: function to call when user enters text
   */
propTypes:{
form:_react.PropTypes.object,
value:_react.PropTypes.object,
onChange:_react.PropTypes.func},


customDateFormat:function customDateFormat(date){
return(0,_moment2.default)(date).format('YYYY/MM/DD');
/*return moment(date).format('YYYY/MM/DD') + 
           ' (' + moment(date).diff(moment(), 'hours') + ' цаг дутуу)'*/
},

customTimeFormat:function customTimeFormat(date){
return(0,_moment2.default)(date).format('HH:mm');
},


/**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
render:function render(){var _this=this;
var options={
fields:{},
stylesheet:stylesheet};


var title={
label:'Гарчиг',
maxLength:50,
stylesheet:titleStylesheed,
editable:!this.props.form.isFetching,
hasError:this.props.form.fields.titleHasError,
error:this.props.form.fields.titleErrorMsg};


var description={
label:'Тайлбар',
numberOfLines:3,
multiline:true,
editable:!this.props.form.isFetching,
hasError:this.props.form.fields.descriptionHasError,
error:this.props.form.fields.descriptionErrorMsg};


var awardDate={
label:'Шалгаруулах өдөр',
mode:'date'};


var awardTime={
label:'Шалгаруулах цаг',
mode:'time'};


var projectForm=t.struct({
title:t.String,
description:t.String,
awardDateTime:t.struct({
awardDate:t.Date,
awardTime:t.Date})});



options.fields['title']=title;
options.fields['title'].placeholder='Ажлын гарчиг оруулна уу';

options.fields['description']=description;
options.fields['description'].placeholder='Ажлын тайлбар оруулна уу';


options.fields['awardDateTime']={
label:' ',
fields:{
awardDate:awardDate,
awardTime:awardTime},


stylesheet:datePickerStylesheet};


options.fields['awardDateTime'].fields['awardDate'].config={
format:function format(date){return _this.customDateFormat(date);}};


options.fields['awardDateTime'].fields['awardTime'].config={
format:function format(date){return _this.customTimeFormat(date);}};


return(
_react2.default.createElement(Form,{ref:"form",
type:projectForm,
options:options,
value:this.props.value,
onChange:this.props.onChange}));



}});


module.exports=ProjectForm;