import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native'
import variables from '../styles/variables'

const ProjectTabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue)
  },

  setAnimationValue({ value, }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i))
      
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      })
    })
  },

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return 'rgb(${red}, ${green}, ${blue})'
  },

  render() {
    const containerWidth = this.props.containerWidth
    const numberOfTabs = this.props.tabs.length
    const tabUnderlineStyle = {
      position: 'absolute',
      width: (containerWidth / numberOfTabs) - 2,
      //backgroundColor: '#FE5F55',
      height: 2,
      bottom: 5,
      marginLeft: 2,
      marginRight: 2,
      paddingHorizontal: 20,
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    })

    let {
      fixed
    } = this.props

    return <View style={[styles.tabs, false ? styles.fixedTabs: '', this.props.style]}>
      {
        this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <View style={styles.tabContainer}>
                <Text style={[styles.tabText, this.props.activeTab === i ? styles.activeTab : '']}
                      ref={(text) => { this.tabIcons[i] = text }}>{tab}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
      <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]}>
          <View style={{ height: 2, width: 50, borderRadius: 10, backgroundColor: '#FE5F55',}}/>
      </Animated.View>
    </View>
  },
});

const styles = StyleSheet.create({
  tabContainer: {
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabText: {
    color: '#b5b5b5',
    fontFamily: variables.FONT_REGULAR,
  },

  activeTab: {
    color: '#555555',
    fontFamily: variables.FONT_BOLD,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },

  tabs: {
    height: 40,
    flexDirection: 'row',
    //backgroundColor: '#fff',
    //backgroundColor: 'transparent',
    justifyContent: 'space-around',
    borderRadius: 5,
  },

  fixedTabs: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 2,
  }
});

export default ProjectTabBar;