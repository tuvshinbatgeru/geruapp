import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import variables from '../../styles/variables'


import RecentSearch from './RecentSearch'
import SuggestedTags from './SuggestedTags'


export default class ShowcaseSearchComponent extends Component {
	constructor(props) {
	  super(props)
	}

	clearSearch() {
		this.props.onSearchValueCleared()
	}

	handleSearchText(text) {
		this.props.onChangeSearchValue(text)
	}

	render() {
		let { searchByTag, recentlySearch } = this.props
		let searchText = searchByTag.get('searchValue')
		
		return (
			<View style={styles.container}>
				<View style={styles.searchContainer}>
					<TextInput autoFocus={true}
						placeholder="Browse on projects"
						autoCorrect={false}
						placeholderTextColor={'#b5b5b5'}
						selectionColor={'#efefef'}
						underlineColorAndroid={'#fff'}
						value={searchText}
				        style={styles.searchText}
				        onChangeText={this.handleSearchText.bind(this)}
				      />
					
					<TouchableOpacity onPress={() => this.clearSearch()}>
						<Icon name="md-close-circle" size={20} color="#b5b5b5"/>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.props.onBackAction()} style={{marginLeft: 3}}>
						<Text>Cancel</Text>
					</TouchableOpacity>
				</View>

				{
					searchText.trim().length == 0 ? 
					<RecentSearch recentlySearch={recentlySearch}/>
					:
					<SuggestedTags searchTag={searchText}
							   fetching={searchByTag.get('fetching')}
							   tags={searchByTag.get('searchResult')}/>
				}
			</View>
		)
	}
}

var styles = StyleSheet.create({
	h4: {
		fontSize: 18,
		fontFamily: 'Lato-Bold',
	},

	h5: {
		fontSize: 15,
		color: '#b5b5b5'
	},

	container: {
		flex: 1,
		padding: 10,
	},

	searchContainer: {
		height: 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	searchText: {
		flex: 1,
		backgroundColor: '#fff', 
		borderWidth: 0, 
		fontSize: 18,
		fontFamily: variables.FONT_HEAVY,
	}
})

ShowcaseSearchComponent.propTypes = {
	onBackAction: PropTypes.func,
	searchByTag: PropTypes.object
}