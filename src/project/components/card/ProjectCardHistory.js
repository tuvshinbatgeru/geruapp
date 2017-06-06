import React, { PropTypes, Component } from 'react'
import { 
  StyleSheet,
  View, 
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import variables, { font, layout } from '../../../styles/variables'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProjectCardBid extends Component {
  
  render () {
    let {
      project
    } = this.props

    return (
      <TouchableHighlight 
        underlayColor="#efefef"
        //onPress={() => this.props.onPress(project)}
      >
        <View style={[styles.container, layout.row]}>
            <View style={[{flex: 1}]}>
                {
                  project.recommended && (
                    <TouchableOpacity style={[layout.centerBetween, layout.row, { height: 20, borderRadius:35, /*backgroundColor: variables.BRAND_GREEN*/ }]
                    }>  
                        <View style={[{ width: 200, justifyContent: 'center', }]}>
                          <Icon name="ios-heart"
                                size={20}
                                color={variables.BRAND_RED}
                          />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', }}>
                          <Text style={[{ fontFamily: font.regular, fontSize: 12, }]}>САЙШААГДСАН</Text>
                        </View>
                    </TouchableOpacity>
                  )
                }
                <View style={[layout.row, { paddingVertical: 10, paddingRight: 10,}]}>
                    <View style={[layout.centerCenter, layout.row, { flex: 1, }]}>
                      <View style={[ layout.centerCenter, { width: 40, }]}>
                        <View style={[styles.circleIndicator, { borderColor: '#9299A7' }]} />
                      </View>
                      
                      <Text style={[layout.h2, { flex: 1, }]}>{project.name}</Text>
                    </View>

                    <View style={[layout.endCenter, { width: 20, }]}>
                      
                    </View>
                </View>
                <View style={[layout.row, layout.centerCenter, { paddingVertical: 5,}]}>
                  <View style={[layout.row, layout.centerStart, { width: 200, }]}>
                        <Icon name="md-pricetag"
                              size={20}
                              color={"#9299A7"}/>
                        <Text style={{fontFamily: font.regular, marginLeft: 5,}}>Төслийн үнэ</Text>
                  </View>
                  <Text style={[{ fontFamily: font.regular, color: variables.BRAND_RED, flex: 1, }]}>{project.price}₮</Text>
                </View>

                <View style={[layout.row, layout.centerBetween, { paddingRight: 10, }]}>
                  <View style={[layout.row, layout.centerStart, { width: 200, }]}>
                        <Icon name="md-calendar"
                              size={20}
                              color={"#9299A7"}/>
                        <Text style={{fontFamily: font.regular, marginLeft: 5,}}>Үргэлжилсэн хугацаа</Text>
                  </View>
                  <Text style={[{ alignItems: 'flex-end', justifyContent: 'center', fontFamily: font.regular, flex: 1, }]}>{project.end_date}</Text>
                </View>
                <View style={[layout.row, layout.centerCenter, { paddingVertical: 5, }]}>
                    <Image style={styles.avatar}
                           source={{ uri: project.hirer.avatar_url}}
                    />                    
                    <View style={[layout.row, { flex: 1, marginLeft: 10, }]}>
                        <View style={[layout.startCenter]}>
                          <Text style={[{fontFamily: font.bold}]}>{project.hirer.first_name} {project.hirer.last_name}</Text>
                          <Text style={[{fontFamily: font.regular}]}>Төслийн үнэлгээ </Text>
                        </View>
                          <View style={[layout.row, layout.centerCenter, { flex: 1, paddingRight: 10, }]}>
                              <Text style={[{fontFamily: font.regular, color: variables.BRAND_GREEN, fontSize: 18}]}>
                                {project.feedback}
                              </Text> 
                          <View />
                        </View>
                    </View>
                </View>
            </View>
        </View>
      </TouchableHighlight>
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
    },

    avatar: {
        height: 30,
        width: 30,
        borderRadius: 30,
    }
})

ProjectCardBid.propTypes = {
  project: PropTypes.object,
}
