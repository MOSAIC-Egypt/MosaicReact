import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


class EmergencyMenu extends Component {
  static get options() {
    return TopBar('Emergency');
  }

  render() {
    return (
      <MainContainer>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                          component: {
                            name: 'EmergencyContacts',
                          }})
                      }>
            <Image
              source={require(imagesPath + 'emergencyContacts.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                          component: {
                            name: 'FireSteps',
                          }})
                      }>
            <Image
              source={require(imagesPath + 'fireSteps.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  headerstyle: {
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  fireStepsbutton: {
    marginLeft: '1%',
  },
  img: {
    width: Dimensions.get('window').width * 0.475,
    height: Dimensions.get('window').height * 0.155,
    resizeMode: 'contain',
  },
});

export default EmergencyMenu;
