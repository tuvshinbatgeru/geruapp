/**
 * # BackendFactory
 *
 * This class sets up the backend by checking the config.js
 *
 */
'use strict'

import CONFIG from './env'
import { laravel } from './Laravel'

export default function BackendFactory (token = null) {  
  if (CONFIG.backend.laravelRemote || CONFIG.backend.laravelLocal) {
    laravel.initialize(token)
    return laravel
  }
}