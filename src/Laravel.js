/**
 * # Parse.js
 *
 * This class interfaces with parse-server using the rest api
 * see [https://parseplatform.github.io/docs/rest/guide/]
 *
 */
'use strict'

/**
 * ## Imports
 *
 * Config for defaults and underscore for a couple of features
 */
import CONFIG from './env'
import _ from 'underscore'
import axios from 'axios'

export class Laravel {
  
  initialize (token) {
    if (!_.isNull(token) && _.isUndefined(token.sessionToken)) {
      throw new Error('TokenMissing')
    }

    this._sessionToken = _.isNull(token) ? null : token.sessionToken.sessionToken
    this.API_BASE_URL = CONFIG.backend.laravelLocal
    ? CONFIG.LARAVEL.local.URL
    : CONFIG.LARAVEL.remote.URL
  }

  login(data) {
    
  }

  //tags
  getTags(filter) {

      let data = new FormData()
      data.append('searchValue', filter.searchValue)
      data.append('tags', String(filter.tags))

      return axios.post(this.API_BASE_URL + 'api/tag/mobile', data)
  }

  saveProject(data) {
      return axios.post(this.API_BASE_URL + 'api/project', data.formData)
  }
  
}

export let laravel = new Laravel()