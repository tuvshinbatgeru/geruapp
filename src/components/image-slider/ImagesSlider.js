import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import ImageCard from './ImageCard'
import variables from '../../styles/variables'
//import NavigationBar from 'react-native-navbar'
//import NavBarIconText from './NavBarIconText'
const constHeight = 100

export default class ImagesSlider extends Component {
	constructor(props) {
	  super(props)
	
	  this._renderBlank = this._renderBlank.bind(this)
	  this._renderImages = this._renderImages.bind(this)
	  this.toggleImage = this.toggleImage.bind(this)
	}

	toggleImage() {

	}

	_renderBlank() {
		return (
			<View style={[styles.container, {justifyContent: 'center', alignItems: 'center', }]}>
				<Text style={{fontSize: 24, fontFamily: variables.FONT_HEAVY, textAlign: 'center'}}>
					Upload some photos will help your freelancer.
				</Text>	
			</View>
		)
	}

	_renderImages(images) {
		return (
			<ScrollView horizontal={true} >
		        {
		        	images.map((image, i) => (
		        		<ImageCard uri={image.url}
				        		   ratio={image.ratio}
				        		   selected={true}
				        		   pinned={false}
				        		   onPress={this.toggleImage}
		        		/>
		        	))
		        }
		    </ScrollView>
		)
	}

	render() {
		let { 
			images 
		} = this.props

		return (
			<View style={styles.container}>
				{ images.get('count') == 0 ? this._renderBlank() : this._renderImages(images.get('data'))}
			</View>
		)
	}
}

ImagesSlider.propTypes = {
	images: PropTypes.array,
}

var styles = StyleSheet.create({
	container: {
		height: constHeight,
		padding: 10, 
	},

	overlayNavbar: {
		position: 'absolute',
		top: 0,
		left: 0,
	},

	wrapper: {
		height: constHeight,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
