import React, { PropTypes, Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Text, ScrollView } from 'react-native'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import brandLocationConfig from '../brand/selection.json'
const IconSet = createIconSetFromIcoMoon(brandLocationConfig)
import variables, { layout, font } from '../styles/variables'

export default class TaggableSearch extends Component {

  render() {

    var { tags } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.props.onSearchFired}>
        <View style={styles.searchContainer}>
            <View style={styles.emptyContainer}>
              <View style={[ layout.centerCenter, { width: 40, }]}>
                <IconSet name="search"
                         size={21}
                         color={variables.BRAND_BLACK}
                />
              </View>
              { 
                tags.length == 0 && (
                  <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        Browse showcase
                    </Text>
                  </View>
                )
              }

              <ScrollView horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          automaticallyAdjustContentInsets={false}
                          backfaceVisibility={false}
                          style={styles.tagContainer}>
                {
                    tags.map((item) => (
                      <TouchableWithoutFeedback onPress={this.props.onSearchFired}>
                        <View style={[styles.tagItem, { justifyContent: 'space-between', alignItems: 'center', }]}>
                          <Text style={styles.tagLabel}>
                             {tag.name}
                          </Text>
                          <TouchableOpacity style={[{ width: 30, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 5, }]}>
                            <View style={[layout.centerCenter, { width: 20, height: 20, borderRadius: 20, backgroundColor: '#fff'}]}>
                              <IconSet name="close" 
                                       size={9} 
                                       color={variables.BRAND_BLACK}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </TouchableWithoutFeedback>
                    ))
                }
              </ScrollView>
            </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    //width: 210,
    //paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#efefef',
    borderRadius: 4,
    borderColor: '#b5b5b5',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  emptyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  emptyText: {
    padding: 3,
    marginLeft: 5,
    fontFamily: font.regular,
    color: '#b5b5b5',
    fontSize: 17,
  },

  tagContainer: {
    paddingRight: 10,
    flex: 1,
  },

  tagItem: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 3,
    backgroundColor: 'rgba(254,95,85, 0.6)',
  },

  tagLabel: {
    color: '#fff',
    fontFamily: font.regular,
    fontSize: 17,
  },

  tagRemove: {
    padding: 3,
    marginLeft: 3,
  }
})

TaggableSearch.propTypes = {
    tags: PropTypes.array,
    onSearchFired: PropTypes.func
}

TaggableSearch.defaultProps = {
    //tags: [],
    //tags: ['Дээл', 'Цагаан сар', 'Хүннү','Дээл', 'Цагаан сар', 'Хүннү'],
    onSearchFired: null,
}