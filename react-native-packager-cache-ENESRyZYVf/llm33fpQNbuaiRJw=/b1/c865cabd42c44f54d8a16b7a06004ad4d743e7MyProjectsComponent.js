Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require("react-native");










var _variables=require("../../styles/variables");var _variables2=babelHelpers.interopRequireDefault(_variables);
var _ProjectTabBar=require("../../components/ProjectTabBar");var _ProjectTabBar2=babelHelpers.interopRequireDefault(_ProjectTabBar);
var _reactNativeGiftedListview=require("react-native-gifted-listview");var _reactNativeGiftedListview2=babelHelpers.interopRequireDefault(_reactNativeGiftedListview);
var _reactNativeGiftedSpinner=require("react-native-gifted-spinner");var _reactNativeGiftedSpinner2=babelHelpers.interopRequireDefault(_reactNativeGiftedSpinner);
var _reactNativeScrollableTabView=require("react-native-scrollable-tab-view");var _reactNativeScrollableTabView2=babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);

var _MyProjectHistoryList=require("../../project/components/MyProjectHistoryList");var _MyProjectHistoryList2=babelHelpers.interopRequireDefault(_MyProjectHistoryList);
var _MyProjectWorkingOnList=require("../../project/components/MyProjectWorkingOnList");var _MyProjectWorkingOnList2=babelHelpers.interopRequireDefault(_MyProjectWorkingOnList);
var _MyProjectBiddedList=require("../../project/components/MyProjectBiddedList");var _MyProjectBiddedList2=babelHelpers.interopRequireDefault(_MyProjectBiddedList);var

MyProjectsComponent=function(_Component){babelHelpers.inherits(MyProjectsComponent,_Component);function MyProjectsComponent(){babelHelpers.classCallCheck(this,MyProjectsComponent);return babelHelpers.possibleConstructorReturn(this,(MyProjectsComponent.__proto__||Object.getPrototypeOf(MyProjectsComponent)).apply(this,arguments));}babelHelpers.createClass(MyProjectsComponent,[{key:"render",value:function render()
{var

onStickyState=
this.props.onStickyState;

return(
_react2.default.createElement(_reactNative.View,{style:[styles.container]},
_react2.default.createElement(_reactNative.View,{style:[_variables.layout.row,_variables.layout.centerCenter]},
_react2.default.createElement(_reactNative.Text,{style:[_variables.layout.h2]},"\u041C\u0438\u043D\u0438\u0439 \u0442\u04E9\u0441\u043B\u04AF\u04AF\u0434")),

_react2.default.createElement(_reactNativeScrollableTabView2.default,{renderTabBar:function renderTabBar(){return _react2.default.createElement(_ProjectTabBar2.default,{fixed:onStickyState,
style:{paddingBottom:5}});},

initialPage:2,
locked:true},

_react2.default.createElement(_reactNative.View,{tabLabel:"\u0418\u0434\u044D\u0432\u0445\u0442\u044D\u0439",style:styles.listViewContainer},
_react2.default.createElement(_MyProjectWorkingOnList2.default,{onFetchMyProjectsWorking:this.props.onFetchMyProjectsWorking})),

_react2.default.createElement(_reactNative.ScrollView,{tabLabel:"\u0414\u0443\u0443\u0441\u0441\u0430\u043D",style:styles.listViewContainer},
_react2.default.createElement(_MyProjectHistoryList2.default,{onFetchMyProjectsHistory:this.props.onFetchMyProjectsHistory})))));





}}]);return MyProjectsComponent;}(_react.Component);exports.default=MyProjectsComponent;


var styles=_reactNative.StyleSheet.create({
h4:{
fontSize:18,
fontFamily:'Lato-Bold'},


h5:{
fontSize:15,
color:'#b5b5b5'},


container:{
flex:1,
paddingHorizontal:10,
paddingBottom:5},


listViewContainer:{
marginTop:10,
//paddingHorizontal: 5,
flex:1}});



MyProjectsComponent.propTypes={
workingOnProjects:_react.PropTypes.array,
historyProjects:_react.PropTypes.array};