import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet, 
	View, 
	TouchableOpacity, 
	Text, 
	ScrollView, 
	TouchableHighlight,
	TextInput
} from 'react-native'
import variables from '../../styles/variables'
//import { SearchBar } from 'react-native-elements'

export default class TagsList extends Component {
	constructor(props) {
	  super(props)	
	}

	render() {
		var { tags, display } = this.props
		let template = null

		return (
			<View style={styles.container}>
				<View style={styles.searchContainer}>
					<TextInput />
					{/*<SearchBar containerStyle={{backgroundColor: '#fff', borderTopColor: '#fff', borderBottomColor: '#fff'}} 
							   inputStyle={{backgroundColor: '#efefef', fontFamily: variables.FONT_REGULAR}}
							   placeholder='хайх ...'
							   placeholderTextColor='#b5b5b5'
							   lightTheme/>*/}
				</View>

				<ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
					<View style={styles.tagsContainer}>
					{
						tags.get('selected').map((item, i) => (
							<TouchableOpacity style={[styles.tagContainer, styles.selected]} 
											  onPress={() => this.props.onTagDiselect(item)}
											  disabled={ tags.get('fetching') }>
								<Text style={[styles.tagText, styles.tagSelected]}>{ item.name.toUpperCase() }</Text>
							</TouchableOpacity>
						))
					}
					{
						tags.get('suggested').map((tag, i) => (
							<TouchableOpacity style={[styles.tagContainer, styles.disabled]} 
											  onPress={() => this.props.onTagSelected(tag)}
											  disabled={ tags.get('fetching') }>
								<Text style={[styles.tagText, styles.tagDisabled]}>{ tag.name.toUpperCase() }</Text>
							</TouchableOpacity>
						))
					}
					</View>
				</ScrollView>
			</View>
		)
	}
}

TagsList.propTypes = {
	tags: PropTypes.object,
	deleteable: PropTypes.bool,
}

TagsList.defaultProps = {
	deleteable: true,
}

var styles = StyleSheet.create({
	tagsContainer: {
		flex: 1,
		paddingLeft: 20,
		backgroundColor: '#fff' ,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	container: {
		flex: 1,
	},

	searchContainer: {
		paddingBottom: 5,
		paddingTop: 15,
		paddingHorizontal: 15,
	},

	tagContainer: {
		height: 30,
		borderRadius: 2,	
		margin: 5,
		paddingHorizontal: 35,
		paddingVertical: 5,
		/*flexDirection: 'row',*/
	},

	selected: {
		backgroundColor: variables.BRAND_SECONDARY,
	},

	disabled: {
		backgroundColor: '#efefef',
	},

	tagText: {
		color: '#fff',
		fontSize: 14,
		fontFamily: variables.FONT_REGULAR
	},

	tagSelected: {
		color: '#fff'
	},

	tagDisabled: {
		color: '#242424'
	}

})
