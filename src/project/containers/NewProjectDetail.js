import React, {PropTypes,Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import * as projectActions from '../ProjectActions'
import NewProjectDetailComponent from '../components/NewProjectDetailComponent'


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

class NewProjectDetail extends Component {
  
  constructor(props) {
    super(props)

    this.onBackAction = this.onBackAction.bind(this)
    this.onForwardAction = this.onForwardAction.bind(this)
  }

  onBackAction() {
    Actions.pop()
  }

  onForwardAction() {
    Actions.Tabbar()
  }

  render() {
    return <NewProjectDetailComponent project={this.props.project}
                                      onBackAction={this.onBackAction}
                                      onForwardAction={this.onForwardAction}
           />
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectDetail)