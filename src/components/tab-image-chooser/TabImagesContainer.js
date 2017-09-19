import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view'
import ProjectTabBar from '../ProjectTabBar'
import SuggestedShowcases from './tabs/SuggestedShowcases'
import ImageUploaderList from './tabs/ImageUploaderList'
import RadialMenu from '../react-native-radial-menu'

export default class TabImagesContainer extends Component {

	_renderTab(tab) {
		switch(tab.get('key')) {
			case "suggested":
				return (<SuggestedShowcases loading={tab.get('fetching')} 
											items={tab.get('data')}
											onSuggestedClicked={this.props.onSuggestedClicked}
											onGetSuggestedShowcases={this.props.onGetSuggestedShowcases} />)
				break
			case "bookmarked":
				return (
					<ImageUploaderList />
				)
				break
			case "take":
				return (
					<ImageUploaderList />
				)
				break
			default: 
				break
		}
	}

	render() {
		let { tabs } = this.props

		return (
			<View style={styles.container}>
				<ScrollableTabView renderTabBar={() => <ProjectTabBar />}>
					{
						tabs.map((tab, i) => (
							<View tabLabel={tab.label} style={{flex: 3}}>
				        		{ this._renderTab(tab) }
					        </View>
						))
					}
		        </ScrollableTabView>
		        {/*<View style={styles.testContainer}>
			        
			    </View>*/}
		    </View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 3,
	},

	testContainer: {
	    flex: 1,
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	},

	tabContainer: {
		marginTop: 5,
	},

	item: {
	    height: 60,
	    width: 60,
	    borderRadius: 30,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#DDD'
	},
	
	root: {
	    backgroundColor: '#FFCC00'
	}
})
