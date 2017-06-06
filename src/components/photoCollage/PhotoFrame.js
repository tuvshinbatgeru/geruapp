import React, { PropTypes, Component } from 'react'
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
//import { createResponder } from 'react-native-gesture-responder'
import ImagePicker from 'react-native-image-picker'

const { height, width } = Dimensions.get('window')
import variables from '../../styles/variables'
import { Button, Icon } from 'react-native-elements'

const distanceWidth = width - 100

export default class PhotoFrame extends Component {

	constructor(props) {
	  	super(props)
	
		this.state = {
		  gestureState: {},
		  left: width / 2,
		  top: 0,
		  ratio: 0,
		  photo: null,
		  maxHeight: 0,
		  editable: false,
		}
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

		  	this.props.onPhotoChanged(this.props.frame, response, distanceWidth)

		  	/*'uri': 'data:' + photo.type + ';base64,' + photo.data,
				'ext': photo.type,
				'name': photo.fileName,
				'height': photo.height,
				'width': photo.width,*/
		  }
		})	
	}

	componentWillMount() {
	    /*this.gestureResponder = createResponder({	      
	      onMoveShouldSetResponder: (evt, gestureState) => true,
	      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
	      onResponderGrant: (evt, gestureState) => {},
	      onResponderMove: (evt, gestureState) => {
	      	
	      	var { left, top } = this.state
	      	var { frame } = this.props

	        if (gestureState.pinch && gestureState.previousPinch) {
	          let afterSize = frame.resizedHeight * (gestureState.pinch / gestureState.previousPinch)
	          
	          if(afterSize <= frame.maxHeight) {
		         this.props.onPinch(frame, afterSize)
	  		  }

	        } else {

		        
		        let maxDragTop = maxHeight - thumbSize 
		        afterTop = top + (gestureState.moveY - gestureState.previousMoveY)	

		        if( afterTop <= maxDragTop ) {
			    	this.setState({
			      		top: afterTop
		        	})	
	        	}
	        }

	        this.setState({
	          gestureState: {
	            ...gestureState
	          },
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
	    });
		*/
	}

	stateTemplate() {
		var { frame } = this.props

		switch (frame.state) {
			case "edit":
				return (
					<View style={styles.mainContainer}>
						<View style={styles.photoLayer}>
							<Image style={[{top: this.state.top, height: frame.photo.ratio * distanceWidth}, styles.photoImage]} 
							       source={{'uri': 'data:' + frame.photo.type + ';base64,' + frame.photo.data}}/>
						</View>

						<View style={[{height: frame.resizedHeight}, styles.overLayDisabled]}>
							<View style={styles.instructionView}>
								<Icon type="ionicon"
									  name="ios-contract-outline"
									  size={18}
									  color={'#fff'}/>
								<Text style={{fontSize: 14, marginLeft: 5, fontFamily: variables.FONT_REGULAR, color: '#fff'}}>Чирж зургаа тохируулна</Text>
							</View>
						</View>
					</View>
				)
			case "show":
				return (
					<View style={[{ height: thumbSize}, styles.overLayDisabled]}>
						<TouchableOpacity>
							<Icon type="ionicon"
							      name="ios-checkmark-circle-outline"
							      color={"green"}
							      raised
							  	  size={20}/>
					    </TouchableOpacity>
					    <TouchableOpacity>
							<Icon type="ionicon" 
		            		      name='ios-close-circle-outline' 
		            		      color={'red'}
		            		      raised 
		            		      size={20}/>
		        		</TouchableOpacity>
					</View>
				)
		}
	}

	render() {

		const { thumbSize, photo, editable } = this.state
		const { frame, maxViewOrder } = this.props

		var template = {}
		let editableTemplate = editable ? (
			<View style={[{ height: thumbSize}, styles.overLayDisabled]}>
				<TouchableOpacity>
					<Icon type="ionicon"
					      name="ios-checkmark-circle-outline"
					      color={"green"}
					      raised
					  	  size={20}/>
			    </TouchableOpacity>
			    <TouchableOpacity>
					<Icon type="ionicon" 
            		      name='ios-close-circle-outline' 
            		      color={'red'}
            		      raised 
            		      size={20}/>
        		</TouchableOpacity>
			</View>
			) : (<Text></Text>)
		//{...this.gestureResponder}
		return (
			<View style={[{ height: frame.resizedHeight}, styles.frameContainer]}
			      >
				{
					this.stateTemplate()
				}

				<View style={styles.rightSettingsContainer}>
					<View style={styles.acceptRejectContainer}>
						<TouchableOpacity style={styles.acceptBtn} onPress={() => this.props.onSelectedFrameChanged(frame)}>
							<Icon type="ionicon"
							      name="ios-checkmark-outline"
							      color={variables.BRAND_SECONDARY}
							  	  size={20}/>
					    </TouchableOpacity>
					    <TouchableOpacity style={styles.rejectBtn}>
							<Icon type="ionicon" 
		            		      name='ios-close-outline' 
		            		      color={variables.BRAND_COLOR}
		            		      size={20}/>
					    </TouchableOpacity>
				    </View>
					

				    {
				    	frame.viewOrder > 1 &&
				        <TouchableOpacity style={[{justifyContent: 'flex-end'},styles.arrowsContainer]} onPress={() => this.props.onViewOrderUp(frame.viewOrder)}>
							<Icon name="ios-arrow-up-outline" 
								  type="ionicon"
							      size={20}
							  	  color="#b5b5b5"/>
						</TouchableOpacity>
				    }
					
					<Text style={styles.frameCount}>{this.props.frame.viewOrder}</Text>
					
					{   frame.viewOrder < maxViewOrder && 
						<TouchableOpacity style={[{justifyContent: 'flex-start'}, styles.arrowsContainer]} onPress={() => this.props.onViewOrderDown(frame.viewOrder)}>
							<Icon name="ios-arrow-down-outline" 
								  type="ionicon"
							      size={20}
							  	  color="#b5b5b5"/>
						</TouchableOpacity>
					}
				</View>
			</View>
		)
	}
}

