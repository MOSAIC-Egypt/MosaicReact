import React, { Component } from 'react';
import { Text, View, Dimensions, Image } from 'react-native';

import MainContainer from '../components/MainContainer';
import TopBar from './TopBar';
import logo from '../assets/images/orangeLogo.png';


class About extends Component {

  static get options() {
    return TopBar('About');
  }

  render() {
    return (
      <MainContainer>
                
        <View style={styles.view1}>
        
          <Image source={logo} style={styles.img}/>
          <Text/>
          <Text style={styles.texth1}> Application Description  </Text>
          <Text style={styles.texth2}>Connect aims to provide MSC employees' with a new digital 
          experience which makes your life easier and develop your well-being at work.You will find everything related to MSC
          all in one application.</Text>
          
          <Text/>
          <Text style={styles.texth1}>Developed by OBS IT Cairo Team</Text>
          
          <Text style={styles.texth2}> For Help And Support Check Our Subspace on Plaza</Text>
          
          <Text style={styles.texth2o}> Connect-Egypt MSC App Support</Text>
          
          <Text style={styles.texth3}> MSC Application Version 4</Text>

        </View>
        
      </MainContainer>
    );
  }
}

const styles = {
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  texth2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },

  texth1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

  texth3: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },

  texth2o: {
    color: 'rgb(255,102,0)',
    textAlign: 'center',
  },

  img: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2,
    resizeMode: 'contain',
  },
};


export default About;
