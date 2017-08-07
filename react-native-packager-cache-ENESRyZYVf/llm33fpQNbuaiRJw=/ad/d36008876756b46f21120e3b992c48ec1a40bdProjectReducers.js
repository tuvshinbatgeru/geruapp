Object.defineProperty(exports,"__esModule",{value:true});exports.default=















project;var _ProjectConstants=require("../ProjectConstants");var _ProjectInitial=require("../ProjectInitial");var _ProjectInitial2=babelHelpers.interopRequireDefault(_ProjectInitial);var initialState=new _ProjectInitial2.default();function project(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];

switch(action.type){
case _ProjectConstants.FETCHING:{
return babelHelpers.extends({},
state,{
fetching:true});

}

case _ProjectConstants.GET_PROJECTS_WITH_SKILLS:{
return state.setIn(['filteredProjects','fetching'],true);
}

case _ProjectConstants.GET_PROJECTS_WITH_SKILLS_FAILED:{
return babelHelpers.extends({},state,{fetching:false,error:action.response});
}

case _ProjectConstants.GET_PROJECTS_WITH_SKILLS_FULFILLED:{var _action$payload=

action.payload,pageLast=_action$payload.pageLast,data=_action$payload.data;
var fullData=state.getIn(['filteredProjects','fullData']);
fullData=fullData.concat(data);

var nextState=state.setIn(['filteredProjects','data'],data).
setIn(['filteredProjects','fullData'],fullData).
setIn(['filteredProjects','pageLast'],pageLast).
setIn(['filteredProjects','fetching'],false);
return nextState;
}

case _ProjectConstants.SET_SELECTED_PROJECT:{

var fullData=state.getIn(['filteredProjects','fullData']);
var project=action.payload;

var index=fullData.indexOf(project);

fullData[index]={
id:project.id,
fetching:false,
seen:true,
name:project.name,
description:project.description,
min_amount:project.min_amount,
max_amount:project.max_amount,

duration_type:'day',
duration_length:5,
bid_count:17,
time_left:'2017-03-16 23:41:34.000000',

avg_amount:'120000',
skills:[{
id:1,
name:'шилбэ хадах'},
{
id:2,
name:'исгэх'},
{
id:3,
name:'оёх'}]};



return state.setIn(['selectedProject','index'],index).
setIn(['selectedProject','project'],project).
setIn(['filteredProjects','fullData'],fullData);
}

case _ProjectConstants.SAVE_PROJECT_FULFILLED:{

}

case _ProjectConstants.SAVE_PROJECT_FAILED:{

}}


return state;
}