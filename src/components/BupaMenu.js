import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import MainContainer from './MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


class BupaMenu extends Component {
  static get options() {
    return TopBar('Bupa Menu');
  }

  render() {
    return (
      <MainContainer>

        <View style={styles.innerContainer}>

          <TouchableOpacity onPress={()=> {
            Linking.openURL('https://plazza.orange.com/login.jspa?referer=%252Fdocs%252FDOC-868392%253Fet%253Dwatches.email.document');
          }}>
            <Image
              source={require(imagesPath + 'bupaClaims.png')}
              style={styles.smallImg}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/MembersWorld%20Claims.pdf')}>
            <Image
              source={require(imagesPath + 'bupaFAQs.png')}
              style={styles.smallImg}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.innerContainer2}>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.bupaglobal.com/en/facilities/finder')}>
            <Image
              source={require(imagesPath + 'bupaProviders.png')}
              style={styles.largeImg}
            />
        </TouchableOpacity>

        </View>

        <View>
          <Text style={styles.texth1}> For more info check BUPA website </Text>

          <TouchableOpacity onPress={() => Linking.openURL('https://www.bupaglobal.com')}>
            <Text style={styles.texth2}> https://www.bupaglobal.com </Text>
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

      texth1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
      },

      texth2: {
        color: 'rgb(255,102,0)',
        textAlign: 'center',
        fontSize: 16,
      },

      ////////// Images //////////
      smallImg: {
        width: Dimensions.get('window').width * 0.475,
        height: Dimensions.get('window').height * 0.157,
        resizeMode: 'contain',
      },

      largeImg: {
        width: Dimensions.get('window').width * 0.965,
        height: Dimensions.get('window').height * 0.112,
        resizeMode: 'contain',
        marginBottom: '10%',
      },

  });


export default BupaMenu;
