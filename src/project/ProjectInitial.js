'use strict'

import { Map, Record, List } from 'immutable'

var InitialState = Record({
  fetching: false,
  error: null,

  selectedProject: Record({
    index: 0,
    project: {}
  })(),

  filteredProjects: Record({
    fetching: false,
    pageLast: 0,
    data: [],
    fullData: [],
    filters: Record({
      skills: [],
    })(),
  })(),
})

export default InitialState