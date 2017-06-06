import React, { PropTypes, Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Animated, Text } from 'react-native'
import Modal from 'react-native-modalbox'

export default class ColorPicker extends Component {

	constructor(props) {
	  super(props)	

	  this.state = {
	  	lightModifier: 20,
		darkModifier: 0,
		transitionDuration: 200,
		transitionDelay: 25,
		variationTotal: 10,
		subColors: [],
		selectedColor: 0
	  }

	  this.springValue = new Animated.Value(0.3)

	  this.createVariations = this.createVariations.bind(this)
	}

	componentWillMount() {
		this.createVariations(this.props.colors[0], 0)
	}

	spring () {
		this.springValue.setValue(0.3)
		Animated.spring(
		   this.springValue,
		   {
			   toValue: 1,
		       friction: 7
		   }
		).start()
	}

	colorChoosed(color) {
		this.props.onColorChoosed(color)
	}

	createVariations(color, index) {
		var { variationTotal, lightModifier } = this.state
		var newColors = []

		for(var i = 0; i < variationTotal; i++){
			var newColor = []
			
			for (var x = 0; x < color.length; x++){
				var modifiedColor = (Number(color[x]) - 100) + (lightModifier * i);
				
				if(modifiedColor <= 0){
					modifiedColor = 0
				} else if (modifiedColor >= 255){
					modifiedColor = 255
				}
				
				newColor.push(modifiedColor)
			}

			newColors.push(newColor)
		}	

		this.setState({
			selectedColor: index,
			subColors: newColors
		})

		this.spring()
	}

	render() {
		return (
			<Modal swipeToClose={true}
				   animationDuration={200}
				   isOpen={this.props.isOpen}
				   ref={"colorPicker"}
				   style={styles.modal}
				   position={"bottom"}>           
				<View style={styles.container}>
					<View style={styles.mainColorContainer}>
						{      
							this.props.colors.map((item, i) => (
								<TouchableOpacity key={i} onPress={()  => this.createVariations(String(item).split(','), i) } style={styles.mainColorView}>
									<Text style={[{backgroundColor: 'rgb(' + item.join() + ')'}, styles.mainColor, i == this.state.selectedColor ? styles.selectedColor : '']}>
									</Text>
								</TouchableOpacity>
							)) 
						}
					</View>	
					<Animated.View style={[styles.subColorContainer, { transform: [{scale: this.springValue}] }]}>
						{
							this.state.subColors.map((item, i) => (
								<TouchableOpacity key={i} style={styles.subColorView} onPress={() => this.colorChoosed(item)}>
									<Text style={[{backgroundColor: 'rgb(' + item.join() + ')'}, styles.subColor]}>
									</Text>
								</TouchableOpacity>
							))
						}
					</Animated.View>
				</View>
			</Modal>
		)
	}
}

ColorPicker.propTypes = {
	hideAfterChoose: PropTypes.bool,
	multiple: PropTypes.bool,
	maxColor: PropTypes.number,
	colors: PropTypes.array,
	isOpen: PropTypes.bool,
}

ColorPicker.defaultProps = {
	hideAfterChoose: true,
	multiple: false,
	maxColor: 4,
	colors: [
		[46, 204, 113],
		[52, 152, 219],
		[155, 89, 182],
		[52, 73, 94],
		[241, 196, 15],
		[230, 126, 34],
		[231, 76, 60]
	],
}

var styles = StyleSheet.create({
	modal: {
		height: 250,
		zIndex: 100
	},

	container: {
		flexDirection: 'column',
		height: 250,
		zIndex: 1,
	},
  
	mainColorContainer: {
		flex: 1, 
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	subColorContainer: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 10,
		alignItems: 'flex-start',
		flexWrap: 'wrap'	
	},

	mainColorView: {
		padding: 10,
	},

	mainColor: {
		height: 20,
		width: 20,
		borderRadius: 20,
	},

	subColorView: {
		padding: 10,
	},

	subColor: {
		height: 40,
		width: 40,
		borderRadius: 40,	
	},

	selectedColor: {
		height: 30,
		width: 30,
		borderRadius: 30,
	},
})



