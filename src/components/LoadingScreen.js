import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

export default class LoadingScreen extends Component {
	render() {
		var { message, sender } = this.props
		return (
			<View style={styles.loadingContainer}>
				
				<Text style={styles.message}>{message}</Text>
				<Text style={styles.sender}>{sender}</Text>
				
				<View style={styles.loader}>
					<ActivityIndicator
			            size="large"
			            color="#66cc22"
			        />
				</View>
			</View>	
		)
	}
}

var styles = StyleSheet.create({
	loadingContainer: {
		backgroundColor: 'rgba(62,71,79, 0.6)',
		borderRadius: 5,
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	message: {
		fontFamily: 'Lato-Heavy',
		fontSize: 16,
		color: '#fff',
	},

	sender: {
		fontFamily: 'Lato-Bold',
		fontSize: 14,
		color: '#66cc22',
	},

	loader: {
		marginTop: 30,
	},

})

LoadingScreen.propTypes = {
	sender: PropTypes.string,
	message: PropTypes.string,
}