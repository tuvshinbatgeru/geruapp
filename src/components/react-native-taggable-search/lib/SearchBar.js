import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavigationBar from 'react-native-navbar'
import CustomIcon from './navbar/CustomIcon'
import TaggableSearch from './navbar/TaggableSearch'
import variables from '../../../styles/variables'

export default class SearchBar extends Component {

	toggleSearchScene () {
		this.props.onToggleSearchScene()
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					style={{ height: 50,}}
		            title={
		            	<TaggableSearch onSearchFired={this.toggleSearchScene.bind(this)}
		            					/>
		            }
		            leftButton={
		                <CustomIcon
		                  	icon="ios-arrow-back-outline"
			                size={30}
			                onPress={() => this.props.onBackPressed()} 
			                color={'#b5b5b5'}
		            	/>
		        	}
		        	rightButton={
		                <CustomIcon
		                  	icon="ios-funnel"
			                size={30}
			                onPress={this.props.onForwardPressed} 
			                color={'#b5b5b5'}
				        />
				    }
		        />
			</View>
		)
	}
}

SearchBar.propTypes = {
	onToggleSearchScene: PropTypes.func,
}

var styles = StyleSheet.create({
	container: {
		padding: 10,
		height: 70,
		backgroundColor: 'rgba(255,255,255, 0.7)'
	}
})