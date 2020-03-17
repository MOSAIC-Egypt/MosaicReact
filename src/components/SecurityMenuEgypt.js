import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Linking,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Image from 'react-native-scalable-image';

import MainContainer from './MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


class Security extends Component {

  static get options() {
    return TopBar('Security');
  }

  render(){
  return (
    <MainContainer>
       <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'CSGPage',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'csgs.png')}
            width={Dimensions.get('window').width * 0.475}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/SecurityAwareness2019.pptx')
                    }>
          <Image
            source={require(imagesPath + 'securityAwareness.png')}
            width={Dimensions.get('window').width * 0.475}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
                        component: {
                          name: 'TravelSecurity',
                        }})
                    }>
          <Image
            source={require(imagesPath + 'travelSecurity.png')}
            width={Dimensions.get('window').width * 0.965 }
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
  });

export default Security;
