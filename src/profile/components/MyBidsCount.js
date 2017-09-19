import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import variables from '../../styles/variables'

export default class MyBidsCount extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity>
					<Text style={[styles.h4, styles.bidCount]}>
						{this.props.bids_count} 
						<Text style={[styles.h4, styles.subText]}>эрх байна</Text>
					</Text>
				</TouchableOpacity>
			</View>	
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	h4: {
		fontSize: 14,
	},

	bidCount: {
		fontFamily: variables.FONT_BOLD,
	},

	subText: {
		fontFamily: variables.FONT_REGULAR,
	}
})

MyBidsCount.propTypes = {
	bids_count: PropTypes.number
}

MyBidsCount.defaultProps = {
	bids_count: 4,
}