import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native'
import variables from '../../styles/variables'
import ImagePicker from 'react-native-image-picker'
const { width } = Dimensions.get('window')

export default class NewFrame extends Component {
	selectNewImage() {
		var options = {
		  title: 'Зураг сонгох',
		  takePhotoButtonTitle: 'Зураг дарах',
		  chooseFromLibraryButtonTitle: 'Одоо байгаа зургуудаас сонгох',
		  cancelButtonTitle: 'Цуцлах',
		  customButtons: [
		    {name: 'fb', title: 'Нүүр хуудас-наас зураг сонгох'},
		  ],
		  storageOptions: {
		    skipBackup: true,
		    path: 'images'
		  }
		}

		ImagePicker.showImagePicker(options, (response) => {
		  if (response.didCancel) {
		    
		  }
		  else if (response.error) {
		    console.log('ImagePicker Error: ', response.error);
		  }
		  else if (response.customButton) {
		    //
		  }
		  else {

		  	this.props.onPhotoSelected(response, width - 100)

		  	/*'uri': 'data:' + photo.type + ';base64,' + photo.data,
				'ext': photo.type,
				'name': photo.fileName,
				'height': photo.height,
				'width': photo.width,*/
		  }
		})	
	}

	render() {
		return (
			<TouchableOpacity style={styles.container} onPress={() => this.selectNewImage()}>
				<Text style={styles.insertText}>Шинэ зураг оруулах</Text>
			</TouchableOpacity>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: variables.BRAND_COLOR,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},

	insertText: {
		fontFamily: variables.FONT_REGULAR,
		color: variables.BRAND_COLOR,
		fontSize: 20,
	}
})

NewFrame.propTypes = {
	onPhotoSelected: PropTypes.func,
}