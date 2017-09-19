import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet, 
	Text, 
	View, 
	ScrollView, 
	Dimensions, 
	TouchableHighlight,
	RefreshControl
} from 'react-native'

const margin = 5
const { height, width } = Dimensions.get('window')
const itemWidth = (width - margin * 2) / 2

/*type Column = {
  items: Array<any>,
  length: number,
};*/

const _initialColumnsData = ({ columnCount, items, offset }) => {
	let columnsData: Array<> = Array.from({
	    length: columnCount,
	}).map((col, i) => ({
	    length: 0,
	    items: [],
	}))

	items.forEach((item, index) => {
		const column = columnsData.reduce(
	      (prev, cur) => (cur.length < prev.length ? cur : prev),
	      columnsData[0],
	    )
	    column.items.push(item)
	    column.length += (item.cover.ratio * itemWidth + offset)
	})

	return { columnsData }
};

export default class Masonry extends Component {
	state = _initialColumnsData(this.props)

	shouldComponentUpdate(nextProps, nextState) {
		if(this.props.loading !== nextProps.loading) return true
		return false
	}

	componentWillReceiveProps(nextProps) {
	  	this.setState(_initialColumnsData(nextProps))
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

	_handeScroll(event) {		
	    if(this.props.onScroll)
	    	this.props.onScroll(event)

		if(this.props.loading) return

		if (this._shouldLoadMore(event)) {
	      	this.props.onLoadMore()
	    }
	}

	_shouldLoadMore(event) {
	    return this._distanceFromEnd(event) <= this.props.onLoadTreshhold
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


	    contentLength = contentSize.height
	    trailingInset = contentInset.bottom
	    scrollOffset = contentOffset.y
	    viewportLength = layoutMeasurement.height

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
			columnsData[this.state.nextInsertColumn].length = columnsData[this.state.nextInsertColumn].length + (items[i].cover.ratio * itemWidth + this.props.offset)
			columnsData[this.state.nextInsertColumn].items.push(items[i])
			this._calcNextInsertColumn()
		}
	}

	render() {
		let { 
			columnCount, 
			rowRender, 
			offset, 
			topOffset,
			loading 
		} = this.props

		let { 
			columnsData 
		} = this.state

		let columns = []

		for(let i = 0; i < columnCount; i ++) {
			columns.push(
				<View key={i} style={[styles.column, { marginTop: topOffset }]}>
					{
						columnsData[i].items.map((item, i) => (							
   							rowRender(item, i, itemWidth, offset)
    					))
					}
				</View>
			)
		}

		return (
			<ScrollView automaticallyAdjustContentInsets={false}
			   			onScroll={this._handeScroll.bind(this)}
			            style={styles.container}
			            refreshControl={
                          <RefreshControl refreshing={loading}
                                          onRefresh={this.props.onRefresh}
                                          tintColor="#ddd"
                          />
                        }
			>
			        <View style={styles.wrapper}>
			        	{ columns }
			        </View>
			        
			        { this.props.ListFooterComponent ? this.props.ListFooterComponent() : null}
			</ScrollView>
		)
	}

}

Masonry.propTypes = {
	rowRender: PropTypes.func,
	loading: PropTypes.bool, 
	columnCount: PropTypes.number,
	onLoadTreshhold: PropTypes.number,
	offset: PropTypes.number,
	onLoadMore: PropTypes.func,
	items: PropTypes.array,
	onScroll: PropTypes.func,
	topOffset: PropTypes.number,
	ListFooterComponent: PropTypes.func,
}

Masonry.defaultProps = {
	loading: false,
	columnCount: 2,
	onLoadTreshhold: 10,
	topOffset: 0,
	items: [],
	onScroll: null,
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
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
   	},

	loaderContainer: {
		flex: 1,
	}
})