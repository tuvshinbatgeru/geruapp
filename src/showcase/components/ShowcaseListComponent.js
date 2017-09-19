import React, { PropTypes, Component } from 'react'
import { 
	ActivityIndicator,
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

import Masonry from '../../components/react-native-masonry/Masonry'
//import Masonry from '../../components/Masonry'
//import MasonryList from '../../components/MasonryList'
import Icon from 'react-native-vector-icons/Ionicons'

const margin = 5
const { height, width } = Dimensions.get('window')
const itemWidth = (width - margin * 2) / 2

const _stateFromProps = ({ portfolios }) => {
	let showcaseData = []
	portfolios.get('data').forEach((item, index) => {
		showcaseData.push({
			uri: item.cover.url,
			data: {
				...item
			},
			renderFooter: (item) => {
				return (
					<View style={styles.portfolioContainer} key={item._id}>
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
		})
	})

	return { showcaseData }
}

export default class ShowcaseListComponent extends Component {

	constructor(props) {
	  super(props)
	
	  this.state = {
	  	delta: 1,
	  	lastScrollTop: 0,
	  	navbarHeight: 100,
	  	hideNavbar: false,
	  	showcaseData: [],
	  	page: 1,
	  }

	  this._loadMore = this._loadMore.bind(this)
	  this._onRowRender = this._onRowRender.bind(this)
	  this._getHeightForItem = this._getHeightForItem.bind(this)
	  this._renderFooter = this._renderFooter.bind(this)
	  this.showcaseNavigation = this.showcaseNavigation.bind(this)
	  this.masonryScrolled = this.masonryScrolled.bind(this)
	}

	componentWillMount() {
	  this._loadMore()
	}

	componentWillReceiveProps(nextProps) {
	   this.setState(_stateFromProps(nextProps))
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

	_renderFooter() {
		return (
			<View>
				<ActivityIndicator />
			</View>
		)
	}

	//_onRowRender(item, index, itemWidth, offset) {
	_onRowRender({ item }) {
		return (
			<View style={styles.portfolioContainer} key={item._id}>
			{/*<View style={{ height: item.cover.ratio * itemWidth + 100 }} key={item._id}>*/}
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

		//alert(portfolios.get('data').length)

		return (
			<View style={styles.container}>
				<View style={{ padding: 15, }}>
					<TaggableSearch tags={tags}
									onSearchFired={this.props.onToggleSearchScene}
					/>
				</View>

				<RelatedTags display={hideNavbar}
						     suggestedTags={suggestedTags}
						     onSuggestedTagPressed={this.props.onSuggestedTagPressed}
				/>

				<View style={{ flex: 1, paddingHorizontal: 8 }}>
					{/*<Masonry
			            //sorted
			            refreshing={portfolios.get('fetching')}
			            topOffset={90}
			            bricks={this.state.showcaseData}
			            imageContainerStyle={{
			            	borderRadius: 5, 
			            }}
			            onEndReached={this._loadMore}
						onEndThreshhold={0.5}
			            columns={2}
			            onScroll={this.masonryScrolled}
			            customImageComponent={Image}
			            //renderFooter={this._renderFooter}
			        />*/}
			        <FlatList 
						keyExtractor={item => item._id}
						refreshing={portfolios.get('fetching')}
						data={portfolios.get('data')}
						numColumns={2}
						//onRefresh={this._onRefresh}
						onEndReached={this._loadMore}
						onEndThreshhold={0.5}
						renderItem={this._onRowRender}
						//onScroll={this.masonryScrolled}
						//ListFooterComponent={this._renderFooter}					
					/>
		        </View>
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
		paddingVertical: 5,
		//paddingRight: 
		marginBottom: 20,
		//backgroundColor: '#aecaec'
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