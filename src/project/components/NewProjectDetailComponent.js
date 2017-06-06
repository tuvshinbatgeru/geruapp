import React, { PropTypes, Component } from 'react'
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
import variables, {layout} from '../../styles/variables'

import NavigationBar from 'react-native-navbar'
import NavBarIconText from '../../components/NavBarIconText'

import Modal from 'react-native-modalbox'
import { Actions } from 'react-native-router-flux'
import ModalPicker from '../../components/ModalPicker'
import ImagesSlider from '../../components/image-slider/ImagesSlider'

import TabImagesContainer from '../../components/tab-image-chooser/TabImagesContainer'


import ModalDropdown from '../../components/ModalDropdown'
import AnimatedButton from '../../components/react-native-animated-button'
import AnimatedOverlay from '../../components/react-native-animated-overlay'
import ProjectForm from './ProjectForm'

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(newProjectActions, dispatch),
  }
}

class NewProjectDetailComponent extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
    	showPriceChooser: false,
        showDurationTypeChooser: false,
        showDurationValueChooser: false,
        showSkillChooser: false,
        value: {
          title: this.props.project.form.fields.title,
          description: this.props.project.form.fields.description,
          awardDate: this.props.project.form.fields.awardDate,
          awardTime: this.props.project.form.fields.awardTime,
        },
        hours: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        days:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        months:[1,2,3,4,5,6,7,8,9,10,11,12],
    }

    this.saveProject = this.saveProject.bind(this)
  }

  validate(form) {    
    if(form.isValid) {
      return {
        result : true,
        message: ''
      }
    }

    return {
      result: false,
      error: form.error
    }
  }

  saveProject() {    
    Promise.resolve(this.props.actions.checkProjectValidation())
           .then((res) => {
            var { 
              project 
            } = this.props

            let response = this.validate(project.form)

            if(!response.result) {
              Alert.alert(response.error.field, response.error.message)
              return
            }

            this.props.actions.saveProject(project.form, 
                project.selectedPriceBundle, 
                project.selectedDurationType, 
                project.durationValue,
                project.getIn(['tags','selected']))
    })

    
  }

  onChange (value, path) {

    if (path[0] == 'title') {
      this.props.actions.onProjectFormFieldChange('title', value.title)
    }

    if (path[0] == 'description') {
      this.props.actions.onProjectFormFieldChange('description', value.description)
    }

    if (path[0] == 'awardDateTime' && path[1] == 'awardDate') {
      this.props.actions.onProjectFormFieldChange('awardDate', value.awardDateTime.awardDate)
    }

    if (path[0] == 'awardDateTime' && path[1] == 'awardTime') {
      this.props.actions.onProjectFormFieldChange('awardTime', value.awardDateTime.awardTime)
    }

    this.setState({
        value
    })

    //window.setTimeout(() => alert(this.props.project.form.fields.awardTime), 2000)

  }

  imageUploaded(data) {
      this.props.actions.newProjectImageUploaded(data)
  }

  imageRemoved(data) {
      this.props.actions.newProjectImageRemoved(data)
  }

  toggleShowPriceChooser(toggle) {
    this.setState({
      showPriceChooser: toggle
    })    
  }

  toggleSkillChooser(toggle) {
    this.setState({
      showSkillChooser: toggle,
    })
  }

  toggleShowDurationChooser(toggle) {
    this.setState({
        showDurationTypeChooser: toggle,
    })
  }

  toggleShowDurationValueChooser(toggle) {
    this.setState({
        showDurationValueChooser: toggle,
    })
  }

  skillsChoosed(skill) {
      this.props.actions.toggleSelectedSkills(skill)
  }

  priceChoosed(item) {
    this.toggleShowPriceChooser(false)
    this.props.actions.priceBundleChanged(item)
  }

  durationTypeChoosed(item) {
    this.toggleShowDurationChooser(false)
    this.props.actions.durationTypeChanged(item)
  }

  durationValueChoosed(item) {
    this.toggleShowDurationValueChooser(false)
    this.props.actions.durationValueChanged(item)
  }

  chooseDurationOptions() {
    switch(this.props.project.selectedDurationType.id) {
      case 1:
        return this.state.hours
      case 2:
        return this.state.days
      case 3:
        return this.state.months
    }
  }

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
            />

            <ScrollView automaticallyAdjustContentInsets={false}
                        style={[styles.scrollView]}>
              <View style={styles.inputs}>
                <ProjectForm
                    form={ project.form }
                    value={ this.state.value } 
                    onChange={(value, path) => this.onChange(value, path)} />
              </View>

              <ModalDropdown title={"Төсөв: "}
                             selectedValue= { project.selectedPriceBundle.min_amount + '₮ - ' + project.selectedPriceBundle.max_amount + '₮'}  
                             loading={ this.state.showPriceChooser }                             
                             onPress={() => this.toggleShowPriceChooser(true)}/>

              <View style={styles.durationBundleContainer}>
                  <ModalDropdown title={"Төрөл: "}
                                 selectedValue= { project.selectedDurationType.label }  
                                 loading={ this.state.showDurationTypeChooser }                             
                                 onPress={() => this.toggleShowDurationChooser(true)}/>
                  
                  <ModalDropdown title={"Хугацаа: "}
                                 selectedValue= { String(project.durationValue) }  
                                 loading={ this.state.showDurationValueChooser }                             
                                 onPress={() => this.toggleShowDurationValueChooser(true)}/>
              </View>

          	</ScrollView>

            <AnimatedButton text="Төсөл нийтлэх"
                            textStyle={{color: '#fff', fontSize: 18, fontFamily: variables.FONT_BOLD}}
                            loading={ project.get('fetching') }
                            onPress={() => this.saveProject()}
                            //onLoadingComplete={this.onLoadingComplete}
            />

            <AnimatedOverlay isOpen={project.get('fetched')}
            >
              <View style={{flex: 1, backgroundColor: '#fff', }}>
                <View style={[layout.centerCenter, { flex: 4, }]}>
                  <Text style={[layout.label, { fontSize: 24, color: '#66cc22'}]}>
                      Таны төсөл амжилттай нийтлэгдэлээ. 
                  </Text>
                </View>
                <View style={{flex: 1, paddingHorizontal: 20, }}>
                  <TouchableOpacity style={[layout.centerCenter, { backgroundColor: variables.BRAND_COLOR, borderRadius: 40, paddingVertical: 10,  }]}
                            activeOpacity={0.9}
                            onPress={this.props.onForwardAction}
                  >
                    <Text style={{color: '#fff', fontSize: 24, fontFamily: variables.FONT_HEAVY}}>
                      I GET IT
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </AnimatedOverlay>
              
	          <ModalPicker options={ project.fixedPriceBundles }
	                       isOpen={this.state.showPriceChooser}
	                       onClosed={() => this.toggleShowPriceChooser(false)}
	                       title="Төcөв сонгох"
	                       onChange={(item) => this.priceChoosed(item)} 
	                       selectedOption={ project.selectedPriceBundle.id }
	                       selectedIndex={0}
	                       closeAfterChoosed={true}
	                       identity="id"
	                       label={(item) => item.description + ' - ' + item.min_amount + ' - ' + item.max_amount + ' ₮'}/>

	          <ModalPicker options={ project.durationTypes }
	                       isOpen={this.state.showDurationTypeChooser}
	                       onClosed={() => this.toggleShowDurationChooser(false)}
	                       title="Ажил үргэлжилэх төрөл сонгох"
	                       onChange={(item) => this.durationTypeChoosed(item)} 
	                       selectedOption={ project.selectedDurationType.id }
	                       selectedIndex={0}
	                       closeAfterChoosed={true}
	                       identity="id"
	                       label={(item) => item.label }/>   

	          <ModalPicker options={this.chooseDurationOptions()}
	                       isOpen={this.state.showDurationValueChooser}
	                       onClosed={() => this.toggleShowDurationValueChooser(false)}
	                       title="Хугацаа сонгох"
	                       onChange={(item) => this.durationValueChoosed(item)} 
	                       selectedOption={ project.durationValue }
	                       selectedIndex={0}
	                       closeAfterChoosed={true}
	                       identity="id"
	                       label={(item) => item }/>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 10,
  },

  scrollView: {
  	flex: 1,
  	// /backgroundColor: 'red',
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

export default connect(null, mapDispatchToProps)(NewProjectDetailComponent)