import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import MainContainer from './MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


class ConnectMenu extends Component {
  static get options() {
    return TopBar('Connect');
  }

  render() {
    return (
      <MainContainer>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://plazza.orange.com/groups/cairoconnect/')}>
            <Image
              source={require(imagesPath + 'connectspace.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://plazza.orange.com/docs/DOC-917713')}>
            <Image
              source={require(imagesPath + 'mom.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer2}>
          <TouchableOpacity
            onPress={() => Navigation.push(this.props.componentId, {
              component: {
                name: 'ConnectTeamPage',
              }
            })}
          >
            <Image
              source={require(imagesPath + 'connectTeam.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:cairo_connect@list2.orange.com')}>
            <Image
              source={require(imagesPath + 'askConnect.png')}
              style={styles.img}
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

    img: {
      width: Dimensions.get('window').width * 0.475,
      height: Dimensions.get('window').height * 0.155,
      resizeMode: 'contain',
    },

  });

export default ConnectMenu;
