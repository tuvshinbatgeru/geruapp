import { 
	FETCHING,
	PROJECT_TYPE_CHANGED,
	GET_MY_BOOKMARK,
	GET_MY_BOOKMARK_FULFILLED,
} from './ProfileConstants'

import InitialState from './ProfileInitial'

const initialState = new InitialState()

export default function profile(state = initialState, action) {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				fetching: true,
		}

		case GET_MY_BOOKMARK: {
			return state.setIn(['allBookmarks', 'fetching'], true)
		}

		case GET_MY_BOOKMARK_FULFILLED: {
			return state.setIn(['allBookmarks', 'fetching'], false)
					    .setIn(['allBookmarks', 'bookmarks'], action.payload)
		}

		case PROJECT_TYPE_CHANGED: {

			state.selectedProjectType.index = action.payload

			return {
				...state,
				fetching: false,
			}
		}
		default:
			return state
	}
}
