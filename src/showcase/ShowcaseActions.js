import {
	FETCHING,
	GET_PORTFOLIO,
	GET_PORTFOLIO_FULFILLED,
	GET_PORTFOLIO_ERROR,
	SHOWCASE_SEARCHVALUE_CHANGED,
	SHOWCASE_SEARCHVALUE_CLEAR
} from './ShowcaseConstants'

import CONFIG from "../env"

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

export function onShowCaseSearchValueChanged(text) {
	return {
		type: SHOWCASE_SEARCHVALUE_CHANGED,
		payload: text,
	}
}

export function getPortfolios(pageIndex) {
	return dispatch => {
		dispatch({ type: GET_PORTFOLIO })

		var temp = [{
		  		id: 1,
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
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
		  		caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
		  		collage: {
		  			url: 'http://www.ur-undrakh.com/files/images/201604/m-209.jpg',
		  			ratio: 1.5
		  		},
		  		price: 150000,
		  		tags: [{
		  			name: 'дээл',
		  		}, {
		  			name: 'гоёмсог'
		  		}]
		  	}]

		  	dispatch({
		  		type: GET_PORTFOLIO_FULFILLED,
		  		payload: {
		  			data: temp,
		  			pageLast: 3,
		  			paginate: 10,
		  		},
		  	})

	}
}