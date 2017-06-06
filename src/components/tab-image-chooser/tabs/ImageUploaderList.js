import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const box = 100

export default class ImageUploaderList extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.itemContainer]}>
					
				</View>
				<View style={[styles.itemContainer]}>
					
				</View>
				<View style={[styles.itemContainer]}>
					
				</View>
				<View style={[styles.itemContainer]}>
					
				</View>
			</View>				
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: 'wrap',
		padding: 5,
	},

	itemContainer: {
		height: box,
		width: box,
		margin: 5,
		backgroundColor: 'red',
	}
})