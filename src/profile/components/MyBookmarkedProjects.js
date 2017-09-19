'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import variables, { layout, font } from '../../styles/variables'

class MyBookmarkedProjects extends Component {
  constructor(props) {
    super(props);
  
    this._renderBookmark = this._renderBookmark.bind(this)
    this._renderEmptyView = this._renderEmptyView.bind(this)
  }

  _renderEmptyView() {
  	return (
  		<View style={[layout.centerCenter]}>
  			<Text style={[layout.h2]}>You don't have any bookmarked projects yet.</Text>
  		</View>
  	)
  }

  _renderBookmark(bookmarks) {
  	return (
  		<View style={{ flex: 1, }}>
  			<View style={{ paddingBottom: 10, justifyContent: 'center', }}>
  				<Text style={[layout.h2, ]}>My bookmarked products</Text>
  			</View>
	  		<View style={[{ flex: 1, height: 120, }]}>
	  			<TouchableOpacity style={[layout.row, { flex: 1, }]} onPress={this.props.onBookmarkDetailPressed}>
		  			<View style={[layout.centerCenter, { width: 100, padding: 20, borderRadius: 5, backgroundColor: '#efefef' }]}>
			      		<View style={[layout.centerCenter, ]}>
			      			<Text style={[layout.h2, { fontSize: 25, }]}>+9</Text>
			      			<Text style={[{ fontFamily: font.regular, fontSize: 15, }]}>other</Text>
			      		</View> 
			      	</View>
			  		<View style={[layout.row, { flex: 1, }]}>

			      		{
			      			bookmarks.map((project, i) => (
			      				<View style={{ width: 100, padding: 3, }}>
			      					<Image style={{ flex: 1, width: null, height: null, borderRadius: 5, }}
			      						   source={{ uri: project.cover_url}}
			      					/>
			      				</View>
			      			))
			      		}
			      	</View>
			    </TouchableOpacity>
	      	</View>
      	</View>
  	)
  }

  render() {
  	let {
  		lastBookmarks
  	} = this.props

    return (
      <View style={[layout.row, { borderRadius: 10,  paddingLeft: 20, }]}>
      	{ lastBookmarks.get('bookmarks').length == 0 ? this._renderEmptyView() : this._renderBookmark(lastBookmarks.get('bookmarks')) }
      </View>
    )
  }
}

const styles = StyleSheet.create({

});


export default MyBookmarkedProjects;