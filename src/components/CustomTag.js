import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import variables from '../styles/variables'

export default class CustomTag extends Component {
	render() {
		return (
			<TouchableOpacity onPress={() => this.props.onPress()}>
				<View style={styles.tagContainer}>
					<Text style={styles.tagName}>Монгол Дээл</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	tagContainer: {
		flexDirection: 'row',
		height: 30,
		padding: 5,
		marginLeft: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: variables.BRAND_COLOR,
	},

	tagName: {
		fontFamily: variables.FONT_REGULAR,
		color: variables.BRAND_COLOR,
	}
})

CustomTag.propTypes = {
	onPress: PropTypes.func,
}