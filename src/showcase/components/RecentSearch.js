import React, { PropTypes, Component } from 'react'
import { StyleSheet, View , Text, TouchableOpacity} from 'react-native'
import variables from '../../styles/variables'

export default class RecentSearch extends Component {
	render() {
		var { recentlySearch } = this.props
		return (
			<View style={styles.searchContainer}>
				<View style={styles.headerContainer}>
					<Text style={styles.header}>Сүүлд хайсан</Text>
				</View>
				<View style={styles.resultContainer}>
					{
						recentlySearch.map((item, i) => (
							<TouchableOpacity>			
								<Text style={styles.tagText}>
									{ item.search_string }
								</Text>
							</TouchableOpacity>
						))
					}
				</View>
			</View>
		)
	}
}

RecentSearch.propTypes = {
	recentlySearch: PropTypes.array
}

var styles = StyleSheet.create({
	searchContainer: {
		flex: 1,
	},

	headerContainer: {
		paddingBottom: 10,
		flexDirection: 'row'
	},

	resultContainer: {
		flex: 1,
	},

	header: {
		fontSize: 14,
		fontFamily: variables.FONT_REGULAR,
	},

	tagText: {
		fontSize: 18,
		fontFamily: variables.FONT_HEAVY,
	},
})