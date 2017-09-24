"use strict"

import React, { Component } from "react"
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import { 
  Animated,
  Easing,
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
  constructor(props) {
    super(props);
  
    this.state = {
      tabBarVisible: true,
      ...this.calculateTabItem(props, true),
    }

    this.animatedValue = new Animated.Value(0)

    this.calculateTabItem = this.calculateTabItem.bind(this)      
    this.toggleTabBarVisible = this.toggleTabBarVisible.bind(this)      
    this.renderTabViewItem = this.renderTabViewItem.bind(this)      
    this.doAnimate = this.doAnimate.bind(this)
  }

  doAnimate() {
    this.animatedValue.setValue(!this.state.tabBarVisible ? 60 : 0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: this.state.tabBarVisible ? 0 : 60,
        duration: 200,
        easing: Easing.linear,
      }
    ).start()
  }

  toggleTabBarVisible(state) {
    //alert(state)
    this.setState({
      tabBarVisible: !state
    })
  }

  calculateTabItem({ navigation }, tabBarVisible) {
      let tabItems = []

      for(let i = 0; i < navigation.routes.length; i ++) {
          tabItems.push(this.renderTabViewItem(navigation.routes[i], tabBarVisible))
      }

      return { tabItems }
  }

  componentWillReceiveProps(nextProps) {
     this.setState(this.calculateTabItem(nextProps), this.state.tabBarVisible) 
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tabBarVisible != this.state.tabBarVisible)
      this.doAnimate()
  }

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

  renderTabViewItem (route, tabBarVisible) {
      const { currentTab } = this.props.navigation
      //let { tabBarVisible } = this.state
      var content = {}
      //alert(tabBarVisible)
      //

      switch(route.key) {
        case "showcase": 
          content = <ShowcaseView tabBarVisible={tabBarVisible} onToggleTabBar={(visibleState) => null}/>
          //content = <ShowcaseView tabBarVisible={tabBarVisible} onToggleTabBar={(visibleState) => }/>
          //content = <ShowcaseView tabBarVisible={tabBarVisible}/>
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
      let {
        tabBarVisible,
        tabItems
      } = this.state

      return (
          <View style={{ flex: 1, }}>
            <TabNavigator tabBarStyle={{backgroundColor: '#fff', height: tabBarVisible ? 60 : 0, }}
                                   tabBarShadowStyle={{backgroundColor: variables.BRAND_SUBCOLOR, height: 0}}
                                   sceneStyle={{ paddingBottom: tabBarVisible ? 60 : 0, }}>
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