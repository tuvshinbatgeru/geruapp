import React, {PropTypes,Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import * as projectActions from '../ProjectActions'
import NewProjectComponent from '../components/NewProjectComponent'


function mapStateToProps (state) {
  return {
      project: state.newProjectState
  }
}

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(projectActions, dispatch)
  }
}

class NewProject extends Component {
  
  constructor(props) {
      super(props)

      this.onFetchMyProjectsHistory = this.onFetchMyProjectsHistory.bind(this)
  }

  onFetchMyProjectsHistory(page, callback, options) {
      callback()
  }

  onBackAction() {
      Actions.pop()
  }

  render() {
      return <NewProjectComponent project={this.props.project}
                                  onBackAction={this.onBackAction.bind(this)}
                                  onFetchMyProjectsHistory={this.onFetchMyProjectsHistory}
              />
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NewProject)