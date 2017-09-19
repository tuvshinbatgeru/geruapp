import React, { PropTypes, Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Text, ScrollView } from 'react-native'

const defaultFont = 'Lato-Regular'
const defaultFontHeavy = 'Lato-Heavy'

export default class TaggableSearch extends Component {

  render() {

    var { tags } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.props.onSearchFired}>
        <View style={styles.searchContainer}>
            { tags.length == 0 && (
                <View style={styles.emptyContainer}>
                  <Icon name="ios-search-outline" 
                        color="#b5b5b5" 
                        size={20}/>
                  <Text style={styles.emptyText}>
                      Browse showcase
                  </Text>
                </View>
              )
            }

            <View style={styles.emptyContainer}>
              <ScrollView horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          automaticallyAdjustContentInsets={false}
                          backfaceVisibility={false}
                          style={styles.tagContainer}>
                {
                    tags.map((item) => (
                      <TouchableWithoutFeedback onPress={this.props.onSearchFired}>
                        <View style={styles.tagItem}>
                          <Text style={styles.tagLabel}>
                             {item}
                          </Text>
                          <TouchableOpacity style={styles.tagRemove}>
                            <Icon name="md-close" size={20} color="#242424"/>
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
    width: 210,
    paddingHorizontal: 10,
    paddingVertical: 2,
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
    fontFamily: defaultFontHeavy,
    color: '#b5b5b5',
    fontSize: 16,
  },

  tagContainer: {
    padding: 3,
    flex: 1,
  },

  tagItem: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginLeft: 3,
    backgroundColor: '#fff',
  },

  tagLabel: {
    color: '#b5b5b5',
    fontFamily: defaultFont,
    fontSize: 16,
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
    tags: ['Дээл', 'Цагаан сар', 'Хүннү','Дээл', 'Цагаан сар', 'Хүннү'],
    onSearchFired: null,
}