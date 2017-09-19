import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet,
	View, 
	Text,
	Animated,
	Easing,
	Dimensions,
	BackAndroid,
  TouchableOpacity
} from 'react-native'

const screen = Dimensions.get('window')

export default class AnimatedOverlay extends Component {
  constructor(props) {
    super(props)
  
    /*this.state = {
    	open: this.props.isOpen
    }*/

    this.animatedValue = new Animated.Value(0)
	  this.animate = this.animate.bind(this)
  }

  /*componentWillMount() {
     this.handleOpenning(this.props)
  }*/

  /*componentWillReceiveProps(nextProps) {
  	 this.handleOpenning(nextProps)
  }

  handleOpenning(state) {
    if (typeof props.isOpen == "undefined") return
    if (props.isOpen)
      this.open()
    else
      this.close()
  }

  open() {*/
    /*if (!this.state.isAnimateOpen && (!this.state.isOpen || this.state.isAnimateClose)) {
      this.onViewLayoutCalculated = () => {*/
        /*this.setState({});
        this.animateOpen();*/
        /*if(this.props.backButtonClose && Platform.OS === 'android') 
        	BackAndroid.addEventListener('hardwareBackPress', this.onBackPress)
        delete this.onViewLayoutCalculated
      }
      
    }*/
    	/*this.setState({
      		open : true
      	})
  }*/

  /*close () {
    if (this.props.isDisabled) return;
    if (!this.state.isAnimateClose && (this.state.isOpen || this.state.isAnimateOpen)) {
      this.animateClose();
      if(this.props.backButtonClose && Platform.OS === 'android') BackAndroid.removeEventListener('hardwareBackPress', this.onBackPress)
    }
  }*/


  componentDidMount() {
     //this.animate()
  }

  componentDidUpdate(prevProps, prevState) {
  	 this.animate()
  }

  animate() {
	 this.animatedValue.setValue(0)
	 Animated.timing(
	 this.animatedValue,
	 {
	    toValue: 1,
	    duration: 400,
	    easing: Easing.cubic
	 }).start()
  }

  render () {

  	let {
		isOpen,
	} = this.props

	let heightTransaction = isOpen ? screen.height : 0

	const height = this.animatedValue.interpolate({
	    inputRange: [0, 1],
	    outputRange: [0, heightTransaction]
	})

	const width = this.animatedValue.interpolate({
	    inputRange: [0, 1],
	    outputRange: [60, screen.width]
	})

	const opacity = this.animatedValue.interpolate({
	    inputRange: [0, 1],
	    outputRange: [0, 1]
	})

  let bottom = isOpen ? 0 : -50

	//let borderRadius = open ? 0 : 0
	//let top = open: 

  return (
       	<Animated.View style={[{ height, width, opacity, bottom }, 
                                 styles.container, 
                                 this.props.style]}>
          {/*<TouchableOpacity style={styles.overlayContainer}
                            activeOpacity={0.9}
          >*/}
       		   {this.props.children}
          {/*</TouchableOpacity>*/}
       	</Animated.View>
    )
  }
}

AnimatedOverlay.propTypes = {
	isOpen: PropTypes.bool
}

AnimatedOverlay.defaultProps = {
	isOpen: false,
}

let styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 3,
        bottom: 0,
        left: 0,
        right: 0,
        //backgroundColor: '#aecaec',
        backgroundColor: 'transparent',
    },

    overlayContainer: {
      flex: 1,
      padding: 40,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})
