Object.defineProperty(exports,"__esModule",{value:true});







var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);



var _reactNative=require("react-native");





var _reactNativeExperimentalNavigation=require("react-native-experimental-navigation");var _reactNativeExperimentalNavigation2=babelHelpers.interopRequireDefault(_reactNativeExperimentalNavigation);

var _TabBar=require("./TabBar");var _TabBar2=babelHelpers.interopRequireDefault(_TabBar);
var _NavBar=require("./NavBar");var _NavBar2=babelHelpers.interopRequireDefault(_NavBar);
var _Actions=require("./Actions");var _Actions2=babelHelpers.interopRequireDefault(_Actions);
var _Util=require("./Util");

var SCREEN_WIDTH=_reactNative.Dimensions.get('window').width;/**
 * Copyright (c) 2015-present, Pavel Aksonov
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */var SCREEN_HEIGHT=_reactNative.Dimensions.get('window').height;var NavigationAnimatedView=_reactNativeExperimentalNavigation2.default.AnimatedView,NavigationCard=_reactNativeExperimentalNavigation2.default.Card;var

NavigationCardStackPanResponder=

NavigationCard.CardStackPanResponder,NavigationCardStackStyleInterpolator=NavigationCard.CardStackStyleInterpolator;

var styles=_reactNative.StyleSheet.create({
animatedView:{
flex:1,
backgroundColor:'transparent'},

sceneStyle:{
flex:1}});



function fadeInScene(/* NavigationSceneRendererProps */props){var

position=

props.position,scene=props.scene;

var index=scene.index;
var inputRange=[index-1,index,index+1];

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[0,1,0.3]});


var scale=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.95]});


var translateY=0;
var translateX=0;

return{
opacity:opacity,
transform:[
{scale:scale},
{translateX:translateX},
{translateY:translateY}]};


}

function leftToRight(/* NavigationSceneRendererProps */props){var

position=

props.position,scene=props.scene;

var index=scene.index;
var inputRange=[index-1,index,index+1];

var translateX=position.interpolate({
inputRange:inputRange,
outputRange:[-SCREEN_WIDTH,0,0]});


return{
transform:[
{translateX:translateX}]};


}

function topToBottom(/* NavigationSceneRendererProps */props){var

position=

props.position,scene=props.scene;

var index=scene.index;
var inputRange=[index-1,index,index+1];

var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[-SCREEN_HEIGHT*3,0,0]});


return{
transform:[
{translateY:translateY}]};


}var

