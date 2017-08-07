import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import brandLocationConfig from '../../brand/selection.json'
const IconSet = createIconSetFromIcoMoon(brandLocationConfig)
import variables, { layout, font } from '../../styles/variables'
import MyBookmarkedProjects from './MyBookmarkedProjects'

export default class ProfileHeader extends Component {
	render() {
		let {
			user,
			lastBookmarks
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
				        
				        {/*<Icon name="md-more" 
				              size={30} 
				              color={variables.BRAND_BLACK}
				        />*/}
			        </View>
			        <View style={styles.itcBidsContainer}>
			        	<MyBookmarkedProjects lastBookmarks={lastBookmarks}
			        					      onBookmarkDetailPressed={this.props.onBookmarkDetailPressed}
			        	/>
			        </View>

			        <View style={{ paddingHorizontal: 20,  paddingVertical: 10, }}>
			        	<View style={{ paddingVertical: 3, }}>
			        		<Text style={[layout.h2, ]}>Payment method</Text>
			        	</View>
			        	
			        	<View style={[layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopWidth: 1, borderTopColor: '#efefef'}]}>
			        		<View style={[layout.centerCenter, { padding: 3, }]}>
			        			<Icon name="md-settings"
			        				  size={24}
			        				  color={variables.BRAND_GREEN}
			        			/>
			        		</View>
			        		<View style={[layout.row, layout.centerBetween, { flex: 1, paddingLeft: 10, }]}>
			        			<Text style={[layout.h2, ]}>5550 **** **** ****</Text>
			        			<Text style={[layout.h2, { color: '#b5b5b5' }]}>Verified</Text>
			        		</View>
			        		<View style={[layout.centerCenter, { paddingHorizontal: 7, }]}>
			        			{/*<Icon name="md-checkmark"
			        				  size={24}
			        				  color={variables.BRAND_GREEN}
			        			/>*/}
			        		</View>
			        	</View>
			        </View>

			        <View style={{ paddingHorizontal: 20,  paddingVertical: 10, }}>
			        	<View style={{ paddingVertical: 3, }}>
			        		<Text style={[layout.h2, ]}>Agreements</Text>
			        	</View>
			        	
			        	<View style={[layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopWidth: 1, borderTopColor: '#efefef'}]}>
			        		<View style={[layout.centerCenter, { padding: 3, }]}>
			        			
			        			<IconSet name="security"
			        				     size={24}
			        				     color={variables.BRAND_RED}
			        			/>
			        		</View>
			        		<View style={[layout.row, layout.centerBetween, { flex: 1, paddingLeft: 10, }]}>
			        			<Text style={[layout.h2, ]}>Privacy</Text>
			        			{/*<Text style={[layout.h2, { color: '#b5b5b5' }]}>Connected</Text>*/}
			        		</View>
			        	</View>
			        	<View style={[layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', }]}>
			        		<View style={[layout.centerCenter, { padding: 3, }]}>
			        			<IconSet name="security"
			        				     size={24}
			        				     color={variables.BRAND_RED}
			        			/>
			        		</View>
			        		<View style={[layout.row, layout.centerBetween, { flex: 1, paddingLeft: 10, }]}>
			        			<Text style={[layout.h2, ]}>Terms and conditions</Text>
			        			{/*<Text style={[layout.h2, { color: '#b5b5b5' }]}>Not Connected</Text>*/}
			        		</View>
			        		<View style={[layout.centerCenter, { paddingHorizontal: 7, }]}>
			        			
			        		</View>
			        	</View>
			        </View>

			        <TouchableOpacity style={{ paddingHorizontal: 20,  paddingVertical: 10, }}>
			        	<View style={{ paddingVertical: 3, }}>
			        		<Text style={[layout.h2, ]}>Integrations</Text>
			        	</View>
			        	
			        	<View style={[layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', borderTopWidth: 1, borderTopColor: '#efefef'}]}>
			        		<View style={[layout.centerCenter, { padding: 3, }]}>
			        			<IconSet name="facebook"
			        				     size={24}
			        				     color={"#3b5998"}
			        			/>
			        		</View>
			        		<View style={[layout.row, layout.centerBetween, { flex: 1, paddingLeft: 10, }]}>
			        			<Text style={[layout.h2, ]}>Facebook</Text>
			        			<Text style={[layout.h2, { color: '#b5b5b5' }]}>Connected</Text>
			        		</View>
			        		<View style={[layout.centerCenter, { paddingHorizontal: 7, }]}>
			        			<Icon name="md-checkmark"
			        				  size={24}
			        				  color={variables.BRAND_GREEN}
			        			/>
			        		</View>
			        	</View>
			        	<View style={[layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', }]}>
			        		<View style={[layout.centerCenter, { padding: 3, }]}>
			        			<IconSet name="twitter"
			        				     size={24}
			        				     color={"#00aced"}
			        			/>
			        		</View>
			        		<View style={[layout.row, layout.centerBetween, { flex: 1, paddingLeft: 10, }]}>
			        			<Text style={[layout.h2, ]}>Twitter</Text>
			        			<Text style={[layout.h2, { color: '#b5b5b5' }]}>Not Connected</Text>
			        		</View>
			        		<View style={[layout.centerCenter, { paddingHorizontal: 7, }]}>
			        			{/*<Icon name="md-checkmark"
			        				  size={24}
			        				  color={variables.BRAND_GREEN}
			        			/>*/}
			        		</View>
			        	</View>
			        </TouchableOpacity>

			        <TouchableOpacity style={{ paddingHorizontal: 20, }}>
				        <View style={[layout.row, { flex: 1, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#efefef', }]}>
			        		<View style={[layout.centerCenter, { padding: 3, }]}>
			        			<IconSet name="logout"
			        				     size={24}
			        				     color={variables.BRAND_RED}
			        			/>
			        		</View>
			        		<View style={[layout.row, layout.centerBetween, { flex: 1, paddingLeft: 10, }]}>
			        			<Text style={[layout.h2, ]}>Logout</Text>
			        			{/*<Text style={[layout.h2, { color: '#b5b5b5' }]}>Not Connected</Text>*/}
			        		</View>
			        		<View style={[layout.centerCenter, { paddingHorizontal: 7, }]}>
			        			{/*<Icon name="md-checkmark"
			        				  size={24}
			        				  color={variables.BRAND_GREEN}
			        			/>*/}
			        		</View>
			        	</View>
		        	</TouchableOpacity>
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
		//height: 220, //220
		//paddingHorizontal: 10,
		//paddingTop: 20,
		//paddingBottom: 0,
	},

	backContainer: {
		//flex: 1,
		//backgroundColor: '#fff',
		borderRadius: 10,
	},

	nameAvatarContainer: {
		//flex: 1,
		height: 120,
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 20,
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
		height: 80,
		width: 80,
		borderRadius: 80,
	},

	itcBidsContainer: {
		//flex: 1,
		//flex: 1,
		//paddingVertical: 20,
		//paddingHorizontal: 20,
	},

	bidsCount: {
		marginLeft: 10,
	},

	name: {
		fontFamily: font.heavy,
		color: variables.BRAND_BLACK,
		fontSize: 24, 
		marginLeft: 20,
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