import React, {PropTypes} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import variables from '../styles/variables'

export default ModalDropdown = React.createClass({
    propTypes: {
      onPress: PropTypes.func,
      title: PropTypes.string,
      selectedValue: PropTypes.string,
      disabled: PropTypes.bool,
      loading: PropTypes.bool,
    },

    getDefaultProps: function () {
      return {
        onPress: null,
        title: 'Сонгох',
        disabled: false,
        selectedValue: '',
        loading: false,
      }
    },

    render() {

        const iconName = this.props.loading ? 'ios-arrow-up-outline': 'ios-arrow-down-outline'

        return <TouchableOpacity style={{height: 50}} onPress={this.props.onPress}>
          <View style={[styles.dropdown]}>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: '#242424'}}>{this.props.title}</Text>
            <Text style={styles.selectedOption}>
              {this.props.selectedValue}
            </Text>  
            
            <Icon name={iconName}
                  size={20}
                  style={styles.dropdownIcon}
                  color={'#b5b5b5'}></Icon>
          </View>
        </TouchableOpacity>
    }
})

var styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  
  selectedOption: {
    marginLeft: 5,
    fontFamily: 'Lato-Black'
  },

  dropdownIcon: {
    marginLeft: 10,
  }
})
