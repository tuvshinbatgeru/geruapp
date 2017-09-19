import React, { PropTypes, Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class NavBarIconText extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        
        {
           this.props.position == 'front' && <Text style={[styles.text, this.props.textStyle]}>{this.props.text.toUpperCase()}</Text>
        }

        <Icon
          name={this.props.icon}
          size={this.props.size}
          color={this.props.color}/>

        {
           this.props.position == 'back' && <Text style={[styles.text, this.props.textStyle]}>{this.props.text.toUpperCase()}</Text>
        }

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Font-Lato',
    color: '#b5b5b5',
    fontSize: 14,
    marginRight: 7,
    marginLeft: 7,
  }

})

NavBarIconText.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    position: PropTypes.string,
}

NavBarIconText.defaultProps = {
  position: 'front'
}