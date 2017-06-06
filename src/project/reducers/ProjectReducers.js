import { 
	FETCHING,
	GET_PROJECTS_WITH_SKILLS,
	GET_PROJECTS_WITH_SKILLS_FAILED,
	GET_PROJECTS_WITH_SKILLS_FULFILLED,

	SAVE_PROJECT_FULFILLED,
	SAVE_PROJECT_FAILED,

	SET_SELECTED_PROJECT,
} from '../ProjectConstants'

import InitialState from '../ProjectInitial'

const initialState = new InitialState()

export default function project(state = initialState, action) {

	switch (action.type) {
		case FETCHING : {
			return {
				...state, 
				fetching : true,
			}
		}

		case GET_PROJECTS_WITH_SKILLS : {
			return state.setIn(['filteredProjects', 'fetching'], true)
		}

		case GET_PROJECTS_WITH_SKILLS_FAILED : {
			return {...state, fetching: false, error: action.response}
		}

		case GET_PROJECTS_WITH_SKILLS_FULFILLED : {

			var { pageLast, data } = action.payload
			var fullData = state.getIn(['filteredProjects', 'fullData'])
			fullData = fullData.concat(data)

			let nextState = state.setIn(['filteredProjects', 'data'], data)
								 .setIn(['filteredProjects', 'fullData'], fullData)
								 .setIn(['filteredProjects', 'pageLast'], pageLast)
								 .setIn(['filteredProjects', 'fetching'], false)
			return nextState
		}

		case SET_SELECTED_PROJECT: {

			var fullData = state.getIn(['filteredProjects', 'fullData'])
			var project = action.payload

			let index = fullData.indexOf(project)

			fullData[index] = {
				id: project.id,
				fetching: false,
				seen: true,
				name: project.name,
				description: project.description,
			    min_amount: project.min_amount,
			    max_amount: project.max_amount,
			    
			    duration_type: 'day',
			    duration_length: 5,
			    bid_count: 17,
			    time_left: '2017-03-16 23:41:34.000000',

			    avg_amount: '120000',
			    skills: [{
			    	id: 1,
			    	name: 'шилбэ хадах',
			    }, {
			    	id: 2,
			    	name: 'исгэх',
			    }, {
			    	id: 3,
			    	name: 'оёх',
			    }],
			}

			return state.setIn(['selectedProject', 'index'], index)
				        .setIn(['selectedProject', 'project'], project)
				        .setIn(['filteredProjects', 'fullData'], fullData)
		}

		case SAVE_PROJECT_FULFILLED: {

		}

		case SAVE_PROJECT_FAILED: {
			
		}
	}

	return state
}