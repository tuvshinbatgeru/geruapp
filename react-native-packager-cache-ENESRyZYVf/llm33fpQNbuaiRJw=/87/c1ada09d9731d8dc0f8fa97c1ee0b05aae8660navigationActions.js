Object.defineProperty(exports,"__esModule",{value:true});exports.



tabChanged=tabChanged;exports.








navigatePush=navigatePush;exports.







navigatePop=navigatePop;exports.





navigateJumpToKey=navigateJumpToKey;exports.






navigateJumpToIndex=navigateJumpToIndex;exports.






navigateReset=navigateReset;var _NavigationActionTypes=require("../constants/NavigationActionTypes");function tabChanged(tabKey){return{type:_NavigationActionTypes.TAB_CHANGED,tabKey:tabKey};}// *** Action Creators ***
// The following action creators were derived from NavigationStackReducer
function navigatePush(state){state=typeof state==='string'?{key:state,title:state}:state;return{type:_NavigationActionTypes.NAV_PUSH,state:state};}function navigatePop(){return{type:_NavigationActionTypes.NAV_POP};}function navigateJumpToKey(key){return{type:_NavigationActionTypes.NAV_JUMP_TO_KEY,key:key};}function navigateJumpToIndex(index){return{type:_NavigationActionTypes.NAV_JUMP_TO_INDEX,index:index};}function navigateReset(routes,index){return{type:_NavigationActionTypes.NAV_RESET,
index:index,
routes:routes};

}