import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import Image from 'react-native-scalable-image';
import {Navigation} from 'react-native-navigation';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


 class ServicesMenu extends Component {

  static get options() {
    return TopBar('Services');
  }

  render(){
  return (
    <MainContainer>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'ConnectMenu',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'connectinitiative.png')}
            width={Dimensions.get('window').width * 0.475}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'SecurityMenuEgypt',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'securityIcon.png')}
            width={Dimensions.get('window').width * 0.475}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer2}>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'BupaMenu',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'Bupa.png')}
            width={Dimensions.get('window').width * 0.475}
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
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: '2%',
  },
  innerContainer2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: '2%',
    marginLeft: '2%',

  },
});

export default ServicesMenu;
