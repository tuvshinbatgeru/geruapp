Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetching = fetching;
exports.onShowCaseSearchValueCleared = onShowCaseSearchValueCleared;
exports.onShowCaseSearchValueChanged = onShowCaseSearchValueChanged;
exports.getPortfolios = getPortfolios;

var _ShowcaseConstants = require('./ShowcaseConstants');

var BackendFactory = require('../BackendFactory').default;

function fetching(type) {
	return {
		type: _ShowcaseConstants.FETCHING,
		payload: type
	};
}

function onShowCaseSearchValueCleared() {
	return {
		type: _ShowcaseConstants.SHOWCASE_SEARCHVALUE_CLEAR
	};
}

function onShowCaseSearchValueChanged(text) {
	return function (dispatch) {
		dispatch({ type: _ShowcaseConstants.SHOWCASE_SEARCHVALUE_CHANGED, payload: text });

		BackendFactory().getTagAutocomplete({
			tag: 'hat',
			freetext: 'd'
		}).then(function (res) {
			dispatch({
				type: _ShowcaseConstants.GET_TAG_AUTOCOMPLETE_FULFILLED,
				payload: res.data.tags
			});
		}).catch(function (error) {});
	};
}

function getPortfolios(pageIndex) {
	return function (dispatch) {
		dispatch({ type: _ShowcaseConstants.GET_PORTFOLIO });

		var temp = [{
			id: 1,
			title: 'How to Create a Bangin Social',
			caption: 'Дээл нь Монголчуудын олон зуун жилийн турш өмсөж ирсэн ...',
			cover: {
				url: 'http://www.ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
				ratio: 1.62
			},
			price: 150000,
			tags: [{
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
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
				name: 'дээл'
			}, {
				name: 'гоёмсог'
			}]
		}];

		dispatch({
			type: _ShowcaseConstants.GET_PORTFOLIO_FULFILLED,
			payload: {
				data: temp,
				pageLast: 3,
				paginate: 10
			}
		});
	};
}