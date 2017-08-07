"use strict"

import React, { Component } from "react"
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { 
  View,
  Text, 
  StyleSheet,
} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import { navigatePop, tabChanged } from '../navigation/actions/navigationActions'
import Badge from 'react-native-smart-badge'

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import brandLocationConfig from '../brand/selection.json'
const IconSet = createIconSetFromIcoMoon(brandLocationConfig)

//Views
import MessageView from '../navigation/views/MessageView'
import NotificationView from '../notification/containers/NotificationView'
import ProfileView from '../profile/containers/ProfileView'
import DashboardView from '../navigation/views/DashboardView'
import ShowcaseView from '../showcase/containers/ShowcaseView'

import variables, { font, layout } from '../styles/variables'

class TabbarView extends Component {

  changeTab (currentTab) {
    if(currentTab == "newproject") {
      return Actions.ProjectTagsChooser()
    }

    this.props.tabChanged(currentTab)
  }

  notificationRenderBadge (notificationCount) {
      return notificationCount != 0 ? (
          <Badge minWidth={15} 
                 minHeight={15} 
                 extraPaddingHorizontal={4}
                 textStyle={{color: '#fff',}} 
                 style={styles.badget}>
              {notificationCount}
          </Badge>) : null
  }

  renderTabViewItem (route) {
      const { currentTab } = this.props.navigation
      var content = {}

      switch(route.key) {
        case "showcase": 
          content = <ShowcaseView />
          break
        case "message":
          content = <MessageView />
          break
        case "notification":
          content = <NotificationView />
          break
        case "project":
          content = <DashboardView />
          break
        case "profile":
          content = <ProfileView />
          break
        default :
          break
      }

      return <TabNavigator.Item 
                    key={route.key}
                    selected={currentTab === route.key}
                    renderBadge={() => this.notificationRenderBadge(route.notificationCount)}
                    renderIcon={() => 
                        <View style={[layout.centerCenter, { height: 40, width: 40, }]}>
                          <IconSet color={route.color} 
                                   name={route.icon} 
                                   size={route.iconSize}
                          />
                        </View>
                    }
            
                    renderSelectedIcon={() => 
                        <View style={[layout.centerCenter, { height: 40, width: 40, }]}>
                          <IconSet color={route.activeColor} 
                                   name={route.icon} 
                                   size={route.iconSize} 
                          />
                        </View>
                    }
                    onPress={() => this.changeTab(route.key)}
              >
                  {content}
              </TabNavigator.Item>
  }

  render() {
      var tabItems = []
      _.forEach(this.props.navigation.routes, (route) => {
          tabItems.push(
              this.renderTabViewItem(route)
          )
      })

      let tabHeight = 60

      return (
          <View style={{flex: 1, }}>
            <TabNavigator tabBarStyle={{backgroundColor: '#fff', height: tabHeight, }}
                          tabBarShadowStyle={{backgroundColor: variables.BRAND_SUBCOLOR, height: 0}}
                          sceneStyle={{ paddingBottom: tabHeight }}>
                {tabItems}
            </TabNavigator>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabView: {
    flex: 1,
    padding: 5,
    backgroundColor: '#242424',
    //backgroundColor: 'rgba(62,71,79,0.01)',
  },

  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 600,
    width: 300,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },

  badget: {
    backgroundColor: '#f66f6f', 
    marginTop: 8,
    borderColor: '#fff', 
    borderWidth: 2,
  }
});

export default connect(
  state => ({
      navigation: state.navigationState
  }),

  dispatch => ({
      tabChanged: (currentTab) => {
        dispatch(tabChanged(currentTab))
      },
      backAction: () => {
        dispatch(navigatePop())
      }
  })
)(TabbarView)