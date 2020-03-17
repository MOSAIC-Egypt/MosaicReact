import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions, Image, Linking} from 'react-native';
import {Navigation} from 'react-native-navigation';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';

const imagesPath = '../assets/images/';
const w = Dimensions.get('window').width;

class PerformanceMenu extends Component {
  static get options() {
    return TopBar('Performance');
  }

  render() {
    return (
      <MainContainer>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                          component: {
                            name: 'ReviewSteps',
                          }})
                      } style={{justifyContent:'center', alignItems:'center'}}>
            <Image
              source={require(imagesPath + 'reviewSteps.png')}
              style={{width: w * 0.98, height: '100%', resizeMode: 'stretch'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                          component: {
                            name: 'ObjectiveDocument',
                          }})
                      } style={{justifyContent: 'center', alignItems: 'center', marginRight:'1.25%'}}>
            <Image
              source={require(imagesPath + 'objectivedoc.png')}
              style={{width: w * 0.4825, height:'100%', resizeMode:'stretch'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>  Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/PerformanceReview.ppt')
                      } style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require(imagesPath + 'tips.png')}
              style={{width: w * 0.4825, height:'100%', resizeMode:'stretch'}}
              />
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                          component: {
                            name: 'RatingsDefinition',
                          }})
                      } style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require(imagesPath + 'performanceRating.png')}
              style={{width: w * 0.98, height:'100%', resizeMode:'stretch'}}
            />
          </TouchableOpacity>
        </View>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({

  innerContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: '2%',
    height: Dimensions.get('window').height * 0.1,
  },

  innerContainer2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: '2%',
    marginLeft: '2%',
  },

});

export default PerformanceMenu;
