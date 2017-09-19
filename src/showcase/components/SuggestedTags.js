import React, { PropTypes, Component } from 'react'
import { StyleSheet, View , Text, TouchableOpacity} from 'react-native'
import variables from '../../styles/variables'

export default class SuggestedTags extends Component {

	matchTag(searchTag, tag) {
		let str = searchTag.split(" ")

		if(str.length > 0) {
			return tag.substring(str[str.length - 1].length)
		}

		return ' ' + tag.substring(searchTag.length)
	}

	render() {
		var { tags, searchTag } = this.props
		return (
			<View style={styles.tagContainer}>
				{
					tags.map((tag, i) => (
						<TouchableOpacity style={{ paddingVertical: 3, }} onPress={() => this.props.onTagPressed(searchTag, tag)}>
							<Text style={[styles.tagText, styles.matchedString]}>
								{searchTag}
								<Text style={[styles.tagText, styles.autoCompleteString]}>{this.matchTag(searchTag, tag)}</Text>			
							</Text>
						</TouchableOpacity>
					))
				}
			</View>
		)
	}
}

var styles = StyleSheet.create({
	tagContainer: {
		flex: 1,
		paddingHorizontal: 10,
	},
	
	tagText: {
		fontSize: 21,
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