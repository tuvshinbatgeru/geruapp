Object.defineProperty(exports,"__esModule",{value:true});var _react=require("react");var _react2=babelHelpers.interopRequireDefault(_react);
var _reactRedux=require("react-redux");
var _reactNative=require("react-native");
var _Ionicons=require("react-native-vector-icons/Ionicons");var _Ionicons2=babelHelpers.interopRequireDefault(_Ionicons);
var _reactNativeModalbox=require("react-native-modalbox");var _reactNativeModalbox2=babelHelpers.interopRequireDefault(_reactNativeModalbox);
var _reactNativeNavbar=require("react-native-navbar");var _reactNativeNavbar2=babelHelpers.interopRequireDefault(_reactNativeNavbar);
var _reactNativeRouterFlux=require("react-native-router-flux");


var _NavBarIcon=require("../../components/NavBarIcon");var _NavBarIcon2=babelHelpers.interopRequireDefault(_NavBarIcon);
var _reactNativeRadioButtons=require("react-native-radio-buttons");var

DashboardView=function(_Component){babelHelpers.inherits(DashboardView,_Component);

function DashboardView(props){babelHelpers.classCallCheck(this,DashboardView);return babelHelpers.possibleConstructorReturn(this,(DashboardView.__proto__||Object.getPrototypeOf(DashboardView)).call(this,
props));
}babelHelpers.createClass(DashboardView,[{key:"componentWillMount",value:function componentWillMount()

{

}},{key:"newProjectBeforeOpen",value:function newProjectBeforeOpen()

{
_reactNativeRouterFlux.Actions.NewProject();
//this.refs.modal.open()
}},{key:"setBudgetTypeChanged",value:function setBudgetTypeChanged(

selectedOption,selectedIndex){

}},{key:"render",value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container}));


}}]);return DashboardView;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
padding:5},


modal:{
flex:1,
backgroundColor:'red'}});exports.default=




(0,_reactRedux.connect)(
function(state){return{
newProject:state.newProjectState};},


function(dispatch){return{
backAction:function backAction(){
dispatch(navigatePop());
}};})(

DashboardView);