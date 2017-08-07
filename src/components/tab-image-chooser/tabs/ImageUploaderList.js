import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import variables, { layout, font } from '../../../styles/variables'

var ReadImageData = require('NativeModules').ReadImageData
import CameraRollPicker from 'react-native-camera-roll-picker'

const box = 100

export default class ImageUploaderList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	      num: 0,
	      selected: [],
	  }
	}

	getSelectedImages(images, current) {
	    var num = images.length

	    this.setState({
	      num: num,
	      selected: images,
	    })

	   // alert(images[0].uri)

	    ReadImageData.readImage(images[0].uri, (image) => {
	    	alert(image)
	    })

	    //alert(JSON.stringify(images[0]))
	    //height, width, uri
	 }

	render() {
		return (
			<View style={styles.container}>
		        <View style={styles.content}>
		          <Text style={styles.text}>
		            <Text style={{ fontFamily: font.heavy }}> {this.state.num} </Text> images has been selected
		          </Text>
		        </View>
		        <CameraRollPicker
			          scrollRenderAheadDistance={500}
			          initialListSize={1}
			          pageSize={3}
			          removeClippedSubviews={false}
			          groupTypes='SavedPhotos'
			          batchSize={5}
			          maximum={5}
			          selected={this.state.selected}
			          assetType='Photos'
			          imagesPerRow={3}
			          imageMargin={5}
			          callback={this.getSelectedImages.bind(this)} />
		    </View>				
		)
	}
}

var styles = StyleSheet.create({
	container: {
	    flex: 1,
	    //backgroundColor: '#F6AE2D',
	  },
	  content: {
	    marginTop: 15,
	    height: 30,
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    flexWrap: 'wrap',
	  },
	  text: {
	    fontSize: 15,
	    alignItems: 'center',
	    color: variables.BRAND_BLACK,
	  },

	  bold: {
	    fontFamily: font.bold,
	  },

	  info: {
	    fontSize: 11,
	  },
})