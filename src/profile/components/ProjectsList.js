import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
 
import GiftedListView from 'react-native-gifted-listview'
import GiftedSpinner from 'react-native-gifted-spinner'

export default class ProjectsList extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	
	  }
	}

	onProjectTypeChanged (type) {
		this.setState({
			selectedProjectType: type
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
		          <SegmentedControls
		            tint={'#424242'}
		            backTint= {'#fff'}

		            selectedTint= {'#424242'}
		            separatorTint={'#424242'}
		            separatorWidth={2}

		            selectedBackgroundColor= {'#fff'}
		            selectedOption={ this.state.selectedProjectType }
					onSelection={ this.onProjectTypeChanged.bind(this) }

		            containerBorderTint={'#424242'}
		            containerBorderWidth={2}
  					containerBorderRadius={5}
		            
		            options={ this.state.projectTypes }
		            optionStyles= {{fontFamily: 'Lato-Heavy', color: '#424242'}}
		            extractText={ (option) => option.label }
		          />
		        </View>

		        <GiftedListView
		          rowView={this._renderRowView}
		          onFetch={this._onFetch}
		          initialListSize={8} 
		          firstLoader={true}
		          pagination={true}
		          paginationFetchigView={this._renderPaginationFetchigView}
		          paginationAllLoadedView={this._renderPaginationAllLoadedView}
		          paginationWaitingView={this._renderPaginationWaitingView}
		          refreshable={true} 
		          refreshableViewHeight={50} 
		          refreshableDistance={40} 

		          emptyView={this._renderEmptyView}
		          renderSeparator={this._renderSeparatorView}
		          PullToRefreshViewAndroidProps={{
		            colors: ['#fff'],
		            progressBackgroundColor: '#003e82',
		          }}
		        />
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
		flex: 3,
		flexDirection: 'column',
		padding: 10,
	},
})

ProjectsList.propTypes = {
	projects: PropTypes.object,
}

ProjectsList.defaultProps = {
  projects: [{
		name: 'Дээр үеийн хамбан дээл оёуулья',
		min_amount: '100000',
		max_amount: '200000',
		bid_count: 17,
		time_left: '3 цаг дутуу',
		seen: false,
	}, {
		name: 'I need you to develop some software for me. I would like this software to be developed for Windows using Java.',
		min_amount: '5 000 000',
		max_amount: '11 000 000',
		bid_count: 2,
		time_left: '2 өдөр дутуу',
		seen: true
	}, {
		name: 'Торгон хантааз',
		min_amount: '50000',
		max_amount: '110000',
		bid_count: 2,
		time_left: '2 өдөр дутуу',
		seen: false
	}, {
		name: 'Торгон хантааз',
		min_amount: '50000',
		max_amount: '110000',
		bid_count: 2,
		time_left: '2 өдөр дутуу',
		seen: false
	}, {
		name: 'Торгон хантааз',
		min_amount: '50000',
		max_amount: '110000',
		bid_count: 2,
		time_left: '2 өдөр дутуу',
		seen: true
	}, {
		name: 'Торгон хантааз',
		min_amount: '50000',
		max_amount: '110000',
		bid_count: 2,
		time_left: '2 өдөр дутуу',
		seen: false
	}, {
		name: 'Торгон хантааз',
		min_amount: '50000',
		max_amount: '110000',
		bid_count: 2,
		time_left: '2 өдөр дутуу',
		seen: true
	}]
};