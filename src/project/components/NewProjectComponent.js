import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
  TextInput,
  ScrollView
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as newProjectActions from '../ProjectActions'
import variables from '../../styles/variables'

import NavigationBar from 'react-native-navbar'
import NavBarIconText from '../../components/NavBarIconText'

import Modal from 'react-native-modalbox'
import { Actions } from 'react-native-router-flux'
import ModalPicker from '../../components/ModalPicker'
import ImagesSlider from '../../components/image-slider/ImagesSlider'

import TabImagesContainer from '../../components/tab-image-chooser/TabImagesContainer'


import ModalDropdown from '../../components/ModalDropdown'
import ProjectForm from './ProjectForm'

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(newProjectActions, dispatch),
  }
}

const NewProjectComponent = React.createClass({
 
  projectDetail() {
      Actions.NewProjectDetail()
  },

  imageUploaded(data) {
      this.props.actions.newProjectImageUploaded(data)
  },

  imageRemoved(data) {
      this.props.actions.newProjectImageRemoved(data)
  },

  suggestedClicked(item) {
      this.props.actions.suggestedImageChoosed({
          url: 'http://ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
          ratio: 1.62,
      })
  },

  getSuggestedShowcases(pageIndex) {
      this.props.actions.getSuggestedShowcases(pageIndex)
  },

  render() {
    let { 
      project 
    } = this.props

    return (
      <View style={styles.container}>
            <NavigationBar
                leftButton={
                      <NavBarIconText icon="ios-arrow-back-outline"
                              size={30}
                              color="#b5b5b5"
                              text="буцах"
                              position="back"
                              onPress={this.props.onBackAction}
                      />
                }
                rightButton={
                      <NavBarIconText icon="ios-arrow-forward-outline"
                              size={30}
                              color="#b5b5b5"
                              text="дараах"
                              onPress={() => this.projectDetail()}
                      />
                }
            />

            <ImagesSlider images={ project.getIn(['files', 'selectedFiles'])} />

            <TabImagesContainer tabs={ project.getIn(['files', 'imagesTabs']) } 
                                onSuggestedClicked={this.suggestedClicked.bind(this)}
                                onGetSuggestedShowcases={this.getSuggestedShowcases.bind(this)} 
            />
      </View>
    )
  }

})

var styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 10,
  },

  inputs: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  dropdown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  dropdownSkill: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  
  selectedOption: {
    marginLeft: 5,
    fontFamily: 'Lato-Black'
  },

  durationBundleContainer: {
    flexDirection: 'row',
  },

  selectedBudget: {
    color: variables.BRAND_SECONDARY,
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: variables.BRAND_SECONDARY,
    backgroundColor: '#fff',
    fontFamily: 'Lato-Regular'
  },

  otherBudget: {
    marginLeft: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#edeff0',
    color: '#b5b5b5',
    fontFamily: 'Lato-Bold'
  },

  dropdownIcon: {
    marginLeft: 10,
  }
})

export default connect(null, mapDispatchToProps)(NewProjectComponent)