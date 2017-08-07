import { 
	FETCHING,
	NEW_PROJECT,
	GET_PROJECTS_WITH_SKILLS,
	GET_PROJECTS_WITH_SKILLS_FAILED,
	GET_PROJECTS_WITH_SKILLS_FULFILLED,
	PRICE_BUNDLE_CHANGED,
	ON_PROJECT_FORM_FIELD_CHANGE,
	DURATION_TYPE_CHANGED,
	DURATION_VALUE_CHANGED,
	SELECTED_SKILL_TOGGLE,
	CHECK_PROJECT_VALIDATION,
	SAVE_PROJECT_FAILED,
	SAVE_PROJECT_FULFILLED,
	NEW_PROJECT_IMAGE_UPLOADED,
	NEW_PROJECT_IMAGE_REMOVED,
	SET_SELECTED_PROJECT,

	GET_TAGS,
	GET_TAGS_FULFILLED,
	GET_TAGS_FAILED,
	TAG_SELECTED,
	TAG_DISELECT,
	TAG_REMOVE,
	GET_SUGGESTED_SHOWCASES,
	GET_SUGGESTED_SHOWCASES_FULFILLED,
	SUGGESTED_IMAGE_CHOOSED,
} from './ProjectConstants'

import moment from 'moment'

const BackendFactory = require('../BackendFactory').default

/*
	PROJECT HIGHLIGHT LIST START
*/

export function newProject() {
	return dispatch => {
		dispatch({type: NEW_PROJECT})
	}
}

export function tagRemove() {
	return dispatch => {
		dispatch({ type: TAG_REMOVE })
	}
}

export function tagDiselect(tag) {
	return dispatch => {
		dispatch({ type: TAG_DISELECT, payload: tag})
	}	
}

export function tagSelected(tag) {
	return dispatch => {
		dispatch({ type: TAG_SELECTED, payload: tag})
	}	
}

export function getTags(searchValue = '', tags = '', type = 'a') {
	return dispatch => {
		dispatch({ type: GET_TAGS })

		BackendFactory().getTags({
			searchValue: searchValue,
			tags: tags, 	
			type,
		})
		.then(res => {
			dispatch({ type: GET_TAGS_FULFILLED, payload: res.data.tags })
		})
		.catch(error => {
			dispatch({ type: GET_TAGS_FAILED, payload: error })
		})
	}
}

export function suggestedImageChoosed(item) {
	return {
		type: SUGGESTED_IMAGE_CHOOSED,
		payload: item
	}
}

//2. Wzard images chooser section

export function getSuggestedShowcases(tags = [], pageIndex = 1) {
	return dispatch => {
		dispatch({ type: GET_SUGGESTED_SHOWCASES })

		let data = [{
          id: 1,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
            ratio: 1.62
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 2,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/c-41-copy.jpg',
            ratio: 1.9
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 3,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
            ratio: 1.1
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 4,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
            ratio: 1.1
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 5,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
            ratio: 1.62
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 6,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/c-41-copy.jpg',
            ratio: 1.9
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 7,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
            ratio: 1.1
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }, {
          id: 8,
          caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
          collage: {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
            ratio: 1.1
          },
          price: 150000,
          tags: [{
            name: 'дээл',
          }, {
            name: 'гоёмсог'
          }]
        }]

        dispatch({ type: GET_SUGGESTED_SHOWCASES_FULFILLED, payload: data})
	}
}

export function setSelectedProject(project) {
	return {
		type: SET_SELECTED_PROJECT,
		payload: project,
	}
}

/*
	PROJECT HIGHLIGHT LIST END
*/


export function saveProject(form, selectedPriceBundle, selectedDurationType, durationValue, tags) {
	return dispatch => {
		dispatch({ type: FETCHING })

		const data = new FormData()
		data.append('title', form.fields.title)
		data.append('description', form.fields.description)
		data.append('plan_id', selectedPriceBundle.id)
		data.append('duration_type', selectedDurationType.id)
		data.append('duration_length', durationValue)
		data.append('award_date', moment(form.fields.awardDate).format('YYYY-MM-DD'))
		data.append('award_time', moment(form.fields.awardTime).format('HH:mm:ss'))
		data.append('tags', tags)

		BackendFactory().saveProject({
			formData: data, 	
		})
		.then(response => {
        	dispatch({ type: SAVE_PROJECT_FULFILLED, response})
        })
        .catch((error) => {
        	dispatch({ type: SAVE_PROJECT_FAILED, error})
        })
	}
}

export function newProjectImageRemoved(data) {
	return {
		type: NEW_PROJECT_IMAGE_REMOVED,
		payload: data,
	}
}

export function newProjectImageUploaded(data) {
	return {
		type: NEW_PROJECT_IMAGE_UPLOADED,
		payload: data,
	}
}

export function checkProjectValidation() {
	return {
		type: CHECK_PROJECT_VALIDATION
	}
}

export function getProjectsWithSkills (page) {
	return dispatch => {
	    dispatch({ 
	    	type: GET_PROJECTS_WITH_SKILLS 
	    })

	    var temp = [{
	    		id: 1,
			    name: 'Дээр үеийн хамбан дээл оёуулья',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '100000',
			    max_amount: '200000',
			    bid_count: 17,
			    time_left: '3 цаг дутуу',
			    seen: false,
			    fetching: true,
			  }, {
			  	id: 2,
			    name: 'I need you to develop some software for me. I would like this software to be developed for Windows using Java.',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '5 000 000',
			    max_amount: '11 000 000',
			    bid_count: 2,
			    time_left: '2 өдөр дутуу',
			    seen: true,
			    fetching: true,
			  }, {
			  	id: 3,
			    name: 'Торгон хантааз',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '50000',
			    max_amount: '110000',
			    bid_count: 2,
			    time_left: '2 өдөр дутуу',
			    seen: false,
			    fetching: true,
			  }, {
			  	id: 4,
			    name: 'Торгон хантааз',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '50000',
			    max_amount: '110000',
			    bid_count: 2,
			    time_left: '2 өдөр дутуу',
			    seen: false,
			    fetching: true,
			  }, {
			  	id: 5,
			    name: 'Торгон хантааз',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '50000',
			    max_amount: '110000',
			    bid_count: 2,
			    time_left: '2 өдөр дутуу',
			    seen: true,
			    fetching: true,
			  }, {
			  	id: 6,
			    name: 'Торгон хантааз',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '50000',
			    max_amount: '110000',
			    bid_count: 2,
			    time_left: '2 өдөр дутуу',
			    seen: false,
			    fetching: true,
			  }, {
			  	id: 7,
			    name: 'Торгон хантааз',
			    description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
			    min_amount: '50000',
			    max_amount: '110000',
			    bid_count: 2,
			    time_left: '2 өдөр дутуу',
			    seen: true,
			    fetching: true,
			  }]

	    dispatch({
	  		type: GET_PROJECTS_WITH_SKILLS_FULFILLED,
	  		payload: {
	  			data: temp,
	  			pageLast: 3,
	  		},
	  	})
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