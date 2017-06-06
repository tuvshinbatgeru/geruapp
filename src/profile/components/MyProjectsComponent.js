import React, { Component, PropTypes } from 'react'
import { 
	StyleSheet, 
	Image, 
	View, 
	Text, 
	Platform, 
	TouchableHighlight, 
	Animated, 
	Easing,
	ScrollView,
} from 'react-native'
import variables, { layout } from '../../styles/variables'
import ProjectTabBar from '../../components/ProjectTabBar'
import GiftedListView from 'react-native-gifted-listview'
import GiftedSpinner from 'react-native-gifted-spinner'
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view'

import MyProjectHistoryList from '../../project/components/MyProjectHistoryList'
import MyProjectWorkingOnList from '../../project/components/MyProjectWorkingOnList'
import MyProjectBiddedList from '../../project/components/MyProjectBiddedList'

export default class MyProjectsComponent extends Component {
	render() {
		let {
			onStickyState
		} = this.props

		return (
			<View style={[styles.container,]}>
				<View style={[layout.row, layout.centerCenter, ]}>
					<Text style={[layout.h2, ]}>Миний төслүүд</Text>
				</View>
		        <ScrollableTabView renderTabBar={() => <ProjectTabBar fixed={onStickyState}
		        													  style={{ paddingBottom: 5, }}
													   />} 
		                           initialPage={2}
		                           locked={true}
		        >
		        	<View tabLabel="Идэвхтэй" style={styles.listViewContainer}>
				        <MyProjectWorkingOnList onFetchMyProjectsWorking={this.props.onFetchMyProjectsWorking}/>
			        </View>
			        <ScrollView tabLabel="Дууссан" style={styles.listViewContainer}>
			        	<MyProjectHistoryList onFetchMyProjectsHistory={this.props.onFetchMyProjectsHistory}
			        	/>
			        </ScrollView>
		        </ScrollableTabView>
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
		paddingHorizontal: 10,
		paddingBottom: 5,
	},

	listViewContainer: {
		marginTop: 10,
		//paddingHorizontal: 5,
		flex: 1,
	},
})

MyProjectsComponent.propTypes = {
	workingOnProjects: PropTypes.array,
	historyProjects: PropTypes.array,
}