PhotoFrame.propTypes = {
	ratio: PropTypes.number,
	frame: PropTypes.object.isRequired,
	onViewOrderUp: PropTypes.func,
	onViewOrderDown: PropTypes.func,
	maxViewOrder: PropTypes.number,
	onSelectedFrameChanged: PropTypes.func,
}

PhotoFrame.defaultProps = {
	ratio: 0.75,
}

var styles = StyleSheet.create({
	frameContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},

	photoLayer: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
	},

	editLayer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	overLayDisabled: {
		position: 'absolute',
		flexDirection: 'row',
		top: 0,
		left: 0,
		width: distanceWidth,
		justifyContent: 'center',
		alignItems: 'center'
	},

	instructionText: {
		backgroundColor: 'rgba(84, 97, 133, .4)',
		position: 'absolute',
	},

	instructionView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		borderRadius: 5,
		backgroundColor: 'rgba(84, 97, 133, .4)',
	},

	insertImageBtn: {
		fontSize: 32,
	},

	photoImage: {
		width: distanceWidth,
	},

	rightSettingsContainer: {                                                                        
		width: 50,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},

	acceptRejectContainer: {
		justifyContent: 'space-around', 
		alignItems: 'center', 
	},

	acceptBtn: {
		padding: 10,
		borderWidth: 1,
		//backgroundColor: variables.BRAND_SECONDARY,
		borderColor: variables.BRAND_SECONDARY,
		borderRadius: 30,
		height: 30,
		width: 30,
		marginBottom: 5,
	},

	rejectBtn: {
		padding: 10,
		borderWidth: 1,
		//backgroundColor: variables.BRAND_COLOR,
		borderColor: variables.BRAND_COLOR,
		borderRadius: 30,
		height: 30,
		width: 30,
	},

	arrowsContainer: {
		flex: 1,
	},

	frameCount: {
		fontFamily: variables.FONT_BOLD,
		fontSize: 20                            ,
	}
})