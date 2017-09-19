import React, { PropTypes, Component } from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import variables from '../../styles/variables'
import PhotoList from '../../components/PhotoList'
import TimeDiffCounter from '../../components/TimeDiffCounter'
import LoadingScreen from '../../components/LoadingScreen'


export default class ProjectComponent extends Component{

	_renderLoadingScreen() {
		return (
			<View style={[styles.projectContainer]}>
				<LoadingScreen message="Сар шинэдээ сайхан шинэлээрэй."
							   sender="- Гэрү апп"/>
			</View>
		)
	}

	_renderProjectView() {
		var { project, bids_count } = this.props

		return (
			<View style={[styles.projectContainer]}>
				<Image style={styles.projectHeader} source={require('../../images/background.jpg')}>
            	{/*<View style={styles.projectHeader}>*/}
            		<View style={styles.titleContainer}>
            			<Text style={styles.projectTitle}>{project.name}</Text>
            		</View>
            		<View style={styles.priceContainer}>
            			<View style={styles.bundleContainer}>
            				<Text style={[styles.label, { color: variables.BRAND_COLOR} ]}>Нийт санал</Text>
            				<Text style={styles.avgAmount}>{project.bids_count}</Text>
            			</View>	
            			<View style={styles.bundleContainer}>
            				<Text style={[styles.label, { color: variables.BRAND_COLOR} ]}>Дундаж үнэ</Text>
            				<Text style={styles.avgAmount}>{project.avg_amount}₮</Text>
            			</View>
            		</View>
	        	{/*</View>*/}
	        	</Image>
	        	<View style={styles.projectBody}>
	        		<View style={{flex: 1}}>
			        	<ScrollView style={{flex: 1}}>
			        		<View style={styles.descriptionContainer}>
			        			<Text style={styles.label}>Хавсаргасан зургууд</Text>	

			        			<PhotoList />
			        		</View>

			        		<View style={styles.infoContainer}>
			        			<View style={styles.bundleContainer}>
		            				<Text style={[styles.label]}>Төсөв</Text>
			            			<Text style={styles.mainAmount}>{project.min_amount}₮ - {project.max_amount}₮</Text>
		            			</View>
		            			<View style={styles.bundleContainer}>
		            				<Text style={[styles.label]}>Шалгаруулах хугацаа</Text>
			            			<Text style={styles.mainAmount}>{this.filterDuration()}</Text>
		            			</View>
			        		</View>

			        		<View style={styles.descriptionContainer}>
			        			<Text style={styles.label}>Тайлбар</Text>
			        			<Text style={styles.description}>{project.description}</Text>
			        		</View>
			        	</ScrollView>
			        	<TouchableOpacity style={styles.bidContainer} onPress={() => this.props.onBidPressed(project)}>
			        		<Text style={styles.bidBtn}>
			        			<Text style={styles.bidsLeft}> {bids_count} эрх байна</Text>
			        			Санал илгээх
			        		</Text>
			        		<TimeDiffCounter />
			        		{/*startTime={project.time_left}/>*/}
			        	</TouchableOpacity>
	        		</View>	
	        	</View>
            </View>
		)
	}

	filterDuration() {
		var { project } = this.props
		let str = project.award_time
		/*switch(project.duration_type) {
			case "hour":
				str += ' цаг'
				break
			case "day":
				str += ' өдөр'
				break
			case "month":
				str += ' сар'
				break
			default:
				str += ' цаг'
				break
		}*/

		return str
	}


	render() {
		var { project } = this.props
		let fetching = project.fetching

		return (
			fetching ? this._renderLoadingScreen() : this._renderProjectView()
		)
	}
}

ProjectComponent.propTypes = {
	isLoggedIn: PropTypes.bool,
	bids_count: PropTypes.number,
	project: PropTypes.Object,
}

ProjectComponent.defaultProps = {
	isLoggedIn: true,
	bids_count: 7,
	project: {
		id: 1,
		fetching: false,
		seen: true,
		name: 'Дээр үеийн хамбан дээл оёуулья, Нудрагтай хамцуутай байвал сайн байна',
		description: 'Эрхэм үйлчлүүлэгчиддээ ирж буй 2017 ондоо эрүүл энх аз жаргал бүхий л сайн сайхан бүхнийг хүсье ээ. Та бүхэндээ шинэ оны мэнд хүргэе ээ сайхан баярлаарай…',
	    min_amount: '100000',
	    max_amount: '200000',
	    
	    duration_type: 'day',
	    duration_length: 5,
	    bid_count: 17,
	    time_left: '2017-03-04 23:41:34.000000',

	    avg_amount: '120000',
	    skills: [{
	    	id: 1,
	    	name: 'шилбэ хадах',
	    }, {
	    	id: 2,
	    	name: 'исгэх',
	    }, {
	    	id: 3,
	    	name: 'оёх',
	    }],

	}
}

var styles = StyleSheet.create({
	label: {
		fontSize: 14,
		fontFamily: variables.FONT_BOLD,
		marginBottom: 5,
	},

	projectContainer: {
		paddingVertical: 40,
		paddingHorizontal: 20,
		flex: 1,
		backgroundColor: '#efefef',
		justifyContent: 'center',
	},

	projectHeader: {
		flex: 1,
    	width: null,
    	height: null, // or 'stretch',
    	//borderRadius: 10,
    	borderTopLeftRadius : 10,
		borderTopRightRadius : 10,
	},

	titleContainer: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopLeftRadius : 10,
		borderTopRightRadius : 10,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		padding: 30,
	},

	priceContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},

	bundleContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
	},

	mainAmount: {
		fontFamily: variables.FONT_HEAVY,
		color: '#384047'
	},

	avgAmount: {
		fontFamily: variables.FONT_HEAVY,
		color: '#fff'
	},

	projectBody: {
		flex: 2,
		justifyContent: 'center',
	},

	skillContainer: {
		backgroundColor: '#f6f9fa',
		padding: 15,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	infoContainer: {
		backgroundColor: '#f6f9fa',
		padding: 15,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row'
	},

	descriptionContainer: {
		backgroundColor: '#fff',
		padding: 15,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	skillTags: {
		flexDirection: 'row',
	},

	skillName: {
		marginRight: 5,
		paddingVertical: 2,
		paddingHorizontal: 5,
		fontFamily: variables.FONT_HEAVY,
		fontSize: 14,
		borderRadius: 2,
		borderWidth: 1,
		borderColor: variables.BRAND_SECONDARY,
		color: '#384047'
	},

	description: {
		fontSize: 16,
		fontFamily: variables.FONT_REGULAR,
	},

	timeLeft: {
		fontSize: 14,
		color: '#242424',
		fontFamily: variables.FONT_HEAVY,
	},

	bidsLeft: {
		fontSize: 14,
		color: '#242424',
	},

	projectTitle: {
		fontFamily: variables.FONT_HEAVY,
		fontSize: 18,
		color: '#fff',
		textAlign: 'justify'
	},

	bidContainer: {
		backgroundColor: variables.BRAND_SECONDARY,
		justifyContent: 'center',
		alignItems: 'center',
		//borderBottomLeftRadius: 5,
		//borderBottomRightRadius: 5,
		borderRadius: 5,
		marginBottom: 50,
		padding: 10,
	},

	bidBtn: {
		color: '#fff',
		fontFamily: variables.FONT_HEAVY,
	},

	projectLoading: {
		flex: 1,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
})