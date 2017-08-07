var React=require('react');var

PropTypes=

React.PropTypes,Component=React.Component;var _ReactNative=
ReactNative=require('react-native'),ViewPropTypes=_ReactNative.ViewPropTypes;var _ReactNative2=









ReactNative,Dimensions=_ReactNative2.Dimensions,View=_ReactNative2.View,Animated=_ReactNative2.Animated,ScrollView=_ReactNative2.ScrollView,Platform=_ReactNative2.Platform,StyleSheet=_ReactNative2.StyleSheet,ViewPagerAndroid=_ReactNative2.ViewPagerAndroid,InteractionManager=_ReactNative2.InteractionManager;
var TimerMixin=require('react-timer-mixin');

var SceneComponent=require('./SceneComponent');
var DefaultTabBar=require('./DefaultTabBar');
var ScrollableTabBar=require('./ScrollableTabBar');

var AnimatedViewPagerAndroid=
Animated.createAnimatedComponent(ViewPagerAndroid);


var ScrollableTabView=React.createClass({displayName:"ScrollableTabView",
mixins:[TimerMixin],
statics:{
DefaultTabBar:DefaultTabBar,
ScrollableTabBar:ScrollableTabBar},

scrollOnMountCalled:false,

propTypes:{
tabBarPosition:PropTypes.oneOf(['top','bottom','overlayTop','overlayBottom']),
initialPage:PropTypes.number,
page:PropTypes.number,
onChangeTab:PropTypes.func,
onScroll:PropTypes.func,
renderTabBar:PropTypes.any,
style:ViewPropTypes.style,
contentProps:PropTypes.object,
scrollWithoutAnimation:PropTypes.bool,
locked:PropTypes.bool,
prerenderingSiblingsNumber:PropTypes.number},


getDefaultProps:function getDefaultProps(){
return{
tabBarPosition:'top',
initialPage:0,
page:-1,
onChangeTab:function onChangeTab(){},
onScroll:function onScroll(){},
contentProps:{},
scrollWithoutAnimation:false,
locked:false,
prerenderingSiblingsNumber:0};

},

getInitialState:function getInitialState(){var _this=this;
var containerWidth=Dimensions.get('window').width;
var scrollValue=void 0;
var scrollXIOS=void 0;
var positionAndroid=void 0;
var offsetAndroid=void 0;













{
positionAndroid=new Animated.Value(this.props.initialPage);
offsetAndroid=new Animated.Value(0);
scrollValue=Animated.add(positionAndroid,offsetAndroid);

var _callListeners=this._polyfillAnimatedValue(scrollValue);
var positionAndroidValue=this.props.initialPage;
var offsetAndroidValue=0;
positionAndroid.addListener(function(_ref2){var value=_ref2.value;
positionAndroidValue=value;
_callListeners(positionAndroidValue+offsetAndroidValue);
});
offsetAndroid.addListener(function(_ref3){var value=_ref3.value;
offsetAndroidValue=value;
_callListeners(positionAndroidValue+offsetAndroidValue);
});
}

return{
currentPage:this.props.initialPage,
scrollValue:scrollValue,
scrollXIOS:scrollXIOS,
positionAndroid:positionAndroid,
offsetAndroid:offsetAndroid,
containerWidth:containerWidth,
sceneKeys:this.newSceneKeys({currentPage:this.props.initialPage})};

},

componentWillReceiveProps:function componentWillReceiveProps(props){
if(props.children!==this.props.children){
this.updateSceneKeys({page:this.state.currentPage,children:props.children});
}

if(props.page>=0&&props.page!==this.state.currentPage){
this.goToPage(props.page);
}
},

componentWillUnmount:function componentWillUnmount(){


{
this.state.positionAndroid.removeAllListeners();
this.state.offsetAndroid.removeAllListeners();
}
},

goToPage:function goToPage(pageNumber){





{
if(this.scrollView){
if(this.props.scrollWithoutAnimation){
this.scrollView.getNode().setPageWithoutAnimation(pageNumber);
}else{
this.scrollView.getNode().setPage(pageNumber);
}
}
}

var currentPage=this.state.currentPage;
this.updateSceneKeys({
page:pageNumber,
callback:this._onChangeTab.bind(this,currentPage,pageNumber)});

},

renderTabBar:function renderTabBar(props){
if(this.props.renderTabBar===false){
return null;
}else if(this.props.renderTabBar){
return React.cloneElement(this.props.renderTabBar(props),props);
}else{
return React.createElement(DefaultTabBar,props);
}
},

updateSceneKeys:function updateSceneKeys(_ref4){var page=_ref4.page,_ref4$children=_ref4.children,children=_ref4$children===undefined?this.props.children:_ref4$children,_ref4$callback=_ref4.callback,callback=_ref4$callback===undefined?function(){}:_ref4$callback;
var newKeys=this.newSceneKeys({previousKeys:this.state.sceneKeys,currentPage:page,children:children});
this.setState({currentPage:page,sceneKeys:newKeys},callback);
},

newSceneKeys:function newSceneKeys(_ref5){var _this2=this;var _ref5$previousKeys=_ref5.previousKeys,previousKeys=_ref5$previousKeys===undefined?[]:_ref5$previousKeys,_ref5$currentPage=_ref5.currentPage,currentPage=_ref5$currentPage===undefined?0:_ref5$currentPage,_ref5$children=_ref5.children,children=_ref5$children===undefined?this.props.children:_ref5$children;
var newKeys=[];
this._children(children).forEach(function(child,idx){
var key=_this2._makeSceneKey(child,idx);
if(_this2._keyExists(previousKeys,key)||
_this2._shouldRenderSceneKey(idx,currentPage)){
newKeys.push(key);
}
});
return newKeys;
},

// Animated.add and Animated.divide do not currently support listeners so
// we have to polyfill it here since a lot of code depends on being able
// to add a listener to `scrollValue`. See https://github.com/facebook/react-native/pull/12620.
_polyfillAnimatedValue:function _polyfillAnimatedValue(animatedValue){

var listeners=new Set();
var addListener=function addListener(listener){
listeners.add(listener);
};

var removeListener=function removeListener(listener){
listeners.delete(listener);
};

var removeAllListeners=function removeAllListeners(){
listeners.clear();
};

animatedValue.addListener=addListener;
animatedValue.removeListener=removeListener;
animatedValue.removeAllListeners=removeAllListeners;

return function(value){return listeners.forEach(function(listener){return listener({value:value});});};
},

_shouldRenderSceneKey:function _shouldRenderSceneKey(idx,currentPageKey){
var numOfSibling=this.props.prerenderingSiblingsNumber;
return idx<currentPageKey+numOfSibling+1&&
idx>currentPageKey-numOfSibling-1;
},

_keyExists:function _keyExists(sceneKeys,key){
return sceneKeys.find(function(sceneKey){return key===sceneKey;});
},

_makeSceneKey:function _makeSceneKey(child,idx){
return child.props.tabLabel+'_'+idx;
},

renderScrollableContent:function renderScrollableContent(){var _this3=this;

























{
var _scenes=this._composeScenes();
return React.createElement(AnimatedViewPagerAndroid,babelHelpers.extends({
key:this._children().length,
style:styles.scrollableContentAndroid,
initialPage:this.props.initialPage,
onPageSelected:this._updateSelectedPage,
keyboardDismissMode:"on-drag",
scrollEnabled:!this.props.locked,
onPageScroll:Animated.event(
[{
nativeEvent:{
position:this.state.positionAndroid,
offset:this.state.offsetAndroid}}],


{
useNativeDriver:true,
listener:this._onScroll}),


ref:function ref(scrollView){_this3.scrollView=scrollView;}},
this.props.contentProps),

_scenes);

}
},

_composeScenes:function _composeScenes(){var _this4=this;
return this._children().map(function(child,idx){
var key=_this4._makeSceneKey(child,idx);
return React.createElement(SceneComponent,{
key:child.key,
shouldUpdated:_this4._shouldRenderSceneKey(idx,_this4.state.currentPage),
style:{width:_this4.state.containerWidth}},

_this4._keyExists(_this4.state.sceneKeys,key)?child:React.createElement(View,{tabLabel:child.props.tabLabel}));

});
},

_onMomentumScrollBeginAndEnd:function _onMomentumScrollBeginAndEnd(e){
var offsetX=e.nativeEvent.contentOffset.x;
var page=Math.round(offsetX/this.state.containerWidth);
if(this.state.currentPage!==page){
this._updateSelectedPage(page);
}
},

_updateSelectedPage:function _updateSelectedPage(nextPage){
var localNextPage=nextPage;
if(typeof localNextPage==='object'){
localNextPage=nextPage.nativeEvent.position;
}

var currentPage=this.state.currentPage;
this.updateSceneKeys({
page:localNextPage,
callback:this._onChangeTab.bind(this,currentPage,localNextPage)});

},

_onChangeTab:function _onChangeTab(prevPage,currentPage){
this.props.onChangeTab({
i:currentPage,
ref:this._children()[currentPage],
from:prevPage});

},

_onScroll:function _onScroll(e){







{var _e$nativeEvent=
e.nativeEvent,position=_e$nativeEvent.position,offset=_e$nativeEvent.offset;
this.props.onScroll(position+offset);
}
},

_handleLayout:function _handleLayout(e){var _this5=this;var
width=e.nativeEvent.layout.width;

if(Math.round(width)!==Math.round(this.state.containerWidth)){







{
this.setState({containerWidth:width});
}
this.requestAnimationFrame(function(){
_this5.goToPage(_this5.state.currentPage);
});
}
},

_children:function _children(){var children=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props.children;
return React.Children.map(children,function(child){return child;});
},

render:function render(){
var overlayTabs=this.props.tabBarPosition==='overlayTop'||this.props.tabBarPosition==='overlayBottom';
var tabBarProps={
goToPage:this.goToPage,
tabs:this._children().map(function(child){return child.props.tabLabel;}),
activeTab:this.state.currentPage,
scrollValue:this.state.scrollValue,
containerWidth:this.state.containerWidth};


if(this.props.tabBarBackgroundColor){
tabBarProps.backgroundColor=this.props.tabBarBackgroundColor;
}
if(this.props.tabBarActiveTextColor){
tabBarProps.activeTextColor=this.props.tabBarActiveTextColor;
}
if(this.props.tabBarInactiveTextColor){
tabBarProps.inactiveTextColor=this.props.tabBarInactiveTextColor;
}
if(this.props.tabBarTextStyle){
tabBarProps.textStyle=this.props.tabBarTextStyle;
}
if(this.props.tabBarUnderlineStyle){
tabBarProps.underlineStyle=this.props.tabBarUnderlineStyle;
}
if(overlayTabs){
tabBarProps.style=babelHelpers.defineProperty({
position:'absolute',
left:0,
right:0},
this.props.tabBarPosition==='overlayTop'?'top':'bottom',0);

}

return React.createElement(View,{style:[styles.container,this.props.style],onLayout:this._handleLayout},
this.props.tabBarPosition==='top'&&this.renderTabBar(tabBarProps),
this.renderScrollableContent(),
(this.props.tabBarPosition==='bottom'||overlayTabs)&&this.renderTabBar(tabBarProps));

}});


module.exports=ScrollableTabView;

var styles=StyleSheet.create({
container:{
flex:1},

scrollableContentAndroid:{
flex:1}});