'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import variables, { layout, font } from '../../styles/variables' 
import Masonry from '../../components/Masonry'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

class BookmarkedProjectComponent extends Component {

  constructor(props) {
    super(props)
  
    this._onRowRender = this._onRowRender.bind(this)
  }

  _loadMore(pageIndex = 1) {
		//this.props.onGetPortfolios(pageIndex)
  }

  _onRowRender(item, itemWidth, offset) {
  	    //alert('123')
		return (
			<View style={styles.portfolioContainer}>
				<View style={{ height: item.cover.ratio * itemWidth + offset }}>
					<LinearGradient style={{ zIndex:3, position: 'absolute', top: 0, left: 0, right: 0, height: item.cover.ratio * itemWidth + offset, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, }}
									colors={['#242424', 'rgba(255, 255, 255, 0)']}
									locations={[0, 0.2]}
					>
						<View style={[layout.row, { height: 24, }]}>
							<View style={[layout.row, layout.centerStart, { flex: 1, }]}>
								<Icon name="heart"
									     color={variables.BRAND_WHITE}
									     size={15}
								/>
								<Text style={{ color: '#fff', marginLeft: 3, fontFamily: font.regular }}>9</Text>
							</View>
							<View style={[layout.row, layout.centerEnd, { flex: 1, }]}>
								<Icon name="eye"
									     color={variables.BRAND_WHITE}
									     size={15}
								/>
								<Text style={{ color: '#fff', marginLeft: 3, fontFamily: font.regular }}>310</Text>
							</View>
						</View>
					</LinearGradient>
					<Image source={{ uri: item.cover.url }}
					       style={styles.porfilioItem}
					/>	
				</View>
				<View style={styles.cardInfo}>
					<Text style={[styles.caption, { textAlign: 'justify' }]}>{item.caption}</Text>
				</View>

				{/*Tag list*/} 
				<View style={[layout.row, { paddingVertical: 1, }]}>
					{
						item.tags.map((tag, i) => (
							<View style={[layout.centerCenter, { borderRadius: 5, borderColor: '#9299A7', borderWidth: 1, paddingVertical: 1, paddingHorizontal: 10, marginRight: 5, }]}>
								<Text style={{ color: '#9299A7', fontSize: 11, fontFamily: font.bold }}>
									{ tag.name.toUpperCase() }
								</Text>
							</View>
						))
					}

					<View style={[layout.centerCenter, { borderRadius: 5, backgroundColor: '#9299A7', paddingVertical: 1, paddingHorizontal: 5, marginRight: 5, }]}>
						<Text style={{ color: variables.BRAND_WHITE, fontSize: 11, fontFamily: font.bold }}>
							+3
						</Text>
					</View>
				</View>


				<View style={[layout.row, { paddingVertical: 5, }]}>
					<View style={[{ width: 24, height: 24, }]}>
						<Image source={{ uri: item.user.avatar_url }}
							   style={{ flex: 1, width: null, heigth: null, borderRadius: 24, }}/>
					</View>
					<View style={[{ flex: 1, justifyContent: 'center', paddingHorizontal: 5, }]}> 
						<Text style={{ fontFamily: font.regular, fontSize: 13, color: variables.BRAND_BLACK }}>{item.user.first_name} {item.user.last_name}</Text>
					</View>
				</View>
				{/*<View style={{justifyContent: 'center', alignItems: 'center',}}>
					<Text style={[styles.price, { color: '#f66f6f'}]}>{item.price}₮</Text>
				</View>*/}
			</View>
		)
	}

  render() {
  	
  	let {
  		allBookmarks
  	} = this.props

    return (
      <View style={{ flex: 1, }}>
      	<View style={{ height: 60, backgroundColor: '#b5b5b5'}}></View>

      	<View style={styles.container}>
	        <TouchableOpacity> 
	        	<View style={[layout.centerCenter, styles.tagContainer, { backgroundColor: '#efefef' }]}>
	        		<Text style={{ fontFamily: font.regular, fontSize: 15, color: variables.BRAND_BLACK, }}>Бүгд </Text>
	        	</View>
	        </TouchableOpacity>    

	        <View style={{ flex: 1, }}>
		        <ScrollView horizontal={true}
		        			style={{ flex: 1, }}
		        			showsHorizontalScrollIndicator={false}
		        >
		        	{
		        		allBookmarks.get('tags').map((tag, i) => (
			        		<TouchableOpacity>
					        	<View style={[layout.centerCenter, styles.tagContainer, { }]}>
					        		<Text style={{ fontFamily: font.regular, fontSize: 15, color: variables.BRAND_BLACK }}>{tag.name} </Text>
					        	</View>
					        </TouchableOpacity>	        	
		        		))
		        	}
		        </ScrollView>
	        </View>
	    </View>

      	
      		<Masonry columnCount={2}
	        		 offset={50}
	        		 topOffset={0}
	        		 loading={allBookmarks.get('fetching')}
	        		 items={allBookmarks.get('bookmarks')}
	        		 onLoadMore={this._loadMore.bind(this)}
	        		 rowRender={this._onRowRender.bind(this)}
	        		 //onClick={this.showcaseNavigation.bind(this)}/>
	       	/>
      	
      </View>
    );
  }
}

const styles = StyleSheet.create({
	portfolioContainer: {
		flex: 1,
		padding: 5,
		flexDirection: 'column',
		marginBottom: 25,
	},

	cardHeader: {
		flex: 1,
	},

	cardInfo: {
		//height: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		//marginTop: 3,
		padding: 3,
	},

	caption: {
		flex: 2,
		fontFamily: font.regular,
		fontSize: 12,
		//color: variables.BRAND_BLACK
	},

	price: {
		fontFamily: variables.FONT_BOLD,
		fontSize: 10,
		color: variables.BRAND_SUBCOLOR1,
	},

	porfilioItem: {
		flex: 1, 
		width: null,
		height: null,
		borderRadius: 5,
	},

	actionButtonIcon: {
		fontSize: 20,
	    height: 22,
	    color: 'white',
	},

	container: {
        flexDirection: 'row',
        paddingVertical: 10, 
        paddingHorizontal: 10,
    },

    tagContainer: {
    	borderRadius: 5,
    	backgroundColor: '#fff',
    	paddingVertical: 8,
    	paddingHorizontal: 15, 
    	marginRight: 5, 
    	flexDirection: 'row',
    }
});


export default BookmarkedProjectComponent;