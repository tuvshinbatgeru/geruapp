import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import variables, { layout, font } from '../../styles/variables'
 
export default class ProfileHeader extends Component {
	render() {
		let {
			user,
		} = this.props

		return (
			<View style={styles.container}>
				<View style={styles.backContainer}>
					<View style={styles.nameAvatarContainer}>
				        <Image
				          style={styles.avatar}
				          source={{uri: user.get('avatar_url')}}
				        />
				        <Text style={styles.name}>{user.get('first_name')} {user.get('last_name')}</Text>
				        
				        <Icon name="md-more" 
				              size={30} 
				              color={variables.BRAND_BLACK}
				        />
			        </View>
			        <View style={styles.itcBidsContainer}>
			        	<View style={[layout.row, { padding: 3, height: 63, }]}>
					    	<TouchableOpacity style={styles.itemContainer} onPress={this.props.onGPNavigation}>
					    		<View style={[layout.row]}>
					    			<View style={[layout.centerCenter, { width: 50, }]}> 
					    			<Text style={[styles.bidsCount, styles.h4, { textAlign: 'center' }]}>{user.get('geru_point')}</Text>
							        </View>
							        <View style={[layout.centerCenter, { flex: 1, }]}>
							        	<Text style={[layout.h4, {color:variables.BRAND_GRAY}]}>ГЭРҮ ОНОО</Text>
							        </View>
						        </View>
					        </TouchableOpacity>

					        
				        </View>

				        <View style={[layout.row, { padding: 3, height: 63, }]}>
					        <TouchableOpacity style={styles.itemContainer} onPress={this.props.onPortfolioNavigation}>
					        	<View style={[layout.row]}>
					        		<View style={[layout.centerCenter, { width: 40, }]}> 
							        	<Text style={[styles.bidsCount, styles.h4, { textAlign: 'center' }]}>{ user.get('tag_count') }</Text>
							        </View>
							        <View style={[layout.centerCenter, { flex: 1, }]}>
							        	<Text style={[layout.h4, {color:variables.BRAND_GRAY}]}> ТАГ</Text>
							        </View>
						        </View>
					        </TouchableOpacity>
				        </View>
			        </View>
			    </View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	h4: {
		fontSize: 18,
		fontFamily: 'Lato-Heavy',
		color: variables.BRAND_BLACK,
	},

	h5: {
		fontSize: 14,
		color: '#b5b5b5',
		fontFamily: font.regular,
	},

	container: {
		height: 220, //220
		paddingHorizontal: 10,
		//paddingTop: 20,
		//paddingBottom: 0,
	},

	backContainer: {
		flex: 1,
		//backgroundColor: '#fff',
		borderRadius: 10,
	},

	nameAvatarContainer: {
		//flex: 1,
		height: 84,
		flexDirection: 'row',
		paddingHorizontal: 5,
		paddingVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},

	infoContainer: {
		flex: 5,
		flexDirection: 'row',
		padding: 10,
	},

	itemContainer: {
		flex: 1,
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
		marginRight: 3,
		marginLeft: 3,
	},

	avatar: {
		height: 48,
		width: 48,
		borderRadius: 48,
	},

	itcBidsContainer: {
		//flex: 1,
		flex: 1,
		//paddingVertical: 10,
		//paddingHorizontal: 10,
	},

	bidsCount: {
		marginLeft: 10,
	},

	name: {
		fontFamily: font.heavy,
		fontSize: 24, 
		marginLeft: 10,
		flex: 1,
	}
})

ProfileHeader.propTypes = {
	user: PropTypes.object,
	//onSkillNavigation: PropTypes.func,
	onGPNavigation: PropTypes.func,
	onBidNavigation: PropTypes.func,
	onPortfolioNavigation: PropTypes.func,
}