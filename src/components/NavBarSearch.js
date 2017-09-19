import React, { PropTypes, Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { 
  StyleSheet, 
  View,
  TextInput
} from 'react-native'

export default class NavBarSearch extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TextInput />
        {/*<SearchBar lightTheme placeholder="хайх ..."/>*/}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    width: 50,
  }
})

NavBarSearch.propTypes = {

}