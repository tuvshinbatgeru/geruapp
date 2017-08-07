Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");

var margin=5;var _Dimensions$get=
_reactNative.Dimensions.get('window'),height=_Dimensions$get.height,width=_Dimensions$get.width;
var itemWidth=(width-margin*2)/2;var

Masonry=function(_Component){babelHelpers.inherits(Masonry,_Component);

function Masonry(props){babelHelpers.classCallCheck(this,Masonry);var _this=babelHelpers.possibleConstructorReturn(this,(Masonry.__proto__||Object.getPrototypeOf(Masonry)).call(this,
props));

_this.state={
pageIndex:0,
pageSize:0,
columnsData:[],
nextInsertColumn:0,
loading:false};return _this;

}babelHelpers.createClass(Masonry,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(

nextProps,nextState){
if(this.props.loading!==nextProps.loading)return true;
if(this.props.items.length!==nextProps.items.length)return true;
return false;
}},{key:"componentDidMount",value:function componentDidMount()

{
this.state.loading=false;
}},{key:"componentWillMount",value:function componentWillMount()

{
this.state.loading=true;
this._initialColumnsData();
this.loadMore();
}},{key:"_initialColumnsData",value:function _initialColumnsData()

{
for(var row=0;row<this.props.columnCount;row++){
this.state.columnsData.push({
length:0,
items:[]});

}
}},{key:"_calcNextInsertColumn",value:function _calcNextInsertColumn()

{var _state=
this.state,columnsData=_state.columnsData,nextInsertColumn=_state.nextInsertColumn;var
columnCount=this.props.columnCount;

var minIndex=0;
var minLength=columnsData[0].length;

for(var i=1;i<columnCount;i++){
if(columnsData[i].length<minLength){
minLength=columnsData[i].length;
minIndex=i;
}
}

nextInsertColumn=minIndex;
this.state.nextInsertColumn=nextInsertColumn;

return nextInsertColumn;
}},{key:"_handeScroll",value:function _handeScroll(

event){

if(this.state.loading)return;

if(this.props.onScroll)
this.props.onScroll(event);

if(this._shouldLoadMore(event)){
this.loadMore();
}
}},{key:"_shouldLoadMore",value:function _shouldLoadMore(

event){
return!this.props.loading&&this._distanceFromEnd(event)<this.props.distanceToLoadMore;
}},{key:"_distanceToLoadMore",value:function _distanceToLoadMore()

{
var distance=this.state.columnsData[0].length;
for(var i=1;i<this.props.columnCount;i++){
if(this.state.columnsData[i].length>distance){
distance=this.state.columnsData[i].length;
}
}
return distance;
}},{key:"_distanceFromEnd",value:function _distanceFromEnd(

event){var _event$nativeEvent=





event.nativeEvent,contentSize=_event$nativeEvent.contentSize,contentInset=_event$nativeEvent.contentInset,contentOffset=_event$nativeEvent.contentOffset,layoutMeasurement=_event$nativeEvent.layoutMeasurement;

var contentLength=void 0;
var trailingInset=void 0;
var scrollOffset=void 0;
var viewportLength=void 0;
/*if (this.props.horizontal) {
	      contentLength = contentSize.width;
	      trailingInset = contentInset.right;
	      scrollOffset = contentOffset.x;
	      viewportLength = layoutMeasurement.width;
	    } else {*/
contentLength=contentSize.height;
trailingInset=contentInset.bottom;
scrollOffset=contentOffset.y;
viewportLength=layoutMeasurement.height;
//}

return contentLength+trailingInset-scrollOffset-viewportLength;
}},{key:"defaultLoadingView",value:function defaultLoadingView()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.loaderContainer},
_react2.default.createElement(_reactNative.Text,null,"Loading ...")));


}},{key:"loadMore",value:function loadMore()

{
this.state.pageIndex++;
this.props.onLoadMore(this.state.pageIndex);
}},{key:"calcMasonryColumns",value:function calcMasonryColumns()

{var
columnsData=this.state.columnsData;var
items=this.props.items;

for(var i=0;i<items.length;i++){
columnsData[this.state.nextInsertColumn].length=columnsData[this.state.nextInsertColumn].length+(items[i].cover.ratio*itemWidth+this.props.offset);
columnsData[this.state.nextInsertColumn].items.push(items[i]);
this._calcNextInsertColumn();
}
}},{key:"render",value:function render()

{var _this2=this;var _props=
this.props,columnCount=_props.columnCount,rowRender=_props.rowRender,offset=_props.offset,topOffset=_props.topOffset;var
columnsData=this.state.columnsData;
var columns=[];

this.calcMasonryColumns();

for(var i=0;i<columnCount;i++){
columns.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[styles.column,{marginTop:topOffset}]},

columnsData[i].items.map(function(item,i){return(
_react2.default.createElement(_reactNative.TouchableHighlight,{key:i,
underlayColor:"#efefef"
//style={{height: item.collage.ratio * itemWidth + offset}} 
,onPress:function onPress(){return _this2.props.onClick(item);}},
rowRender(item,itemWidth,offset)));})));





}

return(
_react2.default.createElement(_reactNative.ScrollView,{automaticallyAdjustContentInsets:false,
onScroll:this._handeScroll.bind(this),
style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.wrapper},
columns)));





}}]);return Masonry;}(_react.Component);exports.default=Masonry;



Masonry.propTypes={
rowRender:_react.PropTypes.func,
loading:_react.PropTypes.bool,
columnCount:_react.PropTypes.number,
distanceToLoadMore:_react.PropTypes.number,
offset:_react.PropTypes.number,
onLoadMore:_react.PropTypes.func,
items:_react.PropTypes.array,
onScroll:_react.PropTypes.func,
onClick:_react.PropTypes.func,
topOffset:_react.PropTypes.number};


Masonry.defaultProps={
loading:false,
columnCount:2,
distanceToLoadMore:10,
topOffset:70,
items:[],
onScroll:null,
onClick:null};


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
flexDirection:'column',
marginTop:10},


wrapper:{
flexDirection:'row',
flexWrap:'wrap',
marginRight:margin,
marginLeft:margin},


column:{
flex:2,
flexDirection:'column'},


loaderContainer:{
flex:1}});