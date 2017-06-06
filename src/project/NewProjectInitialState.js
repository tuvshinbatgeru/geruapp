/**
 * # authInitialState.js
 *
 * This class is a Immutable object
 * Working *successfully* with Redux, requires
 * state that is immutable.
 * In my opinion, that can not be by convention
 * By using Immutable, it's enforced.  Just saying....
 *
 */
'use strict'
/**
 * ## Import
 */
import { Record, List } from 'immutable'

/**
 * ## Form
 * This Record contains the state of the form and the
 * fields it contains.
 */
const Form = Record({
  disabled: false,
  error: {field: 'title', message: 'Гарчиг оруулна уу.'},
  isValid: false,
  isFetching: false,
  fields: new (Record({
    title: '',
    titleHasError: false,
    titleErrorMsg: '',
    description: '',
    descriptionHasError: false,
    descriptionErrorMsg: '',
    awardDate: new Date(),
    awardTime: '12:30',
  }))()
})

/**
 * ## InitialState
 * The form is set
 */
var InitialState = Record({

  fetching: false,
  fetched: false,
  error: null,
  form: new Form(),

  //1. Wizard
  tags: Record({
    fetching: false,
    suggested: [],
    selected: [],
  })(),

  //2. Project Images
  files: Record({
    /*selectedFiles: [{
        url: 'http://ur-undrakh.com/files/images/20170106/EM/M-240.JPG',
        ratio: 1.62
    }, {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/c-41-copy.jpg',
            ratio: 1.9
    }, {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
            ratio: 1.1
    },  {
            url: 'http://ur-undrakh.com/files/images/20170106/EM/m-225-copy.jpg',
            ratio: 1.1
    }],*/
    selectedFiles: Record({
      count: 0,
      data: [],
    })(),
    imagesTabs: List([
      Record({
        key: 'take',
        label: 'Take',
      })(),
      Record({
        key: 'suggested',
        label: 'Suggested',
        fetching: false,
        data: []
      })(), 
      Record({
        key: 'bookmarked',
        label: 'Bookmarked',
        fetching: false,
        data: []
      })(),
    ]),
  })(),

  selectedPriceBundle: {
    id: 1,
    min_amount: 5000,
    max_amount: 20000,
    description: 'Авсаархан',
  },

  fixedPriceBundles: [{
    id: 1,
    min_amount: 5000,
    max_amount: 20000,
    description: 'Авсаархан',
  }, {
    id: 2,
    min_amount: 20000,
    max_amount: 100000,
    description: 'Хурган'
  }, {
    id: 3,
    min_amount: 100000,
    max_amount: 1000000,
    description: 'Том'
  }, {
    id: 4,
    min_amount: 1000000,
    max_amount: 5000000,
    description: 'Төсөл'
  }],

  selectedDurationType: {
    id: 2,
    label: 'Өдөр'
  },

  durationValue: 7,

  durationTypes: [{
    id: 1,
    label: 'Цаг',
  }, {
    id: 2,
    label: 'Өдөр',
  }, {
    id: 3,
    label: 'Сар',
  }],

  photos: [],  
})

export default InitialState
