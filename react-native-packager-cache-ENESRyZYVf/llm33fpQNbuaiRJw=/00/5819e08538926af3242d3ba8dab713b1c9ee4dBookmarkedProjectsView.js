Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require("react-redux");
var _redux=require("redux");
var _reactNativeRouterFlux=require("react-native-router-flux");
var _ProfileActions=require("../../profile/ProfileActions");

var _BookmarkedProjectComponent=require("../components/BookmarkedProjectComponent");var _BookmarkedProjectComponent2=babelHelpers.interopRequireDefault(_BookmarkedProjectComponent);

function mapStateToProps(state){
return{
allBookmarks:state.profile.get('allBookmarks')};

}

function mapDispatchToProps(dispatch){
return{
getMyBookmark:(0,_redux.bindActionCreators)(_ProfileActions.getMyBookmark,dispatch)};

}var

BookmarkedProjectsView=function(_Component){babelHelpers.inherits(BookmarkedProjectsView,_Component);
function BookmarkedProjectsView(props){babelHelpers.classCallCheck(this,BookmarkedProjectsView);var _this=babelHelpers.possibleConstructorReturn(this,(BookmarkedProjectsView.__proto__||Object.getPrototypeOf(BookmarkedProjectsView)).call(this,
props));

_this.onBackPressed=_this.onBackPressed.bind(_this);return _this;
}babelHelpers.createClass(BookmarkedProjectsView,[{key:"onBackPressed",value:function onBackPressed()

{
_reactNativeRouterFlux.Actions.pop();
}},{key:"componentWillMount",value:function componentWillMount()

{
this.props.getMyBookmark();
}},{key:"render",value:function render()

{
return(
_react2.default.createElement(_BookmarkedProjectComponent2.default,{allBookmarks:this.props.allBookmarks,
onBackPressed:this.onBackPressed}));


}}]);return BookmarkedProjectsView;}(_react.Component);exports.default=


(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(BookmarkedProjectsView);