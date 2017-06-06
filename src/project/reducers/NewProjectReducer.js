import { 
	FETCHING,
	GET_SKILL_CATEGORIES,
	GET_SKILL_CATEGORIES_FAILED,
	GET_SKILL_CATEGORIES_FULFILLED,
	PRICE_BUNDLE_CHANGED,
	ON_PROJECT_FORM_FIELD_CHANGE,
	DURATION_TYPE_CHANGED,
	DURATION_VALUE_CHANGED,
	SELECTED_SKILL_TOGGLE,
	CHECK_PROJECT_VALIDATION,
	NEW_PROJECT_IMAGE_UPLOADED,
	NEW_PROJECT_IMAGE_REMOVED,
	NEW_PROJECT,
	SAVE_PROJECT_FULFILLED,
	SAVE_PROJECT_FAILED,

	GET_TAGS,
	GET_TAGS_FULFILLED,
	GET_TAGS_FAILED,
	TAG_SELECTED,
	TAG_DISELECT,
	TAG_REMOVE,
	GET_SUGGESTED_SHOWCASES,
	GET_SUGGESTED_SHOWCASES_FULFILLED,
	SUGGESTED_IMAGE_CHOOSED,
} from '../ProjectConstants'	

import InitialState from '../NewProjectInitialState'
import fieldValidation from '../../components/fieldValidation'
import formValidation from '../projectFormValidation'

const initialState = new InitialState()

export default function newProject(state = initialState, action) {

	switch (action.type) {
		case FETCHING : {
			let nextState = state.setIn(['fetching'], true)
      		return nextState	
		}

		case NEW_PROJECT: {
			let nextState = state.setIn(['form', 'fields', 'title'], '')
						     .setIn(['form', 'fields', 'description'], '')
						     .setIn(['form', 'fields', 'awardDate'], new Date())
						     .setIn(['form', 'error'], null)
						     .setIn(['form', 'isFetching'], false)
      		return formValidation(nextState, action)
		}

		case SUGGESTED_IMAGE_CHOOSED: {
			let selectedFiles = state.getIn(['files', 'selectedFiles', 'data'])
			let count = state.getIn(['files', 'selectedFiles', 'count'])

			selectedFiles.unshift(action.payload)
			count ++
			
			let nextState = state.setIn(['files', 'selectedFiles', 'data'], selectedFiles)
			                     .setIn(['files', 'selectedFiles', 'count'], count)
			return nextState
		}

		case GET_SUGGESTED_SHOWCASES: {
			let nextState = state.setIn(['files', 'imagesTabs', 1, 'fetching'], true)
			return nextState			
		}

		case GET_SUGGESTED_SHOWCASES_FULFILLED: {
			//alert(action.payload.length)
			let suggestedData = state.getIn(['files', 'imagesTabs', 1, 'data'])

			suggestedData = suggestedData.concat(action.payload)

			let nextState = state.setIn(['files', 'imagesTabs', 1, 'fetching'], false)
								 .setIn(['files', 'imagesTabs', 1, 'data'], suggestedData)
			//alert(nextState.getIn(['files', 'imagesTabs', 1, 'data']).length)
			return nextState
		}

		case TAG_REMOVE: {
			let tagsData = state.getIn(['tags', 'selected'])

			tagsData.splice(0, tagsData.length)

			let nextState = state.setIn(['tags', 'selected'], tagsData)
			return nextState
		}

		case TAG_DISELECT: {
			let tagsData = state.getIn(['tags', 'selected'])
			let suggestedData = state.getIn(['tags', 'suggested'])

			var index = tagsData.indexOf(action.payload);

			if(index > -1) {
				tagsData.splice(index, 1)
			}

			suggestedData.splice(0, suggestedData.length)

			let nextState = state.setIn(['tags', 'selected'], tagsData)
								 .setIn(['tags', 'suggested'], suggestedData)
			return nextState
		}

		case TAG_SELECTED: {
			let tagsData = state.getIn(['tags', 'selected'])
			let suggestedData = state.getIn(['tags', 'suggested'])

			tagsData.push(action.payload)

			suggestedData.splice(0, suggestedData.length)			

			let nextState = state.setIn(['tags', 'selected'], tagsData)
								 .setIn(['tags', 'suggested'], suggestedData)
			return nextState
		}

		case GET_TAGS: {
			return state.setIn(['tags', 'fetching'], true)
		}

		case GET_TAGS_FULFILLED: {
			return state.setIn(['tags', 'fetching'], false)
						.setIn(['tags', 'suggested'], action.payload)
		}

		case GET_SKILL_CATEGORIES : {
			return {...state, fetching: true}
		}

		case GET_SKILL_CATEGORIES_FAILED : {
			return {...state, fetching: false, error: action.response}
		}

		case GET_SKILL_CATEGORIES_FULFILLED : {
			return {
				...state,
				fetching: false,
				fetched: true,
				skill_categories: action.response,
			}
		}

		case SELECTED_SKILL_TOGGLE: {
			let selectedSkills = state.get('selected_skills')
			
			var index = selectedSkills.indexOf(action.payload)

			if(index > -1) {
				selectedSkills.splice(index, 1)
			} else {
				selectedSkills.push(action.payload)
			}

			let nextState = state.setIn(['selected_skills'], selectedSkills)
			return formValidation(nextState)
		}	

		case PRICE_BUNDLE_CHANGED: {

			let nextState = state.setIn(['selectedPriceBundle'], action.payload)
      		return nextState
		}

		case DURATION_TYPE_CHANGED: {
			let nextState = state.setIn(['selectedDurationType'], action.payload)
      		return nextState	
		}

		case DURATION_VALUE_CHANGED: {
			let nextState = state.setIn(['durationValue'], action.payload)
      		return nextState	
		}

		case ON_PROJECT_FORM_FIELD_CHANGE: {
			const {field, value} = action.payload
		    let nextState = state.setIn(['form', 'fields', field], value)
		          .setIn(['form', 'error'], null)

		    return formValidation(fieldValidation(nextState, action), action)
		}

		case NEW_PROJECT_IMAGE_UPLOADED: {
			let photos = state.get('photos')
			let photo = action.payload

			photos.unshift({
				'uri': 'data:' + photo.type + ';base64,' + photo.data,
				'ext': photo.type,
				'name': photo.fileName,
				'height': photo.height,
				'width': photo.width,
			})

			let nextState = state.set('photos', photos)
			return formValidation(nextState)
		}

		case NEW_PROJECT_IMAGE_REMOVED: {
			let photos = state.get('photos')
			var index = photos.indexOf(action.payload)

			if(index > -1)
				photos.splice(index, 1)

			let nextState = state.set('photos', photos)
			return formValidation(nextState)
		}

		case CHECK_PROJECT_VALIDATION: {
			let nextState = state.setIn(['form', 'error'], null)
								 .setIn(['form', 'isValid'], true)

			return formValidation(nextState)
		}

		case SAVE_PROJECT_FAILED: {
			return state.set('fetching', false)
						.set('error', action)
		}

		case SAVE_PROJECT_FULFILLED: {
			return state.set('fetching', false)
						.set('fetched', true)
						.set('error', null)
		}
	}

	return state
}

