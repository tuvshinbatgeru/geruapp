/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule NavigationView
 * 
 */
'use strict';

var Animated=require('react-native').Animated;
var NavigationContainer=require('./NavigationContainer');
var React=require('react');
var StyleSheet=require('react-native').StyleSheet;
var View=require('react-native').View;
var NavigationScenesReducer=require('./NavigationScenesReducer');























var PropTypes=require('prop-types');

/**
 * A simple view that will render a scene for the currently focused sub-state.
 * The most common use-case is for tabs, where no transition is needed
 */var
NavigationView=function(_React$PureComponent){babelHelpers.inherits(NavigationView,_React$PureComponent);












function NavigationView(props,context){babelHelpers.classCallCheck(this,NavigationView);var _this=babelHelpers.possibleConstructorReturn(this,(NavigationView.__proto__||Object.getPrototypeOf(NavigationView)).call(this,
props,context));

var layout={
initWidth:0,
initHeight:0,
isMeasured:false,
width:new Animated.Value(0),
height:new Animated.Value(0)};var


navigationState=_this.props.navigationState;

_this._position=new Animated.Value(navigationState.index);

_this.state={
layout:layout,
scenes:NavigationScenesReducer([],navigationState)};return _this;

}babelHelpers.createClass(NavigationView,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

nextProps){var _this2=this;
if(nextProps.navigationState!==this.props.navigationState){var
_navigationState=nextProps.navigationState;
this.setState(
{
scenes:NavigationScenesReducer(
this.state.scenes,
_navigationState,
null// There will be no transtion.
)},

function(){
_this2._position.setValue(_navigationState.index);
});

}
}},{key:"componentWillMount",value:function componentWillMount()

{
this._onLayout=this._onLayout.bind(this);
}},{key:"render",value:function render()

{var _props=



this.props,navigationState=_props.navigationState,onNavigate=_props.onNavigate;var _state=




this.state,layout=_state.layout,scenes=_state.scenes;

var sceneProps={
layout:layout,
navigationState:navigationState,
onNavigate:onNavigate,
position:this._position,
scene:scenes[navigationState.index],
scenes:scenes};


return(
React.createElement(View,{
onLayout:this._onLayout,
style:this.props.style},
this._renderScene(sceneProps)));


}},{key:"_renderScene",value:function _renderScene(

props){

var child=this.props.renderScene(props);
if(child===null){
return null;
}
return React.createElement(View,{key:props.scene.key,style:styles.scene},child);
}},{key:"_onLayout",value:function _onLayout(

event){var _event$nativeEvent$la=
event.nativeEvent.layout,height=_event$nativeEvent$la.height,width=_event$nativeEvent$la.width;

var layout=babelHelpers.extends({},
this.state.layout,{
initHeight:height,
initWidth:width,
isMeasured:true});


layout.height.setValue(height);
layout.width.setValue(width);

this.setState({layout:layout});
}}]);return NavigationView;}(React.PureComponent);NavigationView.propTypes={navigationState:PropTypes.object.isRequired,onNavigate:PropTypes.func.isRequired,renderScene:PropTypes.func.isRequired};


var styles=StyleSheet.create({
scene:{
bottom:0,
left:0,
position:'absolute',
right:0,
top:0}});



module.exports=NavigationContainer.create(NavigationView);