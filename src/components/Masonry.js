import React, { PropTypes, Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableHighlight } from 'react-native'

const margin = 5
const { height, width } = Dimensions.get('window')
const itemWidth = (width - margin * 2) / 2

export default class Masonry extends Component {
	
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	pageIndex: 0,
	  	pageSize: 0,
	  	columnsData: [],
	  	nextInsertColumn: 0,
	  	loading: false,
	  }
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.items.length !== nextProps.items.length) return true
		return false
	}

	componentDidMount() {
		this.state.loading = false
	}

	componentWillMount() {
		this.state.loading = true
		this._initialColumnsData()
		this.loadMore()
	}

	_initialColumnsData() {
		for ( var row = 0; row < this.props.columnCount; row ++) {
			this.state.columnsData.push({
				length: 0,
				items: [],
			})
		}
	}

	_calcNextInsertColumn() {
		var { columnsData, nextInsertColumn } = this.state
		var { columnCount } = this.props

		var minIndex = 0
		var minLength = columnsData[0].length

		for (var i = 1; i < columnCount; i ++) {
			if (columnsData[i].length < minLength) {
				minLength = columnsData[i].length
				minIndex = i
			}
		}

		nextInsertColumn = minIndex
		this.state.nextInsertColumn = nextInsertColumn

		return nextInsertColumn
	}

	_handeScroll(event) {		

		if(this.state.loading) return

	    if(this.props.onScroll)
	    	this.props.onScroll(event)

		if (this._shouldLoadMore(event)) {
	      	this.loadMore()
	    }
	}

	_shouldLoadMore(event) {
	    return !this.props.loading && this._distanceFromEnd(event) < this.props.distanceToLoadMore
	}

	_distanceToLoadMore() {
		var distance = this.state.columnsData[0].length
		for(var i = 1; i < this.props.columnCount; i ++) {
			if (this.state.columnsData[i].length > distance) {
				distance = this.state.columnsData[i].length
			}
		}
		return distance
	}

	_distanceFromEnd(event): number {
	    let {
	      contentSize,
	      contentInset,
	      contentOffset,
	      layoutMeasurement,
	    } = event.nativeEvent

	    let contentLength
	    let trailingInset
	    let scrollOffset
	    let viewportLength
	    /*if (this.props.horizontal) {
	      contentLength = contentSize.width;
	      trailingInset = contentInset.right;
	      scrollOffset = contentOffset.x;
	      viewportLength = layoutMeasurement.width;
	    } else {*/
	    contentLength = contentSize.height
	    trailingInset = contentInset.bottom
	    scrollOffset = contentOffset.y
	    viewportLength = layoutMeasurement.height
	    //}

	    return contentLength + trailingInset - scrollOffset - viewportLength
	}

	defaultLoadingView() {
		return (
			<View style={styles.loaderContainer}>
				<Text>Loading ...</Text>
			</View>
		)
	}

	loadMore() {
		this.state.pageIndex ++
		this.props.onLoadMore(this.state.pageIndex)
	}

	calcMasonryColumns() {
		var { columnsData } = this.state
		var { items } = this.props

 		for (var i = 0; i < items.length; i ++) {
			columnsData[this.state.nextInsertColumn].length = columnsData[this.state.nextInsertColumn].length + (items[i].collage.ratio * itemWidth + this.props.offset)
			columnsData[this.state.nextInsertColumn].items.push(items[i])
			this._calcNextInsertColumn()
		}
	}

	render() {
		var { columnCount, rowRender, offset, topOffset } = this.props
		var { columnsData } = this.state
		var columns = []

		this.calcMasonryColumns()

		for(var i = 0; i < columnCount; i ++) {
			columns.push(
				<View key={i} style={[styles.column, {marginTop: topOffset}]}>
					{
						columnsData[i].items.map((item, i) => (
							<TouchableHighlight key={i} 
							                    underlayColor="#efefef" 
							                    //style={{height: item.collage.ratio * itemWidth + offset}} 
							                    onPress={() => this.props.onClick(item)}>
    							{ rowRender(item, itemWidth, offset) }
    						</TouchableHighlight>
    					))
					}
				</View>
			)
		}

		return (
			<ScrollView automaticallyAdjustContentInsets={false}
			   			onScroll={this._handeScroll.bind(this)}
			            style={styles.container}>
			        <View style={styles.wrapper}>
			        	{ columns }
			        </View>
			        { this.defaultLoadingView() }
			</ScrollView>
		)
	}

}

Masonry.propTypes = {
	rowRender: PropTypes.func,
	loading: PropTypes.bool, 
	columnCount: PropTypes.number,
	distanceToLoadMore: PropTypes.number,
	offset: PropTypes.number,
	onLoadMore: PropTypes.func,
	items: PropTypes.array,
	onScroll: PropTypes.func,
	onClick: PropTypes.func,
	topOffset: PropTypes.number,
}

Masonry.defaultProps = {
	loading: false,
	columnCount: 2,
	distanceToLoadMore: 10,
	topOffset: 70,
	items: [],
	onScroll: null,
	onClick: null,
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 10,
	},

	wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: margin,
        marginLeft: margin
    },

    column: {
        flex: 2,
        flexDirection: 'column',
   	},

	loaderContainer: {
		flex: 1,
	}
})