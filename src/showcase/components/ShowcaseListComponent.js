import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import variables, { layout, font } from '../../styles/variables'

//import { SearchBar } from '../../components/react-native-taggable-search'
import TaggableSearch from '../../components/TaggableSearch'
import NavigationBar from 'react-native-navbar'
import NavBarIcon from '../../components/NavBarIcon'
import NavBarSearch from '../../components/NavBarSearch'
import RelatedTags from './RelatedTags'

import Masonry from '../../components/Masonry'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ShowcaseListComponent extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
	  	delta: 1,
	  	lastScrollTop: 0,
	  	navbarHeight: 70,
	  	hideNavbar: false,
	  }
	}

	_loadMore(pageIndex = 1) {
		this.props.onGetPortfolios(pageIndex)
	}

	_onRowRender(item, itemWidth, offset) {
		return (
			<View style={styles.portfolioContainer}>
				<View style={{ height: item.cover.ratio * itemWidth + offset }}>
					<Image source={{ uri: item.cover.url }}
					       style={styles.porfilioItem} />	
				</View>
				<View style={{ padding: 3 }}>
					<Text style={{ fontFamily: font.bold, fontSize: 15, color: variables.BRAND_BLACK }}>{item.title}</Text>
				</View>
				<View style={{ paddingBottom: 5, paddingHorizontal: 3, }}>
					<Text style={[styles.caption, { textAlign: 'justify', color: variables.BRAND_GRAY, }]}>{item.caption}</Text>
				</View>
				<View style={[layout.row, layout.centerCenter, { height: 30, }]}>
					<View style={[{ width: 30, }]}>
						<Image style={{ width: null, height: null, flex: 1, borderRadius: 30, }}
							   source={{ uri: "https://scontent.fuln1-1.fna.fbcdn.net/v/t1.0-1/p160x160/12733965_1022408714486124_4791379202953934223_n.jpg?oh=c5dee8ac5caada420d79f7413ed33701&oe=5A341C7F"}}
						/>
					</View>	
					<View style={[{ flex: 1, paddingLeft: 10, }]}>
						<Text style={[layout.h2, { fontFamily: font.regular, fontSize: 13, }]}>Tuvshinbat Gansukh</Text>
					</View>
				</View>
			</View>
		)
	}

	showcaseNavigation(item) {
		alert(item)
	}

	masonryScrolled(event) {
		let { delta, lastScrollTop, navbarHeight, hideNavbar } = this.state
		let { contentOffset } = event.nativeEvent
	    let scrollOffset = contentOffset.y

	    if (Math.abs(lastScrollTop - scrollOffset) <= delta)
  		return

  		if (scrollOffset > lastScrollTop && scrollOffset > navbarHeight){
        	// Scroll Down
	        hideNavbar = true
	    } else {
	        // Scroll Up
	        hideNavbar = false
	    }
	    
	    lastScrollTop = scrollOffset

	    this.setState({
	    	lastScrollTop,
	    	hideNavbar
	    })

	}

	render() {
		let { hideNavbar } = this.state

		return (
			<View style={styles.container}>
				<View style={{ padding: 10, }}>
					<TaggableSearch onSearchFired={this.props.onToggleSearchScene}/>
				</View>

				<RelatedTags display={hideNavbar}/>

		        <Masonry columnCount={2}
		        		 offset={100}
		        		 topOffset={100}
		        		 loading={this.props.portfolios.fetching}
		        		 items={this.props.portfolios.get('data')}
		        		 onLoadMore={this._loadMore.bind(this)}
		        		 rowRender={this._onRowRender.bind(this)}
		        		 onClick={this.showcaseNavigation.bind(this)}
		        		 onScroll={this.masonryScrolled.bind(this)}/>
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
	},
   	
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
		//height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 3,
		padding: 3,
	},

	caption: {
		flex: 2,
		fontFamily: variables.FONT_REGULAR,
		fontSize: 13,
		color: variables.BRAND_BLACK
	},

	price: {
		fontFamily: variables.FONT_BOLD,
		fontSize: 14,
		color: variables.BRAND_SUBCOLOR1,
	},

	porfilioItem: {
		flex: 1, 
		resizeMode: 'cover',
		borderRadius: 5,
	},

	actionButtonIcon: {
		fontSize: 20,
	    height: 22,
	    color: 'white',
	}
})

ShowcaseListComponent.propTypes = {
	portfolios: PropTypes.object,
	onToggleSearchScene: PropTypes.func,
	onGetPortfolios: PropTypes.func,
}