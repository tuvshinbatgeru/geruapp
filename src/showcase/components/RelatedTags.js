import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView} from 'react-native'
import variables from '../../styles/variables'

export default class RelatedTags extends Component {
	constructor(props) {
	  super(props)	
	}

	render() {

		var { related_tags, display } = this.props
		return (
			<View style={[display ? styles.showContainer : styles.hideContainer, styles.container]}>
				<ScrollView automaticallyAdjustContentInsets={false}
			                horizontal={true}
			                backfaceVisibility={false}
			                showsHorizontalScrollIndicator={false}>
					{
						related_tags.map((item, i) => (
							<TouchableOpacity style={[styles.tagContainer, { marginLeft: i == 0 ? 15 : 5 }]}>
								<Text style={styles.tagText}>
									{item.label}
								</Text>
							</TouchableOpacity>
						))
					}
				</ScrollView>	
			</View>
		)
	}
}

RelatedTags.propTypes = {
	related_tags: PropTypes.array,
	display: PropTypes.bool,
}

RelatedTags.defaultProps = {
	related_tags: [{
		label: 'ууц'
	}, {
		label: 'дээл'
	}, {
		label: 'ул боов'
	}, {
		label: 'бууз хийх'
	}, {
		label: 'гэр цэвэрлэх'
	}, {
		label: 'машин угаах'
	}],
	display: false,
}

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		position: 'absolute',
		paddingVertical: 15,
		zIndex: 10,
		height: 70,
		backgroundColor: variables.BRAND_SUBCOLOR
	},

	showContainer: {
		top: -70,
	},

	hideContainer: {
		top: 70,
	},

	tagContainer: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: variables.BRAND_SUBCOLOR1,
		backgroundColor: variables.BRAND_SUBCOLOR1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5,
	},

	tagText: {
		color: variables.BRAND_BLACK,
		fontSize: 18,
		padding: 10,
		fontFamily: variables.FONT_HEAVY
	}
})