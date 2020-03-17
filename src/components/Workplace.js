import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity, Linking} from 'react-native';
import Image from 'react-native-scalable-image';
import {Navigation} from 'react-native-navigation';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


class Workplace extends Component {

  static get options() {
    return TopBar('Workplace');
  }

  render(){
  return (
    <MainContainer>
      <View style={styles.innerContainer}>
      <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'Cafeteria',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'cafeteria.png')}
            width={Dimensions.get('window').width * 0.475}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'DirectoryEgypt',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'directoryWP.png')}
            width={Dimensions.get('window').width * 0.475}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer2}>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:cairo.front.office@orange.com')
                    }>
          <Image
            source={require(imagesPath + 'huddle.png')}
            width={Dimensions.get('window').width * 0.965}
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
  innerContainer2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: '2%',
  },
  fireStepsbutton: {
    marginLeft: '1%',
  },
});

export default Workplace;
