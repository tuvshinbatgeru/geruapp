'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var InitialState = (0, _immutable.Record)({
  fetching: false,
  error: null,

  selectedProject: (0, _immutable.Record)({
    index: 0,
    project: {}
  })(),

  filteredProjects: (0, _immutable.Record)({
    fetching: false,
    pageLast: 0,
    data: [],
    fullData: [],
    filters: (0, _immutable.Record)({
      skills: []
    })()
  })()
});

exports.default = InitialState;