import { combineReducers } from "redux"

import navigationState from "./navigation/reducers/navigationReducer"
import projectState from "./project/reducers/ProjectReducers"
import newProjectState from "./project/reducers/NewProjectReducer"
import auth from "./auth/authReducer"
import global from "./global/globalReducer"
import profile from "./profile/ProfileReducers"
import showcase from "./showcase/ShowcaseReducer"

export default combineReducers({
	navigationState, projectState, newProjectState, 
	auth, global, profile, showcase,
})