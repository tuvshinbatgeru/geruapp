/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Facebook, Inc. ("Facebook") owns all right, title and interest, including
 * all intellectual property and other proprietary rights, in and to the React
 * Native CustomComponents software (the "Software").  Subject to your
 * compliance with these terms, you are hereby granted a non-exclusive,
 * worldwide, royalty-free copyright license to (1) use and copy the Software;
 * and (2) reproduce and distribute the Software as part of your own software
 * ("Your Software").  Facebook reserves all rights not expressly granted to
 * you in this license agreement.
 *
 * THE SOFTWARE AND DOCUMENTATION, IF ANY, ARE PROVIDED "AS IS" AND ANY EXPRESS
 * OR IMPLIED WARRANTIES (INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE) ARE DISCLAIMED.
 * IN NO EVENT SHALL FACEBOOK OR ITS AFFILIATES, OFFICERS, DIRECTORS OR
 * EMPLOYEES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @providesModule NavigationHeader
 * 
 */
'use strict';

var React=require('react');
var ReactNative=require('react-native');
var NavigationContainer=require('./NavigationContainer');
var NavigationHeaderTitle=require('./NavigationHeaderTitle');
var NavigationHeaderBackButton=require('./NavigationHeaderBackButton');
var NavigationPropTypes=require('./NavigationPropTypes');
var NavigationHeaderStyleInterpolator=require('./NavigationHeaderStyleInterpolator');var


Animated=




ReactNative.Animated,Platform=ReactNative.Platform,StyleSheet=ReactNative.StyleSheet,View=ReactNative.View,ViewPropTypes=ReactNative.ViewPropTypes;























var APPBAR_HEIGHT=56;
var STATUSBAR_HEIGHT=0;
var PropTypes=require('prop-types');var

NavigationHeader=function(_React$PureComponent){babelHelpers.inherits(NavigationHeader,_React$PureComponent);function NavigationHeader(){babelHelpers.classCallCheck(this,NavigationHeader);return babelHelpers.possibleConstructorReturn(this,(NavigationHeader.__proto__||Object.getPrototypeOf(NavigationHeader)).apply(this,arguments));}babelHelpers.createClass(NavigationHeader,[{key:"render",value:function render()




























{var _this2=this;var _props=
this.props,scenes=_props.scenes,style=_props.style,viewProps=_props.viewProps;

var scenesProps=scenes.map(function(scene){
var props=NavigationPropTypes.extractSceneRendererProps(_this2.props);
props.scene=scene;
return props;
});

return(
React.createElement(View,babelHelpers.extends({style:[styles.appbar,style]},viewProps),
scenesProps.map(this._renderLeft,this),
scenesProps.map(this._renderTitle,this),
scenesProps.map(this._renderRight,this)));


}},{key:"_renderLeft",value:function _renderLeft(

props){
return this._renderSubView(
props,
'left',
this.props.renderLeftComponent,
NavigationHeaderStyleInterpolator.forLeft);

}},{key:"_renderTitle",value:function _renderTitle(

props){
return this._renderSubView(
props,
'title',
this.props.renderTitleComponent,
NavigationHeaderStyleInterpolator.forCenter);

}},{key:"_renderRight",value:function _renderRight(

props){
return this._renderSubView(
props,
'right',
this.props.renderRightComponent,
NavigationHeaderStyleInterpolator.forRight);

}},{key:"_renderSubView",value:function _renderSubView(


props,
name,
renderer,
styleInterpolator)
{var

scene=

props.scene,navigationState=props.navigationState;var


index=


scene.index,isStale=scene.isStale,key=scene.key;

var offset=navigationState.index-index;

if(Math.abs(offset)>2){
// Scene is far away from the active scene. Hides it to avoid unnecessary
// rendering.
return null;
}

var subView=renderer(props);
if(subView===null){
return null;
}

var pointerEvents=offset!==0||isStale?'none':'box-none';
return(
React.createElement(Animated.View,{
pointerEvents:pointerEvents,
key:name+'_'+key,
style:[
styles[name],
styleInterpolator(props)]},

subView));


}}]);return NavigationHeader;}(React.PureComponent);NavigationHeader.defaultProps={renderTitleComponent:function renderTitleComponent(props){var navigationState=props.navigationState;var title=String(navigationState.title||'');return React.createElement(NavigationHeaderTitle,null,title);},renderLeftComponent:function renderLeftComponent(props){return props.scene.index>0?React.createElement(NavigationHeaderBackButton,null):null;},renderRightComponent:function renderRightComponent(props){return null;}};NavigationHeader.propTypes=babelHelpers.extends({},NavigationPropTypes.SceneRendererProps,{renderLeftComponent:PropTypes.func,renderRightComponent:PropTypes.func,renderTitleComponent:PropTypes.func,style:ViewPropTypes.style,viewProps:PropTypes.shape(ViewPropTypes)});


var styles=StyleSheet.create({
appbar:{
alignItems:'center',
backgroundColor:'#FFF',
borderBottomColor:'rgba(0, 0, 0, .15)',
borderBottomWidth:0,
elevation:2,
flexDirection:'row',
height:APPBAR_HEIGHT+STATUSBAR_HEIGHT,
justifyContent:'flex-start',
left:0,
marginBottom:16,// This is needed for elevation shadow
position:'absolute',
right:0,
top:0},


title:{
bottom:0,
left:APPBAR_HEIGHT,
marginTop:STATUSBAR_HEIGHT,
position:'absolute',
right:APPBAR_HEIGHT,
top:0},


left:{
bottom:0,
left:0,
marginTop:STATUSBAR_HEIGHT,
position:'absolute',
top:0},


right:{
bottom:0,
marginTop:STATUSBAR_HEIGHT,
position:'absolute',
right:0,
top:0}});



var NavigationHeaderContainer=NavigationContainer.create(NavigationHeader);

NavigationHeaderContainer.HEIGHT=APPBAR_HEIGHT+STATUSBAR_HEIGHT;
NavigationHeaderContainer.Title=NavigationHeaderTitle;
NavigationHeaderContainer.BackButton=NavigationHeaderBackButton;

module.exports=NavigationHeaderContainer;