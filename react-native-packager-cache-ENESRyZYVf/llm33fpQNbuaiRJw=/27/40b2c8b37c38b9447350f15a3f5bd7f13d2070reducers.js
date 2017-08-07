Object.defineProperty(exports,"__esModule",{value:true});var _redux=require("redux");

var _navigationReducer=require("./navigation/reducers/navigationReducer");var _navigationReducer2=babelHelpers.interopRequireDefault(_navigationReducer);
var _ProjectReducers=require("./project/reducers/ProjectReducers");var _ProjectReducers2=babelHelpers.interopRequireDefault(_ProjectReducers);
var _NewProjectReducer=require("./project/reducers/NewProjectReducer");var _NewProjectReducer2=babelHelpers.interopRequireDefault(_NewProjectReducer);
var _authReducer=require("./auth/authReducer");var _authReducer2=babelHelpers.interopRequireDefault(_authReducer);
var _globalReducer=require("./global/globalReducer");var _globalReducer2=babelHelpers.interopRequireDefault(_globalReducer);
var _ProfileReducers=require("./profile/ProfileReducers");var _ProfileReducers2=babelHelpers.interopRequireDefault(_ProfileReducers);
var _ShowcaseReducer=require("./showcase/ShowcaseReducer");var _ShowcaseReducer2=babelHelpers.interopRequireDefault(_ShowcaseReducer);exports.default=

(0,_redux.combineReducers)({
navigationState:_navigationReducer2.default,projectState:_ProjectReducers2.default,newProjectState:_NewProjectReducer2.default,
auth:_authReducer2.default,global:_globalReducer2.default,profile:_ProfileReducers2.default,showcase:_ShowcaseReducer2.default});