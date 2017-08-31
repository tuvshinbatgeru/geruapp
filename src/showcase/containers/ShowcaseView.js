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
	constructor(props) {
	  super(props);
	
	  this.onSuggestedTagPressed = this.onSuggestedTagPressed.bind(this)
	  this.getPortfolios = this.getPortfolios.bind(this)
	  this.toggleSearchScene = this.toggleSearchScene.bind(this)
	}

	componentWillMount() {
	    this.props.actions.getShowcaseSuggestedTags('hat')
	}

	onSuggestedTagPressed(tag) {

	}

	getPortfolios(page) {
		let {
			showcase
		} = this.props

		this.props.actions.getPortfolios(showcase.get('tags'), page)
	}

	toggleSearchScene() {
		Actions.ShowcaseSearch()
	}

	render() {
		let {
			showcase
		} = this.props

		return (
			<ShowcaseListComponent portfolios={this.props.showcase.portfolios} 
								   tags={showcase.get('tags')}
								   suggestedTags={showcase.get('suggestedTags')}
								   onGetPortfolios={this.getPortfolios}
								   onToggleSearchScene={this.toggleSearchScene}
								   onSuggestedTagPressed={this.onSuggestedTagPressed}
			/>	
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseView)