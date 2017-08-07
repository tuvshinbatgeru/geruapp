/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule NavigationHeaderBackButton
 * 
*/
'use strict';

var React=require('react');
var ReactNative=require('react-native');
var NavigationContainer=require('./NavigationContainer');
var NavigationRootContainer=require('./NavigationRootContainer');var


Image=



ReactNative.Image,Platform=ReactNative.Platform,StyleSheet=ReactNative.StyleSheet,TouchableOpacity=ReactNative.TouchableOpacity;





var NavigationHeaderBackButton=function NavigationHeaderBackButton(props){return(
React.createElement(TouchableOpacity,{style:styles.buttonContainer,onPress:function onPress(){return props.onNavigate(NavigationRootContainer.getBackAction());}},
React.createElement(Image,{style:styles.button,source:require('./assets/back.png')})));};



NavigationHeaderBackButton.propTypes={
onNavigate:React.PropTypes.func.isRequired};


var styles=StyleSheet.create({
buttonContainer:{
flex:1,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

button:{
height:24,
width:24,
margin:16,
resizeMode:'contain'}});



module.exports=NavigationContainer.create(NavigationHeaderBackButton);