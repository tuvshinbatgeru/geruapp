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
 * @providesModule NavigationCard
 * 
 */
'use strict';

var Animated=require('react-native').Animated;
var NavigationCardStackPanResponder=require('./NavigationCardStackPanResponder');
var NavigationCardStackStyleInterpolator=require('./NavigationCardStackStyleInterpolator');
var NavigationContainer=require('./NavigationContainer');
var NavigationPagerPanResponder=require('./NavigationPagerPanResponder');
var NavigationPagerStyleInterpolator=require('./NavigationPagerStyleInterpolator');
var NavigationPointerEventsContainer=require('./NavigationPointerEventsContainer');
var NavigationPropTypes=require('./NavigationPropTypes');
var React=require('react');
var StyleSheet=require('react-native').StyleSheet;
var View=require('react-native').View;




















var PropTypes=require('prop-types');var

SceneView=function(_React$Component){babelHelpers.inherits(SceneView,_React$Component);function SceneView(){babelHelpers.classCallCheck(this,SceneView);return babelHelpers.possibleConstructorReturn(this,(SceneView.__proto__||Object.getPrototypeOf(SceneView)).apply(this,arguments));}babelHelpers.createClass(SceneView,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(






nextProps,nextState){
return(
nextProps.sceneRendererProps.scene.navigationState!==
this.props.sceneRendererProps.scene.navigationState);

}},{key:"render",value:function render()

{
return this.props.sceneRenderer(this.props.sceneRendererProps);
}}]);return SceneView;}(React.Component);


/**
 * Component that renders the scene as card for the <NavigationCardStack />.
 */SceneView.propTypes={sceneRenderer:PropTypes.func.isRequired,sceneRendererProps:NavigationPropTypes.SceneRenderer};var
NavigationCard=function(_React$Component2){babelHelpers.inherits(NavigationCard,_React$Component2);function NavigationCard(){babelHelpers.classCallCheck(this,NavigationCard);return babelHelpers.possibleConstructorReturn(this,(NavigationCard.__proto__||Object.getPrototypeOf(NavigationCard)).apply(this,arguments));}babelHelpers.createClass(NavigationCard,[{key:"render",value:function render()











{var _props=






this.props,panHandlers=_props.panHandlers,pointerEvents=_props.pointerEvents,renderScene=_props.renderScene,style=_props.style,props=babelHelpers.objectWithoutProperties(_props,["panHandlers","pointerEvents","renderScene","style"]);

var viewStyle=style===undefined?
NavigationCardStackStyleInterpolator.forHorizontal(props):
style;

var viewPanHandlers=panHandlers===undefined?
NavigationCardStackPanResponder.forHorizontal(props):
panHandlers;

return(
React.createElement(Animated.View,babelHelpers.extends({},
viewPanHandlers,{
pointerEvents:pointerEvents,
ref:this.props.onComponentRef,
style:[styles.main,viewStyle]}),
React.createElement(SceneView,{
sceneRenderer:renderScene,
sceneRendererProps:props})));



}}]);return NavigationCard;}(React.Component);NavigationCard.propTypes=babelHelpers.extends({},NavigationPropTypes.SceneRendererProps,{onComponentRef:PropTypes.func.isRequired,panHandlers:NavigationPropTypes.panHandlers,pointerEvents:PropTypes.string.isRequired,renderScene:PropTypes.func.isRequired,style:PropTypes.any});


var styles=StyleSheet.create({
main:{
backgroundColor:'white',
bottom:0,
left:0,
position:'absolute',
right:0,
top:0}});



NavigationCard=NavigationPointerEventsContainer.create(NavigationCard);
NavigationCard=NavigationContainer.create(NavigationCard);

// Export these buil-in interaction modules.
NavigationCard.CardStackPanResponder=NavigationCardStackPanResponder;
NavigationCard.CardStackStyleInterpolator=NavigationCardStackStyleInterpolator;
NavigationCard.PagerPanResponder=NavigationPagerPanResponder;
NavigationCard.PagerStyleInterpolator=NavigationPagerStyleInterpolator;

module.exports=NavigationCard;