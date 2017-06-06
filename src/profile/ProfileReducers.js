import { 
	FETCHING,
	PROJECT_TYPE_CHANGED
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
