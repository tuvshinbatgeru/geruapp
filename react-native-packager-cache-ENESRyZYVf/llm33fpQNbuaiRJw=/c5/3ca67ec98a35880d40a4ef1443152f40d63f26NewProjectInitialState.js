
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var Form = (0, _immutable.Record)({
  disabled: false,
  error: { field: 'title', message: 'Гарчиг оруулна уу.' },
  isValid: false,
  isFetching: false,
  fields: new ((0, _immutable.Record)({
    title: '',
    titleHasError: false,
    titleErrorMsg: '',
    description: '',
    descriptionHasError: false,
    descriptionErrorMsg: '',
    awardDate: new Date(),
    awardTime: '12:30'
  }))()
});

var InitialState = (0, _immutable.Record)({

  fetching: false,
  fetched: false,
  error: null,
  form: new Form(),

  tags: (0, _immutable.Record)({
    fetching: false,
    suggested: [],
    selected: []
  })(),

  files: (0, _immutable.Record)({
    selectedFiles: (0, _immutable.Record)({
      count: 0,
      data: []
    })(),
    imagesTabs: (0, _immutable.List)([(0, _immutable.Record)({
      key: 'take',
      label: 'Take'
    })(), (0, _immutable.Record)({
      key: 'suggested',
      label: 'Suggested',
      fetching: false,
      data: []
    })(), (0, _immutable.Record)({
      key: 'bookmarked',
      label: 'Bookmarked',
      fetching: false,
      data: []
    })()])
  })(),

  selectedPriceBundle: {
    id: 1,
    min_amount: 5000,
    max_amount: 20000,
    description: 'Авсаархан'
  },

  fixedPriceBundles: [{
    id: 1,
    min_amount: 5000,
    max_amount: 20000,
    description: 'Авсаархан'
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
    label: 'Цаг'
  }, {
    id: 2,
    label: 'Өдөр'
  }, {
    id: 3,
    label: 'Сар'
  }],

  photos: []
});

exports.default = InitialState;