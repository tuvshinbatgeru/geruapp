import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux' 
import * as projectActions from '../ProjectActions'

import ProjectTagsChooserComponent from '../components/ProjectTagsChooserComponent'

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

class ProjectTagsChooser extends Component {
  onNavigateNext() {
      Actions.NewProject()
  }

  onBackAction() {
      Actions.pop()
  }

  getTags() {
      let arrayList = ''
      if(this.props.project.getIn(['tags', 'selected']).length > 0) {
        arrayList = this.props.project.getIn(['tags', 'selected']).map((item) => {
          return String(item['_id'])
        })
      } 
      
      this.props.actions.getTags('', arrayList, this.props.project.getIn(['tags', 'selected']).length > 0 ? 'a' : 'n') 
  }

  componentWillMount() {
      this.getTags()
  } 

	render() {
		return (
			<ProjectTagsChooserComponent onNavigateNext={this.onNavigateNext.bind(this)} 
                                   tags={this.props.project.get('tags')}
                                   onBackAction={this.onBackAction.bind(this)}
                                   onTagToggled={this.getTags.bind(this)}/>	
		)
	}
}	

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTagsChooser)