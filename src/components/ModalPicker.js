import React, { Component, PropTypes, Animated } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modalbox'
import _ from 'lodash'

export default ModalPicker = React.createClass({
	propTypes: {
		style: PropTypes.func,
		disabled: PropTypes.bool,
		options: PropTypes.array,
		selectedIndex: PropTypes.number,
		onChange: PropTypes.func,
		onClosed: PropTypes.func,
		label: PropTypes.func,
		initLabel: PropTypes.string,
		isOpen: PropTypes.bool,
		title: PropTypes.string,
		closed: PropTypes.func,
		closeAfterChoosed: PropTypes.bool,
		selectedOption: PropTypes.any,
		identity: PropTypes.string,
		multiple: PropTypes.bool,
  	},

  	getDefaultProps: function () {
	    return {
	      selectedIndex: -1,
	      selectedOption: -1,
	      initLabel: 'Сонгох',
	      onChange: ()=> {},
	      onClosed: ()=> {},
	      disabled: false,
	      options: [],
	      closed: null,
	      closeAfterChoosed: true,
	      multiple: false,
	    }
	},

	getInitialState() {
	    return {
	    	loaded: false,
	    }
	},

	setChoosed(item) {
		this.props.onChange(item)
		if(this.props.multiple)
			this.forceUpdate()
		if(this.props.closeAfterChoosed) 
			this.closed()
	},

	closed() {
		this.refs.modal.close()
		//this.props.closed()
	},

	_renderItemStyle(item) {
		if(this.props.multiple) {
			var isSelected = false
			_.forEach(this.props.selectedOption, (option) => {
				if(option[this.props.identity] == item[this.props.identity]) {
					isSelected = true
					return false
				}
		    })

		    return isSelected ? styles.selectedOption : styles.regularOption
		}

		if(item instanceof Object) {
			return this.props.selectedOption === item[this.props.identity] ? styles.selectedOption : styles.regularOption
		}
		
		return this.props.selectedOption == item ? styles.selectedOption : styles.regularOption
	},

	render() {
		return <Modal swipeToClose={false} 
		              animationDuration={200}
		              isOpen={this.props.isOpen} 
		              ref={"modal"}
		              onClosed={this.props.onClosed}
		              style={[styles.modal, styles.modal4]} 
		              position={"bottom"}>
		        <View style={{height: 70}}>
					<View style={styles.header}>
						<TouchableOpacity onPress={this.closed}>
							<Icon name="md-close"
								  color="#b5b5b5"
								  size={30} 
								  style={styles.closeBtn}/>
						</TouchableOpacity>
						<Text style={styles.title}>{this.props.title}</Text>
					</View>
				</View>
				<ScrollView
		          automaticallyAdjustContentInsets={false}
		          style={styles.scrollView}>
		            
		          {
		          	this.props.options.map((item, i) => (

		          		<TouchableOpacity key={i} onPress={() => this.setChoosed(item)} style={styles.item}>
		          			<Text style = {[
		          				styles.label, 
		          				this._renderItemStyle(item)
		          			]}>{this.props.label(item)}</Text>
					    </TouchableOpacity>

		          	))
		          }

		            
		        </ScrollView>
			</Modal>
	}
})

var styles = StyleSheet.create({
	modal: {
		height: 300,
  	},

  	modal4: {

  	},

  	header: {
  		flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
  	},

  	scrollView: {
	    padding: 20,
    },

    item: {
    	height: 50,
    	backgroundColor: 'rgba(0,0,0,0)',
    },

  	title: {
  		marginLeft: 10,
  		fontFamily: 'Lato-Black',
  		fontSize: 20,
  		color: '#3e474f',
  	},

	closeBtn: {

	},

	label: {
		fontSize: 17,
		backgroundColor: 'rgba(0,0,0,0)',
	},

	selectedOption: {
		fontFamily: 'Lato-Black',
		color: '#3e474f'
	}, 

	regularOption: {
		color: '#b5b5b5',
		fontFamily: 'Lato-Medium'
	}
})