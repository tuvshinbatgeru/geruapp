import React, { Component } from "react"
import store from "./store"
import Platform from 'Platform'
import { Provider } from 'react-redux'
import ApplicationContainerAndroid from './app_container/ApplicationContainerAndroid'
import ApplicationContainerIOS from './app_container/ApplicationContainerIOS'

export default class geruApp extends Component {
  render() {
    return (
      <Provider store={store}>
        {
          Platform.OS === 'ios' ?
          <ApplicationContainerIOS/> :
          <ApplicationContainerAndroid/>
        }
      </Provider>
    )
  }
}
