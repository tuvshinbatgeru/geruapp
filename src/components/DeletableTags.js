import React, { PropTypes, Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import variables, { layout, font } from '../styles/variables'

export default class DeletableTags extends Component {
	render() {
		let { 
			tags 
		} = this.props

		return (
			<View style={[styles.container, layout.row]}>
				{
					tags.map((item, i) => (
						<View style={[i % 2 == 0 ? styles.tagEnabled : styles.tagDisabled, layout.row, layout.center]}>
							
							<Text style={[styles.tagText, { color: i % 2 == 0 ? variables.BRAND_WHITE : variables.BRAND_BLACK }]}>{ item.name.toUpperCase() } </Text>
							<Text style={[{fontFamily: font.heavy}]}>
								({item.available_projects})
							</Text>
							
							{
								/*<TouchableOpacity style={styles.deleteContainer}>
									<Icon name="ios-close-outline" size={30} color={variables.BRAND_COLOR}/>
								</TouchableOpacity>*/
							}	
						</View>
					))
				}
			</View>	
		)
	}
}

var styles = StyleSheet.create({
	container: {
		//backgroundColor: 'red',
		//paddingHorizontal: 15,
		height: 65,
		//paddingVertical: 5,
		//height: 70,
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		alignsItem: 'center',
	},

	tagEnabled: {
		//borderWidth: 1,
		borderRadius: 2,
		backgroundColor: variables.BRAND_GREEN,
		paddingHorizontal: 10,
		marginLeft: 3,
		marginBottom: 3,
		height: 30,
		//paddingHorizontal: 10,
	},

	tagDisabled: {
		borderRadius: 2,
		backgroundColor: variables.BRAND_SUBCOLOR,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginLeft: 3,
		marginBottom: 3,
		height: 30,
	},

	tagText: {
		fontFamily: font.regular,
		color: variables.BRAND_WHITE,
	},

	deleteContainer: {
		//backgroundColor: 'green',
		paddingHorizontal: 7,
	}
})

DeletableTags.propTypes = {
	tags: PropTypes.array,
}

DeletableTags.defaultProps = {
	tags: [{
		name: 'Шүүгээ',
		available_projects: 1
	}, {
		name: 'Уран зураг',
		available_projects: 7,
	}, {
		name: 'Гитар',
		available_projects: 5
	}, {
		name: 'Дээл',
		available_projects: 34
	}, {
		name: 'Цамц',
		available_projects: 16,
	}]
}
