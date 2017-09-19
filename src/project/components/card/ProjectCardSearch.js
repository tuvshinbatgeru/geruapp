import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet,
	View, 
	Text,
	TouchableOpacity
} from 'react-native'
import variables, { font, layout } from '../../../styles/variables'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProjectCardSearch extends Component {
  
  render () {
  	let {
  		project
  	} = this.props

    return (
      <TouchableOpacity 
        underlayColor="#efefef"
        onPress={() => this.props.onPress(project)}
      >
        <View style={[styles.container, layout.row]}>
            <View style={[{flex: 1}]}>
                <View style={[layout.row, { paddingVertical: 3, paddingRight: 10,}]}>
                    <View style={[layout.centerCenter, layout.row, { flex: 1, }]}>
                      <View style={[ layout.centerCenter, { width: 40, }]}>
                        <View style={[styles.circleIndicator, { borderColor: '#FE5F55' }]} />
                      </View>
                      
                      <Text style={[layout.h2, { flex: 1, }]}>{project.name}</Text>
                    </View>

                    <View style={[layout.endCenter, { width: 20, }]}>
                      <Icon name="md-more"
                            size={30}
                            color={variables.BRAND_GRAY}
                      />
                    </View>
                </View>
                <View style={[layout.row, layout.centerCenter, ]}>
                  <View style={[layout.row, layout.centerStart, { width: 170, }]}>
                        <Icon name="md-pricetag"
                              size={20}
                              color={"#9299A7"}/>
                        <Text style={{fontFamily: font.regular, marginLeft: 5,}}>Төсөв</Text>
                  </View>
                  <Text style={[{ fontFamily: font.regular, color: variables.BRAND_RED, flex: 1, }]}>{project.min_amount}₮ - {project.max_amount}₮</Text>
                </View>
                <View style={[layout.centerBetween, { paddingVertical: 5,}]}>
                  <View style={[layout.row, layout.centerCenter, ]}>
                    <View style={[layout.row, layout.centerStart, { width: 170, }]}>
                        <Icon name="ios-contacts"
                              size={20}
                              color={"#9299A7"}/>
                        <Text style={{fontFamily: font.regular, marginLeft: 5,}}>Нийт санал</Text>
                    </View>

                    <Text style={[{flex: 1, fontFamily: font.regular, }]}>{ project.bids_count }</Text>
                  </View>
                </View>

                <View style={[layout.row, layout.centerBetween, { paddingRight: 10, }]}>
                  <View style={[layout.row, layout.centerStart, { width: 170, }]}>
                        <Icon name="md-calendar"
                              size={20}
                              color={"#9299A7"}/>
                        <Text style={{fontFamily: font.regular, marginLeft: 5,}}>Шалгаруулах огноо</Text>
                  </View>
                  <Text style={[{ fontFamily: font.regular, flex: 1, }]}>{project.award_time}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: variables.BRAND_WHITE,
        borderRadius: 5,
        paddingVertical: 20,
        paddingRight: 10,
        paddingLeft: 20, 
    },

    circleIndicator: {
        width: 15,
        height: 15,
        borderRadius: 5,
        borderWidth: 3,
    }
})

ProjectCardSearch.propTypes = {
	project: PropTypes.object,
}
