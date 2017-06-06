import React, { PropTypes, Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default class NavBarIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Icon
          name={this.props.icon}
          size={this.props.size}
          color={this.props.color}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    width: 50,
  }
})

NavBarIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string 
}