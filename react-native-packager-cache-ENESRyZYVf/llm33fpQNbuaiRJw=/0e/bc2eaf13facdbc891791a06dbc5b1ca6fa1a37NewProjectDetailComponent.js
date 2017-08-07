Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");










var _reactRedux=require("react-redux");
var _redux=require("redux");
var _ProjectActions=require("../ProjectActions");var newProjectActions=babelHelpers.interopRequireWildcard(_ProjectActions);
var _variables=require("../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);

var _reactNativeNavbar=require("react-native-navbar");var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _NavBarIconText=require("../../components/NavBarIconText");var _NavBarIconText2=babelHelpers.interopRequireDefault(_NavBarIconText);

var _reactNativeModalbox=require("react-native-modalbox");var _reactNativeModalbox2=babelHelpers.interopRequireDefault(_reactNativeModalbox);
var _reactNativeRouterFlux=require("react-native-router-flux");
var _ModalPicker=require("../../components/ModalPicker");var _ModalPicker2=babelHelpers.interopRequireDefault(_ModalPicker);
var _ImagesSlider=require("../../components/image-slider/ImagesSlider");var _ImagesSlider2=babelHelpers.interopRequireDefault(_ImagesSlider);

var _TabImagesContainer=require("../../components/tab-image-chooser/TabImagesContainer");var _TabImagesContainer2=babelHelpers.interopRequireDefault(_TabImagesContainer);


var _ModalDropdown=require("../../components/ModalDropdown");var _ModalDropdown2=babelHelpers.interopRequireDefault(_ModalDropdown);
var _reactNativeAnimatedButton=require("../../components/react-native-animated-button");var _reactNativeAnimatedButton2=babelHelpers.interopRequireDefault(_reactNativeAnimatedButton);
var _reactNativeAnimatedOverlay=require("../../components/react-native-animated-overlay");var _reactNativeAnimatedOverlay2=babelHelpers.interopRequireDefault(_reactNativeAnimatedOverlay);
var _ProjectForm=require("./ProjectForm");var _ProjectForm2=babelHelpers.interopRequireDefault(_ProjectForm);

function mapDispatchToProps(dispatch){
return{
actions:(0,_redux.bindActionCreators)(newProjectActions,dispatch)};

}var

NewProjectDetailComponent=function(_Component){babelHelpers.inherits(NewProjectDetailComponent,_Component);

function NewProjectDetailComponent(props){babelHelpers.classCallCheck(this,NewProjectDetailComponent);var _this=babelHelpers.possibleConstructorReturn(this,(NewProjectDetailComponent.__proto__||Object.getPrototypeOf(NewProjectDetailComponent)).call(this,
props));

_this.state={
showPriceChooser:false,
showDurationTypeChooser:false,
showDurationValueChooser:false,
showSkillChooser:false,
value:{
title:_this.props.project.form.fields.title,
description:_this.props.project.form.fields.description,
awardDate:_this.props.project.form.fields.awardDate,
awardTime:_this.props.project.form.fields.awardTime},

hours:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
days:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
months:[1,2,3,4,5,6,7,8,9,10,11,12]};


_this.saveProject=_this.saveProject.bind(_this);return _this;
}babelHelpers.createClass(NewProjectDetailComponent,[{key:"validate",value:function validate(

form){
if(form.isValid){
return{
result:true,
message:''};

}

return{
result:false,
error:form.error};

}},{key:"saveProject",value:function saveProject()

{var _this2=this;
Promise.resolve(this.props.actions.checkProjectValidation()).
then(function(res){var

project=
_this2.props.project;

var response=_this2.validate(project.form);

if(!response.result){
_reactNative.Alert.alert(response.error.field,response.error.message);
return;
}

_this2.props.actions.saveProject(project.form,
project.selectedPriceBundle,
project.selectedDurationType,
project.durationValue,
project.getIn(['tags','selected']));
});


}},{key:"onChange",value:function onChange(

value,path){

if(path[0]=='title'){
this.props.actions.onProjectFormFieldChange('title',value.title);
}

if(path[0]=='description'){
this.props.actions.onProjectFormFieldChange('description',value.description);
}

if(path[0]=='awardDateTime'&&path[1]=='awardDate'){
this.props.actions.onProjectFormFieldChange('awardDate',value.awardDateTime.awardDate);
}

if(path[0]=='awardDateTime'&&path[1]=='awardTime'){
this.props.actions.onProjectFormFieldChange('awardTime',value.awardDateTime.awardTime);
}

this.setState({
value:value});


//window.setTimeout(() => alert(this.props.project.form.fields.awardTime), 2000)

}},{key:"imageUploaded",value:function imageUploaded(

data){
this.props.actions.newProjectImageUploaded(data);
}},{key:"imageRemoved",value:function imageRemoved(

data){
this.props.actions.newProjectImageRemoved(data);
}},{key:"toggleShowPriceChooser",value:function toggleShowPriceChooser(

toggle){
this.setState({
showPriceChooser:toggle});

}},{key:"toggleSkillChooser",value:function toggleSkillChooser(

toggle){
this.setState({
showSkillChooser:toggle});

}},{key:"toggleShowDurationChooser",value:function toggleShowDurationChooser(

toggle){
this.setState({
showDurationTypeChooser:toggle});

}},{key:"toggleShowDurationValueChooser",value:function toggleShowDurationValueChooser(

toggle){
this.setState({
showDurationValueChooser:toggle});

}},{key:"skillsChoosed",value:function skillsChoosed(

skill){
this.props.actions.toggleSelectedSkills(skill);
}},{key:"priceChoosed",value:function priceChoosed(

item){
this.toggleShowPriceChooser(false);
this.props.actions.priceBundleChanged(item);
}},{key:"durationTypeChoosed",value:function durationTypeChoosed(

item){
this.toggleShowDurationChooser(false);
this.props.actions.durationTypeChanged(item);
}},{key:"durationValueChoosed",value:function durationValueChoosed(

item){
this.toggleShowDurationValueChooser(false);
this.props.actions.durationValueChanged(item);
}},{key:"chooseDurationOptions",value:function chooseDurationOptions()

{
switch(this.props.project.selectedDurationType.id){
case 1:
return this.state.hours;
case 2:
return this.state.days;
case 3:
return this.state.months;}

}},{key:"render",value:function render()

{var _this3=this;var

project=
this.props.project;

return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNativeNavbar2.default,{
leftButton:
_react2.default.createElement(_NavBarIconText2.default,{icon:"ios-arrow-back-outline",
size:30,
color:"#b5b5b5",
text:"\u0431\u0443\u0446\u0430\u0445",
position:"back",
onPress:this.props.onBackAction})}),




_react2.default.createElement(_reactNative.ScrollView,{automaticallyAdjustContentInsets:false,
style:[styles.scrollView]},
_react2.default.createElement(_reactNative.View,{style:styles.inputs},
_react2.default.createElement(_ProjectForm2.default,{
form:project.form,
value:this.state.value,
onChange:function onChange(value,path){return _this3.onChange(value,path);}})),


_react2.default.createElement(_ModalDropdown2.default,{title:"Төсөв: ",
selectedValue:project.selectedPriceBundle.min_amount+'₮ - '+project.selectedPriceBundle.max_amount+'₮',
loading:this.state.showPriceChooser,
onPress:function onPress(){return _this3.toggleShowPriceChooser(true);}}),

_react2.default.createElement(_reactNative.View,{style:styles.durationBundleContainer},
_react2.default.createElement(_ModalDropdown2.default,{title:"Төрөл: ",
selectedValue:project.selectedDurationType.label,
loading:this.state.showDurationTypeChooser,
onPress:function onPress(){return _this3.toggleShowDurationChooser(true);}}),

_react2.default.createElement(_ModalDropdown2.default,{title:"Хугацаа: ",
selectedValue:String(project.durationValue),
loading:this.state.showDurationValueChooser,
onPress:function onPress(){return _this3.toggleShowDurationValueChooser(true);}}))),




_react2.default.createElement(_reactNativeAnimatedButton2.default,{text:"\u0422\u04E9\u0441\u04E9\u043B \u043D\u0438\u0439\u0442\u043B\u044D\u0445",
textStyle:{color:'#fff',fontSize:18,fontFamily:_variables2.default.FONT_BOLD},
loading:project.get('fetching'),
onPress:function onPress(){return _this3.saveProject();}
//onLoadingComplete={this.onLoadingComplete}
}),

_react2.default.createElement(_reactNativeAnimatedOverlay2.default,{isOpen:project.get('fetched')},

_react2.default.createElement(_reactNative.View,{style:{flex:1,backgroundColor:'#fff'}},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.centerCenter,{flex:4}]},
_react2.default.createElement(_reactNative.Text,{style:[_variables.layout.label,{fontSize:24,color:'#66cc22'}]},"\u0422\u0430\u043D\u044B \u0442\u04E9\u0441\u04E9\u043B \u0430\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439 \u043D\u0438\u0439\u0442\u043B\u044D\u0433\u0434\u044D\u043B\u044D\u044D.")),



_react2.default.createElement(_reactNative.View,{style:{flex:1,paddingHorizontal:20}},
_react2.default.createElement(_reactNative.TouchableOpacity,{style:[_variables.layout.centerCenter,{backgroundColor:_variables2.default.BRAND_COLOR,borderRadius:40,paddingVertical:10}],
activeOpacity:0.9,
onPress:this.props.onForwardAction},

_react2.default.createElement(_reactNative.Text,{style:{color:'#fff',fontSize:24,fontFamily:_variables2.default.FONT_HEAVY}},"I GET IT"))))),







_react2.default.createElement(_ModalPicker2.default,{options:project.fixedPriceBundles,
isOpen:this.state.showPriceChooser,
onClosed:function onClosed(){return _this3.toggleShowPriceChooser(false);},
title:"\u0422\u04E9c\u04E9\u0432 \u0441\u043E\u043D\u0433\u043E\u0445",
onChange:function onChange(item){return _this3.priceChoosed(item);},
selectedOption:project.selectedPriceBundle.id,
selectedIndex:0,
closeAfterChoosed:true,
identity:"id",
label:function label(item){return item.description+' - '+item.min_amount+' - '+item.max_amount+' ₮';}}),

_react2.default.createElement(_ModalPicker2.default,{options:project.durationTypes,
isOpen:this.state.showDurationTypeChooser,
onClosed:function onClosed(){return _this3.toggleShowDurationChooser(false);},
title:"\u0410\u0436\u0438\u043B \u04AF\u0440\u0433\u044D\u043B\u0436\u0438\u043B\u044D\u0445 \u0442\u04E9\u0440\u04E9\u043B \u0441\u043E\u043D\u0433\u043E\u0445",
onChange:function onChange(item){return _this3.durationTypeChoosed(item);},
selectedOption:project.selectedDurationType.id,
selectedIndex:0,
closeAfterChoosed:true,
identity:"id",
label:function label(item){return item.label;}}),

_react2.default.createElement(_ModalPicker2.default,{options:this.chooseDurationOptions(),
isOpen:this.state.showDurationValueChooser,
onClosed:function onClosed(){return _this3.toggleShowDurationValueChooser(false);},
title:"\u0425\u0443\u0433\u0430\u0446\u0430\u0430 \u0441\u043E\u043D\u0433\u043E\u0445",
onChange:function onChange(item){return _this3.durationValueChoosed(item);},
selectedOption:project.durationValue,
selectedIndex:0,
closeAfterChoosed:true,
identity:"id",
label:function label(item){return item;}})));


}}]);return NewProjectDetailComponent;}(_react.Component);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
padding:10},


scrollView:{
flex:1
// /backgroundColor: 'red',
},

inputs:{
marginTop:10,
marginBottom:10,
marginLeft:10,
marginRight:10},


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


durationBundleContainer:{
flexDirection:'row'},


selectedBudget:{
color:_variables2.default.BRAND_SECONDARY,
marginTop:5,
marginLeft:5,
padding:5,
borderRadius:5,
borderWidth:1,
borderColor:_variables2.default.BRAND_SECONDARY,
backgroundColor:'#fff',
fontFamily:'Lato-Regular'},


otherBudget:{
marginLeft:5,
padding:5,
borderRadius:5,
backgroundColor:'#edeff0',
color:'#b5b5b5',
fontFamily:'Lato-Bold'},


dropdownIcon:{
marginLeft:10}});exports.default=



(0,_reactRedux.connect)(null,mapDispatchToProps)(NewProjectDetailComponent);