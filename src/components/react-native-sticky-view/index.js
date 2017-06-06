import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet,
	ScrollView,
} from 'react-native'

export default class StickyScrollView extends Component {
  
  constructor(props) {
    super(props)
  
    this._onScroll = this._onScroll.bind(this)
  }

  _onScroll(e) {
    let {
  		stickyHeight
  	} = this.props
  //  this._maybeUpdateScrollPosition(e);

  	if(this.props.onStickyVisibility == null) return

    if (e.nativeEvent.contentOffset.y >= stickyHeight) {
      this.props.onStickyVisibility(true)
    } else {
      this.props.onStickyVisibility(false)
    }
  }

  render () {
    return (
      <ScrollView {...this.props}
      			  onScroll={this._onScroll}
      >
      	{ this.props.children }
      </ScrollView>
    )
  }
}

StickyScrollView.propTypes = {
	scrollTop: PropTypes.number.isRequired,
	onStickyVisibility: PropTypes.func,
}

StickyScrollView.defaultProps = {
	
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
