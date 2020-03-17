import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
const imagesPath = '../assets/images/';


class NewComers extends Component {
  static get options() {
    return TopBar('New Comers');
  }

  render() {
    return (
      <MainContainer>
        <View style = {styles.innerContainer}>
          <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, {
            component: {
              name: 'OurLocationPage',
            }})
          }
            style = {styles.button1}
          >
            <Image
              source = {require(imagesPath + 'ourLocation.png')}
              style = {styles.img}
              />
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {() => Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/Hiring_Docs_English.doc')}
            style = {styles.button2}
          >
            <Image
              source = {require(imagesPath + 'documents.png')}
              style = {styles.img}
            />
          </TouchableOpacity>
        </View>

        <View style = {styles.innerContainer2}>
          <TouchableOpacity
            onPress = {() => Linking.openURL('mailto:askhr.helpdesk@orange.com')}
            style = {styles.button3}
          >
            <Image
              source = {require(imagesPath + 'contactHR.png')}
              style = {styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://tt-gateway.equant.com/emmaws/docs/Employee_Handbook_Egypt_V5.1.pdf')}
            style = {styles.button4}
            >
            <Image
              source={require(imagesPath + 'handbook.png')}
              style = {styles.img}
            />
          </TouchableOpacity>
        </View>
      </MainContainer>
    );
  }
}

const styles = StyleSheet.create({

  innerContainer: {
    height: Dimensions.get('window').height * 0.160,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    marginBottom: '2%',
  },
  innerContainer2: {
    height: Dimensions.get('window').height * 0.130,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    marginBottom: '2%',
  },
  button1: {
    flex: 430,
    marginLeft: '1%',
    marginRight: '0.5%',
  },

  button2: {
    flex: 235,
    alignItems: 'flex-end',
    marginRight: '1%',
    marginLeft: '0.5%',
  },

  button3: {
    flex: 3,
    marginLeft: '1%',
    marginRight: '0.5%',
  },

  button4: {
    flex: 5,
    alignItems: 'flex-end',
    marginRight: '1%',
    marginLeft: '0.5%',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },

});

export default NewComers;
