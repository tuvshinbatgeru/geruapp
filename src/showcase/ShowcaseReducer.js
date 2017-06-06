import {
	FETCHING,
	GET_PORTFOLIO,
	GET_PORTFOLIO_FULFILLED,
	GET_PORTFOLIO_ERROR,
	SHOWCASE_SEARCHVALUE_CHANGED,
	SHOWCASE_SEARCHVALUE_CLEAR
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

			bData = bData.concat(data)

			var nextState = state.setIn(['portfolios', 'fetching'], false)
						.setIn(['portfolios', 'pageLast'], pageLast)
						.setIn(['portfolios', 'data'], bData)
						.setIn(['portfolios', 'paginate'], paginate)
						
			return nextState
		}

		case SHOWCASE_SEARCHVALUE_CHANGED: {

			var tags = state.get('tags') 

			return state.setIn(['searchByTag', 'searchValue'], action.payload)
		}

		case SHOWCASE_SEARCHVALUE_CLEAR: {
			return state.setIn(['searchByTag', 'searchValue'], '')
		}

		default: 
			return state
	}
}

