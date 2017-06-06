/**
 * # LoginForm.js
 *
 * This class utilizes the ```tcomb-form-native``` library and just
 * sets up the options required for the 3 states of Login, namely
 * Login, Register or Reset Password
 *
 */
'use strict'
/**
 * ## Import
 *
 * React
 */
import React, {PropTypes} from 'react'
import moment from 'moment'
import _ from 'lodash'


var t = require('tcomb-form-native')
var stylesheet = require('../../styles/customTcombStyle')
var datePickerStylesheet = _.cloneDeep(stylesheet)

datePickerStylesheet.fieldset = {
  flexDirection: 'row'
}

datePickerStylesheet.formGroup.normal.flex = 1
datePickerStylesheet.formGroup.normal.marginLeft = 5
datePickerStylesheet.formGroup.error.flex = 1

var titleStylesheed = _.cloneDeep(stylesheet)
titleStylesheed.textbox.normal.height = 36

t.form.Form.stylesheet = stylesheet
let Form = t.form.Form

var ProjectForm = React.createClass({
  /**
   * ## LoginForm class
   *
   * * form: the properties to set into the UI form
   * * value: the values to set in the input fields
   * * onChange: function to call when user enters text
   */
  propTypes: {
    form: PropTypes.object,
    value: PropTypes.object,
    onChange: PropTypes.func
  },

  customDateFormat (date) {
    return moment(date).format('YYYY/MM/DD')
    /*return moment(date).format('YYYY/MM/DD') + 
           ' (' + moment(date).diff(moment(), 'hours') + ' цаг дутуу)'*/
  },

  customTimeFormat (date) {
    return moment(date).format('HH:mm')
  },


  /**
   * ## render
   *
   * setup all the fields using the props and default messages
   *
   */
  render () {
    var options = {
      fields: {}, 
      stylesheet: stylesheet
    }

    let title = {
        label: 'Гарчиг',
        maxLength: 50,
        stylesheet: titleStylesheed,
        editable: !this.props.form.isFetching,
        hasError: this.props.form.fields.titleHasError,
        error: this.props.form.fields.titleErrorMsg
    }

    let description = {
        label: 'Тайлбар',
        numberOfLines: 3,
        multiline: true,  
        editable: !this.props.form.isFetching,
        hasError: this.props.form.fields.descriptionHasError,
        error: this.props.form.fields.descriptionErrorMsg
    }

    let awardDate = {
        label: 'Шалгаруулах өдөр',
        mode: 'date',
    }

    let awardTime = {
        label: 'Шалгаруулах цаг',
        mode: 'time'
    }

    let projectForm = t.struct({
        title: t.String,
        description: t.String,
        awardDateTime: t.struct({
            awardDate: t.Date,
            awardTime: t.Date,
        })
    })
    
    options.fields['title'] = title
    options.fields['title'].placeholder = 'Ажлын гарчиг оруулна уу'

    options.fields['description'] = description
    options.fields['description'].placeholder = 'Ажлын тайлбар оруулна уу'


    options.fields['awardDateTime'] = {
        label: ' ',
        fields: {
            awardDate: awardDate,
            awardTime: awardTime, 
        },

        stylesheet: datePickerStylesheet
    }

    options.fields['awardDateTime'].fields['awardDate'].config = {
        format: (date) => this.customDateFormat(date),
    }

    options.fields['awardDateTime'].fields['awardTime'].config = {
        format: (date) => this.customTimeFormat(date),
    }

    return (
      <Form ref='form'
        type={projectForm}
        options={options}
        value={this.props.value}
        onChange={this.props.onChange}
      />

    )
  }
})

module.exports = ProjectForm
