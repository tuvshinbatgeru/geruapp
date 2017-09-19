import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome'
import variables from '../../styles/variables'

export default class SwiperTags extends Component {
	render() {
		var { tags } = this.props
		return (
			<View style={styles.container}>
				<Swiper style={styles.wrapper}
						showsPagination={false}
			            loop={false}
			            //onMomentumScrollEnd={this.onSwipeNavigate.bind(this)}
			            ref={(swiper) => { this.swiper = swiper }} >
				        {	
			        		page.tags.map((tag, i) => (
			        			<TouchableOpacity style={styles.tagContainer}>
			        				<Icon name={tag.icon} size={30} color={variables.BRAND_SECONDARY}/>
			        				<Text style={styles.tagText}>{tag.name}</Text>
			        			</TouchableOpacity>	
			        		))
				        }
				</Swiper>	
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		flexDirection: 'row',
		padding: 15,
	},

	wrapper: {
		
	},

	pageContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},

	tagContainer: {
		height: 100,
		width: 100,
		padding: 20,
		borderColor: variables.BRAND_SECONDARY,
		borderWidth: 1,
		margin: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tagText: {
		fontSize: 14,
		fontFamily: variables.FONT_REGULAR
	}
})

SwiperTags.propTypes = {
	tags: PropTypes.array,
}

SwiperTags.defaultProps = {
	tags: [{
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}, {
		name: 'Сүх',
		icon: 'history'	
	}]
}