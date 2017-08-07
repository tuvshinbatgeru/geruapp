'use strict'

import { Map, Record, List } from 'immutable'

var InitialState = Record({
	fetching: false,
	error: null,
	portfolios: Record({
		fetching: false,
		pageLast: 0,
		paginate: 10,
		data: []
	})(),

	recentlySearch: List([
		{
			search_string: 'цагаан сараар ууц чанах',
			searched_on: '',
		}, {
			search_string: 'ууц чанах',
			searched_on: '',
		}, {
			search_string: 'ул боов тарган мах',
			searched_on: '',
		}		
	]),

	tags: List([{
		displayText: 'цагаан сар',
		label: 'цагаан сар'
	}, {
		displayText: 'цагаан сар дээл',
		label: 'дээл'
	}, {
		displayText: 'цагаан сар ул боов',
		label: 'ул боов'
	}]),

	searchByTag: Record({
		fetching: false,
		searchValue: '',
		searchResult: List([{
			displayText: 'teneg',
			label: 'teneg'
		}, {
			displayText: 'teneg',
			label: 'teneg'
		}, {
			displayText: 'teneg',
			label: 'teneg'
		}]), 
		//it should be result of tags /can be nested/
	})()
})

export default InitialState