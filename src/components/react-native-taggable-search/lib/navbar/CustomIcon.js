import React, { PropTypes, Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, StyleSheet } from 'react-native'

const defaultIconColor = '#b5b5b5'
const defaultIconSize = 20

export default class CustomIcon extends Component {
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

CustomIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
}

CustomIcon.defaultProps = {
    color: defaultIconColor,
    size: defaultIconSize,
}