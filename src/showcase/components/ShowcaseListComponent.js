import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet, 
	View, 
	Text, 
	Image, 
	TouchableOpacity, 
	Dimensions,
	FlatList
} from 'react-native'
import variables, { layout, font } from '../../styles/variables'

//import { SearchBar } from '../../components/react-native-taggable-search'
import TaggableSearch from '../../components/TaggableSearch'
import NavigationBar from 'react-native-navbar'
import NavBarIcon from '../../components/NavBarIcon'
import NavBarSearch from '../../components/NavBarSearch'
import RelatedTags from './RelatedTags'

import Masonry from '../../components/Masonry'
import MasonryList from '../../components/MasonryList'
import Icon from 'react-native-vector-icons/Ionicons'

const margin = 5
const { height, width } = Dimensions.get('window')
const itemWidth = (width - margin * 2) / 2

export default class ShowcaseListComponent extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
	  	delta: 1,
	  	lastScrollTop: 0,
	  	navbarHeight: 70,
	  	hideNavbar: false,
	  	page: 1,
	  }

	  this._loadMore = this._loadMore.bind(this)
	  this._onRowRender = this._onRowRender.bind(this)
	  this._getHeightForItem = this._getHeightForItem.bind(this)
	  this.showcaseNavigation = this.showcaseNavigation.bind(this)
	  this.masonryScrolled = this.masonryScrolled.bind(this)
	}

	componentWillMount() {
	  this._loadMore()
	}

	_loadMore() {
		let {
			page
		} = this.state

		if(this.props.portfolios.fetching) return

		this.setState({
			page: page + 1,
		}, () => this.props.onGetPortfolios(this.state.page))
		
	}

	//_onRowRender(item, index, itemWidth, offset) {
	_onRowRender({ item }) {
		return (
			<View style={styles.portfolioContainer} key={item._id}>
				<View style={{ height: item.cover.ratio * itemWidth + 100 }}>
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
							   source={{ uri: item.user.avatar_url }}
						/>
					</View>	
					<View style={[{ flex: 1, paddingLeft: 10, }]}>
						<Text style={[layout.h2, { fontFamily: font.regular, fontSize: 13, }]}>{item.user.first_name} {item.user.last_name}</Text>
					</View>
				</View>
			</View>
		)
	}

	_getHeightForItem({ item, index }) {
		return item.cover.ratio * Dimensions
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
		let {
			suggestedTags,
			tags,
			portfolios
		} = this.props
		
		let { hideNavbar } = this.state

		return (
			<View style={styles.container}>
				<View style={{ padding: 10, }}>
					<TaggableSearch tags={tags}
									onSearchFired={this.props.onToggleSearchScene}
					/>
				</View>

				<RelatedTags display={hideNavbar}
						     suggestedTags={suggestedTags}
						     onSuggestedTagPressed={this.props.onSuggestedTagPressed}
				/>

				<FlatList 
					keyExtractor={item => item._id}
					refreshing={portfolios.get('fetching')}
					data={portfolios.get('data')}
					numColumns={2}
					//onRefresh={this._onRefresh}
					onEndReached={this._loadMore}
					onEndThreshhold={0.5}
					renderItem={this._onRowRender}
					onScroll={this.masonryScrolled}
					//ListFooterComponent={this._renderFooter}					
				/>

				{/*<MasonryList
					keyExtractor={item => item._id}
					refreshing={portfolios.get('fetching')}
					data={portfolios.get('data')}
					numColumns={2}
					renderItem={this._onRowRender}
					getHeightForItem={this._getHeightForItem}
					//ListFooterComponent={this._renderFooter}
					//onRefresh={this._onRefresh}
					onEndReached={this._loadMore}
					onEndThreshhold={0.5}
				/>*/}

		        {/*<Masonry columnCount={2}
		        		 offset={100}
		        		 topOffset={100}
		        		 loading={this.props.portfolios.fetching}
		        		 items={this.props.portfolios.get('data')}
		        		 onLoadMore={this._loadMore}
		        		 onLoadTreshhold={100}
		        		 rowRender={this._onRowRender}
		        		 onScroll={this.masonryScrolled}
		        />*/}
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