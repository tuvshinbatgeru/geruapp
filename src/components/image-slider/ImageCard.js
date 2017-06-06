import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import RadialMenu from '../react-native-radial-menu'
import Icon from 'react-native-vector-icons/Ionicons'
import variables from '../../styles/variables'

const constHeight = 150
const minRatio = 1.1

export default class ImageCard extends Component {
	renderRoot() {
	    return (
	      <View style={[styles.item]}>
	      	<Icon name="ios-finger-print-outline" size={30} color={variables.BRAND_SUBCOLOR1}/>
	      </View>
	    )
	}

	render() {
		let { uri, ratio } = this.props

		return (
			<View style={[styles.container, { width: constHeight / ratio }]}>
				<View style={styles.imageContainer}>
					<Image source={{uri: uri}} 
						   resizeMode='cover'
					       style={[styles.cardImage]}/>
				</View>
				<RadialMenu menuRadius={80} style={styles.radialContainer}
							spreadAngle={90}>
			          { this.renderRoot() }
			          
			          <View style={styles.item}
				          onSelect={ () => { }}>
				          <Icon size={30} name="ios-heart-outline" color="#b5b5b5"/>
				      </View>

				      <View style={styles.item}
				          onSelect={ () => { }}>
				          <Icon size={30} name="ios-radio-button-on-outline" color="#b5b5b5"/>
				      </View>
				</RadialMenu>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		padding: 5,
		height: constHeight,
	},

	imageContainer: {
		flex: 1,
	},

	cardImage: {
		flex:1, 
		width: null, 
		height: null 
	},

	radialContainer: {
		position: 'absolute',
		bottom: 10,
		right: 10,
	},

	item: {
	    height: 40,
	    width: 40,
	    borderRadius: 30,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#efefef'
	},	
})