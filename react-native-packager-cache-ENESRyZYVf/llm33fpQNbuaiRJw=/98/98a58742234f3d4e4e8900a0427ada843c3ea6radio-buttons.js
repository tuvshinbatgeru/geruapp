'use strict';
var React=require('react');
var ReactNative=require('react-native');var


Text=


ReactNative.Text,TouchableWithoutFeedback=ReactNative.TouchableWithoutFeedback,View=ReactNative.View;

var propTypes={
options:React.PropTypes.array.isRequired,
testOptionEqual:React.PropTypes.func,
renderOption:React.PropTypes.func,
renderContainer:React.PropTypes.func,
onSelection:React.PropTypes.func};var


RadioButtons=function(_React$Component){babelHelpers.inherits(RadioButtons,_React$Component);
function RadioButtons(){babelHelpers.classCallCheck(this,RadioButtons);var _this=babelHelpers.possibleConstructorReturn(this,(RadioButtons.__proto__||Object.getPrototypeOf(RadioButtons)).call(this));

_this.state={
selectedOption:null,
selectedIndex:null};return _this;

}babelHelpers.createClass(RadioButtons,[{key:"copySelectedOptionFromProps",value:function copySelectedOptionFromProps(_ref)

{var selectedOption=_ref.selectedOption,selectedIndex=_ref.selectedIndex;
this.setState({
selectedOption:selectedOption,
selectedIndex:selectedIndex});

}},{key:"componentWillMount",value:function componentWillMount()

{
this.copySelectedOptionFromProps(this.props);
}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

newProps){
this.copySelectedOptionFromProps(newProps);
}},{key:"selectOption",value:function selectOption(

selectedOption,selectedIndex){
this.setState({
selectedOption:selectedOption,
selectedIndex:selectedIndex});

this.props.onSelection(selectedOption,selectedIndex);
}},{key:"render",value:function render()

{var _state=
this.state,selectedOption=_state.selectedOption,selectedIndex=_state.selectedIndex;

var children=this.props.options.map(function(option,index){
var isSelected=selectedIndex===index||this.props.testOptionEqual(selectedOption,option);
var onSelection=this.selectOption.bind(this,option,index);

return this.props.renderOption(option,isSelected,onSelection,index);
}.bind(this));

return this.props.renderContainer(children);
}}],[{key:"getTextOptionRenderer",value:function getTextOptionRenderer(

normalStyle,selectedStyle,extractText){
return function renderOption(option,selected,onSelect,index){
var style=selected?selectedStyle:normalStyle;
var label=extractText?extractText(option):option;
return(
React.createElement(TouchableWithoutFeedback,{onPress:onSelect,key:index},
React.createElement(Text,{style:style},label)));


};
}},{key:"getViewContainerRenderer",value:function getViewContainerRenderer(
style){
return function renderContainer(options){
return React.createElement(View,{style:style},options);
};
}}]);return RadioButtons;}(React.Component);


RadioButtons.renderHorizontalContainer=RadioButtons.getViewContainerRenderer({
flexDirection:'row'});


RadioButtons.renderVerticalContainer=RadioButtons.getViewContainerRenderer({
flexDirection:'column'});


RadioButtons.defaultProps={
testOptionEqual:function testOptionEqual(a,b){
return a===b;
},
renderOption:RadioButtons.getTextOptionRenderer({},{fontWeight:'bold'}),
renderContainer:RadioButtons.renderVerticalContainer,
onSelection:function onSelection(option){}};

RadioButtons.propTypes=propTypes;

module.exports=RadioButtons;