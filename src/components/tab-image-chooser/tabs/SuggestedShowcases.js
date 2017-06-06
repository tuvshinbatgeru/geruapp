import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Masonry from '../../Masonry'
import variables from '../../../styles/variables'

export default class SuggestedShowcases extends Component {
	
	_loadMore(pageIndex = 1) {
		this.props.onGetSuggestedShowcases(pageIndex)
	}

	_onRowRender(item) {
		return (
			<View style={styles.portfolioContainer}>
				<View style={styles.cardHeader}>
					<Image source={{uri: item.collage.url}}
					       style={styles.porfilioItem}/>	
				</View>
			</View>
		)
	}

	render() {
		var { loading, items } = this.props 

		return (
			<View style={styles.container}>
				<Masonry columnCount={3}
		        		 offset={0}
		        		 topOffset={0}
		        		 loading={true}
		        		 items={items}
		        		 onLoadMore={this._loadMore.bind(this)}
		        		 rowRender={this._onRowRender.bind(this)}
		        		 onClick={this.props.onSuggestedClicked}
		        		 //onScroll={this.masonryScrolled.bind(this)}
		        		 />
			</View>	
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	portfolioContainer: {
		flex: 1,
		padding: 5,
		flexDirection: 'column',
		marginBottom: 5,
	},

	cardHeader: {
		flex: 1,
	},

	cardInfo: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 3,
		padding: 3,
	},

	caption: {
		flex: 2,
		fontFamily: variables.FONT_REGULAR,
		fontSize: 10,
		color: variables.BRAND_BLACK
	},

	price: {
		fontFamily: variables.FONT_BOLD,
		fontSize: 10,
		color: variables.BRAND_SUBCOLOR1,
	},

	porfilioItem: {
		flex: 1, 
		resizeMode: 'cover',
		borderRadius: 5,
	},
})