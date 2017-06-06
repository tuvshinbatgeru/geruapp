import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import PhotoFrame from './PhotoFrame'
import FrameTimeline from './FrameTimeline'
import FrameCropper from './FrameCropper'
import NewFrame from './NewFrame'
import _ from 'lodash'
	
const { height, width } = Dimensions.get('window')
const defaultHeight = 200
const distanceWidth = width - 100
const frameWidth = 50

export default class PhotoCollage extends Component {
	
	constructor(props) {
	  super(props)
	  
	  this.collageScroll = null

	  this.state = {
	  	frames: [],
	  	collageScrollPercentage: 0,
	  	collageScrollY: 0,
	  	collageScrollHeight: height,
	  	selectedFrame: {},
	  	showFrameCropper: false
	  }
	  
	}

	viewOrderDown(viewOrder) {
		var { frames } = this.state

		var upper = _.findKey(frames, function(obj) { 
			return obj.viewOrder == viewOrder 
		}.bind(this))
		
		var down = _.findKey(frames, function(obj) { 
			return obj.viewOrder == viewOrder + 1
		}.bind(this))

		if(upper > -1 && down > -1) {
			
			frames[upper].viewOrder += 1
			frames[down].viewOrder -= 1

			var temp = frames[upper]
			frames[upper] = frames[down]
			frames[down] = temp
			
			this.setState({
				frames
			})
		}
	}

	viewOrderUp(viewOrder) {
		var { frames } = this.state

		var upper = _.findKey(frames, function(obj) { 
			return obj.viewOrder == viewOrder - 1 
		}.bind(this))
		
		var down = _.findKey(frames, function(obj) { 
			return obj.viewOrder == viewOrder
		}.bind(this))

		if(upper > -1 && down > -1) {
			
			frames[upper].viewOrder += 1
			frames[down].viewOrder -= 1

			var temp = frames[upper]
			frames[upper] = frames[down]
			frames[down] = temp
			
			this.setState({
				frames
			})
		}
	}

	pinched(frame, newHight) {
		var { frames } = this.state
		var currentFrame = _.find(frames, frame)

		currentFrame.resizedHeight = newHight

		this.setState({
			frames
		})
	}

	totalHeight() {
		var { frames } = this.state
		let height = 0

		for(var i = 0; i < frames.length; i ++) {
			height += frames[i].resizedHeight
		}

		return height
	}

	calculateCollageScrollHeight() {
		this.state.collageScrollHeight = this.totalHeight()
	}

	timelineScrolled(percentage) {
		var { collageScrollY, collageScrollHeight } = this.state
		
		if(this.collageScroll) {

			this.collageScroll.scrollTo(percentage * collageScrollHeight, 0, true)
			this.state.collageScrollY = percentage * collageScrollHeight

			/*this.setState({
				collageScrollY: collageScrollY + (percentage * collageScrollHeight)
			})*/
		}
	}

	collageScrolling(event) {
		var { collageScrollY } = this.state
		let sTop = event.nativeEvent.contentOffset.y
		let sHeight = event.nativeEvent.contentSize.height

		this.setState({
			collageScrollPercentage: sTop / sHeight	
		})
	}

	newFrame(response, width) {

		var { frames } = this.state

		response.ratio = response.height / response.width

		frames.push({
			viewOrder: frames.length + 1,
			state: 'edit', 
			photo: response,
			resizedHeight: response.ratio * width,
			maxHeight: response.ratio * width,
			constWidth: 0,
			top: 0,
		})

		this.calculateCollageScrollHeight()

		this.setState({
			frames
		})
	}

	photoChanged(frame, response, width) {
		var { frames } = this.state
		var currentFrame = _.find(frames, frame)

		currentFrame.state = 'edit'
		currentFrame.photo = response
		currentFrame.photo.ratio = response.height / response.width
		currentFrame.resizedHeight = currentFrame.photo.ratio * width
		currentFrame.maxHeight = currentFrame.resizedHeight

		this.setState({
			frames
		})
	}

	selectedFrameChanged(frame) {
		var { selectedFrame } = this.state

		selectedFrame = frame

		this.setState({
			selectedFrame,
			showFrameCropper: true
		})
	}

	render() {
		var { frames, collageScrollPercentage, timelineScrollY, selectedFrame, showFrameCropper } = this.state

		return (
			<View style={styles.collageContainer}>
				<FrameTimeline frames={frames} 
							   parentScrollPercentage={collageScrollPercentage}
							   onScroll={this.timelineScrolled.bind(this)}/>

				<ScrollView style={styles.viewContainer}
							showsVerticalScrollIndicator={false}
							ref={(scroll) => { this.collageScroll = scroll }}
							onScroll={this.collageScrolling.bind(this)}>
					{
						frames.map((item, i) => (
							<PhotoFrame frame={item} 
										maxViewOrder={frames.length}
										onViewOrderUp={(viewOrder) => this.viewOrderUp(viewOrder)}
										onViewOrderDown={(viewOrder) => this.viewOrderDown(viewOrder)}
										onPhotoChanged={(frame, photo, width) => this.photoChanged(frame, photo, width)}
										onSelectedFrameChanged={this.selectedFrameChanged.bind(this)}
										onPinch={this.pinched.bind(this)}/>
						))
					}
					<NewFrame onPhotoSelected={this.newFrame.bind(this)} />
				</ScrollView>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	collageContainer: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
	},

	viewContainer: {
		flex: 1,
		flexDirection: 'column',
	}
})
