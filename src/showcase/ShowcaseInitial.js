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

	tags: [],

	suggestedTags: Record({
		fetching: false,
		tags: [],
	})(),

	searchByTag: Record({
		fetching: false,
		searchValue: '',
		searchResult: [], 
		//it should be result of tags /can be nested/
	})()
})

export default InitialState