Object.defineProperty(exports,"__esModule",{value:true});exports.default=










profile;var _ProfileConstants=require("./ProfileConstants");var _ProfileInitial=require("./ProfileInitial");var _ProfileInitial2=babelHelpers.interopRequireDefault(_ProfileInitial);var initialState=new _ProfileInitial2.default();function profile(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];
switch(action.type){
case _ProfileConstants.FETCHING:
return babelHelpers.extends({},
state,{
fetching:true});


case _ProfileConstants.GET_MY_BOOKMARK:{
return state.setIn(['allBookmarks','fetching'],true);
}

case _ProfileConstants.GET_MY_BOOKMARK_FULFILLED:{
return state.setIn(['allBookmarks','fetching'],false).
setIn(['allBookmarks','bookmarks'],action.payload);
}

case _ProfileConstants.PROJECT_TYPE_CHANGED:{

state.selectedProjectType.index=action.payload;

return babelHelpers.extends({},
state,{
fetching:false});

}
default:
return state;}

}