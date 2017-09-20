import {
	FETCHING,
	GET_PORTFOLIO,
	GET_PORTFOLIO_FULFILLED,
	GET_PORTFOLIO_ERROR,
	SHOWCASE_SEARCHVALUE_CHANGED,
	SHOWCASE_SEARCHVALUE_CLEAR,
	GET_TAG_AUTOCOMPLETE,
	GET_TAG_AUTOCOMPLETE_FULFILLED,
	SET_TAG_AUTOCOMPLETE,
	//SET_TAG_AUTOCOMPLETE_FULFILLED,
	GET_SHOWCASE_SUGGESTED_TAGS,
	GET_SHOWCASE_SUGGESTED_TAGS_FULFILLED,
} from './ShowcaseConstants'

import _ from 'lodash'

const BackendFactory = require('../BackendFactory').default

export function fetching(type) {
	return {
		type: FETCHING,
		payload: type,
	}
}

export function onShowCaseSearchValueCleared() {
	return {
		type: SHOWCASE_SEARCHVALUE_CLEAR
	}
}

export function getShowcaseSuggestedTags(tag) {
	return dispatch => {

		dispatch({ 
			type: GET_SHOWCASE_SUGGESTED_TAGS, 
		})

		//alert(tag)

		BackendFactory().getShowcaseSuggestedTags({
			tag
		}).then(res => {
			//alert(JSON.stringify(res.data.tags))
			dispatch({
				type: GET_SHOWCASE_SUGGESTED_TAGS_FULFILLED,
				payload: res.data.tags
			})
		}).catch(err => {
			//console.log(err)
		})	
	}
}

export function setTagAutocomplete(searchText) {
	return dispatch => {
		var str = searchText.split(" ")
		var tags = []
		
		_.forEach(str, (tag) => {
			tags.push({
				name: tag,
			})
		})	

		//alert(JSON.stringify(tags))

		dispatch({
			type: SET_TAG_AUTOCOMPLETE,
			payload: tags,
		})
	}
}

export function onShowCaseSearchValueChanged(text) {
	return dispatch => {
		dispatch({ type: SHOWCASE_SEARCHVALUE_CHANGED, payload: text })

		var inputs = text.split(" ")

		if(inputs.length > 0) {
			BackendFactory().getTagAutoComplete({
				tag: inputs.length > 1 ? inputs[inputs.length - 2] : '',
				freetext: inputs[inputs.length - 1],
			}).then(res => {
				dispatch({
					type: GET_TAG_AUTOCOMPLETE_FULFILLED,
					payload: res.data.tags
				})
			}).catch(err => {
				//console.log(err)
			})	
		}

		

		/*BackendFactory().getTagAutocomplete({
			tag: "hat",
			freetext: "m",
		})
		.then(res => {
			dispatch({ 
				type: GET_TAG_AUTOCOMPLETE_FULFILLED, 
				payload: res.data.tags,
			})
		})
		.catch(error => {
			dispatch({
				type: GET_TAG_AUTOCOMPLETE_FULFILLED,
				payload: error
			})

		})*/
	}
}

export function getPortfolios(tags, page) {
	return dispatch => {
		dispatch({ type: GET_PORTFOLIO })

		//alert(JSON.stringify(tags))
		BackendFactory().getShowcaseByTags({
			page,
			tags
		}).then(res => {
			//alert(res.data.showcases.length)
			dispatch({
		  		type: GET_PORTFOLIO_FULFILLED,
		  		payload: {
		  			data: res.data.showcases,
		  			pageIndex: page,
		  			pageLast: res.data.page_last,
		  			paginate: 8,
		  		},
		  	})
		}).catch(err => {
			console.log(err)
		})	

		/*var temp = [{
		  		id: 1,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
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
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/c-41-copy.jpg',
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
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
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
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-224-copy.jpg',
		  			ratio: 3.4
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 5,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-226-copy.jpg',
		  			ratio: 2.9
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 6,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-227-copy.jpg',
		  			ratio: 1.1
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 7,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-235-copy.jpg',
		  			ratio: 2.7
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 8,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-236-copy.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 9,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-237-copy.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 10,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://ur-undrakh.com/files/images/20170106/EM/m-230-copy.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 11,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-244-copy.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 12,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/20170106/EM/m-247-copy.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 13,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/201604/m-207.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}, {
		  		id: 14,
		  		title: 'How to Create a Bangin Social',
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		cover: {
		  			url: 'http://www.ur-undrakh.com/files/images/201604/m-209.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}]*/

	}
}