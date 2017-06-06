import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

const NotificationHeaderComponent = React.createClass({
  render() {
    return <Text>Мэдэгдэлүүд</Text>
  },
});

const styles = StyleSheet.create({
  badge : {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 0,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

export default NotificationHeaderComponent