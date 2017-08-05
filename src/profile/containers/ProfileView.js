import React, {PropTypes,Component} from 'react'
import { 
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as profileActions from '../ProfileActions'
import { newProject } from '../../project/ProjectActions'

import StickyScrollView from '../../components/react-native-sticky-view'
import ProfileHeader from '../components/ProfileHeader'
import MyProjectsComponent from '../components/MyProjectsComponent'

function mapStateToProps (state) {
  return {
      profile: state.profile
  }
}

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(profileActions, dispatch),
      newProject: bindActionCreators(newProject, dispatch)
  }
}

class ProfileView extends Component {

  constructor(props) {
    super(props)
    this.onFetchMyProjectsHistory = this.onFetchMyProjectsHistory.bind(this)
    this.onFetchMyProjectsWorking = this.onFetchMyProjectsWorking.bind(this)
    this.onFetchMyProjectsBidded = this.onFetchMyProjectsBidded.bind(this)
    this.onStickyVisibility = this.onStickyVisibility.bind(this)
    this.onBookmarkDetailPressed = this.onBookmarkDetailPressed.bind(this)

    this.state = {
        onStickyState: false,
    }
  }

  onBookmarkDetailPressed() {
    Actions.BookmarkedProjectsView()
  }

  bidNavigation() {
    alert('bid')
  }

  gpNavigation() {
    alert('gp')
  }

  portfolioNavigation() {
      Actions.MyPortfolioView()
  }

  onStickyVisibility(state) {
      let {
        onStickyState
      } = this.state

      if(onStickyState != state) {
        this.setState({
           onStickyState: state,
        })  
      }
  }

  onFetchMyProjectsWorking(page, callback, options) {
      let {
        profile
      } = this.props

      callback(profile.get('workingOnProjects'), {
          allLoaded: true, // the end of the list is reached
      })
  }

  onFetchMyProjectsHistory(page, callback, options) {
      let {
        profile
      } = this.props

      callback(profile.get('historyProjects'), {
          allLoaded: true, // the end of the list is reached
      })
  }

  onFetchMyProjectsBidded(page, callback, options) {
      let {
        profile
      } = this.props

      callback(profile.get('biddedProjects'), {
          allLoaded: true, // the end of the list is reached
      })
  }

  render() {
    let {
      profile
    } = this.props

    let {
      onStickyState
    } = this.state
    
    return (
      <StickyScrollView style={{ flex: 1, backgroundColor: '#fff'}}//backgroundColor: '#F4F9FE'}}
                        stickyHeight={250}
                        onStickyVisibility={this.onStickyVisibility}
                        showsVerticalScrollIndicator={false}
      >
	      <ProfileHeader user={profile.get('user')}
                       lastBookmarks={profile.get('lastBookmarks')}
                       onBidNavigation={ () => this.bidNavigation()}
                       onGPNavigation={ () => this.gpNavigation()}
                       onPortfolioNavigation={ () => this.portfolioNavigation()}
                       onBookmarkDetailPressed={this.onBookmarkDetailPressed}
        />
	      <View style={{ flex: 1, }}>
          
        </View>
      </StickyScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)