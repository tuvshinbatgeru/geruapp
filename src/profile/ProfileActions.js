import { 
	FETCHING,
	PROJECT_TYPE_CHANGED
} from './ProfileConstants'

import CONFIG from "../env"
import axios from "axios"

export function projectTypeChanged (type) {
	return dispatch => {
	    dispatch({ type: FETCHING })

	    //FETCH

	    dispatch({ type: PROJECT_TYPE_CHANGED, payload: type})

	    /*return axios.get(CONFIG.LARAVEL.local.URL + 'api/user/1/projects/myskills')
	        .then(response => {
	          	dispatch({ type: GET_PROJECTS_WITH_SKILLS_FULFILLED, response})
	        })
	        .catch((error) => {
	        	dispatch({ type: GET_PROJECTS_WITH_SKILLS_FAILED, error })
		    })*/
	}
}

export function onProjectFormFieldChange (field, value) {
  return {
    type: ON_PROJECT_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
}

export function toggleSelectedSkills (skill) {
	return dispatch => {
		dispatch({ type: SELECTED_SKILL_TOGGLE, payload: skill })		
	}
}

export function priceBundleChanged (type) {
	return dispatch => {	
		dispatch({ type: PRICE_BUNDLE_CHANGED, payload: type })
	}
}

export function durationTypeChanged(type) {
	return dispatch => {	
		dispatch({ type: DURATION_TYPE_CHANGED, payload: type })
	}
}

export function durationValueChanged(type) {
	return dispatch => {	
		dispatch({ type: DURATION_VALUE_CHANGED, payload: type })
	}
}