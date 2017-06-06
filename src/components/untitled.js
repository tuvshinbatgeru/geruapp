import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, TouchableHighlight, View, ScrollView, Text} from 'react-native'

import ImagePicker from 'react-native-image-picker'
import Lightbox from 'react-native-lightbox'
import { Icon } from 'react-native-elements'
//import { BlurView } from 'react-native-blur'

export default class ImageSlider extends Component {

	constructor(props) {
	  super(props)	
	}

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
		  	this.props.onImageUploaded(response)
		  }
		})	
	}

	photoRemoved(photo) {
		console.log(photo.ext)
		this.props.onImageRemoved(photo)
	}

	_renderEmptyTemplate() {
		return <TouchableHighlight onPress={this.selectNewImage.bind(this)} style={styles.emptyContainer}>
					<Text style={styles.emptyText}>{this.props.emptyText}</Text>
			   </TouchableHighlight>
	}

	__renderAddBtnTemplate() {
		return <TouchableHighlight style={styles.imageContainer} onPress={this.selectNewImage.bind(this)}>
		       	   <Text style={styles.addImageBtn}>+</Text>
			   </TouchableHighlight>
	}

	_renderImageTemplate() {
		return <TouchableHighlight style={styles.imageContainer} onPress={this.selectNewImage.bind(this)}>
		       	   <Text style={styles.addImageBtn}>+</Text>
			    </TouchableHighlight>
	}

	render() {
		return <View style={styles.container}>
			<ScrollView automaticallyAdjustContentInsets={false}
            			horizontal={true}
            			style={styles.scrollView}>
            	{this.props.length == 0 ? this._renderEmptyTemplate : this._renderAddBtnTemplate}
            	{this._renderImageTemplate}

            	{this.props.photos.map((item, i) => (
            			<TouchableHighlight key={i} style={styles.imageContainer}>
		            		<View style={styles.imageView}>
			            		<Image source={item}
				            		   style={styles.image}
				            		   resizeMode={Image.resizeMode.cover}/>

				            	<View style={styles.overlay}>
				            		<Icon type="ionicon" 
				            			  name='ios-eye-outline' 
				            			  raised 
				            			  onPress={() => alert('show')}
				            			  color={'#3e474f'}
				            			  size={15}/>
				            		<Icon type="ionicon" 
				            		      name='ios-trash-outline' 
				            		      onPress={() => this.photoRemoved(item)}
				            		      color={'red'}
				            		      raised 
				            		      size={15}/>
							    </View>
						    </View>
		            	</TouchableHighlight>
            		))}
            </ScrollView>
		</View>
	}
}

ImageSlider.propTypes = {
	photos: PropTypes.array,
	multiple: PropTypes.bool,
	onImageUploaded: PropTypes.func,
	onImageRemoved: PropTypes.func,
	emptyText: PropTypes.string
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		height: 120,
		padding: 10,
		backgroundColor: '#efefef'
	},

	scrollView: {

	},

	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0077dd'
	},

	emptyText: {
		fontFamily: 'Lato-Heavy',
		fontSize: 32,
		color: '#fff'
	},

	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
    	height: 100,
    	marginLeft: 5,
    	marginRight: 5,
    	borderRadius: 5,
		borderColor: '#b5b5b5',
    	backgroundColor: '#fff'
	},

	imageView: {
		flex: 1,
		borderRadius: 5,
		height: 100,
		width: 100,
	},

	addImageBtn: {
		fontFamily: 'Lato-Heavy',
		fontSize: 54,
	},

	image: {
		width: 100,
	    height: 100,
	    borderRadius: 5,
	    zIndex: 1,
	    position: 'absolute',
	},

	overlay: {
		width: 100,
		height: 100,
		borderRadius: 5,
		zIndex: 2,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgba(250, 15, 15, 0.39)',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
	},
})
