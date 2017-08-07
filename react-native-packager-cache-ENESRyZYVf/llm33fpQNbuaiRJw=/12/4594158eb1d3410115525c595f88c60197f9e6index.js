Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");

var generateRadialPositions=function generateRadialPositions(count,radius,spread_angle,start_angle){
var span=spread_angle<360?1:0;
var start=start_angle*Math.PI/180;
var rad=spread_angle*Math.PI*2/360/(count-span);
return[].concat(babelHelpers.toConsumableArray(Array(count))).map(function(_,i){
return{
x:-Math.cos(start+rad*i)*radius,
y:-Math.sin(start+rad*i)*radius};

});
};var

RadialMenu=function(_Component){babelHelpers.inherits(RadialMenu,_Component);
function RadialMenu(props){babelHelpers.classCallCheck(this,RadialMenu);var _this=babelHelpers.possibleConstructorReturn(this,(RadialMenu.__proto__||Object.getPrototypeOf(RadialMenu)).call(this,
props));
_this.childrenToArray=_this.childrenToArray.bind(_this);
_this.itemPanListener=_this.itemPanListener.bind(_this);
_this.releaseItem=_this.releaseItem.bind(_this);
_this.createPanResponder=_this.createPanResponder.bind(_this);
_this.computeNewSelected=_this.computeNewSelected.bind(_this);

var children=_this.childrenToArray();
var initial_spots=generateRadialPositions(
children.length-1,
_this.props.menuRadius,
_this.props.spreadAngle,
_this.props.startAngle);

initial_spots.unshift({x:0,y:0});
_this.state={
item_spots:initial_spots,
item_anims:initial_spots.map(function(_,i){
return new _reactNative.Animated.ValueXY();
}),
selectedItem:null,
itemPanResponder:null,
children:children};


_this.RMOpening=false;return _this;
}babelHelpers.createClass(RadialMenu,[{key:"componentWillMount",value:function componentWillMount()

{
this.setState({itemPanResponder:this.createPanResponder()});
}

// React.Children.toArray is still not exposed on RN 0.20.0-rc1
},{key:"childrenToArray",value:function childrenToArray(){
var children=[];
_react2.default.Children.forEach(this.props.children,function(child){
children.push(child);
});
return children;
}},{key:"itemPanListener",value:function itemPanListener(

e,gestureState){
var newSelected=null;
if(!this.RMOpening){
newSelected=this.computeNewSelected(gestureState);
if(this.state.selectedItem!==newSelected){
if(this.state.selectedItem!==null){
var restSpot=this.state.item_spots[this.state.selectedItem];
_reactNative.Animated.spring(this.state.item_anims[this.state.selectedItem],{
toValue:restSpot}).
start();
}
if(newSelected!==null&&newSelected!==0){
_reactNative.Animated.spring(this.state.item_anims[newSelected],{
toValue:this.state.item_anims[0]}).
start();
}
this.state.selectedItem=newSelected;
}
}
}},{key:"releaseItem",value:function releaseItem()

{
this.props.onClose&&this.props.onClose();

this.state.selectedItem&&!this.RMOpening&&
this.state.children[this.state.selectedItem].props.onSelect&&
this.state.children[this.state.selectedItem].props.onSelect();

this.state.selectedItem=null;

this.state.item_anims.forEach(function(item,i){
_reactNative.Animated.spring(item,{
toValue:{x:0,y:0},
tension:60,
friction:10}).
start();
});
}},{key:"createPanResponder",value:function createPanResponder()

{var _this2=this;
return _reactNative.PanResponder.create({
onStartShouldSetPanResponder:function onStartShouldSetPanResponder(){return true;},
onPanResponderGrant:function onPanResponderGrant(){
_this2.props.onOpen&&_this2.props.onOpen();
_this2.RMOpening=true;
_reactNative.Animated.stagger(40,
_this2.state.item_spots.map(function(spot,idx){return(
_reactNative.Animated.spring(_this2.state.item_anims[idx],{
toValue:spot,
friction:6,
tension:80}));})).


start();
// Make sure all items gets to innitial position
// before we start tracking them
setTimeout(function(){_this2.RMOpening=false;},500);
},
onPanResponderMove:_reactNative.Animated.event(
[null,{dx:this.state.item_anims[0].x,dy:this.state.item_anims[0].y}],
{listener:this.itemPanListener}),

onPanResponderRelease:this.releaseItem,
onPanResponderTerminate:this.releaseItem});

}},{key:"computeNewSelected",value:function computeNewSelected(

gestureState){var
dx=gestureState.dx,dy=gestureState.dy;
var minDist=Infinity;
var newSelected=null;
var pointRadius=Math.sqrt(dx*dx+dy*dy);
if(Math.abs(this.props.menuRadius-pointRadius)<this.props.menuRadius/2){
this.state.item_spots.forEach(function(spot,idx){
var delta={x:spot.x-dx,y:spot.y-dy};
var dist=delta.x*delta.x+delta.y*delta.y;
if(dist<minDist){
minDist=dist;
newSelected=idx;
}
});
}
return newSelected;
}},{key:"render",value:function render()


{var _this3=this;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.menuContainer,
{
width:this.props.itemRadius*2,
height:this.props.itemRadius*2},

this.props.style]},

this.state.item_anims.map(function(_,i){
var j=_this3.state.item_anims.length-i-1;
var handlers=j>0?{}:_this3.state.itemPanResponder.panHandlers;
return(
_react2.default.createElement(_reactNative.Animated.View,babelHelpers.extends({},
handlers,{
key:i,
style:[{
transform:_this3.state.item_anims[j].getTranslateTransform()},
styles.menuItem]}),
_this3.state.children[j]));


})));


}}]);return RadialMenu;}(_react.Component);exports.default=RadialMenu;


var styles=_reactNative.StyleSheet.create({
menuContainer:{
position:'relative'
//backgroundColor: 'transparent',
},

menuItem:{
position:'absolute'}});



RadialMenu.defaultProps={
itemRadius:30,
menuRadius:100,
spreadAngle:360,
startAngle:0};