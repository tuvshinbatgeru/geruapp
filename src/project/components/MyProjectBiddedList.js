import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet,
	View, 
	Text,
	TouchableHighlight
} from 'react-native'

import GiftedListView from 'react-native-gifted-listview'
import GiftedSpinner from 'react-native-gifted-spinner'
import ProjectCardBid from './card/ProjectCardBid'

export default class MyProjectBiddedList extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {}

      this._renderRowView = this._renderRowView.bind(this)
    }

	_onPress(data) {
	    
	}

	_renderRowView(rowData) {
	    return (
	       <ProjectCardBid project={rowData}
	       />
	    )
	}

	_renderSeparatorView() {
	    return (
	      <View style={styles.separator} />
	    )
	}

	_renderEmptyView(refreshCallback) {
	    return (
	      <View style={styles.defaultView}>
	        <Text style={styles.defaultViewTitle}>
	        	Танд одоогоор дуусгасан ажил алга байна. Аливааг эхлэх хамгийн хэцүү байдаг.  
	        </Text>

	        <TouchableHighlight
	          underlayColor='#c8c7cc'
	          onPress={refreshCallback}
	        >
	          <Text>
	            ↻
	          </Text>
	        </TouchableHighlight>
	      </View>
	    )
	}

	_renderPaginationWaitingView(paginateCallback) {
	    return (
	      <TouchableHighlight
	        underlayColor='#c8c7cc'
	        onPress={paginateCallback}
	        style={styles.paginationView}
	      >
	        <Text style={[styles.actionsLabel, { fontSize: 13 }]}>
	          ЦААШ
	        </Text>
	      </TouchableHighlight>
	    )
	}

	_renderPaginationFetchigView() {
	    return (
	      <View style={styles.paginationView}>
	        <GiftedSpinner />
	      </View>
	    )
	}

	_renderPaginationAllLoadedView() {
	    return (
	      <View>
	        
	      </View>
	    )
	}

  render () {
    return (
      <View style={styles.container}>
        	<GiftedListView
		        rowView={this._renderRowView}
		        onFetch={this.props.onFetchMyProjectsBidded}
		        initialListSize={8}
		        firstLoader={true}
		        pagination={true}
		        paginationFetchigView={this._renderPaginationFetchigView}
		        paginationWaitingView={this._renderPaginationWaitingView}
		        paginationAllLoadedView={this._renderPaginationAllLoadedView}
		        refreshable={true} 
		        refreshableViewHeight={50} 
		        refreshableDistance={40} 
		        emptyView={this._renderEmptyView}
		        renderSeparator={this._renderSeparatorView}
		        refreshableTintColor="red"
	        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 10,
    },

    separator: {
	    height: 10,
	    backgroundColor: 'transparent'
	},
})
