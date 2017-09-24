import { 
  StyleSheet, 
  View, 
  ListView, 
  Image, 
  Text, 
  Dimensions,
  RefreshControl
} from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from 'data.task';
import isEqual from 'lodash.isequal';

import { resolveImage } from './model';
import Column from './Column';

// assignObjectColumn :: Number -> [Objects] -> [Objects]
export const assignObjectColumn = (nColumns, index, targetObject) => ({...targetObject, ...{ column: index % nColumns }});

// assignObjectIndex :: (Number, Object) -> Object
// Assigns an `index` property` from bricks={data}` for later sorting.
export const assignObjectIndex = (index, targetObject) => ({...targetObject, ...{ index }});

// containMatchingUris :: ([brick], [brick]) -> Bool
const containMatchingUris = (r1, r2) => isEqual(r1.map(brick => brick.uri), r2.map(brick => brick.uri));

export default class Masonry extends Component {
  static propTypes = {
    page: PropTypes.number,
    bricks: PropTypes.array,
    columns: PropTypes.number,
    sorted: PropTypes.bool,
    imageContainerStyle: PropTypes.object,
    customImageComponent: PropTypes.func,
    customImageProps: PropTypes.object
  };

  static defaultProps = {
    bricks: [],
    page: 1,
    columns: 2,
    sorted: false,
    imageContainerStyle: {},
  };

  constructor(props) {
    super(props);
    // Assuming users don't want duplicated images, if this is not the case we can always change the diff check
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => !containMatchingUris(r1, r2) });
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
      dimensions: {},
      initialOrientation: true,
      _sortedData: [],
      _resolvedData: [],
      sameData: false,
    };
    // Assuming that rotation is binary (vertical|landscape)
    Dimensions.addEventListener('change', (window) => this.setState(state => ({ initialOrientation: !state.initialOrientation })))
  }

  componentDidMount() {
    this.resolveBricks(this.props);
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    //console.log(this.props.bricks.length + ' === '+ nextProps.bricks.length)
    if(this.props.bricks.length != nextProps.bricks.length)
      return true
    return false
  }*/

  shouldComponentUpdate(nextProps, nextState) {
      if(this.props.hideNavbar != nextProps.hideNavbar) return false
      //console.log(this.props.refreshing + ' !! ' + nextProps.refreshing)
      //if(this.props.refreshing == nextProps.refreshing) return false
      //console.log('same = ' + this.state.sameData)
      //if(!nextState.sameData) return true
      return true
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log('Props changed')
    //console.log(nextProps.bricks)
    //console.log(this.props.bricks.length + ' ugly '+ nextProps.bricks.length)
    //if(this.props.bricks.length === nextProps.bricks.length) return
    //console.log("updated")
    if(this.props.hideNavbar != nextProps.hideNavbar) return
    if (this.props.refreshing != nextProps.refreshing) {
      this.resolveBricks(nextProps);
    }
  }

  resolveBricks({ bricks, columns, page }) {
      let sortedData = page == 1 ? [] : this.state._sortedData 

      var parent = this
      let counter = 0 

      let adjustedBricks = bricks
      .map((brick, index) => assignObjectColumn(columns, index, brick))
      .map((brick, index) => assignObjectIndex(index, brick))
      .map(brick => resolveImage(brick))
      .map(resolveTask => resolveTask.fork(
        (err) => console.warn('Image failed to load'),
        (resolvedBrick) => {
            //sortedData = _insertIntoColumn(resolvedBrick, page == 1 ? [] : this.state._sortedData, false);
            sortedData = _insertIntoColumn(resolvedBrick, sortedData, false);
            counter ++
            if(counter == bricks.length) {
              this.setState(state => {
                return {
                  dataSource: state.dataSource.cloneWithRows(sortedData),
                  _sortedData: sortedData,
                  //_resolvedData: [...state._resolvedData, resolvedBrick],
                }
              })
            }            
      }));
      
      /*this.setState(state => {
        return {
          dataSource: state.dataSource.cloneWithRows(sortedData),
          _sortedData: sortedData,
          //_resolvedData: [...state._resolvedData, resolvedBrick],
        }
      }, () => console.log(this.state.dataSource));*/
  }

  _setParentDimensions(event) {
    // Currently height isn't being utilized, but will pass through for future features
    const {width, height} = event.nativeEvent.layout;
    this.setState({
      dimensions: {
        width,
        height
      }
    });
  }

  render() {
    //alert('render')
    console.log('3. Masonry rendered ...')
    
    return (
  	<View style={{flex: 1}} onLayout={(event) => this._setParentDimensions(event)}>
 	    <ListView
         contentContainerStyle={styles.masonry__container}
         dataSource={this.state.dataSource}
         showsVerticalScrollIndicator={false}
         style={{ paddingVertical: this.props.topOffset, }}
         {...this.props}
         enableEmptySections
         renderRow={(data, sectionId, rowID) =>
           <Column
             data={data}
             columns={this.props.columns}
             parentDimensions={this.state.dimensions}
             imageContainerStyle={this.props.imageContainerStyle}
             customImageComponent={this.props.customImageComponent}
             customImageProps={this.props.customImageProps}
             key={`RN-MASONRY-COLUMN-${rowID}`}/> }
       />
  	</View>
    )
  }
};

// Returns a copy of the dataSet with resolvedBrick in correct place
// (resolvedBrick, dataSetA, bool) -> dataSetB
export function _insertIntoColumn (resolvedBrick, dataSet, sorted) {
  let dataCopy = dataSet.slice();
  const columnIndex = resolvedBrick.column;
  const column = dataSet[columnIndex];

  if (column) {
    // Append to existing "row"/"column"
    const bricks = [...column, resolvedBrick];
    if (sorted) {
      // Sort bricks according to the index of their original array position
      bricks = bricks.sort((a, b) => (a.index < b.index) ? -1 : 1);
    }
    dataCopy[columnIndex] = bricks;
  } else {
    // Pass it as a new "row" for the data source
    dataCopy = [...dataCopy, [resolvedBrick]];
  }

  return dataCopy;
};

const styles = StyleSheet.create({
  masonry__container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  masonry__column: {
    // Might be able to disregard
    flexDirection: 'column'
  }
});