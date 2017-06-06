import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text, Dimensions, Image} from 'react-native'
import Modal from 'react-native-modalbox'
import { ImageCrop } from 'react-native-image-cropper'
//import { createResponder } from '../library'

const { height, width } = Dimensions.get('window')

export default class FrameCropper extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		  gestureState: {},
		  thumbSizeX: 100,
		  thumbSizeY: 100,
		  left: 0,
		  top: 0,
  	  }
	}

	componentWillMount() {
	    this.gestureResponder = createResponder({	      
	      onMoveShouldSetResponder: (evt, gestureState) => true,
	      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
	      onResponderGrant: (evt, gestureState) => {},
	      onResponderMove: (evt, gestureState) => {
	      	
	      	var { thumbSizeX, thumbSizeY , top, left } = this.state

	        if (gestureState.pinch && gestureState.previousPinch) {
	            thumbSizeY *= (gestureState.pinch.height / gestureState.previousPinch.height)
	            thumbSizeX *= (gestureState.pinch.width / gestureState.previousPinch.width)
	        } 

            left += (gestureState.moveX - gestureState.previousMoveX)
	        top += (gestureState.moveY - gestureState.previousMoveY)

	        this.setState({
		        gestureState: {
		            ...gestureState
		        },
		        left, top, thumbSizeX, thumbSizeY
	        })

	      },
	      onResponderTerminationRequest: (evt, gestureState) => true,
	      onResponderRelease: (evt, gestureState) => {
	        this.setState({
	          gestureState: {
	            ...gestureState
	          }
	        })
	      },
	      onResponderTerminate: (evt, gestureState) => {},
	      onResponderSingleTapConfirmed: (evt, gestureState) => {},
	      debug: false
	    })
	}

	render() {
		var { thumbSizeX, thumbSizeY, left, top } = this.state

		return (
			<Modal swipeToClose={false} 
		           animationDuration={200}
		           isOpen={true} 
		           ref={"modal"}
		           style={[styles.modal]}>
		           
		           <View style={[{width: width - 10}, styles.backgroundImage]} {...this.gestureResponder}>
		           		<View style={[styles.overLay, styles.blurContainer]}>
		           		</View>

		           		<Image resizeMode={Image.resizeMode.cover} 
		           			   style={[styles.overLay, styles.resizeMode]}
		           		       source={{'uri': 'http://resource2.sodonsolution.org/hunnu/photo/2014/7/39638457bc867c782e9f25c75b253728/img_2504l.jpg'}}/>
		           	    <View style={[{
					            width: thumbSizeX,
					            height: thumbSizeY,
					            left: left - thumbSizeX/2,
          						top: top - thumbSizeX/2,
				            	}, styles.cropperContainer]}
				              pointerEvents='none'>
				            <Text >Move or Pinch</Text>
				        </View>		
		           </View>

		    </Modal>
		)
	}
}

var styles = StyleSheet.create({
	modal: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 3,
		backgroundColor: 'rgba(0,0,0,0.4)'
	},

	backgroundImage: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.4)',
		height: 600,
	},

	overLay: {
		position: 'absolute',
		height: 600,
		width: width - 10
	},

	blurContainer: {
		zIndex: 2,
		backgroundColor: 'rgba(0,0,0,0.4)',
	},

	resizeMode: {	
		zIndex: 1,
	},	

	cropperContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,
		backgroundColor: 'rgba(255,255,255,0.5)',
	}
})

FrameCropper.propTypes = {
	frame: PropTypes.object,
	isOpen: PropTypes.bool
}