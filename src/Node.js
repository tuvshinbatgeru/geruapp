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
import querystring from 'querystring'

export class Node {
  
  initialize (token) {

    if (!_.isNull(token) && _.isUndefined(token.sessionToken)) {
      throw new Error('TokenMissing')
    }

    this._sessionToken = _.isNull(token) ? null : token.sessionToken.sessionToken
    this.API_BASE_URL = CONFIG.backend.nodeLocal
    ? CONFIG.node.local.url
    : CONFIG.node.remote.url

    //alert(this.API_BASE_URL)
  }

  login(data) {
    
  }

  getShowcaseByTags(params) {
    return axios.get(this.API_BASE_URL + 'showcase/tag?'+ 
      querystring.stringify({
        page: params.page,
        tags: []  
      }))
  }

  getShowcaseSuggestedTags(data) {
    return axios.get(this.API_BASE_URL + 'tag/suggested', {
      params: data
    })
  }

  getTagAutoComplete(params) {
    return axios.get(this.API_BASE_URL + 'tag/auto_complete', { 
      params
    })
  }

  getMyBookmark(data) {
    return axios.get(this.API_BASE_URL + 'user/' + data.user_id + '/bookmark')
  }

  //tags
  getTags(filter) {
      return axios.get(this.API_BASE_URL + 'tag?' + querystring.stringify({
        tags: filter.tags ? filter.tags : [],
      }),  {
        params: filter
      })
  }

  saveProject(data) {
      return axios.post(this.API_BASE_URL + 'api/project', data.formData)
  }
  
}

export let node = new Node()