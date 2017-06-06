import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import variables from '../styles/variables'

const imageLenth = 42
export default class PhotoList extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={[styles.borderLeft, styles.imageContainer]}>
					<Image style={[{borderTopLeftRadius: 2, borderBottomLeftRadius: 2,}, styles.image]} source={require('../images/image.jpg')}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.imageContainer]}>
					<Image style={styles.image} source={require('../images/image1.jpg')}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.imageContainer]}>
					<Image style={styles.image} source={require('../images/image2.jpg')}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.imageContainer]}>
					<Image style={styles.image} source={require('../images/image3.jpg')}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.otherContainer}>
					<Text style={styles.otherImages}>+3</Text>
				</TouchableOpacity>
			</View>	
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},

	image: {
		height: imageLenth,
		width: imageLenth,
	},

	borderLeft: {
		borderTopLeftRadius: 2,
		borderBottomLeftRadius: 2,
	},

	imageContainer: {
		height: imageLenth,
		width: imageLenth,
	},

	otherContainer: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6f9fa',
		borderTopRightRadius: 2,
		borderBottomRightRadius: 2
	},

	otherImages: {
		fontSize: 12,
		fontFamily: variables.FONT_HEAVY,
		color: variables.BRAND_BLACK,
	}
})