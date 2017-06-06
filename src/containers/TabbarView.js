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

//Views
import MessageView from '../navigation/views/MessageView'
import NotificationView from '../notification/containers/NotificationView'
import ProfileView from '../profile/containers/ProfileView'
import DashboardView from '../navigation/views/DashboardView'
import ShowcaseView from '../showcase/containers/ShowcaseView'

import variables from '../styles/variables'

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

  renderTabViewItem (key, title, iconType, icon, notificationCount) {
      const { currentTab } = this.props.navigation
      var content = {}

      switch(key) {
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
                    key={key}
                    selected={currentTab === key}
                    renderBadge={() => this.notificationRenderBadge(notificationCount)}
                    renderIcon={() => 
                        <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} 
                              color={'#9299A7'} 
                              name={icon} 
                              size={30} 
                        />
                    }
            
                    renderSelectedIcon={() => 
                        <Icon containerStyle={{justifyContent: 'flex-end', alignItems: 'center', marginTop: 12}}
                              color={variables.BRAND_RED} 
                              name={icon} 
                              size={30} 
                        />
                    }
                    onPress={() => this.changeTab(key)}
              >
                  {content}
              </TabNavigator.Item>
  }

  render() {
      var tabItems = []
      _.forEach(this.props.navigation.routes, (route) => {
          tabItems.push(
              this.renderTabViewItem(route.key, route.title, route.iconType, route.icon, route.notificationCount)
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
  badget: {
    backgroundColor: variables.BRAND_RED, 
    marginTop: 10, 
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