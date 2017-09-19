import React, { PropTypes, Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Animated,
	Dimensions,
	Easing,
	ActivityIndicator
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

const screen = Dimensions.get('window')

export default class AnimatedButton extends Component {
	constructor(props) {
	  super(props)

	  this.animatedValue = new Animated.Value(0)
	  this.animate = this.animate.bind(this)
	  this._renderLoading = this._renderLoading.bind(this)
	  this._renderContent = this._renderContent.bind(this)
	  this._timerDestroy = this._timerDestroy.bind(this)
	}

	animate() {
		this.animatedValue.setValue(0)
		Animated.timing(
		  this.animatedValue,
		  {
		    toValue: 1,
		    duration: 200,
		    easing: Easing.cubic
		  }
		).start()
	}

	_timerDestroy() {
		if(this.props.onLoadingComplete)
			this.props.onLoadingComplete()
    }

    componentWillReceiveProps(nextProps) {
    	if(nextProps.loading == true) {
    		this.setTimeout(() => this._timerDestroy() , 2000)
    	}
    }

    shouldComponentUpdate(nextProps, nextState) {
    	if(this.props.loading != nextProps.loading) {
    		return true
    	}

    	if(this.props.text != nextProps.text) {
    		return true
    	}

    	return false
    }

	componentDidMount() {
		this.animate()
	}

	componentDidUpdate(prevProps, prevState) {
		this.animate()
	}

	_renderLoading() {
		return (
			<ActivityIndicator animating={true}
			 			       color="#fff"
			 			       size={40}
			/>
		)
	}

	_renderContent() {
		let {
			text,
			iconable,
			icon,
			iconColor,
		} = this.props

		return (
			<View>
				{
					iconable && (
						<Icon name={icon}
							  size={30}
							  color={iconColor}
						/>
					)
				}

				<Text style={[styles.btnText, this.props.textStyle]}>
					{text}
				</Text>		
			</View>
			
		)
	}

	render() {
		let {
			disabled,
			loading,
		} = this.props

		let widthTransaction = loading ? 60 : screen.width

		const width = this.animatedValue.interpolate({
		    inputRange: [0, 1],
		    outputRange: [loading ? screen.width : 60, widthTransaction]
		})

		const opacity = this.animatedValue.interpolate({
		    inputRange: [0, 1],
		    outputRange: [0, 1]
		})

		let borderRadius = loading ? 60 : 0

		return (
			<TouchableOpacity onPress={this.props.onPress}
							  activeOpacity={0.9}
							  disabled={disabled}
							  style={[styles.container, this.props.style]}>
				<Animated.View style={[styles.btnContainer, {
						width,
						borderRadius,
						opacity
					}]}>
					{
						loading ? this._renderLoading() : this._renderContent()
					}
				</Animated.View>
			</TouchableOpacity>	
		)
	}
}

AnimatedButton.propTypes = {
	text: PropTypes.string.isRequired,
	iconable: PropTypes.bool,
	icon: PropTypes.string,
	iconColor: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
}

AnimatedButton.defaultProps = {
	iconable: false,
	disabled: false,
	loading: false,
}

let styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		//paddingVertical: 5,
		paddingHorizontal: 20,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 5,
	},

	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#5fcf80',
		height: 60,
	},

	btnText: {
		fontSize: 16,
		color: '#fff',
	}	
})

reactMixin(AnimatedButton.prototype, TimerMixin)