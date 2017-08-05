import React, { Component } from "react"
import store from "./store"
import Platform from 'Platform'

import { 
  Router, 
  Scene, 
  Modal 
} from 'react-native-router-flux'

import { Provider } from 'react-redux'

import TabbarView from './containers/TabbarView'
import ScreenView from './navigation/views/ScreenView'
import LoginView from './auth/containers/LoginView'
import NewProject from './project/containers/NewProject'
import NewProjectDetail from './project/containers/NewProjectDetail'
import ProjectTagsChooser from './project/containers/ProjectTagsChooser'
import WorkingProjectDashboard from './project/containers/WorkingProjectDashboard'
import BookmarkedProjectsView from './project/containers/BookmarkedProjectsView'
import ShowcaseView from './showcase/containers/ShowcaseView'
import ShowcaseSearch from './showcase/containers/ShowcaseSearch'

export default class geru extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router sceneStyle={{ backgroundColor: 'white' }}>
            <Scene key='root' hideNavBar>
              <Scene key='App'
                     component={ScreenView}
                     type='replace'
              />

              <Scene key='InitialLoginForm'
                     component={LoginView}
              />

              <Scene key='TabbarView'
                     component={TabbarView}
                     
              />

              <Scene key='BookmarkedProjectsView'
                     component={BookmarkedProjectsView}
                     initial
              />

              <Scene key='ProjectTagsChooser'
                     component={ProjectTagsChooser}
              />
              <Scene key='NewProject'
                     component={NewProject}
              />
              <Scene key='NewProjectDetail'
                     component={NewProjectDetail}
              />

              <Scene key='ShowcaseView'
                     component={ShowcaseView}
              />

              <Scene key='ShowcaseSearch'
                     direction='vertical'
                     component={ShowcaseSearch}
              />

              <Scene key='WorkingProjectDashboard'
                     component={WorkingProjectDashboard}
              />
            </Scene>
          </Router>
        </Provider>
    )
  }
}