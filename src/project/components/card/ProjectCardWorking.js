import React, { PropTypes, Component } from 'react'
import { 
	StyleSheet,
	View, 
	Text,
  TouchableOpacity,
	TouchableHighlight,
  Image,
  Dimensions
} from 'react-native'
import variables, { font, layout } from '../../../styles/variables'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'

let screen = Dimensions.get('window')

export default class ProjectCardWorking extends Component {
  
  render () {
  	let {
  		project
  	} = this.props

    return (
      <TouchableHighlight 
        underlayColor="#efefef"
        //onPress={() => this.props.onPress(project)}
      >
        <View style={[layout.centerCenter, styles.container]}>
          <View style={[layout.row, { paddingVertical: 10, paddingRight: 10,}]}>
              <View style={[layout.centerCenter, layout.row, { flex: 1, }]}>
                <View style={[ layout.centerCenter, { width: 40, }]}>
                  <View style={[styles.circleIndicator, { borderColor: '#5fcf80' }]} />
                </View>
                
                <Text style={[layout.h2, { flex: 1, }]}>{project.name}</Text>
              </View>

              <View style={[layout.endCenter, { width: 20, }]}>
                {/*<Icon name="md-more"
                      size={30}
                      color={variables.BRAND_GRAY}
                />*/}
              </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{uri: project.cover}} 
                   style={styles.image}
            />
          </View>

          <View style={[layout.row, layout.centerBetween, { paddingHorizontal: 10, paddingTop: 10, paddingBottom: 3, }]}>
            <View style={[layout.row, { alignItems: 'center', justifyContent: 'flex-start', width: 120}]}>
                <Icon name="md-time"
                      size={20}
                      color={"#9299A7"}
                />
                <Text style={{fontFamily: font.regular, marginLeft: 5,}}>Хүлээлгэн өгөх</Text>
            </View>
            <View style={[layout.row, layout.centerEnd, { flex: 1, }]}>
              <Text style={[{ fontFamily: font.bold, marginLeft: 5, }]}>{project.end_date}</Text>
            </View>
          </View>
          
          <View style={[layout.row, layout.centerBetween, { paddingHorizontal: 10, paddingVertical: 5, }]}>
            <View style={[layout.row, { alignItems: 'center', justifyContent: 'flex-start', width: 120}]}>
              <Icon name="md-list-box"
                    size={20}
                    color={"#9299A7"}
              />
              <Text style={[{ fontFamily: font.regular, marginLeft: 5, }]}>
                Төслийн биелэлт
              </Text>
            </View> 

            <View style={[layout.row, layout.centerEnd, { flex: 1, }]}>
              <Text style={[{ fontFamily: font.heavy, color: variables.BRAND_GRAY}]}>
                <Text style={[{ fontSize: 16, color: variables.BRAND_BLACK }]}>{project.milestones.success}</Text>
                  /{project.milestones.total}
              </Text>
            </View>
          </View>         
              
          <Progress.Bar progress={project.milestones.success / project.milestones.total} 
                        borderColor={variables.BRAND_GREEN}
                        color={variables.BRAND_GREEN}
                        width={screen.width - 40}
                        height={4}
                        borderRadius={3}/>

          <View style={[layout.row, layout.centerCenter, { height: 60, paddingVertical: 20, }]}>
              <View style={[layout.centerCenter, styles.avatarContainer]}>
                  <Image style={styles.avatar}
                         source={{ uri: project.hirer.avatar_url}}
                  />
              </View>
              <View style={[layout.row, { flex: 1, }]}>
                  <Text style={[{fontFamily: font.regular}]}>{project.hirer.first_name} {project.hirer.last_name}</Text>

                    <View style={[layout.row, layout.centerBetween, { flex: 1, paddingRight: 10, }]}>
                    <View />
                    <TouchableOpacity style={[layout.centerCenter, { width: 35, height: 35, borderRadius:35, /*backgroundColor: variables.BRAND_GREEN*/ }]}>
                        <Icon name="ios-chatboxes" 
                              size={24}
                              color="#9299A7"/>
                    </TouchableOpacity>
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
        //flex: 1,
        backgroundColor: variables.BRAND_WHITE,
        borderRadius: 10,
        flex: 1,
    },

    imageContainer: {
      height: 200,
      width: screen.width,
      backgroundColor: '#efefef',
    },

    image: {
      height: null,
      width: null,
      flex: 1,
      borderRadius: 10,
    },

    circleIndicator: {
        width: 15,
        height: 15,
        borderRadius: 5,
        borderWidth: 3,
    },

    avatarContainer: {
        height: 40,
        width: 50,
    },

    avatar: {
        height: 30,
        width: 30,
        borderRadius: 30,
    }
})

ProjectCardWorking.propTypes = {
	project: PropTypes.object,
}
