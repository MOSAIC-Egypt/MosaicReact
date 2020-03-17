import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Image from 'react-native-scalable-image';

import MainContainer from './MainContainer';
import SecOrganizationImg from '../assets/images/securityOrganization.png';
import TopBar from './TopBar';


class Security extends Component {

  static get options() {
    return TopBar('Security');
  }

  render(){
  return (
    <MainContainer>
      <View style={styles.line}/>
                    <TouchableOpacity style={styles.buttonimage} onPress={() =>
                    Navigation.push(this.props.componentId, {
                        component: {
                          name: 'SecurityOrganization',
                        }})
                    }>
                        <Image source={SecOrganizationImg}
                        width={Dimensions.get('window').width}/>
                    </TouchableOpacity>
    </MainContainer>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  imageStyle:{
    marginTop:50,
    justifyContent:'flex-start',
  },
  buttonimage:{
    paddingTop: '5%',
  },
});

export default Security;
