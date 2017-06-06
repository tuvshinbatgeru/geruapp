import React, { PropTypes, Component } from 'react'
import { Button } from 'react-native-elements'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default class NavBarButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} 
                        style={styles.container}>
        <Button small
                onPress={this.props.onPress}
                backgroundColor={this.props.color}
                fontFamily="Lato-Regular"
                icon={{name: this.props.icon, type: 'ionicon'}}
                title={this.props.title} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
  }
})

NavBarButton.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string 
}