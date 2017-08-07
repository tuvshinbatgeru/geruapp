Object.defineProperty(exports,"__esModule",{value:true});exports.default=

































newProject;var _ProjectConstants=require("../ProjectConstants");var _NewProjectInitialState=require("../NewProjectInitialState");var _NewProjectInitialState2=babelHelpers.interopRequireDefault(_NewProjectInitialState);var _fieldValidation=require("../../components/fieldValidation");var _fieldValidation2=babelHelpers.interopRequireDefault(_fieldValidation);var _projectFormValidation=require("../projectFormValidation");var _projectFormValidation2=babelHelpers.interopRequireDefault(_projectFormValidation);var initialState=new _NewProjectInitialState2.default();function newProject(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];

switch(action.type){
case _ProjectConstants.FETCHING:{
var nextState=state.setIn(['fetching'],true);
return nextState;
}

case _ProjectConstants.NEW_PROJECT:{
var _nextState=state.setIn(['form','fields','title'],'').
setIn(['form','fields','description'],'').
setIn(['form','fields','awardDate'],new Date()).
setIn(['form','error'],null).
setIn(['form','isFetching'],false);
return(0,_projectFormValidation2.default)(_nextState,action);
}

case _ProjectConstants.SUGGESTED_IMAGE_CHOOSED:{
var selectedFiles=state.getIn(['files','selectedFiles','data']);
var count=state.getIn(['files','selectedFiles','count']);

selectedFiles.unshift(action.payload);
count++;

var _nextState2=state.setIn(['files','selectedFiles','data'],selectedFiles).
setIn(['files','selectedFiles','count'],count);
return _nextState2;
}

case _ProjectConstants.GET_SUGGESTED_SHOWCASES:{
var _nextState3=state.setIn(['files','imagesTabs',1,'fetching'],true);
return _nextState3;
}

case _ProjectConstants.GET_SUGGESTED_SHOWCASES_FULFILLED:{
//alert(action.payload.length)
var suggestedData=state.getIn(['files','imagesTabs',1,'data']);

suggestedData=suggestedData.concat(action.payload);

var _nextState4=state.setIn(['files','imagesTabs',1,'fetching'],false).
setIn(['files','imagesTabs',1,'data'],suggestedData);
//alert(nextState.getIn(['files', 'imagesTabs', 1, 'data']).length)
return _nextState4;
}

case _ProjectConstants.TAG_REMOVE:{
var tagsData=state.getIn(['tags','selected']);

tagsData.splice(0,tagsData.length);

var _nextState5=state.setIn(['tags','selected'],tagsData);
return _nextState5;
}

case _ProjectConstants.TAG_DISELECT:{
var _tagsData=state.getIn(['tags','selected']);
var _suggestedData=state.getIn(['tags','suggested']);

var index=_tagsData.indexOf(action.payload);

if(index>-1){
_tagsData.splice(index,1);
}

_suggestedData.splice(0,_suggestedData.length);

var _nextState6=state.setIn(['tags','selected'],_tagsData).
setIn(['tags','suggested'],_suggestedData);
return _nextState6;
}

case _ProjectConstants.TAG_SELECTED:{
var _tagsData2=state.getIn(['tags','selected']);
var _suggestedData2=state.getIn(['tags','suggested']);

_tagsData2.push(action.payload);

_suggestedData2.splice(0,_suggestedData2.length);

var _nextState7=state.setIn(['tags','selected'],_tagsData2).
setIn(['tags','suggested'],_suggestedData2);
return _nextState7;
}

case _ProjectConstants.GET_TAGS:{
return state.setIn(['tags','fetching'],true);
}

case _ProjectConstants.GET_TAGS_FULFILLED:{
return state.setIn(['tags','fetching'],false).
setIn(['tags','suggested'],action.payload);
}

case _ProjectConstants.GET_SKILL_CATEGORIES:{
return babelHelpers.extends({},state,{fetching:true});
}

case _ProjectConstants.GET_SKILL_CATEGORIES_FAILED:{
return babelHelpers.extends({},state,{fetching:false,error:action.response});
}

case _ProjectConstants.GET_SKILL_CATEGORIES_FULFILLED:{
return babelHelpers.extends({},
state,{
fetching:false,
fetched:true,
skill_categories:action.response});

}

case _ProjectConstants.SELECTED_SKILL_TOGGLE:{
var selectedSkills=state.get('selected_skills');

var index=selectedSkills.indexOf(action.payload);

if(index>-1){
selectedSkills.splice(index,1);
}else{
selectedSkills.push(action.payload);
}

var _nextState8=state.setIn(['selected_skills'],selectedSkills);
return(0,_projectFormValidation2.default)(_nextState8);
}

case _ProjectConstants.PRICE_BUNDLE_CHANGED:{

var _nextState9=state.setIn(['selectedPriceBundle'],action.payload);
return _nextState9;
}

case _ProjectConstants.DURATION_TYPE_CHANGED:{
var _nextState10=state.setIn(['selectedDurationType'],action.payload);
return _nextState10;
}

case _ProjectConstants.DURATION_VALUE_CHANGED:{
var _nextState11=state.setIn(['durationValue'],action.payload);
return _nextState11;
}

case _ProjectConstants.ON_PROJECT_FORM_FIELD_CHANGE:{var _action$payload=
action.payload,field=_action$payload.field,value=_action$payload.value;
var _nextState12=state.setIn(['form','fields',field],value).
setIn(['form','error'],null);

return(0,_projectFormValidation2.default)((0,_fieldValidation2.default)(_nextState12,action),action);
}

case _ProjectConstants.NEW_PROJECT_IMAGE_UPLOADED:{
var photos=state.get('photos');
var photo=action.payload;

photos.unshift({
'uri':'data:'+photo.type+';base64,'+photo.data,
'ext':photo.type,
'name':photo.fileName,
'height':photo.height,
'width':photo.width});


var _nextState13=state.set('photos',photos);
return(0,_projectFormValidation2.default)(_nextState13);
}

case _ProjectConstants.NEW_PROJECT_IMAGE_REMOVED:{
var _photos=state.get('photos');
var index=_photos.indexOf(action.payload);

if(index>-1)
_photos.splice(index,1);

var _nextState14=state.set('photos',_photos);
return(0,_projectFormValidation2.default)(_nextState14);
}

case _ProjectConstants.CHECK_PROJECT_VALIDATION:{
var _nextState15=state.setIn(['form','error'],null).
setIn(['form','isValid'],true);

return(0,_projectFormValidation2.default)(_nextState15);
}

case _ProjectConstants.SAVE_PROJECT_FAILED:{
return state.set('fetching',false).
set('error',action);
}

case _ProjectConstants.SAVE_PROJECT_FULFILLED:{
return state.set('fetching',false).
set('fetched',true).
set('error',null);
}}


return state;
}