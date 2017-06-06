import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const itemWidth = 30
const frameWidth = width - 100
const ratio = height / width

export default class FrameTimeline extends Component {

	constructor(props){
	    super(props)

	    this.state = {
		  gestureState: {},
		  top: 0,
		  timelineScrollHeight: 0,
		  timelineScrollY: 0,
		  scrollTotalHight: 0,
		}

		this.timelineScroll = null
		this.scrollTotalHight = this.scrollTotalHight.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.scrollTotalHight()
	}

	totalHeight() {
		var { frames } = this.props
		let height = 0

		for(var i = 0; i < frames.length; i ++) {
			height += itemWidth * (frames[i].resizedHeight / frameWidth)	
		}

		return height
	}

	scrollTotalHight() {
		this.state.scrollTotalHight = this.totalHeight() * (this.totalHeight() / (ratio * itemWidth))
	}

	onListenParentScroll () {

		var { parentScrollPercentage } = this.props
		var { scrollTotalHight } = this.state

		if(this.timelineScroll) {
			this.timelineScroll.scrollTo(parentScrollPercentage * scrollTotalHight, 0, true)
		}
		
		return parentScrollPercentage *  scrollTotalHight
	}

	scrolled(event) {
		let sTop = event.nativeEvent.contentOffset.y
		let sHeight = event.nativeEvent.contentSize.height

		this.props.onScroll(sTop / sHeight)

		this.state.timelineScrollY = sTop
	}

	render() {	
		var { timelineScrollY } = this.state
		let totalHeight = this.totalHeight()
		let top = timelineScrollY / (totalHeight / (ratio * itemWidth))


		return (
			<View style={[styles.frameContainer]}>
				{
					this.props.frames.map((item, i) => (
						<View style={[ {height: itemWidth * (item.resizedHeight / frameWidth)}, styles.frameItem]}>
							<Image style={[{ height: itemWidth * (item.resizedHeight / frameWidth) }, styles.frameItemBack]} 
							       source={item.photo} />
						</View>
					))
				}
				<View style={[{ height: ratio * itemWidth, top: top }, indicatorStyles.scrollIndicator]}>
							
				</View>

				<ScrollView style={[{height: this.totalHeight()}, styles.hiddenScrollView]}
				            showsVerticalScrollIndicator={false}
				            onScroll={this.scrolled.bind(this)}
				            ref={(scroll) => { this.timelineScroll = scroll }}>

					<View style={{height: totalHeight * (totalHeight / (ratio * itemWidth))}}>
						
					</View>
				</ScrollView>

			</View>
		)
	}
} 

FrameTimeline.propTypes = {
	frames: PropTypes.array,
	parentScrollPercentage: PropTypes.any,

}

FrameTimeline.defaultProps = {
	frames: [],
}

var indicatorStyles = StyleSheet.create({
	scrollIndicator: {
		position: 'absolute',
		width: itemWidth + 4,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		borderRadius: 2,
		left: 8,
		borderColor: '#b5b5b5',
		borderWidth: 1,
		zIndex: 1,
	}
})

var styles = StyleSheet.create({
	frameContainer: {
		flexDirection: 'column',
		width: 50,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	hiddenScrollView: {
		position: 'absolute',
		width: itemWidth + 4,
		zIndex: 2,
		left: 8,
	},

	frameItem: {
		width: itemWidth,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor: '#efefef'
	},

	frameItemBack: {
		width: itemWidth,
	}
})