import React, { Component } from 'react'
import {
	View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux' 

function mapStateToProps (state) {
	return {
		
	}
}

function mapDispatchToProps (dispatch) {
	return {
		
	}
}

class WorkingProjectDashboard extends Component {
  render () {
    return (
		<View />      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkingProjectDashboard)