DefaultRenderer=function(_PureComponent){babelHelpers.inherits(DefaultRenderer,_PureComponent);function DefaultRenderer(){babelHelpers.classCallCheck(this,DefaultRenderer);return babelHelpers.possibleConstructorReturn(this,(DefaultRenderer.__proto__||Object.getPrototypeOf(DefaultRenderer)).apply(this,arguments));}babelHelpers.createClass(DefaultRenderer,[{key:"getChildContext",value:function getChildContext()


































































































































































{
return{
navigationState:this.props.navigationState};

}},{key:"componentDidMount",value:function componentDidMount()

{
DefaultRenderer.dispatchFocusAction(this.props);
}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

nextProps){
if(nextProps.navigationState!==this.props.navigationState){
DefaultRenderer.dispatchFocusAction(nextProps);
}
}},{key:"render",value:function render()

{var _props=
this.props,navigationState=_props.navigationState,onNavigate=_props.onNavigate;

if(!navigationState||!onNavigate){
console.error('navigationState and onNavigate property should be not null');
return null;
}

var SceneComponent=navigationState.component;

if(navigationState.tabs&&!SceneComponent){
SceneComponent=_TabBar2.default;
}

if(SceneComponent){
return(
_react2.default.createElement(_reactNative.View,{
style:[styles.sceneStyle,navigationState.sceneStyle]},

_react2.default.createElement(SceneComponent,babelHelpers.extends({},this.props,navigationState))));


}

var optionals={};
var selected=navigationState.children[navigationState.index];
var applyAnimation=selected.applyAnimation||navigationState.applyAnimation;
var style=selected.style||navigationState.style;

if(applyAnimation){
optionals.applyAnimation=applyAnimation;
}else{
var duration=selected.duration;
if(duration===null||duration===undefined)duration=navigationState.duration;
if(duration!==null&&duration!==undefined){
optionals.applyAnimation=function(pos,navState){
if(duration===0){
pos.setValue(navState.index);
}else{
_reactNative.Animated.timing(pos,{toValue:navState.index,duration:duration}).start();
}
};
}
}

// console.log(`NavigationAnimatedView for ${navigationState.key}`);

return(
_react2.default.createElement(NavigationAnimatedView,babelHelpers.extends({
navigationState:navigationState,
style:[styles.animatedView,style],
renderOverlay:DefaultRenderer.renderHeader,
renderScene:DefaultRenderer.renderCard},
optionals)));


}}],[{key:"getPanHandlers",value:function getPanHandlers(direction,props){return direction==='vertical'?NavigationCardStackPanResponder.forVertical(props):NavigationCardStackPanResponder.forHorizontal(props);}},{key:"dispatchFocusAction",value:function dispatchFocusAction(_ref){var navigationState=_ref.navigationState;if(!navigationState||navigationState.component||navigationState.tabs){return;}var scene=navigationState.children[navigationState.index];_Actions2.default.focus({scene:scene});}},{key:"chooseInterpolator",value:function chooseInterpolator(direction,props){switch(direction){case'vertical':return NavigationCardStackStyleInterpolator.forVertical(props);case'fade':return fadeInScene(props);case'leftToRight':return leftToRight(props);case'topToBottom':return topToBottom(props);default:return NavigationCardStackStyleInterpolator.forHorizontal(props);}}},{key:"renderScene",value:function renderScene(/* NavigationSceneRendererProps */props){return _react2.default.createElement(DefaultRenderer,{key:props.scene.navigationState.key,onNavigate:props.onNavigate,navigationState:props.scene.navigationState});}},{key:"renderHeader",value:function renderHeader(/* NavigationSceneRendererProps */props){var state=props.navigationState;var child=state.children[state.index];var selected=state.children[state.index];while({}.hasOwnProperty.call(selected,'children')){selected=selected.children[selected.index];}if(child!==selected){// console.log(`SKIPPING renderHeader because ${child.key} !== ${selected.key}`);
return null;}var hideNavBar=(0,_Util.deepestExplicitValueForKey)(state,'hideNavBar');if(hideNavBar){// console.log(`SKIPPING renderHeader because ${child.key} hideNavBar === true`);
return null;}// console.log(`renderHeader for ${child.key}`);
if(selected.component&&selected.component.renderNavigationBar){return selected.component.renderNavigationBar(babelHelpers.extends({},props,selected));}var HeaderComponent=selected.navBar||child.navBar||state.navBar||_NavBar2.default;var navBarProps=babelHelpers.extends({},state,child,selected);if(selected.component&&selected.component.onRight){navBarProps.onRight=selected.component.onRight;}if(selected.component&&selected.component.onLeft){navBarProps.onLeft=selected.component.onLeft;}if((navBarProps.leftTitle||navBarProps.leftButtonImage)&&navBarProps.onLeft){delete navBarProps.leftButton;}if((navBarProps.rightTitle||navBarProps.rightButtonImage)&&navBarProps.onRight){delete navBarProps.rightButton;}if(navBarProps.rightButton){delete navBarProps.rightTitle;delete navBarProps.onRight;delete navBarProps.rightButtonImage;}if(navBarProps.leftButton){delete navBarProps.leftTitle;delete navBarProps.onLeft;delete navBarProps.leftButtonImage;}delete navBarProps.style;var getTitle=selected.getTitle||function(opts){return opts.title;};return _react2.default.createElement(HeaderComponent,babelHelpers.extends({},props,navBarProps,{getTitle:getTitle}));}},{key:"renderCard",value:function renderCard(/* NavigationSceneRendererProps */props){var _props$scene$navigati=props.scene.navigationState,key=_props$scene$navigati.key,direction=_props$scene$navigati.direction,animation=_props$scene$navigati.animation,getSceneStyle=_props$scene$navigati.getSceneStyle;var state=props.navigationState;var child=state.children[state.index];var selected=state.children[state.index];while({}.hasOwnProperty.call(selected,'children')){selected=selected.children[selected.index];}var _selected=selected,getPanHandlers=_selected.getPanHandlers;var _selected2=selected,panHandlers=_selected2.panHandlers;var animationStyle=props.scene.navigationState.animationStyle;var isActive=child===selected;var computedProps={isActive:isActive};if(isActive){computedProps.hideNavBar=(0,_Util.deepestExplicitValueForKey)(props.navigationState,'hideNavBar');computedProps.hideTabBar=(0,_Util.deepestExplicitValueForKey)(props.navigationState,'hideTabBar');}var style=getSceneStyle?getSceneStyle(props,computedProps):null;// direction overrides animation if both are supplied
var animType=animation&&!direction?animation:direction;if(typeof animationStyle==='undefined'){animationStyle=DefaultRenderer.chooseInterpolator(animType,props);}if(typeof animationStyle==='function'){animationStyle=animationStyle(props);}if(typeof panHandlers==='undefined'){panHandlers=getPanHandlers?getPanHandlers(props,direction):DefaultRenderer.getPanHandlers(direction,props);}return _react2.default.createElement(NavigationCard,babelHelpers.extends({},props,{key:"card_"+key,style:[animationStyle,style],panHandlers:panHandlers,renderScene:DefaultRenderer.renderScene}));}}]);return DefaultRenderer;}(_react.PureComponent);DefaultRenderer.propTypes={navigationState:_react.PropTypes.object.isRequired,onNavigate:_react.PropTypes.func.isRequired};DefaultRenderer.childContextTypes={navigationState:_react.PropTypes.any};exports.default=DefaultRenderer;