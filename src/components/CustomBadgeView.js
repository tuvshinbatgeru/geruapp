'use strict';

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Layout from './Layout'

export default class CustomBadgeView extends React.Component {
  static propTypes = Text.propTypes;

  constructor(props, context) {
    super(props, context);

    this._handleLayout = this._handleLayout.bind(this);
  }

  state = {
    computedSize: null,
  };

  render() {
    return <View style={[ styles.badge ]}>
		      <Text style={[ styles.text ]}>5</Text>
		   </View>
		   
  }

  _handleLayout(event) {
    let { width, height } = event.nativeEvent.layout;
    let { computedSize } = this.state;
    if (computedSize && computedSize.height === height &&
      computedSize.width === width) {
      return;
    }

    this.setState({
      computedSize: { width, height },
    });

    if (this.props.onLayout) {
      this.props.onLayout(event);
    }
  }
}

var styles = StyleSheet.create({
  badge: {
    top: 2,
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#444',
    borderRadius: 20,
    position: 'absolute',
    right: 30
  },
  text: {
    fontSize: 14,
    color: 'white'
  }
})