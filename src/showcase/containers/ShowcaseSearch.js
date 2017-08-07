import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux' 

import * as showcaseActions from '../ShowcaseActions'
import ShowcaseSearchComponent from '../components/ShowcaseSearchComponent'

function mapStateToProps (state) {
	return {
		searchByTag: state.showcase.searchByTag,
		recentlySearch: state.showcase.recentlySearch
	}
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(showcaseActions, dispatch)
	}
}

class ShowcaseSearch extends Component {
	backAction () {
		Actions.pop()
	}

	onChangeSearchValue(text) {
		this.props.actions.onShowCaseSearchValueChanged(text)
	}

	onSearchValueCleared() {
		this.props.actions.onShowCaseSearchValueCleared()
	}
	
	render() {
		return (
			<ShowcaseSearchComponent searchByTag={this.props.searchByTag}
									 recentlySearch={this.props.recentlySearch}
									 onBackAction={() => this.backAction()}
									 onSearchValueCleared={this.onSearchValueCleared.bind(this)}
									 onChangeSearchValue={this.onChangeSearchValue.bind(this)}/>
		)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseSearch)