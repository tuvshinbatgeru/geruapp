import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet, 
	View, 
	TouchableOpacity, 
	Text, 
	ScrollView,
	Image,
} from 'react-native'
import variables, { font, layout, } from '../../styles/variables'
import LinearGradient from 'react-native-linear-gradient'

export default class RelatedTags extends Component {
	constructor(props) {
	  super(props)	
	}

	render() {

		var { related_tags, display } = this.props
		return (
			<View style={[display ? styles.showContainer : styles.hideContainer, styles.container]}>
				<ScrollView automaticallyAdjustContentInsets={false}
			                horizontal={true}
			                backfaceVisibility={false}
			                showsHorizontalScrollIndicator={false}>
					{
						related_tags.map((tag, i) => (
							<TouchableOpacity style={[styles.tagContainer, { marginLeft: i == 0 ? 15 : 5 }]}>
								<Image style={{ width: null, height: null, flex: 1, }}
									   borderRadius={5}
									   source={{ uri: tag.cover_url }}
								>
									<LinearGradient style={{ borderRadius: 5, flex: 1, }}
													colors={['rgba(255, 255, 255, 0.4)', 'rgba(52, 52, 52, 0.8)']}
									>
										<View style={[layout.centerCenter, { flex: 1, }]}>
											<Text style={{ fontSize: 17, fontFamily: font.heavy, color: variables.BRAND_WHITE }}>{tag.name}</Text>
										</View>
									</LinearGradient>
								</Image>
							</TouchableOpacity>
						))
					}
				</ScrollView>	
			</View>
		)
	}
}

RelatedTags.propTypes = {
	related_tags: PropTypes.array,
	display: PropTypes.bool,
}

RelatedTags.defaultProps = {
	related_tags: [{
		name: 'Wedding',
		cover_url: "https://www.herecomestheguide.com/images/venues_large/011880UnionHotel-20170201.jpg",
	}, {
		name: 'Flower',
		cover_url: 'https://s-media-cache-ak0.pinimg.com/originals/e6/ae/d0/e6aed0df66d524c9b4e05c23971bd403.jpg',
	}, {
		name: 'Ring',
		cover_url: 'http://www.thejewelleryhut.net/Static/images/WeddingRings.jpg',
	}, {
		name: 'White',
		cover_url: 'http://www.artflyz.com/server16-cdn/2016/05/08/black-white-and-silver-wedding-white-and-silver-wedding-reception-ideas-400x300-19ce34c7061262b7.jpg'
	}, {
		name: 'Wedding',
		cover_url: "https://www.herecomestheguide.com/images/venues_large/011880UnionHotel-20170201.jpg",
	}, {
		name: 'Flower',
		cover_url: 'https://s-media-cache-ak0.pinimg.com/originals/e6/ae/d0/e6aed0df66d524c9b4e05c23971bd403.jpg',
	}, {
		name: 'Ring',
		cover_url: 'http://www.thejewelleryhut.net/Static/images/WeddingRings.jpg',
	}, {
		name: 'White',
		cover_url: 'http://www.artflyz.com/server16-cdn/2016/05/08/black-white-and-silver-wedding-white-and-silver-wedding-reception-ideas-400x300-19ce34c7061262b7.jpg'
	}, ],
	display: false,
}

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		position: 'absolute',
		paddingVertical: 15,
		zIndex: 10,
		height: 100,
		backgroundColor: variables.BRAND_SUBCOLOR
	},

	showContainer: {
		top: -100,
	},

	hideContainer: {
		top: 65,
	},

	tagContainer: {
		borderRadius: 5,
		//borderWidth: 1,
		//borderColor: variables.BRAND_SUBCOLOR1,
		//backgroundColor: variables.BRAND_SUBCOLOR1,
		//justifyContent: 'center',
		//backgroundColor: 'red',
		//alignItems: 'center',
		marginLeft: 5,
		marginRight: 5,
		//height: 80,
		width: 80,
		//padding: 10, 
		//borderRadius: 70,
	},

	tagText: {
		color: variables.BRAND_WHITE,
		fontSize: 17,
		padding: 10,
		fontFamily: font.heavy
	}
})