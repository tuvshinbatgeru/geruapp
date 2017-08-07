Object.defineProperty(exports,"__esModule",{value:true});exports.











getMyBookmark=getMyBookmark;exports.















projectTypeChanged=projectTypeChanged;exports.

















onProjectFormFieldChange=onProjectFormFieldChange;exports.






toggleSelectedSkills=toggleSelectedSkills;exports.





priceBundleChanged=priceBundleChanged;exports.





durationTypeChanged=durationTypeChanged;exports.





durationValueChanged=durationValueChanged;var _ProfileConstants=require("./ProfileConstants");var _env=require("../env");var _env2=babelHelpers.interopRequireDefault(_env);var _axios=require("axios");var _axios2=babelHelpers.interopRequireDefault(_axios);var BackendFactory=require('../BackendFactory').default;function getMyBookmark(){return function(dispatch){dispatch({type:_ProfileConstants.GET_MY_BOOKMARK});BackendFactory().getMyBookmark({user_id:"59857b51ad1e9b0c881d0c3e"}).then(function(res){dispatch({type:_ProfileConstants.GET_MY_BOOKMARK_FULFILLED,payload:res.data.bookmarks});}).catch(function(error){dispatch({type:GET_TAGS_FAILED,payload:error});});};}function projectTypeChanged(type){return function(dispatch){dispatch({type:_ProfileConstants.FETCHING});//FETCH
dispatch({type:_ProfileConstants.PROJECT_TYPE_CHANGED,payload:type});/*return axios.get(CONFIG.LARAVEL.local.URL + 'api/user/1/projects/myskills')
	        .then(response => {
	          	dispatch({ type: GET_PROJECTS_WITH_SKILLS_FULFILLED, response})
	        })
	        .catch((error) => {
	        	dispatch({ type: GET_PROJECTS_WITH_SKILLS_FAILED, error })
		    })*/};}function onProjectFormFieldChange(field,value){return{type:ON_PROJECT_FORM_FIELD_CHANGE,payload:{field:field,value:value}};}function toggleSelectedSkills(skill){return function(dispatch){dispatch({type:SELECTED_SKILL_TOGGLE,payload:skill});};}function priceBundleChanged(type){return function(dispatch){dispatch({type:PRICE_BUNDLE_CHANGED,payload:type});};}function durationTypeChanged(type){return function(dispatch){dispatch({type:DURATION_TYPE_CHANGED,payload:type});};}function durationValueChanged(type){return function(dispatch){dispatch({type:DURATION_VALUE_CHANGED,payload:type});};}