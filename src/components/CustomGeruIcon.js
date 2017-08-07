import React, { PropTypes, Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import brandLocationConfig from '../brand/selection.json'
const IconSet = createIconSetFromIcoMoon(brandLocationConfig)

const defaultIconColor = '#b5b5b5'
const defaultIconSize = 20

export default class CustomGeruIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <IconSet name={this.props.icon}
          		   size={this.props.size}
          		   color={this.props.color}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

CustomGeruIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
}

CustomGeruIcon.defaultProps = {
    color: defaultIconColor,
    size: defaultIconSize,
}