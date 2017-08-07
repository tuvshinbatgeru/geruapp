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
 * @providesModule NavigationPointerEventsContainer
 * 
 */
'use strict';

var React=require('react');
var NavigationAnimatedValueSubscription=require('./NavigationAnimatedValueSubscription');

var invariant=require('fbjs/lib/invariant');







var MIN_POSITION_OFFSET=0.01;

/**
 * Create a higher-order component that automatically computes the
 * `pointerEvents` property for a component whenever navigation position
 * changes.
 */
function create(
Component)
{var

Container=function(_React$Component){babelHelpers.inherits(Container,_React$Component);









function Container(props,context){babelHelpers.classCallCheck(this,Container);var _this=babelHelpers.possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).call(this,
props,context));
_this._pointerEvents=_this._computePointerEvents();return _this;
}babelHelpers.createClass(Container,[{key:"componentWillMount",value:function componentWillMount()

{
this._onPositionChange=this._onPositionChange.bind(this);
this._onComponentRef=this._onComponentRef.bind(this);
}},{key:"componentDidMount",value:function componentDidMount()

{
this._bindPosition(this.props);
}},{key:"componentWillUnmount",value:function componentWillUnmount()

{
this._positionListener&&this._positionListener.remove();
}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(

nextProps){
this._bindPosition(nextProps);
}},{key:"render",value:function render()

{
this._pointerEvents=this._computePointerEvents();
return(
React.createElement(Component,babelHelpers.extends({},
this.props,{
pointerEvents:this._pointerEvents,
onComponentRef:this._onComponentRef})));


}},{key:"_onComponentRef",value:function _onComponentRef(

component){
this._component=component;
if(component){
invariant(
typeof component.setNativeProps==='function',
'component must implement method `setNativeProps`');

}
}},{key:"_bindPosition",value:function _bindPosition(

props){
this._positionListener&&this._positionListener.remove();
this._positionListener=new NavigationAnimatedValueSubscription(
props.position,
this._onPositionChange);

}},{key:"_onPositionChange",value:function _onPositionChange()

{
if(this._component){
var pointerEvents=this._computePointerEvents();
if(this._pointerEvents!==pointerEvents){
this._pointerEvents=pointerEvents;
this._component.setNativeProps({pointerEvents:pointerEvents});
}
}
}},{key:"_computePointerEvents",value:function _computePointerEvents()

{var _props=




this.props,navigationState=_props.navigationState,position=_props.position,scene=_props.scene;

if(scene.isStale||navigationState.index!==scene.index){
// The scene isn't focused.
return scene.index>navigationState.index?
'box-only':
'none';
}

var offset=position.__getAnimatedValue()-navigationState.index;
if(Math.abs(offset)>MIN_POSITION_OFFSET){
// The positon is still away from scene's index.
// Scene's children should not receive touches until the position
// is close enough to scene's index.
return'box-only';
}

return'auto';
}}]);return Container;}(React.Component);

return Container;
}

module.exports={
create:create};