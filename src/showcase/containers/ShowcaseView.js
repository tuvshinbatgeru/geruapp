import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux' 

import * as showcaseActions from '../ShowcaseActions'
import ShowcaseListComponent from '../components/ShowcaseListComponent'


function mapStateToProps (state) {
	return {
		showcase: state.showcase
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(showcaseActions, dispatch)
	}
}

class ShowcaseView extends Component {

	getPortfolios(pageIndex) {
		this.props.actions.getPortfolios(pageIndex)
	}

	toggleSearchScene() {
		Actions.ShowcaseSearch()
	}

	render() {
		return (
			<ShowcaseListComponent portfolios={this.props.showcase.portfolios} 
								   onGetPortfolios={this.getPortfolios.bind(this)}
								   onToggleSearchScene={this.toggleSearchScene.bind(this)}/>	
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseView)