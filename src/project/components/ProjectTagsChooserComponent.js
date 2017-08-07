import React, { Component, PropTypes } from 'react'
import * as projectActions from '../ProjectActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { StyleSheet, View, Text } from 'react-native'
import NavigationBar from 'react-native-navbar' 
import CustomIcon from '../../components/react-native-taggable-search/lib/navbar/CustomIcon'
import TagsList from '../../showcase/components/TagsList'
import variables from '../../styles/variables'
import NavBarIconText from '../../components/NavBarIconText'

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(projectActions, dispatch)
  }
}


class ProjectTagsChooserComponent extends Component{
	onTagSelected(tag) {
		this.props.actions.tagSelected(tag)		
		this.props.onTagToggled()
	}

	onTagDiselect(tag) {
		if(tag.type == 'N') {
			this.props.actions.tagRemove()
		} else {
			this.props.actions.tagDiselect(tag)
		}

		this.props.onTagToggled()
	}

	/*shouldComponentUpdate(nextProps, nextState) {
	    if (nextProps.tags.get('fetching') === false) {
	      	return true
	    }

	    return false
	}*/

	render() {
		let { tags } = this.props
		return (
			<View style={styles.container}>
				<NavigationBar
		            leftButton={
		                <NavBarIconText icon="ios-arrow-back-outline"
		                				size={30}
		                				color="#b5b5b5"
		                				text="cancel"
		                				position="back"
		                				onPress={this.props.onBackAction}
		                				/>
		        	}
		        	rightButton={
		                <NavBarIconText icon="ios-arrow-forward-outline"
		                				size={30}
		                				color="#b5b5b5"
		                				text="next"
		                				onPress={this.props.onNavigateNext}
		                				/>
		        	}
		        />

		        <View style={styles.questionContainer}>
			      	<Text style={styles.question}>Would you like us to make something for you?</Text>
			    </View>

		    	<TagsList tags={tags}
			 			  onTagSelected={this.onTagSelected.bind(this)}
			 			  onTagDiselect={this.onTagDiselect.bind(this)}/>
				
			</View>
		)
	}
}

ProjectTagsChooserComponent.propTypes = {
	tags: PropTypes.object,
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},

	question: {
		fontSize: 24,
		fontFamily: variables.FONT_HEAVY,
		justifyContent: 'center',
		alignItems: 'center',
	},

	questionContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 25,
		paddingHorizontal: 15,
	},
})

export default connect(null, mapDispatchToProps)(ProjectTagsChooserComponent)