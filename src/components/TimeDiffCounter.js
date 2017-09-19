import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text } from 'react-native'
import moment from 'moment'
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

export default class TimeDiffCounter extends Component {
	componentDidMount() {
      this.setInterval(
        () => { this.forceUpdate() },
        1000
      )
    }

    filterTimeLeft() {
		var { startTime } = this.props
		var seconds = moment(startTime).diff(moment(), 'second')

		return parseInt(seconds / 3600) + ' цаг ' + parseInt((seconds % 3600) / 60) + ' минут ' + (seconds % 60) + ' секунд'
	}

	render() {
		return (
			<Text style={styles.timeDiff}>{this.filterTimeLeft()}</Text>
		)
	}
}

var styles = StyleSheet.create({
	timeDiff: {
		fontSize: 12,
		color: '#3e474f',
		fontFamily: 'Lato-Heavy',
	}
})

reactMixin(TimeDiffCounter.prototype, TimerMixin)

TimeDiffCounter.propTypes = {
	startTime: PropTypes.string
}

TimeDiffCounter.defaultProps = {
	startTime: moment().add(5, 'hour'),
}