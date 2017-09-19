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
	GET_SHOWCASE_SUGGESTED_TAGS,
	GET_SHOWCASE_SUGGESTED_TAGS_FULFILLED,
} from './ShowcaseConstants'

import InitialState from './ShowcaseInitial'

const initialState = new InitialState()

export default function showcase(state = initialState, action) {
	switch (action.type) {
		case FETCHING: {
			return state.set('fetching', true)
		}

		case GET_PORTFOLIO: {
			return state.setIn(['portfolios', 'fetching'], true)
		}

		case GET_PORTFOLIO_FULFILLED: {
			var { pageLast, data, paginate } = action.payload

			var bData = state.getIn(['portfolios', 'data'])

			if(action.payload.pageIndex == 1) {
				bData = []
			}

			bData = bData.concat(action.payload.data)

			var nextState = state.setIn(['portfolios', 'fetching'], false)
						.setIn(['portfolios', 'pageLast'], pageLast)
						.setIn(['portfolios', 'data'], bData)
						.setIn(['portfolios', 'paginate'], paginate)
						
			return nextState
		}

		case SET_TAG_AUTOCOMPLETE: {
			let tags = state.get('tags')

			tags = tags.concat(action.payload)

			return state.set('tags', tags)
		}

		case GET_SHOWCASE_SUGGESTED_TAGS: {
			return state.setIn(['suggestedTags', 'fetching'], true)
		}

		case GET_SHOWCASE_SUGGESTED_TAGS_FULFILLED: {
			return state.setIn(['suggestedTags', 'fetching'], false)
						.setIn(['suggestedTags', 'tags'], action.payload)
		}

		case SHOWCASE_SEARCHVALUE_CHANGED: {

			var tags = state.get('tags') 

			return state.setIn(['searchByTag', 'searchValue'], action.payload)
		}

		case GET_TAG_AUTOCOMPLETE: {
			return state.setIn(['searchByTag', 'fetching'], true)
		}

		case GET_TAG_AUTOCOMPLETE_FULFILLED: {
			return state.setIn(['searchByTag', 'searchResult'], action.payload)
						.setIn(['searchByTag', 'fetching'], false)
		}

		case SHOWCASE_SEARCHVALUE_CLEAR: {
			return state.setIn(['searchByTag', 'searchValue'], '')
		}

		default: 
			return state
	}
}

