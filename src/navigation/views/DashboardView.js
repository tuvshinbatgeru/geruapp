import React, {PropTypes,Component} from 'react'
import {connect} from 'react-redux'
import { Image, StyleSheet, TouchableHighlight, View, Dimensions, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modalbox'
import NavigationBar from 'react-native-navbar'
import { Actions } from 'react-native-router-flux'


import NavBarIcon from '../../components/NavBarIcon'
import { SegmentedControls } from 'react-native-radio-buttons'

class DashboardView extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  newProjectBeforeOpen() {
     Actions.NewProject()
     //this.refs.modal.open()
  }

  setBudgetTypeChanged(selectedOption, selectedIndex) {

  }

  render() {
  	return (
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },

  modal: {
    flex: 1,
    backgroundColor: 'red'
  },

});

export default connect(
  state => ({
      newProject: state.newProjectState
  }),

  dispatch => ({
      backAction: () => {
        dispatch(navigatePop())
      },
  })
)(DashboardView)
