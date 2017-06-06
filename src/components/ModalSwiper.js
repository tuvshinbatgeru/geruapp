import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import Modal from 'react-native-modalbox'
import Swiper from 'react-native-swiper'
import ProjectComponent from '../project/components/ProjectComponent'
import { Icon } from 'react-native-elements'
import * as projectActions from '../project/ProjectActions'

const { width, height } = Dimensions.get('window')

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators(projectActions, dispatch)
  }
}

class ModalSwiper extends Component {
	
	componentDidMount() {
		var { selectedProject } = this.props
		//alert(selectedProject.get('index'))
		//this.swiper.scrollBy(selectedProject.get('index'), false)
		//alert(this.props.projects.length)
	}

	onSwipeNavigate(e, state, context) {
		var { projects } = this.props
		this.props.onSwipeNavigate(projects[state.index])
	}

	onBidPressed(project) {
		Actions.ProjectBid()
	}

	closed() {
		this.refs.modal.close()
		//this.props.closed()
	}

	render() {
		let { projects, bids_count } = this.props

		return (
			<Modal ref={"modal"}
				   swipeToClose={false} 
	               animationDuration={200}
	               onClosed={this.props.onClosed}
	               backButtonClose={true}
	               isOpen={this.props.isOpen} 
	               style={styles.modal}>
				<Swiper style={styles.wrapper}
					showsPagination={false}
		            loop={false}
		            onMomentumScrollEnd={this.onSwipeNavigate.bind(this)}
		            ref={(swiper) => { this.swiper = swiper }} >
			        {
			        	projects.map((item, i) => (
			        		<ProjectComponent 
			        				project={item}
			        				bids_count={bids_count}
			        				onBidPressed={this.onBidPressed.bind(this)}/>
			        	))
			        }
			    </Swiper>	
			    <View style={styles.closeContainer}>
			    	<TouchableOpacity onPress={this.closed.bind(this)}>
			    		<Icon name="md-close"
							  type="ionicon"
							  color="#b5b5b5"
							  size={30} 
							  style={styles.closeBtn}/>
			    	</TouchableOpacity>
			    </View>	
			</Modal>
		)
	}
}

ModalSwiper.propTypes = {
	isOpen: PropTypes.bool,
	selectedProject: PropTypes.object,
	projects: PropTypes.array,
	bids_count: PropTypes.number,
}

ModalSwiper.defaultProps = {
	bids_count: 7,
	isOpen: false,
}

var styles = StyleSheet.create({
	closeContainer: {
		position: 'absolute',
		top: 5,
		left: 5,
		height: 32,
		width: 32,
	},

	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)'
	},

	projectContainer: {
		margin: 20,
		flex: 1,
	},

	projectHeader: {
		flex: 2,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		backgroundColor: 'rgba(0,0,0,0.3)'
	},

	projectBody: {
		flex: 3,
	},

	
})

export default connect(null, mapDispatchToProps)(ModalSwiper)