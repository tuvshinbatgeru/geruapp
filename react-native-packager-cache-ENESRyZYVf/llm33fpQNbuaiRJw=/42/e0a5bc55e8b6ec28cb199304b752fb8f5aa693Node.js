/**
 * # Parse.js
 *
 * This class interfaces with parse-server using the rest api
 * see [https://parseplatform.github.io/docs/rest/guide/]
 *
 */
'use strict';

/**
 * ## Imports
 *
 * Config for defaults and underscore for a couple of features
 */Object.defineProperty(exports,"__esModule",{value:true});exports.node=exports.Node=undefined;
var _env=require("./env");var _env2=babelHelpers.interopRequireDefault(_env);
var _underscore=require("underscore");var _underscore2=babelHelpers.interopRequireDefault(_underscore);
var _axios=require("axios");var _axios2=babelHelpers.interopRequireDefault(_axios);var

Node=exports.Node=function(){function Node(){babelHelpers.classCallCheck(this,Node);}babelHelpers.createClass(Node,[{key:"initialize",value:function initialize(

token){

if(!_underscore2.default.isNull(token)&&_underscore2.default.isUndefined(token.sessionToken)){
throw new Error('TokenMissing');
}

this._sessionToken=_underscore2.default.isNull(token)?null:token.sessionToken.sessionToken;
this.API_BASE_URL=_env2.default.backend.nodeLocal?
_env2.default.node.local.url:
_env2.default.node.remote.url;

//alert(this.API_BASE_URL)
}},{key:"login",value:function login(

data){

}},{key:"getMyBookmark",value:function getMyBookmark(

data){
return _axios2.default.get(this.API_BASE_URL+'user/'+data.user_id+'/bookmark');
}},{key:"getTagAutoComplete",value:function getTagAutoComplete(

params){
return _axios2.default.get(this.API_BASE_URL+'tag/autocomplete',{
params:params});

}

//tags
},{key:"getTags",value:function getTags(filter){

var data=new FormData();
data.append('searchValue',filter.searchValue);
data.append('tags',String(filter.tags));

return _axios2.default.post(this.API_BASE_URL+'api/tag/mobile',data);
}},{key:"saveProject",value:function saveProject(

data){
return _axios2.default.post(this.API_BASE_URL+'api/project',data.formData);
}}]);return Node;}();



var node=exports.node=new Node();