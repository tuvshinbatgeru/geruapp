import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import GiftedListView from 'react-native-gifted-listview'
import GiftedSpinner from 'react-native-gifted-spinner'
 
export default class WorkingProjects extends Component {
	render() {
		return (
			<View style={styles.container}>
				
			</View>
		)
	}
}

var styles = StyleSheet.create({
	h4: {
		fontSize: 18,
		fontFamily: 'Lato-Bold',
	},

	h5: {
		fontSize: 15,
		color: '#b5b5b5'
	},

	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 10,
		backgroundColor: 'red',
	},
})

WorkingProjects.propTypes = {
	user: PropTypes.object,
}

WorkingProjects.defaultProps = {
  user: {
  	username: 'tuvshoo',
  	first_name: 'Түвшинбат',
  	last_name: 'Гансүх',
  	skills_count : 11,
  	ict_point: 20,
  	bids_count: 2,
  	portfolios_count: 30,
  	avatar_url: 'https://fb-s-d-a.akamaihd.net/h-ak-xpf1/v/t1.0-1/p240x240/12733965_1022408714486124_4791379202953934223_n.jpg?oh=ae10e0b364f7c80181fcf24a1f3c7da3&oe=59076816&__gda__=1496598970_e6b761e364d6cee5173b8511bb4a7b43'
  }
};