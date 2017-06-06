import React, { PropTypes, Component } from 'react'
import { StyleSheet, View , Text, TouchableOpacity} from 'react-native'
import variables from '../../styles/variables'

export default class SuggestedTags extends Component {

	matchedFilter (string, keyLength) {
		return [string.substring(0, keyLength), string.substring(keyLength)]
	}

	render() {
		var { tags, searchTag } = this.props
		return (
			<View style={styles.tagContainer}>
				<TouchableOpacity>
					{
						tags.map((item, i) => (

							<Text style={[styles.tagText, styles.matchedString]}>
								{ this.matchedFilter(item.displayText, searchTag.length)[0] }
								<Text style={[styles.tagText, styles.autoCompleteString]}>{ this.matchedFilter(item.displayText, searchTag.length)[1] }</Text>			
							</Text>
						))
					}
				</TouchableOpacity>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	tagContainer: {
		flex: 1,
	},
	
	tagText: {
		fontSize: 18,
		fontFamily: variables.FONT_HEAVY,
	},

	matchedString: {
		color: '#242424',
	},
	
	autoCompleteString: {
		color: '#b5b5b5',
	}

})

SuggestedTags.propTypes = {
	searchTag: PropTypes.string,
	tags: PropTypes.array,
	fetching: PropTypes.bool,
}

SuggestedTags.defaultProps = {
	searchTag: '',
}